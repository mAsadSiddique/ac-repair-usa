/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { StateData, CityData } from "../types";
import { SEO_TEMPLATES } from "../data/seoContent";
import { PHONE_TEL_HREF, PHONE_DISPLAY, PHONE_DIGITS } from "../data/phone";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL, absoluteUrl, slugify } from "../data/site";
import { setJsonLd, removeJsonLd } from "../utils/seo";
import Breadcrumbs from "./Breadcrumbs";
import { 
  Phone, MapPin, ShieldCheck, Award, Sparkles, Thermometer, 
  ChevronRight, CheckCircle2, HelpCircle, AlertTriangle, 
  Hammer, Wrench, ShieldAlert, Star, Shield, Zap, Flame
} from "lucide-react";

interface ServicePageTemplateProps {
  cityName: string;
  stateObj: StateData;
  activeSubPage: string;
  onNavigateSubPage: (subPage: string) => void;
  onNavigateCity: (cityName: string) => void;
}

export default function ServicePageTemplate({
  cityName,
  stateObj,
  activeSubPage,
  onNavigateSubPage,
  onNavigateCity
}: ServicePageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const templateKey = activeSubPage in SEO_TEMPLATES ? activeSubPage : "ac-repair";
  const template = SEO_TEMPLATES[templateKey];

  // Helper to replace place holders {city} and {state}
  const t = (text: string) => {
    return text.replace(/{city}/g, cityName).replace(/{state}/g, stateObj.abbr);
  };

  // Local business + service + breadcrumb JSON-LD for city landing pages
  useEffect(() => {
    const stateSlug = slugify(stateObj.name);
    const citySlug = slugify(cityName);
    const pagePath =
      activeSubPage === "ac-repair"
        ? `/${stateSlug}/${citySlug}`
        : `/${stateSlug}/${citySlug}/${activeSubPage}`;
    const pageUrl = absoluteUrl(pagePath);
    const serviceLabel = template.serviceName || "AC Repair";

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HVACBusiness",
          "@id": `${pageUrl}#localbusiness`,
          name: `${SITE_NAME} HVAC — ${cityName}, ${stateObj.abbr}`,
          image: SITE_OG_IMAGE,
          telephone: `+${PHONE_DIGITS}`,
          url: pageUrl,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: cityName,
            addressRegion: stateObj.abbr,
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: cityName },
            { "@type": "State", name: stateObj.name },
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: `${serviceLabel} in ${cityName}, ${stateObj.abbr}`,
          serviceType: serviceLabel,
          provider: { "@id": `${pageUrl}#localbusiness` },
          areaServed: {
            "@type": "City",
            name: cityName,
            containedInPlace: {
              "@type": "State",
              name: stateObj.name,
            },
          },
          description: t(template.heroDesc),
          url: pageUrl,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: stateObj.name,
              item: absoluteUrl(`/${stateSlug}`),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: cityName,
              item: absoluteUrl(`/${stateSlug}/${citySlug}`),
            },
            {
              "@type": "ListItem",
              position: 4,
              name: serviceLabel,
              item: pageUrl,
            },
          ],
        },
        ...(Array.isArray(template.faqs) && template.faqs.length > 0
          ? [
              {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: template.faqs.map((faq: { question: string; answer: string }) => ({
                  "@type": "Question",
                  name: t(faq.question),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t(faq.answer),
                  },
                })),
              },
            ]
          : []),
      ],
    };

    setJsonLd("seo-schema-jsonld", schemaData);
    setOpenFaqIndex(0);

    return () => {
      removeJsonLd("seo-schema-jsonld");
    };
  }, [cityName, stateObj, activeSubPage, template]);

  // Select 5-6 neighboring cities deterministically
  const currentCityIndex = stateObj.cities.findIndex(c => c.name.toLowerCase() === cityName.toLowerCase());
  const neighboringCities: CityData[] = [];
  const totalCitiesInState = stateObj.cities.length;
  for (let i = 1; i <= 6; i++) {
    const neighborIndex = (currentCityIndex + i) % totalCitiesInState;
    const neighbor = stateObj.cities[neighborIndex];
    if (neighbor && neighbor.name.toLowerCase() !== cityName.toLowerCase()) {
      neighboringCities.push(neighbor);
    }
  }

  // Related services list
  const relatedServicesList = [
    { key: "ac-repair", label: "AC Repair", desc: "Emergency diagnostics, capacitor swaps, and cooling restoration." },
    { key: "ac-service", label: "AC Service", desc: "Seasonal tune-ups, mechanical calibrations, and deep coil cleaning." },
    { key: "ac-installation", label: "AC Installation", desc: "Premium energy-efficient central air replacements and replacements." },
    { key: "hvac-repair", label: "HVAC Repair", desc: "Comprehensive heating, ventilation, and thermodynamic system diagnostics." },
    { key: "hvac-installation", label: "HVAC Installation", desc: "Complete matched home furnace and air conditioner package upgrades." },
    { key: "heating-repair", label: "Heating Repair", desc: "Emergency furnace repairs, electrical audits, and heat pump tune-ups." }
  ];

  // Map Lucide icons string to elements
  const renderProblemIcon = (iconName: string) => {
    switch (iconName) {
      case "Thermometer": return <Thermometer className="h-6 w-6 text-sky-600" />;
      case "ShieldAlert": return <ShieldAlert className="h-6 w-6 text-amber-500" />;
      case "AlertTriangle": return <AlertTriangle className="h-6 w-6 text-red-500" />;
      case "Wind": return <Wrench className="h-6 w-6 text-teal-600" />;
      case "Hammer": return <Hammer className="h-6 w-6 text-emerald-600" />;
      default: return <Wrench className="h-6 w-6 text-sky-600" />;
    }
  };

  // Highlight points for Hero Section
  const serviceHighlights = [
    "EPA-Licensed Dispatch",
    "Same-Day Service Guarantee",
    "Flat-Rate Upfront Estimates",
    `Local ${cityName} Techs`
  ];

  const cityDetails =
    stateObj.cities.find((c) => c.name.toLowerCase() === cityName.toLowerCase()) || null;

  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-300" id="premium-service-page">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            onClick: () => {
              window.history.pushState(null, "", "/");
              window.dispatchEvent(new PopStateEvent("popstate"));
            },
          },
          {
            label: stateObj.name,
            onClick: () => onNavigateCity(""),
          },
          { label: cityName },
          { label: template.serviceName || "AC Repair" },
        ]}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm" id="hero-section">
        {/* Decorative backdrop glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full text-xs text-sky-600 font-bold font-mono">
              <Sparkles className="h-4 w-4 text-sky-600" />
              <span>PREMIUM LOCAL COMFORT STATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {t(template.heroTitle)}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t(template.heroDesc)}
            </p>

            {cityDetails && (
              <div className="bg-white/90 border border-slate-200 rounded-2xl p-4 space-y-2 shadow-sm" id="local-seo-insights">
                <h2 className="text-sm font-bold text-slate-900">
                  Why {cityName}, {stateObj.abbr} homeowners call for {template.serviceName}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cityName} sits in a {stateObj.climateZone.toLowerCase()} zone
                  {cityDetails.avgSummerTemp ? ` with summer highs near ${cityDetails.avgSummerTemp}` : ""}.
                  {" "}{cityDetails.climateProfile}. Local technicians frequently diagnose {cityDetails.commonIssue.toLowerCase()}.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  getacrepair coordinates licensed, EPA-certified {template.serviceName.toLowerCase()} for {cityName} neighborhoods with same-day dispatch when capacity allows. Call {PHONE_DISPLAY} for an on-the-phone estimate and nearest crew assignment.
                </p>
              </div>
            )}

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {serviceHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">{hl}</span>
                </div>
              ))}
            </div>

            {/* Hero CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={PHONE_TEL_HREF}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-xl text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="h-4 w-4 animate-bounce shrink-0" />
                <span>Call Local Dispatch: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column (Dispatch card status) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-black text-6xl text-slate-100 select-none uppercase font-mono pointer-events-none">
                {stateObj.abbr}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-xs font-bold text-emerald-600 font-mono tracking-wider uppercase">● Dispatch Center On-Call</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Service Territory</span>
                  <h3 className="text-xl font-bold text-slate-900">{cityName}, {stateObj.abbr}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Regional technicians are stationed within the {cityName} suburbs to minimize travel times, ensuring prompt, same-day recovery windows.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-sky-50/40 p-3.5 rounded-xl border border-slate-200">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-1">Response Time</span>
                    <span className="text-xs font-bold text-sky-600">Under 2 Hours</span>
                  </div>
                  <div className="bg-sky-50/40 p-3.5 rounded-xl border border-slate-200">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-1">Rate Multiplier</span>
                    <span className="text-xs font-bold text-emerald-600">1.0x (Standard)</span>
                  </div>
                </div>

                <div className="bg-sky-50/40 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono block">Seasonal Warning</span>
                  <p className="text-xs text-slate-600 leading-normal">
                    Summer peaks often hover near high comfort limits. Ensure preventative audits are scheduled to bypass high amp lock-outs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THIS SERVICE SECTION (600–900 words) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 shadow-sm" id="about-section">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-[10px] text-sky-600 font-bold font-mono uppercase">
            <Award className="h-3.5 w-3.5" />
            <span>EXPERT HVAC CRAFTSMANSHIP & STANDARDS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Comprehensive Analysis of {template.serviceName} in {cityName}, {stateObj.abbr}
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-slate-600 text-sm leading-relaxed text-justify">
            {template.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="first-letter:text-xl first-letter:font-bold first-letter:text-sky-600">
                {t(para)}
              </p>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-100 pb-3">
                Local Regulatory Compliances
              </h4>
              <ul className="space-y-3">
                {[
                  { title: "EPA Section 608", desc: "Mandatory federal licensing for handling, charging, and recovering R-410a fluorocarbon gases." },
                  { title: "NATE Standards", desc: "North American Technician Excellence guidelines applied to structural air balances." },
                  { title: "Local Code Bounds", desc: "Rigid compliance with electrical connections, low-voltage wiring, and gas lines." }
                ].map((item, idx) => (
                  <li key={idx} className="space-y-1">
                    <strong className="text-xs text-slate-900 block">{item.title}</strong>
                    <span className="text-[11px] text-slate-500 block leading-normal">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                Regional Climate Profile
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Operating within the {stateObj.name} {stateObj.climateZone} zone requires specialized diagnostic calibrations to accommodate high outdoor temperatures.
              </p>
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex justify-between text-xs">
                <span className="text-slate-500">State Climate Zone:</span>
                <span className="font-bold text-slate-900">{stateObj.climateZone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON PROBLEMS WE SOLVE */}
      <section className="space-y-8" id="problems-section">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-[10px] text-red-600 font-bold font-mono uppercase">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>DIAGNOSTIC FAULT LOGS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Common Problems We Solve in {cityName}</h2>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Don't let minor technical malfunctions degrade your indoor air quality or destroy your cooling infrastructure. We solve these core issues daily:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {template.problems.map((prob, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex space-x-4 items-start hover:shadow-md transition-all shadow-sm">
              <div className="bg-sky-50 p-3 rounded-xl border border-slate-200 shrink-0">
                {renderProblemIcon(prob.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{t(prob.title)}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{t(prob.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENEFITS OF CHOOSING OUR COMPANY */}
      <section className="bg-gradient-to-r from-sky-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 shadow-sm" id="benefits-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] text-emerald-600 font-bold font-mono uppercase">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>THE getacrepair ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              Benefits of Choosing Our Professional HVAC Services
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We focus on delivering high-precision engineering paired with customer transparency. Our services are tailored to optimize performance, save power, and guarantee peace of mind.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {template.benefits.map((ben, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl space-y-2 shadow-sm hover:shadow-md transition-all">
                <div className="h-1.5 w-10 bg-sky-600 rounded-full" />
                <h4 className="text-xs font-bold text-slate-900">{t(ben.title)}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{t(ben.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR STEP-BY-STEP PROCESS */}
      <section className="space-y-8" id="process-section">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-[10px] text-sky-600 font-bold font-mono uppercase">
            <Wrench className="h-3.5 w-3.5" />
            <span>DISPATCH & SERVICE PROTOCOL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Step-by-Step Service Process</h2>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From the initial emergency call to the final system checkout split, here is what you can expect during our certified {template.serviceName} visit:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {template.process.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 relative hover:shadow-md transition-all shadow-sm">
              <span className="text-2xl font-black text-sky-200 font-mono block">
                {step.step}
              </span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">{t(step.title)}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{t(step.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EMERGENCY SERVICE SECTION */}
      <section className="bg-red-50 border border-red-200 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center gap-6" id="emergency-section">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 px-3 py-1 rounded-full text-[10px] text-red-600 font-bold font-mono uppercase">
            <AlertTriangle className="h-3.5 w-3.5 animate-pulse" />
            <span>24/7 DANGER HEAT PROTOCOL</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {t(template.emergencyTitle)}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(template.emergencyDesc)}
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a 
            href={PHONE_TEL_HREF}
            className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-xl text-xs transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center space-x-2"
          >
            <Phone className="h-4 w-4 animate-bounce" />
            <span>Call 24/7 Priority: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION */}
      <section className="space-y-8" id="why-choose-us-section">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] text-emerald-600 font-bold font-mono uppercase">
            <Shield className="h-3.5 w-3.5" />
            <span>THE COMFORT GUARANTEE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Choose getacrepair in {cityName}</h2>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our network of technicians represents the finest craftsmanship and customer standards in the HVAC industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {template.whyChooseUs.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-md transition-all shadow-sm">
              <div className="h-1.5 w-10 bg-emerald-600 rounded-full" />
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BRANDS WE SERVICE */}
      <section className="bg-sky-50/40 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm" id="brands-section">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase block">MULTI-BRAND LICENSED COVERAGE</span>
          <h3 className="text-base font-bold text-slate-900">HVAC Brands We Service, Install, and Support</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {template.brands.map((brand) => (
            <span 
              key={brand} 
              className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:border-sky-300 hover:shadow-sm transition-all select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* 9. SERVICE AREAS NEAR [CITY] */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm" id="service-areas-section">
        <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-sky-600" />
          <span>Service Areas in and around {cityName}, {stateObj.abbr}</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Our centralized HVAC dispatching node covers 100% of the {cityName} metropolitan area, including all residential subdivisions, surrounding neighborhoods, and rural zip codes. By stationing certified technicians across strategic regional locations, we achieve an average dispatch and arrival time of under 2 hours. If your home resides inside the local municipality boundaries of {cityName} or the nearby subdivisions, we have an active crew on-call and ready to restore comfort to your household.
        </p>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm" id="faq-section">
        <div className="space-y-2 text-center md:text-left border-b border-slate-100 pb-5">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full text-xs text-sky-600 font-bold font-mono">
            <HelpCircle className="h-4 w-4 shrink-0" />
            <span>EXPERT HVAC RESOLUTION CENTER</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Learn more about standard HVAC symptoms, repair diagnostic workflows, average replacement timelines, and local service support options.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4" id="faq-accordion">
          {template.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'border-sky-300 shadow-md' : 'border-slate-200'}`}
                id={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{t(faq.question)}</span>
                  <span className={`text-slate-500 transition-transform duration-300 transform ${isOpen ? "rotate-180 text-sky-600" : ""}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    {t(faq.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. CUSTOMER REVIEWS */}
      <section className="space-y-8" id="reviews-section">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-[10px] text-sky-600 font-bold font-mono uppercase">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            <span>VERIFIED LOCAL CUSTOMER FEEDBACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Recent Customer Reviews in {cityName}</h2>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            See what your neighbors in {cityName} are saying about their recent comfort restorations:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {template.reviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 hover:shadow-md transition-all shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <strong className="text-slate-600">{rev.author}</strong>
                <span>Verified in {cityName}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. CALL-TO-ACTION SECTION */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-500 border border-sky-400 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-md" id="cta-section">
        <div className="absolute top-0 left-0 -ml-12 -mt-12 h-40 w-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 -mr-12 -mb-12 h-40 w-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            {t(template.ctaTitle)}
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
            {t(template.ctaDesc)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 relative z-10">
          <a 
            href={PHONE_TEL_HREF}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-sky-700 font-black py-4 px-8 rounded-xl text-xs transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
          >
            <Phone className="h-4 w-4 animate-bounce shrink-0" />
            <span>Call {PHONE_DISPLAY} Now</span>
          </a>
        </div>
      </section>

      {/* 13. RELATED SERVICES */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-sm" id="related-services-section">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Wrench className="h-5 w-5 text-sky-600" />
            <span>Related Services in {cityName}</span>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Need alternative environmental or heating and cooling solutions? Select one of our other certified services below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedServicesList.map((srv) => {
            const isActive = srv.key === activeSubPage;
            return (
              <button
                key={srv.key}
                onClick={() => {
                  onNavigateSubPage(srv.key);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer group shadow-sm hover:shadow-md ${
                  isActive 
                    ? 'bg-sky-50 border-sky-300' 
                    : 'bg-white border-slate-200 hover:border-sky-200'
                }`}
              >
                <div className="flex justify-between items-center">
                  <strong className="text-xs font-bold text-sky-600 uppercase tracking-wider font-mono">
                    {srv.label}
                  </strong>
                  <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
                </div>
                <span className="text-[11px] text-slate-500 block mt-2 leading-relaxed">
                  {srv.desc}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 14. NEARBY CITIES */}
      <section className="bg-sky-50/40 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm" id="nearby-cities-section">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-sky-600" />
            <span>Nearby Cities Serviced Near {cityName}</span>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We provide fast dispatch, EPA-certified mechanics, and upfront flat-rates to all municipalities surrounding {cityName}, including:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {neighboringCities.map((city) => (
            <button
              key={city.name}
              onClick={() => {
                onNavigateCity(city.name);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 p-3 rounded-xl text-center text-xs text-slate-600 hover:text-sky-600 font-bold transition-all duration-200 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis shadow-sm hover:shadow-md"
            >
              {template.serviceName} in {city.name}
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}
