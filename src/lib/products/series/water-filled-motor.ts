import type { TechnicalSpec } from "../technical-specs";

export const waterFilledSubmersibleMotor: TechnicalSpec = {
  key: "water-filled-motor",
  title: "Water Filled Submersible Motor",
  shortLabel: "Water Filled Motor",
  productPath: "/products/water-filled-motors/water-filled-submersible-motor",
  family: "Motors",
  summary:
    "Water Filled (WF) submersible motor designed to IS:9283 / IEC 60034 standards for use with borewell submersible pump sets. Water-lubricated thrust bearings deliver long service life with stable thermal performance.",
  characteristics: [
    {
      label: "Rated Output",
      units: [
        { unit: "HP", value: "0.5 to 50" },
        { unit: "kW", value: "0.37 to 37" }
      ]
    },
    {
      label: "OD Size",
      units: [
        { unit: "mm", value: "75 / 100 / 125 / 150 / 200" },
        { unit: "inch", value: "3 / 4 / 5 / 6 / 8" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2880 / 2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50 (60 Hz on request)" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ up to 3 HP) / 380–415 (3Φ)" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "F (155 °C, B class temperature rise)" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP68 — fully submerged" }] },
    { label: "Filling", units: [{ unit: "—", value: "Clean water with diaphragm pressure compensation" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "V3 / V4 / V5 / V6 / V8 borewell submersible pump sets, OEM pumpset assembly"
        }
      ]
    }
  ],
  applications: [
    "V3 / V4 / V5 / V6 / V8 borewell submersible pump sets",
    "OEM pumpset assembly",
    "Replacement of failed submersible motors",
    "Solar submersible (50 Hz line variant)",
    "Project installations & EPC supply"
  ],
  salientFeatures: [
    "Designed to IS:9283 / IEC 60034 standards",
    "Water-lubricated, water-cooled — no oil leakage risk",
    "Hermetically sealed stator with diaphragm pressure compensation",
    "Carbon vs. stainless steel thrust bearing — long service life",
    "Multi-layer PVC insulated winding wire (F class)",
    "SS 304 non-magnetic motor body for corrosion resistance",
    "Wide voltage tolerance (±10%)",
    "Suitable for restart frequency up to 20/hour",
    "Rewindable construction — service in the field",
    "Built-in mechanical seal isolates winding from borehole water"
  ],
  construction: [
    {
      title: "Electrical details",
      rows: [
        { component: "Stator winding", material: "Multi-layer PVC insulated wire, EC grade copper, F class" },
        { component: "Stator core", material: "Electrical-grade silicon steel laminations" },
        { component: "Rotor", material: "Aluminium pressure die-cast / copper bar" },
        { component: "Insulation", material: "Class F (155 °C), vacuum impregnated" },
        { component: "Cable", material: "Submersible flat cable, brazed lugs, heat-shrink sealed joint" }
      ]
    },
    {
      title: "Mechanical details",
      rows: [
        { component: "Motor body", material: "Non-magnetic stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Thrust bearing", material: "Carbon vs. stainless steel — water lubricated" },
        { component: "Journal bearings", material: "Gun-metal bush (2% nickel)" },
        { component: "Diaphragm", material: "High nitrile butyl rubber — pressure compensation" },
        { component: "Mechanical seal", material: "Carbon vs. ceramic / SiC" },
        { component: "Housing set / end shields", material: "Cast iron with CED coating" },
        { component: "Oil seal", material: "Nitrile butyl rubber" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/submersible-motor.png",
  drawingAlt: "Water filled submersible motor — schematic",
  footnotes: [
    "Maintain motor fully submerged in clean borewell water at all times. Refill water through filling plug before installation.",
    "Single phase available up to 3 HP; three phase above 3 HP. Star-delta starting recommended above 10 HP."
  ]
};
