import type { TechnicalSpec } from "../technical-specs";

export const solarStructure: TechnicalSpec = {
  key: "solar-structure",
  title: "Solar Mounting Structure (Hot-Dip Galvanised)",
  shortLabel: "Solar Mounting Structure",
  productPath: "/products/solar-structures/solar-mounting-structure",
  family: "Solar",
  summary:
    "Hot-dip galvanised solar mounting structure engineered for ground-mount, rooftop, and tracker-mount PV arrays. Designed for 25-year service life, MNRE-compliant, with wind/snow load engineering for all Indian zones.",
  characteristics: [
    { label: "Type", units: [{ unit: "—", value: "Ground-mount / Rooftop / Manual-tilt / Dual-axis tracker" }] },
    { label: "Material", units: [{ unit: "—", value: "Mild steel (MS) hot-dip galvanised / Aluminium alloy" }] },
    { label: "Galvanising thickness", units: [{ unit: "µm", value: "≥ 80 (MS), per IS 4759 / ASTM A123" }] },
    { label: "Coating life", units: [{ unit: "Years", value: "25+ in normal atmosphere" }] },
    { label: "Wind load design", units: [{ unit: "m/s", value: "Up to 55 (per IS 875 Part-3 / IS 1893)" }] },
    { label: "Snow load design", units: [{ unit: "Pa", value: "Up to 5400 (Himalayan high-altitude zones)" }] },
    { label: "Module tilt", units: [{ unit: "Degrees", value: "Fixed 15–30° / Seasonal manual / Dual-axis" }] },
    { label: "Module orientation", units: [{ unit: "—", value: "Portrait / Landscape (configurable)" }] },
    { label: "Module count per table", units: [{ unit: "—", value: "1 to 100+ modules (configurable)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Solar pumping, Rooftop, Utility ground-mount, Floating solar, Carport, Hybrid"
        }
      ]
    }
  ],
  applications: [
    "Solar pumping system mounting (PV array)",
    "Residential & commercial rooftop solar",
    "Utility-scale ground-mount solar plants",
    "Solar carports & canopies",
    "Floating solar (with corrosion upgrade)",
    "Manual-tilt seasonal adjustment installations",
    "Single & dual-axis solar trackers"
  ],
  salientFeatures: [
    "Hot-dip galvanised (≥ 80 µm) for 25+ year corrosion protection",
    "Bolted modular design — no on-site welding required",
    "Wind / snow load engineered to IS 875 / IS 1893",
    "MNRE / PM-KUSUM compliant design",
    "Pre-galvanised after fabrication — no exposed steel at cuts",
    "Designed for clamp-mount or bolt-through mounting",
    "Foundation options: pile-driven / pre-cast concrete / screw-pile",
    "Standardised module clamps (mid + end) included",
    "Cable management trays integrated (option)",
    "Custom tilt angles & dual-axis tracker variants available"
  ],
  construction: [
    {
      title: "Primary frame",
      rows: [
        { component: "Main rafter / purlin", material: "MS hot-rolled C / Z section, hot-dip galvanised" },
        { component: "Vertical post", material: "MS hot-rolled H section / pipe, hot-dip galvanised" },
        { component: "Diagonal bracing", material: "MS hot-rolled angle / C section, hot-dip galvanised" },
        { component: "Base plate", material: "MS plate ≥ 10 mm, hot-dip galvanised, foundation-bolted" },
        { component: "Foundation", material: "RCC pile / pre-cast block / screw-pile (site-dependent)" }
      ]
    },
    {
      title: "Module clamps & hardware",
      rows: [
        { component: "Mid clamp", material: "Aluminium alloy, ≥40 mm thick, anodised" },
        { component: "End clamp", material: "Aluminium alloy, anodised" },
        { component: "Fasteners", material: "Stainless steel SS 304 / SS 316 (high-corrosion zones)" },
        { component: "Earthing strap", material: "Galvanised steel / copper, drilled for module clamp" },
        { component: "Cable tray", material: "Hot-dip galvanised perforated tray (optional)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/solar-structure.svg",
  drawingAlt: "Solar mounting structure — typical isometric / ground-mount frame",
  footnotes: [
    "Specify site wind zone, snow load, module size and weight at RFQ stage for accurate engineering.",
    "For coastal / industrial sites, recommend SS 316 hardware and additional protective coatings."
  ]
};
