import type { TechnicalSpec } from "../technical-specs";

export const horizontalSplitCasePump: TechnicalSpec = {
  key: "horizontal-split-case",
  title: "Horizontal Split-Case Pump",
  shortLabel: "Horizontal Split-Case Pump",
  productPath: "/products/horizontal-pumps/horizontal-split-case-pump",
  family: "Pumps",
  summary:
    "Horizontal axially-split casing centrifugal pump engineered for high-flow water transfer in municipal, fire-fighting (UL/FM ready), HVAC chilled water, and industrial cooling duties. Double-suction impeller for low NPSH and balanced axial thrust.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "10 to 500" },
        { unit: "kW", value: "7.5 to 375" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "20 to 200" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "500 to 30000" }] },
    {
      label: "Suction",
      units: [
        { unit: "mm", value: "80 to 500" },
        { unit: "inch", value: "3 to 20" }
      ]
    },
    {
      label: "Delivery",
      units: [
        { unit: "mm", value: "65 to 400" },
        { unit: "inch", value: "2½ to 16" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "1450 / 980 / 740" }] },
    { label: "Construction", units: [{ unit: "—", value: "Single-stage, double-suction, axially split casing" }] },
    { label: "Flange standard", units: [{ unit: "—", value: "PN10 / PN16 / ANSI 125–250" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Municipal water supply, Fire fighting (UL/FM), HVAC chilled water, Industrial cooling, Mining, Power plants"
        }
      ]
    }
  ],
  applications: [
    "Municipal water supply pumping stations",
    "Fire-fighting mains (UL/FM hydraulics on request)",
    "HVAC chilled / hot water mainlines for large complexes",
    "Industrial cooling water for plants & process",
    "Mining make-up water & dewatering mainlines",
    "Power plant condenser cooling water",
    "Irrigation & flood-control distribution"
  ],
  salientFeatures: [
    "Axially-split casing — rotating element removed without disturbing piping",
    "Double-suction impeller — balanced axial thrust + low NPSH",
    "Mechanical seal as standard, soft-packed gland optional",
    "Robust shaft with replaceable shaft sleeves at seal area",
    "Heavy bronze / SS wear rings at impeller hub & eye",
    "Suitable for clean water up to 80 °C (higher with metallurgy upgrade)",
    "Mounted on common baseplate with spacer coupling",
    "Pressure-tested above maximum allowable working pressure (MAWP)",
    "VFD-friendly construction available"
  ],
  construction: [
    {
      title: "Hydraulic details",
      rows: [
        { component: "Casing", material: "Cast iron / ductile iron / cast steel (option)" },
        { component: "Impeller", material: "Bronze / SS 304 / SS 316 — closed double-suction" },
        { component: "Wear rings", material: "Bronze / hardened SS — replaceable" },
        { component: "Shaft", material: "Carbon steel EN-8 / SS 410" },
        { component: "Shaft sleeves", material: "Stainless steel SS 410 / SS 316 — replaceable" },
        { component: "Mechanical seal", material: "Carbon vs. SiC, EPDM / Viton secondary" },
        { component: "Bearings", material: "Heavy-duty grease / oil lubricated ball bearings" },
        { component: "Coupling", material: "Spacer coupling for back pull-out service" }
      ]
    },
    {
      title: "Mounting & accessories",
      rows: [
        { component: "Baseplate", material: "Fabricated mild steel with drain pan, drilled" },
        { component: "Coupling guard", material: "Mild steel, painted" },
        { component: "Gland water piping", material: "Stainless steel tubing (for gland-packed variants)" },
        { component: "Pressure / vacuum gauges", material: "Optional on suction & discharge" },
        { component: "Painting", material: "Industrial epoxy enamel finish" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/horizontal-split-case.svg",
  drawingAlt: "Horizontal split-case pump — schematic side view",
  footnotes: [
    "Specify duty point, liquid temperature, fluid SG, and starting method for accurate selection.",
    "For fire-fighting duty, advise applicable code (NFPA 20, UL/FM, IS 12469) at RFQ stage."
  ]
};
