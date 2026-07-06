/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Client-side data layer.
 *
 * This module replaces the previous Express backend. All data now lives in the
 * browser (localStorage), which makes the site a fully static, production-ready
 * SPA that can be hosted on any static host (Netlify, Vercel, GitHub Pages, S3...).
 *
 * The public API mirrors the old REST endpoints so the UI code stays virtually
 * unchanged, and small artificial delays keep the existing loading animations
 * feeling natural.
 */

import { Booking, Review, ServiceType } from "../types";

const REVIEWS_KEY = "aeronation_reviews_v1";
const BOOKINGS_KEY = "aeronation_bookings_v1";

// Seed reviews shown to every first-time visitor.
const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev1",
    customerName: "Sarah Jenkins",
    city: "Houston",
    state: "TX",
    rating: 5,
    serviceType: ServiceType.AC_REPAIR,
    comment:
      "Our AC stopped blowing cold air on a 95-degree Saturday afternoon. Called Nationwide and a technician was dispatched within 2 hours. He replaced a blown capacitor and had us back up and running in 30 minutes! Exceptionally professional same-day service.",
    date: "2026-06-28",
  },
  {
    id: "rev2",
    customerName: "Michael Chang",
    city: "Phoenix",
    state: "AZ",
    rating: 5,
    serviceType: ServiceType.AC_INSTALLATION,
    comment:
      "Upgraded our old central AC unit to a modern 18 SEER heat pump system before the summer heatwave hit. The crew was efficient, kept the work area pristine, and explained all the smart thermostat controls. Our cooling bills have already dropped by 30%!",
    date: "2026-07-01",
  },
  {
    id: "rev3",
    customerName: "David Miller",
    city: "Miami",
    state: "FL",
    rating: 4,
    serviceType: ServiceType.AC_MAINTENANCE,
    comment:
      "Excellent preventive maintenance. The technician cleared a minor sludge buildup in our condensate line that could have caused a massive overflow later. Very knowledgeable about local high-humidity issues.",
    date: "2026-07-03",
  },
  {
    id: "rev4",
    customerName: "Amanda Peterson",
    city: "Atlanta",
    state: "GA",
    rating: 5,
    serviceType: ServiceType.THERMOSTAT_REPAIR,
    comment:
      "Fantastic smart thermostat installation and training. The tech calibrated everything and set up customized zoning schedules. No more arguments over the temperature!",
    date: "2026-06-15",
  },
];

const isBrowser = typeof window !== "undefined" && typeof window.localStorage !== "undefined";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function randomId(prefix: string): string {
  return prefix + Math.random().toString(36).slice(2, 11);
}

// --- REVIEWS ---------------------------------------------------------------

function readReviewsSync(): Review[] {
  if (!isBrowser) return DEFAULT_REVIEWS;
  const stored = window.localStorage.getItem(REVIEWS_KEY);
  if (stored === null) {
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(DEFAULT_REVIEWS));
    return DEFAULT_REVIEWS;
  }
  return safeParse<Review[]>(stored, DEFAULT_REVIEWS);
}

export async function getReviews(): Promise<Review[]> {
  await delay(300);
  return readReviewsSync();
}

export interface ReviewInput {
  customerName: string;
  city: string;
  state: string;
  rating: number;
  serviceType: ServiceType;
  comment: string;
}

export async function addReview(input: ReviewInput): Promise<Review> {
  await delay(500);

  const newReview: Review = {
    id: randomId("r-"),
    customerName: input.customerName,
    city: input.city,
    state: input.state,
    rating: Number(input.rating),
    serviceType: input.serviceType,
    comment: input.comment,
    date: new Date().toISOString().split("T")[0],
  };

  const reviews = readReviewsSync();
  reviews.unshift(newReview); // Newest first
  if (isBrowser) {
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  }
  return newReview;
}

// --- BOOKINGS --------------------------------------------------------------

function readBookingsSync(): Booking[] {
  if (!isBrowser) return [];
  return safeParse<Booking[]>(window.localStorage.getItem(BOOKINGS_KEY), []);
}

export async function getBookings(): Promise<Booking[]> {
  await delay(200);
  return readBookingsSync();
}

export interface BookingInput {
  customerName: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  zipCode: string;
  serviceType: ServiceType;
  urgency: Booking["urgency"];
  additionalNotes?: string;
  // Optional pre-computed estimate from the wizard; falls back to base pricing.
  estimatedCost?: number;
}

