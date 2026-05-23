/**
 * SUPERTECH Openwell Submersible Pump
 *
 * Direct openwell / sump installation submersible pumping for agriculture,
 * domestic, and light industrial water supply.
 */

import type { TechnicalSpec } from "../technical-specs";

export const openwellSubmersible: TechnicalSpec = {
  key: "openwell-submersible",
  title: "Openwell Submersible Pump",
  shortLabel: "Openwell Submersible Pump",
  productPath: "/products/openwell-submersible-pumps/openwell-submersible-pump",
  family: "Pumps",
  summary:
    "Compact openwell submersible pumps engineered for direct installation in open wells, sumps, and reservoirs. Reliable performance for agriculture, domestic, light commercial, and industrial water supply with corrosion-resistant construction.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 7.5" },
        { unit: "kW", value: "0.37 to 5.5" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "1 to 4" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "6 to 50" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "60 to 1500" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "25 / 32 / 50 / 65" },
        { unit: "inch", value: "1 / 1¼ / 2 / 2½" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ) / 380–415 (3Φ)" }] },
    { label: "Installation", units: [{ unit: "—", value: "Direct openwell / sump" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Agriculture, Domestic, Industrial, Sprinkler, Light commercial water supply" }
      ]
    }
  ],
  applications: [
    "Open well & sump water supply",
    "Agricultural irrigation",
    "Domestic & residential water supply",
    "Light commercial water supply",
    "Industrial cooling water",
    "Sprinkler irrigation",
    "Water tank filling"
  ],
  salientFeatures: [
    "Direct openwell / sump installation — no priming required",
    "Compact, low-weight design for easy handling",
    "Water-lubricated mechanical seal for long life",
    "Stainless steel motor body for corrosion resistance",
    "Class F insulation with thermal overload protection",
    "Robust cast-iron pump casing with CED coating",
    "Single and three-phase variants available",
    "Quiet, vibration-free operation"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor body", material: "Stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Mechanical seal", material: "Carbon vs. ceramic, water lubricated" },
        { component: "Winding", material: "EC grade copper, dual-coat F class" },
        { component: "Bearings", material: "Sealed roller ball bearings" },
        { component: "Thermal protection", material: "Built-in thermal overload protector" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Pump casing", material: "Cast iron, CED coated" },
        { component: "Impeller", material: "Cast iron / brass / noryl options" },
        { component: "Suction strainer", material: "Stainless steel mesh" },
        { component: "Pump shaft", material: "Stainless steel SS-410" },
        { component: "Wearing rings", material: "Abrasion-resistant stainless steel" },
        { component: "Fasteners", material: "Stainless steel SS-304" },
        { component: "Cable", material: "Submersible-grade flat cable (3-core)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/openwell-submersible.png",
  drawingAlt: "Openwell submersible pump — schematic cross-section",
  footnotes: [
    "Pump must remain fully submerged in water during operation.",
    "Vertical or horizontal installation possible depending on model variant."
  ]
};
