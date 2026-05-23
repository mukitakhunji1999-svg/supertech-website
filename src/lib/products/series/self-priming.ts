import type { TechnicalSpec } from "../technical-specs";

export const selfPrimingPump: TechnicalSpec = {
  key: "self-priming-pump",
  title: "Self Priming Pump",
  shortLabel: "Self Priming Pump",
  productPath: "/products/self-priming-pumps/self-priming-pump",
  family: "Pumps",
  summary:
    "High-suction self priming pump engineered for fast priming, stable suction lift, and dependable performance in residential, commercial, and light industrial water supply applications. Built-in air separation chamber with integral non-return valve.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 3" },
        { unit: "kW", value: "0.37 to 2.2" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "5 to 45" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "12 to 80" }] },
    { label: "Suction lift", units: [{ unit: "Metres", value: "Up to 8 (at MSL, primed)" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "25 / 32" },
        { unit: "inch", value: "1 / 1¼" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "180–240 (1Φ) / 380–415 (3Φ)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Residential, Hotels & hospitals, Car washing, Small farms, Lawn sprinklers, Light commercial"
        }
      ]
    }
  ],
  applications: [
    "Residential water supply",
    "Hotels & hospitals",
    "Car wash service stations",
    "Small farms & gardens",
    "Lawn sprinkler systems",
    "Light commercial transfer",
    "Pressure boosting (low-rise)"
  ],
  salientFeatures: [
    "Self-priming capability up to 8 m suction lift",
    "Integral air-separation chamber for fast priming",
    "Built-in non-return foot valve to retain prime",
    "Corrosion-resistant cast iron body with CED coating",
    "Dynamically balanced impeller for low vibration",
    "Thermal overload protector (single-phase variants)",
    "Capacitor-start, capacitor-run for high starting torque",
    "Portable design with carry handle on smaller frames",
    "Class F insulation"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor frame", material: "Cast iron / aluminium alloy (TEFC)" },
        { component: "Shaft", material: "Stainless steel SS-410 / EN-8 carbon steel" },
        { component: "Bearings", material: "Sealed deep-groove ball bearings" },
        { component: "Winding", material: "EC grade copper, dual-coat F class" },
        { component: "Thermal protection", material: "Built-in overload protector" },
        { component: "Capacitor", material: "Run / start capacitor (single-phase)" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Pump body", material: "Cast iron, CED coated" },
        { component: "Impeller", material: "Cast iron / brass / noryl, dynamically balanced" },
        { component: "Diffuser", material: "Cast iron / engineering plastic" },
        { component: "Mechanical seal", material: "Carbon vs. ceramic, oil-resistant elastomer" },
        { component: "Suction & delivery", material: "Threaded BSP" },
        { component: "Air separation chamber", material: "Integral cast iron chamber" },
        { component: "Non-return valve", material: "Integral foot / inlet NRV" },
        { component: "Shaft sleeve", material: "Stainless steel SS-410" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/self-priming.png",
  drawingAlt: "Self priming pump — typical schematic",
  footnotes: [
    "Suction lift performance derates with altitude; specify site elevation when ordering.",
    "Prime the pump fully before first start; use a foot valve on the suction line for best performance."
  ]
};
