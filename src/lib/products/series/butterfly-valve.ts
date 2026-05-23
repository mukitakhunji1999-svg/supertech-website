import type { TechnicalSpec } from "../technical-specs";

export const butterflyValve: TechnicalSpec = {
  key: "butterfly-valve",
  title: "Butterfly Valve (Wafer / Lug / Flanged)",
  shortLabel: "Butterfly Valve",
  productPath: "/products/butterfly-valves/butterfly-valve",
  family: "Valves",
  summary:
    "Concentric (resilient seated) and double-offset butterfly valves engineered for isolation and flow control in water, wastewater, HVAC, fire-fighting, and process duty. Lever, gear, electric, and pneumatic actuator options.",
  characteristics: [
    {
      label: "Nominal size (DN)",
      units: [
        { unit: "mm", value: "40 to 1200" },
        { unit: "inch", value: "1½ to 48" }
      ]
    },
    {
      label: "Pressure rating",
      units: [
        { unit: "—", value: "PN6 / PN10 / PN16 / PN25 / ANSI 125 / ANSI 150" }
      ]
    },
    { label: "Body", units: [{ unit: "—", value: "Cast iron (CI) / Ductile iron (DI) / Cast steel / SS 316" }] },
    { label: "Disc", units: [{ unit: "—", value: "DI / SS 304 / SS 316 / Bronze / Aluminium bronze" }] },
    { label: "Seat", units: [{ unit: "—", value: "EPDM (water) / NBR (oil) / Viton / PTFE-lined" }] },
    { label: "Type", units: [{ unit: "—", value: "Wafer / Lug / Double-flanged / Double-offset" }] },
    { label: "Operation", units: [{ unit: "—", value: "Lever (≤ DN150) / Gear (≥ DN200) / Electric / Pneumatic" }] },
    { label: "Temperature", units: [{ unit: "°C", value: "-10 to +120 (EPDM); -10 to +90 (NBR)" }] },
    { label: "Standards", units: [{ unit: "—", value: "IS 13095 / EN 593 / API 609 / ISO 5752" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Water supply, Wastewater, HVAC, Fire fighting, Process, Pulp & paper, Mining"
        }
      ]
    }
  ],
  applications: [
    "Water supply isolation & flow control",
    "Wastewater treatment plants (STP / ETP)",
    "HVAC chilled / hot / condenser water lines",
    "Fire-fighting mains (with UL/FM-listed variants)",
    "Industrial process water",
    "Pulp & paper plants",
    "Mining slurry (lined variants)",
    "Building services & plumbing mains"
  ],
  salientFeatures: [
    "Concentric (resilient seated) — 100% bubble-tight bi-directional shutoff",
    "Double-offset variant for high-pressure & temperature duty",
    "Compact face-to-face dimension (per ISO 5752 / EN 558)",
    "Disc dynamically balanced — low torque operation",
    "Replaceable elastomer seat (EPDM / NBR / Viton)",
    "Top-flange mounting per ISO 5211 — actuator-ready",
    "Lever-operated up to DN150; gear-operated DN200+",
    "Electric (24 V DC / 230 V AC) and pneumatic actuator options",
    "Long service life — typically 50,000+ cycles",
    "Conforms to IS 13095 / EN 593 / API 609"
  ],
  construction: [
    {
      title: "Body & internals",
      rows: [
        { component: "Body", material: "Cast iron CI / Ductile iron DI / Cast steel / SS 316" },
        { component: "Disc", material: "Ductile iron / SS 304 / SS 316 / Aluminium bronze" },
        { component: "Seat", material: "EPDM / NBR / Viton / PTFE-lined" },
        { component: "Stem", material: "Stainless steel SS 410 / SS 316" },
        { component: "Bushing", material: "PTFE / bronze" },
        { component: "O-ring", material: "EPDM / NBR / Viton" }
      ]
    },
    {
      title: "Actuator & accessories",
      rows: [
        { component: "Lever", material: "Aluminium alloy / cast iron, 10-position locking notch" },
        { component: "Gearbox", material: "Worm gear, weatherproof IP65" },
        { component: "Electric actuator", material: "On/off or modulating (4–20 mA), IP67" },
        { component: "Pneumatic actuator", material: "Rack-and-pinion or scotch yoke, double / single acting" },
        { component: "Limit switches", material: "Open/close indication (with electric / pneumatic)" },
        { component: "Position indicator", material: "Visual indicator on stem top" },
        { component: "Top-flange", material: "ISO 5211 — universal actuator mounting" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/butterfly-valve.png",
  drawingAlt: "Butterfly valve — wafer type, cross-section",
  footnotes: [
    "Specify line size, pressure, temperature, fluid, & end connection (wafer / lug / flanged) for selection.",
    "Use spool piece between back-to-back butterfly valves to allow disc full opening."
  ]
};
