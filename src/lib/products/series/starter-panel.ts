import type { TechnicalSpec } from "../technical-specs";

export const starterPanel: TechnicalSpec = {
  key: "starter-panel",
  title: "Motor Starter Panel (DOL / Star-Delta / Auto-Transformer)",
  shortLabel: "Starter Panel",
  productPath: "/products/starter-panels/motor-starter-panel",
  family: "Panels",
  summary:
    "Motor starter panel for 3-phase induction motors and submersible pump sets. DOL (≤ 5 HP), Star-Delta (5–60 HP), and Auto-Transformer (≥ 60 HP) variants with complete protection package.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "1 to 200" },
        { unit: "kW", value: "0.75 to 150" }
      ]
    },
    {
      label: "Starting method",
      units: [
        { unit: "—", value: "DOL / Star-Delta / Auto-Transformer / Soft-Starter / Reactor" }
      ]
    },
    { label: "Supply", units: [{ unit: "Volt", value: "380–415 (3Φ), 4-wire" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Short-circuit withstand", units: [{ unit: "kA", value: "10 / 25 / 50 (rating dependent)" }] },
    { label: "Enclosure", units: [{ unit: "—", value: "Powder-coated MS, IP54 / IP55 / IP65" }] },
    {
      label: "Protections",
      units: [
        {
          unit: "—",
          value: "Overload, Short-circuit, Single-phasing, Earth fault, Under/Over voltage, Phase reversal"
        }
      ]
    },
    { label: "Control voltage", units: [{ unit: "V AC", value: "230 (control circuit derived from supply)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pumps, Blowers, Compressors, Conveyors, Machine drives, Industrial loads"
        }
      ]
    }
  ],
  applications: [
    "3-phase pump motor starting (submersible & surface)",
    "Blowers & compressors",
    "Conveyor & machine drives",
    "Mills, mixers & grinders",
    "Industrial fan motors",
    "Cooling tower fans",
    "Workshop & machinery starting"
  ],
  salientFeatures: [
    "DOL (Direct On-Line) — for motors ≤ 5 HP",
    "Star-Delta — for motors 5–60 HP, reduces inrush to ~33% of DOL",
    "Auto-Transformer — for ≥ 60 HP, 50% / 65% / 80% taps available",
    "Soft-starter option for jerk-free starting & extended motor life",
    "Time-delay timer for star-to-delta transition (factory pre-set)",
    "Single-phasing preventer & phase-reversal protection",
    "Thermal overload with single-phasing protection",
    "Earth-fault relay (optional)",
    "Indicators, meters, & push buttons on front panel",
    "Conforms to IEC 61439 / IS 8623"
  ],
  construction: [
    {
      title: "Power circuit",
      rows: [
        { component: "Incoming MCCB / MCB", material: "Per IEC 60947-2, ICU 25 / 50 kA" },
        { component: "Main contactor", material: "AC-3 duty (Siemens / L&T / Schneider)" },
        { component: "Star contactor (S-D)", material: "AC-3 duty, sized to 1/√3 of full-load current" },
        { component: "Delta contactor (S-D)", material: "AC-3 duty, full-load current rated" },
        { component: "Auto-transformer", material: "Dry-type, copper wound, 50/65/80% taps (large frames)" },
        { component: "Overload relay", material: "Thermal / electronic with single-phasing protection" },
        { component: "Star-delta timer", material: "Adjustable 0–60 sec, electronic" }
      ]
    },
    {
      title: "Control & enclosure",
      rows: [
        { component: "Control transformer", material: "230 V / 24 V (option), encapsulated" },
        { component: "Indicators", material: "LED indicators (R-Y-B, Run, Trip, Star, Delta)" },
        { component: "Push buttons", material: "Start / Stop / Reset (heavy-duty IP65 type)" },
        { component: "Selector switch", material: "Manual / Off / Auto rotary" },
        { component: "Meters", material: "Ammeter, voltmeter, hour-meter (digital)" },
        { component: "Enclosure", material: "1.6 / 2.0 mm MS, powder-coated RAL 7035, IP54/55/65" },
        { component: "Cable entry", material: "Bottom gland plate with PG / brass glands" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/control-panel.png",
  drawingAlt: "Motor starter panel — typical wiring layout",
  footnotes: [
    "Star-Delta only applicable for motors with all 6 stator terminals accessible (delta-rated at supply voltage).",
    "For frequent-start service (>20/hour), prefer soft-starter or VFD over electromechanical starter."
  ]
};
