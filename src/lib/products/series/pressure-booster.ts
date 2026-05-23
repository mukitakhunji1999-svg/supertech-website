import type { TechnicalSpec } from "../technical-specs";

export const pressureBoosterPump: TechnicalSpec = {
  key: "pressure-booster",
  title: "Pressure Booster Pump System",
  shortLabel: "Pressure Booster Pump",
  productPath: "/products/pressure-booster-pumps/pressure-booster-pump",
  family: "Pumps",
  summary:
    "Multi-stage pressure booster pump system engineered to maintain constant pressure across buildings, plants, and distribution networks. Single and multi-pump duty-standby configurations with VFD or pressure-switch control.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP per pump", value: "0.5 to 30" },
        { unit: "kW per pump", value: "0.37 to 22" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "2 to 22" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "20 to 220" }] },
    { label: "Discharge per pump", units: [{ unit: "LPM", value: "40 to 1000" }] },
    {
      label: "Connection",
      units: [
        { unit: "Manifold", value: "Common SS 304 / GI suction & delivery manifold" }
      ]
    },
    { label: "Pumps per skid", units: [{ unit: "No.", value: "1 to 6 (1 duty + standby on request)" }] },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Control", units: [{ unit: "—", value: "Pressure switch / VFD with PID / cascade" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Tall buildings, Plants, Hotels, Hospitals, Hydro-pneumatic, Sprinkler, Distribution networks"
        }
      ]
    }
  ],
  applications: [
    "High-rise & multi-storey residential buildings",
    "Hotels, hospitals, malls & commercial complexes",
    "Industrial plants & process water",
    "Hydro-pneumatic systems with pressure vessels",
    "Sprinkler & micro-irrigation supply",
    "Municipal water distribution stations",
    "Reverse osmosis (RO) & water treatment plants"
  ],
  salientFeatures: [
    "Multi-stage vertical inline hydraulic for compact footprint",
    "VFD-controlled cascade for constant-pressure delivery",
    "Energy-efficient operation under varying demand",
    "Common manifold with isolation & non-return valves",
    "Pressure vessel option for hydro-pneumatic operation",
    "PLC / SCADA-ready signals (4–20 mA / Modbus RTU)",
    "Stainless steel hydraulic parts for clean water duty",
    "Dry-run protection & motor overload protection",
    "Compact skid-mounted assembly, fully wired"
  ],
  construction: [
    {
      title: "Pump details",
      rows: [
        { component: "Pump type", material: "Multi-stage vertical inline centrifugal" },
        { component: "Casing", material: "Stainless steel SS 304 / SS 316 stamped" },
        { component: "Impellers & diffusers", material: "Stainless steel SS 304 / SS 316" },
        { component: "Mechanical seal", material: "Carbon vs. SiC, EPDM secondary" },
        { component: "Shaft", material: "Stainless steel SS 431 / SS 316" },
        { component: "Base", material: "Cast iron, foot-mounted" }
      ]
    },
    {
      title: "Panel & manifold",
      rows: [
        { component: "Control panel", material: "Powder-coated MS enclosure, IP54" },
        { component: "VFDs", material: "One per pump or single drive with PLC" },
        { component: "Pressure transmitter", material: "4–20 mA, 0–16 bar range typical" },
        { component: "Manifold", material: "SS 304 / GI medium-grade" },
        { component: "Isolation valves", material: "Brass / SS ball valves" },
        { component: "Non-return valves", material: "Spring-loaded NRVs on each delivery" },
        { component: "Pressure vessel (optional)", material: "EPDM butyl membrane, painted MS tank" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/pressure-booster.svg",
  drawingAlt: "Pressure booster pump system — skid assembly",
  footnotes: [
    "Specify required pressure, peak flow, simultaneous-use factor, and number of users for accurate sizing.",
    "Hydro-pneumatic tank volume is sized to limit pump starts to ≤20/hour for motor longevity."
  ]
};
