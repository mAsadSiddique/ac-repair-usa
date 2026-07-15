/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Wind, Shield, Award, ArrowRight } from "lucide-react";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "../data/phone";

interface FooterProps {
  setTab: (tab: string) => void;
  onSelectState: (stateAbbr: string) => void;
}

export default function Footer({ setTab, onSelectState }: FooterProps) {
  const popularStates = [
    { name: "Texas", abbr: "TX" },
    { name: "California", abbr: "CA" },
    { name: "Florida", abbr: "FL" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Nevada", abbr: "NV" },
    { name: "Georgia", abbr: "GA" },
    { name: "North Carolina", abbr: "NC" },
    { name: "New York", abbr: "NY" }
  ];

  const servicesList = [
    "AC Repair & Troubleshooting",
    "High-Efficiency AC Installation",
    "Central AC System Replacement",
    "Precision Preventive Maintenance",
    "Thermostat Calibration & Smart Upgrades",
    "Refrigerant Leak Repair",
    "Emergency Same-Day Dispatch"
  ];

  const handleStateClick = (abbr: string) => {
    onSelectState(abbr);
    setTab("directory");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4" id="main-footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-sky-500 text-white p-1.5 rounded-lg">
              <Wind className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              get<span className="text-sky-400">acrepair</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            America's premier network for certified, immediate AC repair and installation. Serving all 50 states and major cities nationwide with guaranteed comfort and fast, local response times.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="flex items-center space-x-1 bg-slate-800 border border-slate-700 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-1 bg-slate-800 border border-slate-700 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>EPA Certified</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Expert HVAC Services</h3>
          <ul className="space-y-3 text-sm">
            {servicesList.map((service, index) => (
              <li key={index} className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer" onClick={() => setTab("diagnostics")}>
                <ArrowRight className="h-3 w-3 text-sky-400" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Browse Popular States</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {popularStates.map((state) => (
              <button
                key={state.abbr}
                onClick={() => handleStateClick(state.abbr)}
                className="text-left hover:text-white transition-colors flex items-center space-x-1 hover:underline"
              >
                <span>{state.name}</span>
                <span className="text-[10px] text-sky-400 font-mono">({state.abbr})</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setTab("directory");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs text-sky-400 hover:text-sky-300 font-bold mt-4 flex items-center space-x-1 hover:underline"
          >
            <span>View All 50 States</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Emergency Dispatch</h3>
          <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl space-y-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono">24/7 Same-Day Dispatch</span>
            </div>
            <a href={PHONE_TEL_HREF} className="block text-2xl font-black text-white hover:text-sky-400 font-mono tracking-tight transition-colors">
              {PHONE_DISPLAY}
            </a>
            <p className="text-xs text-slate-400 leading-normal">
              Operators are standing by for same-day cooling restoration. Local dispatcher hubs stationed in every state.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <button
            type="button"
            onClick={() => {
              setTab("terms");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-slate-400 hover:text-white transition-colors font-semibold cursor-pointer"
          >
            Terms &amp; Conditions
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("privacy");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-slate-400 hover:text-white transition-colors font-semibold cursor-pointer"
          >
            Privacy Policy
          </button>
          <a href={PHONE_TEL_HREF} className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <p className="leading-relaxed text-slate-500">
          © 2026 getacrepair USA Inc. All Rights Reserved. Nationwide services provided through our certified partner network. Licensed Class A Residential & Commercial Air Conditioning contractors, EPA Section 608 certified technicians, fully bonded and insured.
        </p>
      </div>
    </footer>
  );
}
