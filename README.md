# Imran Chowdhury — Spatial Academic Portfolio

Static academic portfolio prepared for **GitHub + Cloudflare Pages** deployment.

## Runtime structure

- `index.html` — homepage / production entry point
- `assets/css/` — site styles
- `assets/js/` — site data and interactions
- `assets/images/` — portfolio imagery and SVG assets
- `assets/media/` — local portfolio video/media
- `assets/documents/` — CV and certificates
- `404.html` — custom not-found page
- `robots.txt` — crawler rules

## Cloudflare Pages deployment

1. Push the contents of this folder to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the GitHub repository.
4. Use `main` as the production branch.
5. Framework preset: **None**.
6. Build command: leave blank (or use `exit 0` if the UI requires one).
7. Build output directory: repository root (`.`) because `index.html` is in the root.
8. Deploy. Cloudflare will provide a free `*.pages.dev` address.

No custom domain is required.

## Updating the portfolio

Edit locally, test, commit, and push to GitHub. Cloudflare Pages will redeploy the production branch automatically. For unfinished work, use a separate development branch so the public `main` version stays stable.

## Local preview

On Windows, run `PREVIEW_WEBSITE.bat` and open the local address shown in the terminal.

## Content editor

Run `OPEN_CONTENT_EDITOR.bat` or open `content-editor.html`. Most portfolio content is stored in `assets/js/site-data.js`.

See `START_HERE_EDITING.md` and `QUICK_EDIT_GUIDE.md` for the existing editing workflow.

## Deployment note

A sitemap is intentionally not included in this cleaned package because sitemap `<loc>` values should be absolute URLs. After the final Cloudflare `pages.dev` URL (or a future custom domain) is known, generate a sitemap using that final public URL and then add its absolute URL to `robots.txt`.
