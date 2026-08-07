(() => {
  const projects = [
  {
    "id": "administrative-map-export",
    "number": "01",
    "group": "Cartographic production",
    "title": "Administrative EA/SA Map Export Suite",
    "short": "Four ArcMap variants for EA and supervisor-area map production",
    "format": "ArcMap · Python toolbox",
    "summary": "Four ArcMap/Python 2.7 tools developed for Enumeration Area and Supervisor Area products in City Corporation and Rural/Urban contexts. Each variant coordinates administrative attributes, named layout text, main and index data frames, definition queries, extent control, folder creation, and 300-dpi JPEG export.",
    "problem": "Large administrative map series required repeated updates to layout labels, layer filters, map extents, index frames, output names, and folder structures for every EA or supervisor area.",
    "method": "Read the highlighted production layer with ArcPy data-access cursors, write administrative values to named ArcMap TextElements, apply definition queries to main and index layers, set data-frame extents and scale margins, then export systematically named JPEG layouts.",
    "output": "Consistent EA/SA map-sheet folders for four operational configurations: EA–CC, EA–RU, SA–CC, and SA–RU.",
    "notes": "The repository retains all four authentic ArcMap variants. The reviewed copies correct the original EA-code TextElement assignment while preserving `arcpy.mapping`, MXD data frames, and the original layout-driven workflow.",
    "tags": [
      "ArcMap 10.x",
      "Python 2.7",
      "arcpy.mapping",
      "MXD layouts",
      "Definition queries"
    ],
    "files": [
      "BBS002EaMapCC.py",
      "BBS002EaMapRU.py",
      "BBS002SaMapCC.py",
      "BBS002SaMapRU.py"
    ],
    "repoPath": "projects/01-administrative-map-export-suite",
    "image": "assets/images/expertise/automation-task/administrative-map-export.svg",
    "caption": "SearchCursor reads administrative records; definition queries and layout elements produce EA/SA JPEG map sheets."
  },
  {
    "id": "grid-page-export",
    "number": "02",
    "group": "Cartographic production",
    "title": "Grid / Page Map PDF Exporter",
    "short": "Page-driven PDF export for an engineering mapping project",
    "format": "ArcMap · ArcPy script",
    "summary": "An MXD-based page export workflow developed for engineering or sewerage mapping. It iterates PageName records, writes the page identifier to a layout element, filters the highlighted page layer, updates the data-frame extent, and exports one 300-dpi PDF per page.",
    "problem": "A large engineering map set had to be produced page by page using the same highlighted-grid, extent, label, and naming procedure.",
    "method": "Open the project MXD, obtain the configured data frame and highlighted layer, iterate the PageName field, apply an ArcMap definition query, set the active extent, and export the layout to a page-named PDF.",
    "output": "A complete page-indexed PDF map series ready for review or delivery.",
    "notes": "The reviewed ArcMap copy separates local MXD/output paths into a clear configuration block, creates the export folder when needed, and uses safe path construction without changing the original workflow.",
    "tags": [
      "ArcMap",
      "PDF export",
      "Page index",
      "ArcPy cursor",
      "Layout text"
    ],
    "files": [
      "Grid map exporter for esolve.py"
    ],
    "repoPath": "projects/02-grid-map-exporter",
    "image": "assets/images/expertise/automation-task/grid-page-export.svg",
    "caption": "PageName controls the highlighted grid, data-frame extent, layout label, and one PDF export per page."
  },
  {
    "id": "three-frame-strip-map",
    "number": "03",
    "group": "Cartographic production",
    "title": "Multi-Frame Strip-Map Exporter",
    "short": "Linked left, middle, and right map frames with rotation control",
    "format": "ArcMap · Python add-in",
    "summary": "A grouped ArcMap add-in record covering the earlier two-frame Lumen exporter and the later three-frame strip-map workflow. Page-number and angle fields control linked frame extents, independent rotations, layout text, and PDF output.",
    "problem": "Linear-project maps needed neighbouring page context and independent orientation across three linked ArcMap data frames.",
    "method": "Use a page-control layer containing left, middle, right, combined page identifiers, and rotation fields; filter each strip layer, pan each ArcMap data frame to its matching geometry, apply rotation, write the page number, and export the layout.",
    "output": "Three-frame strip-map PDFs with synchronized page context and orientation.",
    "notes": "The two-frame and three-frame Lumen variants and their angle-field preparation helper are shown as one distinct system. Reviewed code adds the missing ArcPy import, initializes page state, and handles cancelled output-folder selection.",
    "tags": [
      "ArcMap add-in",
      "Data frames",
      "Strip mapping",
      "Rotation",
      "PDF production"
    ],
    "files": [
      "Lumen_addin.py",
      "3rAngleFiller.py",
      "config.xml"
    ],
    "repoPath": "projects/03-three-frame-strip-map-exporter",
    "image": "assets/images/expertise/automation-task/three-frame-strip-map.svg",
    "caption": "Page and rotation fields synchronize left, middle, and right ArcMap frames before PDF export."
  },
  {
    "id": "mxd-batch-export",
    "number": "04",
    "group": "Cartographic production",
    "title": "Directory-Level MXD to JPEG Exporter",
    "short": "Batch conversion of ArcMap documents to 300-dpi images",
    "format": "ArcMap · ArcPy script",
    "summary": "A compact batch utility that scans a working folder for MXD documents and exports each ArcMap layout as a 300-dpi JPEG into a dedicated output directory.",
    "problem": "Multiple ArcMap documents needed to be converted consistently without opening and exporting each MXD manually.",
    "method": "Enumerate `.mxd` files, create an ArcMap MapDocument for each item, call `arcpy.mapping.ExportToJPEG`, release the MapDocument reference, and record the resulting image path.",
    "output": "A JPEG map image for every MXD found in the selected workspace.",
    "notes": "The reviewed copy fixes a genuine control-flow issue: the original only exported when the output folder was newly created. Export now runs whether the folder already exists or not.",
    "tags": [
      "MXD batch processing",
      "ExportToJPEG",
      "ArcMap layouts",
      "300 dpi"
    ],
    "files": [
      "Export From MXD.py"
    ],
    "repoPath": "projects/04-mxd-batch-jpeg-exporter",
    "image": "assets/images/expertise/automation-task/mxd-batch-export.svg",
    "caption": "The script loops through a folder of MXDs and exports every layout to a 300-dpi JPEG."
  },
  {
    "id": "map-annotation-localization",
    "number": "05",
    "group": "Cartographic production",
    "title": "Map Image Annotation and Bangla Localization",
    "short": "Post-export labels, filename checks, and Bangla numeric conversion",
    "format": "Python 2.7 · Pillow · ArcPy",
    "summary": "Desktop utilities for annotating exported map images with enumerator numbers derived from file names, preserving nested folder structures, logging unusual naming patterns, and converting English digits to Bangla digits in GIS attributes.",
    "problem": "Thousands of exported map images required consistent operational labels and filename quality checks, while localized products needed Bangla numeric text.",
    "method": "Traverse image directories, parse the expected identifier from each filename, draw configured text and border elements with Pillow, preserve 300-dpi metadata, write an exception log, and update GIS text fields through a deterministic Unicode digit mapping.",
    "output": "Annotated map-image folders, a list of unusual file names, and localized numeric attributes.",
    "notes": "The original source explicitly records collaboration on OnMapWriter; the repository preserves that attribution. The reviewed copy removes hardcoded drive slicing, exposes the font path as configuration, and adds the missing ArcPy import to the field converter.",
    "tags": [
      "Python 2.7",
      "Pillow",
      "Image QA",
      "Bangla Unicode",
      "ArcPy fields"
    ],
    "files": [
      "OnMapWriter.py",
      "OnMapWriter_2.py",
      "updated_on map writer.py",
      "English Numeric to Bangla Numeric.py"
    ],
    "repoPath": "projects/05-map-annotation-and-localization",
    "image": "assets/images/expertise/automation-task/map-annotation-localization.svg",
    "caption": "Filename parsing and Pillow add map labels; Unicode mapping converts English digits to Bangla."
  },
  {
    "id": "map-completeness-checker",
    "number": "06",
    "group": "Cartographic production",
    "title": "Map Output Completeness Checker",
    "short": "Expected geographic identifiers versus produced map files",
    "format": "ArcMap · Python add-in",
    "summary": "An ArcMap toolbar that compares identifiers stored in a Highlighted layer with exported map filenames. Separate buttons evaluate EA, supervisor-area, upazila/city-corporation, and zone outputs.",
    "problem": "Missing maps inside large export folders were difficult to identify reliably before delivery.",
    "method": "Read the relevant ArcMap field with a SearchCursor, walk the selected output directory, normalize filename stems, calculate the missing identifier set, and display the result through the add-in interface.",
    "output": "A direct completeness check for each administrative map level.",
    "notes": "Two archive folders contained the same checker implementation and are represented once. The reviewed add-in consolidates repeated comparison logic, handles cancelled folder selection, and presents a readable message.",
    "tags": [
      "ArcMap add-in",
      "QA/QC",
      "File inventory",
      "Set comparison",
      "Production control"
    ],
    "files": [
      "Checker_addin.py",
      "config.xml",
      "makeaddin.py"
    ],
    "repoPath": "projects/06-map-output-completeness-checker",
    "image": "assets/images/expertise/automation-task/map-completeness-checker.svg",
    "caption": "Expected IDs from the map layer are compared with exported filenames to report missing maps."
  },
  {
    "id": "ea-uid-validator",
    "number": "07",
    "group": "Data quality and engineering",
    "title": "EA UID Cross-Validation Utility",
    "short": "ICMS and MDB workbook comparison for administrative records",
    "format": "Standalone Python · pandas",
    "summary": "A spreadsheet QA/QC application for comparing Enumeration Area identifiers and related administrative codes between ICMS and MDB workbooks for a selected upazila and zone.",
    "problem": "Parallel workbooks could contain duplicate EA UIDs, missing records, or inconsistent EA, SA, village, mauza, ward, municipality, and upazila attributes.",
    "method": "Load the configured worksheets, normalize text and identifiers, filter the selected administrative subset, detect duplicate keys, compare UID sets, and report missing or mismatched records.",
    "output": "A focused validation report identifying duplicate and unmatched EA records across the two systems.",
    "notes": "This project is standalone Python rather than ArcMap. The repository separates the legacy Python 2 source and later Python 3 source, removes bundled third-party libraries/installers, and provides explicit dependency lists.",
    "tags": [
      "pandas",
      "Excel QA/QC",
      "EA UID",
      "Data validation",
      "Tkinter"
    ],
    "files": [
      "EA_UID Checker.py — legacy",
      "EA_UID Checker.py — later version"
    ],
    "repoPath": "projects/07-ea-uid-cross-validator",
    "image": "assets/images/expertise/automation-task/ea-uid-validator.svg",
    "caption": "pandas normalizes two workbooks, checks duplicate EA UIDs, and reports missing or mismatched records."
  },
  {
    "id": "editor-geodatabase-organizer",
    "number": "08",
    "group": "Data quality and engineering",
    "title": "Editor-Specific Geodatabase Organizer",
    "short": "Assignment-based personal geodatabase packaging for field editing",
    "format": "ArcMap · Python add-in",
    "summary": "An ArcMap production add-in that creates an editor-specific personal geodatabase, creates feature datasets using the source spatial reference, assigns editor metadata, and exports the relevant EA boundary and support layers.",
    "problem": "Distributed editing teams needed consistent project packages containing the correct assignment boundary, landmarks, selected roads and rivers, editor code, and summary records.",
    "method": "Read the operational zone code, create an MDB and feature datasets, select assignment features by attribute and location, update editor fields, title-case landmark names, summarize EA records, and export filtered support datasets.",
    "output": "A structured editor-specific ArcMap geodatabase ready for production work.",
    "notes": "The portfolio keeps the authentic personal-geodatabase workflow used in the supplied ArcMap source. The reviewed copy initializes the editor state and improves cancelled-folder and user-message handling.",
    "tags": [
      "ArcMap add-in",
      "Personal geodatabase",
      "Feature datasets",
      "Spatial selection",
      "Editing workflow"
    ],
    "files": [
      "OrganizerPro_addin.py"
    ],
    "repoPath": "projects/08-editor-geodatabase-organizer",
    "image": "assets/images/expertise/automation-task/editor-geodatabase-organizer.svg",
    "caption": "A zone or editor code drives geodatabase creation, spatial selection, field updates, and layer packaging."
  },
  {
    "id": "attribute-field-utilities",
    "number": "09",
    "group": "Data quality and engineering",
    "title": "Attribute and Field Utilities",
    "short": "Metadata schema, recoding, angle distribution, and Bangla digits",
    "format": "ArcMap · Python toolboxes",
    "summary": "A grouped set of focused ArcMap tools for adding production metadata fields, applying rule-based code labels, distributing sequential rotation values across left/middle/right fields, and converting numeric text to Bangla digits.",
    "problem": "Operational datasets repeatedly required the same schema fields and project-specific attribute transformations.",
    "method": "Expose selected layers and fields as toolbox parameters, create required text fields, use data-access cursors for deterministic recoding, distribute angle sequences into frame-specific fields, and translate digits through a Unicode lookup.",
    "output": "Standardized production attributes supporting editing, cartography, and localized map products.",
    "notes": "Closely related field utilities are grouped to avoid presenting small helper scripts as separate major systems. The original recoding values and field assumptions remain documented rather than being generalized into unsupported claims.",
    "tags": [
      "Python toolbox",
      "Field schema",
      "UpdateCursor",
      "Rotation attributes",
      "Unicode"
    ],
    "files": [
      "add field.py",
      "AdvanceFieldCalculator.pyt",
      "3rAngleFiller.py",
      "English Numeric to Bangla Numeric.py"
    ],
    "repoPath": "projects/09-attribute-and-field-utilities",
    "image": "assets/images/expertise/automation-task/attribute-field-utilities.svg",
    "caption": "Toolbox parameters and UpdateCursor create fields, recode values, assign angles, and localize digits."
  },
  {
    "id": "landuse-clip-excel",
    "number": "10",
    "group": "Data quality and engineering",
    "title": "Page-Based Land-Use Clip and Excel Generator",
    "short": "Spatial clipping, area calculation, and chainage-labelled reports",
    "format": "ArcMap · ArcPy script",
    "summary": "A corridor-reporting workflow that iterates strip pages, clips dissolved land-use features by each page boundary, calculates land-use area, and exports one Excel table per chainage/page.",
    "problem": "Land-use reporting along an infrastructure corridor required the same clip, area, naming, and spreadsheet operations for every map sheet.",
    "method": "Read PageNumber and Chainage from the strip layer, apply a page-specific definition query, run ArcMap Clip, create and calculate the LU_Area field, and export the result table to Excel.",
    "output": "Page-specific clipped land-use datasets and chainage-referenced Excel reports.",
    "notes": "The reviewed source preserves the ArcMap geoprocessing sequence while separating local paths and layer names into configuration, creating output folders, and safely constructing definition queries.",
    "tags": [
      "ArcMap",
      "Clip analysis",
      "Area calculation",
      "Excel export",
      "Corridor GIS"
    ],
    "files": [
      "Auto clip and excel generator.py"
    ],
    "repoPath": "projects/10-land-use-clip-excel-generator",
    "image": "assets/images/expertise/automation-task/landuse-clip-excel.svg",
    "caption": "Each page boundary clips land use, calculates LU_Area, and exports a chainage-labelled Excel table."
  },
  {
    "id": "smec-land-acquisition",
    "number": "11",
    "group": "Data quality and engineering",
    "title": "SMEC Land-Acquisition Mapping and Reporting",
    "short": "Cadastral attributes, area summaries, layout tables, and PDF production",
    "format": "ArcMap · Python add-in",
    "summary": "A cadastral production system for selecting acquisition plots by strip, compiling mouza/JL/sheet/plot attributes, calculating individual and grand-total areas, populating layout text, rotating and framing each strip, exporting PDFs, and constructing dynamic plot-area tables.",
    "problem": "Land-acquisition sheets required repeated spatial selection, plot compilation, cadastral area calculation, layout population, and page-specific export.",
    "method": "Select plots whose centers fall within each strip, parse cadastral identifiers, aggregate plot areas, update strip attributes, bind the results to named ArcMap text elements, set rotation and extent, export PDFs, and optionally clone graphic/text elements for variable-length tables.",
    "output": "Repeatable strip-level land-acquisition records and production-ready cadastral map sheets.",
    "notes": "Two SMEC Acquirer source generations are retained because the later version contains additional full-plot logic. The separate table-maker is documented as an experimental layout component with required ArcMap graphic elements.",
    "tags": [
      "Cadastral GIS",
      "ArcMap add-in",
      "Spatial selection",
      "Area aggregation",
      "Layout automation"
    ],
    "files": [
      "SMEC_Acquirer_addin.py — two generations",
      "table maker.py",
      "config.xml"
    ],
    "repoPath": "projects/11-smec-land-acquisition-system",
    "image": "assets/images/expertise/automation-task/smec-land-acquisition.svg",
    "caption": "Selected cadastral plots are summarized by area, written to layout elements, and exported as map sheets."
  },
  {
    "id": "feature-geometry-conversion",
    "number": "12",
    "group": "Geometry and conversion",
    "title": "Feature and Geometry Conversion Tools",
    "short": "CAD linework to polygons and features to centroid points",
    "format": "ArcMap · Python toolbox",
    "summary": "Two practical ArcMap utilities: a batch converter that separates CAD-derived polylines by their LAYER value and creates polygon outputs, and a Python toolbox that converts line or polygon inputs into centroid point features.",
    "problem": "CAD linework needed to become organized GIS polygon datasets, while repeated centroid extraction needed a simple reusable interface.",
    "method": "Collect unique CAD layer values, apply a definition query for each group, sanitize output names, run FeatureToPolygon, and package FeatureToPoint with geometry filters and automatic output naming.",
    "output": "Named polygon datasets by CAD source layer and centroid point feature classes for selected inputs.",
    "notes": "The reviewed CAD script adds the missing ArcPy import and configurable output workspace. The SIAC DMT toolbox fixes a genuine issue where a calculated default output name was not assigned to the parameter.",
    "tags": [
      "CAD to GIS",
      "FeatureToPolygon",
      "FeatureToPoint",
      "Centroid",
      "Python toolbox"
    ],
    "files": [
      "cad polyline layer to polygon type shapefile.py",
      "SIAC DMT.pyt"
    ],
    "repoPath": "projects/12-feature-and-geometry-conversion",
    "image": "assets/images/expertise/automation-task/feature-geometry-conversion.svg",
    "caption": "CAD layers are grouped and converted to polygons; line or polygon features can become centroid points."
  },
  {
    "id": "linear-referencing-nearest-route",
    "number": "13",
    "group": "Geometry and conversion",
    "title": "Route Chainage and Point-to-Line Analysis",
    "short": "Engineering stationing and nearest-route connector geometry",
    "format": "ArcMap · ArcPy geometry",
    "summary": "Geometry tools that calculate engineering chainage for points along a route and create explicit connector lines from input points to their nearest locations on a reference-line dataset.",
    "problem": "Infrastructure points required readable stationing values and measurable spatial relationships to a route network.",
    "method": "Use ArcPy geometry methods `measureOnLine` and `queryPointAndDistance`, compare candidate distances across route features, format measures as kilometre-plus-metre chainage, and create Polyline connectors from each point to the nearest route position.",
    "output": "Updated point chainage attributes and a connector-line feature class for nearest-route analysis.",
    "notes": "The reviewed implementation removes nested cursor/variable shadowing and corrects the original first-line-only assumption by evaluating all available route geometries.",
    "tags": [
      "ArcPy geometry",
      "Linear referencing",
      "measureOnLine",
      "queryPointAndDistance",
      "Infrastructure"
    ],
    "files": [
      "chainager.py",
      "PointToLineDistance.pyt"
    ],
    "repoPath": "projects/13-linear-referencing-and-nearest-route",
    "image": "assets/images/expertise/automation-task/linear-referencing-nearest-route.svg",
    "caption": "measureOnLine stores chainage, while queryPointAndDistance builds nearest-route connector geometry."
  },
  {
    "id": "road-network-morphology",
    "number": "14",
    "group": "Geometry and conversion",
    "title": "Road-Network Morphology Comparison",
    "short": "Sample-based comparison between two road-network representations",
    "format": "ArcMap · ArcPy analysis",
    "summary": "An experimental road-network comparison workflow that samples a source network, links each sample to the nearest position on a comparison network, intersects the resulting connectors, and classifies directional relationships.",
    "problem": "Two road-network datasets needed systematic geometric comparison rather than visual inspection alone.",
    "method": "Generate points along source lines at a defined interval, search all comparison-line geometries for the nearest position, construct connector polylines, intersect them with the comparison network, and calculate a direction-result field.",
    "output": "Sample points, connector lines, intersection features, and directional comparison attributes.",
    "notes": "The reviewed ArcMap copy moves datasets into configuration, corrects the first-geometry-only limitation, and repairs the embedded CalculateField code-block indentation while preserving the experimental nature of the rule set.",
    "tags": [
      "Network comparison",
      "GeneratePointsAlongLines",
      "Nearest geometry",
      "Intersect",
      "Direction rules"
    ],
    "files": [
      "morphology.py"
    ],
    "repoPath": "projects/14-road-network-morphology",
    "image": "assets/images/expertise/automation-task/road-network-morphology.svg",
    "caption": "Points sampled along one road network are connected to the nearest comparison network and intersected."
  },
  {
    "id": "image-boundary-navigator",
    "number": "15",
    "group": "Operator add-ins",
    "title": "Image-Driven Boundary Navigator",
    "short": "Parse an image-layer code and zoom to the matching boundary",
    "format": "ArcMap · Python add-in",
    "summary": "A compact ArcMap operator tool that derives a geographic code from the loaded JPEG layer name, applies it to a boundary-layer query or selection, and zooms the active data frame to the matching administrative feature.",
    "problem": "Operators repeatedly needed to locate the boundary corresponding to the currently loaded image tile without manually searching its geographic code.",
    "method": "Find the JPEG and boundary layers in the current MXD, extract the first 16 characters of the image-layer name, build a definition query or selection using mauza_geo_code, and set the ArcMap data-frame extent.",
    "output": "Immediate navigation from an imagery identifier to its corresponding boundary.",
    "notes": "The reviewed source removes a redundant method reference, adds checks for missing required layers, and safely quotes the identifier while preserving the original ArcMap add-in interaction.",
    "tags": [
      "ArcMap add-in",
      "Layer-name parsing",
      "Definition query",
      "Boundary navigation",
      "Operator tool"
    ],
    "files": [
      "Albus_addin.py"
    ],
    "repoPath": "projects/15-image-boundary-navigator",
    "image": "assets/images/expertise/automation-task/image-boundary-navigator.svg",
    "caption": "The image-layer filename provides a geographic code used to query and zoom to the matching boundary."
  }
];

  const list = document.getElementById('automation-project-list');
  const detail = document.getElementById('automation-project-detail');
  if (!list || !detail) return;

  const groupOrder = ["Cartographic production", "Data quality and engineering", "Geometry and conversion", "Operator add-ins"];
  const el = {
    image: document.getElementById('automation-detail-image'), caption: document.getElementById('automation-detail-caption'),
    number: document.getElementById('automation-detail-number'), title: document.getElementById('automation-detail-title'),
    format: document.getElementById('automation-detail-format'), summary: document.getElementById('automation-detail-summary'),
    problem: document.getElementById('automation-detail-problem'), method: document.getElementById('automation-detail-method'),
    output: document.getElementById('automation-detail-output'), notes: document.getElementById('automation-detail-notes'),
    tags: document.getElementById('automation-detail-tags'), files: document.getElementById('automation-detail-files'),
    github: document.getElementById('automation-detail-github'), githubNote: document.getElementById('automation-detail-github-note')
  };
  const escapeHtml = value => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[ch]);

  groupOrder.forEach(group => {
    const section = document.createElement('section'); section.className = 'automation-project-group';
    const heading = document.createElement('h3'); heading.textContent = group; section.appendChild(heading);
    const grid = document.createElement('div'); grid.className = 'automation-project-group-grid';
    projects.filter(project => project.group === group).forEach(project => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'automation-project-tab'; button.id = `tab-${project.id}`;
      button.dataset.project = project.id; button.role = 'tab'; button.setAttribute('aria-controls','automation-project-detail'); button.setAttribute('aria-selected','false');
      button.innerHTML = `<span>${escapeHtml(project.number)}</span><div><strong>${escapeHtml(project.title)}</strong><small>${escapeHtml(project.short)}</small></div>`;
      button.addEventListener('click', () => selectProject(project.id, true)); grid.appendChild(button);
    });
    section.appendChild(grid); list.appendChild(section);
  });

  function selectProject(id, updateHash = false) {
    const project = projects.find(item => item.id === id) || projects[0];
    document.querySelectorAll('.automation-project-tab').forEach(button => {
      const active = button.dataset.project === project.id;
      button.classList.toggle('active', active); button.setAttribute('aria-selected', active ? 'true' : 'false'); button.tabIndex = active ? 0 : -1;
    });
    detail.classList.add('is-updating');
    window.setTimeout(() => {
      el.image.src = project.image; el.image.alt = `${project.title} workflow illustration`; el.caption.textContent = project.caption;
      el.number.textContent = `${project.number} · ${project.group}`; el.title.textContent = project.title; el.format.textContent = project.format;
      el.summary.textContent = project.summary; el.problem.textContent = project.problem; el.method.textContent = project.method;
      el.output.textContent = project.output; el.notes.textContent = project.notes;
      el.tags.innerHTML = project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join(''); el.files.textContent = project.files.join(' · ');
      const directLinks = window.AUTOMATION_GITHUB_LINKS || {};
      const base = String(window.AUTOMATION_GITHUB_BASE_URL || '').replace(/\/$/, '');
      const direct = String(directLinks[project.id] || '').trim();
      const projectUrl = direct || (base && !/REPLACE|USERNAME|YOUR-/i.test(base) ? `${base}/tree/main/${project.repoPath}` : '');
      const githubLabel = el.github.querySelector('span');
      if (projectUrl) {
        el.github.href = projectUrl; el.github.target = '_blank'; el.github.rel = 'noopener noreferrer';
        el.github.classList.remove('is-unavailable'); el.github.removeAttribute('aria-disabled');
        githubLabel.textContent = 'View ArcMap source on GitHub'; el.githubNote.hidden = true;
      } else {
        el.github.href = '#'; el.github.removeAttribute('target'); el.github.removeAttribute('rel');
        el.github.classList.add('is-unavailable'); el.github.setAttribute('aria-disabled','true');
        githubLabel.textContent = 'GitHub folder prepared'; el.githubNote.hidden = false;
        el.githubNote.textContent = `Add the repository URL once; this button will open ${project.repoPath}.`;
      }
      detail.classList.remove('is-updating');
    }, 70);
    if (updateHash) history.replaceState(null, '', `#${project.id}`);
    if (window.matchMedia('(max-width: 820px)').matches && updateHash) detail.scrollIntoView({behavior:'smooth',block:'start'});
  }
  el.github.addEventListener('click', event => { if (el.github.getAttribute('aria-disabled') === 'true') event.preventDefault(); });
  list.addEventListener('keydown', event => {
    const tabs = Array.from(document.querySelectorAll('.automation-project-tab'));
    const current = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
    if (!['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
    event.preventDefault(); let next = current;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1;
    tabs[next].focus(); selectProject(tabs[next].dataset.project, true);
  });
  const initial = window.location.hash.replace('#','');
  selectProject(projects.some(project => project.id === initial) ? initial : projects[0].id, false);
})();
