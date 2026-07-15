/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { DIAGNOSTICS_DB } from "../data/diagnostics";
import { DiagnosticSymptom } from "../types";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "../data/phone";
import { Activity, ShieldAlert, CheckSquare, ChevronDown, ChevronUp, AlertCircle, Wrench, Sparkles, Phone } from "lucide-react";

export default function Troubleshooter() {
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
        <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full text-xs text-sky-600 font-bold font-mono">
          <Activity className="h-3.5 w-3.5" />
          <span>Interactive HVAC Systems Diagnostics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          AC Diagnostic & Troubleshooter
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
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
                  ? "bg-white border-sky-500 shadow-md" 
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
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
                    isExpanded ? "bg-sky-500 text-white" : "bg-sky-50 text-sky-600"
                  }`}>
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{symptom.symptom}</h3>
                    <div className="flex items-center space-x-3 mt-1 text-xs">
                      <span className={`font-mono px-2 py-0.5 rounded-full font-bold ${
                        symptom.severity === "High" 
                          ? "bg-red-50 text-red-600 border border-red-200" 
                          : "bg-amber-50 text-amber-600 border border-amber-200"
                      }`}>
                        {symptom.severity} Urgency
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {isExpanded ? <ChevronUp className="h-5 w-5 text-sky-600" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="border-t border-slate-200 p-5 sm:p-6 space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left: DIY Troubleshooting Guide */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 font-mono flex items-center space-x-1.5">
                        <CheckSquare className="h-4 w-4" />
                        <span>Interactive DIY Checklist</span>
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal">
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
                                  ? "bg-slate-50 border-slate-200 text-slate-400" 
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300"
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
                        <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono flex items-center space-x-1.5">
                          <AlertCircle className="h-4 w-4" />
                          <span>Potential Mechanical Causes</span>
                        </h4>
                        <ul className="space-y-2">
                          {symptom.possibleCauses.map((cause, index) => (
                            <li key={index} className="text-xs text-slate-500 flex items-start space-x-2 leading-relaxed">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-sky-50/40 via-white to-slate-50 border border-slate-200 p-4 rounded-xl space-y-3 shadow-sm">
                        <div className="flex items-center space-x-2 text-xs">
                          <Sparkles className="h-4 w-4 text-sky-600" />
                          <span className="font-bold text-slate-900">Need a Certified Tech?</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          If these checks do not resolve the system lock, a certified getacrepair technician is ready to dispatch directly to your door.
                        </p>
                        <a
                          href={PHONE_TEL_HREF}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center space-x-1.5 text-center cursor-pointer shadow-sm hover:shadow-md"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>Call {PHONE_DISPLAY}</span>
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

      <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl text-center text-xs text-slate-600 max-w-2xl mx-auto space-y-1.5">
        <p className="font-semibold text-slate-900">⚠️ Mechanical Safety Advisory</p>
        <p>Never attempt to touch or open electrical capacitors, control terminals, or internal compressor lines yourself. All internal electrical diagnosis must be executed by an EPA-licensed technician carrying protective safety gear.</p>
      </div>
    </div>
  );
}
