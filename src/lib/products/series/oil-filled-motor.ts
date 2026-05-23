/**
 * SUPERTECH Oil Lubricated (OL) Rewindable Submersible Motor.
 *
 * Data sourced from the SUPERTECH 50-60 Hz Submersible Motors Export
 * Catalogue, 3'' and 4'' Oil Lubricated sections. See
 * /images/drawings/catalogue/motor-catalogue-02.png and
 * /images/drawings/catalogue/motor-catalogue-07.png for cross-sections.
 */

import type { TechnicalSpec } from "../technical-specs";

export const oilFilledSubmersibleMotor: TechnicalSpec = {
  key: "oil-filled-motor",
  title: "Oil Filled (Oil Lubricated) Submersible Motor (3'' / 4'')",
  shortLabel: "Oil Filled Motor",
  productPath: "/products/oil-filled-motors/oil-filled-submersible-motor",
  family: "Motors",
  summary:
    "Rewindable Oil Lubricated (OL) submersible motor manufactured to IS:9283 / IEC 60034 in 3'' and 4'' frames. Dual-coat enamelled copper winding immersed in food-grade non-toxic die-electric oil for superior heat dissipation, suitable for vertical, horizontal and inclined installation. Single phase up to 2.20 kW (3 HP) and three phase up to 5.5 kW (7.5 HP) on 4'' frame.",
  characteristics: [
    {
      label: "Rated Output",
      units: [
        { unit: "HP", value: "0.5 – 7.5" },
        { unit: "kW", value: "0.37 – 5.5" }
      ]
    },
    {
      label: "Frame Size (OD)",
      units: [
        { unit: "inch", value: "3'' / 4''" },
        { unit: "mm", value: "75 / 100" }
      ]
    },
    {
      label: "Voltage",
      units: [
        { unit: "1Φ 50 Hz", value: "220 – 230 V" },
        { unit: "1Φ 60 Hz", value: "230 V" },
        { unit: "3Φ 50 Hz", value: "380 / 400 / 415 V" },
        { unit: "3Φ 60 Hz", value: "230 / 380 / 460 V" }
      ]
    },
    {
      label: "Speed",
      units: [
        { unit: "50 Hz", value: "2840 – 2900 RPM" },
        { unit: "60 Hz", value: "3450 – 3520 RPM" }
      ]
    },
    { label: "Frequency", units: [{ unit: "Hz", value: "50 / 60" }] },
    { label: "Coupling", units: [{ unit: "—", value: "NEMA standard splined shaft" }] },
    { label: "Max Oil Temperature", units: [{ unit: "°C", value: "35" }] },
    { label: "Max Immersion Depth", units: [{ unit: "m", value: "100 (3'') / 250 (4'')" }] },
    { label: "Starts per Hour", units: [{ unit: "—", value: "30 (Max.)" }] },
    { label: "Voltage Tolerance", units: [{ unit: "%", value: "+6 / -10" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "B — Dual-coat enamelled winding" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP58" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous, high restart capability" }] },
    { label: "Mounting", units: [{ unit: "—", value: "Vertical / Horizontal / Inclined" }] },
    {
      label: "Coolant",
      units: [
        { unit: "—", value: "Die-electric non-toxic oil (food-grade compatible)" }
      ]
    },
    {
      label: "Cable",
      units: [
        { unit: "—", value: "3 m, 3-core or 4-core (extension on demand)" }
      ]
    }
  ],
  applications: [
    "V3 / V4 borewell submersible pump sets",
    "Horizontal & inclined installation duty (lakes, ponds, tanks)",
    "Solar submersible pumping (small / medium farms)",
    "Locations with frequent starts (≤30/hour)",
    "Domestic & low-head agricultural pumping",
    "OEM pump-set assembly",
    "Project installations & EPC supply"
  ],
  salientFeatures: [
    "Oil-bath lubrication — superior heat dissipation, low winding temperature",
    "Suitable for any installation orientation (vertical / horizontal / inclined)",
    "Higher restart frequency capability than water-filled equivalents",
    "Dual-coat enamelled copper winding for slim profile and high efficiency",
    "Hermetically sealed — oil contained by mechanical seal + epoxy paint",
    "Stainless steel motor shaft (SS 420) and SS 304 motor shell — corrosion resistant",
    "Cast iron upper / lower brackets with epoxy paint",
    "Single-phase variants: capacitor start and run",
    "Three-phase variants: DOL up to 5 HP, star-delta above",
    "Class B insulation, IP58 protection",
    "IS:9283 / IEC 60034 standards compliant",
    "Wide voltage tolerance (+6% / -10%)",
    "Designed for 30 starts/hour service",
    "Coolant: die-electric non-toxic oil — safe for drinking water borehole environments"
  ],
  construction: [
    {
      title: "3'' Oil Lubricated Motor",
      rows: [
        { component: "Cable (3-core / 4-core)", material: "PVC / EPR" },
        { component: "Mechanical Seal", material: "Ceramic vs. Carbon" },
        { component: "Upper Housing", material: "Cast Iron (FG-200) with epoxy paint" },
        { component: "Rotor Shaft", material: "Stainless Steel SS 420" },
        { component: "Motor Shell", material: "Stainless Steel SS 304" },
        { component: "Lower Housing", material: "Cast Iron (FG-200) with epoxy paint" },
        { component: "Pressure Cup", material: "High Nitrile Butyl Rubber (HBR)" },
        { component: "Motor Base Plate", material: "Stainless Steel SS 304" },
        { component: "Diaphragm / Oil Seal", material: "Nitrile Butyl Rubber (NBR)" },
        { component: "All Hardware", material: "Stainless Steel SS 304" }
      ]
    },
    {
      title: "4'' Oil Lubricated Motor",
      rows: [
        { component: "Cable (3-core / 4-core)", material: "EPR / PVC" },
        { component: "Mechanical Seal", material: "Ceramic vs. Carbon" },
        { component: "Upper Housing", material: "Cast Iron (FG-200) with SS cladding" },
        { component: "Rotor Shaft", material: "Stainless Steel SS 420" },
        { component: "Motor Shell", material: "Stainless Steel SS 304" },
        { component: "Lower Housing", material: "Cast Iron (FG-200) with SS cladding" },
        { component: "Pressure Cup", material: "High Nitrile Butyl Rubber (HBR)" },
        { component: "Motor Base", material: "Engineering Plastic / Cast Iron" },
        { component: "Thrust Bearing Set", material: "Carbon / SS 420" },
        { component: "Diaphragm / Oil Seal", material: "Nitrile Butyl Rubber (NBR)" },
        { component: "All Hardware", material: "Stainless Steel SS 304" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/catalogue/motor-catalogue-02.png",
  drawingAlt:
    "3'' oil lubricated rewindable submersible motor — cross-section, parts list and weight table",
  catalogueDrawings: [
    {
      src: "/images/drawings/catalogue/motor-catalogue-02.png",
      alt: "3'' Oil Lubricated Rewindable Motor — specifications and cross-section",
      label: "3'' OL motor — specs & cross-section"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-03.png",
      alt: "3'' Oil Lubricated motor — exploded view and parts list",
      label: "3'' OL motor — exploded view"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-06.png",
      alt: "3'' Single Phase 60 Hz motor performance — CSR & CSCR tables",
      label: "3'' — 60 Hz CSR / CSCR data"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-07.png",
      alt: "4'' Oil Lubricated Rewindable Motor — specifications and cross-section (Motor-A & Motor-B)",
      label: "4'' OL motor — specs & cross-section"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-08.png",
      alt: "4'' Single Phase 50 Hz motor performance — CSR & CSCR tables (220-230 V)",
      label: "4'' OL — single-phase 50 Hz data"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-09.png",
      alt: "4'' Three Phase 50 Hz motor performance (380-415 V) + single-phase 60 Hz data",
      label: "4'' OL — three-phase 50 Hz data"
    }
  ],
  footnotes: [
    "Use only the supplied die-electric non-toxic oil. Check oil level before installation and after major service.",
    "For drinking water duty, food-grade white mineral oil is mandatory — confirm with our technical team before ordering.",
    "Motors with other voltage and frequency ratings (e.g. 110 V / 60 Hz single phase) are available on specific demand.",
    "Refer to /images/drawings/catalogue/motor-catalogue-*.png for the full SUPERTECH 50-60 Hz export catalogue."
  ]
};
