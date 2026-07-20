/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ServiceType, Review } from "./types";
import { STATES_DB, findStateByAbbrOrName } from "./data/states";
import { getReviews, addReview } from "./data/clientStore";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "./data/phone";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Troubleshooter from "./components/Troubleshooter";
import StateDirectory from "./components/StateDirectory";
import { Wind, ChevronRight, Star, Clock, Phone } from "lucide-react";
import ServicePage from "./components/ServicePage";
import CommonProblems from "./components/CommonProblems";
import LegalPage from "./components/LegalPage";
import acRepairImg from "./assets/images/ac_repair_hero_1783198162370.jpg";
import { SEO_TEMPLATES } from "./data/seoContent";
import { SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE, SITE_NAME, SITE_PHONE_DISPLAY, slugify as siteSlugify } from "./data/site";
import { buildOrganizationSchema, buildWebSiteSchema, setJsonLd, updatePageSeo } from "./utils/seo";

// Helper functions for pathname-based routing
function slugify(text: string): string {
  return siteSlugify(text);
}

function findStateBySlug(slug: string) {
  const cleanSlug = slug.toLowerCase();
  return STATES_DB.find(s => slugify(s.name) === cleanSlug || s.abbr.toLowerCase() === cleanSlug);
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  
  // Service page state
  const [activeService, setActiveService] = useState<ServiceType>(ServiceType.AC_REPAIR);

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
      } else if (parts[0] === "terms") {
        setCurrentTab("terms");
      } else if (parts[0] === "privacy") {
        setCurrentTab("privacy");
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

            const validSubPages = ["ac-repair", "ac-service", "ac-installation", "hvac-repair", "hvac-installation", "heating-repair", "furnace-repair", "emergency-ac-repair", "thermostat-repair"];
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

  // 2. Push URL on state changes and manage full document SEO (title, meta, OG, canonical)
  useEffect(() => {
    let targetPath = "/";
    let title = SITE_DEFAULT_TITLE;
    let description = SITE_DEFAULT_DESCRIPTION;

    if (currentTab === "home") {
      targetPath = "/";
      title = SITE_DEFAULT_TITLE;
      description = SITE_DEFAULT_DESCRIPTION;
      setJsonLd("global-org-schema", [buildOrganizationSchema(), buildWebSiteSchema()]);
    } else if (currentTab === "directory") {
      if (!selectedStateAbbr) {
        targetPath = "/directory";
        title = `AC Repair Near Me by State | ${SITE_NAME} Nationwide Directory`;
        description = `Browse getacrepair's 50-state HVAC directory for licensed AC repair, installation, and emergency dispatch near you. Call ${SITE_PHONE_DISPLAY}.`;
      } else {
        const stateObj = STATES_DB.find(s => s.abbr === selectedStateAbbr);
        if (stateObj) {
          const stateSlug = slugify(stateObj.name);
          if (!selectedCityName) {
            targetPath = `/${stateSlug}`;
            title = `AC Repair & Installation in ${stateObj.name} | ${SITE_NAME}`;
            description = `Licensed AC repair, installation, and emergency HVAC service in ${stateObj.name}. Same-day dispatch. Call ${SITE_PHONE_DISPLAY} for local technicians.`;
          } else {
            const citySlug = slugify(selectedCityName);
            const templateKey = [
              "ac-repair",
              "ac-service",
              "ac-installation",
              "hvac-repair",
              "hvac-installation",
              "heating-repair",
              "furnace-repair",
              "emergency-ac-repair",
              "thermostat-repair"
            ].includes(activeSubPage) ? activeSubPage : "ac-repair";

            if (templateKey === "ac-repair") {
              targetPath = `/${stateSlug}/${citySlug}`;
            } else {
              targetPath = `/${stateSlug}/${citySlug}/${templateKey}`;
            }

            const template = SEO_TEMPLATES[templateKey];
            if (template) {
              title = `${template.heroTitle.replace(/{city}/g, selectedCityName).replace(/{state}/g, stateObj.abbr)} | ${SITE_NAME}`;
              description = template.heroDesc.replace(/{city}/g, selectedCityName).replace(/{state}/g, stateObj.abbr);
              if (description.length > 160) {
                description = description.slice(0, 157).trimEnd() + "...";
              }
            } else {
              title = `Emergency AC Repair in ${selectedCityName}, ${stateObj.abbr} | ${SITE_NAME}`;
              description = `24/7 AC repair and HVAC service in ${selectedCityName}, ${stateObj.abbr}. Call ${SITE_PHONE_DISPLAY} for same-day dispatch.`;
            }
          }
        }
      }
    } else if (currentTab === "diagnostics") {
      targetPath = "/diagnostics";
      title = `AC Diagnostic Troubleshooter | Free HVAC Symptom Checker | ${SITE_NAME}`;
      description = `Diagnose common AC problems with getacrepair's free HVAC troubleshooter, then call ${SITE_PHONE_DISPLAY} for licensed same-day repair.`;
    } else if (currentTab === "services") {
      targetPath = "/services";
      title = `AC Repair, Installation & Maintenance Services | ${SITE_NAME}`;
      description = `Explore getacrepair's certified AC repair, installation, replacement, refrigerant leak, and emergency HVAC services. Call ${SITE_PHONE_DISPLAY}.`;
    } else if (currentTab === "terms") {
      targetPath = "/terms";
      title = `Terms & Conditions | ${SITE_NAME}`;
      description = `Read getacrepair's Terms & Conditions for website use and phone-based HVAC dispatch services.`;
    } else if (currentTab === "privacy") {
      targetPath = "/privacy";
      title = `Privacy Policy | ${SITE_NAME}`;
      description = `Learn how getacrepair collects, uses, and protects your information when you visit getacrepairusa.com or call for HVAC service.`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
    }

    updatePageSeo({ title, description, path: targetPath });
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
    <div className="min-h-screen text-slate-900 flex flex-col font-sans" id="aero-root">
      
      {/* Navbar Header */}
      <Navbar 
        currentTab={currentTab} 
        setTab={setCurrentTab}
      />

      {/* Main Page Content Switcher */}
      <main className="grow pb-16">
        
        {/* TAB 1: HOME PAGE */}
        {currentTab === "home" && (
          <div className="space-y-20" id="home-view">
            
            {/* 1. Professional full-bleed hero */}
            <section
              className="relative min-h-[78vh] lg:min-h-[86vh] flex items-end lg:items-center overflow-hidden"
              id="hero-banner"
            >
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                  src={acRepairImg}
                  alt="Certified HVAC technician performing professional air conditioning service"
                  className="w-full h-full object-cover object-[center_30%] animate-hero-image"
                  width={1920}
                  height={1080}
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/20" />
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
                <div className="max-w-2xl space-y-7 animate-hero-fade-up">
                  <p className="text-sky-300 text-sm sm:text-base font-semibold tracking-[0.22em] uppercase">
                    getacrepair
                  </p>

                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08]">
                    Trusted AC repair &amp; installation, nationwide.
                  </h1>

                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                    EPA-licensed technicians ready same-day across all 50 states—clear pricing, careful workmanship, lasting comfort.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                    <a
                      href={PHONE_TEL_HREF}
                      className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 px-7 rounded-xl text-sm sm:text-base transition-colors shadow-lg shadow-sky-900/30"
                      id="hero-call-now-btn"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setCurrentTab("directory")}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/30 font-semibold py-3.5 px-7 rounded-xl text-sm sm:text-base transition-colors backdrop-blur-sm cursor-pointer"
                    >
                      Find service near you
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Services Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="services-grid-section">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Certified Air Conditioning Services</h2>
                <p className="text-slate-600 max-w-xl mx-auto text-sm">
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
                    className="bg-white border border-slate-200 hover:border-sky-300 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer"
                    id={`service-card-${s.type}`}
                    onClick={() => {
                      setActiveService(s.type);
                      setCurrentTab("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div className="space-y-2">
                      <div className="bg-sky-50 text-sky-600 p-2.5 rounded-xl border border-sky-100 w-max group-hover:bg-sky-600 group-hover:text-white transition-all">
                        <Wind className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{s.label}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-[10px] text-sky-600 font-bold font-mono tracking-wider hover:text-sky-700 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>VIEW DETAILS</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                      <a
                        href={PHONE_TEL_HREF}
                        className="text-xs text-emerald-600 font-bold font-mono hover:text-emerald-700 transition-colors"
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
              <div className="bg-gradient-to-r from-red-50 via-white to-orange-50 border border-red-100 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
                <div className="space-y-3 max-w-xl text-center md:text-left">
                  <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-xs text-red-600 font-bold font-mono uppercase">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Extreme Heat warning</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Need Emergency same-day AC service?</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A broken air conditioning unit during high-humidity summers is a severe safety hazard. Our emergency network dispatches dedicated specialists carrying full parts stocks within 2 hours of your call.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto justify-end">
                  <a href={PHONE_TEL_HREF} className="bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 px-8 rounded-xl text-base shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Now: {PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 4. Interactive Diagnostics Teaser */}
            <section className="max-w-4xl mx-auto px-4" id="diagnostics-teaser">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 text-center shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-sky-600 animate-spin-slow" />
                  <span>Try our AC Systems Diagnostic Troubleshooter</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                  AC fan won't spin? Water pooling near your air handler? Run through our step-by-step interactive DIY checklist to see if you can resolve the system lock without dispatch fees!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setCurrentTab("diagnostics");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-sky-50 border border-sky-200 text-sky-700 hover:text-sky-800 font-bold py-2.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center space-x-1.5 mx-auto hover:bg-sky-100 cursor-pointer"
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 flex items-center justify-center space-x-2">
                  <Star className="h-5.5 w-5.5 text-amber-400 fill-amber-400" />
                  <span>Verified Customer Comfort Reviews</span>
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto">
                  See what homeowners across the country are saying about getacrepair's immediate dispatch times and clean workmanship.
                </p>
              </div>

              {loadingReviews ? (
                <div className="text-center py-6 animate-pulse text-slate-500 font-mono text-xs">Loading customer testimonials...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="reviews-list-grid">
                  {reviews.slice(0, 4).map((review) => (
                    <div key={review.id} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-slate-900">{review.customerName}</p>
                          <span className="text-[10px] text-slate-500 font-mono font-semibold">{review.city}, {review.state} | {review.date}</span>
                        </div>
                        <div className="flex space-x-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">"{review.comment}"</p>
                      <div className="text-[10px] text-sky-700 font-mono font-bold bg-sky-50 px-2 py-1 rounded-md border border-sky-100 w-max uppercase">
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
            <Troubleshooter />
          </div>
        )}

        {/* TAB 3: STATES & CITIES DIRECTORY */}
        {currentTab === "directory" && (
          <div className="pt-10 animate-in fade-in duration-200">
            <StateDirectory 
              selectedStateAbbr={selectedStateAbbr}
              setSelectedStateAbbr={setSelectedStateAbbr}
              selectedCityName={selectedCityName}
              setSelectedCityName={setSelectedCityName}
              activeSubPage={activeSubPage}
              setActiveSubPage={setActiveSubPage}
            />
          </div>
        )}

        {currentTab === "terms" && (
          <div className="animate-in fade-in duration-200">
            <LegalPage variant="terms" onNavigate={setCurrentTab} />
          </div>
        )}

        {currentTab === "privacy" && (
          <div className="animate-in fade-in duration-200">
            <LegalPage variant="privacy" onNavigate={setCurrentTab} />
          </div>
        )}

      </main>

      {/* Footer component */}
      <Footer 
        setTab={setCurrentTab} 
        onSelectState={setSelectedStateAbbr} 
      />

    </div>
  );
}
