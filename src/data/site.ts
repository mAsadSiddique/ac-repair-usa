/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PHONE_E164, PHONE_DISPLAY, PHONE_DIGITS } from "./phone";

/** Production site origin — keep in sync with the live custom domain. */
export const SITE_URL = "https://getacrepairusa.com";
export const SITE_NAME = "getacrepair";
export const SITE_LEGAL_NAME = "getacrepair USA Inc.";
export const SITE_TAGLINE = "Same-Day AC Repair Near Me | Emergency HVAC Nationwide";
export const SITE_DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;
export const SITE_DEFAULT_DESCRIPTION =
  "Need same-day AC repair near you? getacrepair dispatches licensed EPA-certified techs for emergency AC repair, SEER2 installation, heat pumps, and HVAC tune-ups in all 50 states. Call " +
  PHONE_DISPLAY +
  ".";

/** High-intent / trending HVAC search themes for 2026 (meta + schema knowsAbout). */
export const SITE_KEYWORDS = [
  "AC repair near me",
  "same day AC repair",
  "emergency AC repair",
  "AC not cooling",
  "air conditioner repair",
  "HVAC repair near me",
  "SEER2 AC installation",
  "heat pump installation",
  "furnace repair near me",
  "AC capacitor replacement",
  "central air repair",
  "24 hour AC service",
].join(", ");

export const SITE_TWITTER_HANDLE = "@getacrepair";
export const SITE_OG_IMAGE_PATH = "/og-cover.jpg";
export const SITE_OG_IMAGE = `${SITE_URL}${SITE_OG_IMAGE_PATH}`;
export const SITE_LOCALE = "en_US";

export const SITE_PHONE_E164 = PHONE_E164;
export const SITE_PHONE_DISPLAY = PHONE_DISPLAY;
export const SITE_PHONE_DIGITS = PHONE_DIGITS;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
