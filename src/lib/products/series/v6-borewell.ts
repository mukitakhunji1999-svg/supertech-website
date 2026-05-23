/**
 * SUPERTECH V6 — 150 mm (6") Borewell Submersible Pump Set
 *
 * Heavy-duty 6" submersible pumping for large-scale agriculture, irrigation
 * mainlines, infrastructure, and high-flow industrial duty.
 */

import type { TechnicalSpec } from "../technical-specs";

export const v6BorewellSubmersible: TechnicalSpec = {
  key: "v6-borewell-submersible",
  title: "V6 — 150 mm (6\") Borewell Submersible Pump Set",
  shortLabel: "V6 Borewell Submersible Pump",
  productPath: "/products/borewell-submersible-pumps/v6-borewell-submersible-pump",
  family: "Pumps",
  summary:
    "Heavy-duty 6-inch borewell submersible pump set engineered for large-scale agricultural mainlines, municipal infrastructure, EPC water supply, and high-flow industrial duty. Multi-stage radial and mixed-flow hydraulics for sustained head and discharge.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "5 to 50" },
        { unit: "kW", value: "3.7 to 37" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "2 to 25" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "30 to 500" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "300 to 2400" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "65 / 80 / 100" },
        { unit: "inch", value: "2½ / 3 / 4" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "380–415 (3Φ)" }] },
    { label: "Bore", units: [{ unit: "mm", value: "Minimum 150 mm" }] },
    { label: "Flow type", units: [{ unit: "—", value: "Radial / Mixed" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Large-scale irrigation, Municipal mainlines, EPC water supply, Industrial cooling, Mining"
        }
      ]
    }
  ],
  applications: [
    "Large-scale agricultural irrigation mainlines",
    "Municipal & infrastructure water supply",
    "EPC project water transfer",
    "Industrial cooling & process water",
    "Mining dewatering",
    "Pressure boosting for large compounds",
    "Government tender projects"
  ],
  salientFeatures: [
    "Heavy-duty hydraulics for sustained high-flow duty",
    "Multi-stage radial and mixed-flow design options",
    "Robust SS 304 motor body and SS 410 rotating parts",
    "Carbon vs. stainless steel water-lubricated thrust bearing",
    "Cast iron / glass-filled noryl impeller and bowl options",
    "Wide voltage tolerance for variable supply conditions",
    "Built-in NRV for back-pressure handling",
    "Suitable for star-delta and soft-starter starting",
    "CED-coated CI components for corrosion resistance"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Copper bar / aluminium pressure die-cast" },
        { component: "Motor body", material: "Non-magnetic stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Thrust bearing", material: "Heavy-duty carbon vs. stainless steel (water lubricated)" },
        { component: "Winding", material: "Multi-layer PVC insulated wire, F class" },
        { component: "Oil seal", material: "Nitrile butyl rubber" },
        { component: "Diaphragm", material: "High nitrile butyl rubber" },
        { component: "Journal bearings", material: "Gun-metal bush with 2% nickel (centrifugal moulded)" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Check valve housing", material: "Cast iron" },
        { component: "Outer shell", material: "Stainless steel SS-304" },
        { component: "Bowl", material: "Cast iron / glass-filled noryl" },
        { component: "Impeller", material: "Cast iron / glass-filled abrasion-resistant noryl" },
        { component: "Pump shaft", material: "Stainless steel SS-410" },
        { component: "Pump sleeve", material: "Stainless steel SS-410" },
        { component: "Wearing rings", material: "Abrasion-resistant stainless steel" },
        { component: "Suction casing", material: "Heavy-duty cast iron with SS strainer" },
        { component: "Coupling", material: "Stainless steel SS-410" },
        { component: "Non-return valve", material: "Cast iron with stainless internals" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v6-borewell-submersible.png",
  drawingAlt: "V6 6-inch borewell submersible pump set — schematic cross-section",
  footnotes: [
    "Three-phase only. Star-delta or soft-starter strongly recommended above 15 HP.",
    "Performance ranges are typical industry figures; project duty point matching via RFQ."
  ]
};
