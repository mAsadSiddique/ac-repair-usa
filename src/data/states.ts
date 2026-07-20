/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StateData, CityData } from "../types";
import { STATE_META, StateMetaEntry } from "./stateMeta";
import citiesRawData from "./citiesRaw.json";

/**
 * STATES_DB is derived at module-load time from two real, verifiable sources:
 *  1. citiesRaw.json — every incorporated place/CDP in the 50 states + DC with a
 *     2023 Census Bureau population estimate of 100+ (source: US Census Bureau
 *     Population Division, SUB-EST2023, SUMLEV 157/162, www2.census.gov). No
 *     fabricated city names — this is the same real-cities-only approach used
 *     throughout the site.
 *  2. stateMeta.ts — hand-authored, state-level climate context and a small
 *     pool of climate/issue phrase variants per state.
 *
 * Each real city is deterministically assigned one variant (via a stable hash
 * of its name), so nearby small towns share realistic, state-appropriate
 * content without hand-authoring 18,000+ unique paragraphs. `isMajor` cities
 * (population 7,000+) get the full set of dedicated service sub-pages; every
 * other real place still gets its own AC-repair landing page.
 */

interface RawCity {
  s: string;
  n: string;
  p: number;
  m: boolean;
}

const citiesRaw = citiesRawData as RawCity[];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function buildCityData(raw: RawCity, meta: StateMetaEntry): CityData {
  const hash = hashString(`${raw.n}|${meta.abbr}`);
  const variant = meta.variants[hash % meta.variants.length];
  const tempJitter = (hash % 5) - 2; // deterministic -2..+2 spread around state avg
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

function buildStatesDb(): StateData[] {
  const byState = new Map<string, RawCity[]>();
  for (const row of citiesRaw) {
    const list = byState.get(row.s);
    if (list) {
      list.push(row);
    } else {
      byState.set(row.s, [row]);
    }
  }

  return STATE_META.map((meta) => {
    const rows = byState.get(meta.abbr) || [];
    // Majors first (population desc), then the rest — keeps directory/search UX sensible.
    const sorted = [...rows].sort((a, b) => {
      if (a.m !== b.m) return a.m ? -1 : 1;
      return b.p - a.p;
    });
    const cities: CityData[] = sorted.map((row) => buildCityData(row, meta));

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
}

export const STATES_DB: StateData[] = buildStatesDb();

export function getStatesMap(): Map<string, StateData> {
  const map = new Map<string, StateData>();
  STATES_DB.forEach(state => {
    map.set(state.abbr.toUpperCase(), state);
    map.set(state.name.toLowerCase(), state);
  });
  return map;
}

export function findStateByAbbrOrName(input: string): StateData | undefined {
  const clean = input.trim().toLowerCase();
  return STATES_DB.find(s => s.name.toLowerCase() === clean || s.abbr.toLowerCase() === clean);
}

export function getCityDetails(stateAbbr: string, cityName: string): CityData {
  const state = findStateByAbbrOrName(stateAbbr);
  if (!state) {
    return createDynamicCity(cityName, stateAbbr);
  }
  const found = state.cities.find(c => c.name.toLowerCase() === cityName.trim().toLowerCase());
  if (found) return found;
  return createDynamicCity(cityName, state.abbr);
}

export function createDynamicCity(cityName: string, stateAbbr: string): CityData {
  // Generates a fully compliant, realistic CityData object dynamically for any US city
  // typed in manually that isn't already present in STATES_DB (e.g. a very small
  // unincorporated place below our population threshold).
  const meta = STATE_META.find(s => s.abbr.toUpperCase() === stateAbbr.toUpperCase()) || STATE_META[0];
  const hash = hashString(`${cityName}|${meta.abbr}`);
  const variant = meta.variants[hash % meta.variants.length];
  const multSpan = meta.multMax - meta.multMin;
  const estimatedCostMultiplier = parseFloat((meta.multMin + ((hash % 13) / 12) * multSpan).toFixed(2));

  return {
    name: cityName,
    isMajor: false,
    climateProfile: variant.climateProfile,
    commonIssue: variant.commonIssue,
    avgSummerTemp: meta.avgTemp,
    estimatedCostMultiplier,
  };
}
