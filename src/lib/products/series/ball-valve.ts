import type { TechnicalSpec } from "../technical-specs";

export const ballValve: TechnicalSpec = {
  key: "ball-valve",
  title: "Ball Valve (2-Piece / 3-Piece / Floating / Trunnion)",
  shortLabel: "Ball Valve",
  productPath: "/products/ball-valves/ball-valve",
  family: "Valves",
  summary:
    "Industrial ball valves for quick shutoff, low pressure drop, and bi-directional bubble-tight sealing. Floating-ball (2-piece / 3-piece) and trunnion-mounted variants for water, oil, gas, chemicals, and steam duty.",
  characteristics: [
    {
      label: "Nominal size (DN)",
      units: [
        { unit: "mm", value: "8 to 600" },
        { unit: "inch", value: "¼ to 24" }
      ]
    },
    {
      label: "Pressure rating",
      units: [
        { unit: "—", value: "PN16 / PN25 / PN40 / PN64 / ANSI 150 / 300 / 600 / 900" }
      ]
    },
    { label: "Body", units: [{ unit: "—", value: "Brass / Cast iron / Cast steel / SS 304 / SS 316 / Duplex" }] },
    { label: "Ball", units: [{ unit: "—", value: "SS 304 / SS 316 — solid or chrome-plated" }] },
    { label: "Seat", units: [{ unit: "—", value: "PTFE / RPTFE / Devlon / PEEK (high temperature)" }] },
    { label: "Design", units: [{ unit: "—", value: "Floating ball (≤ DN150) / Trunnion-mounted (≥ DN150)" }] },
    { label: "Stem", units: [{ unit: "—", value: "Stainless steel SS 316 — anti-blowout (one piece)" }] },
    { label: "End connection", units: [{ unit: "—", value: "Threaded / Flanged / Socket-weld / Butt-weld" }] },
    { label: "Bore", units: [{ unit: "—", value: "Full bore / Reduced bore" }] },
    { label: "Temperature", units: [{ unit: "°C", value: "-29 to +200 (RPTFE seat); -29 to +260 (PEEK)" }] },
    { label: "Standards", units: [{ unit: "—", value: "API 6D / API 608 / EN 12516 / IS 9890 / ISO 17292" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Water, Compressed air, Gas, Oil, Steam, Chemicals, Cryogenic, Hydrogen (special)"
        }
      ]
    }
  ],
  applications: [
    "Water & wastewater shutoff",
    "Compressed air & instrument air",
    "Natural gas & LPG distribution",
    "Oil & petrochemical service",
    "Chemical & industrial process",
    "Steam shutoff (metal-seated)",
    "Cryogenic service (special extended-bonnet design)",
    "Mining & marine applications"
  ],
  salientFeatures: [
    "Quarter-turn (90°) operation — quick open/close",
    "Bi-directional bubble-tight shutoff (PTFE / RPTFE seats)",
    "Low pressure drop (full-bore variant)",
    "Anti-blowout stem — safe against pressure surges",
    "Lockable handle (open/close) — tagging-friendly",
    "Fire-safe variant available (API 607 / ISO 10497 certified)",
    "Anti-static device (spring-loaded) — for gas service",
    "Body relief at cavity (DBB — double block and bleed option)",
    "Standard ISO 5211 actuator-mounting top flange",
    "Conforms to API 6D / API 608 / EN 12516"
  ],
  construction: [
    {
      title: "Body & internals",
      rows: [
        { component: "Body & end caps", material: "Brass / Cast iron / Cast steel WCB / SS 304 / SS 316" },
        { component: "Ball", material: "Stainless steel SS 304 / SS 316 — solid, polished surface" },
        { component: "Seat ring", material: "PTFE / RPTFE (glass-reinforced) / Devlon / PEEK" },
        { component: "Stem", material: "Stainless steel SS 316 — anti-blowout, one-piece" },
        { component: "Stem seal", material: "PTFE chevron rings / graphite (fire-safe)" },
        { component: "Body gasket", material: "PTFE / spiral-wound (steel) — replaceable" },
        { component: "Body bolts", material: "Carbon steel / SS 316 — high-tensile" }
      ]
    },
    {
      title: "Operation & accessories",
      rows: [
        { component: "Handle", material: "Stainless steel / aluminium — lever-type, lockable" },
        { component: "Gear operator (large sizes)", material: "Worm gear, weatherproof IP65" },
        { component: "Electric actuator", material: "On/off or modulating, IP67" },
        { component: "Pneumatic actuator", material: "Rack-and-pinion / scotch yoke, single / double acting" },
        { component: "Limit switch box", material: "Aluminium die-cast, IP67" },
        { component: "Position indicator", material: "Visual indicator on stem top" },
        { component: "Top flange", material: "ISO 5211 — universal actuator mounting" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/ball-valve.png",
  drawingAlt: "Ball valve — 2-piece floating, cross-section",
  footnotes: [
    "For fire-safe service, specify API 607 / ISO 10497 certification at RFQ stage.",
    "Cycle ball valves at least once a month in seasonal service to prevent seat sticking."
  ]
};
