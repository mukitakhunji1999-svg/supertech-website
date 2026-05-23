/**
 * SUPERTECH V3 — 75 / 80 mm (3") Borewell Submersible Pump Set
 *
 * Series covers Oil Filled (OF) and Water Filled (WF) motor variants,
 * suitable for 75 mm or 80 mm borewells. Performance at 2880 RPM,
 * 200–240 V single phase, 50 Hz AC supply.
 */

import type { TechnicalSpec } from "../technical-specs";

export const v3BorewellSubmersible: TechnicalSpec = {
  key: "v3-borewell-submersible",
  title: "V3 — 75 & 80 mm (3\") Borewell Submersible Pump Set",
  shortLabel: "V3 Borewell Submersible Pump",
  productPath: "/products/borewell-submersible-pumps/v3-borewell-submersible-pump",
  family: "Pumps",
  summary:
    "Compact 3-inch borewell submersible pump set for narrow borewells, engineered for sprinkler / drip irrigation, civil and domestic water supply, pressure boosting, and small fire fighting systems. Oil Filled (OF) and Water Filled (WF) motor variants.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 1.5" },
        { unit: "kW", value: "0.37 to 1.1" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "7 to 30" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "9 to 78" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "20 to 104" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "32" },
        { unit: "inch", value: "1¼" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2880" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ)" }] },
    { label: "Bore", units: [{ unit: "mm", value: "75 mm or 80 mm" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Domestic, Farm, Gardens, Sprinkler/Drip irrigation, Pressure boosting" }
      ]
    }
  ],
  applications: [
    "Domestic & municipal water supply",
    "Sprinkler & drip irrigation",
    "Civil and industrial water supply",
    "Pressure boosting systems",
    "Fire fighting systems",
    "Agricultural water supply",
    "Fountains & gardens",
    "High-rise buildings"
  ],
  salientFeatures: [
    "Dynamically balanced rotating parts for noise-free, vibration-free operation",
    "Enamel-winding electrical design improves efficiency and reduces electricity consumption (OF)",
    "Compact body for narrow borewells; lightweight construction for easy installation",
    "CNC-machined components for reliable performance and long life",
    "Wide voltage band operation",
    "Oil Filled motors use food-grade insulating oil for bearing lubrication and improved thermal conductivity",
    "Water Filled motors with multi-layer PVC insulated winding and German-technology carbon thrust bearing",
    "Starts easily at low voltage",
    "Non-Return Valve (NRV) reduces thrust load from back pressure",
    "Glass-filled noryl impeller and bowl for strong sand resistance",
    "CI parts coated with CED for corrosion resistance and durability"
  ],
  operatingSpecs: [
    { label: "Bore size", value: "Suitable for 75 mm or 80 mm borewell (min. bore dia. 75 mm / 80 mm)" },
    { label: "Speed", value: "2880 RPM" },
    { label: "Supply", value: "200–240 V single phase" },
    { label: "Frequency", value: "50 Hz AC" },
    { label: "Motor OD (max)", value: "72 mm" },
    { label: "Pump OD (max)", value: "72 mm (75 mm bore) • 77 mm (80 mm bore)" },
    { label: "Standard outlet size", value: "32 mm" },
    { label: "Flow type", value: "Radial" },
    { label: "Motor configurations", value: "Oil Filled (OF) and Water Filled (WF)" },
    { label: "Power range", value: "0.37 kW (0.5 HP) to 0.94 kW (1.25 HP)" }
  ],
  construction: [
    {
      title: "Motor details — Oil Filled (OF)",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor body", material: "Non-magnetic stainless steel" },
        { component: "Bearing", material: "Roller ball bearing / heavy-duty angular contact bearing" },
        { component: "Mechanical seal", material: "High-grade mechanical seal for zero leakage and shaft-wear protection" },
        { component: "Winding", material: "Dual-coat EC grade copper wire with F class insulation" },
        { component: "Cable sealing", material: "Water-protecting device preventing foreign matter ingress" },
        { component: "Pressure diaphragm", material: "Contains oil expansion inside motor, prevents cooling-oil defeat" }
      ]
    },
    {
      title: "Motor details — Water Filled (WF)",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Copper" },
        { component: "Motor body", material: "Non-magnetic stainless steel" },
        {
          component: "Thrust bearing",
          material: "Self-aligned carbon vs. stainless steel thrust bearing (German technology)"
        },
        { component: "Winding", material: "Multi-layer PVC insulated wire" },
        { component: "Cable sealing", material: "Nitrile rubber bush locking to prevent foreign particle ingress" },
        {
          component: "Journal bearings",
          material: "Gun-metal bush with 2% nickel, centrifugal molding process"
        },
        { component: "Pressure diaphragm", material: "Contains water expansion, prevents cooling-water defeat" }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Bowl", material: "Glass-filled noryl" },
        { component: "Impeller", material: "Glass-filled abrasion-resistant noryl" },
        { component: "Shaft", material: "Stainless steel (OF) / chrome steel (WF)" },
        { component: "Wearing rings", material: "High-quality abrasion-resistant stainless steel" },
        {
          component: "Suction casing",
          material: "Heavy-duty casting with SS strainer for protection against foreign particles"
        },
        {
          component: "Non-return valve",
          material: "Reduces back-pressure thrust on switch-off for longer pump life"
        }
      ]
    }
  ],
  performance: [
    {
      title: "V3 OF & WF — Series VSO 30 / VS 30 (75 mm borewell, 32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 17, 20, 25, 30, 35, 40, 50],
      rows: [
        { model: "VSO 30 / VS 30", stages: 14, kw: 0.55, hp: 0.75, discharge: [40, 33, 32, 30, 26.5, 22, 17, 10] },
        { model: "VSO 30 / VS 30", stages: 18, kw: 0.75, hp: 1.0, discharge: [52, 42, 41, 39, 34, 27, 21, 13] },
        { model: "VSO 30 / VS 30", stages: 20, kw: 0.75, hp: 1.0, discharge: [58, 47, 46.5, 42, 38, 30.5, 24, 15] },
        { model: "VSO 30 / VS 30", stages: 25, kw: 0.75, hp: 1.0, discharge: [73, 59, 58.1, 53, 48, 38, 30, 19] },
        { model: "VSO 30 / VS 30", stages: 36, kw: 0.94, hp: 1.25, discharge: [104, 85, 82, 76, 68, 53.5, 41, 24] }
      ]
    },
    {
      title: "V3 OF & WF — Series VSO 30H / VS 30H (80 mm borewell, 32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 24, 32, 38, 48, 60, 72, 84, 90],
      rows: [
        { model: "VSO 30H / VS 30H", stages: 10, kw: 0.75, hp: 1.0, discharge: [50, 44, 42.5, 40, 37.5, 32, 26, 17, 12] },
        { model: "VSO 30H / VS 30H", stages: 12, kw: 0.75, hp: 1.0, discharge: [60, 53, 50, 47.5, 45, 38, 31, 19, 13] },
        { model: "VSO 30H / VS 30H", stages: 15, kw: 0.94, hp: 1.25, discharge: [75, 66, 63, 60.5, 56, 48, 39, 24, 17] }
      ]
    },
    {
      title: "V3 OF & WF — Series VSO 30HH / VS 30HH (80 mm borewell, 32 mm outlet, radial, high-head)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 10, 20, 30, 40, 50, 60, 66],
      rows: [
        { model: "VSO 30HH / VS 30HH", stages: 10, kw: 0.37, hp: 0.5, discharge: [50, 48, 45, 40, 33, 24, 17, 8] },
        { model: "VSO 30HH / VS 30HH", stages: 15, kw: 0.55, hp: 0.75, discharge: [75, 72, 67, 60, 50, 36, 25, 12] },
        { model: "VSO 30HH / VS 30HH", stages: 20, kw: 0.75, hp: 1.0, discharge: [100, 96, 89, 80, 67, 48, 33, 16] }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v3-borewell-submersible.png",
  drawingAlt: "V3 3-inch borewell submersible pump set — schematic cross-section",
  footnotes: [
    "Performance data is approximate at 2880 RPM under nominal supply voltage. Site duty point selection via RFQ recommended.",
    "Discharge values are in LPM (litres per minute); head values are in metres."
  ]
};
