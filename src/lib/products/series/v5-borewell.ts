/**
 * SUPERTECH V5 — 125 mm (5") Borewell Submersible Pump Set
 *
 * Industry-class 5" submersible pumping (radial & mixed flow) for medium-scale
 * agriculture, infrastructure, and industrial duty.
 */

import type { TechnicalSpec } from "../technical-specs";

export const v5BorewellSubmersible: TechnicalSpec = {
  key: "v5-borewell-submersible",
  title: "V5 — 125 mm (5\") Borewell Submersible Pump Set",
  shortLabel: "V5 Borewell Submersible Pump",
  productPath: "/products/borewell-submersible-pumps/v5-borewell-submersible-pump",
  family: "Pumps",
  summary:
    "Robust 5-inch borewell submersible pump set engineered for medium-scale agriculture, infrastructure, and industrial duty. Radial and mixed-flow hydraulics deliver stable performance across moderate-to-high heads with multi-stage configurations.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "2 to 25" },
        { unit: "kW", value: "1.5 to 18.5" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "3 to 30" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "20 to 350" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "100 to 900" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "50 / 65 / 80" },
        { unit: "inch", value: "2 / 2½ / 3" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "380–415 (3Φ)" }] },
    { label: "Bore", units: [{ unit: "mm", value: "Minimum 125 mm" }] },
    { label: "Flow type", units: [{ unit: "—", value: "Radial / Mixed" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Agriculture, Municipal supply, Industrial, Fire fighting, Mining dewatering" }
      ]
    }
  ],
  applications: [
    "Medium-scale agricultural irrigation",
    "Municipal water supply",
    "Industrial process water",
    "Fire fighting & pressure boosting",
    "Mining dewatering",
    "Infrastructure & EPC projects"
  ],
  salientFeatures: [
    "Radial and mixed-flow hydraulic options for varied duty points",
    "Multi-stage configurations for high-head selection",
    "Non-magnetic SS 304 motor body for corrosion resistance",
    "Heavy-duty thrust bearing for sustained axial load",
    "Glass-filled noryl / cast iron impeller and bowl options",
    "Wide voltage band operation",
    "Built-in non-return valve (NRV) to handle back-pressure thrust",
    "SS 304 hardware throughout for corrosion resistance",
    "CED-coated CI parts for durability"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Copper / aluminium pressure die-cast" },
        { component: "Motor body", material: "Non-magnetic stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Thrust bearing", material: "Self-aligned carbon vs. stainless steel (water lubricated)" },
        { component: "Winding", material: "Multi-layer PVC insulated wire / EC grade copper (F class)" },
        { component: "Oil seal", material: "Nitrile butyl rubber" },
        { component: "Diaphragm", material: "High nitrile butyl rubber" },
        { component: "Journal bearings", material: "Gun-metal bush (2% nickel)" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Check valve housing", material: "Cast iron" },
        { component: "Outer shell", material: "Stainless steel SS-304" },
        { component: "Bowl", material: "Glass-filled noryl / cast iron" },
        { component: "Impeller", material: "Glass-filled abrasion-resistant noryl / cast iron" },
        { component: "Pump shaft", material: "Stainless steel SS-410" },
        { component: "Pump sleeve", material: "Stainless steel SS-410" },
        { component: "Wearing rings", material: "Abrasion-resistant stainless steel" },
        { component: "Suction casing", material: "Heavy-duty cast iron with SS strainer" },
        { component: "Coupling", material: "Stainless steel SS-410" },
        { component: "Non-return valve", material: "Cast iron with stainless internals" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v5-borewell-submersible.png",
  drawingAlt: "V5 5-inch borewell submersible pump set — schematic cross-section",
  footnotes: [
    "Three-phase only. Star-delta starting recommended above 10 HP.",
    "Performance ranges are typical industry figures; project duty point matching via RFQ."
  ]
};
