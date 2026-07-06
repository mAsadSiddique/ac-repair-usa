/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ServiceType, StateData, CityData } from "../types";
import { STATES_DB, createDynamicCity, findStateByAbbrOrName } from "../data/states";
import { 
  Wind, Phone, MapPin, Search, ShieldCheck, Award, 
  Sparkles, Thermometer, ChevronRight, CheckCircle2, 
  HelpCircle, AlertTriangle, Hammer, Wrench, ShieldAlert
} from "lucide-react";

// Import generated images
import acRepairImg from "../assets/images/ac_repair_hero_1783198162370.jpg";
import acInstallationImg from "../assets/images/ac_installation_1783198180944.jpg";
import acMaintenanceImg from "../assets/images/ac_maintenance_1783198196491.jpg";
import thermostatRepairImg from "../assets/images/thermostat_repair_1783198213750.jpg";
import refrigerantLeakImg from "../assets/images/refrigerant_leak_1783198231170.jpg";

interface FAQItem {
  question: string;
  answer: string;
}

const serviceFAQs: Record<ServiceType, FAQItem[]> = {
  [ServiceType.AC_REPAIR]: [
    {
      question: "How do I know if my AC needs a professional repair or just a new filter?",
      answer: "A clogged air filter can restrict airflow, causing uneven cooling or coil freezing. However, if your vents are blowing warm air continuously, the compressor won't turn on, you hear loud clanking or squealing noises, or your energy bill has spiked suddenly, these indicate mechanical or electrical component failures (such as a blown capacitor or faulty contactor) that require licensed diagnostics."
    },
    {
      question: "What is the average response time for an emergency AC repair dispatch?",
      answer: "We offer 24/7 priority emergency dispatch. For urgent calls (such as in extreme heat waves or when medically sensitive residents are present), our nearest technician is typically dispatched within 48 minutes, with an average overall arrival time of under 2 hours."
    },
    {
      question: "How much does a standard AC repair diagnostic callout cost?",
      answer: "Our baseline diagnostic fee ranges between $79 and $120 depending on your location. This fee covers the trip cost and a comprehensive diagnostic inspection by an EPA-certified technician. Once the root cause is identified, we provide a guaranteed, upfront, itemized repair quote before any work begins."
    },
    {
      question: "Are your HVAC technicians licensed, background-checked, and insured?",
      answer: "Yes, 100% of our network technicians are fully licensed, background-checked, insured, and EPA (Section 608) certified. This ensures they are fully qualified to handle refrigerants and complex high-voltage HVAC systems safely and legally."
    }
  ],
  [ServiceType.AC_INSTALLATION]: [
    {
      question: "How do you determine the correct size of air conditioner for my home?",
      answer: "We never guess system sizes based on square footage alone. Our technicians conduct a comprehensive Manual J Heat Load Calculation. This takes into account your home's insulation, ceiling height, local climate zone, window orientation, and duct design to specify a system with optimal cooling capacity."
    },
    {
      question: "How long does a new high-efficiency AC installation take?",
      answer: "A standard single-family home central air conditioning installation is completed in a single day, typically taking between 6 to 8 hours. This includes removing the old outdoor condenser and indoor evaporator coil, installing the new equipment, connecting electrical controls, pulling a deep vacuum on the refrigerant lines, and calibrating air flow."
    },
    {
      question: "What SEER2 rating should I look for when installing a new AC?",
      answer: "The federal minimum standard is 13.4 to 14.3 SEER2 depending on your region. However, for maximum energy savings and eligibility for federal energy tax credits (such as the Energy Efficient Home Improvement Credit), we recommend mid-tier or premium high-efficiency systems ranging from 16 to 22 SEER2."
    },
    {
      question: "Do you offer financing options for new HVAC systems?",
      answer: "Yes, we partner with premier residential lenders to offer flexible financing plans, including 0% APR promotional periods and low-interest monthly options, making high-efficiency system upgrades accessible and budget-friendly."
    }
  ],
  [ServiceType.AC_REPLACEMENT]: [
    {
      question: "Is it better to repair my current AC or replace it entirely?",
      answer: "We recommend the 'Rule of 5,000': multiply your system's age in years by the cost of the repair. If the result exceeds $5,000, or if your system is over 12-15 years old and still runs on banned R-22 Freon, replacing it with a modern high-efficiency system is almost always the more cost-effective long-term choice."
    },
    {
      question: "What is included with a full central AC replacement package?",
      answer: "Our standard replacement service includes the extraction and EPA-certified recycling of older refrigerant, disposal of old indoor/outdoor units, installation of a brand-new high-efficiency condenser and evaporator coil, a new secondary condensation pan, vibration isolation pads, a new electrical disconnect switch, and a digital thermostat upgrade."
    },
    {
      question: "Will a new replacement AC system fit on my existing concrete pad?",
      answer: "Modern high-efficiency condensers have larger surface areas and are often larger than older units. During a replacement, we install a new, heavy-duty composite equipment pad engineered to isolate compressor vibration and level the condenser properly on your terrain."
    },
    {
      question: "Does my replacement AC come with a comprehensive warranty?",
      answer: "Yes, all our replacement systems feature a 10-year manufacturer equipment warranty upon registration, paired with our dedicated 2-year labor and workmanship warranty to guarantee your total peace of mind."
    }
  ],
  [ServiceType.AC_MAINTENANCE]: [
    {
      question: "How often should my central air conditioner receive professional maintenance?",
      answer: "To preserve your manufacturer warranty, maintain peak energy efficiency, and prevent mid-season breakdowns, you should have your AC professionally serviced at least once a year—ideally in early spring before the heavy cooling season begins."
    },
    {
      question: "What specific tasks are performed during a standard 20-point tune-up?",
      answer: "Our comprehensive maintenance checklist includes chemically flushing the primary condensate drain line, cleaning the outdoor condenser coil, inspecting electrical contacts, checking capacitor capacitance values, measuring motor amp draws, checking refrigerant charge pressures, and testing safety switches."
    },
    {
      question: "Can regular maintenance help reduce my monthly cooling bills?",
      answer: "Absolutely. A dirty condenser coil or slightly undercharged system forces your compressor to work twice as hard to extract heat from your home, increasing energy consumption by up to 25%. A professional tune-up restores your system to peak thermodynamic efficiency."
    },
    {
      question: "Does regular maintenance prevent the manufacturer warranty from being voided?",
      answer: "Yes, almost all major HVAC manufacturers (including Trane, Carrier, and Lennox) explicitly require annual professional maintenance in their warranty terms. Neglecting annual service can lead to claims being rejected if critical parts like the compressor fail."
    }
  ],
  [ServiceType.THERMOSTAT_REPAIR]: [
    {
      question: "Why is my thermostat blank or unresponsive?",
      answer: "A blank thermostat is most commonly caused by dead batteries, a tripped low-voltage fuse on the indoor air handler's control board, or a tripped safety float switch on your condensate pan, which cuts 24V power to the thermostat to prevent water damage from an overflow."
    },
    {
      question: "What are the benefits of upgrading to a smart, Wi-Fi connected thermostat?",
      answer: "Smart thermostats (such as Nest, Ecobee, or Honeywell Home) learn your schedule, use geofencing to lower cooling when you are away, and provide remote control via smartphone. This can lower your heating and cooling costs by up to 10% to 15% annually."
    },
    {
      question: "What is a 'C-Wire' and why is it required for smart thermostats?",
      answer: "The 'C-Wire' (Common Wire) provides continuous 24V power from the furnace or air handler control board to the thermostat. Many older thermostats only utilized heating and cooling wires. Our technicians specialize in running new thermostat cables or installing common wire adapters to power modern smart screens."
    },
    {
      question: "How can I tell if a bad thermostat is causing my AC to cycle on and off rapidly?",
      answer: "Short-cycling can be caused by a thermostat that is poorly calibrated, placed too close to a heat source or drafty window, or experiencing loose internal wiring connections. Our technicians can test and bypass your thermostat to determine if the fault lies in the controller or the main HVAC system."
    }
  ],
  [ServiceType.REFRIGERANT_LEAK]: [
    {
      question: "Is it normal for an air conditioner to need its refrigerant recharged periodically?",
      answer: "No, an air conditioner is a closed, pressurized system. Refrigerant is not 'consumed' like fuel. If your system is low on refrigerant, there is a leak in your copper coils or connections. Simply adding more gas without finding and repairing the leak is illegal under EPA regulations and will lead to future system damage."
    },
    {
      question: "How do you locate tiny refrigerant leaks in copper coils?",
      answer: "Our technicians use a multi-step leak detection protocol: first, we scan the system with high-sensitivity electronic halogen sniffers; if necessary, we perform a high-pressure nitrogen isolation test or inject ultraviolet dye into the system to visually trace the exact escape points under UV light."
    },
    {
      question: "What is the difference between R-22 Freon and R-410A Puron?",
      answer: "R-22 Freon is an ozone-depleting hydrochlorofluorocarbon (HCFC) that has been phased out completely. It is extremely expensive and restricted. R-410A Puron is an eco-friendly hydrofluorocarbon (HFC) that replaced R-22. (Note: R-410A is also transitioning to even newer low-GWP refrigerants like R-454B, which our modern replacement systems support)."
    },
    {
      question: "Is it dangerous if my AC has a refrigerant leak?",
      answer: "Yes, refrigerant leaks degrade system performance, cause your compressor to overheat and burn out, and can cause ice to build up on your coils, potentially cracking your heat exchanger or flooding your indoor air handler. Additionally, inhaling concentrated refrigerant gas poses serious health risks."
    }
  ],
  [ServiceType.EMERGENCY_SERVICE]: [
    {
      question: "What counts as an HVAC emergency requiring same-day dispatch?",
      answer: "An HVAC emergency is any scenario where a complete system breakdown poses a risk to safety or property. This includes outdoor temperatures exceeding 85°F-90°F with elderly, infants, or medically vulnerable individuals in the household, severe electrical burning odors coming from the vents, or massive active water leaks from ceilings."
    },
    {
      question: "Are your emergency HVAC dispatch services available on weekends and holidays?",
      answer: "Yes. Our emergency response network operates 24 hours a day, 7 days a week, 365 days a year—including Thanksgiving, Christmas, and New Year's Eve. Your comfort and safety do not take holidays, and neither do we."
    },
    {
      question: "Will I have to pay a premium rate for emergency same-day dispatch?",
      answer: "We maintain transparent, flat-rate pricing. While emergency dispatch calls outside of standard business hours (nights, weekends, holidays) may carry a slightly adjusted diagnostic callout fee, we provide a complete, itemized cost estimate before beginning any emergency repairs."
    },
    {
      question: "What steps should I take while waiting for the emergency technician to arrive?",
      answer: "If you detect electrical burning smells or notice water dripping near electrical wires, immediately turn off your HVAC system at both the thermostat and the main circuit breaker. If the system is frozen (covered in ice), turn off the AC cooling mode but switch the system fan to 'ON' to help thaw the coil before the technician arrives."
    }
  ]
};

