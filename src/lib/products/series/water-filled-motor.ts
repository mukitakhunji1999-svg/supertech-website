/**
 * SUPERTECH Water Filled (WL) Rewindable Submersible Motor.
 *
 * Data sourced from the SUPERTECH 50-60 Hz Submersible Motors Export Catalogue
 * (refer to /images/drawings/catalogue/motor-catalogue-*.png for full
 * cross-sections, exploded views and performance tables across the 3" – 8"
 * frame range).
 */

import type { TechnicalSpec } from "../technical-specs";

export const waterFilledSubmersibleMotor: TechnicalSpec = {
  key: "water-filled-motor",
  title: "Water Filled Submersible Motor (3'' – 8'')",
  shortLabel: "Water Filled Motor",
  productPath: "/products/water-filled-motors/water-filled-submersible-motor",
  family: "Motors",
  summary:
    "Rewindable Water Lubricated (WL) submersible motor manufactured to IS:9283 / IEC 60034. Full frame range 3'' to 8'' covering 0.37 kW (0.5 HP) through 75 kW (100 HP), with polywrapped or PVC enamelled winding, stainless steel motor body, and carbon vs. SS thrust bearing for long service life. Suitable for vertical and horizontal installation in clean borewell water with cooling flow ≥ 0.2 m/s.",
  characteristics: [
    {
      label: "Rated Output",
      units: [
        { unit: "HP", value: "0.5 – 100" },
        { unit: "kW", value: "0.37 – 75" }
      ]
    },
    {
      label: "Frame Size (OD)",
      units: [
        { unit: "inch", value: "3'' / 4'' / 5'' / 6'' / 7'' / 8''" },
        { unit: "mm", value: "75 / 100 / 125 / 150 / 175 / 200" }
      ]
    },
    {
      label: "Voltage",
      units: [
        { unit: "1Φ 50 Hz", value: "220 – 230 V (up to 4 kW on 4'')" },
        { unit: "3Φ 50 Hz", value: "380 / 400 / 415 V" },
        { unit: "3Φ 60 Hz", value: "230 / 380 / 460 V" }
      ]
    },
    {
      label: "Speed",
      units: [
        { unit: "50 Hz", value: "2810 – 2900 RPM" },
        { unit: "60 Hz", value: "3490 – 3520 RPM" }
      ]
    },
    { label: "Frequency", units: [{ unit: "Hz", value: "50 / 60" }] },
    { label: "Coupling", units: [{ unit: "—", value: "NEMA standard splined shaft" }] },
    { label: "Cooling Flow", units: [{ unit: "m/s", value: "≥ 0.2 (water across stator)" }] },
    { label: "Max Water Temperature", units: [{ unit: "°C", value: "35" }] },
    { label: "Max Immersion Depth", units: [{ unit: "m", value: "350" }] },
    { label: "Starts per Hour", units: [{ unit: "—", value: "30 (Max.)" }] },
    { label: "Voltage Tolerance", units: [{ unit: "%", value: "+6 / -10" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "B / F — Polywrapped winding" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP68 — fully submerged" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous" }] },
    { label: "Mounting", units: [{ unit: "—", value: "Vertical / Horizontal" }] },
    { label: "Coolant", units: [{ unit: "—", value: "Clear borewell water" }] },
    {
      label: "Cable",
      units: [
        { unit: "—", value: "3 m, 3-core or 4-core (extension on demand)" }
      ]
    }
  ],
  applications: [
    "V3 / V4 / V5 / V6 / V8 borewell submersible pump sets",
    "Agricultural & irrigation pumping",
    "Domestic & municipal water supply",
    "Industrial water supply, cooling towers & process",
    "High-rise building pressure boosting",
    "Solar submersible pumping (50 Hz line variant)",
    "OEM pump-set assembly",
    "Project installations & EPC supply"
  ],
  salientFeatures: [
    "Rewindable construction across the full 3'' – 8'' range",
    "Coupling dimensions to NEMA standard — interchangeable with most pump bowls",
    "Polywrapped winding wire (PVC winding on demand)",
    "Stainless steel motor shaft (SS 420 / SS 431)",
    "Stainless steel stator shell — non-magnetic, corrosion resistant",
    "Cast iron upper / lower housings with epoxy paint or SS cladding",
    "Carbon vs. SS 420 thrust bearing — water lubricated, long life",
    "Diaphragm + pressure cup pressure compensation",
    "Single-phase variants: capacitor start and run",
    "Three-phase variants: DOL up to 7.5 HP, star-delta above",
    "Class B insulation with F-class temperature rise headroom",
    "IS:9283 / IEC 60034 standards compliant",
    "Wide voltage tolerance (+6% / -10%)",
    "Designed for 30 starts/hour service",
    "Cable: 3 m factory length, 3-core or 4-core, brazed lugs, sealed gland"
  ],
  construction: [
    {
      title: "3'' & 4'' Motor (Single Phase — small frame)",
      rows: [
        { component: "Cable (3-core / 4-core)", material: "EPR" },
        { component: "Mechanical Seal", material: "Ceramic vs. Carbon" },
        { component: "Upper Housing", material: "Cast Iron (FG-200) with SS cladding" },
        { component: "Motor Shaft", material: "Stainless Steel SS 420 / SS 431" },
        { component: "Motor Shell", material: "Stainless Steel SS 304" },
        { component: "Lower Housing", material: "Cast Iron (FG-200) with SS cladding" },
        { component: "Bearing Bush", material: "L.T.B-4 (2% Ni) bronze" },
        { component: "Thrust Bearing Set", material: "Carbon vs. SS 420" },
        { component: "Pressure Cup", material: "Cast Iron (FG-200)" },
        { component: "Spring", material: "SS 304 (spring steel)" },
        { component: "Motor Base / Base Plate", material: "Engineering Plastic / Cast Iron" },
        { component: "Diaphragm / Oil seal", material: "High Nitrile Butyl Rubber (HBR / NBR)" },
        { component: "All Hardware", material: "Stainless Steel SS 304" }
      ]
    },
    {
      title: "5'', 6'', 7'' & 8'' Motor (Three Phase — large frame)",
      rows: [
        { component: "Cable (3-core / 4-core)", material: "EPR / PVC" },
        { component: "Mechanical Seal", material: "Ceramic vs. Carbon" },
        { component: "Adopter", material: "Cast Iron (FG-200)" },
        { component: "Upper Housing", material: "Cast Iron (FG-200)" },
        { component: "Bearing Bush", material: "Carbon" },
        { component: "Stator Body / Motor Shell", material: "Stainless Steel SS 304" },
        { component: "Rotor Shaft", material: "Stainless Steel SS 431" },
        { component: "Lower Housing", material: "Cast Iron (FG-200) / Cladded" },
        { component: "Thrust Bearing Set", material: "Carbon / SS 420" },
        { component: "Pressure Cup", material: "Cast Iron (FG-200)" },
        { component: "Spring", material: "SS 304 (Spring Steel)" },
        { component: "Motor Base", material: "Cast Iron (FG-200)" },
        { component: "T-Bolt set (Upper & Lower)", material: "Stainless Steel SS 304 with EPDM / NBR O-rings" },
        { component: "Cable Grommet", material: "EPDM with SS 304 washer" },
        { component: "Diaphragm", material: "High Nitrile Butyl Rubber (HBR)" },
        { component: "All Hardware", material: "Stainless Steel SS 304" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/catalogue/motor-catalogue-17.png",
  drawingAlt:
    "6'' water-lubricated rewindable submersible motor — Motor-A & Motor-B cross-sections, dimensional drawing",
  catalogueDrawings: [
    {
      src: "/images/drawings/catalogue/motor-catalogue-04.png",
      alt: "3'' water lubricated rewindable motor — technical specifications and cross-section",
      label: "3'' WL motor — specs & cross-section"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-05.png",
      alt: "3'' water lubricated rewindable motor — exploded view and parts list",
      label: "3'' WL motor — exploded view"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-11.png",
      alt: "4'' water lubricated rewindable motor — technical specifications and cross-section",
      label: "4'' WL motor — specs & cross-section"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-12.png",
      alt: "4'' water lubricated rewindable motor — single-phase 50 Hz performance tables",
      label: "4'' WL — single-phase 50 Hz data"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-13.png",
      alt: "4'' water lubricated rewindable motor — three-phase 50 Hz performance tables",
      label: "4'' WL — three-phase 50 Hz data"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-15.png",
      alt: "5'' water lubricated rewindable motor — technical specifications and cross-section",
      label: "5'' WL motor — specs & cross-section"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-17.png",
      alt: "6'' water lubricated rewindable motor — Motor-A and Motor-B cross-sections",
      label: "6'' WL — Motor-A & Motor-B drawings"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-21.png",
      alt: "6'' Prime Motors performance data at 50 Hz with exploded view",
      label: "6'' Prime — perf. data & exploded view"
    },
    {
      src: "/images/drawings/catalogue/motor-catalogue-25.png",
      alt: "7'' Aqualite rewindable submersible motor — 50, 60, 70 HP exploded view and performance data",
      label: "7'' Aqualite — 50/60/70 HP data"
    }
  ],
  footnotes: [
    "Maintain motor fully submerged in clean borewell water; refill water through filling plug before installation.",
    "Single phase available up to ~4 kW on 4'' frame; three phase above 5.5 HP. Star-delta starting recommended above 10 HP.",
    "Cooling flow ≥ 0.2 m/s across stator is mandatory — undersize boreholes require flow sleeves.",
    "Motors with other voltage and frequency ratings (specially e.g. 50 Hz / 1Φ 110 V, 60 Hz / 1Φ 220 V) are available on specific demand.",
    "Refer to /images/drawings/catalogue/motor-catalogue-*.png for the full SUPERTECH 50-60 Hz export catalogue."
  ]
};
