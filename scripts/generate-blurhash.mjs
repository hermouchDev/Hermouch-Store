// scripts/generate-blurhash.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { encode } from "blurhash";

async function blurHashFor(file) {
    const img = sharp(file);
    const { data, info } = await img
        .raw()
        .ensureAlpha()
        .resize(32, 32, { fit: "inside" })
        .toBuffer({ resolveWithObject: true });

    return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 3);
}

const IMAGES_DIR = "public/images";
const out = {};

for (const file of fs.readdirSync(IMAGES_DIR)) {
    const full = path.join(IMAGES_DIR, file);
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    out[file] = await blurHashFor(full);
}

fs.writeFileSync("public/blurhash-map.json", JSON.stringify(out, null, 2));
console.log("Wrote public/blurhash-map.json");
