/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ServiceType, Booking } from "../types";
import { STATES_DB, getCityDetails } from "../data/states";
import { createBooking } from "../data/clientStore";
import { Calendar, ShieldCheck, MapPin, Wrench, User, CreditCard, ChevronRight, CheckCircle, Clock } from "lucide-react";

interface BookingWizardProps {
  onBookingCompleted: (booking: Booking) => void;
  onClose?: () => void;
  initialStateAbbr?: string;
  initialCityName?: string;
}

export default function BookingWizard({ onBookingCompleted, onClose, initialStateAbbr = "", initialCityName = "" }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form Fields State
  const [stateAbbr, setStateAbbr] = useState(initialStateAbbr);
  const [city, setCity] = useState(initialCityName);
  const [zipCode, setZipCode] = useState("");
  const [serviceType, setServiceType] = useState<ServiceType>(ServiceType.AC_REPAIR);
  const [urgency, setUrgency] = useState<"Standard" | "Urgent (24-48 Hours)" | "Emergency Same-Day">("Standard");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialStateAbbr) setStateAbbr(initialStateAbbr);
    if (initialCityName) setCity(initialCityName);
  }, [initialStateAbbr, initialCityName]);

  // Estimates cost calculation
  const getPricingEstimate = () => {
    let base = 150;
    switch (serviceType) {
      case ServiceType.AC_INSTALLATION:
      case ServiceType.AC_REPLACEMENT:
        base = 4500;
        break;
      case ServiceType.AC_MAINTENANCE:
        base = 120;
        break;
      case ServiceType.THERMOSTAT_REPAIR:
        base = 220;
        break;
      case ServiceType.REFRIGERANT_LEAK:
        base = 350;
        break;
      case ServiceType.EMERGENCY_SERVICE:
        base = 250;
        break;
    }

    // Cost multiplier based on city profile
    let localMultiplier = 1.0;
    if (stateAbbr && city) {
      const cityDetails = getCityDetails(stateAbbr, city);
      localMultiplier = cityDetails.estimatedCostMultiplier;
    }

    // Urgency surcharge
    let urgencySurcharge = 1.0;
    if (urgency === "Emergency Same-Day") {
      urgencySurcharge = 1.35;
    } else if (urgency === "Urgent (24-48 Hours)") {
      urgencySurcharge = 1.15;
    }

    return {
      base: base,
      localAdjustment: Math.round(base * (localMultiplier - 1)),
      urgencyAdjustment: Math.round((base * localMultiplier) * (urgencySurcharge - 1)),
      total: Math.round(base * localMultiplier * urgencySurcharge)
    };
  };

  const pricing = getPricingEstimate();

  const handleNextStep = () => {
    setError("");
    if (step === 1) {
      if (!stateAbbr) return setError("Please select your state.");
      if (!city.trim()) return setError("Please provide your city name.");
      if (!/^\d{5}$/.test(zipCode)) return setError("Please enter a valid 5-digit US ZIP code.");
    } else if (step === 2) {
      if (!serviceType) return setError("Please select a required AC service.");
    } else if (step === 3) {
      if (!customerName.trim()) return setError("Full name is required.");
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
      if (!phone.trim() || !/^\d{10}$/.test(phone.replace(/\D/g, ""))) return setError("Enter a valid 10-digit phone number.");
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmitBooking = async () => {
    setError("");
    setLoading(true);

    const selectedState = STATES_DB.find(s => s.abbr === stateAbbr);
    const stateName = selectedState ? selectedState.name : stateAbbr;

    try {
      const booking: Booking = await createBooking({
        customerName,
        phone,
        email,
        state: stateName,
        city,
        zipCode,
        serviceType,
        urgency,
        additionalNotes: notes,
        estimatedCost: pricing.total
      });

      onBookingCompleted(booking);
      if (onClose) onClose();
    } catch (err: any) {
      setError(err.message || "Unable to save your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sortedStates = [...STATES_DB].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full mx-auto shadow-2xl relative" id="booking-wizard-card">
      
      {/* Progress Header */}
      <div className="mb-8" id="wizard-steps-indicator">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
          <span className={step >= 1 ? "text-sky-400" : ""}>1. LOCATION</span>
          <ChevronRight className="h-3 w-3 text-slate-700" />
          <span className={step >= 2 ? "text-sky-400" : ""}>2. SERVICE</span>
          <ChevronRight className="h-3 w-3 text-slate-700" />
          <span className={step >= 3 ? "text-sky-400" : ""}>3. DETAILS</span>
          <ChevronRight className="h-3 w-3 text-slate-700" />
          <span className={step >= 4 ? "text-sky-400" : ""}>4. ESTIMATE</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-sky-500 transition-all duration-300" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-3 text-sm mb-6 text-center font-medium">
          {error}
        </div>
      )}

      {/* Step 1: Location */}
      {step === 1 && (
        <div className="space-y-6" id="wizard-step-1">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-sky-400" />
              <span>Verify Service Coverage Area</span>
            </h2>
            <p className="text-sm text-slate-400">Please provide your location to locate our nearest dispatch station.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Select State</label>
              <select
                value={stateAbbr}
                onChange={(e) => setStateAbbr(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                id="wizard-select-state"
              >
                <option value="">-- Choose State --</option>
                {sortedStates.map(state => (
                  <option key={state.abbr} value={state.abbr}>{state.name} ({state.abbr})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">City / Municipality</label>
              <input
                type="text"
                placeholder="e.g. Dallas, Orlando, etc."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                id="wizard-input-city"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">5-Digit ZIP Code</label>
            <input
              type="text"
              maxLength={5}
              placeholder="e.g. 77001"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 tracking-wider font-mono text-center text-lg"
              id="wizard-input-zip"
            />
          </div>

          <div className="pt-4">
            <button
              onClick={handleNextStep}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-sky-500/20 flex items-center justify-center space-x-2"
              id="wizard-step1-next"
            >
              <span>Verify Coverage & Continue</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Choose Service */}
      {step === 2 && (
        <div className="space-y-6" id="wizard-step-2">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-sky-400" />
              <span>Select Required Service</span>
            </h2>
            <p className="text-sm text-slate-400">Choose the option that describes your air conditioning request.</p>
          </div>

          <div className="grid grid-cols-1 gap-3" id="wizard-services-grid">
            {Object.values(ServiceType).map((service) => (
              <button
                key={service}
                onClick={() => setServiceType(service)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  serviceType === service
                    ? "bg-sky-500/10 border-sky-500 shadow-lg"
                    : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">{service}</p>
                  <p className="text-xs text-slate-400">
                    {service === ServiceType.AC_REPAIR && "Diagnostics and fixing blowers, capacitors, fans, or motors."}
                    {service === ServiceType.AC_INSTALLATION && "Professional sizing & energy-efficient system placement."}
                    {service === ServiceType.AC_REPLACEMENT && "Flawless replacement of outdated or high-energy condensers."}
                    {service === ServiceType.AC_MAINTENANCE && "Spring cleaning, drain flushes, and efficiency optimization."}
                    {service === ServiceType.THERMOSTAT_REPAIR && "Configuring and wiring smart or traditional thermostats."}
                    {service === ServiceType.REFRIGERANT_LEAK && "Gas leak detection, line sealing, and environmental recharge."}
                    {service === ServiceType.EMERGENCY_SERVICE && "Prioritized, rapid restoration of non-functioning systems."}
                  </p>
                </div>
                <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                  serviceType === service ? "border-sky-500 bg-sky-500 text-white" : "border-slate-700"
                }`}>
                  {serviceType === service && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={handlePrevStep}
              className="flex-1 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
              id="wizard-step2-next"
            >
              <span>Continue</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact & Urgency */}
      {step === 3 && (
        <div className="space-y-6" id="wizard-step-3">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <User className="h-5 w-5 text-sky-400" />
              <span>Provide Contact & Dispatch Urgency</span>
            </h2>
            <p className="text-sm text-slate-400">This enables your technician to coordinate exact arrival windows.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Customer Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                id="wizard-input-name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  id="wizard-input-email"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Mobile Number (For SMS updates)</label>
                <input
                  type="tel"
                  placeholder="e.g. (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono text-center tracking-wider"
                  id="wizard-input-phone"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Required Urgency Level</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "Standard", desc: "Next standard booking window" },
                  { id: "Urgent (24-48 Hours)", desc: "Priority queue" },
                  { id: "Emergency Same-Day", desc: "Instant dispatch, 2-hr target" }
                ].map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      urgency === u.id
                        ? "bg-sky-500/10 border-sky-500 text-sky-400"
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <p className="text-xs font-bold text-white">{u.id}</p>
                    <p className="text-[10px] text-slate-400 mt-1 leading-normal">{u.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Describe Symptoms / Special Notes (Optional)</label>
              <textarea
                rows={3}
                placeholder="e.g. AC fan spinning but blowing warm air, leaking water, thermostat screen dead..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm leading-relaxed"
              />
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={handlePrevStep}
              className="flex-1 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
              id="wizard-step3-next"
            >
              <span>Calculate Estimate</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Cost Estimator */}
      {step === 4 && (
        <div className="space-y-6" id="wizard-step-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-sky-400" />
              <span>Transparent Cost Estimation</span>
            </h2>
            <p className="text-sm text-slate-400">Review your localized cost estimation before booking.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-inner" id="pricing-breakdown">
            <div className="flex justify-between items-center text-sm border-b border-slate-800/80 pb-3">
              <span className="text-slate-400 font-semibold">{serviceType} Base Fee:</span>
              <span className="text-white font-mono font-bold">${pricing.base}.00</span>
            </div>

            <div className="flex justify-between items-center text-sm border-b border-slate-800/80 pb-3">
              <span className="text-slate-400 flex items-center space-x-1">
                <span>Location Adjustment ({city}, {stateAbbr}):</span>
              </span>
              <span className="text-white font-mono">
                {pricing.localAdjustment >= 0 ? "+" : ""}${pricing.localAdjustment}.00
              </span>
            </div>

            <div className="flex justify-between items-center text-sm border-b border-slate-800/80 pb-3">
              <span className="text-slate-400">Urgency Level Adjustment ({urgency}):</span>
              <span className="text-white font-mono">
                {pricing.urgencyAdjustment > 0 ? `+$${pricing.urgencyAdjustment}.00` : "No surcharge"}
              </span>
            </div>

            <div className="flex justify-between items-center text-base pt-2 font-bold">
              <span className="text-sky-400">Estimated Total:</span>
              <span className="text-white text-xl font-mono">${pricing.total}.00</span>
            </div>

            <div className="flex items-center space-x-2 bg-sky-950/20 border border-sky-900/30 rounded-xl p-3 text-[11px] text-sky-300">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <p>AeroNation guarantees no hidden surprises. The finalized invoice is calculated on-site by your technician and will not exceed this estimate unless unforeseen parts replacements are required.</p>
            </div>
          </div>

          {/* Dispatch Summary Card */}
          <div className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-4 text-xs space-y-2">
            <p className="text-slate-400"><strong className="text-white">Customer Name:</strong> {customerName}</p>
            <p className="text-slate-400"><strong className="text-white">Coverage Zone:</strong> {city}, {stateAbbr} ({zipCode})</p>
            <p className="text-slate-400"><strong className="text-white">Target Dispatch Window:</strong> {urgency === "Emergency Same-Day" ? "Immediate dispatch (2 hours)" : "Scheduled next business day"}</p>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={handlePrevStep}
              className="flex-1 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold py-3 px-6 rounded-xl transition-all"
              disabled={loading}
            >
              Back
            </button>
            <button
              onClick={handleSubmitBooking}
              className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
              disabled={loading}
              id="wizard-btn-submit"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  <span>Scheduling Technician...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Confirm Dispatch & Book</span>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