interface ServicePageProps {
  activeService: ServiceType;
  onSelectService: (service: ServiceType) => void;
}

export default function ServicePage({ activeService, onSelectService }: ServicePageProps) {
  const [selectedStateAbbr, setSelectedStateAbbr] = useState<string>("TX");
  const [searchCityQuery, setSearchCityQuery] = useState<string>("");
  const [activeCity, setActiveCity] = useState<CityData | null>(null);
  const [customCityError, setCustomCityError] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamically inject the FAQPage JSON-LD schema into the head for SEO matching
  useEffect(() => {
    const existingScript = document.getElementById("faq-schema-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    const currentFaqs = serviceFAQs[activeService];
    if (currentFaqs && currentFaqs.length > 0) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": currentFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      const script = document.createElement("script");
      script.id = "faq-schema-jsonld";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    // Default to opening the first FAQ when switching services
    setOpenFaqIndex(0);

    return () => {
      const script = document.getElementById("faq-schema-jsonld");
      if (script) {
        script.remove();
      }
    };
  }, [activeService]);

  const activeState = STATES_DB.find(s => s.abbr === selectedStateAbbr) || STATES_DB[0];

  // Map service types to information and generated images
  const serviceDetailsMap: Record<ServiceType, {
    title: string;
    subheading: string;
    image: string;
    description: string;
    features: string[];
    basePriceRange: string;
    avgDuration: string;
    guarantee: string;
    commonSigns: string[];
  }> = {
    [ServiceType.AC_REPAIR]: {
      title: "Professional Emergency AC Repair",
      subheading: "EPA-Licensed technicians solving compressor, capacitor, blower, and electrical cooling faults.",
      image: acRepairImg,
      description: "Our certified technicians carry advanced diagnostics tools and complete truck stocks to identify and repair your AC issues on the spot. We prioritize restoring your cooling comfort safely and efficiently, backed by a 100% satisfaction warranty.",
      features: [
        "Diagnostic inspection and multi-point cooling system check",
        "Expert repair of capacitor, relay, and contactor blowouts",
        "Blower fan motor replacement and belt calibration",
        "Condenser coil professional cleaning and debris removal",
        "Electrical control board troubleshooting and safety testing"
      ],
      basePriceRange: "$150 - $350",
      avgDuration: "1 - 3 Hours",
      guarantee: "1-Year Parts & Workmanship Warranty",
      commonSigns: [
        "Warm air blowing from the vents",
        "AC unit rapidly short-cycles on and off",
        "Squealing, grinding, or clicking noises from outdoor condenser",
        "Weak airflow throughout the house"
      ]
    },
    [ServiceType.AC_INSTALLATION]: {
      title: "High-Efficiency AC Installation",
      subheading: "Precision engineering, balanced sizing, and expert duct alignment for modern home comfort.",
      image: acInstallationImg,
      description: "Upgrade your household comfort with a modern, high-efficiency central air conditioner. Our certified installers execute load calculations, system balancing, and complete thermostat configuration to ensure optimal performance and up to 30% lower electric bills.",
      features: [
        "Manual J heat load calculation for perfect system sizing",
        "Installation of modern premium high-SEER2 condenser brands",
        "Precision evaporator coil and drain pan mounting",
        "Sub-cool and super-heat refrigerant flow calibration",
        "Full attic/basement plenum connection sealing"
      ],
      basePriceRange: "$4,500 - $8,500",
      avgDuration: "1 Day (6 - 8 Hours)",
      guarantee: "10-Year Equipment & 2-Year Labor Guarantee",
      commonSigns: [
        "System is over 12-15 years old and requiring frequent repairs",
        "Skyrocketing energy bills during peak summer cooling",
        "Uneven cooling between different floors or rooms",
        "Current system uses outdated R-22 Freon refrigerant"
      ]
    },
    [ServiceType.AC_REPLACEMENT]: {
      title: "Seamless Central AC Replacement",
      subheading: "Out with old, inefficient systems. In with modern eco-friendly cooling platforms.",
      image: acInstallationImg, // Reuse installation image
      description: "Avoid throwing good money after bad. When compressor failure strikes older units, a full replacement with a high-efficiency inverter-driven system is your most cost-effective path. We handle complete removal, code-compliant disposal, and modern system commissioning.",
      features: [
        "Environmentally sound extraction and recycling of older R-22 gas",
        "Upgrading to variable-speed or two-stage premium compressors",
        "Complete electrical disconnect box and whip replacement",
        "Vibration isolation pad installation for ultra-quiet operation",
        "Ductwork static pressure testing to guarantee optimal return airflow"
      ],
      basePriceRange: "$5,000 - $9,500",
      avgDuration: "1 Day",
      guarantee: "10-Year Manufacturer Warranty + Comfort Warranty",
      commonSigns: [
        "Catastrophic compressor failure or locked rotor on older unit",
        "Repair quote exceeds 50% of the cost of a new AC",
        "R-22 refrigerant leak (unsupported and highly expensive to refill)",
        "Frequent system breakdowns in consecutive summer seasons"
      ]
    },
    [ServiceType.AC_MAINTENANCE]: {
      title: "Preventive AC Maintenance & Tune-Up",
      subheading: "Pre-season flushes, electrical balances, and mechanical optimizations to double your AC lifespan.",
      image: acMaintenanceImg,
      description: "Seasonal maintenance is the single most effective way to prevent costly mid-summer breakdowns. Our comprehensive multi-point tune-ups flush sludge from your lines, calibrate electrical draws, and optimize system pressures to keep your unit running at factory-peak efficiency.",
      features: [
        "Condensation line chemical flush and float switch safety check",
        "Amp draw and voltage reading on all capacitors and motors",
        "Refrigerant level check and temperature drop (delta-T) testing",
        "Thermostat calibration and safety sequence auditing",
        "Debris removal and precision coil inspection"
      ],
      basePriceRange: "$99 - $199",
      avgDuration: "1 - 1.5 Hours",
      guarantee: "No-Breakdown Summer Guarantee or diagnostic fee waived",
      commonSigns: [
        "It has been more than 12 months since the last system tune-up",
        "Dust or faint mildew smells when the system first boots",
        "Slight increase in monthly utility bills",
        "Attic secondary drain pan is collecting sweat or moisture"
      ]
    },
    [ServiceType.THERMOSTAT_REPAIR]: {
      title: "Thermostat Repair & Smart Upgrades",
      subheading: "Wiring diagnostics, digital recalibration, and premium smart home comfort control.",
      image: thermostatRepairImg,
      description: "Your thermostat is the brain of your HVAC system. Faulty wiring, dead batteries, or bad sensor placement can make a healthy AC short-cycle or refuse to turn on. We calibrate, re-wire, and install advanced smart controllers that optimize comfort and save power.",
      features: [
        "Thermostat wiring diagnostics and common-wire (C-wire) additions",
        "Smart thermostat installations (Nest, Ecobee, Honeywell Home)",
        "Wi-Fi connectivity, scheduling, and geofencing optimization",
        "Temperature sensor recalibration and air handler pairing",
        "Multi-zone damper system controls and relay troubleshooting"
      ],
      basePriceRange: "$120 - $250",
      avgDuration: "1 Hour",
      guarantee: "2-Year Workmanship Warranty",
      commonSigns: [
        "Thermostat screen is blank, flashing, or unresponsive",
        "AC is running continuously but failing to match set temperature",
        "AC refuses to boot even when set way below room temperature",
        "Uneven temperatures due to poorly placed single-zone sensors"
      ]
    },
    [ServiceType.REFRIGERANT_LEAK]: {
      title: "Refrigerant Leak Detection & Repair",
      subheading: "Precision electronic tracing, certified gas welding, and EPA-compliant recharges.",
      image: refrigerantLeakImg,
      description: "Low refrigerant is never normal—your AC is a closed system. Sissing sounds, frozen coils, or warm air indicate a leak in your copper coils. Our certified technicians use advanced sniffer devices, locate the exact puncture, weld it shut, and recharge your gas to factory specs.",
      features: [
        "Advanced electronic halogen leak sniffer testing",
        "High-pressure nitrogen gas isolate-and-pressure testing",
        "Oxygen-acetylene silver solder welding of ruptured copper loops",
        "Deep system evacuation vacuum pull to 500 microns",
        "Precision weigh-in of eco-friendly Puron (R-410A) refrigerant"
      ],
      basePriceRange: "$250 - $600",
      avgDuration: "2 - 4 Hours",
      guarantee: "100% Leak-Free Guarantee on repaired copper zones",
      commonSigns: [
        "Hissing or bubbling noises near the indoor air handler",
        "Ice building up on the outdoor copper suction lines or indoor coils",
        "AC runs endlessly but indoor temperature continues to rise",
        "Warm air flowing from supply registers despite active fan"
      ]
    },
    [ServiceType.EMERGENCY_SERVICE]: {
      title: "Emergency Same-Day AC Restoration",
      subheading: "Extreme-heat dispatch priorities. Operators standing by 24/7/365.",
      image: acRepairImg, // Reuse repair image
      description: "A broken air conditioner during hot, muggy summers is a severe health risk, especially for seniors, children, and pets. Our emergency priority dispatch guarantees a licensed technician arrives at your home within 2 hours to bypass, troubleshoot, and restore cooling immediately.",
      features: [
        "Priority 2-Hour guaranteed dispatcher response window",
        "Emergency diagnostic bypass and system safety checks",
        "Fully stocked trucks carrying standard compressors and fan motors",
        "EPA-certified emergency containment and temporary cooling tips",
        "Direct-to-cell phone connection with your assigned dispatch team"
      ],
      basePriceRange: "$250 - $450",
      avgDuration: "1 - 2 Hours",
      guarantee: "Immediate Same-Day Cooling Restoration Guarantee",
      commonSigns: [
        "Outside temperature exceeds 90°F and indoor AC is completely dead",
        "Seniors, infants, or medically sensitive residents in the home",
        "Water leaking directly onto electrical grids or ceiling drywalls",
        "Burnt chemical or metallic electrical odors coming from attic vents"
      ]
    }
  };

  const currentDetails = serviceDetailsMap[activeService];

  // Handle local city search
  const handleCitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomCityError("");
    setActiveCity(null);

    const query = searchCityQuery.trim();
    if (!query) return;

    // Generate dynamic city details covering any city in USA
    const dynamicCity = createDynamicCity(query, selectedStateAbbr);
    setActiveCity(dynamicCity);
  };

  // Select quick pre-defined city
  const handleQuickCitySelect = (city: CityData) => {
    setActiveCity(city);
    setSearchCityQuery(city.name);
    setCustomCityError("");
  };

  // Calculate customized localized price
  const calculateLocalizedPrice = (baseRange: string, multiplier: number) => {
    const prices = baseRange.replace(/[\$,]/g, "").split("-").map(Number);
    if (prices.length !== 2) return baseRange;
    const low = Math.round(prices[0] * multiplier);
    const high = Math.round(prices[1] * multiplier);
    
    // Formatting helper
    const format = (num: number) => num >= 1000 ? `$${(num/1000).toFixed(1)}k` : `$${num}`;
    
    return `${format(low)} - ${format(high)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-6 animate-in fade-in duration-300" id="service-page-root">
      
      {/* Top Service Subnavigation Tabs */}
      <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-thin border-b border-slate-800" id="service-types-tabs">
        {Object.values(ServiceType).map((type) => (
          <button
            key={type}
            onClick={() => {
              onSelectService(type);
              setActiveCity(null);
              setSearchCityQuery("");
              setCustomCityError("");
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
              activeService === type
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-white"
            }`}
          >
            {type === ServiceType.THERMOSTAT_REPAIR ? "Smart Thermostats" : 
             type === ServiceType.REFRIGERANT_LEAK ? "Refrigerant Leaks" : 
             type === ServiceType.EMERGENCY_SERVICE ? "Emergency 24/7" : type}
          </button>
        ))}
      </div>

      {/* Main Service Content Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800" id="service-content-banner">
        
        {/* Left Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full text-xs text-sky-400 font-bold font-mono">
            <Sparkles className="h-4 w-4" />
            <span>NATIONWIDE SERVICE PLATFORM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {currentDetails.title}
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed">
            {currentDetails.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">National Dispatch</span>
              <span className="text-sm font-bold text-emerald-400">24/7 Priority Active</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Average Duration</span>
              <span className="text-sm font-bold text-sky-400">{currentDetails.avgDuration}</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 col-span-2 sm:col-span-1">
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Quality Guarantee</span>
              <span className="text-xs font-bold text-slate-300">{currentDetails.guarantee}</span>
            </div>
          </div>

          {/* Call CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="tel:13802270861"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 hover:shadow-sky-500/25 flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>Call Local Dispatch: 13802270861</span>
            </a>
          </div>
        </div>

        {/* Right Image Frame */}
        <div className="lg:col-span-5 relative" id="service-image-container">
          <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl relative aspect-video lg:aspect-square">
            <img 
              src={currentDetails.image} 
              alt={currentDetails.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating details */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-850 p-3.5 rounded-xl flex items-center space-x-2.5">
              <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg border border-emerald-500/20">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="text-[10px] text-slate-300 leading-normal font-mono uppercase font-bold tracking-wider">
                EPA-Licensed, Insured, & Locally Dispatched
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Signs and Features Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="service-details-grid">
        
        {/* Signs you need this */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-slate-850 pb-3">
            <ShieldAlert className="h-5 w-5 text-amber-500" />
            <span>Common Signs You Need {activeService}</span>
          </h3>
          <ul className="space-y-3 pt-1">
            {currentDetails.commonSigns.map((sign, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs text-slate-300 leading-relaxed">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's included */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-slate-850 pb-3">
            <Wrench className="h-5 w-5 text-sky-400" />
            <span>What's Included in Our Comprehensive Callout</span>
          </h3>
          <ul className="space-y-3 pt-1">
            {currentDetails.features.map((feat, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs text-slate-300 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{idx + 1}. {feat}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* STATES & CITIES SELECTION SECTION */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8" id="localized-directory-service-box">
        
        <div className="space-y-2 text-center md:text-left border-b border-slate-800 pb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start space-x-2">
            <MapPin className="h-6 w-6 text-sky-400" />
            <span>100% USA Coverage: Localized {activeService} Support</span>
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Select your state below. We cover every major metro and small rural city across the United States. Confirm your municipality for real-time coordinator dispatch availability.
          </p>
        </div>

        {/* State dropdown selection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* State & City selectors */}
          <div className="md:col-span-4 space-y-5 bg-slate-950 p-4 rounded-2xl border border-slate-850">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                1. Select State ({STATES_DB.length} Available)
              </label>
              <select
                value={selectedStateAbbr}
                onChange={(e) => {
                  setSelectedStateAbbr(e.target.value);
                  setActiveCity(null);
                  setSearchCityQuery("");
                  setCustomCityError("");
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              >
                {STATES_DB.map((s) => (
                  <option key={s.abbr} value={s.abbr}>
                    {s.name} ({s.abbr})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                2. Select Pre-Defined City
              </label>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
                {activeState.cities
                  .filter(city => city.name.toLowerCase().includes(searchCityQuery.toLowerCase()))
                  .slice(0, 40)
                  .map((city) => {
                    const isSel = activeCity?.name === city.name;
                    return (
                      <button
                        key={city.name}
                        onClick={() => handleQuickCitySelect(city)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          isSel
                            ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                            : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {city.name}
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-850">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                Or Search/Add ANY USA City
              </label>
              <form onSubmit={handleCitySearch} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type any city (e.g. Austin, Boise)..."
                  value={searchCityQuery}
                  onChange={(e) => setSearchCityQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>

          {/* Localized output display */}
          <div className="md:col-span-8">
            {activeCity ? (
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-6 relative overflow-hidden animate-in zoom-in-95 duration-200">
                
                {/* Visual state backdrop decoration */}
                <div className="absolute top-0 right-0 p-4 font-black text-6xl text-slate-900 select-none uppercase font-mono pointer-events-none">
                  {selectedStateAbbr}
                </div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="bg-sky-500/10 text-sky-400 p-2.5 rounded-xl border border-sky-500/20">
                    <Thermometer className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                      <span>{activeCity.name}, {selectedStateAbbr}</span>
                      <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold">
                        Coordinator Active
                      </span>
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono font-semibold uppercase tracking-wider">
                      Regional climate: {activeState.climateZone} | Avg Temp: {activeState.avgTemp}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative z-10">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-850/50 space-y-1">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Local Coordinator Status</span>
                    <p className="text-lg font-bold text-emerald-400">
                      ON-CALL ACTIVE
                    </p>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Regional coordinator assigned for immediate response in <span className="font-bold text-sky-400">{activeCity.name}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-850/50 space-y-1">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Dispatch Response Time</span>
                    <p className="text-lg font-bold text-sky-400">Under 2 Hours</p>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Local crew stationed nearest to {activeCity.name} for rapid transit.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono block">Regional Diagnostic Alert</span>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3.5 rounded-xl border border-slate-850/40">
                    <span className="font-bold text-amber-400">Common local HVAC issue in {activeCity.name}:</span> {activeCity.commonIssue}. Our teams carry specialized replacement components to solve this issue instantly.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                  <p className="text-[10px] text-slate-500 text-center sm:text-left leading-normal">
                    Ready to book? Our dispatch operators are standing by to lock in your preferred coordinator time.
                  </p>
                  <a 
                    href="tel:13802270861"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 text-center flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>Call Now: 13802270861</span>
                  </a>
                </div>

              </div>
            ) : (
              <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="bg-slate-900 text-slate-500 p-3 rounded-2xl border border-slate-800">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-300">No Location Selected</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Select a state on the left and choose a city (or search any custom US city) to instantly retrieve localized HVAC technician availability and dispatch status.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* State SEO tip banner */}
        <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl flex items-start space-x-3 text-xs leading-relaxed text-slate-400">
          <Award className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-300">{activeState.name} HVAC Pro Tip:</span> {activeState.seoTip}
          </div>
        </div>

      </div>

      {/* Dynamic SEO FAQ Section with JSON-LD Schema */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-300" id="service-faq-section">
        <div className="space-y-2 text-center md:text-left border-b border-slate-800 pb-5">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-full text-xs text-sky-400 font-bold font-mono">
            <HelpCircle className="h-4 w-4 shrink-0" />
            <span>EXPERT HVAC RESOLUTION CENTER</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start space-x-2">
            <span>Frequently Asked Questions regarding {activeService}</span>
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Get technical insights directly from our EPA-certified cooling technicians. Learn about symptoms, diagnostic workflows, average replacement cycles, and local service support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4" id="faq-schema-accordion">
          {serviceFAQs[activeService]?.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-slate-950 border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-sky-500/40 shadow-lg shadow-sky-500/5' : 'border-slate-850'}`}
                id={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`text-slate-500 transition-transform duration-300 transform ${isOpen ? "rotate-180 text-sky-400" : ""}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-900/60 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
