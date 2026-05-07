// Optimise photo fondateur : 2.4 MB PNG → ~150 KB JPG + ~80 KB WebP
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "public/photos/photoalexandregaudet.png");
const OUT_JPG = path.join(__dirname, "public/photos/alexandre_gaudet.jpg");
const OUT_WEBP = path.join(__dirname, "public/photos/alexandre_gaudet.webp");

console.log("Optimisation photo fondateur…");

// JPG haute qualité, 1000px de large (suffisant pour un portrait dans une carte)
await sharp(SRC).resize({ width: 1000, withoutEnlargement: true }).jpeg({ quality: 85, mozjpeg: true }).toFile(OUT_JPG);
console.log(`✓ ${path.basename(OUT_JPG)} généré`);

// WebP encore plus léger, fallback automatique des navigateurs
await sharp(SRC).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(OUT_WEBP);
console.log(`✓ ${path.basename(OUT_WEBP)} généré`);

// Stats
import fs from "fs";
const tailleJpg = (fs.statSync(OUT_JPG).size / 1024).toFixed(0);
const tailleWebp = (fs.statSync(OUT_WEBP).size / 1024).toFixed(0);
const tailleOrig = (fs.statSync(SRC).size / 1024).toFixed(0);
console.log(`\nOriginal : ${tailleOrig} KB`);
console.log(`JPG opt  : ${tailleJpg} KB (-${(100 - tailleJpg/tailleOrig*100).toFixed(0)} %)`);
console.log(`WebP opt : ${tailleWebp} KB (-${(100 - tailleWebp/tailleOrig*100).toFixed(0)} %)`);
