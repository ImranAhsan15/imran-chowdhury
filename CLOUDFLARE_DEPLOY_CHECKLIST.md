# Cloudflare Pages deployment checklist

- GitHub repository contains the extracted website files, not the RAR/ZIP archive.
- `index.html` remains in the repository root.
- Cloudflare Pages framework preset: **None**.
- Production branch: `main`.
- Build output directory: `.`.
- No custom domain is required; use the assigned `*.pages.dev` URL.
- Test Home, Research, Publications, Teaching, Expertise, Training, CV/Contact, maps, videos, and PDF links after deployment.
- The site uses external Leaflet/OpenStreetMap/Carto resources for some maps, so those interactive map layers require internet access.
- The included HEVC UAV clip may have weaker browser support than H.264; it was intentionally left unchanged to preserve original media quality and behavior.
