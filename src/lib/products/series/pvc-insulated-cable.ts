import type { TechnicalSpec } from "../technical-specs";

export const pvcInsulatedCable: TechnicalSpec = {
  key: "pvc-insulated-cable",
  title: "PVC Insulated Cable (Single-Core / Multi-Core)",
  shortLabel: "PVC Insulated Cable",
  productPath: "/products/pvc-insulated-cables/pvc-insulated-cable",
  family: "Pipes & Cables",
  summary:
    "PVC insulated power & control cable engineered for fixed-wiring in industrial, infrastructure, and building electrical installations. Single-core and multi-core variants with copper / aluminium conductors. Conforms to IS 694 / IS 1554.",
  characteristics: [
    {
      label: "Cores",
      units: [
        { unit: "—", value: "1 / 2 / 3 / 3.5 / 4 / Multi-core (5–61)" }
      ]
    },
    {
      label: "Conductor sizes",
      units: [
        { unit: "mm²", value: "1.5 / 2.5 / 4.0 / 6.0 / 10 / 16 / 25 / 35 / 50 / 70 / 95 / 120 / 150 / 185 / 240 / 300 / 400" }
      ]
    },
    { label: "Voltage rating", units: [{ unit: "V", value: "650/1100 (LT) — 1.1 kV grade" }] },
    { label: "Conductor", units: [{ unit: "—", value: "Annealed copper / aluminium (Class 1 / Class 2 / Class 5)" }] },
    { label: "Insulation", units: [{ unit: "—", value: "PVC Type-A (general) / Type-C (HR) / FRLS" }] },
    { label: "Sheath", units: [{ unit: "—", value: "PVC ST1 / ST2 / FRLS" }] },
    { label: "Armouring (option)", units: [{ unit: "—", value: "Galvanised steel wire / strip armour" }] },
    { label: "Operating temperature", units: [{ unit: "°C", value: "Up to 70 (PVC-A) / 85 (PVC-C / HR)" }] },
    { label: "Standards", units: [{ unit: "—", value: "IS 694 (single-core) / IS 1554 Part-1 (LT XLPE/PVC)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Industrial wiring, Building electrical, Distribution, Control, Submains, EPC"
        }
      ]
    }
  ],
  applications: [
    "Industrial machine power wiring",
    "Building electrical (final circuits & sub-mains)",
    "LT distribution from sub-stations",
    "Control wiring inside panels",
    "EPC infrastructure projects",
    "Pumping station power & control",
    "Solar AC interconnection (FRLS variant)",
    "DG set & UPS power cabling"
  ],
  salientFeatures: [
    "Annealed copper / aluminium conductor — high conductivity",
    "PVC Type-A insulation (general) or Type-C heat-resistant",
    "FRLS (flame retardant low smoke) variant available",
    "Unarmoured / armoured options for installation method flexibility",
    "Inner sheath (multi-core) provides cross-talk reduction",
    "Outer sheath colour-coded (black standard; red / orange / blue available)",
    "Sequential metre markings for asset traceability",
    "Conforms to IS 694 (single-core) / IS 1554 Part-1 (multi-core)",
    "Type-test certified at NABL-accredited labs",
    "Available in coils (1.5–6 mm²) and drums (10 mm² and above)"
  ],
  construction: [
    {
      title: "Cable construction",
      rows: [
        { component: "Conductor", material: "Annealed copper / aluminium, Class 1 / 2 / 5 (IEC 60228)" },
        { component: "Insulation", material: "PVC Type-A (90 °C short-circuit) / Type-C (HR) / FRLS" },
        { component: "Inner sheath", material: "PVC extruded (multi-core); colour: black" },
        { component: "Armouring (option)", material: "Galvanised steel wire / strip armour (per IS 3975)" },
        { component: "Outer sheath", material: "PVC ST1 / ST2 — UV stabilised, RoHS" },
        { component: "Core identification", material: "Coloured cores: R-Y-B + Black neutral + Green-Yellow earth" }
      ]
    },
    {
      title: "Performance",
      rows: [
        { component: "Voltage grade", material: "650 / 1100 V AC (1.1 kV LT)" },
        { component: "Continuous temperature", material: "70 °C (PVC-A) / 85 °C (PVC-C HR)" },
        { component: "Short-circuit temperature", material: "160 °C (PVC) / 250 °C (XLPE option) for 5 sec" },
        { component: "Insulation resistance", material: "≥ 100 MΩ-km at 20 °C" },
        { component: "Bend radius", material: "12 × OD (unarmoured) / 15 × OD (armoured)" },
        { component: "Fire performance (FRLS)", material: "IS 10810 Part-58/61/62 — flame retardant low smoke" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/power-cable.png",
  drawingAlt: "PVC insulated armoured cable — cross-section",
  footnotes: [
    "Select cable size based on rated current, voltage drop, and short-circuit withstand for the circuit.",
    "Use cable glands (BW / CW type) and lugs of matching size; do not exceed bending radius."
  ]
};
