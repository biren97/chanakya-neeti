# चाणक्य नीति site

```
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
```

Copy `.env.example` to `.env.local` and fill it in (site URL, contact email, AdSense IDs).

## Adding your real-life example and photo to a shloka

1. Put the original photo in `images-source/` and name it after the shloka, e.g. `1-3.jpg` (chapter 1, shloka 3).
2. Run `npm run images`. It writes a small WebP (fits inside 1200x1200, usually 40-90 KB; portrait and landscape both work) to `public/images/1-3.webp`.
3. Open `src/data/extras.js` and add an entry:

```js
"1-3": {
  example: ["Your story, paragraph 1.", "Paragraph 2 (optional)."],
  author: "Your name",
  image: "/images/1-3.webp",
  alt: "What the photo shows",
  caption: "Optional caption",
},
```

A shloka with no entry shows no example box. Every shloka already gets a generated
mandala artwork (inline SVG, about 1 KB, no download).

## Adding chapters

Create `src/data/ch16.js` (same format as `ch15.js`), then import it and add `16: ch16` in
`src/data/chapters.js`. Chapters with no shlokas are hidden automatically.

`node scripts/check-data.mjs` checks the shloka data.
