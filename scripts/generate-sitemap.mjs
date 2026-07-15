/**
 * Generates public/sitemap.xml from STATES_DB city listings.
 * Run before Vite build so the file is copied into dist/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const statesPath = path.join(root, "src/data/states.ts");
const outPath = path.join(root, "public/sitemap.xml");

const SITE = "https://getacrepairusa.com";
const SERVICE_SLUGS = [
  "ac-repair",
  "ac-service",
  "ac-installation",
  "hvac-repair",
  "hvac-installation",
  "heating-repair",
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const source = fs.readFileSync(statesPath, "utf8");

/** Parse state blocks: name + abbr + city names */
const states = [];
const stateBlocks = source.split(/\n  \{\n    name: "/).slice(1);

for (const block of stateBlocks) {
  const stateName = block.match(/^([^"]+)"/)?.[1];
  const abbr = block.match(/abbr: "([A-Z]{2})"/)?.[1];
  if (!stateName || !abbr) continue;

  // Only take cities until the next top-level state or end of cities array close before capital-level fields end
  const citiesSection = block.split(/cities:\s*\[/)[1]?.split(/\n    \]/)[0] || "";
  const cities = [...citiesSection.matchAll(/name: "([^"]+)", isMajor/g)].map((m) => m[1]);

  states.push({ name: stateName, abbr, cities });
}

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

for (const state of states) {
  const stateSlug = slugify(state.name);
  pushUrl(`${SITE}/${stateSlug}`, "0.8", "weekly");

  for (const city of state.cities) {
    const citySlug = slugify(city);
    // Default city landing (ac-repair)
    pushUrl(`${SITE}/${stateSlug}/${citySlug}`, "0.7", "weekly");
    for (const service of SERVICE_SLUGS) {
      if (service === "ac-repair") continue; // already covered by city landing
      pushUrl(`${SITE}/${stateSlug}/${citySlug}/${service}`, "0.6", "weekly");
    }
  }
}

const body = urls
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

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, xml, "utf8");
console.log(`sitemap.xml written with ${urls.length} URLs → public/sitemap.xml`);

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
fs.writeFileSync(path.join(root, "public/sitemap-images.xml"), imageXml, "utf8");
console.log("sitemap-images.xml written → public/sitemap-images.xml");
