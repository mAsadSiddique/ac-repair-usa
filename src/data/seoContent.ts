/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SEOServiceTemplate {
  serviceName: string;
  heroTitle: string;
  heroDesc: string;
  aboutParagraphs: string[];
  problems: { title: string; desc: string; icon: string }[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  emergencyTitle: string;
  emergencyDesc: string;
  whyChooseUs: { title: string; desc: string }[];
  brands: string[];
  faqs: { question: string; answer: string }[];
  reviews: { author: string; text: string; rating: number }[];
  ctaTitle: string;
  ctaDesc: string;
}

export const SEO_TEMPLATES: Record<string, SEOServiceTemplate> = {
  "ac-repair": {
    serviceName: "AC Repair",
    heroTitle: "Emergency AC Repair in {city}, {state}",
    heroDesc: "Struggling with a hot, humid home? getacrepair offers immediate, licensed, and EPA-certified emergency air conditioning repair services in {city}, {state}, 24 hours a day. From quick capacitor swaps to complex compressor troubleshooting, our expert technicians are dispatched in fully stocked service vehicles to restore your cooling comfort on the very first visit.",
    aboutParagraphs: [
      "When the mercury rises in {city}, your home's air conditioner is the only barrier against suffocating heat and oppressive humidity. Unfortunately, continuous high-thermal loading forces your cooling system to run long, grueling cycles, pushing critical components like the dual-run capacitor, fan relays, and high-pressure compressor to their thermodynamic limits. When a breakdown occurs, you need more than a generic fix; you require an expert, high-precision intervention by local technicians who understand the environmental and mechanical demands specific to {city}.",
      "Our diagnostic protocol is meticulous and scientific. Upon arrival, an EPA-certified technician hooks up advanced digital manifold gauges to measure liquid and suction line pressures. We check the temperature split (Delta-T) across your indoor evaporator coil and outdoor condenser, confirming that heat is being extracted efficiently. We run a full electrical sweep, measuring the microfarad output of your capacitors to ensure they lie within the safe nominal range. This structured approach ensures we identify the precise root cause rather than merely treating the symptoms.",
      "Electrical component failures represent over 70% of sudden cooling failures. Capacitors, which store electrical energy to kick-start heavy-duty compressor motors, deteriorate rapidly under high ambient outdoor temperatures. If a capacitor falls below its designated capacitance, the compressor will fail to start, resulting in short-cycling, high electrical draw, and eventual motor burnout. Our technicians carry a full inventory of high-grade, multi-tapped replacement capacitors, heavy-duty contactors, and fan relays to complete these essential electrical repairs on-site, safeguarding your primary machinery.",
      "Refrigerant leak detection is another core discipline we master. Because an air conditioner is a closed, pressurized thermodynamic loop, refrigerant is never consumed or 'used up' like gasoline. A drop in refrigerant charge always indicates a physical fracture or corrosion leak within the copper refrigerant lines or aluminum evaporator fins. Simply topping off the system is an illegal practice under EPA Section 608 guidelines without actively locating and repairing the leak. We use electronic halogen leak detectors, high-pressure nitrogen isolation tests, and ultraviolet dye diagnostics to find leaks, weld the copper, evacuate moisture to 500 microns, and weigh in fresh, eco-friendly Puron refrigerant.",
      "Our work is completed only when your air conditioning system is fully commissioned and verified. We measure air velocity across supply grilles, check condensate drain traps to prevent secondary water damage, inspect the blower fan wheel for balanced rotation, and program your thermostat for optimal comfort curves. Every repair we perform in {city} is backed by our rock-solid warranty, ensuring you can sleep comfortably at night knowing your cooling infrastructure is operating at peak mechanical efficiency."
    ],
    problems: [
      {
        title: "Air Vents Blowing Warm Air",
        desc: "A common issue where the indoor blower runs but the outdoor compressor fails to engage. This is typically caused by a blown dual-run capacitor, a failed contactor, or a critical refrigerant leak.",
        icon: "Thermometer"
      },
      {
        title: "Squealing, Grinding, or Loud Noises",
        desc: "Loud rattling or metallic squealing noises point directly to worn-out bearings in your condenser fan motor or a failing blower assembly. Left unaddressed, this can lock up the fan and overheat the system.",
        icon: "ShieldAlert"
      },
      {
        title: "Frequent AC Short-Cycling",
        desc: "When your system boots up, runs for two to three minutes, and shuts down, it is short-cycling. This behavior places extreme wear on the compressor and is usually triggered by a frozen coil or faulty thermostat sensors.",
        icon: "AlertTriangle"
      },
      {
        title: "Water Leaking Near the Furnace",
        desc: "An active cooling system extracts gallons of water from the air daily. If the condensate drain line or secondary drain trap is clogged with algae and dust, this water will overflow, causing drywall damage.",
        icon: "Wind"
      }
    ],
    benefits: [
      {
        title: "Immediate Comfort Restoration",
        desc: "Our rapid 24/7 dispatching means you won't have to endure hours of suffocating, hot indoor conditions during peak heatwaves."
      },
      {
        title: "Extended Equipment Lifespan",
        desc: "Addressing minor electrical or fan failures immediately prevents those faults from drawing excess amperage and burning out your expensive compressor."
      },
      {
        title: "Guaranteed Upfront Flat-Rates",
        desc: "We eliminate guessing games. You will receive an exact, itemized pricing breakdown showing all required parts and labor before we turn a single wrench."
      },
      {
        title: "Enhanced Thermodynamic Efficiency",
        desc: "Restoring proper electrical cycles, clearing dirty heat-exchange surfaces, and calibrating pressures brings your system back to its baseline SEER rating."
      }
    ],
    process: [
      {
        step: "01",
        title: "Emergency Request Received",
        desc: "Our localized dispatcher in {city} processes your ticket, logs system symptoms, and assigns the nearest EPA-certified on-call HVAC technician."
      },
      {
        step: "02",
        title: "On-Site Diagnostic Sweep",
        desc: "The technician inspects the indoor and outdoor units, testing electrical loads, safety switches, and refrigerant pressures to locate the failure."
      },
      {
        step: "03",
        title: "Itemized Pricing Review",
        desc: "We present a clear, upfront description of the required repairs, complete with a flat-rate cost, so you are always in complete control of the budget."
      },
      {
        step: "04",
        title: "Certified Repair & Part Swap",
        desc: "Using premium, OEM-certified replacement parts, we safely swap out failed components and weld or repair any structural faults."
      },
      {
        step: "05",
        title: "System Commissioning & Delta-T Logging",
        desc: "We test run the system for a minimum of 15 minutes, measuring air flow and temperature splits to verify absolute recovery and performance."
      }
    ],
    emergencyTitle: "Need Emergency same-day AC Restoration in {city}?",
    emergencyDesc: "Extreme summer heat waves in {city} aren't just uncomfortable—they are dangerous, particularly for infants, elderly residents, and indoor pets. When your cooling fails completely, don't wait in a dangerous environment. Our emergency response network is active 24/7/365 to deliver priority cooling solutions when you need them most.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "Every member of our field force holds comprehensive state licenses, background checks, and active EPA Section 608 certifications."
      },
      {
        title: "Same-Day Service",
        desc: "We prioritize immediate dispatching, striving to achieve same-day resolutions for all on-call service requests."
      },
      {
        title: "Upfront Pricing",
        desc: "We utilize rigid, flat-rate pricing guides. The price we quote is the price you pay—never any hidden charges or surprise hourly overruns."
      },
      {
        title: "Warranty Protection",
        desc: "All our repair parts and labor are backed by our signature 1-year workmanship guarantee to protect your home's capital."
      },
      {
        title: "EPA Certified",
        desc: "Our technicians strictly follow federal environmental rules for safe refrigerant handling, collection, and containment."
      },
      {
        title: "24/7 Availability",
        desc: "Our dispatch center operates round the clock. Day, night, weekends, or major holidays, we are ready to keep your home safe."
      }
    ],
    brands: ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "York", "Bryant", "Amana", "Ruud"],
    faqs: [
      {
        question: "How do I know if my AC needs a professional repair or just a new air filter in {city}?",
        answer: "A heavily clogged filter restricts airflow, which can cause poor air delivery, uneven cooling, and even cause the indoor evaporator coil to freeze into a block of ice. However, if your system is blowing warm air continuously, the outdoor fan is stationary, you hear loud metal-on-metal screeching, or your thermostat display is entirely blank, these are serious mechanical and electrical failures that require professional diagnostic tools."
      },
      {
        question: "What is the average response time for an emergency AC repair in {city}?",
        answer: "We offer priority dispatching across {city}. For critical emergency requests, our technicians are dispatched immediately and typically arrive at your doorstep in under 2 hours. Our service vehicles carry a massive inventory of universal capacitors, contactors, and motors to resolve your cooling issues on the spot."
      },
      {
        question: "Why is my AC running continuously but failing to lower the temperature?",
        answer: "Continuous running without temperature drops is a classic sign of either a severe refrigerant leak, a heavily restricted air filter, or an exhausted compressor that can no longer pump refrigerant effectively. Running a system in this state can permanently damage the compressor's motor windings, so we recommend shutting the system down at the breaker and scheduling a diagnostic immediately."
      },
      {
        question: "Is it safe to run my AC if I notice water pooling around the indoor furnace?",
        answer: "No, you should turn off the cooling mode immediately. Water pooling around your furnace indicates that either your primary condensate drain line is clogged or the evaporator coil has frozen and is dripping water onto the floor. Continuous leaking can short-out sensitive electrical circuits in your furnace and cause extensive water damage to your drywall."
      },
      {
        question: "What is a standard temperature split (Delta-T) for a properly functioning AC?",
        answer: "A healthy, properly charged air conditioner should maintain a temperature drop (Delta-T) of 16 to 22 degrees Fahrenheit between the warm return air entering the system and the cold supply air blowing out of your vents. If your temperature split is less than 15 degrees, your system is not operating at peak capacity and requires inspection."
      },
      {
        question: "Why does my AC hum for a few seconds but fail to start up?",
        answer: "A loud humming noise followed by a click indicates that your compressor or fan motor is trying to start but cannot pull enough electrical current. This is almost always caused by a failing dual-run capacitor. The capacitor acts as a battery to assist the motor during startup. Swapping the capacitor resolves this issue quickly."
      },
      {
        question: "Are your local technicians EPA certified and fully insured in {city}?",
        answer: "Yes, 100% of our service technicians hold active EPA Section 608 certifications, which are legally required by the federal government to handle and repair refrigerant-based systems. In addition, our teams are fully licensed and hold multi-million dollar liability insurance policies to protect your property."
      },
      {
        question: "How long does a typical AC diagnostic visit take?",
        answer: "A standard, thorough diagnostic visit takes about 45 to 60 minutes. During this window, the technician will inspect all electrical components, measure motor operating amperages, check safety switches, inspect the condensate drain, and analyze refrigerant pressures to provide an accurate diagnosis."
      }
    ],
    reviews: [
      {
        author: "Marcus T.",
        text: "Our AC died on a 98-degree afternoon. getacrepair was at my house within 90 minutes. The technician diagnosed a blown capacitor, replaced it on the spot, and had cold air blowing within 15 minutes. Best HVAC experience ever!",
        rating: 5
      },
      {
        author: "Sarah L.",
        text: "Very professional team. They gave me a flat-rate price before starting any work. No hidden fees or surprise upcharges. Explored the problem clearly and fixed our refrigerant leak quickly.",
        rating: 5
      },
      {
        author: "David K.",
        text: "I appreciated the technician taking the time to show me the thermodynamic pressure readings on his digital gauge. They really know their stuff and are honest with their pricing.",
        rating: 5
      }
    ],
    ctaTitle: "Get Your AC Repaired Today!",
    ctaDesc: "Don't suffer in a sweltering home. Our licensed HVAC mechanics are standing by to deliver fast, upfront, and guaranteed AC repairs in {city}."
  },
  "ac-service": {
    serviceName: "AC Service",
    heroTitle: "AC Service & Preventive Maintenance in {city}, {state}",
    heroDesc: "Avoid unexpected system failures and slash your monthly utility bills with our premium AC service and preventative maintenance in {city}, {state}. Our EPA-certified technicians provide deep coil washings, condensate line flushes, and full mechanical calibration to keep your air conditioner running at peak efficiency all summer long.",
    aboutParagraphs: [
      "Preventative maintenance is the cornerstone of HVAC longevity and high-efficiency operation. In {city}, where air conditioning systems operate under heavy and sustained summer thermal loads, minor mechanical and electrical deviations can quickly compound into catastrophic failures. A professional AC service tune-up is not a simple filter change; it is an exhaustive, technical calibration process engineered to restore your system to its nominal factory operating specifications.",
      "A neglected air conditioning unit loses up to 15% of its operating efficiency each year due to dirt accumulation on heat-exchange surfaces. When the outdoor condenser coils are blanketed with dust, pollen, and lawn clippings, the compressor cannot reject heat effectively, forcing it to run longer cycles and draw excess electrical amperage. During our precision service, we perform a deep chemical rinse of the condenser fins, clearing all micro-debris and dropping your compressor's operating temperature and power consumption.",
      "Our technicians also pay close attention to your indoor evaporator coil and air handling unit. We inspect the blower motor's electrical draw, checking that the fan belt is calibrated to correct tension curves. We clear the primary and secondary condensate drain lines, applying specialized slow-release biocide tablets to prevent algae buildup, mold growth, and eventual water overflows that can ruin ceilings and trigger system shut-offs.",
      "An essential aspect of annual maintenance is the inspection of dual-run capacitors and high-voltage electrical contacts. Capacitors degrade over time due to high heat, slowly losing their capacitance. If left unchecked, a weak capacitor places immense strain on the compressor's start windings, leading to premature mechanical failure. We measure capacitor microfarads against manufacturer tolerance sheets, replacing worn-out parts before they leave you stranded in the middle of a heatwave.",
      "By scheduling regular AC service with getacrepair in {city}, you protect your equipment, maintain compliance with your manufacturer's 10-year warranty guidelines, and optimize your indoor air quality. We provide an itemized mechanical diagnostic report at the end of every tune-up, detailing all operating pressures, electrical draws, and temperature drops so you have a complete paper trail of your HVAC system's health."
    ],
    problems: [
      {
        title: "Spike in Monthly Utility Bills",
        desc: "Dirty coils, clogged filters, and minor refrigerant imbalances force your AC to run longer cycles, consuming up to 30% more electricity to achieve the same cooling.",
        icon: "Thermometer"
      },
      {
        title: "Musty Odors from Attic Vents",
        desc: "Dust accumulating on damp evaporator coils creates a perfect breeding ground for mold and mildew, spreading musty odors throughout your home when the fan starts.",
        icon: "ShieldAlert"
      },
      {
        title: "Uneven Temperature Distribution",
        desc: "Poor static pressure and neglected blower fans reduce airflow velocity, leaving rooms furthest from the air handler hot, stuffy, and uncomfortable.",
        icon: "AlertTriangle"
      },
      {
        title: "Sudden Mid-Season Breakdowns",
        desc: "Over 80% of summer HVAC failures are completely preventable and stem from worn-out start capacitors, loose electrical wiring, or minor condensate blockages.",
        icon: "Wind"
      }
    ],
    benefits: [
      {
        title: "Lower Monthly Power Bills",
        desc: "A clean, calibrated air conditioner consumes significantly less electrical energy to cool your home, leading to immediate utility savings."
      },
      {
        title: "Maintain Warranty Coverage",
        desc: "Almost all major HVAC manufacturers require annual professional maintenance by a licensed contractor to keep your equipment warranty active."
      },
      {
        title: "Prevent Unexpected Outages",
        desc: "Our rigorous multi-point checks identify and resolve weak components before they trigger a catastrophic system breakdown on a hot weekend."
      },
      {
        title: "Improve Indoor Air Quality",
        desc: "Deep-cleaning evaporator coils and replacing restrictive air filters removes accumulated dust, pollen, and allergens from your indoor air stream."
      }
    ],
    process: [
      {
        step: "01",
        title: "Full Mechanical Check",
        desc: "We verify system operating pressures, static duct pressures, and temperature drops across the indoor heat-exchange surfaces."
      },
      {
        step: "02",
        title: "Coil Deep Cleaning",
        desc: "Technicians perform a chemical wash of the outdoor condenser coils and inspect the indoor evaporator coil for organic buildup."
      },
      {
        step: "03",
        title: "Electrical Component Audit",
        desc: "We test all capacitors, tighten high-voltage terminal screws, check contactor pitting, and measure motor operating amperages."
      },
      {
        step: "04",
        title: "Condensate Line Flush",
        desc: "We chemically clear the primary condensate pan and drain line, removing blockages and installing preventive biocide tabs."
      },
      {
        step: "05",
        title: "Final Diagnostic Report",
        desc: "You receive a comprehensive performance printout detailing all system parameters, efficiency ratings, and certified recommendations."
      }
    ],
    emergencyTitle: "Ensure Your AC Survives the Summer",
    emergencyDesc: "Don't wait for your air conditioner to break down on the hottest day of the year. Our preventive tune-up packages are designed to prepare your HVAC system for the grueling summer heat in {city}, keeping your family safe, cool, and comfortable.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "All our preventative maintenance calls are completed by fully licensed, background-checked HVAC specialists."
      },
      {
        title: "Same-Day Service",
        desc: "We offer flexible, easy scheduling options and strive to accommodate same-day maintenance requests."
      },
      {
        title: "Upfront Pricing",
        desc: "We maintain clear, fixed pricing for our comprehensive tune-ups. No hidden fees or unexpected diagnostic add-ons."
      },
      {
        title: "Warranty Protection",
        desc: "Our tune-ups include a No-Breakdown Guarantee: if your system fails after our service, we refund your service cost."
      },
      {
        title: "EPA Certified",
        desc: "Our maintenance specialists are fully certified to test, log, and handle refrigerant circuits legally and safely."
      },
      {
        title: "24/7 Availability",
        desc: "Our dispatchers are active around the clock, allowing you to schedule preventative maintenance at your convenience."
      }
    ],
    brands: ["Trane", "Carrier", "Lennox", "Rheem", "Goodman", "York", "Bryant", "Daikin", "American Standard"],
    faqs: [
      {
        question: "How often should I have my air conditioner serviced in {city}?",
        answer: "We highly recommend having your central air conditioner professionally serviced at least once a year. The ideal time is in early spring before you turn the cooling system on for the season. This ensures all components are clean and calibrated, preventing sudden summer failures."
      },
      {
        question: "What specific maintenance items are covered in your standard AC service?",
        answer: "Our standard maintenance service is a comprehensive 20-point tune-up. It covers: deep chemical cleaning of the outdoor condenser coils, flushing the indoor condensate drain line, testing capacitor electrical values, measuring motor amp draws, inspecting contacts, verifying safety float switches, checking refrigerant operating pressures, and replacing standard air filters."
      },
      {
        question: "Can regular AC service really lower my monthly electricity bills?",
        answer: "Yes, absolutely! A dirty air conditioner can lose up to 15% of its operating efficiency each year due to dust buildup on coils and restricted airflow. This causes the system to run longer cycles, consuming more energy. Regular maintenance restores the system to its nominal efficiency, saving you money on your power bill."
      },
      {
        question: "Why does my HVAC manufacturer require annual maintenance records?",
        answer: "Most major HVAC manufacturers (such as Trane, Carrier, and Lennox) explicitly state in their warranty terms that the 10-year parts warranty is only valid if the system receives annual professional maintenance by a licensed contractor. Keeping these records ensures that any future parts claims are approved without delay."
      },
      {
        question: "How long does a professional AC service tune-up take?",
        answer: "A comprehensive, high-quality AC service and tune-up takes approximately 60 to 90 minutes. This allows our technician ample time to clean the coils, perform all electrical tests, flush the drain lines, and document baseline operational pressures."
      },
      {
        question: "What are the common signs that my AC has been neglected and needs immediate service?",
        answer: "The most common warning signs include: a sudden increase in your monthly energy bills, weak or restricted airflow from your vents, musty or moldy odors coming from your ductwork, or a system that takes much longer to cool your home than it used to."
      },
      {
        question: "Is it really necessary to wash the outdoor condenser coil every year?",
        answer: "Yes. The outdoor condenser coil is exposed to grass clippings, wind-blown dirt, pollen, and leaves. Over time, these form a thick barrier on the aluminum fins, trapping heat inside your system. Washing the coil allows the unit to dump heat efficiently, protecting the compressor from overheating."
      },
      {
        question: "Do you install biocide tablets in the condensate pan during maintenance?",
        answer: "Yes, every preventative maintenance visit includes the clearing of your condensate drain and the installation of specialized, slow-dissolving biocide tablets. These tablets prevent the growth of algae, slime, and mold, protecting your home from water damage caused by clogged drain pans."
      }
    ],
    reviews: [
      {
        author: "Jennifer P.",
        text: "I schedule their spring tune-up every year. Their technicians are always polite, on-time, and thorough. Our energy bills have stayed low, and we haven't had a single breakdown in five years.",
        rating: 5
      },
      {
        author: "Robert H.",
        text: "The technician did a fantastic job cleaning my filthy outdoor condenser unit. He took pictures of the coils before and after and explained the electrical tests he ran. Very professional and highly recommended!",
        rating: 5
      },
      {
        author: "Linda S.",
        text: "Honest and dependable. They didn't try to upsell me on unnecessary repairs. They just did a solid, deep clean of our AC and left everything spotless. Excellent service.",
        rating: 5
      }
    ],
    ctaTitle: "Lock In Your Precision AC Service Today!",
    ctaDesc: "Don't let a dirty, neglected air conditioner drive up your power bills. Schedule our professional, multi-point AC tune-up in {city} now."
  },
  "ac-installation": {
    serviceName: "AC Installation",
    heroTitle: "High-Efficiency AC Installation in {city}, {state}",
    heroDesc: "Ready to upgrade your home comfort? getacrepair delivers premier, high-efficiency central air conditioning installation and complete system replacement in {city}, {state}. Our EPA-certified installation teams conduct full Manual J load calculations, structural duct designs, and premium system commissioning to guarantee maximum efficiency and up to 40% lower utility bills.",
    aboutParagraphs: [
      "Installing a new central air conditioning system is one of the most significant capital investments you will make in your home. While selecting a premium, high-efficiency brand is important, the single most critical factor determining your new system's lifespan, efficiency, and reliability is the quality of the installation itself. According to the Department of Energy, more than half of all new residential HVAC systems are installed incorrectly, leading to frequent breakdowns, uneven cooling, and high energy bills from day one.",
      "At getacrepair, we do not believe in guesswork or shortcuts. Every installation we undertake in {city} begins with a rigorous Manual J Heat Load Calculation. This engineering standard analyzes your home's total square footage, ceiling heights, insulation values, window types, local climate data, and orientation to specify an AC system with the precise cooling capacity required. Oversizing an air conditioner leads to rapid short-cycling, which wears out the compressor and leaves high humidity levels inside, while undersizing forces the system to run continuously without ever reaching comfort levels.",
      "Our licensed installation crews handle every aspect of the physical upgrade. We safely evacuate and recycle your old system's refrigerant in strict accordance with EPA guidelines, remove the old condenser and evaporator coils, and install a heavy-duty composite equipment pad engineered to isolate compressor vibration. We run new, insulated copper line sets, connect low-voltage control wiring, and mount a high-efficiency secondary condensation pan with an integrated emergency float switch to protect your ceilings from water damage.",
      "Once the physical components are in place, we perform essential commissioning tests. We pull a deep vacuum on the refrigerant lines, ensuring it holds at under 500 microns to confirm that no moisture or non-condensable gases remain in the system. We then weigh in the precise amount of eco-friendly refrigerant, balancing the system's superheat and subcooling levels to meet the manufacturer's exact specifications. We verify duct static pressures, adjust the multi-speed blower fan, and mount a modern digital thermostat.",
      "When you choose getacrepair for your air conditioning installation in {city}, you receive a state-of-the-art cooling platform that runs smoothly, quiet operation, and lower monthly power bills. We back all our installation projects with an industry-leading 10-year manufacturer equipment warranty paired with our dedicated 2-year labor comfort guarantee, providing you with absolute peace of mind for years to come."
    ],
    problems: [
      {
        title: "Frequent, Costly AC Repairs",
        desc: "If your current cooling system is over 12 years old and requires frequent repairs, investing in a new, high-efficiency system is almost always the more cost-effective long-term path.",
        icon: "Hammer"
      },
      {
        title: "Skyrocketing Power Bills",
        desc: "Older air conditioners with low SEER ratings require massive amounts of electrical energy to cool your home. Modern systems use up to 40% less electricity to deliver identical cooling.",
        icon: "Thermometer"
      },
      {
        title: "Current System Uses R-22 Freon",
        desc: "R-22 Freon is an ozone-depleting refrigerant that has been phased out completely. Repairing an R-22 system is extremely expensive due to the scarcity of the gas.",
        icon: "ShieldAlert"
      },
      {
        title: "Uneven Temperature and Humidity",
        desc: "If your upstairs is always hot and muggy while your downstairs is freezing, your current system's blower and layout are unbalanced. A new installation corrects these airflow curves.",
        icon: "AlertTriangle"
      }
    ],
    benefits: [
      {
        title: "Slash Monthly Utility Bills",
        desc: "Upgrading to a modern, high-efficiency SEER2 air conditioner can lower your monthly cooling costs by up to 30% to 40% immediately."
      },
      {
        title: "Long-Term Warranty Coverage",
        desc: "All our new air conditioning installations feature a 10-year manufacturer equipment warranty, shielding you from unexpected parts costs."
      },
      {
        title: "Whisper-Quiet Operation",
        desc: "Modern condensing units feature swept-wing fan blades, sound blankets, and inverter compressors that run virtually silent compared to older models."
      },
      {
        title: "Advanced Humidity Control",
        desc: "Two-stage and variable-speed compressors run longer, lower-capacity cycles that extract far more humidity from your indoor air stream."
      }
    ],
    process: [
      {
        step: "01",
        title: "In-Home Comfort Consultation",
        desc: "We conduct a complete evaluation of your home, perform Manual J load calculations, inspect existing ductwork, and present system options."
      },
      {
        step: "02",
        title: "Old System Extraction",
        desc: "Our technicians safely reclaim existing refrigerant, disconnect electrical services, and remove the older outdoor and indoor equipment."
      },
      {
        step: "03",
        title: "Structural Fabrication",
        desc: "We install a new composite ground pad, level the condenser, mount the indoor coil, and connect custom sheet-metal supply plenums."
      },
      {
        step: "04",
        title: "Electrical & Line-Set Connections",
        desc: "We run new insulated copper line sets, connect fresh low and high-voltage wiring, and install a new electrical disconnect switch."
      },
      {
        step: "05",
        title: "System Evacuation & Commissioning",
        desc: "We pull a deep vacuum to under 500 microns, weigh in the factory refrigerant charge, calibrate the thermostat, and verify all airflow splits."
      }
    ],
    emergencyTitle: "Flexible Financing for Your New AC System",
    emergencyDesc: "Upgrading your home's HVAC system is a major financial decision. To help make comfort accessible, getacrepair offers a variety of flexible residential financing plans in {city}, including low monthly payments and promotional 0% APR options for qualified buyers.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "Our installation projects are led by highly trained, fully licensed, and factory-certified HVAC mechanics."
      },
      {
        title: "Same-Day Service",
        desc: "We respect your schedule. Our teams arrive on time and complete most residential installations in a single day."
      },
      {
        title: "Upfront Pricing",
        desc: "We provide complete, fully inclusive quotes. The price we quote covers all equipment, permits, labor, and clean-up costs."
      },
      {
        title: "Warranty Protection",
        desc: "Every installation is backed by a 10-year equipment warranty and our own 2-year labor comfort guarantee."
      },
      {
        title: "EPA Certified",
        desc: "Our technicians are certified under federal law to handle and recycle older ozone-depleting refrigerants safely."
      },
      {
        title: "24/7 Availability",
        desc: "Our consultation coordinators are available around the clock to help you schedule your free in-home estimate."
      }
    ],
    brands: ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "Daikin", "Mitsubishi", "Amana", "Bosch"],
    faqs: [
      {
        question: "How do you determine the correct size air conditioner for my {city} home?",
        answer: "We never guess system sizes based on square footage alone. Our engineering team conducts a thorough Manual J Heat Load Calculation. This industry-standard calculation takes into account your home's insulation levels, wall structures, ceiling heights, window locations, local climate conditions, and home orientation to select a system with the perfect capacity."
      },
      {
        question: "How long does a new central AC installation take in {city}?",
        answer: "The vast majority of standard residential air conditioning installations are completed in a single day, typically taking between 6 to 8 hours. This includes safely reclaiming your old refrigerant, removing the existing equipment, installing the new condenser and coil, re-wiring, and commissioning the system."
      },
      {
        question: "What is the difference between SEER and SEER2 ratings?",
        answer: "SEER (Seasonal Energy Efficiency Ratio) measures an AC system's cooling efficiency over a typical cooling season. In 2023, the Department of Energy transitioned to SEER2, which uses a new, more rigorous testing procedure that better accounts for external static pressures in real-world ductwork. A SEER2 rating is typically lower than its SEER equivalent, but represents a higher standard of efficiency."
      },
      {
        question: "Should I replace my furnace at the same time as my air conditioner?",
        answer: "In most cases, yes. Your furnace and air conditioner share the same blower fan motor and indoor ductwork connections. Replacing them together ensures that both systems are perfectly matched in terms of airflow and technology, extending their lifespan, optimizing energy efficiency, and saving you significant money on labor costs."
      },
      {
        question: "What warranties are included with a new air conditioning installation?",
        answer: "Our standard installations feature a comprehensive 10-year manufacturer equipment warranty on all major components (including the compressor and coils) upon system registration. In addition, getacrepair provides our own 2-year labor and workmanship comfort warranty to guarantee your satisfaction."
      },
      {
        question: "Do you offer financing options for new cooling systems in {city}?",
        answer: "Yes, we partner with premier residential HVAC lenders to offer a range of flexible financing options. Qualified homeowners can take advantage of low monthly payments, custom terms, or promotional 0% APR financing programs, making high-efficiency comfort upgrades affordable on any budget."
      },
      {
        question: "What is included in a standard AC replacement package?",
        answer: "Our comprehensive installation package includes: removal and eco-friendly disposal of your old system, reclaiming older refrigerant, a new high-efficiency outdoor condenser, a matching indoor evaporator coil, a new secondary condensation pan, vibration isolation pads, a new electrical disconnect box, and a digital programmable thermostat."
      },
      {
        question: "Will my existing ductwork work with a new high-efficiency AC?",
        answer: "Before starting any installation, we inspect your home's existing ductwork. We test static pressures and check for leaks or detached joints. Modern high-efficiency systems require proper return airflow to prevent freezing, so we may recommend minor duct sealing or modifications to ensure optimal performance."
      }
    ],
    reviews: [
      {
        author: "Thomas W.",
        text: "We upgraded our 15-year-old AC to a new 16 SEER2 Carrier system. The crew arrived at 8 AM, worked diligently all day, and had the system running by 4 PM. Our house is cool, quiet, and our electric bills have already dropped by $80 a month!",
        rating: 5
      },
      {
        author: "Karen M.",
        text: "The sales rep was incredibly thorough, conducting a full heat-load check of our house instead of just copying the old unit's size. The installers were professional, wore boot covers inside, and left the work area cleaner than they found it.",
        rating: 5
      },
      {
        author: "Richard B.",
        text: "Excellent experience from start to finish. They helped me secure 0% financing for 18 months, handled all the city permits and registrations, and delivered a top-tier installation. Highly recommend!",
        rating: 5
      }
    ],
    ctaTitle: "Get a Free In-Home AC Installation Estimate!",
    ctaDesc: "Upgrade to a modern, whisper-quiet cooling system and start saving on your monthly energy bills. Schedule your free consultation in {city} today."
  },
  "hvac-repair": {
    serviceName: "HVAC Repair",
    heroTitle: "Comprehensive HVAC Repair in {city}, {state}",
    heroDesc: "Is your home's heating or cooling system failing to keep up? getacrepair provides expert, licensed, and EPA-certified HVAC repair services in {city}, {state}. Our local technicians diagnose and resolve faults across central air conditioners, gas furnaces, modern heat pumps, and ductwork systems to keep your household safe and comfortable year-round.",
    aboutParagraphs: [
      "Your home's heating, ventilation, and air conditioning (HVAC) system is a complex, integrated network of mechanical, electrical, and thermodynamic processes. A problem in one area can trigger performance issues throughout the entire infrastructure. For example, a failing blower motor in your furnace will not only leave you cold in the winter, but it will also cause your indoor evaporator coil to freeze and halt your cooling in the summer. When you face HVAC issues in {city}, you need comprehensive, expert repair services that address the complete system.",
      "At getacrepair, our licensed HVAC technicians are trained to analyze your heating and cooling systems as a single, cohesive ecosystem. We carry advanced digital testing tools, combustion analyzers, and electronic airflow meters to diagnose issues across all system types. Whether you have a split-system central AC, a gas-fired furnace, or a modern high-efficiency heat pump, we have the experience and parts inventory to execute lasting, code-compliant repairs.",
      "Gas furnaces require specialized diagnostic and safety checks. A failing igniter or a dirty flame sensor can prevent your heating system from firing up, while a cracked heat exchanger poses a severe, life-threatening carbon monoxide hazard to your household. During our diagnostic sweep, we perform visual camera inspections of the heat exchanger, check draft inducer motor amperages, clean the flame sensor, and verify that gas manifold pressures meet the manufacturer's nominal ratings, ensuring safe and reliable heating.",
      "Heat pump systems represent another highly technical discipline. A heat pump works as a reversible air conditioner, utilizing a specialized reversing valve to either extract heat from your home in summer or pump heat inside during the winter. Reversing valve failures, refrigerant charge issues, or faulty defrost control boards can cause your system to lose heating capacity during cold winter nights. Our technicians excel at troubleshooting these dual-system platforms, restoring seamless operation.",
      "We believe in transparent, professional craftsmanship. Before we begin any HVAC repairs in {city}, we provide a comprehensive, itemized flat-rate quote. We use premium, OEM-certified replacement parts and double-test every safety switch and circuit to guarantee our work. With our 1-year workmanship warranty protecting your investment, you can trust getacrepair to keep your home's primary environmental controls running smoothly through every season."
    ],
    problems: [
      {
        title: "System Blowing Air of the Wrong Temp",
        desc: "Whether it is cold air in the winter or warm air in the summer, this issue indicates a failed heat source, a tripped high-limit safety switch, a bad compressor, or a low refrigerant level.",
        icon: "Thermometer"
      },
      {
        title: "No Air Flowing from Supply Vents",
        desc: "If your system is running but no air is coming from your vents, your blower fan motor has failed, the fan belt has snapped, or the system's control board has suffered a short-circuit.",
        icon: "ShieldAlert"
      },
      {
        title: "System Constantly Cycling On and Off",
        desc: "Known as short-cycling, this is usually triggered by a faulty thermostat, a dirty flame sensor on the furnace, restricted return airflow, or a severely clogged filter.",
        icon: "AlertTriangle"
      },
      {
        title: "Strange Scraping or Burning Smells",
        desc: "A burning electrical odor suggests that a blower motor is overheating, wire insulation is melting, or a terminal contactor is pitting. This is a critical hazard that requires immediate attention.",
        icon: "Wind"
      }
    ],
    benefits: [
      {
        title: "True Year-Round Comfort",
        desc: "We diagnose and repair both your heating and cooling systems, ensuring your home remains perfectly comfortable through summer heatwaves and winter freezes."
      },
      {
        title: "Strict Safety Verifications",
        desc: "Our furnace diagnostics include rigorous carbon monoxide and safety switch checks to protect your family from combustion hazards."
      },
      {
        title: "Lower Monthly Energy Bills",
        desc: "Calibrating your blower motor, replacing worn contacts, and clearing dirty heat exchangers restores your system to its baseline efficiency."
      },
      {
        title: "Prevent Premature System Failure",
        desc: "Resolving minor electrical and airflow issues prevents severe component strain that can burn out expensive motors and compressors."
      }
    ],
    process: [
      {
        step: "01",
        title: "Fast Local Dispatch",
        desc: "We log your system symptoms and immediately dispatch a licensed, fully equipped HVAC technician to your home."
      },
      {
        step: "02",
        title: "Comprehensive HVAC Check",
        desc: "We check the thermostat, inspect the indoor air handler or furnace, test high-voltage electrical contacts, and measure system pressures."
      },
      {
        step: "03",
        title: "Upfront Cost Estimates",
        desc: "We provide an exact, flat-rate pricing guide outlining the necessary parts and labor, ensuring complete transparency before any work begins."
      },
      {
        step: "04",
        title: "Precision Mechanical Repair",
        desc: "Using premium, OEM parts, we replace the failed components and verify all gas line or refrigerant loop connections."
      },
      {
        step: "05",
        title: "Safety & Performance Commissioning",
        desc: "We test the system under full operating load, checking gas combustion levels, refrigerant charge, and temperature drops to verify success."
      }
    ],
    emergencyTitle: "On-Call Emergency HVAC Service 24/7",
    emergencyDesc: "A complete heating failure during sub-freezing winter nights or a cooling breakdown during an extreme summer heatwave in {city} poses immediate risks to your family's safety. Our emergency dispatch operators are standing by 24/7/365 to deliver rapid comfort restorations when you need them most.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "All our repair projects are completed by fully licensed, background-checked, and highly trained HVAC specialists."
      },
      {
        title: "Same-Day Service",
        desc: "We understand that heating and cooling failures are urgent, which is why we offer immediate, same-day repair appointments."
      },
      {
        title: "Upfront Pricing",
        desc: "We maintain flat-rate pricing guides for all HVAC services. The price we quote before starting is the price you pay."
      },
      {
        title: "Warranty Protection",
        desc: "All our repairs are backed by our signature 1-year workmanship warranty, shielding your home from recurring issues."
      },
      {
        title: "EPA Certified",
        desc: "Our technicians strictly comply with all EPA guidelines for the safe recovery, containment, and handling of refrigerants."
      },
      {
        title: "24/7 Availability",
        desc: "Our dispatch center is open round the clock, ensuring you can connect with a local HVAC specialist day or night."
      }
    ],
    brands: ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "York", "Bryant", "Amana", "Ruud"],
    faqs: [
      {
        question: "What is the difference between an air conditioner and a heat pump in {city}?",
        answer: "A standard central air conditioner can only cool your home by absorbing indoor heat and releasing it outdoors. A heat pump operates on the exact same thermodynamic principle but contains a specialized reversing valve. This allows it to reverse the flow of refrigerant, absorbing heat from the outdoor air (even in cold weather) and pumping it inside to heat your home."
      },
      {
        question: "Why is my furnace blowing cold air into my home?",
        answer: "A furnace blowing cold air is typically caused by a dirty flame sensor, a failed hot surface igniter, or a tripped high-limit safety switch. If the furnace detects that the burner failed to ignite, it will shut off the gas valve but continue to run the blower fan to cool down the heat exchanger, resulting in cold air blowing from your vents."
      },
      {
        question: "How do I know if my furnace's heat exchanger is cracked, and is it dangerous?",
        answer: "A cracked heat exchanger is extremely dangerous because it allows toxic combustion gases, including carbon monoxide, to leak directly into your home's air stream. Warning signs include a fluttering burner flame, soot buildup inside the furnace, water condensation around the system, or your home's carbon monoxide detectors triggering. We recommend immediate shutdown and inspection."
      },
      {
        question: "What causes an HVAC blower motor to fail or burn out?",
        answer: "The primary cause of blower motor failure is running a system with a severely dirty air filter. A clogged filter restricts return airflow, forcing the motor to work much harder to pull air through the system. This increases the motor's operating temperature, leading to electrical overheating, worn bearings, and eventual burnout."
      },
      {
        question: "How often should I replace the batteries in my programmable thermostat?",
        answer: "We recommend replacing your thermostat's batteries once a year, or immediately when the low-battery warning display appears on the screen. Low batteries can cause the thermostat to lose its programming or fail to send signals to your furnace and air conditioner, preventing your HVAC system from turning on."
      },
      {
        question: "Why is my heat pump covered in ice during the winter?",
        answer: "It is normal for an outdoor heat pump to develop a thin layer of frost or ice during cold, damp winter conditions. The system has an integrated defrost control board that automatically switches to a temporary cooling cycle to thaw the outdoor coils. However, if the unit is completely encased in a thick block of ice, your defrost cycle has failed, which can ruin the compressor."
      },
      {
        question: "What is a flame sensor, and why does it need to be cleaned?",
        answer: "A flame sensor is a thin metal safety rod that sits directly in the path of the furnace burner. It detects the presence of fire. If the sensor is coated in a thin layer of carbon or dust, it can no longer read the electrical current of the flame, causing the furnace to light for a few seconds and then shut down as a safety precaution."
      },
      {
        question: "How do you test for ductwork leaks in a residential HVAC system?",
        answer: "Our technicians use a variety of specialized tools, including thermal imaging cameras, theatrical smoke tests, and duct blaster tests, which pressurize your ductwork and measure the exact rate of air leakage. Repairing leaking duct joints can lower your monthly heating and cooling costs by up to 20%."
      }
    ],
    reviews: [
      {
        author: "Daniel S.",
        text: "The technician diagnosed a bad gas valve on our furnace and had it replaced within two hours. He also ran a carbon monoxide check on our vents to make sure everything was completely safe. Outstanding service!",
        rating: 5
      },
      {
        author: "Emily R.",
        text: "Very reliable and professional company. They fixed my AC's blower fan motor in the summer, and returned in the winter to tune-up our furnace. Their flat-rate pricing makes everything clear and stress-free.",
        rating: 5
      },
      {
        author: "Arthur L.",
        text: "getacrepair has the best technicians. They explain the problem clearly, provide options, and complete the work quickly. No high-pressure sales tactics. Honest, high-quality HVAC repairs.",
        rating: 5
      }
    ],
    ctaTitle: "Schedule Your Complete HVAC Repair Now!",
    ctaDesc: "Keep your home safe, comfortable, and efficient through every season. Contact our licensed HVAC specialists in {city} for upfront estimates."
  },
  "hvac-installation": {
    serviceName: "HVAC Installation",
    heroTitle: "HVAC System Installation in {city}, {state}",
    heroDesc: "Ready for a complete home comfort transformation? getacrepair delivers premier, high-efficiency heating and cooling HVAC system installations in {city}, {state}. Our EPA-certified installation crews conduct comprehensive Manual J heat load calculations, design structural ductwork, and install matching central air and high-efficiency furnace packages to guarantee maximum comfort and up to 45% lower utility bills.",
    aboutParagraphs: [
      "Replacing your home's complete heating and cooling system is a major capital improvement project that significantly affects your property value, monthly operating costs, and daily comfort. A matched HVAC system installation—where a new high-efficiency central air conditioner is paired with a matching high-efficiency gas furnace or heat pump—ensures that both components utilize matching airflow velocities, communication protocols, and blower motor speeds. This integration optimizes system efficiency, extends the equipment's lifespan, and simplifies future maintenance.",
      "At getacrepair, our engineering and installation crews hold themselves to the highest standards of technical precision. Every project in {city} begins with an in-depth energy audit and Manual J Heat Load Calculation. We analyze your home's total thermal properties, including wall structures, insulation levels, window placement, ceiling heights, and climate data. This careful study prevents the severe issues associated with system oversizing (frequent short-cycling and high indoor humidity) and undersizing (continuous running and inability to match thermostat settings).",
      "During a standard matched HVAC installation, our crews handle the complete structural upgrade. We safely evacuate and recycle your older system's refrigerant, extract the outdated indoor air handler or furnace, and clear the area. We build new, level equipment pads for the outdoor condenser, install high-grade sheet metal plenums with custom supply collars, run insulated copper line sets, connect new electrical service whips, and install secondary condensation pans with electronic float cutoff switches.",
      "Our technicians specialize in the installation of ultra-high-efficiency variable-speed and two-stage heating and cooling systems. A standard single-stage system runs at either 100% capacity or is completely off, leading to frequent temperature swings. Two-stage and variable-speed systems run longer, lower-capacity cycles that consume up to 45% less energy, run virtually silent, and maintain a highly consistent indoor temperature within half a degree of your thermostat setting.",
      "Every HVAC system installation we complete in {city} is a turn-key project. We handle all local building permits, municipal inspections, and manufacturer warranty registrations on your behalf. We pull a deep vacuum on the refrigerant lines to under 500 microns, weigh in the factory refrigerant charge, calibrate the heating and cooling cycles, and program your new smart thermostat. We stand behind our workmanship with a comprehensive 10-year manufacturer warranty and our own 2-year comfort guarantee."
    ],
    problems: [
      {
        title: "Both Heating and Cooling Failing",
        desc: "If both your furnace and air conditioner are over 12-15 years old and require frequent repairs, a complete matched system installation is your most cost-effective long-term choice.",
        icon: "Hammer"
      },
      {
        title: "Uneven Temperatures Across Rooms",
        desc: "Severe temperature differences between floors or rooms are caused by mismatched blower fans and outdated static pressures. A new system installation balances your home's complete airflow.",
        icon: "Thermometer"
      },
      {
        title: "Outdated R-22 Refrigerant AC",
        desc: "Repairing an older air conditioning system that runs on banned R-22 Freon is no longer viable. Upgrading to an eco-friendly system is legally compliant and highly efficient.",
        icon: "ShieldAlert"
      },
      {
        title: "Excessive Noise from Ducts",
        desc: "Older, single-stage HVAC systems blast air at high velocity every time they turn on, causing loud duct rattling and drafts. Modern variable-speed systems deliver quiet, continuous air.",
        icon: "AlertTriangle"
      }
    ],
    benefits: [
      {
        title: "Maximum Monthly Energy Savings",
        desc: "Upgrading to a matched, high-efficiency variable-speed HVAC system can lower your monthly heating and cooling costs by up to 40% to 50% immediately."
      },
      {
        title: "Balanced Airflow and Comfort",
        desc: "Matching your furnace and air conditioner guarantees optimal return and supply airflow splits, eliminating stuffy rooms and uneven cooling."
      },
      {
        title: "Single, Unified Warranty",
        desc: "Installing a complete matched system simplifies your coverage, backed by a single 10-year equipment warranty on both your furnace and AC."
      },
      {
        title: "Eligible for Tax Credits",
        desc: "Our high-efficiency matched systems meet the federal standards for Energy Star tax credits, allowing you to claim up to $2,000 on your tax returns."
      }
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Home Audit",
        desc: "We perform detailed Manual J heat load calculations, analyze your existing ductwork, and present matched system design options."
      },
      {
        step: "02",
        title: "Old Equipment Extraction",
        desc: "Our installation crew reclaims the older refrigerant, disconnects gas and electrical services, and disposes of the old furnace and AC."
      },
      {
        step: "03",
        title: "Duct & Plenum Adaptation",
        desc: "We fabricate custom sheet metal transitions, install a new condenser pad, and mount the indoor furnace and evaporator coil."
      },
      {
        step: "04",
        title: "Electrical and Utility Hookups",
        desc: "We install new electrical disconnect boxes, run insulated line sets, connect high-voltage wiring, and complete gas line plumbing."
      },
      {
        step: "05",
        title: "System Commissioning & Tests",
        desc: "We pull a deep vacuum, charge the refrigerant, verify combustion drafts, adjust blower speeds, and program your smart thermostat."
      }
    ],
    emergencyTitle: "Flexible Residential Financing Options",
    emergencyDesc: "We believe that every household deserves safe, reliable, and high-efficiency heating and cooling. To help make a new matched HVAC system affordable, getacrepair offers flexible financing options in {city}, including low interest rates and promotional 0% APR plans for qualified homeowners.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "Our matched HVAC system installations are led by highly trained, fully licensed, and factory-authorized mechanics."
      },
      {
        title: "Same-Day Service",
        desc: "We value your time. Our crews arrive on schedule and complete most residential HVAC installations in a single day."
      },
      {
        title: "Upfront Pricing",
        desc: "Our quotes are fully inclusive, covering all equipment, sheet metal fabrication, permits, labor, and clean-up costs."
      },
      {
        title: "Warranty Protection",
        desc: "All our installations feature a 10-year manufacturer parts warranty and our own 2-year Comfort Workmanship Guarantee."
      },
      {
        title: "EPA Certified",
        desc: "Our crews strictly comply with federal regulations for safe refrigerant recovery and environmentally sound disposal."
      },
      {
        title: "24/7 Availability",
        desc: "Our comfort advisors are active 24/7 to help you schedule a free, no-obligation in-home system design estimate."
      }
    ],
    brands: ["Trane", "Carrier", "Lennox", "Rheem", "Goodman", "York", "Bryant", "American Standard", "Daikin"],
    faqs: [
      {
        question: "What are the benefits of installing a matched HVAC system in {city}?",
        answer: "A matched HVAC system ensures that both your furnace and air conditioner utilize matching technologies, communication protocols, and blower motor speeds. This matched pairing ensures optimal airflow across the indoor coil, maximizes energy efficiency, extends the lifespan of both systems, and simplifies future maintenance."
      },
      {
        question: "How long does a complete matched heating and cooling installation take?",
        answer: "A standard matched residential HVAC installation (replacing both the furnace and the AC condenser/coil) is typically completed in a single day, taking between 8 to 10 hours. Our crews work efficiently to minimize the disruption to your household."
      },
      {
        question: "What is a Manual J Heat Load Calculation, and why is it required?",
        answer: "A Manual J calculation is the industry-standard engineering method used to determine the exact heating and cooling loads of your home. It analyzes your home's square footage, ceiling heights, insulation values, window types, local weather history, and orientation to specify an HVAC system with the perfect capacity."
      },
      {
        question: "What high-efficiency options do you offer for HVAC installations?",
        answer: "We offer mid-tier and premium high-efficiency HVAC systems, including two-stage and variable-speed air conditioners and gas furnaces. These systems can run at lower, energy-saving capacities to maintain a highly consistent temperature, run virtually silent, and lower your energy bills."
      },
      {
        question: "Are there federal tax credits available for installing high-efficiency HVAC?",
        answer: "Yes! Under the Inflation Reduction Act, homeowners who install qualified Energy Star high-efficiency HVAC systems, heat pumps, or furnaces can claim a federal tax credit of up to $2,000 (Section 25C), significantly reducing the net cost of your system upgrade."
      },
      {
        question: "Do you handle the city permits and registrations for the new installation?",
        answer: "Yes, getacrepair handles all aspects of your project from start to finish. We secure the required local building permits, schedule municipal safety inspections, and register your new equipment with the manufacturer to ensure your 10-year warranty is fully activated."
      },
      {
        question: "What is the difference between single-stage, two-stage, and variable-speed systems?",
        answer: "A single-stage system runs at either 100% capacity or is completely off. A two-stage system has two operating levels: low (around 65% capacity) for mild days, and high (100% capacity) for extreme weather. A variable-speed system dynamically adjusts its output in tiny increments, running continuously at the lowest, most efficient speed required."
      },
      {
        question: "Should I replace my ductwork when installing a new HVAC system?",
        answer: "Not necessarily. We conduct a complete inspection of your existing ductwork during our comfort audit. If your ducts are clean, sealed, and properly sized for your new system's static pressure, they can be reused. If we detect severe air leaks or crushed joints, we will recommend sealing or minor modifications."
      }
    ],
    reviews: [
      {
        author: "Stephen C.",
        text: "We replaced our old furnace and AC with a matched Lennox variable-speed system. The crew did a phenomenal job, completed the work in a single day, and left everything spotless. Our heating and cooling are incredibly consistent now!",
        rating: 5
      },
      {
        author: "Melissa T.",
        text: "Very professional team from the first phone call to the final inspection. They helped us secure a great financing plan and handled all the local permits. The new system is super quiet and has lowered our energy bills significantly.",
        rating: 5
      },
      {
        author: "George H.",
        text: "Honest, dependable, and highly skilled. They didn't try to upsell us on equipment we didn't need. They designed a perfectly balanced heating and cooling system for our home. Highly recommend getacrepair!",
        rating: 5
      }
    ],
    ctaTitle: "Schedule Your Matched HVAC System Estimate!",
    ctaDesc: "Transform your home's comfort and start saving on your monthly energy bills. Contact our localized HVAC specialists in {city} for your free consultation."
  },
  "heating-repair": {
    serviceName: "Heating Repair",
    heroTitle: "Emergency Heating & Furnace Repair in {city}, {state}",
    heroDesc: "Is a broken furnace leaving your family in the cold? getacrepair provides fast, reliable, and licensed emergency heating and furnace repair services in {city}, {state}. Our background-checked HVAC technicians are available 24/7 to diagnose and repair gas furnaces, electric air handlers, and modern heat pumps to restore warmth to your home safely.",
    aboutParagraphs: [
      "When winter weather sweeps through {city}, a reliable heating system is more than a matter of convenience; it is a critical safety system that protects your household from sub-freezing temperatures and prevents your plumbing pipes from freezing and bursting. A broken furnace or failing heat pump during a winter freeze constitutes a real residential emergency. At getacrepair, we maintain on-call crews of licensed, highly trained heating specialists to deliver immediate, round-the-clock restorations.",
      "Heating systems are highly complex appliances that combine high-voltage electrical circuits, fuel combustion processes, and critical ventilation requirements. Gas-fired furnaces require scientific diagnostics to ensure safe, legal operation. Combustion issues, dirty flame sensors, clogged flue vents, or a failing igniter can cause the system to shut down as a safety precaution. Our technicians carry specialized diagnostic tools, combustion gas analyzers, and draft pressure meters to isolate the failure quickly.",
      "A cracked heat exchanger represents the most serious safety hazard in a residential furnace. The heat exchanger is a sealed metal chamber where fuel is burned; the air blowing through your ducts flows around this chamber to absorb heat. If the heat exchanger develops even a hairline fracture, toxic combustion gases—including odorless, colorless carbon monoxide—can leak directly into your indoor air supply. We perform rigorous camera inspections on every furnace we service, verifying that your heat exchanger is completely sound.",
      "Heat pump systems require a unique set of technical diagnostic skills. Unlike gas furnaces, a heat pump heats your home by reversing its refrigeration cycle, extracting heat from the cold outdoor air and pumping it inside. During extremely cold winter nights, heat pumps utilize secondary auxiliary electric heating strips to maintain comfortable temperatures. Failed reversing valves, bad defrost control boards, or burnt auxiliary heating relays can cause your heat pump to lose capacity. We excel at troubleshooting these dual-system platforms.",
      "We believe in honest, transparent pricing. When you call getacrepair for heating repair in {city}, our technician will perform a complete diagnostic sweep and present an exact, itemized flat-rate quote detailing all required parts and labor before any work begins. We stock our service vehicles with universal igniters, flame sensors, gas valves, limit switches, and blower motors to complete most repairs on-site on our very first visit, backing all our work with our 1-year comfort warranty."
    ],
    problems: [
      {
        title: "Furnace Blowing Cold Air",
        desc: "A common failure typically caused by a failed hot-surface igniter, a dirty flame sensor, or a tripped high-limit switch. The furnace fan runs to cool the heat exchanger, but no fire is present.",
        icon: "Thermometer"
      },
      {
        title: "Frequent Cycling On and Off",
        desc: "Known as short-cycling, this is usually triggered by a clogged air filter restricting return airflow, a faulty thermostat, or a flame sensor that is coated in carbon and needs cleaning.",
        icon: "AlertTriangle"
      },
      {
        title: "Loud Rattling, Clanking, or Booming",
        desc: "Loud rattling indicates a loose blower wheel or a cracked heat exchanger. A loud 'boom' during burner startup indicates delayed ignition, where gas accumulates before igniting, requiring immediate repair.",
        icon: "ShieldAlert"
      },
      {
        title: "Active Gas or Chemical Smells",
        desc: "If you detect a rotten-egg gas smell or a strong, chemical burning odor coming from your vents, shut down your system at the breaker, exit your home immediately, and call for emergency assistance.",
        icon: "Wind"
      }
    ],
    benefits: [
      {
        title: "Fast, Safe Comfort Restoration",
        desc: "Our rapid 24/7/365 emergency dispatching ensures that your household is restored to a safe, warm temperature quickly."
      },
      {
        title: "Rigorous Safety Verifications",
        desc: "Every furnace repair visit includes a complete safety inspection of your heat exchanger and gas connections to prevent carbon monoxide hazards."
      },
      {
        title: "Upfront, Transparent Costs",
        desc: "We eliminate pricing surprises. You will receive an exact, flat-rate quote outlining all parts and labor costs before we begin any repairs."
      },
      {
        title: "OEM-Certified Replacement Parts",
        desc: "We utilize premium, manufacturer-certified replacement parts to guarantee the safety, reliability, and lifespan of your heating system."
      }
    ],
    process: [
      {
        step: "01",
        title: "Emergency Request Logged",
        desc: "Our localized dispatcher in {city} processes your heating ticket, assigns an on-call technician, and schedules priority dispatch."
      },
      {
        step: "02",
        title: "On-Site Diagnostic Sweep",
        desc: "The technician inspects the furnace or heat pump, testing safety limit switches, igniters, flame sensors, and gas pressures."
      },
      {
        step: "03",
        title: "Upfront Pricing Quote",
        desc: "We present a clear, flat-rate pricing description of the required repairs, complete with part costs, so you are in complete control."
      },
      {
        step: "04",
        title: "Precision Furnace Repair",
        desc: "Using premium, OEM-certified parts, we safely swap out the failed components and test all combustion seals."
      },
      {
        step: "05",
        title: "Combustion & Draft Verification",
        desc: "We test run the system for a minimum of 15 minutes, verifying carbon monoxide levels, gas drafts, and heat splits to guarantee success."
      }
    ],
    emergencyTitle: "Priority 24/7 Heating Restoration",
    emergencyDesc: "A complete heating failure during sub-freezing winter weather in {city} is a critical safety threat. Don't wait in a freezing home. Our emergency HVAC specialists are on-call 24 hours a day, 7 days a week, 365 days a year to deliver fast, safe furnace and heat pump repairs.",
    whyChooseUs: [
      {
        title: "Licensed Technicians",
        desc: "All our heating repair calls are completed by fully licensed, background-checked, and highly trained HVAC mechanics."
      },
      {
        title: "Same-Day Service",
        desc: "We understand that heating failures are urgent. We offer priority scheduling and same-day restorations for heating requests."
      },
      {
        title: "Upfront Pricing",
        desc: "We utilize flat-rate pricing guides for all repairs. The exact cost we quote before beginning is the price you pay."
      },
      {
        title: "Warranty Protection",
        desc: "All our repair parts and labor are backed by our signature 1-year comfort guarantee, protecting your investment."
      },
      {
        title: "EPA Certified",
        desc: "Our technicians hold all legal certifications required to handle and repair dual-system heat pumps safely."
      },
      {
        title: "24/7 Availability",
        desc: "Our dispatch center operates round the clock. Day, night, weekends, or major winter holidays, we are ready to keep your home safe."
      }
    ],
    brands: ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "York", "Bryant", "American Standard", "Amana"],
    faqs: [
      {
        question: "Why is my furnace blowing cold air into my {city} home?",
        answer: "A furnace blowing cold air is typically caused by a dirty flame sensor, a failed igniter, or a tripped safety limit switch. If the furnace control board detects that the burner failed to light within a specific timeframe, it will close the gas valve for safety but continue to run the blower fan to cool down the heat exchanger."
      },
      {
        question: "What is a flame sensor, and why does it cause my furnace to shut off?",
        answer: "The flame sensor is a thin metal safety rod that sits in front of the burner to verify that fire is present. Over time, carbon and dust coat the sensor, preventing it from reading the electrical current of the flame. When this happens, the furnace lights for a few seconds and then shuts down as a safety precaution."
      },
      {
        question: "Is a cracked heat exchanger dangerous, and what are the signs?",
        answer: "Yes, a cracked heat exchanger is extremely dangerous. It allows toxic combustion gases, including lethal carbon monoxide, to leak directly into your indoor air stream. Signs include a flickering or yellow burner flame (instead of crisp blue), soot inside the cabinet, or carbon monoxide detectors triggering."
      },
      {
        question: "How long does a standard residential gas furnace typically last?",
        answer: "A well-maintained gas furnace typically lasts between 15 to 20 years. However, if your system is over 15 years old and requires frequent repairs or has a cracked heat exchanger, replacing it with a modern high-efficiency system is almost always the more cost-effective long-term option."
      },
      {
        question: "Why is my furnace making a loud screeching or rattling noise?",
        answer: "A loud screeching noise points directly to failing motor bearings or a dry shaft in your indoor blower motor. Rattling or vibration indicates that the blower wheel has become unbalanced, accumulated thick dust, or has loose mounting bolts. We recommend immediate shutdown to prevent motor lockup."
      },
      {
        question: "Can a clogged air filter cause my heating system to shut down completely?",
        answer: "Yes! A heavily clogged filter restricts return airflow, trapping heat inside your furnace. When the temperature inside the cabinet exceeds safety limits, the high-limit switch will trip, shutting off the burners to prevent fire hazards. The system will blow cold air or shut down completely until it cools down."
      },
      {
        question: "Do you offer emergency heating repair on weekends and holidays in {city}?",
        answer: "Yes, absolutely. We maintain dedicated on-call technicians across the {city} area 24 hours a day, 7 days a week, 365 days a year—including Thanksgiving, Christmas, and New Year's Eve. We prioritize safety and restore heat to freezing homes quickly."
      },
      {
        question: "What should I do if I detect a rotten egg smell in my home?",
        answer: "A rotten egg smell indicates a gas leak (natural gas is odorless, but gas companies add mercaptan for leak detection). You should immediately vacate your home, leaving the door open. Do not turn any light switches on or off, do not use your phone inside, and call your gas utility company and emergency services from a safe distance."
      }
    ],
    reviews: [
      {
        author: "William G.",
        text: "Our furnace died during a snowstorm. getacrepair had a technician at our house in under two hours. He replaced a bad igniter quickly, checked our carbon monoxide levels, and was incredibly polite. Exceptional service!",
        rating: 5
      },
      {
        author: "Sarah J.",
        text: "Very reliable and professional. They gave me an upfront, flat-rate price to clean our flame sensor and limit switch. No hidden fees or surprise hourly upcharges. Best heating company in town.",
        rating: 5
      },
      {
        author: "James M.",
        text: "Technician was very thorough and knowledgeable. He conducted a complete safety check on our heat exchanger and explained everything he was doing. getacrepair is honest, professional, and highly skilled.",
        rating: 5
      }
    ],
    ctaTitle: "Lock In Your Emergency Heating Repair Today!",
    ctaDesc: "Don't freeze in a cold home. Contact our licensed heating mechanics for safe, upfront, and guaranteed furnace and heat pump repairs in {city}."
  }
};
