import type { TechnicalSpec } from "../technical-specs";

export const stainlessSteelPump: TechnicalSpec = {
  key: "stainless-steel-pump",
  title: "Stainless Steel Submersible Pump",
  shortLabel: "Stainless Steel Pump",
  productPath: "/products/stainless-steel-pumps/stainless-steel-submersible-pump",
  family: "Pumps",
  summary:
    "Premium stainless steel submersible pump engineered for corrosion resistance in saline / coastal water, mineral-rich groundwater, and chemically aggressive applications. SS 304 or SS 316 wetted parts on request.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 30" },
        { unit: "kW", value: "0.37 to 22" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "3 to 40" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "10 to 350" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "30 to 1000" }] },
    {
      label: "Bore size",
      units: [
        { unit: "mm", value: "100 / 125 / 150" },
        { unit: "inch", value: "4 / 5 / 6" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Wetted parts", units: [{ unit: "—", value: "SS 304 (std) / SS 316 (on request)" }] },
    { label: "Liquid temp", units: [{ unit: "°C", value: "Up to 40" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Coastal & saline water, Mineral-rich groundwater, RO feed, Solar pumping, Food & pharma"
        }
      ]
    }
  ],
  applications: [
    "Coastal & saline groundwater pumping",
    "Mineral-rich / hard water sources",
    "Reverse osmosis (RO) feed pumping",
    "Solar pumping in remote areas",
    "Food, pharma, & potable water supply",
    "Domestic & municipal supply where corrosion is a concern",
    "Light chemical / process water transfer (compatibility-dependent)"
  ],
  salientFeatures: [
    "All wetted hydraulic parts in SS 304 (SS 316 optional)",
    "Stamped & laser-welded construction — no castings in wetted path",
    "Polished surface for low friction and easy cleaning",
    "Sand-resistant impellers with floating clearance",
    "Built-in non-return valve at discharge",
    "Submersible motor with hermetic seal and SS body",
    "Suitable for potable water (NSF-compliant materials available)",
    "Lightweight design — typically 20–30% lighter than CI equivalents",
    "Designed for water with chloride content up to 250 ppm (SS 316: higher)"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Motor type", material: "Submersible water-filled / oil-filled" },
        { component: "Motor body", material: "Stainless steel SS-304" },
        { component: "Shaft", material: "Stainless steel SS-420 / SS-431" },
        { component: "Thrust bearing", material: "Carbon vs. SS, water lubricated" },
        { component: "Stator winding", material: "F class insulated PVC, EC copper" },
        { component: "Diaphragm", material: "High nitrile butyl rubber" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Outer shell", material: "Stainless steel SS-304 / SS-316 (stamped)" },
        { component: "Impellers", material: "Stainless steel SS-304 / SS-316 (stamped, dynamically balanced)" },
        { component: "Diffusers", material: "Stainless steel SS-304 / SS-316" },
        { component: "Wear rings", material: "Engineering polymer / SS — replaceable" },
        { component: "Suction strainer", material: "Stainless steel SS-304 perforated" },
        { component: "Non-return valve", material: "Stainless steel SS-304 with NBR seat" },
        { component: "Pump shaft", material: "Stainless steel SS-410 / SS-431" },
        { component: "Coupling", material: "Stainless steel SS-410" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v4-borewell-submersible.png",
  drawingAlt: "Stainless steel submersible pump — schematic",
  footnotes: [
    "Specify chloride / TDS content, pH, and free CO₂ for correct grade selection (SS 304 vs SS 316 vs duplex).",
    "For potable water duty, request NSF / WRAS material certification at RFQ stage."
  ]
};
