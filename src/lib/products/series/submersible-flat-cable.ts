import type { TechnicalSpec } from "../technical-specs";

export const submersibleFlatCable: TechnicalSpec = {
  key: "submersible-flat-cable",
  title: "Submersible Flat Cable (3-Core / 3-Core+E)",
  shortLabel: "Submersible Flat Cable",
  productPath: "/products/submersible-flat-cables/submersible-flat-cable",
  family: "Pipes & Cables",
  summary:
    "Submersible flat cable engineered for connection between submersible pump motors and surface control panels. EPR / XLPE insulation with PCP / heavy-duty PVC sheath provides reliable performance in submerged borewell water.",
  characteristics: [
    {
      label: "Cores",
      units: [
        { unit: "—", value: "3-core / 3-core + earth / 4-core" }
      ]
    },
    {
      label: "Conductor sizes",
      units: [
        { unit: "mm²", value: "1.5 / 2.5 / 4.0 / 6.0 / 10 / 16 / 25 / 35 / 50 / 70" }
      ]
    },
    { label: "Voltage rating", units: [{ unit: "V", value: "1100 (650/1100)" }] },
    { label: "Conductor material", units: [{ unit: "—", value: "Annealed copper, bunched / flexible (Class 5)" }] },
    { label: "Insulation", units: [{ unit: "—", value: "EPR (Ethylene Propylene Rubber) / XLPE" }] },
    { label: "Sheath", units: [{ unit: "—", value: "PCP (Polychloroprene / Neoprene) / heavy-duty PVC" }] },
    { label: "Operating temperature", units: [{ unit: "°C", value: "-20 to +90" }] },
    { label: "Standard", units: [{ unit: "—", value: "IS 9968 / IS 694 / IEC 60502" }] },
    { label: "Cable shape", units: [{ unit: "—", value: "Flat (parallel cores) for column-mount routing" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "V3 / V4 / V5 / V6 / V8 submersible pump motors, Borewell installations"
        }
      ]
    }
  ],
  applications: [
    "V3 / V4 / V5 / V6 / V8 submersible pump motor cabling",
    "Borewell pump installations (vertical drop)",
    "Sewage submersible pump cabling",
    "Dewatering submersible pump cabling",
    "Solar submersible pump systems",
    "Industrial submersible motor installations"
  ],
  salientFeatures: [
    "Flat parallel construction — easy column-mount routing without twisting",
    "EPR / XLPE insulation — high dielectric strength, heat resistance",
    "PCP / heavy-duty PVC sheath — abrasion, oil, water resistance",
    "Flexible Class 5 copper conductor — fatigue resistant in long drops",
    "Suitable for permanent submersion in clean borewell water",
    "Factory-sealed gland-end on motor side (in pumpset assembly)",
    "Hot-shrinkable / cold-applied joint kits for field splices",
    "Conforms to IS 9968 / IS 694",
    "Black sheath standard (custom colours on request)",
    "Distance markings every metre for asset traceability"
  ],
  construction: [
    {
      title: "Cable construction",
      rows: [
        { component: "Conductor", material: "Annealed copper, Class 5 flexible (per IEC 60228)" },
        { component: "Insulation", material: "EPR (Ethylene Propylene Rubber) / XLPE" },
        { component: "Inner sheath", material: "PVC filler / rubber tape" },
        { component: "Outer sheath", material: "PCP (Neoprene) / heavy-duty PVC, oil & abrasion resistant" },
        { component: "Cores arrangement", material: "Flat parallel (3-core / 3-core + earth)" },
        { component: "Identification", material: "Coloured insulation: R-Y-B (3φ); Brown/Blue/Green-Yellow (E)" }
      ]
    },
    {
      title: "Performance",
      rows: [
        { component: "Voltage rating", material: "650 / 1100 V AC" },
        { component: "Operating temperature", material: "-20 °C to +90 °C (continuous)" },
        { component: "Insulation resistance", material: "≥ 100 MΩ-km at 20 °C" },
        { component: "High voltage test", material: "3000 V AC for 5 min (factory)" },
        { component: "Bend radius", material: "12 × cable OD minimum" },
        { component: "Standards", material: "IS 9968 / IS 694 / IEC 60502" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/submersible-cable.svg",
  drawingAlt: "Submersible flat cable — cross-section",
  footnotes: [
    "Select cable size to keep voltage drop ≤ 3% at pump full-load current over total drop length.",
    "Use heat-shrink / cold-shrink jointing kits for field splices; never use insulation tape alone in submerged service."
  ]
};
