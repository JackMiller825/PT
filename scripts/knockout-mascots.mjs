import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(root, "images", "mascot");
const outDir = path.join(root, "public", "mascot");

fs.mkdirSync(outDir, { recursive: true });

function isBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max < 28 && max - min < 18;
}

async function knockout(file) {
  const input = path.join(sourceDir, file);
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = Buffer.from(data);
  const seen = new Uint8Array(width * height);
  const queue = [];

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const p = y * width + x;
    if (seen[p]) return;
    const i = p * channels;
    if (!isBackground(pixels[i], pixels[i + 1], pixels[i + 2])) return;
    seen[p] = 1;
    queue.push(p);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  for (let q = 0; q < queue.length; q++) {
    const p = queue[q];
    const x = p % width;
    const y = (p / width) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  for (let p = 0; p < width * height; p++) {
    if (!seen[p]) continue;
    pixels[p * channels + 3] = 0;
  }

  // Soften the dark halo and drop neon cutout fringes sitting on the edge.
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = y * width + x;
      const i = p * channels;
      if (pixels[i + 3] === 0) continue;
      let open = 0;
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        const n = ((y + dy) * width + (x + dx)) * channels;
        if (pixels[n + 3] === 0) open++;
      }
      if (open === 0) continue;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max - min;
      if (open >= 5 && sat > 70 && (r > 160 || g > 160 || b < 40)) {
        pixels[i + 3] = 0;
        continue;
      }
      if (open >= 2 && max < 48) {
        pixels[i + 3] = Math.round((max / 48) * 180);
      }
    }
  }

  const out = path.join(outDir, file.replace(/\.png$/i, ".webp"));
  await sharp(pixels, { raw: { width, height, channels: 4 } })
    .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 5 })
    .toFile(out);

  const stat = fs.statSync(out);
  console.log(`${file} ${width}x${height} -> ${(stat.size / 1024).toFixed(0)} KB`);
}

const files = fs
  .readdirSync(sourceDir)
  .filter((name) => name.toLowerCase().endsWith(".png"))
  .sort();

for (const file of files) {
  await knockout(file);
}
