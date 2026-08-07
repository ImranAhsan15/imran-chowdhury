// MAIN WEBSITE CONTENT
// Use content-editor.html for common updates without coding.
window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Shah Imran Ahsan Chowdhury",
    "shortName": "Imran Chowdhury",
    "role": "GIS Analyst · Geospatial Programmer · GeoAI Researcher",
    "organization": "Esri Bangladesh",
    "location": "Dhaka, Bangladesh",
    "email": "imran.chowdhury2804@gmail.com",
    "workEmail": "c.imran@esrisa.com",
    "availability": "Open to fully funded PhD opportunities for Fall 2027",
    "portrait": "assets/images/portfolio/profile-geospatial-work.webp",
    "bio": "I work at the intersection of geospatial artificial intelligence, remote sensing, computer vision, spatial data engineering, and operational GIS. My research focuses on making AI-derived geospatial products more reliable, interpretable, and transferable across locations.",
    "longBio": [
      "My academic background combines Urban and Regional Planning with graduate training in Computer Science, while my professional work at Esri Bangladesh connects research methods with real-world geospatial systems.",
      "I develop ArcPy automation, imagery workflows, WebGIS applications, spatial databases, and quality-control methods for vector and raster data. My current MSc research investigates object-level quality screening of UAV-derived building footprints using geometric, contextual, and raster-based features.",
      "For doctoral study, I am interested in multimodal GeoAI, geospatial foundation models, graph learning for vector GIS, spatial transferability, uncertainty-aware mapping, and AI-supported urban and infrastructure intelligence."
    ],
    "links": {
      "github": "",
      "linkedin": "",
      "scholar": "",
      "orcid": "",
      "researchgate": ""
    }
  },
  "stats": [
    {
      "value": "5+ Years",
      "label": "GIS and Remote Sensing experience"
    },
    {
      "value": "3",
      "label": "Q1 journal publications"
    },
    {
      "value": "7.5",
      "label": "IELTS score"
    },
    {
      "value": "MSc in CSE (CGPA 3.8)",
      "label": "BSc in URP, CGPA 3.18"
    },
    {
      "value": "Certified",
      "label": "UAV Pilot"
    },
    {
      "value": "GIS Analyst",
      "label": "Esri Bangladesh",
      "image": "assets/images/esri-bangladesh-logo.jpg",
      "alt": "Esri Bangladesh logo"
    }
  ],
  "interests": [
    "Geospatial foundation models",
    "GeoAI quality assurance",
    "UAV remote sensing",
    "Spatial machine learning",
    "Graph neural networks for vector GIS",
    "Computer vision",
    "Urban and infrastructure intelligence",
    "Geoprocessing automation",
    "WebGIS"
  ],
  "academicSnapshot": [
    {
      "label": "Current position",
      "value": "GIS Analyst",
      "meta": "Professional Services · Esri Bangladesh"
    },
    {
      "label": "Graduate training",
      "value": "MSc in Computer Science",
      "meta": "AI, ML, computer vision, and spatial databases"
    },
    {
      "label": "Research focus",
      "value": "Operational GeoAI",
      "meta": "Remote sensing, vector quality, and spatial transferability"
    },
    {
      "label": "Doctoral target",
      "value": "Fall 2027",
      "meta": "Fully funded PhD opportunity"
    }
  ],
  "researchThemes": [
    {
      "id": "geoai-quality",
      "title": "GeoAI and spatial-data quality",
      "image": "assets/images/projects/ongoing/geofm-building.svg",
      "description": "I investigate how deep-learning outputs can be evaluated and improved after inference so that they become trustworthy GIS objects rather than visually convincing but unreliable masks.",
      "methods": [
        "UAV imagery",
        "Semantic segmentation",
        "Object-level feature engineering",
        "Machine learning",
        "Independent-site evaluation"
      ],
      "related": [
        "Building-footprint GeoAI quality control",
        "Spatial transferability and uncertainty-aware mapping"
      ]
    },
    {
      "id": "earth-observation",
      "title": "Remote sensing and environmental change",
      "image": "assets/images/projects/ongoing/representative-sampling.svg",
      "description": "I use multisource Earth-observation data to study land-cover dynamics, vegetation change, coastal and wetland processes, and the planning implications of environmental transformation.",
      "methods": [
        "LULC mapping",
        "Time-series analysis",
        "Change detection",
        "CA–Markov modeling",
        "Environmental valuation"
      ],
      "related": [
        "Chalan Beel land-cover change",
        "Coastal landscape and vegetation-change publications"
      ]
    },
    {
      "id": "urban-intelligence",
      "title": "Urban and infrastructure intelligence",
      "image": "assets/images/traffic-ai.svg",
      "description": "This theme connects computer vision and spatial analysis with urban systems, including buildings, roads, transportation monitoring, service access, and resilient infrastructure databases.",
      "methods": [
        "Object detection",
        "Tracking",
        "Network analysis",
        "Urban analytics",
        "Spatial planning"
      ],
      "related": [
        "Vehicle detection from UAV video",
        "UAV road-network extraction"
      ]
    },
    {
      "id": "operational-gis",
      "title": "GIS automation and operational geospatial systems",
      "image": "assets/images/webgis.svg",
      "description": "I translate analytical methods into maintainable geoprocessing tools, WebGIS applications, cartographic workflows, and quality-assurance procedures for real production environments.",
      "methods": [
        "ArcPy",
        "ArcGIS Pro",
        "Enterprise GIS",
        "WebGIS",
        "Cartographic generalization"
      ],
      "related": [
        "Enterprise WebGIS and automation",
        "Scale-aware cartographic generalization"
      ]
    }
  ],
  "researchPillars": [
    {
      "title": "Multimodal geospatial learning",
      "text": "Integrating imagery, vector geometry, topology, neighborhood context, terrain, and domain knowledge."
    },
    {
      "title": "Spatial transferability",
      "text": "Evaluating geographic distribution shifts across regions, sensors, urban forms, and time."
    },
    {
      "title": "Operational GeoAI",
      "text": "Turning model outputs into reproducible GIS workflows, quality indicators, and decision-ready databases."
    }
  ],
  "featuredResearch": {
    "title": "GeoAI-based post-segmentation quality control for UAV-derived building footprints",
    "status": "Completed Research · Manuscript Under Review in a Q1 Journal",
    "image": "assets/images/research-cards/building-footprint-card-combined.png",
    "overview": "A post-segmentation framework that treats deep-learning outputs as candidate GIS objects rather than final products. U-Net and SAM-LoRA masks are vectorized, regularized, consolidated, enriched with 24 object-level descriptors, and screened using machine learning on a geographically independent test site.",
    "details": [
      "Five 15-cm RGB UAV orthophoto sites in Dhaka Division",
      "U-Net with ResNet-34 and SAM-LoRA with ViT-B",
      "12 geometric, 6 contextual, and 6 raster-derived predictors",
      "Decision Tree, Random Trees, and XGBoost comparisons",
      "Independent Site E testing for spatial transferability"
    ],
    "outcomes": [
      {
        "value": "95.31%",
        "label": "Accuracy"
      },
      {
        "value": "91.06%",
        "label": "F1-score"
      },
      {
        "value": "0.880",
        "label": "MCC"
      },
      {
        "value": "27.32% → 4.62%",
        "label": "Retained error rate"
      },
      {
        "value": "72.68% → 95.38%",
        "label": "Database purity"
      }
    ],
    "contribution": "The framework links segmentation, GIS vector processing, multidomain feature engineering, spatially exclusive consolidation, independent-site evaluation, and database-level quality indicators in one reproducible workflow."
  },
  "projects": [
    {
      "category": "research",
      "slug": "building-footprint",
      "title": "GeoAI-based post-segmentation quality control for UAV-derived building footprints",
      "type": "Completed Research · GeoAI · UAV Remote Sensing · Manuscript Under Review in a Q1 Journal",
      "image": "assets/images/research-cards/building-footprint-card-combined.png",
      "summary": "Develops an object-level post-segmentation framework for screening and improving UAV-derived building footprints generated from U-Net and SAM-LoRA outputs.",
      "impact": "Connects deep learning, GIS vector processing, multidomain feature engineering, independent-site validation, and database-level quality assessment in a reproducible workflow.",
      "tags": [
        "GeoAI",
        "UAV",
        "U-Net",
        "SAM-LoRA",
        "XGBoost"
      ],
      "page": "project-building-footprint.html"
    },
    {
      "category": "research",
      "slug": "geofm-building",
      "title": "Geospatial Foundation Model–Enhanced GeoAI for Reliable Building-Footprint Mapping",
      "type": "Ongoing Research · GeoAI · UAV Remote Sensing · Geospatial Foundation Models",
      "image": "assets/images/research-cards/geofm-building.png",
      "summary": "Integrates high-resolution UAV imagery with geospatial foundation-model representations to improve the reliability of automatically generated building footprints.",
      "impact": "Explores how broader semantic and geographic context can reduce uncertain detections while preserving detailed UAV-derived boundaries.",
      "tags": ["GeoAI", "GeoFM", "UAV", "Building Footprints"],
      "page": "project-geofm-building.html"
    },
    {
      "category": "research",
      "slug": "representative-sampling",
      "title": "Spatially Representative Training-Sample Selection for Large-Area Satellite Imagery",
      "type": "Ongoing Research · GeoAI · Remote Sensing · Training-Data Optimization",
      "image": "assets/images/research-cards/representative-sampling.png",
      "summary": "Investigates how a limited but geographically distributed set of reference areas can represent a much larger high-resolution satellite image.",
      "impact": "Targets lower annotation effort, reduced sampling bias, and stronger geographic reliability for large-area GeoAI models.",
      "tags": ["GeoAI", "Sampling", "Satellite Imagery", "Training Data"],
      "page": "project-representative-sampling.html"
    },
    {
      "category": "research",
      "slug": "geospatial-llm-safety",
      "title": "Geospatial Large Language Models for Public-Safety and Natural-Disaster Response",
      "type": "Ongoing Research · Geospatial LLM · GeoAI · Spatial Decision Support",
      "image": "assets/images/research-cards/geospatial-llm-safety.png",
      "summary": "Investigates how large language models can interact with verified geospatial information and analytical capabilities for public-safety and disaster-response support.",
      "impact": "Emphasizes geographic grounding, traceable spatial evidence, human validation, uncertainty communication, and responsible AI.",
      "tags": ["Geospatial LLM", "GeoAI", "Public Safety", "Responsible AI"],
      "page": "project-geospatial-llm-safety.html"
    },
    {
      "category": "research",
      "slug": "road-extraction",
      "title": "GeoAI and Graph-Based Road-Network Intelligence from UAV Imagery",
      "type": "Ongoing Research · GeoAI · UAV Remote Sensing · Geospatial Graph Learning",
      "image": "assets/images/research-cards/road-extraction.png",
      "summary": "Integrates high-resolution UAV imagery with graph-based geospatial intelligence for reliable road-network mapping and database improvement.",
      "impact": "Extends image-based extraction toward continuity, relational structure, network completeness, and practical geospatial-database quality.",
      "tags": ["GeoAI", "UAV", "Graph Learning", "Road Networks"],
      "page": "project-uav-roads.html"
    },
    {
      "category": "research",
      "slug": "traffic",
      "title": "Vehicle detection and counting from UAV video",
      "type": "Computer-vision project",
      "image": "assets/images/traffic-ai.svg",
      "summary": "YOLOv8 and DeepSORT workflow for detecting, tracking, and counting vehicles from aerial footage.",
      "impact": "Connects UAV sensing with repeatable transportation analytics.",
      "tags": [
        "YOLOv8",
        "DeepSORT",
        "Tracking",
        "Traffic"
      ],
      "page": "research.html#traffic"
    },
    {
      "category": "research",
      "slug": "wetland",
      "title": "Land-cover change and ecosystem valuation in Chalan Beel",
      "type": "Undergraduate Thesis · Completed 2020",
      "image": "assets/images/projects/wetland/wetland-hero.webp",
      "summary": "An integrated assessment of seasonal land-cover change, CA–Markov-based 2039 scenarios, aerosol-index variation, and ecosystem-service valuation in Chalan Beel.",
      "impact": "Combined remote sensing, spatial modelling, environmental economics, and field-based conservation analysis.",
      "tags": [
        "LULC",
        "CA–Markov",
        "Wetland",
        "Planning"
      ],
      "page": "project-wetland.html"
    },
    {
      "category": "professional",
      "slug": "webgis",
      "title": "Enterprise WebGIS and geoprocessing automation",
      "type": "Selected professional work",
      "image": "assets/images/webgis.svg",
      "summary": "ArcGIS-based WebGIS, automated tools, dashboards, spatial databases, and client-ready geospatial products.",
      "impact": "Bridges research-grade methods with maintainable operational systems.",
      "tags": [
        "ArcGIS",
        "ArcPy",
        "JavaScript",
        "Automation"
      ],
      "page": "professional-work.html"
    },
    {
      "category": "professional",
      "slug": "cartography",
      "title": "Scale-aware cartographic generalization",
      "type": "Professional GIS automation",
      "image": "assets/images/cartography.svg",
      "summary": "ArcPy workflows for road thinning, feature processing, map production, QA/QC, and migration of legacy scripts.",
      "impact": "Improves repeatability in multi-scale mapping production.",
      "tags": [
        "ArcPy",
        "Cartography",
        "Generalization",
        "QA/QC"
      ],
      "page": "professional-work.html#cartography"
    }
  ],
  "publications": [
    {
      "year": "2024",
      "published": "08 October 2024",
      "issueDate": "June 2026",
      "title": "Greening and browning trend with physio-climatic drivers in Chattogram division, Bangladesh",
      "authors": "Rashid, K.J., Tuli, R.D., Nasher, N.M.R., Akter, T., Karim, K.H.R., Hasan, M.M., Talha, M., Chowdhury, S.I.A., and Musharrat, M.",
      "journal": "Environment, Development and Sustainability",
      "publisher": "Springer Nature",
      "record": "Volume 28 · pp. 13407–13429",
      "doi": "10.1007/s10668-024-05505-5",
      "url": "https://link.springer.com/article/10.1007/s10668-024-05505-5",
      "topic": "Vegetation trends and environmental drivers",
      "image": "assets/images/publication-covers/env-development-sustainability.webp"
    },
    {
      "year": "2024",
      "published": "October 2024",
      "title": "Implications of Jhau forest deforestation on coastal landscape ecology and climate change adaptation in Cox’s Bazar, Bangladesh",
      "authors": "Biswas, R.N., Rashid, K.J., Ullah, M.A., and Chowdhury, S.I.A.",
      "journal": "Ecological Frontiers",
      "publisher": "Elsevier",
      "record": "Volume 44, Issue 5 · pp. 1027–1051",
      "doi": "10.1016/j.ecofro.2024.05.006",
      "url": "https://www.sciencedirect.com/science/article/pii/S2950509724000595",
      "topic": "Coastal landscape ecology and adaptation",
      "image": "assets/images/publication-covers/ecological-frontiers.jpg"
    },
    {
      "year": "2023",
      "published": "2023",
      "title": "Effects of rising seas and geomorphological changes in the islands of northern Bay of Bengal",
      "authors": "Biswas, R.N., Islam, M.S., Miah, S., Lasker, M.S., Kar, S.R., Rashid, K.J., Rahman, S., Mia, M.J., Kanak, F.A., Chowdhury, S.I.A., and Jahan, M.N.",
      "journal": "Regional Studies in Marine Science",
      "publisher": "Elsevier",
      "record": "Volume 68 · Article 103250",
      "doi": "10.1016/j.rsma.2023.103250",
      "url": "https://www.sciencedirect.com/science/article/pii/S2352485523004401",
      "topic": "Sea-level rise and island geomorphology",
      "image": "assets/images/publication-covers/regional-studies-marine-science.jpg"
    }
  ],
  "experience": [
    {
      "period": "July 2024 – Present",
      "role": "GIS Analyst, Professional Services",
      "organization": "Esri Bangladesh",
      "location": "Dhaka, Bangladesh",
      "image": "assets/images/portfolio/stereo-station-workflow.webp",
      "details": [
        "Develop geoprocessing automation and imagery, remote-sensing, UAV, and GeoAI workflows using ArcGIS Pro, ArcPy, and the ArcGIS ecosystem.",
        "Prepare and quality-check raster/vector data, geodatabases, web maps, dashboards, and client-ready GIS deliverables.",
        "Collaborate with regional Esri teams on professional-service solutions, scale-dependent cartographic workflows, and WebGIS products.",
        "Delivered ArcGIS Pro: Essential Workflows training to official and professional participants, guided hands-on exercises, evaluated practical performance, and provided technical feedback.",
        "Translate repetitive GIS production tasks into tested, reusable Python-based tools."
      ]
    },
    {
      "period": "March 2021 – June 2024",
      "role": "Research Consultant, Remote Sensing Division",
      "organization": "Center for Environmental and Geographic Information Services (CEGIS)",
      "location": "Dhaka, Bangladesh",
      "image": "assets/images/portfolio/uav-equipment-workflow.webp",
      "details": [
        "Processed satellite imagery and produced LULC, environmental, hydrological, and spatiotemporal analysis outputs.",
        "Created Python geoprocessing tools and automated spatial-data preparation and analytical workflows.",
        "Supported UAV flight planning, drone surveys, imagery handling, geodatabase development, and WebGIS dashboard components.",
        "Delivered practical instruction on drone operation and UAV survey workflows, including field procedures, safe operation, mission preparation, and participant guidance.",
        "Contributed to multidisciplinary environmental and geospatial projects."
      ]
    },
    {
      "period": "March 2016 – November 2020",
      "role": "Teaching Assistant / Tutor",
      "organization": "Undergraduate teaching experience",
      "location": "Bangladesh",
      "details": [
        "Taught physics and higher mathematics in small-group settings.",
        "Prepared problem-solving sessions, graded assessments, and provided individual academic feedback.",
        "Covered mechanics, thermodynamics, electromagnetism, optics, vector calculus, coordinate geometry, differential equations, and linear algebra."
      ]
    }
  ],
  "education": [
    {
      "period": "2025–2026",
      "degree": "Master of Science in Computer Science",
      "institution": "Jahangirnagar University",
      "focus": "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Digital Image Processing, and Spatial Databases",
      "thesis": "Building Footprint Extraction and Post-Segmentation Quality Validation Through Geospatial Feature Engineering and Comparative Machine Learning",
      "result": "CGPA reported: 3.75"
    },
    {
      "period": "2016–2021",
      "degree": "Bachelor of Urban & Regional Planning",
      "institution": "Rajshahi University of Engineering & Technology",
      "focus": "GIS and Remote Sensing, Surveying and Cartography, Statistics, Programming, Environmental Planning, and Urban Planning Studio",
      "thesis": "Prediction of Land Cover Change Pattern and Economic Valuation of Environmental Change: The Case of Chalan Beel, Bangladesh",
      "result": "First Class"
    }
  ],
  "skills": [
    {
      "group": "GIS Automation and Spatial Programming",
      "summary": "Python- and ArcPy-based development of repeatable GIS workflows for spatial-data validation, production QA, geodatabase preparation, cartographic export, geometry processing, and attribute transformation.",
      "image": "assets/images/expertise/gis-automation-story-photo.png",
      "positioning": "This chapter presents my programming work as evidence of reproducible geoprocessing and spatial-data quality-control practice. The focus is not on listing scripts, but on showing how operational GIS problems were translated into structured automation workflows that support reliable mapping, review, and analysis.",
      "reviewerHighlights": [
        {
          "label": "Main capability",
          "value": "Workflow automation",
          "text": "Converting repetitive GIS operations into parameterized Python and ArcPy tools."
        },
        {
          "label": "Academic value",
          "value": "Reproducibility",
          "text": "Making data preparation, validation, and output generation easier to repeat and audit."
        },
        {
          "label": "Research link",
          "value": "GeoAI readiness",
          "text": "Supporting reliable training data, validation data, spatial post-processing, and QA/QC."
        }
      ],
      "details": [
        "Designed Python, ArcPy, Python-toolbox, and ArcGIS add-in style utilities for real GIS production and review tasks.",
        "Worked across data validation, map-production checking, geodatabase structuring, batch export, geometry construction, linear referencing, field calculation, and cartographic text automation.",
        "The work demonstrates a practical ability to formalize manual GIS procedures into repeatable workflows—an important skill for doctoral research involving large spatial datasets."
      ],
      "workflow": [
        "Operational GIS problem",
        "Rules and parameters",
        "Python or ArcPy automation",
        "QA/QC and review output",
        "Map, table, or database deliverable"
      ],
      "automationFamilies": [
        {
          "title": "Spatial-data integrity and identifier QA",
          "visual": "assets/images/expertise/automation/identifier-qa.svg",
          "problem": "Large GIS and tabular datasets often contain missing, duplicate, or inconsistent identifiers that are difficult to verify manually.",
          "method": "Developed checker-style utilities that compare records, detect duplicated IDs, identify missing IDs, and support review of attribute consistency.",
          "output": "Cleaner spatial and tabular datasets prepared for editing, reporting, and production review.",
          "relevance": "Reliable identifiers are essential for spatial joins, training-sample management, validation design, and traceable geospatial databases.",
          "evidence": "EA UID Checker; EA UID Checker Pro; Excel/MDB comparison workflows using pandas and NumPy.",
          "methods": ["pandas", "NumPy", "Record matching", "Duplicate checking", "Excel QA"]
        },
        {
          "title": "Map-production completeness checking",
          "visual": "assets/images/expertise/automation/map-checking.svg",
          "problem": "When many map sheets are produced, missing exported maps can be overlooked during manual review.",
          "method": "Built add-in style checking workflows that compare expected geographic codes from map layers with files available in the output folder.",
          "output": "A faster way to identify missing deliverables and support map-production quality assurance.",
          "relevance": "Completeness checking is useful for reproducible cartographic production and systematic review of large spatial-output batches.",
          "evidence": "Map Counting Checker; Checker add-ins; ArcGIS Desktop Python Add-In structure.",
          "methods": ["ArcPy", "Python add-ins", "SearchCursor", "Folder comparison", "Production QA"]
        },
        {
          "title": "Batch map export and cartographic production",
          "visual": "assets/images/expertise/automation/batch-export.svg",
          "problem": "Repeated layout export, extent setting, definition-query changes, and page-specific map output are time-consuming and error-prone.",
          "method": "Automated map export routines that update layout elements, apply queries, manage data-frame extents, and export PDF/JPEG outputs.",
          "output": "Repeatable map products generated from structured rules rather than manual export steps.",
          "relevance": "This experience supports research workflows requiring consistent map evidence, visual comparison, and spatial result communication.",
          "evidence": "Export From MXD; Grid Map Exporter; BBS002 map-export scripts for EA, SA, RU, and CC map products.",
          "methods": ["arcpy.mapping", "Layout elements", "Definition queries", "Batch export", "Map series"]
        },
        {
          "title": "Geodatabase organization and field-data packaging",
          "visual": "assets/images/expertise/automation/geodatabase.svg",
          "problem": "Production and field datasets need structured storage, filtered outputs, and consistent assignment before editing or delivery.",
          "method": "Created organizer workflows for geodatabase creation, feature dataset preparation, layer filtering, attribute updates, and export operations.",
          "output": "Organized GIS datasets that are easier to distribute, edit, review, and manage.",
          "relevance": "Structured data preparation is a core requirement for scalable spatial analysis, GeoAI preprocessing, and multi-site database work.",
          "evidence": "Organizer and OrganizerPro add-ins; personal geodatabase and feature-dataset preparation routines.",
          "methods": ["Geodatabase", "Feature datasets", "Select by location", "Feature export", "Editor assignment"]
        },
        {
          "title": "Geometry and linear-referencing utilities",
          "visual": "assets/images/expertise/automation/geometry-tools.svg",
          "problem": "Some spatial workflows require derived geometry, perpendicular construction, chainage points, distance calculations, or line-to-polygon conversion.",
          "method": "Developed geometry-processing utilities using ArcPy geometry objects, line measures, point generation, and feature conversion logic.",
          "output": "Support layers and computed geometry outputs for mapping, alignment, measurement, and infrastructure-related analysis.",
          "relevance": "These tasks connect GIS programming with spatial computation, topology awareness, and infrastructure-data preparation.",
          "evidence": "PointToLineDistance.pyt; chainager.py; perpendicular-line tools; CAD polyline-to-polygon conversion; morphology scripts.",
          "methods": ["Geometry objects", "measureOnLine", "Point generation", "FeatureToPolygon", "Polyline construction"]
        },
        {
          "title": "Attribute transformation and cartographic text support",
          "visual": "assets/images/expertise/automation/attribute-text.svg",
          "problem": "Cartographic and reporting outputs often require standardized fields, localized numeric text, and map-ready annotation support.",
          "method": "Prepared field-calculation and text-writing utilities for attribute transformation, Bangla numeric conversion, map writing, and simple table/field preparation.",
          "output": "More consistent attribute values and map text for presentation, localization, and review.",
          "relevance": "Attribute and label consistency improves the readability, usability, and reproducibility of spatial outputs.",
          "evidence": "AdvanceFieldCalculator.pyt; English Numeric to Bangla Numeric; OnMapWriter; table maker; add-field utilities.",
          "methods": ["UpdateCursor", "Field calculation", "Text conversion", "PIL", "Attribute standardization"]
        }
      ],
      "evidenceMatrix": [
        {
          "area": "Identifier and attribute QA",
          "codeEvidence": "EA UID Checker; EA UID Checker Pro",
          "reviewerSees": "Ability to check spatial-data integrity before analysis or delivery"
        },
        {
          "area": "Map-output completeness",
          "codeEvidence": "Map Counting Checker; Checker add-ins",
          "reviewerSees": "Experience designing QA tools for large map-production workflows"
        },
        {
          "area": "Cartographic export automation",
          "codeEvidence": "Export From MXD; Grid Map Exporter; BBS002 exporters",
          "reviewerSees": "Capacity to generate repeatable, review-ready cartographic outputs"
        },
        {
          "area": "Geodatabase preparation",
          "codeEvidence": "Organizer; OrganizerPro; SIAC DMT",
          "reviewerSees": "Understanding of structured geospatial data management"
        },
        {
          "area": "Geometry and linear referencing",
          "codeEvidence": "PointToLineDistance.pyt; chainager.py; perpendicular-line tools",
          "reviewerSees": "Spatial-computation ability beyond manual GIS operation"
        },
        {
          "area": "Localized attribute and map text",
          "codeEvidence": "Bangla numeric converter; OnMapWriter; AdvanceFieldCalculator",
          "reviewerSees": "Practical attention to cartographic communication and local data needs"
        }
      ],
      "capabilityMap": [
        {
          "stage": "Data QA",
          "description": "Detect ID problems, compare records, and reduce input-data inconsistency."
        },
        {
          "stage": "Processing",
          "description": "Formalize spatial operations with Python, ArcPy, geometry methods, and parameterized tools."
        },
        {
          "stage": "Production",
          "description": "Automate layout updates, export operations, and organized geodatabase outputs."
        },
        {
          "stage": "Research use",
          "description": "Support repeatable preprocessing, validation, visual evidence, and GeoAI post-processing."
        }
      ],
      "phdRelevance": [
        "Shows the ability to design reproducible geospatial workflows rather than only operate GIS software manually.",
        "Supports GeoAI research where training data, validation data, cartographic outputs, and post-processing steps must be traceable and repeatable.",
        "Demonstrates a bridge between applied GIS production and research methodology: data QA, workflow formalization, spatial transformation, and output validation.",
        "Provides a foundation for future work in ArcGIS Pro/Python 3, scalable geoprocessing, geospatial foundation-model post-processing, and spatial-data quality-assurance research."
      ],
      "publicNote": "The examples are presented in public-safe form. They describe workflow categories and technical contributions without exposing restricted data, client-specific records, credentials, or full proprietary scripts.",
      "items": [
        "Python",
        "ArcPy",
        "Python toolboxes (.pyt)",
        "ArcGIS Desktop and ArcGIS Pro automation",
        "Spatial-data QA/QC",
        "Map-series export",
        "Geodatabase preparation",
        "Geometry processing",
        "Linear referencing",
        "Attribute transformation",
        "Cartographic automation",
        "Workflow reproducibility"
      ]
    },
    {
      "group": "UAV, GNSS and Field Survey",
      "summary": "Academic field experience across UAV acquisition, GNSS/RTK control, photogrammetry, LiDAR-supported fieldwork, field verification, and GIS-ready spatial-data production across diverse environments in Bangladesh.",
      "image": "assets/media/uav-field/spatial-processing-workstation.jpeg",
      "details": [
        "Field experience spans urban, coastal, island, hill, haor, wetland, forest, aquaculture, riverine, and infrastructure contexts.",
        "The workflow connects mission planning, safe UAV operation, GNSS/RTK and ground control, direct site observation, imagery processing, orthophoto generation, spatial validation, and quality assurance.",
        "Selected applications include landslide monitoring, aquaculture and fish-feeding observation, electric-connection mapping, drainage-connectivity assessment, river-pollution monitoring, environmental field verification, and LiDAR-supported Sundarbans work."
      ],
      "evidence": [
        "Selected public-safe field contexts include Dhaka, Hatiya, Sandwip, Jashore, Bandarban, Rangamati, Bhola, Dacope, Mymensingh, Chattogram City, Kishoreganj Haor, and the Sundarbans.",
        "Original field photographs and videos are presented in a dedicated compact StoryMap-style evidence page.",
        "Relevant to producing reliable training, validation, and reference data for remote sensing, GeoAI, planning, infrastructure, hazard, and environmental applications."
      ],
      "items": [
        "UAV mission planning",
        "Drone operation",
        "GNSS and RTK survey",
        "Ground control points",
        "UAV photogrammetry",
        "Orthophoto generation",
        "LiDAR-supported fieldwork",
        "Field verification",
        "Survey quality assurance"
      ]
    },
    {
      "group": "Urban Planning and Spatial Analysis",
      "summary": "Planning-oriented spatial analysis for land use, environment, infrastructure, and urban mobility, including AI-assisted traffic observation.",
      "image": "assets/images/expertise/urban-planning-traffic.webp",
      "details": [
        "Connects GIS and computer-vision methods with practical planning, transport, environmental, and infrastructure questions.",
        "Includes AI-based vehicle detection, persistent tracking, class-wise counting, and directional traffic-event recording from roadside video.",
        "Positions technical analysis within urban-mobility assessment, land-use interpretation, and evidence-based decision support."
      ],
      "evidence": [
        "Undergraduate training in Urban and Regional Planning at RUET.",
        "A supplied Python prototype using YOLOv8, DeepSORT, OpenCV, and CSV event logging for directional traffic counting.",
        "Research and publication themes involving land-cover change, environmental analysis, and urban-spatial interpretation."
      ],
      "items": [
        "Urban mobility analytics",
        "Transportation planning",
        "Traffic-volume assessment",
        "Land-use planning",
        "Environmental planning",
        "Spatial suitability analysis",
        "LULC change analysis",
        "Planning-oriented GIS"
      ]
    },
    {
      "group": "Scientific Visualization and Communication",
      "summary": "Clear visual communication for research through scientific figures, academic posters, cartographic layouts, and structured presentation design.",
      "image": "assets/images/expertise/scientific-visualization.svg",
      "details": [
        "Focuses on communicating methods, results, and spatial evidence in a form that is easy for academic reviewers to interpret.",
        "Includes workflow diagrams, publication-ready figures, poster organization, and map-based visual storytelling.",
        "Supports conference presentation, portfolio design, and the translation of technical results into readable visual form."
      ],
      "evidence": [
        "Workflow diagrams and portfolio visuals already used across the research section.",
        "Experience preparing cartographic layouts, figures, and presentation-ready geospatial graphics.",
        "Useful for journal figures, thesis slides, and concise academic communication."
      ],
      "items": [
        "Scientific figures",
        "Academic posters",
        "Infographics",
        "Cartographic layouts",
        "Adobe Illustrator",
        "Research workflow diagrams",
        "Presentation design",
        "Spatial storytelling"
      ]
    }
  ],
  "teachingExperience": [],
  "trainingDelivery": [
    {
      "period": "DTE Training",
      "title": "GIS and Remote Sensing Practical Training",
      "provider": "Directorate of Technical Education (DTE)",
      "image": "assets/images/portfolio/gis-training-practical.webp",
      "details": [
        "Delivered structured, hands-on GIS and remote-sensing instruction using practical desktop workflows.",
        "Guided participants through data preparation, mapping, spatial analysis, geoprocessing, visualization, and applied exercises.",
        "Supported individual learners, resolved technical problems, and evaluated practical understanding throughout the sessions."
      ]
    },
    {
      "period": "BARC Training",
      "title": "UAV and LiDAR Capacity-Building Training",
      "provider": "Bangladesh Agricultural Research Council (BARC)",
      "image": "assets/images/portfolio/barc-uav-lidar-group.webp",
      "details": [
        "Contributed to professional capacity building on UAV, LiDAR, field-survey concepts, and geospatial data-acquisition workflows.",
        "Connected field procedures with imagery, point-cloud, mapping, and quality-control considerations.",
        "Supported practical discussion, participant engagement, and the communication of technical geospatial concepts."
      ]
    },
    {
      "period": "Esri Bangladesh",
      "title": "ArcGIS Pro: Essential Workflows",
      "provider": "Trainer and performance evaluator",
      "image": "assets/images/portfolio/arcgis-training-classroom.webp",
      "details": [
        "Delivered instructor-led training on foundational ArcGIS Pro workflows for official and professional participants.",
        "Demonstrated map creation, data management, spatial analysis, geoprocessing, editing, visualization, and project-based workflows.",
        "Observed participant performance, evaluated hands-on tasks, clarified technical issues, and provided individualized feedback."
      ]
    }
  ],
  "training": [
    {
      "period": "2023",
      "completed": "May 30, 2023",
      "title": "Certification of UAV Operator’s Training",
      "provider": "AIRON, Republic of Korea",
      "category": "UAV and imagery",
      "details": "Professional UAV operator training covering systems, flight, and required safety procedures, with demonstrated proficiency recorded by the issuing organization.",
      "credential": "Professional certification",
      "duration": "Systems, flight and safety training",
      "url": "assets/documents/certificates/uav-operator-training-airon-2023.pdf",
      "image": "assets/images/certificates/uav-operator-training-airon-2023.webp"
    },
    {
      "period": "2024",
      "completed": "December 6, 2024",
      "title": "ArcGIS Drone2Map Basics",
      "provider": "Esri Training",
      "category": "UAV and imagery",
      "details": "Completed Esri web-course training in the foundational use of ArcGIS Drone2Map for drone-imagery workflows.",
      "credential": "Course completion",
      "duration": "2 hours 10 minutes",
      "url": "assets/documents/certificates/arcgis-drone2map-basics-2024.pdf",
      "image": "assets/images/certificates/arcgis-drone2map-basics-2024.webp"
    },
    {
      "period": "2024",
      "completed": "October 14, 2024",
      "title": "Spatial Data Science: The New Frontier in Analytics",
      "provider": "Esri Training",
      "category": "Spatial analytics and data science",
      "details": "Completed a six-week Esri MOOC focused on spatial data science and the role of location in contemporary analytics.",
      "credential": "MOOC completion",
      "duration": "6 weeks",
      "url": "assets/documents/certificates/spatial-data-science-mooc-2024.pdf",
      "image": "assets/images/certificates/spatial-data-science-mooc-2024.webp"
    },
    {
      "period": "2025",
      "completed": "June 11, 2025",
      "title": "Creating a Space-Time Cube",
      "provider": "Esri Training",
      "category": "Spatial analytics and data science",
      "details": "Completed Esri web-course training on preparing a space-time cube for spatiotemporal analysis.",
      "credential": "Course completion",
      "duration": "45 minutes",
      "url": "assets/documents/certificates/creating-space-time-cube-2025.pdf",
      "image": "assets/images/certificates/creating-space-time-cube-2025.webp"
    },
    {
      "period": "2024",
      "completed": "November 5, 2024",
      "title": "Python for Everyone",
      "provider": "Esri Training",
      "category": "Python and GIS automation",
      "details": "Completed foundational Python training through Esri, supporting subsequent work in ArcPy and repeatable geospatial workflows.",
      "credential": "Course completion",
      "duration": "4 hours 15 minutes",
      "url": "assets/documents/certificates/python-for-everyone-2024.pdf",
      "image": "assets/images/certificates/python-for-everyone-2024.webp"
    },
    {
      "period": "2024",
      "completed": "November 5, 2024",
      "title": "Python Scripting: Modifying Layer Properties",
      "provider": "Esri Training",
      "category": "Python and GIS automation",
      "details": "Completed focused Esri training on using Python scripting to modify layer properties in ArcGIS workflows.",
      "credential": "Course completion",
      "duration": "1 hour 50 minutes",
      "url": "assets/documents/certificates/python-scripting-layer-properties-2024.pdf",
      "image": "assets/images/certificates/python-scripting-layer-properties-2024.webp"
    },
    {
      "period": "2024",
      "completed": "November 22, 2024",
      "title": "The Systems Approach to ArcGIS: An Introduction",
      "provider": "Esri Training",
      "category": "ArcGIS systems and architecture",
      "details": "Completed introductory Esri training on understanding ArcGIS through a systems-oriented perspective.",
      "credential": "Course completion",
      "duration": "3 hours 50 minutes",
      "url": "assets/documents/certificates/systems-approach-arcgis-introduction-2024.pdf",
      "image": "assets/images/certificates/systems-approach-arcgis-introduction-2024.webp"
    },
    {
      "period": "2024",
      "completed": "December 8, 2024",
      "title": "The Systems Approach to ArcGIS: Architecture of ArcGIS",
      "provider": "Esri Training",
      "category": "ArcGIS systems and architecture",
      "details": "Completed Esri training focused on ArcGIS architecture within a broader systems approach.",
      "credential": "Course completion",
      "duration": "4 hours 15 minutes",
      "url": "assets/documents/certificates/systems-approach-arcgis-architecture-2024.pdf",
      "image": "assets/images/certificates/systems-approach-arcgis-architecture-2024.webp"
    }
  ],
  "designCategories": [
    {
      "title": "Academic poster design",
      "text": "Structured posters that communicate research questions, methods, evidence, and contributions clearly.",
      "image": "assets/images/poster-design.svg"
    },
    {
      "title": "Scientific figures and workflows",
      "text": "Methodology diagrams, research frameworks, evaluation graphics, and publication-ready visual summaries.",
      "image": "assets/images/methodology-flow.svg"
    },
    {
      "title": "Cartography and geovisualization",
      "text": "Scale-aware map layouts, thematic maps, dashboards, and visual storytelling for spatial evidence.",
      "image": "assets/images/cartography.svg"
    }
  ],
  "writeups": [
    {
      "category": "Featured research",
      "title": "Post-segmentation quality control for UAV-derived building footprints",
      "summary": "A concise case study of the problem, workflow, independent-site evaluation, and database-level contribution of my MSc research.",
      "url": "project-building-footprint.html"
    },
    {
      "category": "Ongoing research",
      "title": "Post-model ensemble for UAV road-network extraction",
      "summary": "Research direction combining segmentation outputs with GIS post-processing, connectivity, and topology-aware evaluation.",
      "url": "project-uav-roads.html"
    },
    {
      "category": "Research overview",
      "title": "GeoAI, remote sensing, and operational GIS research agenda",
      "summary": "A public-safe overview of my research themes, methods, doctoral questions, and emerging interests.",
      "url": "research.html"
    }
  ],
  "mediaGallery": [
    {
      "type": "Research workflow",
      "title": "Building-footprint quality-control framework",
      "src": "assets/images/methodology-flow.svg",
      "alt": "Methodology workflow for building-footprint quality control",
      "caption": "Raster-to-vector processing, feature engineering, machine-learning screening, and independent-site evaluation."
    },
    {
      "type": "Remote sensing",
      "title": "Environmental change analysis",
      "src": "assets/images/projects/ongoing/representative-sampling.svg",
      "alt": "Remote-sensing environmental change illustration",
      "caption": "Representative visual for land-cover mapping, environmental interpretation, and spatiotemporal analysis."
    },
    {
      "type": "GIS automation",
      "title": "Scale-aware cartographic workflows",
      "src": "assets/images/cartography.svg",
      "alt": "Cartographic generalization illustration",
      "caption": "Representative visual for geoprocessing automation, map production, generalization, and quality assurance."
    },
    {
      "type": "WebGIS",
      "title": "Enterprise geospatial systems",
      "src": "assets/images/webgis.svg",
      "alt": "Enterprise WebGIS illustration",
      "caption": "Representative visual for services, web maps, dashboards, spatial databases, and user-facing applications."
    },
    {
      "type": "UAV research",
      "title": "Road-network extraction",
      "src": "assets/images/projects/ongoing/road-graph.svg",
      "alt": "UAV road-network extraction illustration",
      "caption": "Visual overview of segmentation, post-processing, connectivity, and topology-oriented road extraction."
    },
    {
      "type": "Your content",
      "title": "Add an approved field or training photograph",
      "src": "assets/images/upload-placeholder.svg",
      "alt": "Placeholder for an approved photograph or map",
      "caption": "Use the included content editor and place your image in assets/uploads/images. Remove this placeholder after adding your own content."
    }
  ],
  "videos": [],
  "siteMeta": {
    "coordinateSystem": "WGS 84",
    "latitude": "23.8103° N",
    "longitude": "90.4125° E",
    "editorFile": "content-editor.html"
  },
  "usefulLinks": [
    {
      "title": "Academic CV",
      "category": "Profile document",
      "description": "A concise record of education, publications, research, professional experience, teaching, expertise, and training.",
      "url": "assets/documents/Imran_Chowdhury_Academic_CV.pdf",
      "tags": [
        "CV",
        "Academic profile"
      ]
    },
    {
      "title": "Research Portfolio",
      "category": "Research record",
      "description": "Featured research, ongoing studies, methodologies, study contexts, and detailed case records.",
      "url": "research.html",
      "tags": [
        "GeoAI",
        "Remote sensing"
      ]
    },
    {
      "title": "Publication Record",
      "category": "Research outputs",
      "description": "Peer-reviewed publications organized by topic, year, authorship, venue, and geographic context.",
      "url": "publications.html",
      "tags": [
        "Publications",
        "Research outputs"
      ]
    },
    {
      "title": "Contact and Collaboration",
      "category": "Research communication",
      "description": "Contact information and a focused route for PhD, research, training, and professional collaboration.",
      "url": "cv-contact.html",
      "tags": [
        "PhD 2027",
        "Collaboration"
      ]
    }
  ],
  "news": [
    {
      "date": "July 2026",
      "title": "MSc research defense completed",
      "summary": "Completed the final defense of the GeoAI-based post-segmentation quality-control research on UAV-derived building footprints.",
      "url": "project-building-footprint.html",
      "tags": [
        "MSc research",
        "GeoAI"
      ]
    },
    {
      "date": "2026",
      "title": "First-author journal manuscript under review",
      "summary": "A first-author manuscript is progressing through journal review, extending the research contribution toward peer-reviewed publication.",
      "url": "publications.html",
      "tags": [
        "Manuscript",
        "Publication"
      ]
    },
    {
      "date": "2026",
      "title": "UAV road-network research in progress",
      "summary": "Ongoing work combines deep-learning predictions with GIS post-processing to improve road connectivity and topology.",
      "url": "project-uav-roads.html",
      "tags": [
        "UAV",
        "Road extraction"
      ]
    },
    {
      "date": "2024–Present",
      "title": "GIS Analyst at Esri Bangladesh",
      "summary": "Continuing professional work in GIS automation, remote sensing, GeoAI, WebGIS, cartography, training, and operational spatial systems.",
      "url": "cv-contact.html",
      "tags": [
        "Esri Bangladesh",
        "Professional work"
      ]
    }
  ]
};
