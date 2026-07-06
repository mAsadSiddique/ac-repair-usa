/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ServiceType, Booking, Review } from "./types";
import { STATES_DB, findStateByAbbrOrName } from "./data/states";
import { getReviews, addReview } from "./data/clientStore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingWizard from "./components/BookingWizard";
import Troubleshooter from "./components/Troubleshooter";
import StateDirectory from "./components/StateDirectory";
import { Wind, ShieldCheck, Award, Flame, Search, ChevronRight, Star, Clock, Phone, PenTool, Check, MessageSquare, AlertCircle } from "lucide-react";
import ServicePage from "./components/ServicePage";
import CommonProblems from "./components/CommonProblems";
import acRepairImg from "./assets/images/ac_repair_hero_1783198162370.jpg";
import { SEO_TEMPLATES } from "./data/seoContent";

// Helper functions for pathname-based routing
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function findStateBySlug(slug: string) {
  const cleanSlug = slug.toLowerCase();
  return STATES_DB.find(s => slugify(s.name) === cleanSlug || s.abbr.toLowerCase() === cleanSlug);
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [bookingSuccessMessage, setBookingSuccessMessage] = useState<string | null>(null);
  
  // Service page state
  const [activeService, setActiveService] = useState<ServiceType>(ServiceType.AC_REPAIR);
  
  // Scheduling modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStatePreset, setBookingStatePreset] = useState("");
  const [bookingCityPreset, setBookingCityPreset] = useState("");
  const [bookingServicePreset, setBookingServicePreset] = useState<ServiceType>(ServiceType.AC_REPAIR);

  // States Directory preset
  const [selectedStateAbbr, setSelectedStateAbbr] = useState("");
  const [selectedCityName, setSelectedCityName] = useState<string | null>(null);
  const [activeSubPage, setActiveSubPage] = useState<string>("ac-repair");

  // Homepage inputs
  const [homeSearchQuery, setHomeSearchQuery] = useState("");
  const [homeSearchError, setHomeSearchError] = useState("");

  // Review Form state
  const [writeReviewName, setWriteReviewName] = useState("");
  const [writeReviewCity, setWriteReviewCity] = useState("");
  const [writeReviewState, setWriteReviewState] = useState("");
  const [writeReviewRating, setWriteReviewRating] = useState(5);
  const [writeReviewService, setWriteReviewService] = useState<ServiceType>(ServiceType.AC_REPAIR);
  const [writeReviewComment, setWriteReviewComment] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);

  // Load Reviews from local client store
  const fetchReviews = async () => {
    setLoadingReviews(true);
    try {
      const data = await getReviews();
      setReviews(data);
    } catch (err) {
      console.error("Failed to load reviews:", err);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // 1. Parse URL on initial load and popstate
  useEffect(() => {
    const handleUrlRouting = () => {
      const path = window.location.pathname;
      const parts = path.split("/").filter(Boolean);

      if (parts.length === 0) {
        setCurrentTab("home");
        setSelectedStateAbbr("");
        setSelectedCityName(null);
        setActiveSubPage("repair");
      } else if (parts[0] === "directory") {
        setCurrentTab("directory");
        setSelectedStateAbbr("");
        setSelectedCityName(null);
        setActiveSubPage("repair");
      } else if (parts[0] === "diagnostics") {
        setCurrentTab("diagnostics");
      } else if (parts[0] === "services") {
        setCurrentTab("services");
      } else {
        // Must be a state, or state/city, or state/city/ac-service
        const matchedState = findStateBySlug(parts[0]);
        if (matchedState) {
          setCurrentTab("directory");
          setSelectedStateAbbr(matchedState.abbr);
          
          if (parts.length === 1) {
            setSelectedCityName(null);
            setActiveSubPage("ac-repair");
          } else if (parts.length === 2) {
            const citySlug = parts[1];
            const foundCity = matchedState.cities.find((c: any) => slugify(c.name) === citySlug);
            if (foundCity) {
              setSelectedCityName(foundCity.name);
            } else {
              // Dynamically resolve city
              const unsluggedCity = citySlug
                .split("-")
                .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
              setSelectedCityName(unsluggedCity);
            }
            setActiveSubPage("ac-repair");
          } else if (parts.length === 3) {
            const citySlug = parts[1];
            const foundCity = matchedState.cities.find((c: any) => slugify(c.name) === citySlug);
            if (foundCity) {
              setSelectedCityName(foundCity.name);
            } else {
              const unsluggedCity = citySlug
                .split("-")
                .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
              setSelectedCityName(unsluggedCity);
            }
            let subPageSlug = parts[2];
            if (subPageSlug === "repair") subPageSlug = "ac-repair";
            if (subPageSlug === "service") subPageSlug = "ac-service";

            const validSubPages = ["ac-repair", "ac-service", "ac-installation", "hvac-repair", "hvac-installation", "heating-repair"];
            if (validSubPages.includes(subPageSlug)) {
              setActiveSubPage(subPageSlug);
            } else {
              setActiveSubPage("ac-repair");
            }
          } else {
            setSelectedCityName(null);
            setActiveSubPage("ac-repair");
          }
        } else {
          // Fallback to home
          setCurrentTab("home");
          setSelectedStateAbbr("");
          setSelectedCityName(null);
          setActiveSubPage("ac-repair");
        }
      }
    };

    handleUrlRouting();

    window.addEventListener("popstate", handleUrlRouting);
    return () => {
      window.removeEventListener("popstate", handleUrlRouting);
    };
  }, []);

  // 2. Push URL on state changes and manage dynamic canonical tags & document titles
  useEffect(() => {
    let targetPath = "/";

    if (currentTab === "home") {
      targetPath = "/";
      document.title = "AeroNation AC Services | Nationwide Emergency AC Repair & Installation";
      let descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute("content", "Find immediate, licensed EPA-certified central air conditioning repair, installation, and preventative maintenance across all 50 states.");
      }
    } else if (currentTab === "directory") {
      if (!selectedStateAbbr) {
        targetPath = "/directory";
        document.title = "Nationwide AC Repair & Installation Directory | AeroNation";
        let descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
          descMeta.setAttribute("content", "Browse certified heating and cooling stations in all 50 states. Access local rates and EPA-certified dispatch.");
        }
      } else {
        const stateObj = STATES_DB.find(s => s.abbr === selectedStateAbbr);
        if (stateObj) {
          const stateSlug = slugify(stateObj.name);
          if (!selectedCityName) {
            targetPath = `/${stateSlug}`;
            document.title = `AC Repair & Installation in ${stateObj.name} | AeroNation Directory`;
            let descMeta = document.querySelector('meta[name="description"]');
            if (descMeta) {
              descMeta.setAttribute("content", `Welcome to AeroNation's dedicated HVAC portal for ${stateObj.name}. Immediate dispatching for central AC systems in every city.`);
            }
          } else {
            const citySlug = slugify(selectedCityName);
            const templateKey = [
              "ac-repair",
              "ac-service",
              "ac-installation",
              "hvac-repair",
              "hvac-installation",
              "heating-repair"
            ].includes(activeSubPage) ? activeSubPage : "ac-repair";

            if (templateKey === "ac-repair") {
              targetPath = `/${stateSlug}/${citySlug}`;
            } else {
              targetPath = `/${stateSlug}/${citySlug}/${templateKey}`;
            }

            const template = SEO_TEMPLATES[templateKey];
            if (template) {
              const formattedTitle = template.heroTitle.replace(/{city}/g, selectedCityName).replace(/{state}/g, stateObj.abbr);
              const formattedDesc = template.heroDesc.replace(/{city}/g, selectedCityName).replace(/{state}/g, stateObj.abbr);
              document.title = `${formattedTitle} | AeroNation`;
              let descMeta = document.querySelector('meta[name="description"]');
              if (descMeta) {
                descMeta.setAttribute("content", formattedDesc);
              }
            } else {
              document.title = `Emergency AC Repair in ${selectedCityName}, ${stateObj.abbr} | 24/7 HVAC Service`;
            }
          }
        }
      }
    } else if (currentTab === "diagnostics") {
      targetPath = "/diagnostics";
      document.title = "AC Systems Diagnostic Troubleshooter | AeroNation";
    } else if (currentTab === "services") {
      targetPath = "/services";
      document.title = "Our Certified Air Conditioning Services | AeroNation";
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
    }

    // Update or inject canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const fullCanonicalUrl = `https://aeronation.com${targetPath === "/" ? "" : targetPath}`;
    canonicalLink.setAttribute("href", fullCanonicalUrl);
  }, [currentTab, selectedStateAbbr, selectedCityName, activeSubPage]);

  // Handle immediate navigation from Hero search
  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHomeSearchError("");
    const query = homeSearchQuery.trim();
    if (!query) return;

    // Check if the query is a State
    const matchedState = findStateByAbbrOrName(query);
    if (matchedState) {
      setSelectedStateAbbr(matchedState.abbr);
      setHomeSearchQuery("");
      setCurrentTab("directory");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Check if format is "City, ST"
    const commaIndex = query.indexOf(",");
    if (commaIndex !== -1) {
      const cityName = query.substring(0, commaIndex).trim();
      const statePart = query.substring(commaIndex + 1).trim();
      const stateObj = findStateByAbbrOrName(statePart);

      if (stateObj) {
        setSelectedStateAbbr(stateObj.abbr);
        setHomeSearchQuery("");
        setCurrentTab("directory");
        // Force the StateDirectory to immediately select the city!
        // We can do this by setting StateDirectory local states or rendering directly.
        // Let's pass selectedStateAbbr. The directory will load and we will let the user view city listings.
        // To be highly direct, let's open that state's page and let them click or select.
        // Let's set the states.
        setTimeout(() => {
          const btn = document.getElementById(`city-btn-${cityName.toLowerCase()}`);
          if (btn) btn.click();
        }, 100);
        return;
      }
    }

    setHomeSearchError("Enter a valid state (e.g., Texas, TX) or format 'City, ST' to query local HVAC rates.");
  };

  // Handle service pre-booking from any section
  const handleBookServicePreset = (stateAbbr: string, cityName: string, servicePreset: ServiceType) => {
    setBookingStatePreset(stateAbbr);
    setBookingCityPreset(cityName);
    setBookingServicePreset(servicePreset);
    setIsBookingOpen(true);
  };

  // Handle simple CTA schedule
  const handleOpenGeneralBooking = () => {
    setBookingStatePreset("");
    setBookingCityPreset("");
    setBookingServicePreset(ServiceType.AC_REPAIR);
    setIsBookingOpen(true);
  };

  // Complete Booking Flow Callback
  const handleBookingCompleted = (newBooking: Booking) => {
    setIsBookingOpen(false);
    setBookingSuccessMessage(`Successfully booked ${newBooking.serviceType} for ${newBooking.city}, ${newBooking.state}! A dispatch technician has been assigned and will contact you shortly.`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setBookingSuccessMessage(null);
    }, 7000);
  };

  // Submit a Review
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError("");
    setReviewSuccess(false);

    if (!writeReviewName.trim() || !writeReviewCity.trim() || !writeReviewState.trim() || !writeReviewComment.trim()) {
      return setReviewError("Please fill out all fields in the review form.");
    }

    const stateObj = findStateByAbbrOrName(writeReviewState);
    const resolvedStateAbbr = stateObj ? stateObj.abbr : writeReviewState.toUpperCase().substring(0, 2);

    setReviewLoading(true);
    try {
      await addReview({
        customerName: writeReviewName,
        city: writeReviewCity,
        state: resolvedStateAbbr,
        rating: writeReviewRating,
        serviceType: writeReviewService,
        comment: writeReviewComment
      });

      setReviewSuccess(true);
      setWriteReviewName("");
      setWriteReviewCity("");
      setWriteReviewState("");
      setWriteReviewComment("");
      fetchReviews(); // refresh listing
    } catch (err: any) {
      setReviewError(err.message || "Failed to post your review. Please try again.");
    } finally {
      setReviewLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans" id="aero-root">
      
      {/* Navbar Header */}
      <Navbar 
        currentTab={currentTab} 
        setTab={setCurrentTab} 
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Floating Success Notification */}
      {bookingSuccessMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 animate-in slide-in-from-top-4 duration-300" id="booking-success-alert">
          <div className="bg-emerald-950/95 border border-emerald-500/30 text-emerald-100 p-4 rounded-2xl shadow-2xl flex items-start space-x-3 backdrop-blur-md">
            <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="block text-xs font-black text-white uppercase tracking-wider">Booking Registered</span>
              <p className="text-xs text-emerald-300/90 mt-1 font-medium">{bookingSuccessMessage}</p>
            </div>
            <button 
              onClick={() => setBookingSuccessMessage(null)}
              className="text-emerald-400 hover:text-white text-xs font-bold font-mono px-2 py-1 rounded-lg hover:bg-emerald-900/40 transition-colors cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}

      {/* Main Page Content Switcher */}
      <main className="flex-grow pb-16">
        
        {/* TAB 1: HOME PAGE */}
        {currentTab === "home" && (
          <div className="space-y-20" id="home-view">
            
            {/* 1. Large Immersive Full-Screen Hero Section */}
            <section className="relative min-h-[550px] lg:min-h-[620px] flex items-center overflow-hidden border-b border-slate-900 py-20 lg:py-28" id="hero-banner">
              {/* Background Full-Bleed Image with High Contrast Overlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img 
                  src={acRepairImg} 
                  alt="Professional Emergency AC Repair Technician Background" 
                  className="w-full h-full object-cover object-center scale-105 brightness-[0.22] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
              </div>

              {/* Grid Content with high readability */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Left Content */}
                <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1.5 rounded-full text-xs text-sky-400 font-bold font-mono backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <span>24/7 NATIONWIDE EMERGENCY AC REPAIR ACTIVE</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                    Nationwide Professional <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">AC Repair & Install</span>
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                    Get immediate, EPA-licensed cooling specialists stationed across all 50 states. Backed by guaranteed same-day dispatch, transparent estimates, and a 100% comfort warranty.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full max-w-md pt-2">
                    <a 
                      href="tel:13802270861" 
                      className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-2xl text-base transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                      id="hero-call-now-btn"
                    >
                      <Phone className="h-5 w-5 animate-bounce" />
                      <span>Call Now: 13802270861</span>
                    </a>
                    <button 
                      onClick={() => setCurrentTab("directory")}
                      className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800/90 text-slate-300 border border-slate-700 font-bold py-4 px-8 rounded-2xl text-base transition-all cursor-pointer flex items-center justify-center space-x-1.5 backdrop-blur-sm"
                    >
                      <span>Browse 50 States</span>
                    </button>
                  </div>

                  {/* Badges Info */}
                  <div className="grid grid-cols-3 gap-6 pt-6 text-xs font-mono font-bold text-slate-300 max-w-lg lg:max-w-none w-full border-t border-slate-800/60 backdrop-blur-[2px]">
                    <div className="flex items-center justify-center lg:justify-start space-x-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Licensed & Bonded</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-1.5">
                      <Award className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>EPA Certified</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-1.5">
                      <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>2-Hour Response</span>
                    </div>
                  </div>
                </div>

                {/* Hero Right Stats Overlay Badge */}
                <div className="lg:col-span-4 relative w-full max-w-sm mx-auto lg:max-w-none flex flex-col justify-end">
                  <div className="bg-slate-950/90 border border-slate-800 p-5 rounded-2xl flex flex-col space-y-4 shadow-2xl backdrop-blur-md">
                    <div className="flex items-center space-x-3">
                      <div className="relative flex h-3 w-3 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </div>
                      <div>
                        <span className="block text-xs font-black text-white uppercase tracking-wider">Local Dispatch Online</span>
                        <span className="block text-[9px] text-slate-500 font-mono font-medium">AVERAGE DISPATCH RESPONSE: 48 MINUTES</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-900 pt-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono font-bold uppercase">50 States Active</span>
                      <span className="text-[10px] text-sky-400 font-mono font-bold bg-sky-500/10 border border-sky-500/25 px-2.5 py-1 rounded">
                        24/7 COORDINATION
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Services Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="services-grid-section">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Certified Air Conditioning Services</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm">
                  We handle any central AC or thermostat request. Dispatched mechanics carry advanced EPA credentials to execute repairs cleanly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="homepage-services-list">
                {[
                  { type: ServiceType.AC_REPAIR, label: "Professional AC Repair", desc: "Fast troubleshooting for broken fans, blown start capacitors, seizing compressors, and restricted lines." },
                  { type: ServiceType.AC_INSTALLATION, label: "AC Installation", desc: "Meticulous system sizing, zoning layout, and high-efficiency condenser installations to lower energy draw." },
                  { type: ServiceType.AC_REPLACEMENT, label: "Central AC Replacement", desc: "Upgrading outdated units to modern, eco-friendly systems featuring 16+ SEER2 cooling coefficients." },
                  { type: ServiceType.AC_MAINTENANCE, label: "Preventive AC Maintenance", desc: "Spring startups, evaporator coil chemical flushes, pressure balances, and deep electrical inspections." },
                  { type: ServiceType.THERMOSTAT_REPAIR, label: "Thermostat Repair & Smart Upgrades", desc: "Splicing, wiring, and calibrating traditional or modern smart thermostats (Nest, Ecobee) for optimal zoning." },
                  { type: ServiceType.REFRIGERANT_LEAK, label: "Refrigerant Leak Repair", desc: "Electronic leak location, nitrogen line pressure testing, copper welding, and certified refrigerant recharge." }
                ].map((s) => (
                  <div 
                    key={s.type} 
                    className="bg-slate-900 border border-slate-800 hover:border-sky-500 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-md transition-all duration-300 hover:shadow-sky-500/5 group cursor-pointer"
                    id={`service-card-${s.type}`}
                    onClick={() => {
                      setActiveService(s.type);
                      setCurrentTab("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div className="space-y-2">
                      <div className="bg-sky-500/10 text-sky-400 p-2.5 rounded-xl border border-sky-500/20 w-max group-hover:bg-sky-500 group-hover:text-white transition-all">
                        <Wind className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">{s.label}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-850">
                      <span className="text-[10px] text-sky-400 font-bold font-mono tracking-wider hover:text-sky-300 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>VIEW DETAILS</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                      <a
                        href="tel:13802270861"
                        className="text-xs text-emerald-400 font-bold font-mono hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        CALL NOW
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Emergency same-day section banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="emergency-banner-section">
              <div className="bg-gradient-to-r from-red-950/20 via-slate-900 to-red-950/10 border border-red-900/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
                <div className="space-y-3 max-w-xl text-center md:text-left">
                  <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-xs text-red-400 font-bold font-mono uppercase">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Extreme Heat warning</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Need Emergency same-day AC service?</h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    A broken air conditioning unit during high-humidity summers is a severe safety hazard. Our emergency network dispatches dedicated specialists carrying full parts stocks within 2 hours of booking.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto justify-end">
                  <a href="tel:13802270861" className="bg-red-500 hover:bg-red-400 text-white font-bold py-3.5 px-8 rounded-xl text-base shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5 animate-bounce" />
                    <span>Call Now: 13802270861</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 4. Interactive Diagnostics Teaser */}
            <section className="max-w-4xl mx-auto px-4" id="diagnostics-teaser">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-sky-400 animate-spin-slow" />
                  <span>Try our AC Systems Diagnostic Troubleshooter</span>
                </h2>
                <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                  AC fan won't spin? Water pooling near your air handler? Run through our step-by-step interactive DIY checklist to see if you can resolve the system lock without dispatch fees!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setCurrentTab("diagnostics");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-slate-950 border border-slate-800 text-sky-400 hover:text-sky-300 font-bold py-2.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center space-x-1.5 mx-auto hover:border-slate-700 cursor-pointer"
                  >
                    <span>Launch Diagnostics Tool</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Premium Common AC Problems We Fix Section */}
            <CommonProblems />

            {/* 5. Reviews Wall & Submission */}
            <section className="max-w-6xl mx-auto px-4 space-y-12 pb-8" id="customer-reviews-section">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center space-x-2">
                  <Star className="h-5.5 w-5.5 text-amber-400 fill-amber-400" />
                  <span>Verified Customer Comfort Reviews</span>
                </h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto">
                  See what homeowners across the country are saying about AeroNation's immediate dispatch times and clean workmanship.
                </p>
              </div>

              {/* Grid of Reviews */}
              {loadingReviews ? (
                <div className="text-center py-6 animate-pulse text-slate-500 font-mono text-xs">Loading customer testimonials...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="reviews-list-grid">
                  {reviews.slice(0, 4).map((review) => (
                    <div key={review.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-white">{review.customerName}</p>
                          <span className="text-[10px] text-slate-500 font-mono font-semibold">{review.city}, {review.state} | {review.date}</span>
                        </div>
                        <div className="flex space-x-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">"{review.comment}"</p>
                      <div className="text-[10px] text-sky-400 font-mono font-bold bg-slate-950 px-2 py-1 rounded-md border border-slate-850/45 w-max uppercase">
                        {review.serviceType}
                      </div>
                    </div>
                  ))}
                </div>
              )}


            </section>

          </div>
        )}

        {/* TAB: SERVICES PAGES */}
        {currentTab === "services" && (
          <div className="pt-10 animate-in fade-in duration-200">
            <ServicePage 
              activeService={activeService}
              onSelectService={setActiveService}
            />
          </div>
        )}

        {/* TAB 2: DIAGNOSTICS & TROUBLESHOOTING */}
        {currentTab === "diagnostics" && (
          <div className="pt-10 animate-in fade-in duration-200">
            <Troubleshooter 
              onSelectServiceToBook={(service) => {
                setBookingServicePreset(service);
                setBookingStatePreset("");
                setBookingCityPreset("");
                setIsBookingOpen(true);
              }}
            />
          </div>
        )}

        {/* TAB 3: STATES & CITIES DIRECTORY */}
        {currentTab === "directory" && (
          <div className="pt-10 animate-in fade-in duration-200">
            <StateDirectory 
              onBookService={handleBookServicePreset}
              selectedStateAbbr={selectedStateAbbr}
              setSelectedStateAbbr={setSelectedStateAbbr}
              selectedCityName={selectedCityName}
              setSelectedCityName={setSelectedCityName}
              activeSubPage={activeSubPage}
              setActiveSubPage={setActiveSubPage}
            />
          </div>
        )}

      </main>

      {/* Footer component */}
      <Footer 
        setTab={setCurrentTab} 
        onSelectState={setSelectedStateAbbr} 
      />

      {/* Booking Wizard Overlay Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors h-8 w-8 flex items-center justify-center rounded-xl bg-slate-950/40 border border-slate-850 cursor-pointer"
            >
              &times;
            </button>
            <BookingWizard 
              onBookingCompleted={handleBookingCompleted}
              onClose={() => setIsBookingOpen(false)}
              initialStateAbbr={bookingStatePreset}
              initialCityName={bookingCityPreset}
            />
          </div>
        </div>
      )}

    </div>
  );
}
