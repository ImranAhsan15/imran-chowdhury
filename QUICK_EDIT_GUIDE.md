# Quick Editing Guide — Spatial Story Version

## Change normal website content

1. Open `content-editor.html` or double-click `OPEN_CONTENT_EDITOR.bat`.
2. Edit the relevant fields.
3. Download the updated `site-data.js`.
4. Replace `assets/js/site-data.js`.

## Add a photograph, map, or figure

1. Copy the file into `assets/uploads/images/`.
2. Use a path such as `assets/uploads/images/training-photo-01.jpg` in the content editor.
3. Replace `site-data.js` and preview the website.

## Add a video

Use a public YouTube or Vimeo link in the content editor. Do not upload very large videos directly to GitHub Pages.

## Story map behavior

- The map is linked to the scrolling chapters.
- Clicking a map marker moves to the matching chapter.
- Scrolling activates the matching marker.
- The online version uses OpenStreetMap when available.
- The offline preview uses the built-in coordinate map automatically.

## Files to avoid editing

Do not edit `assets/js/storymap.js`, `assets/js/site.js`, or `assets/css/styles.css` unless you want to change the design itself.
