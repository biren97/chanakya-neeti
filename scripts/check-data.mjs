// Sanity-check chapter data: node scripts/check-data.mjs
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.resolve("src/data");
let total = 0;
for (let n = 1; n <= 17; n++) {
  const file = path.join(dir, `ch${n}.js`);
  if (!existsSync(file)) { console.log(`ch${n}: missing`); continue; }
  const { default: slokas } = await import(pathToFileURL(file).href);
  const bad = slokas.filter((s) => !s.title?.includes(" : ") || !s.sloka || !s.meaning?.length || !s.lesson);
  const nodanda = slokas.filter((s) => !/[॥]$/.test(s.sloka.trim())).length;
  total += slokas.length;
  console.log(`ch${n}: ${slokas.length} slokas, ${bad.length} malformed, ${nodanda} without ॥`);
}
console.log("total", total);
