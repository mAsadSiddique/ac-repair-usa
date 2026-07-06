/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiagnosticSymptom, ServiceType } from "../types";

export const DIAGNOSTICS_DB: DiagnosticSymptom[] = [
  {
    id: "warm-air",
    symptom: "AC is running but blowing warm/room-temperature air",
    possibleCauses: [
      "Low refrigerant charge due to a leak",
      "Extremely dirty outdoor condenser coils restricting heat exchange",
      "Failed dual-run capacitor preventing the compressor from starting",
      "Incorrect thermostat settings or dead thermostat batteries",
      "Severely clogged return air filter restricting interior air distribution"
    ],
    severity: "High",
    recommendedService: ServiceType.AC_REPAIR,
    troubleshootingSteps: [
      "Verify that the thermostat is explicitly set to 'Cool' and the temperature is at least 3°F below the current room temperature.",
      "Go outside and check if the outdoor condenser fan is spinning and making its normal hum.",
      "Inspect your indoor air filter. If it is completely dark or covered in dust, replace it immediately.",
      "Check your circuit breaker panel to ensure the outdoor AC unit switch hasn't tripped."
    ],
    costRange: "$150 - $450"
  },
  {
    id: "water-leak",
    symptom: "Water is leaking from the indoor unit or pooling around it",
    possibleCauses: [
      "Clogged condensate drain line (caused by algae, mold, or dust sludge)",
      "Cracked or rusted drain pan",
      "Frozen evaporator coil melting rapidly",
      "Faulty condensate pump failing to discharge water"
    ],
    severity: "Medium",
    recommendedService: ServiceType.REFRIGERANT_LEAK,
    troubleshootingSteps: [
      "Turn off the AC system immediately at the thermostat to prevent further water damage to your floor or ceiling.",
      "Locate the condensate drain line outlet outside. If water is not dripping or looks sluggish, there is a clog.",
      "Inspect the evaporator coil behind the filter. If you see ice or frost, let the system thaw completely.",
      "If you have a wet/dry shop vac, you can try suctioning the outdoor drain line to clear simple mold plugs."
    ],
    costRange: "$100 - $300"
  },
  {
    id: "no-power",
    symptom: "AC unit will not turn on at all (no sound, no fan)",
    possibleCauses: [
      "Tripped circuit breaker or blown outdoor disconnect fuse",
      "Thermostat batteries are completely dead",
      "Tripped water safety float switch in the drain pan (prevents floods)",
      "Failed blower motor or internal control board relay"
    ],
    severity: "High",
    recommendedService: ServiceType.EMERGENCY_SERVICE,
    troubleshootingSteps: [
      "Check the thermostat display. If it is blank, replace the batteries immediately.",
      "Look inside your HVAC drain pan (usually in the attic or closet). If it is full of water, the safety switch has cut the power.",
      "Locate your main home electrical panel and check the HVAC breaker. If tripped, flip it fully to 'Off' then back to 'On'."
    ],
    costRange: "$95 - $250"
  },
  {
    id: "loud-noise",
    symptom: "AC is making loud screeching, banging, or buzzing noises",
    possibleCauses: [
      "Worn out condenser fan motor bearings (screeching)",
      "Loose fan blade striking the outer safety grille (banging)",
      "Failed compressor valves or internal mechanical damage (clanking)",
      "Loose cabinet panels vibrating (buzzing)",
      "Failing electrical contactor or relay (loud buzzing)"
    ],
    severity: "High",
    recommendedService: ServiceType.AC_REPAIR,
    troubleshootingSteps: [
      "Turn off the AC to prevent internal metal-on-metal damage or motor burn-out.",
      "Visually inspect the outdoor unit through the grille to check for loose twigs, leaves, or bent fan blades.",
      "Note the exact type of noise (high-pitched squeal vs. metallic rattle) to tell your dispatched technician."
    ],
    costRange: "$150 - $600"
  },
  {
    id: "short-cycling",
    symptom: "AC turns on and off rapidly every few minutes",
    possibleCauses: [
      "Oversized cooling system for the square footage of the home",
      "Low refrigerant charge triggering a low-pressure cutoff switch",
      "Faulty thermostat placement (e.g., directly under an air vent)",
      "Severely restricted airflow from a clogged air filter"
    ],
    severity: "Medium",
    recommendedService: ServiceType.AC_MAINTENANCE,
    troubleshootingSteps: [
      "Replace your return air filter to ensure unrestricted heat absorption.",
      "Make sure no supply vents are blocked by furniture or heavy curtains.",
      "Check that your thermostat isn't located near a hot draft, window, or heat-producing appliance."
    ],
    costRange: "$120 - $380"
  }
];
