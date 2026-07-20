/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Per-state metadata used to derive full CityData for every real city in
 * citiesRaw.json. `variants` is a small pool of authored climate/issue
 * phrase-pairs unique to that state; individual cities are deterministically
 * assigned a variant (see hashString/buildCityData in states.ts) so nearby
 * small towns share realistic, state-appropriate content without needing
 * 18,000+ hand-written entries.
 *
 * The underlying data lives in stateMeta.json (plain JSON) so the exact same
 * source of truth can be read by both the Vite/React app (via this typed
 * module) and the Node build scripts (scripts/lib/cityData.mjs), which read
 * the JSON file directly with fs — keeping sitemap/prerender output in sync
 * with what the SPA renders at runtime.
 */
import stateMetaRaw from "./stateMeta.json";

export interface StateVariant {
  climateProfile: string;
  commonIssue: string;
}

export interface StateMetaEntry {
  name: string;
  abbr: string;
  capital: string;
  climateZone: string;
  avgTemp: string;
  avgTempNum: number;
  seoTip: string;
  multMin: number;
  multMax: number;
  variants: StateVariant[];
}

export const STATE_META: StateMetaEntry[] = stateMetaRaw as StateMetaEntry[];
