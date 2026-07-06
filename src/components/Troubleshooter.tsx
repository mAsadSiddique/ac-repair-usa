/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { DIAGNOSTICS_DB } from "../data/diagnostics";
import { DiagnosticSymptom, ServiceType } from "../types";
import { Activity, ShieldAlert, CheckSquare, ChevronDown, ChevronUp, AlertCircle, Wrench, Sparkles, Phone } from "lucide-react";

interface TroubleshooterProps {
  onSelectServiceToBook: (service: ServiceType) => void;
}

export default function Troubleshooter({ onSelectServiceToBook }: TroubleshooterProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});

  const toggleSymptom = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setCompletedSteps({}); // Reset checklists
    }
  };

  const toggleCheckStep = (index: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4" id="troubleshooter-section">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-950/40 border border-sky-800/40 px-4 py-1.5 rounded-full text-xs text-sky-400 font-bold font-mono">
          <Activity className="h-3.5 w-3.5 animate-pulse" />
          <span>Interactive HVAC Systems Diagnostics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          AC Diagnostic & Troubleshooter
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Before paying for a technician dispatch, select your system symptoms below to run quick DIY checkups. Most system locks can be resolved in under 10 minutes!
        </p>
      </div>

      <div className="space-y-4" id="diagnostics-symptoms-accordion">
        {DIAGNOSTICS_DB.map((symptom) => {
          const isExpanded = selectedId === symptom.id;
          return (
            <div 
              key={symptom.id}
              className={`border rounded-2xl transition-all overflow-hidden ${
                isExpanded 
                  ? "bg-slate-900 border-sky-500 shadow-xl shadow-sky-500/5" 
                  : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
              }`}
              id={`symptom-card-${symptom.id}`}
            >
              {/* Accordion Trigger */}
              <button
                onClick={() => toggleSymptom(symptom.id)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2.5 rounded-xl ${
                    isExpanded ? "bg-sky-500 text-white" : "bg-slate-900 text-slate-400"
                  }`}>
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">{symptom.symptom}</h3>
                    <div className="flex items-center space-x-3 mt-1 text-xs">
                      <span className={`font-mono px-2 py-0.5 rounded-full font-bold ${
                        symptom.severity === "High" 
                          ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {symptom.severity} Urgency
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {isExpanded ? <ChevronUp className="h-5 w-5 text-sky-400" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="border-t border-slate-800 p-5 sm:p-6 space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left: DIY Troubleshooting Guide */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono flex items-center space-x-1.5">
                        <CheckSquare className="h-4 w-4" />
                        <span>Interactive DIY Checklist</span>
                      </h4>
                      <p className="text-xs text-slate-400 leading-normal">
                        Run these rapid, safe checkups to diagnose if a system service dispatch is truly required:
                      </p>
                      
                      <div className="space-y-2">
                        {symptom.troubleshootingSteps.map((stepText, index) => {
                          const isChecked = !!completedSteps[index];
                          return (
                            <div 
                              key={index}
                              onClick={() => toggleCheckStep(index)}
                              className={`flex items-start space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                                isChecked 
                                  ? "bg-slate-950/60 border-slate-800 text-slate-500" 
                                  : "bg-slate-950 border-slate-850 text-slate-300 hover:border-slate-700"
                              }`}
                            >
                              <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? "border-emerald-500 bg-emerald-500 text-slate-950" : "border-slate-700"
                              }`}>
                                {isChecked && (
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <span className={`text-xs leading-relaxed ${isChecked ? "line-through" : ""}`}>{stepText}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: Causes & Actions */}
                    <div className="space-y-5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono flex items-center space-x-1.5">
                          <AlertCircle className="h-4 w-4" />
                          <span>Potential Mechanical Causes</span>
                        </h4>
                        <ul className="space-y-2">
                          {symptom.possibleCauses.map((cause, index) => (
                            <li key={index} className="text-xs text-slate-400 flex items-start space-x-2 leading-relaxed">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl space-y-3 shadow-inner">
                        <div className="flex items-center space-x-2 text-xs">
                          <Sparkles className="h-4 w-4 text-sky-400" />
                          <span className="font-bold text-white">Need a Certified Tech?</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          If these checks do not resolve the system lock, a certified AeroNation technician is ready to dispatch directly to your door.
                        </p>
                        <a
                          href="tel:13802270861"
                          className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center space-x-1.5 text-center cursor-pointer"
                        >
                          <Phone className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                          <span>Call 24/7 Dispatch Now</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-center text-xs text-slate-400 max-w-2xl mx-auto space-y-1.5">
        <p className="font-semibold text-slate-300">⚠️ Mechanical Safety Advisory</p>
        <p>Never attempt to touch or open electrical capacitors, control terminals, or internal compressor lines yourself. All internal electrical diagnosis must be executed by an EPA-licensed technician carrying protective safety gear.</p>
      </div>
    </div>
  );
}
