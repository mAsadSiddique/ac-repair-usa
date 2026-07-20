/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { STATES_DB, getCityDetails, createDynamicCity } from "../data/states";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "../data/phone";
import { StateData, CityData } from "../types";
import { MapPin, Search, ChevronRight, Wind, Star, Shield, Award, Sparkles, Thermometer, ArrowLeft, MessageSquare, Wrench, Phone } from "lucide-react";
import LocalAdvisor from "./LocalAdvisor";
import ServicePageTemplate from "./ServicePageTemplate";
import Breadcrumbs from "./Breadcrumbs";

function ServiceFaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-2 text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
      >
        <span>{q}</span>
        <ChevronRight className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-90 text-sky-600" : "text-slate-500"}`} />
      </button>
      {isOpen && (
        <p className="text-xs text-slate-600 leading-relaxed mt-2 pl-1 animate-in fade-in duration-200">
          {a}
        </p>
      )}
    </div>
  );
}

interface StateDirectoryProps {
  selectedStateAbbr: string;
  setSelectedStateAbbr: (abbr: string) => void;
  selectedCityName: string | null;
  setSelectedCityName: (city: string | null) => void;
  activeSubPage: string;
  setActiveSubPage: (page: string) => void;
}

export default function StateDirectory({ 
  selectedStateAbbr, 
  setSelectedStateAbbr,
  selectedCityName,
  setSelectedCityName,
  activeSubPage,
  setActiveSubPage
}: StateDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [customCityInput, setCustomCityInput] = useState("");
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [visibleCitiesCount, setVisibleCitiesCount] = useState(30);

  const handleStateClick = (abbr: string) => {
    setSelectedStateAbbr(abbr);
    setSelectedCityName(null);
    setActiveSubPage("ac-repair");
    setCustomCityInput("");
    setCitySearchQuery("");
    setVisibleCitiesCount(30);
  };

  const handleCityClick = (cityName: string) => {
    setSelectedCityName(cityName);
    setActiveSubPage("repair");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCustomCitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customCityInput.trim()) {
      setSelectedCityName(customCityInput.trim());
      setActiveSubPage("repair");
      setCustomCityInput("");
      setCitySearchQuery("");
      setVisibleCitiesCount(30);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToState = () => {
    setSelectedCityName(null);
    setActiveSubPage("repair");
    setCitySearchQuery("");
    setVisibleCitiesCount(30);
  };

  const handleBackToNational = () => {
    setSelectedStateAbbr("");
    setSelectedCityName(null);
    setActiveSubPage("repair");
    setCitySearchQuery("");
    setVisibleCitiesCount(30);
  };

  // Filter States
  const filteredStates = STATES_DB.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.abbr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.cities.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const activeState = STATES_DB.find(s => s.abbr.toUpperCase() === selectedStateAbbr.toUpperCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="state-directory-section">
      
      {/* 1. National View */}
      {!selectedStateAbbr && (
        <div className="space-y-8" id="national-directory-grid">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full text-xs text-sky-600 font-bold font-mono">
              <MapPin className="h-3.5 w-3.5" />
              <span>Nationwide Cooling Coverage Map</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              getacrepair HVAC Service Directory
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We cover all 50 states with major cities nationwide. Select your state or search for your municipality to see dedicated climate advice and customized local pricing.
            </p>

            {/* Directory Search Bar */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search your state or city (e.g. Texas, Chicago)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm shadow-sm"
                  id="directory-search-input"
                />
              </div>
            </div>
          </div>

          {/* Grid of States */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" id="states-card-grid">
            {filteredStates.map((state) => (
              <button
                key={state.abbr}
                onClick={() => handleStateClick(state.abbr)}
                className="bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md p-4 rounded-2xl text-left transition-all duration-250 cursor-pointer group flex flex-col justify-between h-32 shadow-sm"
                id={`state-btn-${state.abbr}`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-2xl font-black text-slate-200 font-mono group-hover:text-sky-200">{state.abbr}</span>
                    <span className="text-[10px] font-bold text-slate-500 bg-sky-50 px-2 py-0.5 rounded-full font-mono">{state.avgTemp}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-sky-600 transition-colors">{state.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal font-medium">{state.climateZone}</p>
                </div>
                <div className="text-[10px] text-sky-600 font-mono flex items-center space-x-1 font-bold">
                  <span>Explore Cities</span>
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12 bg-sky-50/40 border border-slate-200 rounded-3xl max-w-lg mx-auto">
              <p className="text-slate-600 text-sm">No coverage results matched "{searchQuery}".</p>
              <p className="text-xs text-slate-500 mt-2">getacrepair provides dispatching anywhere in the US. Please search using standard state abbreviations or names.</p>
            </div>
          )}
        </div>
      )}

      {/* 2. State-Level Dedicated SEO Landing Page */}
      {selectedStateAbbr && activeState && !selectedCityName && (
        <div className="space-y-8 animate-in fade-in duration-200" id={`state-page-${selectedStateAbbr}`}>
          
          <Breadcrumbs
            items={[
              {
                label: "Home",
                onClick: () => {
                  window.history.pushState(null, "", "/");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                },
              },
              { label: "Directory", onClick: handleBackToNational },
              { label: activeState.name },
            ]}
          />

          <button 
            onClick={handleBackToNational}
            className="inline-flex items-center space-x-2 text-xs font-bold text-sky-600 hover:text-sky-500 font-mono hover:underline cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO NATIONAL DIRECTORY</span>
          </button>

          {/* State Hero / Header */}
          <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-sm">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-xs text-sky-600 font-bold font-mono">
                <Thermometer className="h-4 w-4" />
                <span>Summer Climate Report: {activeState.avgTemp}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                AC Repair & Installation in <span className="text-sky-600">{activeState.name}</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Welcome to getacrepair's dedicated HVAC portal for <strong className="text-slate-900">{activeState.name}</strong>. We offer immediate dispatching for central AC systems, thermostats, refrigerant leaks, and premium seasonal tune-ups across every single town and city in the state.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeState.name} homeowners face {activeState.climateZone.toLowerCase()} conditions with summer peaks around {activeState.avgTemp}. Browse real cities below or call{" "}
                <a href={PHONE_TEL_HREF} className="text-sky-600 font-semibold hover:underline">{PHONE_DISPLAY}</a>{" "}
                for licensed same-day AC repair and installation dispatch.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider font-mono">Local SEO Advisory Tip</p>
                  <p className="text-xs text-slate-600 leading-normal mt-1">{activeState.seoTip}</p>
                </div>
              </div>
            </div>

            {/* Quick State Info Stats */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono border-b border-slate-100 pb-2">State-Level Profile</h3>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 flex justify-between"><strong className="text-slate-600">State Code:</strong> <span className="font-mono font-bold text-slate-900">{activeState.abbr}</span></p>
                <p className="text-xs text-slate-500 flex justify-between"><strong className="text-slate-600">Capital:</strong> <span className="text-slate-900 font-medium">{activeState.capital}</span></p>
                <p className="text-xs text-slate-500 flex justify-between"><strong className="text-slate-600">Climate Zone:</strong> <span className="text-slate-900 font-medium">{activeState.climateZone}</span></p>
              </div>
              <div className="border-t border-slate-100 pt-4 text-center">
                <p className="text-[11px] text-slate-500 font-medium">Licensed & Registered State Contractor</p>
                <p className="text-xs font-bold text-slate-900 font-mono mt-1">Class A License #{activeState.abbr}-9283-COOL</p>
              </div>
            </div>
          </div>

          {/* Cities Grid Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Select Your Local Municipality</h2>
                <p className="text-xs text-slate-500 mt-1">Select one of our major pre-positioned hubs below to load city-level HVAC service profiles.</p>
              </div>

              {/* Custom City Dynamic Builder */}
              <form onSubmit={handleCustomCitySubmit} className="w-full sm:w-auto flex space-x-2" id="custom-city-generator">
                <input
                  type="text"
                  placeholder="Type any small or major city..."
                  value={customCityInput}
                  onChange={(e) => setCustomCityInput(e.target.value)}
                  className="bg-white border border-slate-200 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 w-full sm:w-64"
                />
                <button 
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded-xl text-xs whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  Generate Portal
                </button>
              </form>
            </div>

            {/* Filter Input */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-sky-50/40 p-4 rounded-2xl border border-slate-200">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Filter cities in this state..."
                  value={citySearchQuery}
                  onChange={(e) => {
                    setCitySearchQuery(e.target.value);
                    setVisibleCitiesCount(30);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-xs"
                />
              </div>
              <p className="text-xs text-slate-500">
                Showing <span className="text-slate-900 font-mono font-bold">{Math.min(activeState.cities.filter(c => c.name.toLowerCase().includes(citySearchQuery.toLowerCase())).length, visibleCitiesCount)}</span> of <span className="text-sky-600 font-mono font-bold">{activeState.cities.filter(c => c.name.toLowerCase().includes(citySearchQuery.toLowerCase())).length}</span> covered cities in {activeState.name}.
              </p>
            </div>

            {/* Cities Grid */}
            {(() => {
              const filtered = activeState.cities.filter(c => c.name.toLowerCase().includes(citySearchQuery.toLowerCase()));
              const visible = filtered.slice(0, visibleCitiesCount);
              
              if (filtered.length === 0) {
                return (
                  <div className="text-center py-10 bg-sky-50/40 border border-slate-200 rounded-2xl">
                    <p className="text-xs text-slate-500">No matching cities found in our {activeState.name} database.</p>
                  </div>
                );
              }
              
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="cities-accordion">
                    {visible.map((city) => (
                      <button
                        key={city.name}
                        onClick={() => handleCityClick(city.name)}
                        className="bg-white border border-slate-200 hover:border-sky-300 p-4 rounded-xl text-left flex items-center justify-between transition-all cursor-pointer group hover:shadow-md shadow-sm"
                        id={`city-btn-${city.name.toLowerCase()}`}
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-500 block font-mono">CITY UNIT</span>
                          <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-sky-600 transition-colors">{city.name}, {activeState.abbr}</h4>
                          <span className="text-[10px] text-slate-500 mt-1 leading-normal block font-medium">Est. Temp: {city.avgSummerTemp}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                  
                  {filtered.length > visibleCitiesCount && (
                    <div className="flex justify-center pt-2">
                      <button
                        type="button"
                        onClick={() => setVisibleCitiesCount(prev => prev + 60)}
                        className="bg-white hover:bg-sky-50/40 border border-slate-200 hover:border-sky-300 text-sky-600 hover:text-sky-500 text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md animate-in fade-in"
                      >
                        Load More Cities (+{filtered.length - visibleCitiesCount} remaining)
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* 3. City-Level Dedicated SEO Landing Page */}
      {selectedStateAbbr && activeState && selectedCityName && (
        <div className="space-y-8 animate-in fade-in duration-200" id={`city-page-${selectedCityName.toLowerCase()}`}>
          
          {/* Back to State Directory link */}
          <button 
            onClick={handleBackToState}
            className="inline-flex items-center space-x-2 text-xs font-bold text-sky-600 hover:text-sky-500 font-mono hover:underline cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO {activeState.name.toUpperCase()} CITIES DIRECTORY</span>
          </button>

          {/* Segmented Tab Control for all 9 HVAC Services */}
          <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-thin border-b border-slate-200" id="city-service-tabs">
            {[
              { key: "ac-repair", label: "AC Repair" },
              { key: "ac-service", label: "AC Service" },
              { key: "ac-installation", label: "AC Installation" },
              { key: "hvac-repair", label: "HVAC Repair" },
              { key: "hvac-installation", label: "HVAC Installation" },
              { key: "heating-repair", label: "Heating Repair" },
              { key: "furnace-repair", label: "Furnace Repair" },
              { key: "emergency-ac-repair", label: "Emergency AC" },
              { key: "thermostat-repair", label: "Thermostat Repair" }
            ].map((srv) => (
              <button
                key={srv.key}
                onClick={() => {
                  setActiveSubPage(srv.key);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  activeSubPage === srv.key
                    ? "bg-sky-600 text-white shadow-sm hover:shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-sky-50/40 hover:text-slate-900"
                }`}
              >
                {srv.label}
              </button>
            ))}
          </div>

          <ServicePageTemplate
            cityName={selectedCityName}
            stateObj={activeState}
            activeSubPage={activeSubPage}
            onNavigateSubPage={(subPage) => setActiveSubPage(subPage)}
            onNavigateCity={(city) => setSelectedCityName(city)}
          />

          {/* Legacy City Profile and Content bypassed */}
          {false && (() => {
            const cityDetails = getCityDetails(activeState.abbr, selectedCityName);

            // Select 5-6 neighboring cities deterministically
            const currentCityIndex = activeState.cities.findIndex(c => c.name.toLowerCase() === selectedCityName.toLowerCase());
            const neighboringCities: CityData[] = [];
            for (let i = 1; i <= 6; i++) {
              const neighborIndex = (currentCityIndex + i) % activeState.cities.length;
              const neighbor = activeState.cities[neighborIndex];
              if (neighbor && neighbor.name !== selectedCityName) {
                neighboringCities.push(neighbor);
              }
            }

            if (activeSubPage === "service") {
              return (
                <div className="space-y-8">
                  {/* Local City Banner for AC Service */}
                  <div className="bg-gradient-to-r from-sky-950/20 via-slate-900 to-sky-950/10 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
                    <div className="space-y-3 max-w-xl">
                      <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-400 bg-sky-950/40 px-3 py-1 rounded-full border border-sky-850/40 w-max">
                        <Sparkles className="h-4 w-4 text-sky-400" />
                        <span>Certified Preventive Maintenance: {selectedCityName} Hub</span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        AC Service & Maintenance in <span className="text-sky-400">{selectedCityName}, {activeState.abbr}</span>
                      </h1>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        getacrepair provides professional, EPA-certified preventative air conditioning servicing, seasonal tune-ups, system inspections, filter replacements, and deep coil cleaning in <strong className="text-white">{selectedCityName}</strong> to optimize efficiency and extend equipment lifespan.
                      </p>
                      <div className="text-xs text-slate-400 leading-normal bg-slate-950 p-4 rounded-xl border border-slate-850">
                        <strong className="text-slate-300 block mb-1">Local Environmental Assessment:</strong>
                        {selectedCityName} resides in the {activeState.name} {activeState.climateZone} zone. High peak temperatures averaging <strong className="text-white">{cityDetails.avgSummerTemp}</strong> can place heavy continuous thermal stress on your AC.
                      </div>
                    </div>

                    {/* Dispatch Card Call to Action */}
                    <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl w-full lg:w-80 flex flex-col justify-between space-y-4 shadow-inner shrink-0">
                      <div>
                        <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase font-mono block">● Preventive Checkups Active</span>
                        <h3 className="text-lg font-bold text-white mt-1">Need a Precision Tune-Up?</h3>
                        <p className="text-xs text-slate-500 mt-1 leading-normal">Call to request pre-season multi-point service with a local certified mechanic.</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-850">
                        <a
                          href={PHONE_TEL_HREF}
                          className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-lg"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Call Now: {PHONE_DISPLAY}</span>
                        </a>
                        <a
                          href={PHONE_TEL_HREF}
                          className="w-full border border-slate-800 hover:bg-slate-900 text-slate-300 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>Call {PHONE_DISPLAY}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Core Value Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <div className="bg-sky-500/10 text-sky-400 p-2.5 rounded-xl border border-sky-500/25 w-max">
                        <Wind className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">Optimize Airflow & Comfort</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Dirty air filters and blower fans reduce velocity, making your AC work twice as hard. We perform professional element swaps and fan cleaning to maintain correct airflow curves.
                      </p>
                    </div>
                    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <div className="bg-emerald-500/10 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/25 w-max">
                        <Thermometer className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">Increase Efficiency & Save</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Even small refrigerant drops or dusty coils can reduce system SEER rating by 20%. Regular calibration restores your unit to original efficiency, lowering power bills.
                      </p>
                    </div>
                    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <div className="bg-amber-500/10 text-amber-400 p-2.5 rounded-xl border border-amber-500/25 w-max">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">Prevent Sudden Failure</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Over 80% of summer AC breakdowns stem from neglected electrical contacts, worn-out capacitors, or minor condensate line clogs. Annual tune-ups catch these early.
                      </p>
                    </div>
                  </div>

                  {/* Comprehensive 12-Point Tune-Up Checklist */}
                  <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Our Precision 12-Point AC Servicing Protocol</h2>
                      <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                        To maintain compliance with manufacturer warranties and ensure maximum operating parameters, every getacrepair preventive service visit includes:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Evaporator Coil Clean", desc: "Chemical rinsing of indoor evaporator coil fins to remove dust and optimize heat transfer." },
                        { title: "Condenser Fin Cleaning", desc: "Pressure cleaning outdoor coils to eliminate grass clippings, pollen, and wind-blown grit." },
                        { title: "Refrigerant Level Check", desc: "Confirming proper charge levels against subcooling and superheat specifications to protect the compressor." },
                        { title: "Dual Run Capacitor Audit", desc: "Testing microfarad values to prevent compressor startup lag and electrical strain." },
                        { title: "Condensate Line Flush", desc: "Chemical clearing of primary and secondary drain traps to prevent water damage." },
                        { title: "Contactor Terminal Polish", desc: "Inspecting contacts for electrical pitting and tightening critical high-voltage lugs." },
                        { title: "Blower Motor Inspection", desc: "Measuring motor amperage draw and testing multi-speed fan relay boards." },
                        { title: "High-Efficiency Filter Swap", desc: "Replacing restrictive filters with MERV 8+ dynamic pleated media." },
                        { title: "Thermostat Calibration", desc: "Verifying communication circuits and smart schedules for correct zoning." },
                        { title: "Safety Switch Verification", desc: "Testing secondary overflow switches and high-pressure cutoffs." },
                        { title: "Duct Connection Check", desc: "Visual inspection of accessible supply plenums to identify loose collars or air leaks." },
                        { title: "Operational Log & Report", desc: "Providing a complete mechanical diagnostic breakdown with baseline temperature splits." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-slate-950 p-4 rounded-xl border border-slate-850">
                          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-900 shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <strong className="text-sm text-slate-200 block">{item.title}</strong>
                            <span className="text-xs text-slate-400 leading-normal block mt-1">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic FAQ Accordion Section for AC Service */}
                  <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">AC Service & Maintenance FAQs</h2>
                    <div className="space-y-4">
                      <ServiceFaqItem 
                        q={`What is the difference between an AC repair and an AC service in ${selectedCityName}?`}
                        a="AC repair resolves an active malfunction or broken component (such as a blown capacitor or failed compressor) to restore basic heating/cooling. AC service is a preventative tune-up designed to clean, calibrate, and inspect an operational system, preventing future breakdowns and keeping energy bills low."
                      />
                      <ServiceFaqItem 
                        q={`How often should I have my air conditioner serviced in ${selectedCityName}?`}
                        a={`We recommend scheduling professional AC service at least once a year, ideally in spring before extreme summer temperatures set in. For homes in ${selectedCityName}'s ${activeState.climateZone} environment, bi-annual service ensures year-round efficiency.`}
                      />
                      <ServiceFaqItem 
                        q="What specific maintenance items are covered in your standard servicing?"
                        a="Our comprehensive servicing includes cleaning the outdoor condenser and indoor evaporator coils, flushing the primary condensation line, testing capacitor electrical values, checking motor amp draws, inspecting the contactor, and confirming correct refrigerant operating pressures."
                      />
                      <ServiceFaqItem 
                        q="Can regular maintenance really lower my electricity bills?"
                        a="Yes! A neglected air conditioner can lose up to 15% of its operating efficiency each year due to dirt buildup on coils and minor refrigerant imbalances. Routine servicing restores the system to its nominal SEER rating, reducing monthly energy costs significantly."
                      />
                    </div>
                  </div>

                  {/* Internal Linking and COMPLETE cooling directory */}
                  <div className="bg-gradient-to-br from-slate-900 to-sky-950/20 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                        <Wrench className="h-5 w-5 text-sky-400" />
                        <span>Complete Cooling Directory for {selectedCityName}, {activeState.abbr}</span>
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        We offer a complete suite of professional HVAC services in the {selectedCityName} area. Instantly navigate our local pages or call for service below:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <button
                        onClick={() => {
                          setActiveSubPage("repair");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group"
                      >
                        <strong className="text-xs text-sky-400 block font-mono font-bold">01. AC REPAIR</strong>
                        <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">Emergency Repair</span>
                        <span className="text-[10px] text-slate-500 block mt-1">Capacitors, compressors, diagnostics, emergency dispatch</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveSubPage("service");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-slate-900/60 border border-sky-500/30 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group"
                      >
                        <strong className="text-xs text-sky-400 block font-mono font-bold">02. AC SERVICE</strong>
                        <span className="text-xs text-white font-bold block mt-1 text-sky-400">Preventive Servicing</span>
                        <span className="text-[10px] text-slate-500 block mt-1">Multi-point tune-up, coil washes, filter replacements</span>
                      </button>

                      <a
                        href={PHONE_TEL_HREF}
                        className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group block"
                      >
                        <strong className="text-xs text-sky-400 block font-mono font-bold">03. AC INSTALLATION</strong>
                        <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">System Installation</span>
                        <span className="text-[10px] text-slate-500 block mt-1">High-SEER central air replacement, modern heat pumps</span>
                      </a>

                      <a
                        href={PHONE_TEL_HREF}
                        className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group block"
                      >
                        <strong className="text-xs text-sky-400 block font-mono font-bold">04. HVAC REPAIR</strong>
                        <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">Emergency Support</span>
                        <span className="text-[10px] text-slate-500 block mt-1">Immediate diagnostics and immediate recovery solutions</span>
                      </a>
                    </div>
                  </div>

                  {/* Nearby Cities Serviced */}
                  <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-sky-400" />
                      <span>Nearby Cities Serviced Near {selectedCityName}</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We provide EPA-certified, licensed seasonal AC servicing and preventative tune-ups to residential neighborhoods surrounding {selectedCityName}, including:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {neighboringCities.map((city) => (
                        <button
                          key={city.name}
                          onClick={() => {
                            setSelectedCityName(city.name);
                            setActiveSubPage("service");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="bg-slate-950 hover:bg-sky-950/30 border border-slate-850 hover:border-sky-500/50 p-3 rounded-xl text-left text-xs text-slate-300 hover:text-sky-400 font-medium transition-all duration-300 cursor-pointer"
                        >
                          AC Service in {city.name}, {activeState.abbr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Server-Side AI Climate Advisor (Gemini API Integration) */}
                  <div className="border border-slate-800 rounded-3xl overflow-hidden shadow-xl" id="ai-advisor-integration">
                    <LocalAdvisor 
                      city={selectedCityName}
                      stateName={activeState.name}
                      stateAbbr={activeState.abbr}
                      avgTemp={cityDetails.avgSummerTemp}
                      climateZone={activeState.climateZone}
                    />
                  </div>
                </div>
              );
            }

            // Otherwise, render the ORIGINAL AC Repair landing page exactly as it is
            return (
              <div className="space-y-8">
                {/* Local City Banner */}
                <div className="bg-gradient-to-r from-sky-950/20 via-slate-900 to-sky-950/10 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
                  <div className="space-y-3 max-w-xl">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-400 bg-sky-950/40 px-3 py-1 rounded-full border border-sky-850/40 w-max">
                      <Wind className="h-4 w-4 animate-spin-slow text-sky-400" />
                      <span>Certified HVAC Station: {selectedCityName} Hub</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      AC Repair & Installation in <span className="text-sky-400">{selectedCityName}, {activeState.abbr}</span>
                    </h1>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      getacrepair provides local 24/7 same-day central air conditioning repair, high-SEER installations, leak detections, and thermostat calibrations in <strong className="text-white">{selectedCityName}</strong> and nearby subdivisions.
                    </p>
                    <div className="text-xs text-slate-400 leading-normal bg-slate-950 p-4 rounded-xl border border-slate-850">
                      <strong className="text-slate-300 block mb-1">Local Cooling Profile:</strong>
                      {cityDetails.climateProfile}
                    </div>
                  </div>

                  {/* Dispatch Card Call to Action */}
                  <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl w-full lg:w-80 flex flex-col justify-between space-y-4 shadow-inner shrink-0">
                    <div>
                      <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase font-mono block">● Same-Day Dispatch Active</span>
                      <h3 className="text-lg font-bold text-white mt-1">Need Emergency Support?</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">Our local technician is currently stationed in the {selectedCityName} vicinity.</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-850">
                      <a
                        href={PHONE_TEL_HREF}
                        className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-lg animate-pulse"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call Now: {PHONE_DISPLAY}</span>
                      </a>
                      <a
                        href={PHONE_TEL_HREF}
                        className="w-full border border-slate-800 hover:bg-slate-900 text-slate-300 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call {PHONE_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localized Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Climate Advisory Card */}
                  <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-sky-400" />
                      <span>Local HVAC Environmental Assessment</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Every city has a unique micro-climate profile. Air filters and condenser fins gather dust, moisture, and pollen at different rates.
                    </p>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
                      <p className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono">Common Environmental AC Lock</p>
                      <p className="text-xs text-slate-300 leading-normal">{cityDetails.commonIssue}.</p>
                    </div>
                    <div className="space-y-2 text-xs border-t border-slate-850 pt-4">
                      <p className="text-slate-400 flex justify-between"><strong className="text-slate-300">Average Summer Peak:</strong> <span className="font-mono text-white font-bold">{cityDetails.avgSummerTemp}</span></p>
                      <p className="text-slate-400 flex justify-between"><strong className="text-slate-300">Pricing Index Multiplier:</strong> <span className="font-mono text-white font-bold">{cityDetails.estimatedCostMultiplier}x</span></p>
                    </div>
                  </div>

                  {/* Trust Factors Card */}
                  <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-sky-400" />
                        <span>getacrepair Trust Guarantee</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 text-xs leading-normal">
                          <Award className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-white block">EPA-Certified Technicians</strong>
                            <span className="text-slate-400">All dispatched mechanics are certified under EPA Section 608 for proper refrigerant handling.</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 text-xs leading-normal">
                          <MessageSquare className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-white block">Transparent Cost Audits</strong>
                            <span className="text-slate-400">You will receive a complete digital diagnostic breakdown showing parts, labor, and guarantees prior to work startup.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-850 pt-4 flex justify-between items-center text-xs font-mono font-medium text-slate-500">
                      <span>Dispatch Zone Abbr: {activeState.abbr}-{selectedCityName.substring(0, 3).toUpperCase()}</span>
                      <span>100% Certified Network</span>
                    </div>
                  </div>
                </div>

                {/* Complete Cooling Directory for AC Repair */}
                <div className="bg-gradient-to-br from-slate-900 to-sky-950/20 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <Wrench className="h-5 w-5 text-sky-400" />
                      <span>Complete Cooling Directory for {selectedCityName}, {activeState.abbr}</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We offer a complete suite of professional HVAC services in the {selectedCityName} area. Instantly navigate our local pages or call for service below:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                      onClick={() => {
                        setActiveSubPage("repair");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-slate-900/60 border border-sky-500/30 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group"
                    >
                      <strong className="text-xs text-sky-400 block font-mono font-bold">01. AC REPAIR</strong>
                      <span className="text-xs text-white font-bold block mt-1 text-sky-400">Emergency Repair</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Capacitors, compressors, diagnostics, emergency dispatch</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveSubPage("service");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group animate-pulse"
                    >
                      <strong className="text-xs text-sky-400 block font-mono font-bold">02. AC SERVICE</strong>
                      <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">Preventive Servicing</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Multi-point tune-up, coil washes, filter replacements</span>
                    </button>

                    <a
                      href={PHONE_TEL_HREF}
                      className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group block"
                    >
                      <strong className="text-xs text-sky-400 block font-mono font-bold">03. AC INSTALLATION</strong>
                      <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">System Installation</span>
                      <span className="text-[10px] text-slate-500 block mt-1">High-SEER central air replacement, modern heat pumps</span>
                    </a>

                    <a
                      href={PHONE_TEL_HREF}
                      className="bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-sky-500 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer group block"
                    >
                      <strong className="text-xs text-sky-400 block font-mono font-bold">04. HVAC REPAIR</strong>
                      <span className="text-xs text-white font-bold block mt-1 group-hover:text-sky-400">Emergency Support</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Immediate diagnostics and immediate recovery solutions</span>
                    </a>
                  </div>
                </div>

                {/* Server-Side AI Climate Advisor (Gemini API Integration) */}
                <div className="border border-slate-800 rounded-3xl overflow-hidden shadow-xl" id="ai-advisor-integration">
                  <LocalAdvisor 
                    city={selectedCityName}
                    stateName={activeState.name}
                    stateAbbr={activeState.abbr}
                    avgTemp={cityDetails.avgSummerTemp}
                    climateZone={activeState.climateZone}
                  />
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
