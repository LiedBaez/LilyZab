// Lee fotos sueltas y extraídas en scripts/_tmp/, las redimensiona y convierte a WebP,
// y las guarda en public/img/<año>/NN.webp. También genera src/data/photos.generated.js
// con la lista de archivos por año (consumida por chapters.js).

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, 'scripts', '_tmp');
const PUBLIC_IMG = path.join(ROOT, 'public', 'img');
const GENERATED = path.join(ROOT, 'src', 'data', 'photos.generated.js');

const IMG_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

// Fuentes "sueltas" (archivos en la raíz, no ZIPs) que ya conocemos por nombre.
// Mapeo manual con el año destino.
const LOOSE_SOURCES = [
  // 2018
  { src: '2018 foto de zab.png', year: '2018', caption: 'Yo en 2018' },
  { src: '2018 mc.png', year: '2018', caption: 'Minecraft, 2018' },
  { src: '28 sep 2018 foto de lily.png', year: '2018', caption: 'Tú, 28 de septiembre de 2018' },
  { src: 'Foto de Lily antigua 2018.png', year: '2018', caption: 'Tú, en algún día de 2018' },
  { src: 'Chat con lily 2018 26 de agosto.png', year: '2018', caption: 'Chat, 26 de agosto de 2018' },
  { src: 'Capturas antiguas 2018.png', year: '2018', caption: 'Capturas de aquel año' },
  { src: 'Captura de pantalla antigua de 2018.png', year: '2018', caption: 'Captura antigua, 2018' },
  { src: 'captura de mensajes antiguos con ella en 2018.png', year: '2018', caption: 'Mensajes que guardé' },
  { src: 'Te enamorarias de mi Mensaje importante de 2018 que nos preguntamos.png', year: '2018', caption: '“¿Te enamorarías de mí?” — la pregunta que nos hicimos', isHero: true },

  // 2020-2021 (Matilda — nuestra hija)
  { src: 'Foto de mi perrita en 2020.jpg', year: '2020', caption: 'Nuestra Matilda, 2020' },
  { src: 'Foto de mi perrita en 2021.jpg', year: '2021', caption: 'Nuestra Matilda, 2021' },

  // 2019 — primera foto compartida, el día que se hicieron novios
  // (el archivo dice "2022" en el nombre pero el contenido es del 1-Ago-2019)
  { src: 'LA FOTO MAS ESPECIAL QUE TENEMOS COMPARTIDA EN COLLAGE 2022.jpg', year: '2019', caption: 'Nuestra primera foto · 1 de agosto de 2019', isHero: true },

  // 2026
  { src: 'Fotos de 2026 Poner reflexion final de que seguimos juntos (1).jpg', year: '2026', caption: '' },
  { src: 'Fotos de 2026 Poner reflexion final de que seguimos juntos (2).jpg', year: '2026', caption: '' },
  { src: 'Fotos de 2026 Poner reflexion final de que seguimos juntos (3).jpg', year: '2026', caption: '' },
  { src: 'Fotos de 2026 Poner reflexion final de que seguimos juntos (4).jpg', year: '2026', caption: '' },
  { src: 'Fotos de 2026 Poner reflexion final de que seguimos juntos (5).jpg', year: '2026', caption: '' },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function findImagesRecursive(dir) {
  const results = [];
  async function walk(d) {
    let entries;
    try { entries = await fs.readdir(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) await walk(full);
      else if (IMG_EXTS.has(path.extname(e.name).toLowerCase())) results.push(full);
    }
  }
  await walk(dir);
  return results.sort();
}

async function processImage(srcPath, destPath) {
  await ensureDir(path.dirname(destPath));
  await sharp(srcPath, { failOn: 'none' })
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(destPath);
}

async function main() {
  await fs.rm(PUBLIC_IMG, { recursive: true, force: true });
  await ensureDir(PUBLIC_IMG);

  const photosByYear = {}; // { '2018': [ { file: 'img/2018/01.webp', caption, isHero } ] }

  // 1) Fotos sueltas
  for (const item of LOOSE_SOURCES) {
    const src = path.join(ROOT, item.src);
    try {
      await fs.access(src);
    } catch {
      console.warn('Falta (saltada):', item.src);
      continue;
    }
    const yearDir = path.join(PUBLIC_IMG, item.year);
    await ensureDir(yearDir);
    const existing = await fs.readdir(yearDir).catch(() => []);
    const idx = String(existing.length + 1).padStart(2, '0');
    const outName = `${idx}.webp`;
    await processImage(src, path.join(yearDir, outName));
    (photosByYear[item.year] ||= []).push({
      file: `img/${item.year}/${outName}`,
      caption: item.caption || '',
      isHero: !!item.isHero,
    });
    console.log('OK', item.year, outName, '<-', item.src);
  }

  // 2) ZIPs ya extraídos (2022/2023/2024/2025)
  for (const year of ['2022', '2023', '2024', '2025']) {
    const srcDir = path.join(TMP, year);
    const imgs = await findImagesRecursive(srcDir);
    if (imgs.length === 0) continue;
    const yearDir = path.join(PUBLIC_IMG, year);
    await ensureDir(yearDir);
    const existing = await fs.readdir(yearDir).catch(() => []);
    let counter = existing.length;
    for (const img of imgs) {
      counter += 1;
      const idx = String(counter).padStart(2, '0');
      const outName = `${idx}.webp`;
      try {
        await processImage(img, path.join(yearDir, outName));
        (photosByYear[year] ||= []).push({ file: `img/${year}/${outName}`, caption: '', isHero: false });
        console.log('OK', year, outName, '<-', path.basename(img));
      } catch (e) {
        console.warn('FAIL', img, e.message);
      }
    }
  }

  // 3) Escribir photos.generated.js
  const banner = `// AUTO-GENERATED por scripts/optimize-photos.mjs — no editar a mano.\n// Regenerar con: npm run optimize-photos\n\n`;
  const content = `${banner}export const PHOTOS_BY_YEAR = ${JSON.stringify(photosByYear, null, 2)};\n`;
  await fs.writeFile(GENERATED, content, 'utf8');

  const totals = Object.entries(photosByYear)
    .map(([y, arr]) => `${y}: ${arr.length}`)
    .join(' · ');
  console.log('\nResumen:', totals);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
