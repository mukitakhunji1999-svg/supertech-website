import type { TechnicalSpec } from "../technical-specs";

export const oilFilledSubmersibleMotor: TechnicalSpec = {
  key: "oil-filled-motor",
  title: "Oil Filled Submersible Motor",
  shortLabel: "Oil Filled Motor",
  productPath: "/products/oil-filled-motors/oil-filled-submersible-motor",
  family: "Motors",
  summary:
    "Oil Filled (OF) submersible motor designed to IS:9283 / IEC 60034 standards. Mineral-oil bath delivers superior lubrication and heat dissipation, suitable for inclined / horizontal installation and frequent restart duty.",
  characteristics: [
    {
      label: "Rated Output",
      units: [
        { unit: "HP", value: "0.5 to 25" },
        { unit: "kW", value: "0.37 to 18.5" }
      ]
    },
    {
      label: "OD Size",
      units: [
        { unit: "mm", value: "75 / 100 / 125 / 150" },
        { unit: "inch", value: "3 / 4 / 5 / 6" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2880 / 2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ up to 3 HP) / 380–415 (3Φ)" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "F (155 °C)" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP68 — fully submerged" }] },
    { label: "Filling", units: [{ unit: "—", value: "Food-grade mineral / synthetic oil" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous, high restart capability" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Borewell pumpsets, Horizontal/inclined installation, Solar pumping, OEM" }
      ]
    }
  ],
  applications: [
    "Borewell submersible pump sets",
    "Horizontal & inclined installation duty",
    "Solar submersible pumping",
    "Locations with frequent starts (≤30/hour)",
    "OEM pumpset assembly",
    "Project installations & EPC supply"
  ],
  salientFeatures: [
    "Oil-bath lubrication — superior heat dissipation",
    "Suitable for any installation orientation (vertical / horizontal / inclined)",
    "Higher restart frequency capability than water-filled equivalents",
    "Hermetically sealed — oil contained by double mechanical seal",
    "Enamel-coated copper winding — slim profile, high efficiency",
    "SS 304 non-magnetic motor body for corrosion resistance",
    "Class F insulation with Class B temperature rise",
    "Wide voltage tolerance (±10%)",
    "Robust thrust bearing for axial pump load",
    "Pressure compensation via diaphragm or breather valve"
  ],
  construction: [
    {
      title: "Electrical details",
      rows: [
        { component: "Stator winding", material: "Dual-coat enamel copper, F class insulation" },
        { component: "Stator core", material: "Electrical-grade silicon steel laminations" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Insulation", material: "Class F (155 °C), vacuum impregnated, oil-compatible" },
        { component: "Cable", material: "Submersible flat cable, factory-sealed gland" }
      ]
    },
    {
      title: "Mechanical details",
      rows: [
        { component: "Motor body", material: "Non-magnetic stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Thrust bearing", material: "Carbon vs. stainless steel — oil lubricated" },
        { component: "Journal bearings", material: "Sintered bronze / gun-metal — oil lubricated" },
        { component: "Mechanical seal", material: "Double — carbon vs. ceramic + SiC vs. SiC" },
        { component: "Oil chamber", material: "Cast iron / SS — oil bath with sight level" },
        { component: "Housing set", material: "Cast iron with CED coating" },
        { component: "Oil seals", material: "Viton / nitrile butyl rubber" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/submersible-motor.svg",
  drawingAlt: "Oil filled submersible motor — schematic",
  footnotes: [
    "Use only specified food-grade / synthetic oil. Check oil level before installation and after major service.",
    "For drinking water duty, food-grade white mineral oil is mandatory."
  ]
};
