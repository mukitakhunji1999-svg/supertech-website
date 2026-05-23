import type { TechnicalSpec } from "../technical-specs";

export const dewateringSubmersiblePump: TechnicalSpec = {
  key: "dewatering-submersible-pump",
  title: "Dewatering Submersible Pump",
  shortLabel: "Dewatering Pump",
  productPath: "/products/dewatering-pumps/dewatering-submersible-pump",
  family: "Pumps",
  summary:
    "Portable submersible dewatering pump engineered for construction sites, trenches, pits, mines, and emergency drainage. Wear-resistant impeller with elastomer-coated diffuser handles silty, abrasive water reliably.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "1 to 50" },
        { unit: "kW", value: "0.75 to 37" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "6 to 60" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "150 to 4500" }] },
    { label: "Solids handling", units: [{ unit: "mm", value: "Up to 15 mm (light solids / silt)" }] },
    {
      label: "Discharge size",
      units: [
        { unit: "mm", value: "50 / 65 / 80 / 100" },
        { unit: "inch", value: "2 / 2½ / 3 / 4" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP68 — fully submersible" }] },
    { label: "Cable", units: [{ unit: "—", value: "Submersible flat cable, factory-sealed, 20 m std" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Construction dewatering, Mining, Tunneling, Flood drainage, Pit dewatering, Emergency"
        }
      ]
    }
  ],
  applications: [
    "Construction site dewatering",
    "Foundation pits & trenches",
    "Mining dewatering",
    "Tunneling & underground works",
    "Flood emergency drainage",
    "Pit drainage in factories",
    "Sand & gravel quarries",
    "Borewell development & test pumping"
  ],
  salientFeatures: [
    "Compact, portable design with lift handle",
    "Top-discharge configuration for easy hose connection",
    "Wear-resistant high-chrome impeller for abrasive water",
    "Elastomer-coated diffuser — extended service life on silty fluids",
    "Double mechanical seal in oil bath",
    "Thermal protection in motor windings",
    "Continuous-duty rated, S1",
    "Cooling jacket allows operation in low-water-level conditions",
    "Lightweight stainless steel / aluminium body options",
    "Rugged 20 m factory-sealed submersible cable"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor housing", material: "Stainless steel SS 304 / cast aluminium" },
        { component: "Shaft", material: "Stainless steel SS-420" },
        { component: "Mechanical seal", material: "Tandem (carbon vs. SiC + SiC vs. SiC) in oil bath" },
        { component: "Bearings", material: "Sealed deep-groove ball bearings" },
        { component: "Thermal protection", material: "Built-in thermistor / klixon" },
        { component: "Cable", material: "Submersible flat cable (3-core + earth) with strain relief" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Pump casing", material: "Cast iron / aluminium" },
        { component: "Impeller", material: "High-chrome cast iron / NiHard — wear resistant" },
        { component: "Diffuser", material: "Elastomer-coated steel / nitrile rubber" },
        { component: "Strainer", material: "Stainless steel SS 304 perforated" },
        { component: "Discharge elbow", material: "Cast iron / aluminium, threaded BSP or camlock" },
        { component: "Handle", material: "Stainless steel SS 304" },
        { component: "Fasteners", material: "Stainless steel SS 304" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/dewatering-submersible.svg",
  drawingAlt: "Dewatering submersible pump — schematic",
  footnotes: [
    "For highly abrasive duty (sand mining), specify high-chrome metallurgy at RFQ stage.",
    "Pump is rated for continuous duty when fully submerged; low-water-level operation up to inlet rating."
  ]
};
