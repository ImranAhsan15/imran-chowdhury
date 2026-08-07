"""Public-safe portfolio version of the supplied traffic-counting prototype.

Configure VIDEO_PATH and YOLO_WEIGHTS before running. The implementation
preserves the core workflow from the submitted source: YOLOv8 detection,
DeepSORT tracking, direction-based line crossing, class-wise counts, annotated
video output, and CSV event logging.
"""

from collections import defaultdict
from datetime import datetime
from pathlib import Path

import cv2
import cvzone
import pandas as pd
import torch
from deep_sort_realtime.deepsort_tracker import DeepSort
from ultralytics import YOLO

# ---------------- Configuration ----------------
VIDEO_PATH = Path("input/traffic_video.mp4")
YOLO_WEIGHTS = Path("weights/yolov8l.pt")
OUTPUT_VIDEO = Path("output/traffic_counting.avi")
OUTPUT_EVENTS = Path("output/traffic_events.csv")

CONF_THRES = 0.40
IOU_THRES = 0.45
IMG_SIZE = 1280
DETECT_CLASSES = {2, 3, 5, 7}  # car, motorcycle, bus, truck

# Fixed counting lines for the supplied 1366 × 768 video.
LINE_LEFT_A, LINE_LEFT_B = (150, 470), (630, 470)
LINE_RIGHT_A, LINE_RIGHT_B = (660, 470), (1230, 470)
LINE_TOLERANCE = 4
MIN_Y_CHANGE = 1
COOLDOWN_FRAMES = 15

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
model = YOLO(str(YOLO_WEIGHTS)).to(DEVICE)
tracker = DeepSort(
    max_age=30,
    n_init=2,
    max_cosine_distance=0.4,
    nn_budget=100,
    embedder="mobilenet",
    half=True,
    bgr=True,
    embedder_gpu=(DEVICE == "cuda"),
)
class_names = model.names

cap = cv2.VideoCapture(str(VIDEO_PATH))
fps = cap.get(cv2.CAP_PROP_FPS) or 30
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
OUTPUT_VIDEO.parent.mkdir(parents=True, exist_ok=True)
writer = cv2.VideoWriter(
    str(OUTPUT_VIDEO), cv2.VideoWriter_fourcc(*"MJPG"), fps, (width, height)
)

last_centroid = {}
last_cross_frame = defaultdict(lambda: -9999)
counts_left = defaultdict(lambda: {"IN": 0})
counts_right = defaultdict(lambda: {"OUT": 0})
event_logs = []
frame_idx = 0

while True:
    ok, frame = cap.read()
    if not ok:
        break
    frame_idx += 1

    results = model.predict(
        frame,
        conf=CONF_THRES,
        iou=IOU_THRES,
        imgsz=IMG_SIZE,
        verbose=False,
        device=DEVICE,
    )

    detections = []
    for result in results:
        if result.boxes is None:
            continue
        for box in result.boxes:
            class_id = int(box.cls)
            confidence = float(box.conf)
            if class_id in DETECT_CLASSES and confidence >= CONF_THRES:
                x1, y1, x2, y2 = map(float, box.xyxy[0])
                detections.append(([x1, y1, x2 - x1, y2 - y1], confidence, class_id))

    tracks = tracker.update_tracks(detections, frame=frame)

    cv2.line(frame, LINE_LEFT_A, LINE_LEFT_B, (0, 255, 0), 3)
    cv2.line(frame, LINE_RIGHT_A, LINE_RIGHT_B, (0, 0, 255), 3)

    for track in tracks:
        if not track.is_confirmed() or track.time_since_update > 0:
            continue

        track_id = track.track_id
        x1, y1, x2, y2 = map(int, track.to_ltrb())
        cx, cy = int((x1 + x2) / 2), int((y1 + y2) / 2)
        class_id = int(getattr(track, "det_class", 2))
        class_name = class_names.get(class_id, "vehicle")

        cvzone.cornerRect(frame, (x1, y1, x2 - x1, y2 - y1), l=5, rt=2)
        cv2.putText(
            frame,
            f"ID {track_id} {class_name}",
            (x1, max(20, y1 - 7)),
            cv2.FONT_HERSHEY_PLAIN,
            2,
            (50, 50, 255),
            2,
        )

        if track_id in last_centroid:
            _, previous_y = last_centroid[track_id]

            crossed_left = (
                abs(cy - LINE_LEFT_A[1]) <= LINE_TOLERANCE
                and previous_y > LINE_LEFT_A[1]
                and cy <= LINE_LEFT_A[1]
                and abs(previous_y - cy) > MIN_Y_CHANGE
            )
            crossed_right = (
                abs(cy - LINE_RIGHT_A[1]) <= LINE_TOLERANCE
                and previous_y < LINE_RIGHT_A[1]
                and cy >= LINE_RIGHT_A[1]
                and abs(previous_y - cy) > MIN_Y_CHANGE
            )

            if frame_idx - last_cross_frame[track_id] > COOLDOWN_FRAMES:
                direction = None
                if crossed_left:
                    counts_left[class_name]["IN"] += 1
                    direction = "LEFT_IN"
                elif crossed_right:
                    counts_right[class_name]["OUT"] += 1
                    direction = "RIGHT_OUT"

                if direction:
                    last_cross_frame[track_id] = frame_idx
                    event_logs.append(
                        {
                            "timestamp": datetime.now().isoformat(timespec="seconds"),
                            "track_id": track_id,
                            "class": class_name,
                            "direction": direction,
                        }
                    )

        last_centroid[track_id] = (cx, cy)

    writer.write(frame)

cap.release()
writer.release()

if event_logs:
    OUTPUT_EVENTS.parent.mkdir(parents=True, exist_ok=True)
    pd.DataFrame(event_logs).to_csv(OUTPUT_EVENTS, index=False)
