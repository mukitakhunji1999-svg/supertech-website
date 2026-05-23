/**
 * SUPERTECH Centrifugal Monoblock Pump
 *
 * Integrated motor + pump (monoblock) for surface water transfer, agriculture,
 * domestic supply, and light industrial duty.
 */

import type { TechnicalSpec } from "../technical-specs";

export const centrifugalMonoblock: TechnicalSpec = {
  key: "centrifugal-monoblock",
  title: "Centrifugal Monoblock Pump",
  shortLabel: "Centrifugal Monoblock Pump",
  productPath: "/products/monoblock-pumps/centrifugal-monoblock-pump",
  family: "Pumps",
  summary:
    "Compact integrated centrifugal monoblock pump (motor + pump on a single shaft) for surface installation. Engineered for water transfer, agricultural irrigation, domestic supply, and light industrial duty with simple installation and low maintenance.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 10" },
        { unit: "kW", value: "0.37 to 7.5" }
      ]
    },
    { label: "Construction", units: [{ unit: "—", value: "Single-stage centrifugal monoblock" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "8 to 45" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "60 to 1200" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "25 / 32 / 40 / 50 / 65" },
        { unit: "inch", value: "1 / 1¼ / 1½ / 2 / 2½" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ) / 380–415 (3Φ)" }] },
    { label: "Suction lift", units: [{ unit: "Metres", value: "Up to 7 (at MSL, primed)" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Agriculture, Garden, Domestic, Industrial transfer, Light commercial" }
      ]
    }
  ],
  applications: [
    "Agricultural water transfer",
    "Domestic water supply",
    "Garden & lawn irrigation",
    "Industrial fluid transfer",
    "Light commercial water supply",
    "Water tank filling",
    "HVAC circulation"
  ],
  salientFeatures: [
    "Single-shaft monoblock design — no alignment required",
    "Compact footprint for easy installation",
    "Cast iron body with CED coating for corrosion resistance",
    "Dynamically balanced impeller for low vibration",
    "Mechanical seal with carbon vs. ceramic faces",
    "Class F insulation with thermal overload protection",
    "Wide voltage band operation",
    "Available in single-phase and three-phase variants",
    "Self-priming variants available on request"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor frame", material: "Cast iron / aluminium alloy" },
        { component: "Shaft", material: "Stainless steel SS-410 / EN-8 carbon steel" },
        { component: "Bearings", material: "Sealed roller ball bearings, deep groove" },
        { component: "Winding", material: "EC grade copper, dual-coat F class" },
        { component: "Thermal protection", material: "Built-in overload protector (single-phase)" },
        { component: "Cooling", material: "Fan-cooled external (TEFC)" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Pump casing", material: "Cast iron, CED coated" },
        { component: "Impeller", material: "Cast iron / brass / noryl, dynamically balanced" },
        { component: "Mechanical seal", material: "Carbon vs. ceramic, oil-resistant elastomer" },
        { component: "Suction & delivery ports", material: "Threaded BSP, cast iron" },
        { component: "Shaft sleeve", material: "Stainless steel SS-410 (where fitted)" },
        { component: "Fasteners", material: "Stainless steel SS-304" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/centrifugal-monoblock.png",
  drawingAlt: "Centrifugal monoblock pump — schematic side view",
  footnotes: [
    "Pump must be primed before starting; install foot valve on suction line.",
    "Maintain suction lift within rated limits to avoid cavitation."
  ]
};
