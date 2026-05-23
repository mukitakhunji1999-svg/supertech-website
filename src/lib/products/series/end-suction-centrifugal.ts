import type { TechnicalSpec } from "../technical-specs";

export const endSuctionCentrifugal: TechnicalSpec = {
  key: "end-suction-centrifugal",
  title: "End-Suction Centrifugal Pump",
  shortLabel: "End-Suction Centrifugal Pump",
  productPath: "/products/centrifugal-pumps/end-suction-centrifugal-pump",
  family: "Pumps",
  summary:
    "Industrial-class end-suction centrifugal pump engineered to ISO 2858 / DIN 24255 hydraulics for industrial water transfer, HVAC circulation, fire-fighting, and EPC project duty. Back-pull-out design for easy maintenance.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "2 to 100" },
        { unit: "kW", value: "1.5 to 75" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "10 to 150" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "100 to 8000" }] },
    {
      label: "Suction",
      units: [
        { unit: "mm", value: "40 to 200" },
        { unit: "inch", value: "1½ to 8" }
      ]
    },
    {
      label: "Delivery",
      units: [
        { unit: "mm", value: "32 to 150" },
        { unit: "inch", value: "1¼ to 6" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "1450 / 2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Construction", units: [{ unit: "—", value: "Single-stage, end-suction, top discharge, back pull-out" }] },
    { label: "Flange standard", units: [{ unit: "—", value: "PN10 / PN16 / ANSI 125–150" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Industrial water transfer, HVAC, Fire fighting, Cooling tower, Booster, EPC mainlines"
        }
      ]
    }
  ],
  applications: [
    "Industrial water transfer & process water",
    "HVAC chilled / hot water circulation",
    "Fire-fighting (with UL/FM hydraulics on request)",
    "Cooling tower circulation",
    "Pressure boosting in tall buildings & plants",
    "EPC infrastructure mainlines",
    "Municipal water supply"
  ],
  salientFeatures: [
    "ISO 2858 / DIN 24255 hydraulic dimensions",
    "Back-pull-out design — service without disturbing piping",
    "Replaceable wear rings for sustained efficiency",
    "Cast iron casing with closed-vane impeller",
    "Mechanical seal as standard, gland packing optional",
    "Oversized shaft for stiffness — low deflection at seal area",
    "Suitable for clean water up to 100 °C (high-temperature variants available)",
    "VFD-friendly when ordered with VPI motors",
    "Available in CI, bronze-fitted, and all-SS configurations"
  ],
  construction: [
    {
      title: "Hydraulic details",
      rows: [
        { component: "Casing", material: "Cast iron / ductile iron / SS 304 / SS 316 options" },
        { component: "Impeller", material: "Cast iron / bronze / SS 304 / SS 316 — closed type" },
        { component: "Wear rings", material: "Bronze / SS — replaceable" },
        { component: "Shaft", material: "Carbon steel EN-8 / SS 410 / SS 316" },
        { component: "Shaft sleeve", material: "Stainless steel SS 410 / SS 316" },
        { component: "Mechanical seal", material: "Carbon vs. SiC / TC, EPDM / Viton secondary" },
        { component: "Bearings", material: "Deep-groove ball bearings, grease lubricated" },
        { component: "Coupling", material: "Pin-bush / spacer coupling on common baseplate" }
      ]
    },
    {
      title: "Mounting & accessories",
      rows: [
        { component: "Baseplate", material: "Mild steel fabricated / cast iron, drilled for foundation" },
        { component: "Coupling guard", material: "Mild steel pressed, painted" },
        { component: "Pressure gauge", material: "Suction & discharge gauges (optional)" },
        { component: "Drain plug", material: "Pump casing & bearing housing drain ports" },
        { component: "Painting", material: "Industrial epoxy enamel finish" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/centrifugal-monoblock.svg",
  drawingAlt: "End-suction centrifugal pump — typical schematic",
  footnotes: [
    "Specify duty point (flow, head), liquid type, temperature, NPSHa, and starting method for accurate selection.",
    "Standard direction of rotation is clockwise viewed from drive end; specify if anti-clockwise required."
  ]
};
