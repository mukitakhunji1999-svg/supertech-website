import type { TechnicalSpec } from "../technical-specs";

export const miniMonoblockPump: TechnicalSpec = {
  key: "mini-monoblock-pump",
  title: "Mini Monoblock Pump",
  shortLabel: "Mini Monoblock Pump",
  productPath: "/products/mini-monoblock-pumps/mini-monoblock-pump",
  family: "Pumps",
  summary:
    "Compact mini monoblock pump for domestic and light commercial water supply. Integrated motor + pump on a single shaft delivers reliable performance with simple installation and low maintenance.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.25 to 1" },
        { unit: "kW", value: "0.18 to 0.75" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "5 to 30" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "20 to 200" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "20 / 25" },
        { unit: "inch", value: "¾ / 1" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "180–240 (1Φ)" }] },
    { label: "Construction", units: [{ unit: "—", value: "Single-stage monoblock, compact" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Domestic supply, Bungalows, Gardens, Light commercial, Water transfer" }
      ]
    }
  ],
  applications: [
    "Domestic water supply",
    "Apartments & bungalows",
    "Garden & lawn watering",
    "Light commercial transfer",
    "Water tank filling",
    "Cooler / desert cooler supply",
    "Pet & livestock water supply"
  ],
  salientFeatures: [
    "Compact, lightweight design — easy handling",
    "Single-shaft monoblock — no alignment required",
    "Cast iron / aluminium body with epoxy finish",
    "Brass / noryl impeller — corrosion resistant",
    "Thermal overload protection in single-phase variants",
    "Capacitor-start, capacitor-run for high starting torque",
    "Class F insulation",
    "Suitable for narrow installation spaces",
    "Low power consumption — energy efficient"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Frame", material: "Aluminium alloy / cast iron, TEFC" },
        { component: "Shaft", material: "Stainless steel SS-410 / EN-8" },
        { component: "Bearings", material: "Sealed deep-groove ball bearings" },
        { component: "Capacitor", material: "Run capacitor, polypropylene metallised film" },
        { component: "Thermal protector", material: "Klixon overload protector" },
        { component: "Cable entry", material: "PG cable gland with strain relief" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Pump body", material: "Cast iron / aluminium, CED coated" },
        { component: "Impeller", material: "Brass / noryl, dynamically balanced" },
        { component: "Mechanical seal", material: "Carbon vs. ceramic, NBR secondary" },
        { component: "Suction & delivery", material: "Threaded BSP" },
        { component: "Shaft sleeve", material: "Stainless steel SS-410 (where fitted)" },
        { component: "Fasteners", material: "Stainless steel SS-304" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/centrifugal-monoblock.png",
  drawingAlt: "Mini monoblock pump — schematic",
  footnotes: [
    "Pump must be primed before starting; install foot valve on suction line.",
    "Single-phase variant only; ensure clean supply voltage 180–240 V."
  ]
};
