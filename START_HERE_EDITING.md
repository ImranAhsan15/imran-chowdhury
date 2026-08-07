# START HERE — Edit the Compact StoryMap Portfolio

This version is designed for fast academic review. The main pages use a compact StoryMap layout: a visual index on the left and short two-column records on the right. Professors can scan the overview quickly and open a detailed record only when needed.

## Main navigation

1. Home
2. Research
3. Publication
4. Teaching
5. Expertise
6. Training & Certification
7. Contact & CV
8. Useful Links
9. News

## Current focused content

- **Teaching:** DTE Training, BARC Training, and Esri Bangladesh.
- **Expertise:** UAV, USV and Field Survey; Urban Planning; Web and Automation; Visual Communication.
- **Training & Certification:** kept separate from teaching delivery.
- **Useful Links:** CV, research, publication, and contact routes. Verified Google Scholar, ORCID, GitHub, LinkedIn, and ResearchGate links appear after you add their URLs.
- **News:** short dated academic and research updates.

## Easiest editing method

1. Double-click `OPEN_CONTENT_EDITOR.bat`.
2. Edit the common profile, research, publication, teaching, training, expertise, and image content.
3. Click **Download updated site-data.js**.
4. Replace `assets/js/site-data.js` with the downloaded file.
5. Put new images inside `assets/uploads/images/`.
6. Double-click `PREVIEW_WEBSITE.bat`.

## Editing the new Useful Links and News sections

Open `assets/js/site-data.js` in a text editor and find:

- `"usefulLinks"`
- `"news"`

Copy an existing item, change its text, and keep the same commas and quotation marks. Do not add an external profile URL until it is verified.

## Adding your portrait

1. Copy the portrait to `assets/uploads/images/`.
2. Open `content-editor.html`.
3. In **Profile → Portrait image path**, enter a path such as `assets/uploads/images/imran-profile.jpg`.
4. Download and replace `assets/js/site-data.js`.

A vertical or nearly square portrait works best.

## Files normally edited

- `assets/js/site-data.js` — website content
- `assets/uploads/images/` — photographs, maps, and figures
- `assets/uploads/documents/` — CV and public documents

Avoid editing `storymap.js`, `site.js`, or `styles.css` unless you want to change the design or navigation.
