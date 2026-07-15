/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ServiceType {
  AC_REPAIR = "AC Repair",
  AC_INSTALLATION = "AC Installation",
  AC_REPLACEMENT = "AC Replacement",
  AC_MAINTENANCE = "AC Maintenance",
  THERMOSTAT_REPAIR = "Thermostat Repair & Smart Upgrades",
  REFRIGERANT_LEAK = "Refrigerant Leak Detection & Repair",
  EMERGENCY_SERVICE = "Emergency Same-Day AC Service"
}

export interface CityData {
  name: string;
  isMajor: boolean;
  climateProfile: string;
  commonIssue: string;
  avgSummerTemp: string;
  estimatedCostMultiplier: number;
}

export interface StateData {
  name: string;
  abbr: string;
  capital: string;
  climateZone: string;
  avgTemp: string;
  seoTip: string;
  cities: CityData[];
}

export interface Review {
  id: string;
  customerName: string;
  city: string;
  state: string;
  rating: number;
  serviceType: ServiceType;
  comment: string;
  date: string;
}

export interface DiagnosticSymptom {
  id: string;
  symptom: string;
  possibleCauses: string[];
  severity: "Low" | "Medium" | "High";
  recommendedService: ServiceType;
  troubleshootingSteps: string[];
  costRange: string;
}
