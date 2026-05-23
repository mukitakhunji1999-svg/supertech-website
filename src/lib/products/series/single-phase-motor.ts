import type { TechnicalSpec } from "../technical-specs";

export const singlePhaseMotor: TechnicalSpec = {
  key: "single-phase-motor",
  title: "Single Phase Induction Motor",
  shortLabel: "Single Phase Motor",
  productPath: "/products/single-phase-motors/single-phase-motor",
  family: "Motors",
  summary:
    "Single phase induction motor (capacitor-start / capacitor-run) for domestic and light commercial pumping, fans, and general-purpose drive duty. Class F insulation with TEFC enclosure.",
  characteristics: [
    {
      label: "Rated Output",
      units: [
        { unit: "HP", value: "0.25 to 3" },
        { unit: "kW", value: "0.18 to 2.2" }
      ]
    },
    { label: "Poles", units: [{ unit: "—", value: "2 / 4" }] },
    { label: "Speed", units: [{ unit: "RPM", value: "1440 / 2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "180–240 (1Φ)" }] },
    { label: "Configuration", units: [{ unit: "—", value: "Capacitor-start / Capacitor-start–capacitor-run (CSCR)" }] },
    { label: "Insulation", units: [{ unit: "Class", value: "F" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP44 / IP55 options" }] },
    { label: "Duty", units: [{ unit: "—", value: "S1 — Continuous" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Domestic pumps, Fans, Compressors, Household appliances, Light industrial" }
      ]
    }
  ],
  applications: [
    "Domestic monoblock & self-priming pumps",
    "Domestic submersible pump sets (up to 3 HP)",
    "Fans, blowers, & air handling units",
    "Small compressors",
    "Light industrial machinery",
    "Household & commercial appliances"
  ],
  salientFeatures: [
    "Capacitor-start, capacitor-run (CSCR) for high starting torque",
    "Run capacitor for high power factor and efficiency",
    "Class F insulation with Class B temperature rise",
    "TEFC fan-cooled enclosure (IP44 / IP55)",
    "Built-in thermal overload protector (klixon)",
    "Aluminium die-cast rotor — quiet operation",
    "Sealed deep-groove ball bearings — maintenance free",
    "Suitable for 180–240 V supply with ±10% tolerance",
    "Foot-mounted (B3) standard, flange (B5) on request",
    "Conforms to IS 996"
  ],
  construction: [
    {
      title: "Electrical details",
      rows: [
        { component: "Stator winding", material: "EC grade copper, dual-coat enamel, F class" },
        { component: "Stator core", material: "Electrical-grade silicon steel laminations" },
        { component: "Rotor", material: "Aluminium pressure die-cast — squirrel cage" },
        { component: "Run capacitor", material: "Metallised polypropylene film, oil-cooled" },
        { component: "Start capacitor", material: "Electrolytic, with start relay" },
        { component: "Centrifugal switch", material: "On CSIR variants, with brass contacts" }
      ]
    },
    {
      title: "Mechanical details",
      rows: [
        { component: "Frame", material: "Aluminium alloy / cast iron, TEFC" },
        { component: "End shields", material: "Aluminium alloy / cast iron" },
        { component: "Shaft", material: "EN-8 carbon steel, dynamically balanced" },
        { component: "Bearings", material: "Sealed deep-groove ball bearings, lifetime greased" },
        { component: "Fan", material: "Bi-directional polypropylene" },
        { component: "Fan cover", material: "Mild steel pressed, powder-coated" },
        { component: "Terminal box", material: "Aluminium / cast iron, with cable gland" },
        { component: "Mounting", material: "B3 (foot) standard; B5 (flange) on request" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/induction-motor.svg",
  drawingAlt: "Single phase induction motor — schematic side view",
  footnotes: [
    "Single phase capacitors are consumables — keep replacement set as spares.",
    "Avoid prolonged operation below 180 V supply; install voltage stabiliser if required."
  ]
};
