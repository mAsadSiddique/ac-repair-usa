/**
 * Shared dataset loader/derivation logic used by both generate-sitemap.mjs
 * and generate-prerender.mjs. Mirrors the algorithm in src/data/states.ts
 * exactly (same hash function, same variant/temp/multiplier derivation) so
 * prerendered HTML content matches what the live SPA renders for the same
 * URL.
 *
 * Extra per-city service pages (SERVICE_SLUGS) are only generated for
 * "major" cities (population >= MAJOR_POP_THRESHOLD baked into citiesRaw.json
 * as the `m` flag) to keep the sitemap focused on meaningfully-sized places
 * while every real city/town still gets its own AC-repair landing page.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

export const SERVICE_SLUGS = [
  "ac-service",
  "ac-installation",
  "hvac-repair",
  "hvac-installation",
  "heating-repair",
  "furnace-repair",
  "emergency-ac-repair",
  "thermostat-repair",
];

export const SERVICE_LABELS = {
  "ac-repair": "AC Repair",
  "ac-service": "AC Service",
  "ac-installation": "AC Installation",
  "hvac-repair": "HVAC Repair",
  "hvac-installation": "HVAC Installation",
  "heating-repair": "Heating Repair",
  "furnace-repair": "Furnace Repair",
  "emergency-ac-repair": "Emergency AC Repair",
  "thermostat-repair": "Thermostat Repair",
};

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function buildCityData(raw, meta) {
  const hash = hashString(`${raw.n}|${meta.abbr}`);
  const variant = meta.variants[hash % meta.variants.length];
  const tempJitter = (hash % 5) - 2;
  const avgSummerTemp = `${meta.avgTempNum + tempJitter}°F`;
  const multSpan = meta.multMax - meta.multMin;
  const steps = 12;
  const estimatedCostMultiplier = parseFloat(
    (meta.multMin + ((hash % (steps + 1)) / steps) * multSpan).toFixed(2)
  );

  return {
    name: raw.n,
    isMajor: raw.m,
    climateProfile: variant.climateProfile,
    commonIssue: variant.commonIssue,
    avgSummerTemp,
    estimatedCostMultiplier,
    population: raw.p,
  };
}

let cachedStates = null;

/** Returns StateData[]-shaped array identical to src/data/states.ts STATES_DB. */
export function loadStates() {
  if (cachedStates) return cachedStates;

  const citiesRaw = JSON.parse(fs.readFileSync(path.join(root, "src/data/citiesRaw.json"), "utf8"));
  const stateMeta = JSON.parse(fs.readFileSync(path.join(root, "src/data/stateMeta.json"), "utf8"));

  const byState = new Map();
  for (const row of citiesRaw) {
    if (!byState.has(row.s)) byState.set(row.s, []);
    byState.get(row.s).push(row);
  }

  cachedStates = stateMeta.map((meta) => {
    const rows = byState.get(meta.abbr) || [];
    const sorted = [...rows].sort((a, b) => {
      if (a.m !== b.m) return a.m ? -1 : 1;
      return b.p - a.p;
    });
    const cities = sorted.map((row) => buildCityData(row, meta));
    return {
      name: meta.name,
      abbr: meta.abbr,
      capital: meta.capital,
      climateZone: meta.climateZone,
      avgTemp: meta.avgTemp,
      seoTip: meta.seoTip,
      cities,
    };
  });

  return cachedStates;
}
