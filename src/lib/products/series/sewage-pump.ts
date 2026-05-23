import type { TechnicalSpec } from "../technical-specs";

export const sewageSubmersiblePump: TechnicalSpec = {
  key: "sewage-submersible-pump",
  title: "Sewage Submersible Pump",
  shortLabel: "Sewage Submersible Pump",
  productPath: "/products/sewage-pumps/sewage-submersible-pump",
  family: "Pumps",
  summary:
    "Heavy-duty sewage submersible pump engineered for solids handling, fibrous material, and contaminated liquids in municipal, industrial, and commercial wastewater duty. Non-clog vortex / channel impeller options with reinforced wear plate.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "1 to 50" },
        { unit: "kW", value: "0.75 to 37" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "5 to 50" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "200 to 5000" }] },
    { label: "Solids handling", units: [{ unit: "mm", value: "Up to 80 mm spherical (model dependent)" }] },
    {
      label: "Discharge size",
      units: [
        { unit: "mm", value: "50 / 65 / 80 / 100 / 150" },
        { unit: "inch", value: "2 / 2½ / 3 / 4 / 6" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "1450 / 2900" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "F (IP68 enclosure)" }] },
    { label: "Liquid temp", units: [{ unit: "°C", value: "Up to 40 (continuous); up to 60 (intermittent)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Municipal sewage, STP / ETP, Drainage, Basement sumps, Industrial effluent, Slurry"
        }
      ]
    }
  ],
  applications: [
    "Municipal sewage lift stations",
    "Sewage treatment plants (STP)",
    "Effluent treatment plants (ETP)",
    "Basement drainage & sump pits",
    "Industrial effluent handling",
    "Storm-water drainage",
    "Slurry pumping (light)",
    "Construction site dewatering with debris"
  ],
  salientFeatures: [
    "Non-clog vortex / single-channel / multi-channel impeller options",
    "Reinforced cast iron wear plate at suction for long life",
    "Heavy-duty IP68 enclosure with double mechanical seal",
    "Oil chamber between seals for cooling and leak detection",
    "Thermal sensors embedded in motor windings",
    "Moisture sensor in seal chamber (alarm-grade variants)",
    "Float / level-switch friendly operation",
    "Cast iron impeller dynamically balanced",
    "Chain-lift handle for guided rail installation",
    "Submersible flat cable, factory-sealed"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Aluminium / copper pressure die-cast" },
        { component: "Motor housing", material: "Cast iron, CED coated" },
        { component: "Shaft", material: "Stainless steel SS-420 / SS-410" },
        { component: "Mechanical seal", material: "Tandem (upper carbon vs. ceramic + lower SiC vs. SiC) in oil bath" },
        { component: "Bearings", material: "Sealed deep-groove + thrust ball bearings" },
        { component: "Thermal protection", material: "PTC / thermistor in windings" },
        { component: "Cable", material: "Submersible flat cable, factory-sealed gland" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Volute / pump body", material: "Cast iron, CED coated" },
        { component: "Impeller", material: "Cast iron — vortex / single-channel / multi-channel" },
        { component: "Wear plate", material: "Cast iron, hardened / replaceable" },
        { component: "Discharge connection", material: "Cast iron flanged (PN10) or threaded" },
        { component: "Handle", material: "Stainless steel SS 304 / cast iron" },
        { component: "Fasteners", material: "Stainless steel SS 304 / SS 316" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/sewage-submersible.png",
  drawingAlt: "Sewage submersible pump — schematic cross-section",
  footnotes: [
    "Specify max solid size, liquid composition, temperature, and operating mode (continuous / intermittent).",
    "For corrosive effluent, advise pH and chemistry for material upgrade (SS 316 / duplex)."
  ]
};
