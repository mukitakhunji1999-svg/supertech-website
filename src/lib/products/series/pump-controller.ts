import type { TechnicalSpec } from "../technical-specs";

export const pumpController: TechnicalSpec = {
  key: "pump-controller",
  title: "Smart Pump Controller (Single Phase / 3 Phase)",
  shortLabel: "Pump Controller",
  productPath: "/products/pump-controllers/pump-controller",
  family: "Panels",
  summary:
    "Smart pump controller engineered for protection, automation, and energy efficiency in domestic, agricultural, and small commercial pumping installations. Built-in dry-run protection, voltage cutoff, & auto-restart logic.",
  characteristics: [
    {
      label: "Pump Rating",
      units: [
        { unit: "HP", value: "0.5 to 7.5" },
        { unit: "kW", value: "0.37 to 5.5" }
      ]
    },
    { label: "Supply", units: [{ unit: "Volt", value: "180–270 (1Φ) / 320–460 (3Φ)" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    {
      label: "Protections",
      units: [
        {
          unit: "—",
          value: "Dry-run, Overload, Single-phasing, Under/Over voltage, Short-circuit"
        }
      ]
    },
    { label: "Display", units: [{ unit: "—", value: "LED / LCD with V / A / kW / fault codes" }] },
    { label: "Inputs", units: [{ unit: "—", value: "Pressure switch / float / flow switch / level probes" }] },
    { label: "Auto-restart", units: [{ unit: "—", value: "Programmable delay 1–60 min after fault" }] },
    { label: "Mobile control", units: [{ unit: "—", value: "GSM / Bluetooth / Wi-Fi (variant dependent)" }] },
    { label: "Enclosure", units: [{ unit: "—", value: "ABS plastic / MS, IP54 indoor" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Domestic, Agricultural, Small commercial, Sprinkler, Borewell pumps"
        }
      ]
    }
  ],
  applications: [
    "Domestic water supply pumps",
    "Agricultural borewell pumps (V3 / V4)",
    "Sprinkler & drip irrigation",
    "Small commercial water supply",
    "Pressure booster systems",
    "Water tank level control",
    "Sump dewatering with float switch"
  ],
  salientFeatures: [
    "Built-in dry-run protection (current-sensing)",
    "Voltage cutoff — under-voltage & over-voltage protection",
    "Single-phasing protection (3-phase variants)",
    "Overload protection (electronic, current-sensing)",
    "Auto-restart after fault clearance (programmable delay)",
    "Level / float / pressure switch input for auto operation",
    "Built-in capacitor (1Φ variants)",
    "Pole-mount / wall-mount with weather-resistant cover",
    "Status LED indicators (Run, Trip, Dry-run, Voltage fault)",
    "GSM / Wi-Fi remote monitoring (premium variants)"
  ],
  construction: [
    {
      title: "Electronic & control",
      rows: [
        { component: "Microcontroller", material: "32-bit ARM / 8-bit AVR (variant)" },
        { component: "Current sensor", material: "Current transformer / Hall-effect sensor" },
        { component: "Voltage monitoring", material: "Voltage divider + ADC, with isolation" },
        { component: "Display", material: "LED 7-seg / LCD 16×2 / OLED 0.96\"" },
        { component: "Relay output", material: "Heavy-duty 30 A relay (motor switching)" },
        { component: "Capacitor (1Φ)", material: "Run capacitor, polypropylene metallised film" },
        { component: "Push buttons", material: "Start / Stop / Mode (resistive overlay)" },
        { component: "GSM / Wi-Fi (option)", material: "Quad-band GSM / Wi-Fi b/g/n with antenna" }
      ]
    },
    {
      title: "Enclosure",
      rows: [
        { component: "Body", material: "ABS plastic / MS powder-coated, IP54" },
        { component: "Mounting", material: "Wall / pole / DIN-rail variants" },
        { component: "Cable entry", material: "PG glands with strain relief" },
        { component: "Terminal block", material: "Spring-clamp / screw-type, 4–10 mm² rated" },
        { component: "Operating temperature", material: "0 to +55 °C ambient" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/control-panel.svg",
  drawingAlt: "Smart pump controller — front view",
  footnotes: [
    "Use only with pump rating matched to controller capacity; oversized loads will trip on overload.",
    "Configure auto-restart delay to ≥ 5 min to avoid rapid cycling during low-water conditions."
  ]
};