function baseCostFor(serviceType: ServiceType): number {
  switch (serviceType) {
    case ServiceType.AC_INSTALLATION:
    case ServiceType.AC_REPLACEMENT:
      return 4500;
    case ServiceType.AC_MAINTENANCE:
      return 120;
    case ServiceType.THERMOSTAT_REPAIR:
      return 220;
    case ServiceType.REFRIGERANT_LEAK:
      return 350;
    case ServiceType.EMERGENCY_SERVICE:
      return 250;
    default:
      return 150;
  }
}

export async function createBooking(input: BookingInput): Promise<Booking> {
  await delay(700);

  let estimatedCost = input.estimatedCost;
  if (typeof estimatedCost !== "number" || Number.isNaN(estimatedCost)) {
    const base = baseCostFor(input.serviceType);
    let multiplier = 1.0;
    if (input.urgency === "Emergency Same-Day") multiplier = 1.35;
    else if (input.urgency === "Urgent (24-48 Hours)") multiplier = 1.15;
    estimatedCost = Math.round(base * multiplier);
  }

  const isEmergency = input.urgency === "Emergency Same-Day";
  const scheduledDate = new Date(Date.now() + (isEmergency ? 0 : 2) * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const newBooking: Booking = {
    id: randomId("b-"),
    customerName: input.customerName,
    phone: input.phone,
    email: input.email,
    state: input.state,
    city: input.city,
    zipCode: input.zipCode,
    serviceType: input.serviceType,
    urgency: input.urgency || "Standard",
    additionalNotes: input.additionalNotes,
    estimatedCost,
    scheduledDate,
    status: isEmergency ? "Dispatched" : "Pending",
    trackingCode: "AC-" + Math.floor(100000 + Math.random() * 900000),
  };

  const bookings = readBookingsSync();
  bookings.push(newBooking);
  if (isBrowser) {
    window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }
  return newBooking;
}

// --- LOCALIZED CLIMATE ADVICE ---------------------------------------------

export interface ClimateAdviceInput {
  city: string;
  stateName: string;
  stateAbbr: string;
  avgTemp?: string;
  climateZone?: string;
}

export interface AdviceData {
  climateOverview: string;
  commonIssues: { issue: string; description: string }[];
  homeownerTips: string[];
  recommendedPlan: string;
}

/**
 * Generates a high-quality, localized HVAC advice report entirely on the client.
 * This replaces the old Gemini-backed endpoint so no API key or server is needed,
 * while still producing tailored, professional-sounding content per city/state.
 */
export async function generateClimateAdvice(input: ClimateAdviceInput): Promise<AdviceData> {
  await delay(1400); // Preserve the "AI analyzing..." experience.

  const { city, stateName, stateAbbr, avgTemp } = input;
  const peakTemp = avgTemp || "85-95°F";

  const commonIssues = [
    {
      issue: "Dual-Run Capacitor Blowout",
      description: `During severe summer heatwaves in ${city}, ${stateAbbr}, AC units run continuously. High thermal loads degrade electrical components, leading to sudden capacitor failures and compressor startup issues.`,
    },
    {
      issue: "Condensate Drain Line Blockage",
      description: `Elevated humidity levels in the ${stateName} region produce continuous moisture extraction inside the evaporator coil. Without regular flushing, biological growth and dust create sludge that blocks the main drain line, causing safe float-switch shutoffs or indoor water pooling.`,
    },
  ];

  const homeownerTips = [
    `Inspect and replace your HVAC air filter every 30 to 45 days during the peak ${city} cooling season to maintain correct system airflow and prevent frozen coils.`,
    `Keep a clean 3-foot clearance perimeter around your outdoor condenser unit, clearing any weeds, grass clippings, and accumulated leaves to allow unrestricted heat dissipation.`,
    `Set your smart thermostat to 78°F when you are at home, and raise it 4°F when you are away to lower continuous compressor wear-and-tear and reduce your cooling bill by up to 15%.`,
  ];

  return {
    climateOverview: `Homeowners in ${city}, ${stateAbbr} experience significant cooling demands as summer temperatures peak near ${peakTemp} and indoor comfort relies entirely on efficient air conditioning systems. Navigating local weather trends requires high-performance, well-maintained equipment.`,
    commonIssues,
    homeownerTips,
    recommendedPlan: `We recommend enrolling in our seasonal precision preventative maintenance plan. Homeowners in ${city} benefit greatly from bi-annual checkups, covering coil deep-cleans, electrical diagnostics, and refrigerant level verifications.`,
  };
}
