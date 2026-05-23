/**
 * SUPERTECH V8 — 200 mm (8") Borewell Submersible Pump Set
 *
 * Heavy industrial 8" submersible pumping for large infrastructure projects,
 * municipal mainlines, irrigation networks, and high-flow industrial duty.
 */

import type { TechnicalSpec } from "../technical-specs";

export const v8BorewellSubmersible: TechnicalSpec = {
  key: "v8-borewell-submersible",
  title: "V8 — 200 mm (8\") Borewell Submersible Pump Set",
  shortLabel: "V8 Borewell Submersible Pump",
  productPath: "/products/borewell-submersible-pumps/v8-borewell-submersible-pump",
  family: "Pumps",
  summary:
    "Heavy industrial 8-inch borewell submersible pump set engineered for large infrastructure water supply, municipal mainlines, irrigation networks, and high-flow industrial duty. Mixed-flow hydraulics optimised for sustained discharge with long-life rotating parts.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "15 to 125" },
        { unit: "kW", value: "11 to 93" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "2 to 15" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "30 to 450" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "1000 to 4500" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "80 / 100 / 125" },
        { unit: "inch", value: "3 / 4 / 5" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "380–415 (3Φ)" }] },
    { label: "Bore", units: [{ unit: "mm", value: "Minimum 200 mm" }] },
    { label: "Flow type", units: [{ unit: "—", value: "Mixed (radial available on request)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Municipal mainlines, Government water schemes, Large irrigation, EPC infrastructure, Mining"
        }
      ]
    }
  ],
  applications: [
    "Large municipal water mainlines",
    "Government water schemes & PMKSY projects",
    "Large-scale irrigation networks",
    "EPC infrastructure water supply",
    "Mining and process dewatering",
    "Industrial cooling water for plants"
  ],
  salientFeatures: [
    "Mixed-flow hydraulics for high-discharge, moderate-head duty",
    "Heavy industrial construction with SS 304 motor body",
    "Long-life carbon vs. stainless steel thrust bearing",
    "CED-coated cast iron components for corrosion resistance",
    "Engineered for star-delta / soft-starter / VFD starting",
    "Robust SS hardware throughout",
    "Built-in NRV for back-pressure handling on long pipelines",
    "Designed for sustained continuous duty cycles"
  ],
  construction: [
    {
      title: "Motor details",
      rows: [
        { component: "Stator", material: "Vacuum impregnated, F class insulation" },
        { component: "Rotor", material: "Copper bar with end ring brazing" },
        { component: "Motor body", material: "Non-magnetic stainless steel SS-304" },
        { component: "Motor shaft", material: "Stainless steel SS-420" },
        { component: "Thrust bearing", material: "Heavy-duty carbon vs. stainless steel (water lubricated)" },
        { component: "Winding", material: "Multi-layer PVC insulated wire, F class" },
        { component: "Oil seal", material: "Nitrile butyl rubber" },
        { component: "Diaphragm", material: "High nitrile butyl rubber" },
        { component: "Journal bearings", material: "Gun-metal bush, centrifugal moulded" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Check valve housing", material: "Cast iron with CED coating" },
        { component: "Outer shell", material: "Stainless steel SS-304" },
        { component: "Bowl", material: "Cast iron with CED coating" },
        { component: "Impeller", material: "Cast iron, dynamically balanced" },
        { component: "Pump shaft", material: "Stainless steel SS-410" },
        { component: "Pump sleeve", material: "Stainless steel SS-410" },
        { component: "Wearing rings", material: "Abrasion-resistant stainless steel" },
        { component: "Suction casing", material: "Heavy-duty cast iron with SS strainer" },
        { component: "Coupling", material: "Stainless steel SS-410" },
        { component: "Non-return valve", material: "Cast iron heavy-duty" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v8-borewell-submersible.png",
  drawingAlt: "V8 8-inch borewell submersible pump set — schematic cross-section",
  footnotes: [
    "Three-phase only. Star-delta, soft-starter, or VFD strongly recommended for safe starting.",
    "Performance figures are typical for the class; project duty matching via RFQ."
  ]
};
