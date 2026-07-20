/**
 * Generates a sitemap index + chunked sitemap files from the real cities
 * dataset (citiesRaw.json + stateMeta.json — see scripts/lib/cityData.mjs).
 * Run before Vite build so the files are copied into dist/.
 *
 * Every real city/town gets its AC-repair landing page; only "major" cities
 * (population >= threshold baked into citiesRaw.json) get the 8 additional
 * dedicated service pages. At this scale (~50k URLs) we exceed the
 * per-sitemap-file limit of 50,000 URLs set by the sitemaps.org protocol, so
 * output is split into chunks referenced from a sitemap index file
 * (public/sitemap.xml), the standard approach for large sites.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadStates, SERVICE_SLUGS, slugify } from "./lib/cityData.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");

const SITE = "https://getacrepairusa.com";
const CHUNK_SIZE = 20000; // well under the 50,000-URL protocol limit per file

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const states = loadStates();
const today = new Date().toISOString().slice(0, 10);
const urls = [];

function pushUrl(loc, priority, changefreq = "weekly") {
  urls.push({ loc, priority, changefreq });
}

pushUrl(`${SITE}/`, "1.0", "daily");
pushUrl(`${SITE}/services`, "0.9", "weekly");
pushUrl(`${SITE}/diagnostics`, "0.8", "weekly");
pushUrl(`${SITE}/directory`, "0.9", "weekly");
pushUrl(`${SITE}/terms`, "0.3", "yearly");
pushUrl(`${SITE}/privacy`, "0.3", "yearly");

let cityLandingCount = 0;
let serviceSubPageCount = 0;

for (const state of states) {
  const stateSlug = slugify(state.name);
  pushUrl(`${SITE}/${stateSlug}`, "0.8", "weekly");

  for (const city of state.cities) {
    const citySlug = slugify(city.name);
    pushUrl(`${SITE}/${stateSlug}/${citySlug}`, city.isMajor ? "0.7" : "0.6", "weekly");
    cityLandingCount++;

    if (city.isMajor) {
      for (const service of SERVICE_SLUGS) {
        pushUrl(`${SITE}/${stateSlug}/${citySlug}/${service}`, "0.6", "weekly");
        serviceSubPageCount++;
      }
    }
  }
}

// Clean up any stale chunk files from a previous run with a different chunk count
for (const f of fs.readdirSync(publicDir)) {
  if (/^sitemap-\d+\.xml$/.test(f)) fs.unlinkSync(path.join(publicDir, f));
}

const chunkFiles = [];
for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
  const chunk = urls.slice(i, i + CHUNK_SIZE);
  const body = chunk
    .map(
      (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  const fileName = `sitemap-${chunkFiles.length}.xml`;
  fs.writeFileSync(path.join(publicDir, fileName), xml, "utf8");
  chunkFiles.push(fileName);
}

const indexBody = chunkFiles
  .map(
    (f) => `  <sitemap>
    <loc>${SITE}/${f}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  )
  .join("\n");

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexBody}
  <sitemap>
    <loc>${SITE}/sitemap-images.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), indexXml, "utf8");

console.log(
  `Sitemap index written: ${chunkFiles.length} chunk file(s), ${urls.length} total URLs ` +
    `(${cityLandingCount} city landings + ${serviceSubPageCount} major-city service pages + core/state pages).`
);
chunkFiles.forEach((f, i) => {
  const count = Math.min(CHUNK_SIZE, urls.length - i * CHUNK_SIZE);
  console.log(`  public/${f} — ${count} URLs`);
});
console.log(`  public/sitemap.xml — index referencing ${chunkFiles.length} chunk(s) + sitemap-images.xml`);

// Image sitemap for primary OG/hero assets
const imageXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE}/</loc>
    <image:image>
      <image:loc>${SITE}/og-cover.jpg</image:loc>
      <image:title>getacrepair nationwide AC repair technician</image:title>
      <image:caption>Licensed HVAC technician performing air conditioning repair</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${SITE}/services</loc>
    <image:image>
      <image:loc>${SITE}/og-cover.jpg</image:loc>
      <image:title>getacrepair AC services</image:title>
    </image:image>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(publicDir, "sitemap-images.xml"), imageXml, "utf8");
console.log("public/sitemap-images.xml written");
