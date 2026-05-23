import type { TechnicalSpec } from "../technical-specs";

export const controlPanel: TechnicalSpec = {
  key: "control-panel",
  title: "Pump Control Panel (Submersible / Surface)",
  shortLabel: "Control Panel",
  productPath: "/products/control-panels/pump-control-panel",
  family: "Panels",
  summary:
    "Engineered pump control panel for submersible and surface pump installations. Includes contactor, overload relay, single-phasing preventer, dry-run protection, indicators, and ammeter / voltmeter. Customised to pump rating and starting method.",
  characteristics: [
    {
      label: "Pump Rating",
      units: [
        { unit: "HP", value: "0.5 to 200" },
        { unit: "kW", value: "0.37 to 150" }
      ]
    },
    {
      label: "Supply",
      units: [
        { unit: "Volt", value: "180–240 (1Φ) / 380–415 (3Φ)" }
      ]
    },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Starting method", units: [{ unit: "—", value: "DOL (≤ 5 HP) / Star-Delta (≥ 5 HP) / Auto-Transformer / Soft-Starter / VFD" }] },
    { label: "Enclosure", units: [{ unit: "—", value: "Powder-coated MS, IP54 (indoor) / IP65 (outdoor)" }] },
    { label: "Mounting", units: [{ unit: "—", value: "Wall / Floor / Pole" }] },
    { label: "Cooling", units: [{ unit: "—", value: "Natural convection / fan-cooled (large ratings)" }] },
    {
      label: "Protections",
      units: [
        {
          unit: "—",
          value: "Overload, Short-circuit, Single-phasing, Dry-run, Under/Over voltage, Phase reversal"
        }
      ]
    },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Submersible & surface pumps, Domestic, Agricultural, Industrial, Municipal"
        }
      ]
    }
  ],
  applications: [
    "Domestic submersible & monoblock pump control",
    "Agricultural pumpset control (V3/V4/V5/V6/V8)",
    "Industrial process pump control",
    "Municipal water supply pumping",
    "Pressure booster pump skids",
    "Fire-fighting jockey & main pumps",
    "Sewage & dewatering pump control"
  ],
  salientFeatures: [
    "Built to pump rating + starting method (DOL / Star-Delta / Soft-Start / VFD)",
    "Single-phasing preventer (SPP) — protects against single-phasing damage",
    "Dry-run protection (current-sensing or electrode-based)",
    "Under / over voltage cutoff",
    "Phase-reversal protection (3-phase variants)",
    "Time-delay relays for sequential starting (multi-pump)",
    "Front-panel ammeter, voltmeter, hour-meter, indicators",
    "Auto / Manual / Off selector switch",
    "Remote start / stop terminals (PLC / SCADA-ready)",
    "Powder-coated MS enclosure with lockable door"
  ],
  construction: [
    {
      title: "Main components",
      rows: [
        { component: "MCB / MCCB", material: "Per IEC 60898 / IEC 60947-2, ICU 10–50 kA" },
        { component: "Contactor", material: "AC-3 duty rated for motor starting (Siemens / L&T / Schneider)" },
        { component: "Overload relay", material: "Thermal / electronic, with single-phasing protection" },
        { component: "Single-phasing preventer", material: "Voltage-sensing relay with auto-reset" },
        { component: "Dry-run relay", material: "Current under-load sensing / electrode probe" },
        { component: "Indicators", material: "LED indicators (R-Y-B, On, Off, Trip)" },
        { component: "Meters", material: "Digital / analogue voltmeter, ammeter, hour-meter" },
        { component: "Selector switch", material: "Auto / Manual / Off rotary switch" },
        { component: "Push buttons", material: "Start (green) / Stop (red) / Reset" },
        { component: "Capacitor (1Φ)", material: "Run / start capacitor with bleeder resistor" }
      ]
    },
    {
      title: "Enclosure",
      rows: [
        { component: "Body", material: "1.6 / 2.0 mm MS sheet, powder-coated (RAL 7035)" },
        { component: "Door", material: "Hinged, lockable, with viewing window (option)" },
        { component: "Gland plate", material: "Removable, with PG / brass cable glands" },
        { component: "Earthing", material: "Internal & external earthing studs" },
        { component: "IP rating", material: "IP54 (indoor) / IP55 / IP65 (outdoor)" },
        { component: "Mounting", material: "Wall / floor / pole mount (option)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/control-panel.svg",
  drawingAlt: "Pump control panel — typical layout",
  footnotes: [
    "Specify pump rating (HP / kW), supply voltage, starting method, and protection requirements at RFQ stage.",
    "Outdoor panels require IP65 enclosure + canopy / sunshade to prevent solar heating."
  ]
};
