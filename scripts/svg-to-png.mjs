// One-off: rasterize every SVG drawing in public/images/drawings to PNG.
// Renders at 2x device pixel ratio for crisp display on high-DPI screens.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const drawingsDir = path.resolve(__dirname, "..", "public", "images", "drawings");
const SCALE = 2; // render at 2x viewBox for retina sharpness

const files = fs
  .readdirSync(drawingsDir)
  .filter((f) => f.toLowerCase().endsWith(".svg"));

if (files.length === 0) {
  console.log("No SVG files found in", drawingsDir);
  process.exit(0);
}

function parseSize(svg) {
  // Prefer explicit width/height when present; otherwise fall back to viewBox.
  const wMatch = svg.match(/<svg[^>]*\swidth="([\d.]+)(?:px)?"/i);
  const hMatch = svg.match(/<svg[^>]*\sheight="([\d.]+)(?:px)?"/i);
  if (wMatch && hMatch) {
    return { width: Number(wMatch[1]), height: Number(hMatch[1]) };
  }
  const vb = svg.match(/<svg[^>]*\sviewBox="([\d.\s-]+)"/i);
  if (vb) {
    const parts = vb[1].trim().split(/\s+/).map(Number);
    if (parts.length === 4) {
      return { width: parts[2], height: parts[3] };
    }
  }
  return { width: 800, height: 800 };
}

let ok = 0;
let failed = 0;
for (const name of files) {
  const inputPath = path.join(drawingsDir, name);
  const outputPath = path.join(drawingsDir, name.replace(/\.svg$/i, ".png"));
  const svg = fs.readFileSync(inputPath);
  const { width, height } = parseSize(svg.toString("utf8"));
  const outW = Math.round(width * SCALE);
  const outH = Math.round(height * SCALE);
  try {
    await sharp(svg, { density: 192 })
      .resize(outW, outH, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputPath);
    console.log(`OK   ${name} -> ${path.basename(outputPath)}  (${outW}x${outH})`);
    ok++;
  } catch (err) {
    console.error(`FAIL ${name}:`, err.message);
    failed++;
  }
}

console.log(`\nDone. ${ok} succeeded, ${failed} failed.`);
process.exit(failed === 0 ? 0 : 1);
