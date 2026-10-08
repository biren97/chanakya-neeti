// Shrinks photos for the web: put originals in /images-source, run `npm run images`.
// Output: /public/images/<name>.webp  (fits inside 1200x1200, quality 72, typically 40-90 KB)
import { readdirSync, mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const src = "images-source";
const out = "public/images";
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  if (!/\.(jpe?g|png|webp|heic|avif)$/i.test(f)) continue;
  const name = path.parse(f).name + ".webp";
  const info = await sharp(path.join(src, f))
    .rotate()
    .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(out, name));
  console.log(`${name}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
