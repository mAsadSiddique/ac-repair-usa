/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StateData, CityData } from "../types";

export const STATES_DB: StateData[] = [
  {
    name: "Alabama",
    abbr: "AL",
    capital: "Montgomery",
    climateZone: "Humid Subtropical",
    avgTemp: "90°F",
    seoTip: "High humidity in Alabama means your AC has to work twice as hard to dehumidify. Regularly check and clean your condensate drain line to prevent overflow and mold.",
    cities: [
      { name: "Birmingham", isMajor: true, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "91°F", estimatedCostMultiplier: 1 },
      { name: "Mobile", isMajor: true, climateProfile: "Extreme coastal humidity and salt air", commonIssue: "Corroded condenser coils and electrical damage", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.05 },
      { name: "Montgomery", isMajor: true, climateProfile: "Intense deep South heat", commonIssue: "Refrigerant leaks and compressor failures", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.95 },
      { name: "Auburn", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.06 },
      { name: "Decatur", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Dothan", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.06 },
      { name: "Florence", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.9 },
      { name: "Hoover", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Huntsville", isMajor: false, climateProfile: "Slightly milder but still humid climate", commonIssue: "Blower motor wear and tear", avgSummerTemp: "88°F", estimatedCostMultiplier: 1 },
      { name: "Madison", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.98 },
      { name: "Tuscaloosa", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Alaska",
    abbr: "AK",
    capital: "Juneau",
    climateZone: "Subarctic / Oceanic",
    avgTemp: "65°F",
    seoTip: "While AC is rarely needed year-round in Alaska, modern heat pump installations are increasingly popular for energy-efficient dual heating and cooling.",
    cities: [
      { name: "Anchorage", isMajor: true, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to ignition and fan failures", avgSummerTemp: "67°F", estimatedCostMultiplier: 1.2 },
      { name: "Fairbanks", isMajor: true, climateProfile: "Extreme seasonal temperature swings", commonIssue: "Thermostat calibration and outdoor unit freeze protection", avgSummerTemp: "73°F", estimatedCostMultiplier: 1.3 },
      { name: "Homer", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.06 },
      { name: "Juneau", isMajor: false, climateProfile: "Wet, marine environment", commonIssue: "High humidity rusting and electrical corrosion", avgSummerTemp: "64°F", estimatedCostMultiplier: 1.25 },
      { name: "Kenai", isMajor: false, climateProfile: "Mild coastal summer marine air", commonIssue: "Thermostat configuration issues and rodent wiring damage", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.14 },
      { name: "Ketchikan", isMajor: false, climateProfile: "Mild coastal summer marine air", commonIssue: "Thermostat configuration issues and rodent wiring damage", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.22 },
      { name: "Kodiak", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "65°F", estimatedCostMultiplier: 0.9 },
      { name: "Palmer", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.22 },
      { name: "Sitka", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.14 },
      { name: "Wasilla", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "65°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    capital: "Phoenix",
    climateZone: "Desert",
    avgTemp: "106°F",
    seoTip: "Extreme desert heat in Arizona can push AC units to their breaking point. Annual multi-point maintenance is essential to prevent catastrophic mid-summer breakdowns.",
    cities: [
      { name: "Chandler", isMajor: true, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.98 },
      { name: "Mesa", isMajor: true, climateProfile: "High heat and dust exposure", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "105°F", estimatedCostMultiplier: 1.1 },
      { name: "Phoenix", isMajor: true, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout, failed capacitors, and clogged heavy-dust filters", avgSummerTemp: "107°F", estimatedCostMultiplier: 1.15 },
      { name: "Scottsdale", isMajor: true, climateProfile: "Searing desert summers", commonIssue: "Smart thermostat malfunctions under intense heat and dust", avgSummerTemp: "104°F", estimatedCostMultiplier: 1.2 },
      { name: "Tucson", isMajor: true, climateProfile: "Intense high-elevation desert heat", commonIssue: "Fan motor wear and capacitor failure due to continuous load", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.1 },
      { name: "Avondale", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.9 },
      { name: "Flagstaff", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.9 },
      { name: "Gilbert", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "106°F", estimatedCostMultiplier: 1.14 },
      { name: "Glendale", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.98 },
      { name: "Goodyear", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.98 },
      { name: "Peoria", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "106°F", estimatedCostMultiplier: 1.14 },
      { name: "Surprise", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "106°F", estimatedCostMultiplier: 0.98 },
      { name: "Tempe", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "106°F", estimatedCostMultiplier: 1.06 },
      { name: "Yuma", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "106°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    capital: "Little Rock",
    climateZone: "Humid Subtropical",
    avgTemp: "92°F",
    seoTip: "With frequent humidity spikes, Arkansas AC units require balanced refrigerant charges to cool and dry indoor air properly.",
    cities: [
      { name: "Fayetteville", isMajor: true, climateProfile: "Milder Ozark summer climate", commonIssue: "Blocked air filters and ductwork leaks", avgSummerTemp: "89°F", estimatedCostMultiplier: 1 },
      { name: "Fort Smith", isMajor: true, climateProfile: "Heavy summer storms and wind-driven debris", commonIssue: "Condenser damage from falling debris and electrical surges", avgSummerTemp: "94°F", estimatedCostMultiplier: 0.9 },
      { name: "Little Rock", isMajor: true, climateProfile: "Hot and oppressive humidity levels", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.95 },
      { name: "Bentonville", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Conway", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Hot Springs", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Jonesboro", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Pine Bluff", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Rogers", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 },
      { name: "Springdale", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Texarkana", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "California",
    abbr: "CA",
    capital: "Sacramento",
    climateZone: "Mediterranean / Desert / Oceanic",
    avgTemp: "85°F - 95°F",
    seoTip: "California residents can maximize energy efficiency and qualify for state rebates by upgrading to high-SEER2 inverter AC systems and heat pumps.",
    cities: [
      { name: "Los Angeles", isMajor: true, climateProfile: "Warm, dry coastal and valley climate", commonIssue: "Leaking ducts and thermostat calibration errors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.2 },
      { name: "Sacramento", isMajor: true, climateProfile: "Intense, hot inland valley summers", commonIssue: "Blown capacitors and worn-out condenser fan motors", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.15 },
      { name: "San Diego", isMajor: true, climateProfile: "Mild, marine coastal climate", commonIssue: "Corrosive salt-air damage on outdoor fins", avgSummerTemp: "77°F", estimatedCostMultiplier: 1.2 },
      { name: "San Francisco", isMajor: true, climateProfile: "Cool, foggy coastal summers with brief warm spells", commonIssue: "Salt-air corrosion on outdoor coils and duct leakage in older homes", avgSummerTemp: "72°F", estimatedCostMultiplier: 1.3 },
      { name: "San Jose", isMajor: true, climateProfile: "Dry Silicon Valley warmth", commonIssue: "Filter bypass dust accumulation and smart zoning errors", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.25 },
      { name: "Anaheim", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Bakersfield", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Fresno", isMajor: false, climateProfile: "Severe Central Valley desert-like heat", commonIssue: "Compressor failures and thermal expansion valve (TXV) blockages", avgSummerTemp: "98°F", estimatedCostMultiplier: 1.1 },
      { name: "Irvine", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Long Beach", isMajor: false, climateProfile: "Warm, humid coastal summers with marine layer influence", commonIssue: "Corrosive salt-air damage on outdoor fins and clogged condensate drains", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.15 },
      { name: "Modesto", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Oakland", isMajor: false, climateProfile: "Mild bay-influenced summers with occasional heat spikes", commonIssue: "Leaking ducts and thermostat calibration errors in hillside homes", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.2 },
      { name: "Riverside", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Santa Ana", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.22 },
      { name: "Stockton", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Colorado",
    abbr: "CO",
    capital: "Denver",
    climateZone: "Semi-Arid / Alpine",
    avgTemp: "88°F",
    seoTip: "High altitude in Colorado causes lower air density. Proper blower fan sizing and motor configuration are critical for efficient cooling.",
    cities: [
      { name: "Aurora", isMajor: true, climateProfile: "Arid eastern-plains heat", commonIssue: "Debris accumulation in the outdoor fan assembly", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.05 },
      { name: "Colorado Springs", isMajor: true, climateProfile: "Rapid weather changes and heavy hail", commonIssue: "Hail-damaged condenser fins and control board short circuits", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.05 },
      { name: "Denver", isMajor: true, climateProfile: "Warm, dry high-altitude summers", commonIssue: "Dirty air filters restricting thin alpine air; frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.1 },
      { name: "Arvada", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.06 },
      { name: "Boulder", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Centennial", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.98 },
      { name: "Fort Collins", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Greeley", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Lakewood", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Pueblo", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.98 },
      { name: "Thornton", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.98 },
      { name: "Westminster", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    capital: "Hartford",
    climateZone: "Humid Continental",
    avgTemp: "84°F",
    seoTip: "In Connecticut, seasonal AC startups require careful inspection. Rodents nesting in outdoor units during winter frequently chew through electrical wiring.",
    cities: [
      { name: "Hartford", isMajor: true, climateProfile: "Hot and sticky summers", commonIssue: "Clogged condensate lines and rusted drain pans", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.15 },
      { name: "New Haven", isMajor: true, climateProfile: "Coastal humidity and winter salt road spray", commonIssue: "Corroded copper connections and sensor failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.15 },
      { name: "Stamford", isMajor: true, climateProfile: "High energy cost metropolitan area", commonIssue: "Improper system sizing leading to short-cycling", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.25 },
      { name: "Bridgeport", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Bristol", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.98 },
      { name: "Danbury", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.98 },
      { name: "Greenwich", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Meriden", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "New Britain", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Norwalk", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Waterbury", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Delaware",
    abbr: "DE",
    capital: "Dover",
    climateZone: "Humid Subtropical",
    avgTemp: "86°F",
    seoTip: "Delaware summers are both hot and moist. Adequate air filtration prevents airborne humidity from turning into evaporator coil mold.",
    cities: [
      { name: "Dover", isMajor: true, climateProfile: "Humid agricultural plain heat", commonIssue: "Pollen and agricultural dust clogging outdoor coil fins", avgSummerTemp: "86°F", estimatedCostMultiplier: 1 },
      { name: "Wilmington", isMajor: true, climateProfile: "Hot urban heat island summers", commonIssue: "Overheated compressors and electrical contactor wear", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.1 },
      { name: "Georgetown", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Lewes", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Middletown", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Milford", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Newark", isMajor: false, climateProfile: "Moderate Mid-Atlantic summers", commonIssue: "Thermostat wiring faults and low refrigerant charge", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.05 },
      { name: "Rehoboth Beach", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Seaford", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.9 },
      { name: "Smyrna", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Florida",
    abbr: "FL",
    capital: "Tallahassee",
    climateZone: "Humid Subtropical / Tropical",
    avgTemp: "92°F",
    seoTip: "Florida is the most demanding state for air conditioning. Coastal salt air causes rapid galvanic corrosion. Coated coils and regular rinsing are crucial.",
    cities: [
      { name: "Fort Lauderdale", isMajor: true, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Jacksonville", isMajor: true, climateProfile: "Humid northern Florida coastal heat", commonIssue: "Low Freon levels, evaporator leaks, and blower wheel debris", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.05 },
      { name: "Miami", isMajor: true, climateProfile: "Tropical heat, ocean salt, extreme humidity", commonIssue: "Corroded aluminum fins, biological growth in drains, and compressor seizure", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.2 },
      { name: "Orlando", isMajor: true, climateProfile: "Severe inland heat, high humidity, and daily storms", commonIssue: "Lightning/surge damage to control boards and clogged drain line backups", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.1 },
      { name: "Tampa", isMajor: true, climateProfile: "Coastal Gulf humidity and heavy rain storms", commonIssue: "Worn fan motors, salt corrosion, and electrical contactor failure", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.15 },
      { name: "Cape Coral", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Gainesville", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Hialeah", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Hollywood", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Naples", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Pembroke Pines", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Port St. Lucie", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Sarasota", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "St. Petersburg", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Tallahassee", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Georgia",
    abbr: "GA",
    capital: "Atlanta",
    climateZone: "Humid Subtropical",
    avgTemp: "89°F",
    seoTip: "Georgia summers are famously hot. Ensure your attic insulation is up to par so your ductwork doesn't absorb excess heat before reaching your rooms.",
    cities: [
      { name: "Atlanta", isMajor: true, climateProfile: "Dense urban heat and high humidity", commonIssue: "Frozen coils due to low airflow, worn capacitors, and dual-run breakdowns", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.05 },
      { name: "Augusta", isMajor: true, climateProfile: "Oppressive inland central warmth", commonIssue: "Overheating outdoor motors and refrigerant leaks", avgSummerTemp: "92°F", estimatedCostMultiplier: 1 },
      { name: "Savannah", isMajor: true, climateProfile: "Coastal swamps and salty humidity", commonIssue: "Rusting outdoor units and severe drain pan sludge", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.1 },
      { name: "Albany", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Athens", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 },
      { name: "Columbus", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Macon", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Marietta", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Roswell", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Sandy Springs", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Valdosta", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Warner Robins", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    capital: "Honolulu",
    climateZone: "Tropical Marine",
    avgTemp: "86°F",
    seoTip: "With salt air everywhere in Hawaii, utilizing corrosion-resistant outdoor units (such as marine-grade coatings) is essential to double your system's lifespan.",
    cities: [
      { name: "Hilo", isMajor: true, climateProfile: "High rainfall and dense humidity", commonIssue: "Algae growth blocking condensate pathways and electrical shorts", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.25 },
      { name: "Honolulu", isMajor: true, climateProfile: "Tropical marine salt air, warm breezes", commonIssue: "Severe galvanic corrosion on copper joints and electronic control degradation", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.3 },
      { name: "Ewa Beach", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Kahului", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Kailua", isMajor: false, climateProfile: "Sunny coastal exposure", commonIssue: "Salty wind salt-crust shorting the external fan contacts", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.25 },
      { name: "Kaneohe", isMajor: false, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on copper connections", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Lihue", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Mililani", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.9 },
      { name: "Pearl City", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.98 },
      { name: "Waipahu", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Idaho",
    abbr: "ID",
    capital: "Boise",
    climateZone: "Semi-Arid / Continental",
    avgTemp: "91°F",
    seoTip: "Idaho experiences high summer pollen and agricultural dust. Change your MERV filters monthly during cooling season to maintain system static pressure.",
    cities: [
      { name: "Boise", isMajor: true, climateProfile: "Hot and highly arid high plains summer", commonIssue: "Dust buildup blanketing the condenser coil, tripping safety switches", avgSummerTemp: "92°F", estimatedCostMultiplier: 1 },
      { name: "Meridian", isMajor: true, climateProfile: "Arid valley farmland dust", commonIssue: "Clogged filters starving airflow, causing the system to freeze over", avgSummerTemp: "91°F", estimatedCostMultiplier: 1 },
      { name: "Nampa", isMajor: true, climateProfile: "Very warm and dusty summers", commonIssue: "Blower motor bearings failure from agricultural airborne particulate", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.95 },
      { name: "Caldwell", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.22 },
      { name: "Coeur d'Alene", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.06 },
      { name: "Idaho Falls", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "91°F", estimatedCostMultiplier: 0.98 },
      { name: "Lewiston", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.22 },
      { name: "Moscow", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.14 },
      { name: "Pocatello", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.06 },
      { name: "Rexburg", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "91°F", estimatedCostMultiplier: 0.98 },
      { name: "Twin Falls", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Illinois",
    abbr: "IL",
    capital: "Springfield",
    climateZone: "Humid Continental",
    avgTemp: "86°F",
    seoTip: "Illinois seasonal shifts from sub-zero winters to hot summers stress AC electrical lines. Ensure professional checks before turning on units in May.",
    cities: [
      { name: "Aurora", isMajor: true, climateProfile: "Typical Midwestern humid summer", commonIssue: "Condensate backup tripping water-overflow safety float switches", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.05 },
      { name: "Chicago", isMajor: true, climateProfile: "Humid metropolitan lake-effect summers", commonIssue: "Overloaded vintage grid panels, blown capacitors, and thermostat communication loss", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.2 },
      { name: "Naperville", isMajor: true, climateProfile: "Suburban high cooling demand", commonIssue: "Short-cycling from dirty coils or faulty control relays", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.1 },
      { name: "Bloomington", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Champaign", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Elgin", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Joliet", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Peoria", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.06 },
      { name: "Rockford", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.9 },
      { name: "Springfield", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.06 },
      { name: "Waukegan", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Indiana",
    abbr: "IN",
    capital: "Indianapolis",
    climateZone: "Humid Continental",
    avgTemp: "85°F",
    seoTip: "Cottonwood seeds in Indiana act like felt, wrapping around condenser coils. Hose off your outdoor unit regularly to prevent massive head pressure.",
    cities: [
      { name: "Evansville", isMajor: true, climateProfile: "Muggy Ohio River valley heat", commonIssue: "Refrigerant line vibration cracks and low pressure lockouts", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.95 },
      { name: "Fort Wayne", isMajor: true, climateProfile: "Humid continental storms", commonIssue: "Lightning voltage spikes blowing out smart system boards", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.95 },
      { name: "Indianapolis", isMajor: true, climateProfile: "Hot, humid Midwest heartland summers", commonIssue: "Cottonwood fluff clogging condenser coils and burned contactor points", avgSummerTemp: "86°F", estimatedCostMultiplier: 1 },
      { name: "Bloomington", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 },
      { name: "Carmel", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.06 },
      { name: "Fishers", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 },
      { name: "Gary", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.22 },
      { name: "Hammond", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.22 },
      { name: "Lafayette", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Muncie", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 },
      { name: "South Bend", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Iowa",
    abbr: "IA",
    capital: "Des Moines",
    climateZone: "Humid Continental",
    avgTemp: "84°F",
    seoTip: "Corn transpiration increases summer humidity heavily in Iowa. Dehumidification cycles must be prioritized inside your thermostat configurations.",
    cities: [
      { name: "Cedar Rapids", isMajor: true, climateProfile: "Muggy river basin summers", commonIssue: "Evaporator coil freezing and restriction of airflow", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.95 },
      { name: "Davenport", isMajor: true, climateProfile: "Mississippi river humidity and storm debris", commonIssue: "Damp electrical components corroding over wet spring season", avgSummerTemp: "85°F", estimatedCostMultiplier: 1 },
      { name: "Des Moines", isMajor: true, climateProfile: "Crop-transpiration induced heavy humidity", commonIssue: "Heavy condensate accumulation overloading standard drain pathways", avgSummerTemp: "85°F", estimatedCostMultiplier: 1 },
      { name: "Ames", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Ankeny", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 },
      { name: "Council Bluffs", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 },
      { name: "Dubuque", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Iowa City", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Sioux City", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Waterloo", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "West Des Moines", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Kansas",
    abbr: "KS",
    capital: "Topeka",
    climateZone: "Humid Subtropical / Continental",
    avgTemp: "90°F",
    seoTip: "Severe thunderstorms and hail are common in Kansas. Install condenser shields or surge protectors to save your expensive equipment from power line grid spikes.",
    cities: [
      { name: "Kansas City", isMajor: true, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Overland Park", isMajor: true, climateProfile: "Humid eastern Kansas summers", commonIssue: "Thermostat wire rodent chewing and bad blower motors", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.05 },
      { name: "Wichita", isMajor: true, climateProfile: "Hot plains heat and severe wind/hail", commonIssue: "Hail-mutilated condenser fins and wind-blown dust in electronic panels", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.95 },
      { name: "Hutchinson", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.06 },
      { name: "Lawrence", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.9 },
      { name: "Lenexa", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Manhattan", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.06 },
      { name: "Olathe", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Salina", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Shawnee", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Topeka", isMajor: false, climateProfile: "Warm, windy, and humid continental", commonIssue: "Contactor pitting from heavy seasonal cycling", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.95 }
    ]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    capital: "Frankfort",
    climateZone: "Humid Subtropical",
    avgTemp: "87°F",
    seoTip: "High pollen in Kentucky can plaster over electrostatic air filters. Inspect and clean reusable filters once every three weeks.",
    cities: [
      { name: "Frankfort", isMajor: true, climateProfile: "Muggy river valley warmth", commonIssue: "Thermostat faulty relays and condensate drain water leaks", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.95 },
      { name: "Lexington", isMajor: true, climateProfile: "Warm summers with blue grass pollen waves", commonIssue: "Pollen clogging external and internal airflow mechanisms", avgSummerTemp: "86°F", estimatedCostMultiplier: 1 },
      { name: "Louisville", isMajor: true, climateProfile: "Humid Ohio River valley smog and heat", commonIssue: "Dirty air filters leading to poor delta-T and frozen copper lines", avgSummerTemp: "88°F", estimatedCostMultiplier: 1 },
      { name: "Bowling Green", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.9 },
      { name: "Covington", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.9 },
      { name: "Florence", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 },
      { name: "Georgetown", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.98 },
      { name: "Hopkinsville", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.98 },
      { name: "Owensboro", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.06 },
      { name: "Paducah", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 },
      { name: "Richmond", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    capital: "Baton Rouge",
    climateZone: "Humid Subtropical",
    avgTemp: "92°F",
    seoTip: "With near-saturated air during Louisiana summers, your air handler's primary drain pan is constantly full. Keep a microbial tablet in the pan to prevent slime blocks.",
    cities: [
      { name: "Baton Rouge", isMajor: true, climateProfile: "Very hot and heavy, high humidity summers", commonIssue: "Compressor startup faults and high relative humidity indoors", avgSummerTemp: "92°F", estimatedCostMultiplier: 1 },
      { name: "New Orleans", isMajor: true, climateProfile: "Extreme swamp-like coastal humidity and heat", commonIssue: "Severe biological sludge blocking drains, rust and corrosion of cabinets", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.1 },
      { name: "Shreveport", isMajor: true, climateProfile: "Hot northern Louisiana continental-mix", commonIssue: "Refrigerant circuit micro-leaks and failed dual capacitor units", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.95 },
      { name: "Alexandria", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 },
      { name: "Bossier City", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Houma", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Kenner", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Lafayette", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 },
      { name: "Lake Charles", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Monroe", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Slidell", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Maine",
    abbr: "ME",
    capital: "Augusta",
    climateZone: "Humid Continental",
    avgTemp: "78°F",
    seoTip: "Maine homes are often historic with radiator piping. Ductless mini-split AC installations provide zoning without ruining the aesthetic integrity of historical structures.",
    cities: [
      { name: "Augusta", isMajor: true, climateProfile: "Gentle summers with occasional hot spikes", commonIssue: "Duct leakage and single-room poor air distribution", avgSummerTemp: "77°F", estimatedCostMultiplier: 1.1 },
      { name: "Bangor", isMajor: true, climateProfile: "Brief warm inland summer snaps", commonIssue: "Thermostat configuration issues and rodent wiring chewing in winter", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.15 },
      { name: "Portland", isMajor: true, climateProfile: "Milder coastal summer marine air", commonIssue: "Winter salt damage, rust, and lack of use startup errors", avgSummerTemp: "79°F", estimatedCostMultiplier: 1.2 },
      { name: "Auburn", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.06 },
      { name: "Bar Harbor", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.98 },
      { name: "Biddeford", isMajor: false, climateProfile: "Mild coastal summer marine air", commonIssue: "Thermostat configuration issues and rodent wiring damage", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.9 },
      { name: "Lewiston", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.22 },
      { name: "Saco", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.98 },
      { name: "Sanford", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.14 },
      { name: "South Portland", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.9 },
      { name: "Westbrook", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Maryland",
    abbr: "MD",
    capital: "Annapolis",
    climateZone: "Humid Subtropical / Continental",
    avgTemp: "87°F",
    seoTip: "Chesapeake Bay proximity ensures Maryland air is heavy. Keep your outdoor units away from low-hanging branches that encourage humidity stagnation.",
    cities: [
      { name: "Annapolis", isMajor: true, climateProfile: "Coastal marine humidity", commonIssue: "Severe copper corrosion on coil return bends", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.1 },
      { name: "Baltimore", isMajor: true, climateProfile: "Humid harbor urban heat island", commonIssue: "Aging brick-home electrical service panels failing to support heavy AC startup loads", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.1 },
      { name: "Rockville", isMajor: true, climateProfile: "Humid continental suburbs", commonIssue: "Short-cycling due to oversized equipment that leaves high indoor humidity", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.15 },
      { name: "Bowie", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.06 },
      { name: "College Park", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.22 },
      { name: "Frederick", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.98 },
      { name: "Gaithersburg", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.9 },
      { name: "Hagerstown", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 },
      { name: "Laurel", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 },
      { name: "Salisbury", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 },
      { name: "Silver Spring", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    capital: "Boston",
    climateZone: "Humid Continental",
    avgTemp: "82°F",
    seoTip: "Older homes in Massachusetts are perfect candidates for ductless AC replacement. They eliminate drafty, insecure window units and slash high electricity bills.",
    cities: [
      { name: "Boston", isMajor: true, climateProfile: "Muggy coastal warmth, historic housing", commonIssue: "Complex retrofits for high-efficiency mini-splits; electrical panel updates needed", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.25 },
      { name: "Springfield", isMajor: true, climateProfile: "Warm, humid river valley warmth", commonIssue: "Condensate line clogs overflowing onto drywall ceiling", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Worcester", isMajor: true, climateProfile: "Humid continental central hills", commonIssue: "Worn fan motors and mouse nests destroying the internal capacitor lines", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Brockton", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.98 },
      { name: "Cambridge", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.98 },
      { name: "Fall River", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.06 },
      { name: "Lowell", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 },
      { name: "Lynn", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.22 },
      { name: "New Bedford", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.98 },
      { name: "Plymouth", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.14 },
      { name: "Quincy", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Michigan",
    abbr: "MI",
    capital: "Lansing",
    climateZone: "Humid Continental",
    avgTemp: "81°F",
    seoTip: "Michigan AC units sit idle for nearly 8 months. Debris, leaves, and pine needles accumulate inside. Always call for a pre-season clean before starting up.",
    cities: [
      { name: "Detroit", isMajor: true, climateProfile: "Warm lake-humid metropolitan", commonIssue: "Old system compressor seizures and failed contactors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Grand Rapids", isMajor: true, climateProfile: "Humid westerly wind lake-effects", commonIssue: "Clogged condenser coils from heavy tree-fruiting dander", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.05 },
      { name: "Lansing", isMajor: true, climateProfile: "Inland humid warmth", commonIssue: "Standard thermostat terminal corrosion", avgSummerTemp: "81°F", estimatedCostMultiplier: 1 },
      { name: "Ann Arbor", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Dearborn", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 },
      { name: "Flint", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Kalamazoo", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "Saginaw", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Sterling Heights", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 },
      { name: "Traverse City", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.9 },
      { name: "Warren", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Minnesota",
    abbr: "MN",
    capital: "St. Paul",
    climateZone: "Humid Continental Extreme",
    avgTemp: "83°F",
    seoTip: "Severe winter freezes followed by humid Minnesota summers cause outdoor soil shifting. Verify your outdoor concrete pad is level to prevent compressor strain.",
    cities: [
      { name: "Duluth", isMajor: true, climateProfile: "Cool Superior lake breezes, brief warmth", commonIssue: "Control boards damaged by severe winter condensation", avgSummerTemp: "75°F", estimatedCostMultiplier: 1.1 },
      { name: "Minneapolis", isMajor: true, climateProfile: "Muggy summer peaks, severe winter cold", commonIssue: "Soil shifting breaking copper refrigerant joints; startup electrical shorts", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.15 },
      { name: "St. Paul", isMajor: true, climateProfile: "Continental river basin humidity", commonIssue: "Frozen system evaporator coils and clogged filter restrictions", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Bloomington", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.9 },
      { name: "Brooklyn Park", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Eagan", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.98 },
      { name: "Mankato", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.9 },
      { name: "Plymouth", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.98 },
      { name: "Rochester", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "St. Cloud", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.9 },
      { name: "Woodbury", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    capital: "Jackson",
    climateZone: "Humid Subtropical",
    avgTemp: "92°F",
    seoTip: "Mississippi has long, punishing cooling seasons. Opt for high-efficiency 16+ SEER units to reduce your monthly utility expenses by up to 35%.",
    cities: [
      { name: "Biloxi", isMajor: true, climateProfile: "Humid coastal wind and heat", commonIssue: "Debris in the condenser motor and corroding control cabinets", avgSummerTemp: "90°F", estimatedCostMultiplier: 1 },
      { name: "Gulfport", isMajor: true, climateProfile: "Oppressive salt humidity and storm exposure", commonIssue: "Severe salt corrosion eroding the coil structure and shorting electronics", avgSummerTemp: "90°F", estimatedCostMultiplier: 1 },
      { name: "Jackson", isMajor: true, climateProfile: "Deep South hot, highly humid climate", commonIssue: "Refrigerant leaks, compressor mechanical failure, and bad blowers", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.9 },
      { name: "Greenville", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Hattiesburg", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Meridian", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Olive Branch", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 },
      { name: "Oxford", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Southaven", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Tupelo", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 },
      { name: "Vicksburg", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Missouri",
    abbr: "MO",
    capital: "Jefferson City",
    climateZone: "Humid Continental / Subtropical",
    avgTemp: "89°F",
    seoTip: "Missouri summers fluctuate. Smart programmable thermostats can save thousands by matching variable daily humidity patterns.",
    cities: [
      { name: "Kansas City", isMajor: true, climateProfile: "Warm, muggy wind and rapid storm patterns", commonIssue: "Burned out run-capacitors and failed blower relays", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.05 },
      { name: "Springfield", isMajor: true, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "St. Louis", isMajor: true, climateProfile: "Humid urban river basin heat", commonIssue: "Leaking evaporator coils and clogged condensation drains", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.05 },
      { name: "Blue Springs", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 },
      { name: "Cape Girardeau", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Columbia", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Independence", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Jefferson City", isMajor: false, climateProfile: "Inland hot, humid summer weather", commonIssue: "Rodents nested in contactor housings causing system shorting", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.95 },
      { name: "Joplin", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Lee's Summit", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "St. Joseph", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Montana",
    abbr: "MT",
    capital: "Helena",
    climateZone: "Semi-Arid / Alpine",
    avgTemp: "84°F",
    seoTip: "Wildfires in Montana release fine smoke particles that instantly choke high-efficiency AC filters. Double your filter inspection frequency in late summer.",
    cities: [
      { name: "Billings", isMajor: true, climateProfile: "Dry, hot plains summer air", commonIssue: "Wildfire smoke ash and farm dust clogging internal blower motors", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.1 },
      { name: "Helena", isMajor: true, climateProfile: "Warm dry mountain summers", commonIssue: "Thermostat signal line cuts and rodent nesting", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Missoula", isMajor: true, climateProfile: "Valley heat and heavy forest haze", commonIssue: "Extremely dirty air filters restricting airflow, freezing coils", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Bozeman", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 },
      { name: "Butte", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 },
      { name: "Great Falls", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Havre", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Kalispell", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Livingston", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Miles City", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Whitefish", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    capital: "Lincoln",
    climateZone: "Humid Continental",
    avgTemp: "88°F",
    seoTip: "With wild summer windstorms, Nebraska outdoor condensers are highly prone to debris ingress. Keep a 3-foot clear perimeter around the external housing.",
    cities: [
      { name: "Grand Island", isMajor: true, climateProfile: "Semi-arid warm agricultural plain", commonIssue: "Pollen buildup restricting outdoor heat dissipation", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.95 },
      { name: "Lincoln", isMajor: true, climateProfile: "Hot, windy continental summers", commonIssue: "Dirt-crusted external fins, leading to high head pressure and system trips", avgSummerTemp: "89°F", estimatedCostMultiplier: 1 },
      { name: "Omaha", isMajor: true, climateProfile: "Humid Missouri valley continental warmth", commonIssue: "Worn fan bearings and blown electrical fuses due to storm grid surges", avgSummerTemp: "88°F", estimatedCostMultiplier: 1 },
      { name: "Bellevue", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.06 },
      { name: "Columbus", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.22 },
      { name: "Fremont", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Hastings", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.9 },
      { name: "Kearney", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.98 },
      { name: "Norfolk", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "North Platte", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.9 },
      { name: "Papillion", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Nevada",
    abbr: "NV",
    capital: "Carson City",
    climateZone: "Desert / Arid",
    avgTemp: "102°F",
    seoTip: "Searing Nevada temperatures can cause the oil in your compressor to degrade. Ensure regular viscosity checks during annual multi-point HVAC tuning.",
    cities: [
      { name: "Henderson", isMajor: true, climateProfile: "Severe desert plains heat", commonIssue: "Condenser fan motor burnout from continuous high-limit operation", avgSummerTemp: "103°F", estimatedCostMultiplier: 1.1 },
      { name: "Las Vegas", isMajor: true, climateProfile: "punishing dry desert heat wave seasons", commonIssue: "Compressors overheating, dry-rotted electrical wiring, failed start capacitors", avgSummerTemp: "104°F", estimatedCostMultiplier: 1.15 },
      { name: "Reno", isMajor: true, climateProfile: "Dry high-desert warm days, cool nights", commonIssue: "Thermostat short-cycling issues and heavy dust accumulation", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.1 },
      { name: "Boulder City", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.06 },
      { name: "Carson City", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.22 },
      { name: "Elko", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.22 },
      { name: "Fallon", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.14 },
      { name: "Fernley", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.22 },
      { name: "Mesquite", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.22 },
      { name: "North Las Vegas", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "102°F", estimatedCostMultiplier: 0.98 },
      { name: "Sparks", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "102°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    capital: "Concord",
    climateZone: "Humid Continental",
    avgTemp: "80°F",
    seoTip: "High winter snowfall can bend or damage unprotected fan blades. Cover the top of your unit during winter, but never seal it in a non-breathable plastic trap.",
    cities: [
      { name: "Concord", isMajor: true, climateProfile: "Typical forested continental summers", commonIssue: "Faulty thermostat calibrations and blown fuses", avgSummerTemp: "79°F", estimatedCostMultiplier: 1.1 },
      { name: "Manchester", isMajor: true, climateProfile: "Warm, continental humid summers", commonIssue: "Condensate pan overflow due to clogged drain, causing ceiling damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Nashua", isMajor: true, climateProfile: "Moderate Northeast warmth", commonIssue: "Mouse chewed wires inside the condenser electronics box", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Derry", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 },
      { name: "Dover", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.06 },
      { name: "Hudson", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "80°F", estimatedCostMultiplier: 0.9 },
      { name: "Keene", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 },
      { name: "Merrimack", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 },
      { name: "Portsmouth", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 },
      { name: "Rochester", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 },
      { name: "Salem", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    capital: "Trenton",
    climateZone: "Humid Continental / Subtropical",
    avgTemp: "85°F",
    seoTip: "NJ coastal towns suffer from salt corrosion. Utilize coil defense sprays or order epoxy-coated replacement coils during service overhauls.",
    cities: [
      { name: "Jersey City", isMajor: true, climateProfile: "Humid harbor metropolitan area", commonIssue: "Difficult high-rise AC access and worn blower motor capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.2 },
      { name: "Newark", isMajor: true, climateProfile: "Humid urban heat and coastal estuary air", commonIssue: "Relay contacts melting and dirty system coils driving up utility bills", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.2 },
      { name: "Trenton", isMajor: true, climateProfile: "Inland humid warmth", commonIssue: "Algae-clogged drip lines and low refrigerant charges", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.1 },
      { name: "Camden", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 },
      { name: "Edison", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.06 },
      { name: "Elizabeth", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.06 },
      { name: "Hamilton", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 },
      { name: "Lakewood", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.22 },
      { name: "Paterson", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 },
      { name: "Toms River", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Woodbridge", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    capital: "Santa Fe",
    climateZone: "Arid / Semi-Arid",
    avgTemp: "90°F",
    seoTip: "Evaporative swamp coolers are common in New Mexico, but converting to a modern heat pump or refrigerated air system provides far superior comfort and dust filtration.",
    cities: [
      { name: "Albuquerque", isMajor: true, climateProfile: "Hot, high-elevation dry air and dust", commonIssue: "Silt and sand packing in outdoor coils, and failed fan motors", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.05 },
      { name: "Las Cruces", isMajor: true, climateProfile: "Intense southern desert sun and wind", commonIssue: "Thermostat wire UV degradation and condenser unit overheating", avgSummerTemp: "96°F", estimatedCostMultiplier: 1 },
      { name: "Santa Fe", isMajor: true, climateProfile: "Mild high-altitude warmth, very dry", commonIssue: "System sizing errors; improper static pressures inside thin ductwork", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.15 },
      { name: "Alamogordo", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.22 },
      { name: "Carlsbad", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.98 },
      { name: "Clovis", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.22 },
      { name: "Farmington", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "90°F", estimatedCostMultiplier: 0.9 },
      { name: "Hobbs", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.22 },
      { name: "Rio Rancho", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.14 },
      { name: "Roswell", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.22 },
      { name: "Taos", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "New York",
    abbr: "NY",
    capital: "Albany",
    climateZone: "Humid Continental",
    avgTemp: "83°F",
    seoTip: "In New York City, specialized window-sleeve and PTAC services are crucial. For upstate homes, central systems need regular duct testing to stop energy leakage.",
    cities: [
      { name: "Albany", isMajor: true, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.98 },
      { name: "Buffalo", isMajor: true, climateProfile: "Lake-humid summers, severe snowy winters", commonIssue: "Severe corrosion from winter moisture and mice nests in control boxes", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.1 },
      { name: "New York City", isMajor: true, climateProfile: "Humid coastal urban concrete heat", commonIssue: "PTAC scale buildup, strict building codes for roof access, and failed compressor relays", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.3 },
      { name: "Rochester", isMajor: true, climateProfile: "Humid continental northern climate", commonIssue: "Blocked condensate lines and smart thermostat calibration drift", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.1 },
      { name: "Syracuse", isMajor: true, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 },
      { name: "Binghamton", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Ithaca", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "New Rochelle", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.98 },
      { name: "Niagara Falls", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Poughkeepsie", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 },
      { name: "Saratoga Springs", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 },
      { name: "Schenectady", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Utica", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 },
      { name: "White Plains", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.06 },
      { name: "Yonkers", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    capital: "Raleigh",
    climateZone: "Humid Subtropical",
    avgTemp: "89°F",
    seoTip: "North Carolina is prone to high pine pollen seasons that coat condenser coils in thick yellow dust. Spray off the condenser with a hose before turning on your AC in spring.",
    cities: [
      { name: "Charlotte", isMajor: true, climateProfile: "Hot, humid inland Piedmont summers", commonIssue: "Failed run capacitors and refrigerant leaks in thin aluminum coils", avgSummerTemp: "90°F", estimatedCostMultiplier: 1 },
      { name: "Greensboro", isMajor: true, climateProfile: "Moderate humid Piedmont summers", commonIssue: "Thermostat relays burning out and low freon charge", avgSummerTemp: "87°F", estimatedCostMultiplier: 0.95 },
      { name: "Raleigh", isMajor: true, climateProfile: "Humid eastern pine forest summers", commonIssue: "Pine sap and pollen blocking heat rejection, causing early compressor failure", avgSummerTemp: "89°F", estimatedCostMultiplier: 1 },
      { name: "Asheville", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Cary", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Chapel Hill", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Durham", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Fayetteville", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 },
      { name: "High Point", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Wilmington", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.22 },
      { name: "Winston-Salem", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    capital: "Bismarck",
    climateZone: "Continental Extreme",
    avgTemp: "82°F",
    seoTip: "Extremely cold winter temperatures in North Dakota can cause refrigerant to migrate to the cold compressor. Crankcase heaters are highly recommended.",
    cities: [
      { name: "Bismarck", isMajor: true, climateProfile: "Dry windy summers, freezing winters", commonIssue: "Wind-driven soil packing into the external coils; control board failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.1 },
      { name: "Fargo", isMajor: true, climateProfile: "Muggy plains summers, freezing winters", commonIssue: "Crankcase heater failure leading to compressor liquid slugging on startup", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.1 },
      { name: "Grand Forks", isMajor: true, climateProfile: "Extreme continental temperature swings", commonIssue: "Blower motor failures and thermal expansion valve (TXV) sticking", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Devils Lake", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.22 },
      { name: "Dickinson", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.98 },
      { name: "Jamestown", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.14 },
      { name: "Mandan", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.06 },
      { name: "Minot", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 },
      { name: "Wahpeton", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.22 },
      { name: "West Fargo", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.06 },
      { name: "Williston", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Ohio",
    abbr: "OH",
    capital: "Columbus",
    climateZone: "Humid Continental",
    avgTemp: "84°F",
    seoTip: "Ohio river valley humidity causes heavy condensation. Standard HVAC maintenance should always include flushing the primary and secondary drain pans.",
    cities: [
      { name: "Cincinnati", isMajor: true, climateProfile: "Humid Ohio River valley climate", commonIssue: "Dual-run capacitor failures and low refrigerant charge from vibration wear", avgSummerTemp: "86°F", estimatedCostMultiplier: 1 },
      { name: "Cleveland", isMajor: true, climateProfile: "Lake-humid, windy, continental weather", commonIssue: "Severe humidity causing mold in air ducts, and coil corrosion", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.05 },
      { name: "Columbus", isMajor: true, climateProfile: "Typical hot and sticky Midwest summers", commonIssue: "Blocked condensate lines and worn-out fan motor capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 1 },
      { name: "Akron", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Canton", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 },
      { name: "Dayton", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Lorain", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Parma", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Springfield", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Toledo", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.98 },
      { name: "Youngstown", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    capital: "Oklahoma City",
    climateZone: "Humid Subtropical / Arid",
    avgTemp: "93°F",
    seoTip: "Punishing winds and tornadoes in Oklahoma put high-pressure loads on outdoor condensers. Secure units with robust concrete pads and tie-downs.",
    cities: [
      { name: "Norman", isMajor: true, climateProfile: "Severe summer storms and heat", commonIssue: "Capacitor failure and smart thermostat disconnection", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.95 },
      { name: "Oklahoma City", isMajor: true, climateProfile: "punishing central plains wind and heat", commonIssue: "Hail damage, control board burnout from electrical line lightning, and condenser fan motor failure", avgSummerTemp: "94°F", estimatedCostMultiplier: 0.95 },
      { name: "Tulsa", isMajor: true, climateProfile: "Hot and highly humid central summers", commonIssue: "Leaking evaporator coils and biological growth blocking water drains", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.95 },
      { name: "Ardmore", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Broken Arrow", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Edmond", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Enid", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Lawton", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Moore", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.14 },
      { name: "Muskogee", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.98 },
      { name: "Stillwater", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "93°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Oregon",
    abbr: "OR",
    capital: "Salem",
    climateZone: "Oceanic / Mediterranean",
    avgTemp: "83°F",
    seoTip: "Historically temperate, Oregon is seeing more frequent 90°F+ heatwaves. Heat pumps provide efficient heating in winter and highly responsive cooling in summer.",
    cities: [
      { name: "Eugene", isMajor: true, climateProfile: "Humid valley summers with heavy pollen", commonIssue: "Pollen blanketing evaporator surfaces, starving airflow", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.15 },
      { name: "Portland", isMajor: true, climateProfile: "Warm, dry summers, damp winters", commonIssue: "Aging homes lacking proper ductwork; high demand for ductless mini-split conversions", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.2 },
      { name: "Salem", isMajor: true, climateProfile: "Dry summers with moderate warmth", commonIssue: "Blower fan motor wear and tear and dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Albany", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.9 },
      { name: "Beaverton", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.9 },
      { name: "Bend", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Corvallis", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 },
      { name: "Gresham", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.06 },
      { name: "Hillsboro", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.14 },
      { name: "Medford", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 0.98 },
      { name: "Springfield", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.22 }
    ]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    capital: "Harrisburg",
    climateZone: "Humid Continental",
    avgTemp: "84°F",
    seoTip: "High anthracite dust in Pennsylvania coal regions or city soot can coat external coils. Cleaning with non-acidic coil cleaner restores system efficiency by 15%.",
    cities: [
      { name: "Harrisburg", isMajor: true, climateProfile: "Humid continental agricultural plain", commonIssue: "Worn contactors and faulty safety float switches in attic air handlers", avgSummerTemp: "84°F", estimatedCostMultiplier: 1 },
      { name: "Philadelphia", isMajor: true, climateProfile: "Humid East Coast metropolitan heat", commonIssue: "Older electrical system wiring shorts and blown dual-run capacitors", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.15 },
      { name: "Pittsburgh", isMajor: true, climateProfile: "Muggy river valley industrial smog/humidity", commonIssue: "Soot and pollen encrusted condenser fins leading to early thermal shutdown", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Allentown", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Bethlehem", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Erie", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "Lancaster", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "Reading", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.14 },
      { name: "Scranton", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.9 },
      { name: "State College", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "84°F", estimatedCostMultiplier: 1.22 },
      { name: "York", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "84°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    capital: "Providence",
    climateZone: "Humid Continental / Coastal",
    avgTemp: "81°F",
    seoTip: "Coastal humidity in Rhode Island can turn simple duct dust into a breeding ground for mold. Invest in whole-home UV light purifiers inside the air plenum.",
    cities: [
      { name: "Cranston", isMajor: true, climateProfile: "Warm, muggy summers", commonIssue: "Rodent wiring damages and failed thermostat relays", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Providence", isMajor: true, climateProfile: "Humid coastal river basin heat", commonIssue: "Duct condensation sweating, leading to ceiling drywall sagging and mold", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.2 },
      { name: "Warwick", isMajor: true, climateProfile: "Salty marine winds and humidity", commonIssue: "Galvanic corrosion on raw copper connections and sensor failures", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.15 },
      { name: "Bristol", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.9 },
      { name: "Cumberland", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.98 },
      { name: "East Providence", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 },
      { name: "Newport", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.98 },
      { name: "North Providence", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Pawtucket", isMajor: false, climateProfile: "Coastal salt spray and tropical humidity", commonIssue: "Severe condenser corrosion and coil damage", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "South Kingstown", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "Woonsocket", isMajor: false, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Electrical board shorts from sea fog condensation", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    capital: "Columbia",
    climateZone: "Humid Subtropical",
    avgTemp: "92°F",
    seoTip: "South Carolina summers are blistering. Make sure to clear debris from your outdoor unit to prevent heat-soak shutdown during July heatwaves.",
    cities: [
      { name: "Charleston", isMajor: true, climateProfile: "Coastal salt spray, tropical humidity", commonIssue: "Severe condenser corrosion and biological clogs in condensate traps", avgSummerTemp: "90°F", estimatedCostMultiplier: 1.1 },
      { name: "Columbia", isMajor: true, climateProfile: "punishing central state dry-humid heat valley", commonIssue: "Compressor overloads, dual run-capacitor failures, and thermostat shorts", avgSummerTemp: "94°F", estimatedCostMultiplier: 1 },
      { name: "Greenville", isMajor: true, climateProfile: "Warm Piedmont mountain-slope air", commonIssue: "Blower motor belt and bearing wear from heavy cycling load", avgSummerTemp: "88°F", estimatedCostMultiplier: 1 },
      { name: "Anderson", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Florence", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Hilton Head Island", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Mount Pleasant", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Myrtle Beach", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Rock Hill", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.22 },
      { name: "Spartanburg", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Summerville", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    capital: "Pierre",
    climateZone: "Continental Extreme",
    avgTemp: "86°F",
    seoTip: "Punishing winter freezes in South Dakota can snap uninsulated copper line sets. Check insulation sleeves on external copper lines every autumn.",
    cities: [
      { name: "Pierre", isMajor: true, climateProfile: "Arid plains central heat", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "87°F", estimatedCostMultiplier: 1 },
      { name: "Rapid City", isMajor: true, climateProfile: "Dry mountain warmth and heavy winds", commonIssue: "Debris and pine needles blocking the fan blades, causing high electrical draw", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.05 },
      { name: "Sioux Falls", isMajor: true, climateProfile: "Muggy summer peaks, freezing winters", commonIssue: "Line set vibration fractures and failed crankcase heaters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.05 },
      { name: "Aberdeen", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.98 },
      { name: "Brookings", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Huron", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.9 },
      { name: "Mitchell", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Spearfish", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.22 },
      { name: "Vermillion", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.14 },
      { name: "Watertown", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "86°F", estimatedCostMultiplier: 1.06 },
      { name: "Yankton", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    capital: "Nashville",
    climateZone: "Humid Subtropical",
    avgTemp: "89°F",
    seoTip: "Mild winters followed by warm, humid Tennessee summers create a perfect environment for pest infestations in outdoor AC electrical panels.",
    cities: [
      { name: "Knoxville", isMajor: true, climateProfile: "Warm Valley humidity and mountain dust", commonIssue: "Blower fan motor bearing failures and dirty filters", avgSummerTemp: "87°F", estimatedCostMultiplier: 1 },
      { name: "Memphis", isMajor: true, climateProfile: "Oppressive Mississippi River humidity and heat", commonIssue: "Refrigerant leaks in older copper lines and frozen evaporator coils", avgSummerTemp: "91°F", estimatedCostMultiplier: 0.95 },
      { name: "Nashville", isMajor: true, climateProfile: "Hot, humid basin and heavy summer storms", commonIssue: "Electrical contactors clogged with bugs/debris; blown start capacitors", avgSummerTemp: "90°F", estimatedCostMultiplier: 1 },
      { name: "Bartlett", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Chattanooga", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.98 },
      { name: "Clarksville", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Franklin", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Jackson", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "89°F", estimatedCostMultiplier: 0.9 },
      { name: "Johnson City", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Kingsport", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.14 },
      { name: "Murfreesboro", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Texas",
    abbr: "TX",
    capital: "Austin",
    climateZone: "Humid Subtropical / Semi-Arid",
    avgTemp: "96°F - 102°F",
    seoTip: "Texas is a high-demand state for air conditioning. Keep your AC in tip-top shape with seasonal tune-ups, as a mid-summer breakdown in Texas is an absolute emergency.",
    cities: [
      { name: "Austin", isMajor: true, climateProfile: "Hot, dry-humid mix hill country warmth", commonIssue: "Control board failures due to lightning, and short-cycling from low Freon", avgSummerTemp: "96°F", estimatedCostMultiplier: 1.1 },
      { name: "Dallas", isMajor: true, climateProfile: "Intense dry and humid inland plains heat", commonIssue: "Capacitor failure, compressor burnout, and dry-rotted outdoor wiring", avgSummerTemp: "97°F", estimatedCostMultiplier: 1.05 },
      { name: "Fort Worth", isMajor: true, climateProfile: "Punishing prairie sun and heat", commonIssue: "Blown dual-run capacitors and dry filters starving airflow", avgSummerTemp: "97°F", estimatedCostMultiplier: 1 },
      { name: "Houston", isMajor: true, climateProfile: "Severe coastal humidity and high-heat load", commonIssue: "Biological sludge clogging drain lines, corroded copper joints, and failed fan motors", avgSummerTemp: "95°F", estimatedCostMultiplier: 1.1 },
      { name: "San Antonio", isMajor: true, climateProfile: " punising semi-arid southern Texas heat", commonIssue: "TXV valve sticking and condenser motor overheating", avgSummerTemp: "96°F", estimatedCostMultiplier: 1 },
      { name: "Arlington", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "96°F", estimatedCostMultiplier: 1.22 },
      { name: "Corpus Christi", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "96°F", estimatedCostMultiplier: 0.98 },
      { name: "El Paso", isMajor: false, climateProfile: "Extreme desert heat and blowing sand", commonIssue: "Sand packed in outdoor coils and blower fan motor mechanical seizure", avgSummerTemp: "99°F", estimatedCostMultiplier: 0.95 },
      { name: "Frisco", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "96°F", estimatedCostMultiplier: 0.98 },
      { name: "Garland", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "96°F", estimatedCostMultiplier: 1.22 },
      { name: "Irving", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "96°F", estimatedCostMultiplier: 0.9 },
      { name: "Laredo", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "96°F", estimatedCostMultiplier: 0.98 },
      { name: "Lubbock", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "96°F", estimatedCostMultiplier: 1.14 },
      { name: "McKinney", isMajor: false, climateProfile: "Searing desert summers", commonIssue: "Dirty condenser coils causing high head pressure", avgSummerTemp: "96°F", estimatedCostMultiplier: 0.9 },
      { name: "Plano", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "96°F", estimatedCostMultiplier: 1.14 }
    ]
  },
  {
    name: "Utah",
    abbr: "UT",
    capital: "Salt Lake City",
    climateZone: "Semi-Arid",
    avgTemp: "92°F",
    seoTip: "The Great Salt Lake area carries airborne mineral dust that can settle on condenser coils, forming a hard crust. Wash external coils with mild soap yearly.",
    cities: [
      { name: "Provo", isMajor: true, climateProfile: "Hot mountain-valley dry summers", commonIssue: "Thermostat wire rodent cuts and contactor point failure", avgSummerTemp: "91°F", estimatedCostMultiplier: 1.05 },
      { name: "Salt Lake City", isMajor: true, climateProfile: "Warm, dry high-elevation desert summers", commonIssue: "Mineral dust encrusting coils and failed condenser fan motors", avgSummerTemp: "93°F", estimatedCostMultiplier: 1.1 },
      { name: "West Valley City", isMajor: true, climateProfile: "Dry basin heat and winds", commonIssue: "Dirty air filters leading to low delta-T and copper ice accumulation", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.05 },
      { name: "Layton", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Lehi", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "Logan", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 },
      { name: "Ogden", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Orem", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "Sandy", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.9 },
      { name: "St. George", isMajor: false, climateProfile: "Extreme dry heat and dust storms", commonIssue: "Compressor burnout and failed capacitors", avgSummerTemp: "92°F", estimatedCostMultiplier: 1.06 },
      { name: "West Jordan", isMajor: false, climateProfile: "High heat and dust exposure", commonIssue: "Condenser fan motor burnout from continuous load", avgSummerTemp: "92°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "Vermont",
    abbr: "VT",
    capital: "Montpelier",
    climateZone: "Humid Continental",
    avgTemp: "78°F",
    seoTip: "With mild but increasingly warm Vermont summers, investing in an ENERGY STAR heat pump ensures ultra-low fuel costs and quiet cooling on warm days.",
    cities: [
      { name: "Burlington", isMajor: true, climateProfile: "Mild lake-humid warm spells", commonIssue: "Thermostat communication breakdowns and spider nests in contactors", avgSummerTemp: "80°F", estimatedCostMultiplier: 1.2 },
      { name: "Montpelier", isMajor: true, climateProfile: "Cool, fresh summers with brief heat", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "77°F", estimatedCostMultiplier: 1.15 },
      { name: "Rutland", isMajor: true, climateProfile: "Continental hilly forested warmth", commonIssue: "Rodents nested in attic duct insulation during winter", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.15 },
      { name: "Barre", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.06 },
      { name: "Bennington", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.06 },
      { name: "Brattleboro", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.06 },
      { name: "Colchester", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.98 },
      { name: "Essex", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.9 },
      { name: "Hartford", isMajor: false, climateProfile: "Cool summers with brief warm spells", commonIssue: "Lack of seasonal maintenance leading to startup failures", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.98 },
      { name: "South Burlington", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.14 },
      { name: "St. Albans", isMajor: false, climateProfile: "Brief warm inland summer snaps", commonIssue: "Blower fan belt cracking due to lack of use", avgSummerTemp: "78°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Virginia",
    abbr: "VA",
    capital: "Richmond",
    climateZone: "Humid Subtropical",
    avgTemp: "88°F",
    seoTip: "Virginia summers are heavy with humidity. Verify your secondary drain line is routed somewhere visible, as a dripping secondary indicates a clogged primary.",
    cities: [
      { name: "Norfolk", isMajor: true, climateProfile: "Humid maritime coastal climate", commonIssue: "Electrical board shorts from humid sea fog condensation", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.05 },
      { name: "Richmond", isMajor: true, climateProfile: "Humid river basin hot summers", commonIssue: "Clogged main condensate trap overflowing, failed run capacitors", avgSummerTemp: "89°F", estimatedCostMultiplier: 1.05 },
      { name: "Virginia Beach", isMajor: true, climateProfile: "Ocean salt moisture and summer heat", commonIssue: "Severe coil corrosion and ocean wind debris clogging fans", avgSummerTemp: "87°F", estimatedCostMultiplier: 1.1 },
      { name: "Alexandria", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Arlington", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Charlottesville", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.9 },
      { name: "Chesapeake", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Hampton", isMajor: false, climateProfile: "Coastal humidity and storm exposure", commonIssue: "Failed run capacitors and compressor overloads", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Lynchburg", isMajor: false, climateProfile: "Oppressive inland humidity and heat", commonIssue: "Refrigerant leaks and frozen evaporator coils", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.14 },
      { name: "Newport News", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.06 },
      { name: "Roanoke", isMajor: false, climateProfile: "Hot and highly humid summer season", commonIssue: "Clogged condensate drain line and mold growth", avgSummerTemp: "88°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Washington",
    abbr: "WA",
    capital: "Olympia",
    climateZone: "Oceanic / Mediterranean",
    avgTemp: "76°F - 85°F",
    seoTip: "Washington is seeing unprecedented summer heat waves. Retrofitting heat pumps in Pacific Northwest homes boosts comfort and asset value dramatically.",
    cities: [
      { name: "Seattle", isMajor: true, climateProfile: "Historically temperate, now warmer, dry summers", commonIssue: "High demand for heat pump conversions in ductless homes; clogged blower wheels", avgSummerTemp: "79°F", estimatedCostMultiplier: 1.25 },
      { name: "Spokane", isMajor: true, climateProfile: "Hot, dry inland pine plain warmth", commonIssue: "Blowing dust and pine needles nesting inside the condenser fan motor", avgSummerTemp: "88°F", estimatedCostMultiplier: 1.1 },
      { name: "Tacoma", isMajor: true, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.22 },
      { name: "Bellevue", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.06 },
      { name: "Bellingham", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.14 },
      { name: "Everett", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.06 },
      { name: "Kent", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.22 },
      { name: "Olympia", isMajor: false, climateProfile: "Cool, damp maritime spring, brief warm summer", commonIssue: "Electrical board mold and mouse chewed thermostat cables", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.2 },
      { name: "Renton", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "76°F", estimatedCostMultiplier: 1.06 },
      { name: "Vancouver", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "76°F", estimatedCostMultiplier: 0.9 },
      { name: "Yakima", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "76°F", estimatedCostMultiplier: 0.98 }
    ]
  },
  {
    name: "West Virginia",
    abbr: "WV",
    capital: "Charleston",
    climateZone: "Humid Continental / Subtropical",
    avgTemp: "85°F",
    seoTip: "Mountain valleys in West Virginia trap humidity. Keep your air vents open and unblocked to maintain correct air handler system static pressure.",
    cities: [
      { name: "Charleston", isMajor: true, climateProfile: "Muggy river valley warmth", commonIssue: "Slime blockages in AC drain pipes and blown fan capacitors", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.95 },
      { name: "Huntington", isMajor: true, climateProfile: "Humid Ohio River valley climate", commonIssue: "Vibration cracks in copper return bends causing gas loss", avgSummerTemp: "86°F", estimatedCostMultiplier: 0.95 },
      { name: "Morgantown", isMajor: true, climateProfile: "Warm, muggy Appalachian hills summer", commonIssue: "Thermostat wiring decay and outdoor leaf debris pack", avgSummerTemp: "84°F", estimatedCostMultiplier: 1 },
      { name: "Beckley", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 },
      { name: "Clarksburg", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Fairmont", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 },
      { name: "Harpers Ferry", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.9 },
      { name: "Lewisburg", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 0.98 },
      { name: "Martinsburg", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.22 },
      { name: "Parkersburg", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.14 },
      { name: "Wheeling", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "85°F", estimatedCostMultiplier: 1.06 }
    ]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    capital: "Madison",
    climateZone: "Humid Continental Extreme",
    avgTemp: "82°F",
    seoTip: "Severe winter ice can crush outdoor AC covers. Ensure you clear any snow pack around your unit before starting it up in late spring.",
    cities: [
      { name: "Green Bay", isMajor: true, climateProfile: "Short hot summers, extreme cold winters", commonIssue: "Control boards fried by winter condensation rust", avgSummerTemp: "79°F", estimatedCostMultiplier: 1.05 },
      { name: "Madison", isMajor: true, climateProfile: "Muggy inland lakes warmth, cold winters", commonIssue: "Frozen system coils from dirty filters or bad fan speed relays", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.1 },
      { name: "Milwaukee", isMajor: true, climateProfile: "Lake-humid continental summers, freezing winters", commonIssue: "Winter structural stress, failed contactors, and high initial startup amp draw", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.1 },
      { name: "Appleton", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 },
      { name: "Eau Claire", isMajor: false, climateProfile: "Warm lake-humid metropolitan climate", commonIssue: "Thermostat calibration drift and relay failures", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.06 },
      { name: "Janesville", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.06 },
      { name: "Kenosha", isMajor: false, climateProfile: "Hot and sticky summers", commonIssue: "Blocked condensate lines and worn fan capacitors", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.14 },
      { name: "La Crosse", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.14 },
      { name: "Oshkosh", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 },
      { name: "Racine", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.22 },
      { name: "Waukesha", isMajor: false, climateProfile: "Humid continental storms", commonIssue: "Frozen evaporator coils from dirty filters", avgSummerTemp: "82°F", estimatedCostMultiplier: 0.9 }
    ]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    capital: "Cheyenne",
    climateZone: "Semi-Arid / Alpine",
    avgTemp: "81°F",
    seoTip: "High-wind Wyoming prairies throw soil and small pebbles at condenser fins. Install robust protective mesh to shield expensive aluminum coil paths.",
    cities: [
      { name: "Casper", isMajor: true, climateProfile: "Dry windy mountain basin summers", commonIssue: "Hail-mutilated fins and loose fan blades due to storm vibration", avgSummerTemp: "83°F", estimatedCostMultiplier: 1.1 },
      { name: "Cheyenne", isMajor: true, climateProfile: "Dry high-elevation windy plains warmth", commonIssue: "Wind-driven grit blanketing the condenser coils, causing over-temperature trips", avgSummerTemp: "82°F", estimatedCostMultiplier: 1.1 },
      { name: "Laramie", isMajor: true, climateProfile: "Cool, dry high-altitude summers", commonIssue: "Blower motor failures and smart thermostat wiring issues", avgSummerTemp: "78°F", estimatedCostMultiplier: 1.15 },
      { name: "Cody", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.9 },
      { name: "Evanston", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "Gillette", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "Jackson", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Rawlins", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.06 },
      { name: "Riverton", isMajor: false, climateProfile: "Muggy plains summers with storm debris", commonIssue: "Wind-driven soil packing into external coils", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.14 },
      { name: "Rock Springs", isMajor: false, climateProfile: "Dry windy summers with heavy winds", commonIssue: "Contactor point burning from rapid seasonal cycling", avgSummerTemp: "81°F", estimatedCostMultiplier: 1.22 },
      { name: "Sheridan", isMajor: false, climateProfile: "Hot plains heat and severe wind", commonIssue: "Hail-damaged condenser fins and debris ingress", avgSummerTemp: "81°F", estimatedCostMultiplier: 0.9 }
    ]
  }
];

export function getStatesMap(): Map<string, StateData> {
  const map = new Map<string, StateData>();
  STATES_DB.forEach(state => {
    map.set(state.abbr.toUpperCase(), state);
    map.set(state.name.toLowerCase(), state);
  });
  return map;
}

export function findStateByAbbrOrName(input: string): StateData | undefined {
  const clean = input.trim().toLowerCase();
  return STATES_DB.find(s => s.name.toLowerCase() === clean || s.abbr.toLowerCase() === clean);
}

export function getCityDetails(stateAbbr: string, cityName: string): CityData {
  const state = findStateByAbbrOrName(stateAbbr);
  if (!state) {
    return createDynamicCity(cityName, stateAbbr);
  }
  const found = state.cities.find(c => c.name.toLowerCase() === cityName.trim().toLowerCase());
  if (found) return found;
  return createDynamicCity(cityName, state.abbr);
}

export function createDynamicCity(cityName: string, stateAbbr: string): CityData {
  // Generates a fully compliant, realistic CityData object dynamically for any US city
  const state = STATES_DB.find(s => s.abbr.toUpperCase() === stateAbbr.toUpperCase()) || STATES_DB[0];
  const hash = cityName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const costMultiplier = 0.85 + (hash % 4) * 0.1; // realistic variation [0.85, 1.15]
  
  return {
    name: cityName,
    isMajor: hash % 2 === 0,
    climateProfile: `${state.climateZone} with typical localized summer heat indexes.`,
    commonIssue: hash % 3 === 0 
      ? "Slightly low refrigerant levels or thermostatic expansion valve restriction" 
      : hash % 3 === 1 
        ? "Seasonal dirt buildup on outdoor condenser fins causing elevated energy draw" 
        : "Failed run capacitor resulting in condenser motor starting failures",
    avgSummerTemp: state.avgTemp,
    estimatedCostMultiplier: parseFloat(costMultiplier.toFixed(2))
  };
}
