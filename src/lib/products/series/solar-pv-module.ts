import type { TechnicalSpec } from "../technical-specs";

export const solarPVModule: TechnicalSpec = {
  key: "solar-pv-module",
  title: "Solar PV Module (Mono-PERC / Bifacial)",
  shortLabel: "Solar PV Module",
  productPath: "/products/solar-pv-modules/solar-pv-module",
  family: "Solar",
  summary:
    "High-efficiency mono-PERC / bifacial solar PV modules engineered for solar pumping, rooftop, and ground-mount installations. ALMM-listed, IEC 61215 / IEC 61730 certified construction with 25-year linear performance warranty.",
  characteristics: [
    {
      label: "Module Power",
      units: [
        { unit: "Wp", value: "330 / 400 / 450 / 540 / 580 / 600 / 670" }
      ]
    },
    { label: "Cell Type", units: [{ unit: "—", value: "Mono-PERC / N-type TOPCon / Bifacial" }] },
    { label: "Module efficiency", units: [{ unit: "%", value: "Up to 22.5" }] },
    { label: "Vmp (max power V)", units: [{ unit: "V", value: "33 – 42 (model dependent)" }] },
    { label: "Imp (max power I)", units: [{ unit: "A", value: "10 – 17 (model dependent)" }] },
    { label: "Voc (open circuit V)", units: [{ unit: "V", value: "40 – 50" }] },
    { label: "Isc (short circuit I)", units: [{ unit: "A", value: "11 – 18" }] },
    { label: "Operating temperature", units: [{ unit: "°C", value: "-40 to +85" }] },
    { label: "Frame", units: [{ unit: "—", value: "Anodised aluminium alloy, corrosion resistant" }] },
    { label: "Glass", units: [{ unit: "—", value: "3.2 mm anti-reflective tempered low-iron" }] },
    { label: "Certification", units: [{ unit: "—", value: "IEC 61215 / IEC 61730 / IS 14286 / ALMM listed" }] },
    { label: "Warranty", units: [{ unit: "—", value: "12 years product / 25 years linear performance" }] }
  ],
  applications: [
    "Solar pumping systems",
    "Residential & commercial rooftop solar",
    "Utility-scale ground-mount solar power plants",
    "Off-grid & remote location electrification",
    "Solar street lighting",
    "Telecom tower power supply",
    "Hybrid solar-diesel systems"
  ],
  salientFeatures: [
    "Mono-PERC / TOPCon high-efficiency cells",
    "Half-cell / multi-busbar (MBB) design — lower internal losses",
    "Anti-PID, anti-LID treatment",
    "High module efficiency (up to 22.5%)",
    "Bifacial variant with up to 25% additional rear-side gain",
    "Excellent low-light performance (Vmp curve)",
    "Salt-mist & ammonia corrosion resistance (IEC 61701 / 62716)",
    "Hail-impact resistance (25 mm dia. at 23 m/s)",
    "Snow load 5400 Pa / wind load 2400 Pa",
    "MC4-compatible connectors with IP67 junction box"
  ],
  construction: [
    {
      title: "Cell & encapsulation",
      rows: [
        { component: "Cell technology", material: "Mono-PERC / N-type TOPCon (high efficiency)" },
        { component: "Cell layout", material: "Half-cut, multi-busbar (MBB) — 9 to 16 busbars" },
        { component: "Front encapsulation", material: "EVA / POE (UV-stable, anti-PID)" },
        { component: "Back encapsulation", material: "POE / EVA (bifacial: dual-glass)" },
        { component: "Back sheet", material: "TPT / TPO (bifacial: 2.0 mm tempered glass)" },
        { component: "Front glass", material: "3.2 mm anti-reflective tempered low-iron" }
      ]
    },
    {
      title: "Frame & junction box",
      rows: [
        { component: "Frame", material: "Anodised aluminium alloy, ≥30 mm thickness" },
        { component: "Junction box", material: "IP67 / IP68, with bypass diodes" },
        { component: "Connectors", material: "MC4-compatible, IP67 rated" },
        { component: "Cable", material: "PV1-F 4 mm² / 6 mm², 1000 V DC rated" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/solar-pv-module.svg",
  drawingAlt: "Solar PV module — front layout",
  footnotes: [
    "Always specify required wattage and module count; PV array Vmp must match controller MPPT window.",
    "For coastal / industrial sites, request salt-mist / ammonia-resistant variant (IEC 61701 / 62716 certified)."
  ]
};
