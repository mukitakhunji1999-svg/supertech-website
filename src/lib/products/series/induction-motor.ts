/**
 * SUPERTECH Induction Motor (3-phase squirrel cage)
 *
 * Industrial-class induction motor used as a drive for pumps, blowers,
 * compressors and general machinery.
 */

import type { TechnicalSpec } from "../technical-specs";

export const inductionMotor: TechnicalSpec = {
  key: "induction-motor",
  title: "Induction Motor (3-Phase Squirrel Cage)",
  shortLabel: "Induction Motor",
  productPath: "/products/induction-motors/induction-motor",
  family: "Motors",
  summary:
    "Industrial-class 3-phase squirrel cage induction motor engineered for pumps, blowers, compressors, and general machinery duty. Robust cast iron / aluminium construction with class F insulation and IE2/IE3 efficiency options.",
  characteristics: [
    {
      label: "Output Rating",
      units: [
        { unit: "HP", value: "0.5 to 100" },
        { unit: "kW", value: "0.37 to 75" }
      ]
    },
    { label: "Poles", units: [{ unit: "—", value: "2 / 4 / 6 / 8" }] },
    { label: "Speed", units: [{ unit: "RPM", value: "750 / 960 / 1440 / 2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50 (60 Hz on request)" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "380–415 (3Φ)" }] },
    { label: "Connection", units: [{ unit: "—", value: "Star / Delta (DOL up to 5 HP, Star-Delta above)" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "F (155 °C rise over 40 °C ambient)" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP55" }] },
    { label: "Efficiency", units: [{ unit: "Class", value: "IE2 standard, IE3 / IE4 on request" }] },
    { label: "Cooling", units: [{ unit: "—", value: "IC411 (TEFC, fan cooled)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pumps, Blowers, Compressors, Conveyors, Machine tools, HVAC, General industry"
        }
      ]
    }
  ],
  applications: [
    "Pump drives (surface & monoblock)",
    "Blowers & compressors",
    "Conveyor systems",
    "Machine tools",
    "HVAC drives",
    "Industrial fans",
    "Mills, mixers & grinders",
    "General industrial machinery"
  ],
  salientFeatures: [
    "Squirrel cage construction — rugged and low maintenance",
    "Class F insulation with Class B temperature rise",
    "Dynamically balanced rotor (vibration grade A as per IS 12075)",
    "Cast iron frame for heavy-duty applications (aluminium for lower ratings)",
    "Sealed deep-groove ball bearings for long service life",
    "TEFC enclosure (IP55) suitable for industrial environments",
    "Foot-mounted, flange-mounted, and foot-and-flange options",
    "Suitable for direct online (DOL) starting up to 5 HP, star-delta above",
    "VFD-compatible variants available",
    "Compliant with IS 12615 / IEC 60034 standards"
  ],
  construction: [
    {
      title: "Electrical details",
      rows: [
        { component: "Stator core", material: "Electrical-grade silicon steel laminations" },
        { component: "Stator winding", material: "EC grade copper, dual-coat enamel, F class insulation" },
        { component: "Rotor", material: "Aluminium pressure die-cast / copper bar (large ratings)" },
        { component: "Insulation system", material: "Class F (155 °C) varnish impregnated" },
        { component: "Terminal box", material: "Cast iron / aluminium with cable gland (IP55)" }
      ]
    },
    {
      title: "Mechanical details",
      rows: [
        { component: "Frame & end shields", material: "Cast iron (large frames) / aluminium alloy (small frames)" },
        { component: "Shaft", material: "EN-8 / EN-24 carbon steel, dynamically balanced" },
        { component: "Bearings", material: "Sealed deep-groove ball bearings, regreasable on large frames" },
        { component: "Cooling fan", material: "Bi-directional polypropylene / aluminium" },
        { component: "Fan cover", material: "Mild steel pressed / cast iron" },
        { component: "Painting", material: "Industrial epoxy enamel finish" },
        { component: "Mounting", material: "B3 (foot) / B5 (flange) / B35 (foot & flange)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/induction-motor.svg",
  drawingAlt: "3-phase squirrel cage induction motor — schematic side view",
  footnotes: [
    "Standard frame sizes follow IEC 60072. Specify frame size, mounting, and shaft details when ordering.",
    "For VFD duty, ensure motor is rated for inverter operation and provide insulated bearings as appropriate."
  ]
};
