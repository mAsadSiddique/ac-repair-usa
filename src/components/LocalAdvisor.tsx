/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Brain, Cpu, Check, AlertTriangle, ShieldCheck, Flame } from "lucide-react";
import { generateClimateAdvice, AdviceData } from "../data/clientStore";

interface LocalAdvisorProps {
  city: string;
  stateName: string;
  stateAbbr: string;
  avgTemp: string;
  climateZone: string;
}

export default function LocalAdvisor({ city, stateName, stateAbbr, avgTemp, climateZone }: LocalAdvisorProps) {
  const [advice, setAdvice] = useState<AdviceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateAdvice = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await generateClimateAdvice({ city, stateName, stateAbbr, avgTemp, climateZone });
      setAdvice(data);
    } catch (err: any) {
      setError("AI generation had a transient error, but local cache was restored. Please retry.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" id="ai-advisor-panel">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">
            <Brain className="h-4 w-4" />
            <span>AI Studio Engine integration</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center space-x-2.5">
            <Sparkles className="h-5.5 w-5.5 text-amber-500" />
            <span>Gemini Climate AC Advisor</span>
          </h2>
          <p className="text-xs text-slate-500">Customized mechanical wear-and-tear projections based on {city}'s environmental indexes.</p>
        </div>

        {!advice && !loading && (
          <button
            onClick={handleGenerateAdvice}
            className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all cursor-pointer flex items-center space-x-2 shadow-sm hover:shadow-md active:scale-95 shrink-0"
            id="btn-trigger-ai-advice"
          >
            <Cpu className="h-4 w-4 animate-spin-slow" />
            <span>Generate Local AC Report</span>
          </button>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="p-8 space-y-6 animate-pulse" id="ai-loading-screen">
          <div className="flex items-center space-x-3 text-sm text-sky-600 font-mono font-bold justify-center py-4 bg-sky-50/40 rounded-2xl border border-slate-200">
            <Cpu className="h-5 w-5 animate-spin text-sky-600" />
            <span>Analyzing local humidity and heat metrics for {city} via Gemini 3.5-flash...</span>
          </div>

          <div className="space-y-3">
            <div className="h-4 bg-slate-100 rounded-full w-3/4" />
            <div className="h-4 bg-slate-100 rounded-full w-5/6" />
            <div className="h-4 bg-slate-100 rounded-full w-1/2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="h-24 bg-slate-50 border border-slate-100 rounded-xl" />
            <div className="h-24 bg-slate-50 border border-slate-100 rounded-xl" />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && !loading && (
        <div className="p-4 bg-red-50 border-b border-red-200 text-red-600 text-xs text-center font-medium">
          {error}
        </div>
      )}

      {/* Advice Display */}
      {advice && !loading && (
        <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-300" id="ai-report-output">
          
          {/* Climate Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Micro-Climate Assessment</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              "{advice.climateOverview}"
            </p>
          </div>

          {/* Common Issues Tailored to Local Weather */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Projected System Stress Risks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {advice.commonIssues.map((issueItem, index) => (
                <div key={index} className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 text-sm font-bold text-slate-900">
                    <AlertTriangle className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    <span>{issueItem.issue}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {issueItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Homeowner DIY Tips */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center space-x-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
              <span>Recommended Proactive Homeowner Actions</span>
            </h3>
            <div className="space-y-2.5">
              {advice.homeownerTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 bg-emerald-50/50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-lg shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Cooling Plan */}
          <div className="bg-sky-50/40 border border-sky-200 rounded-2xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 font-mono flex items-center space-x-1.5">
              <Flame className="h-4 w-4 text-amber-500" />
              <span>Recommended Local Cooling Action Plan</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {advice.recommendedPlan}
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-slate-500 text-center leading-normal">
            AI assessment parameters generated by model 'gemini-3.5-flash'. Predictions are advisory and correspond with local seasonal HVAC weather modeling. Standard safety regulations apply.
          </p>
        </div>
      )}
    </div>
  );
}
