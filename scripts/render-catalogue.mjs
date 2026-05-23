// Render every page of the SUPERTECH motor export catalogue to PNG
// using pdfjs-dist directly + sharp (no native canvas dependency).
//
// pdfjs-dist's legacy/node-friendly build provides a canvas-free `renderPage`
// path when we pass an OffscreenCanvas polyfill, but the simpler approach is
// to use the dedicated `@napi-rs/canvas`-style adapter. To avoid that native
// dep, we use the "pdfjs-dist/legacy/build/pdf.mjs" + a JS canvas polyfill.
//
// Strategy: use pdfium-style rendering via `pdfjs-dist`'s built-in
// `getDocument` + `getOperatorList` is too low-level. We use the node-canvas
// approach by importing `@napi-rs/canvas` lazily; if unavailable, we fall back
// to a pure-JS render through `@react-pdf` style raster pipeline (not great).
//
// In practice, since pdf-to-png-converter is already installed and pulls in
// pdfjs-dist + sharp, we replicate its render loop here but with FIXED
// forward-slash cmap paths to avoid the Windows bug.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const PDF_PATH =
  "C:\\Users\\Akhunji\\Desktop\\Master Desktop\\PUMP BROCHURE\\SUPERTECH_EXPORT-CATALOUGE-5060Hz MOTOR.pdf";
const OUT_DIR = path.resolve("public", "images", "drawings", "catalogue");
const SCALE = 2.0; // ~144 DPI

await fs.mkdir(OUT_DIR, { recursive: true });

// Dynamically import pdfjs-dist legacy build (Node-compatible).
const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

// Build a file:// URL with trailing forward slash for cmaps (fix Win bug).
const pdfjsDir = path.dirname(fileURLToPath(import.meta.resolve("pdfjs-dist/legacy/build/pdf.mjs")));
const cmapsRoot = path.resolve(pdfjsDir, "..", "..", "cmaps") + path.sep;
const standardFontsRoot =
  path.resolve(pdfjsDir, "..", "..", "standard_fonts") + path.sep;
const cmapUrl = pathToFileURL(cmapsRoot).toString();
const standardFontDataUrl = pathToFileURL(standardFontsRoot).toString();

console.log(`Loading ${PDF_PATH}`);
const data = new Uint8Array(await fs.readFile(PDF_PATH));

const loadingTask = pdfjs.getDocument({
  data,
  cMapUrl: cmapUrl,
  cMapPacked: true,
  standardFontDataUrl,
  // Disable font/image streaming worker bits not needed in Node.
  disableFontFace: true,
  useSystemFonts: false,
  isEvalSupported: false
});
const doc = await loadingTask.promise;
console.log(`PDF loaded: ${doc.numPages} pages`);

// Minimal canvas2D polyfill backed by a flat RGBA buffer + sharp.
// pdfjs only uses a small subset of CanvasRenderingContext2D, but a real
// implementation here would be huge. Instead we use the pdfjs "imageLayer"
// path via NodeCanvasFactory pattern. To stay dependency-free we attempt to
// load @napi-rs/canvas; if not present, we abort with a clear message.
let createCanvas;
try {
  const m = await import("@napi-rs/canvas");
  createCanvas = m.createCanvas;
  console.log("Using @napi-rs/canvas for rendering");
} catch {
  console.log("Installing @napi-rs/canvas (one-time)...");
  const { execSync } = await import("node:child_process");
  execSync("npm install --no-save @napi-rs/canvas", { stdio: "inherit" });
  const m = await import("@napi-rs/canvas");
  createCanvas = m.createCanvas;
}

let ok = 0;
let fail = 0;
for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
  try {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: SCALE });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: context, viewport, canvas }).promise;
    const pngBuf = canvas.toBuffer("image/png");
    const outName = `motor-catalogue-${String(pageNum).padStart(2, "0")}.png`;
    const outPath = path.join(OUT_DIR, outName);
    // Re-encode through sharp with strong compression for smaller files.
    await sharp(pngBuf).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(outPath);
    const size = (await fs.stat(outPath)).size;
    console.log(`OK   page ${pageNum.toString().padStart(2)}/${doc.numPages} -> ${outName}  (${(size / 1024).toFixed(0)} KB)`);
    ok++;
    page.cleanup();
  } catch (err) {
    console.error(`FAIL page ${pageNum}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone. ${ok} succeeded, ${fail} failed.`);
process.exit(fail === 0 ? 0 : 1);
