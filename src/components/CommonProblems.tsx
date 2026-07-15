/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "../data/phone";
import { 
  Snowflake, Flame, Droplets, AlertTriangle, Wind, 
  CheckCircle2, Cpu, Activity, Zap, RotateCw, 
  Volume2, Power, Wrench, TrendingUp, MapPin, 
  Phone, Sparkles
} from "lucide-react";

interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function CommonProblems() {
  const problems: ProblemItem[] = [
    {
      id: "ac-not-cooling",
      title: "AC Not Cooling",
      description: "If your air conditioner is running but failing to lower the indoor temperature, you need immediate professional assistance. Our EPA-certified technicians will inspect your compressor, refrigerant levels, and fan coils to pinpoint the issue. Don't suffer through the heat—contact us today to restore your cool comfort quickly.",
      icon: Snowflake
    },
    {
      id: "ac-blowing-warm-air",
      title: "AC Blowing Warm Air",
      description: "When your AC blows warm air instead of refreshing cold drafts, it typically indicates a refrigerant shortage, dirty condenser coils, or a compressor failure. Our skilled experts quickly diagnose these thermodynamic issues, guaranteeing immediate comfort restoration. Call us now to get your system blowing ice-cold air once again.",
      icon: Flame
    },
    {
      id: "ac-leaking-water",
      title: "AC Leaking Water",
      description: "A leaking AC unit can cause catastrophic water damage to your ceilings, walls, and floors if left unaddressed. Water pooling around your indoor air handler is usually caused by a blocked condensate drain line or a frozen coil. Our local specialists are standing by 24/7 to clear leaks safely.",
      icon: Droplets
    },
    {
      id: "frozen-evaporator-coil",
      title: "Frozen Evaporator Coil",
      description: "If your indoor AC coils are covered in ice, your system's airflow is severely restricted, leading to potential compressor damage. This ice buildup is typically caused by insufficient airflow or a refrigerant leak. Our licensed pros will safely thaw, diagnose, and repair your system. Call us today for help.",
      icon: Snowflake
    },
    {
      id: "refrigerant-leak",
      title: "Refrigerant Leak",
      description: "Low refrigerant levels won't just stop your AC from cooling; they also put extreme mechanical strain on your compressor, risking system failure. Since refrigerant requires EPA-certified handling, our specialists perform accurate electronic leak detection and safe, certified recharges. Contact our local team now for fast, professional service.",
      icon: AlertTriangle
    },
    {
      id: "weak-airflow",
      title: "Weak Airflow",
      description: "Faint airflow from your vents makes it incredibly difficult to maintain a consistent, comfortable temperature throughout your home. This sluggish air distribution is often linked to a failing blower motor, dirty air filters, or leaky ductwork. Our technicians will inspect your ventilation system to optimize air output. Call now.",
      icon: Wind
    },
    {
      id: "dirty-air-filters",
      title: "Dirty Air Filters",
      description: "Clogged air filters choke your system's airflow, driving up power bills and triggering evaporator coil freeze-ups. Regularly replacing filters is vital to maintaining pristine indoor air quality and extending your AC's lifespan. If your system is struggling, our local specialists can perform a complete airflow audit. Contact us today.",
      icon: CheckCircle2
    },
    {
      id: "thermostat-problems",
      title: "Thermostat Problems",
      description: "A malfunctioning thermostat will cause your AC to switch off prematurely or refuse to turn on at all. Whether you have an older manual thermostat or a modern smart model, our experts can re-calibrate, repair, or upgrade your temperature sensors. Call us now to restore precise control over your home's comfort.",
      icon: Cpu
    },
    {
      id: "compressor-failure",
      title: "Compressor Failure",
      description: "Often considered the heart of your air conditioning system, a failing compressor prevents refrigerant from circulating, rendering your unit useless. Compressor issues require highly specialized, EPA-licensed repair or replacement. Our certified HVAC specialists can accurately evaluate your compressor and recommend the most cost-effective path forward. Call today.",
      icon: Activity
    },
    {
      id: "capacitor-failure",
      title: "Capacitor Failure",
      description: "The start and run capacitors provide the electrical jolt needed to launch your AC's compressor and fan motors. Extreme summer heat frequently burns these vital parts out, leaving your system humming but completely inactive. Our emergency technicians carry high-grade replacement capacitors for same-day cooling restoration. Contact us immediately.",
      icon: Zap
    },
    {
      id: "fan-motor-issues",
      title: "Fan Motor Issues",
      description: "When your condenser fan motor stops spinning, heat cannot escape your outdoor unit, causing the entire system to overheat and shut down. Our local HVAC technicians quickly diagnose fan electrical issues, worn bearings, and broken blades to get your air circulating normally again. Call now for priority diagnostic dispatch.",
      icon: RotateCw
    },
    {
      id: "ac-short-cycling",
      title: "AC Short Cycling",
      description: "If your air conditioner turns on and off constantly without completing a full cooling cycle, it is short cycling. This highly inefficient behavior wastes electricity, spikes your utility bills, and accelerates wear on internal components. Our certified technicians will find the root cause and restore normal cycles. Call now.",
      icon: Activity
    },
    {
      id: "strange-ac-noises",
      title: "Strange AC Noises",
      description: "Squealing, grinding, rattling, or clicking sounds from your air conditioner are warnings of loose components, failing bearings, or electrical faults. Ignoring these odd sounds can turn simple fixes into extremely expensive system replacements. Our local team will locate and silence the issue immediately. Call now to schedule diagnostics.",
      icon: Volume2
    },
    {
      id: "burning-smell-from-ac",
      title: "Burning Smell from AC",
      description: "A burning odor emanating from your vents is a serious warning sign of electrical wire failures, motor burnouts, or overheating components. Turn your system off immediately at the thermostat and breaker, then call our 24/7 priority emergency line. Our expert technicians will arrive quickly to eliminate any hazard.",
      icon: Flame
    },
    {
      id: "ac-wont-turn-on",
      title: "AC Won't Turn On",
      description: "A central AC unit that completely refuses to turn on can be incredibly stressful during a major summer heatwave. The root cause could range from a simple tripped circuit breaker to complex control board failures. Our responsive local crew provides prompt, reliable troubleshooting to restore cooling on-demand. Contact us now.",
      icon: Power
    },
    {
      id: "electrical-problems",
      title: "Electrical Problems",
      description: "Faulty wiring, corroded terminals, and damaged contactors will cripple your air conditioner's performance and present dangerous fire hazards. Since dealing with high-voltage HVAC components is highly dangerous, you should always leave these repairs to our licensed, EPA-certified electricians and technicians. Call now for safe, reliable assistance.",
      icon: Zap
    },
    {
      id: "clogged-condensate-drain",
      title: "Clogged Condensate Drain",
      description: "Algae, dust, and mold can easily clog your AC's condensate drain line, causing toxic water overflows and automatic safety switch shutdowns. Our experienced team utilizes high-pressure clearing tools and antimicrobial treatments to ensure proper drainage and prevent future water backup damage. Call our responsive team today for quick assistance.",
      icon: Wrench
    },
    {
      id: "high-energy-bills",
      title: "High Energy Bills",
      description: "A sudden spike in your monthly utility bills often means your air conditioning unit is working double-time due to dirty coils, low refrigerant, or mechanical wear. Our preventative maintenance technicians will clean, tune, and optimize your system to lower electrical draw and save you money. Contact us today.",
      icon: TrendingUp
    },
    {
      id: "ice-buildup-on-ac-unit",
      title: "Ice Buildup on AC Unit",
      description: "Finding physical ice coating your outdoor condenser or indoor coils indicates a severe airflow restriction or a refrigerant deficiency. Operating your system with ice buildup risks destroying your compressor completely. Let our licensed cooling specialists locate the underlying issue and safely restore normal operations. Call our dispatch center now.",
      icon: Snowflake
    },
    {
      id: "uneven-cooling",
      title: "Uneven Cooling Throughout the Home",
      description: "Are some rooms in your house freezing while others remain uncomfortably hot? Uneven home cooling is typically caused by ductwork leaks, improper system sizing, or unbalanced air distribution. Our technicians will inspect your ventilation layout to restore uniform, balanced comfort to every single room. Contact us today.",
      icon: MapPin
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8" id="common-ac-problems">
      
      {/* Header Area */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full text-xs text-sky-600 font-bold font-mono uppercase tracking-wider">
          <Sparkles className="h-4 w-4 text-sky-600" />
          <span>Professional System Diagnosis</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
          Common AC Problems We Fix
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Our certified HVAC technicians diagnose and repair all types of residential and commercial air conditioning problems across the United States. Whether your AC is not cooling properly, making unusual noises, leaking water, or completely stopped working, our experienced team provides fast, reliable, and professional solutions to restore your comfort.
        </p>
      </div>

      {/* Grid Layout of 20 Problem Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="problems-grid">
        {problems.map((prob) => {
          const IconComponent = prob.icon;
          return (
            <div 
              key={prob.id} 
              className="bg-white border border-slate-200 hover:border-sky-300 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              id={`problem-card-${prob.id}`}
            >
              <div className="space-y-3">
                {/* Icon Wrapper */}
                <div className="bg-sky-50 text-sky-600 p-3 rounded-xl border border-sky-200 w-max group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>
                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                  {prob.title}
                </h3>
                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {prob.description}
                </p>
              </div>

              {/* Call Now CTA Button */}
              <div className="pt-2 border-t border-slate-100">
                <a 
                  href={PHONE_TEL_HREF}
                  className="w-full bg-white hover:bg-sky-500 text-slate-600 hover:text-white font-bold py-3 px-4 rounded-xl text-xs transition-all duration-300 flex items-center justify-center space-x-2 border border-slate-200 hover:border-sky-500 active:scale-[0.98]"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Full-Width CTA Banner */}
      <div 
        className="bg-gradient-to-r from-sky-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-sm mt-16"
        id="problems-cta-banner"
      >
        <div className="space-y-3 max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] text-emerald-600 font-bold font-mono uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>24/7 Availability Guaranteed</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Need Fast AC Repair?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Our licensed technicians are available 24/7 to diagnose and repair your air conditioning system with fast response times, upfront pricing, and reliable service across the United States.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
          <a 
            href={PHONE_TEL_HREF} 
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-2xl text-base shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Phone className="h-5 w-5" />
            <span>Call {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

    </section>
  );
}
