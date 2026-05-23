import type { TechnicalSpec } from "../technical-specs";

export const nrvValve: TechnicalSpec = {
  key: "nrv-valve",
  title: "Non-Return Valve (NRV) — Swing / Dual-Plate / Disc Type",
  shortLabel: "Non-Return Valve (NRV)",
  productPath: "/products/nrv-valves/non-return-valve",
  family: "Valves",
  summary:
    "Non-return (check) valves engineered to prevent reverse flow in pump discharge, water mains, fire systems, and process lines. Swing, dual-plate (wafer), disc-lift (silent), and ball-check configurations.",
  characteristics: [
    {
      label: "Nominal size (DN)",
      units: [
        { unit: "mm", value: "15 to 600" },
        { unit: "inch", value: "½ to 24" }
      ]
    },
    {
      label: "Pressure rating",
      units: [
        { unit: "—", value: "PN10 / PN16 / PN25 / PN40 / ANSI 150 / ANSI 300" }
      ]
    },
    { label: "Body", units: [{ unit: "—", value: "Cast iron / Ductile iron / Cast steel / Bronze / SS" }] },
    { label: "Disc", units: [{ unit: "—", value: "DI / SS 304 / SS 316 / Bronze" }] },
    {
      label: "Type",
      units: [
        { unit: "—", value: "Swing / Dual-plate (wafer) / Silent disc-lift / Ball-check" }
      ]
    },
    { label: "End connection", units: [{ unit: "—", value: "Flanged / Threaded / Wafer / Lug" }] },
    { label: "Temperature", units: [{ unit: "°C", value: "-10 to +180 (metal-seated); -10 to +120 (resilient)" }] },
    { label: "Mounting", units: [{ unit: "—", value: "Horizontal & vertical (upflow); orientation per type" }] },
    { label: "Standards", units: [{ unit: "—", value: "IS 5312 / API 6D / EN 12334 / AWWA C508" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pump discharge, Fire mains, Booster systems, Water mains, HVAC, Process, Steam"
        }
      ]
    }
  ],
  applications: [
    "Pump discharge — prevent reverse flow & water hammer",
    "Fire-fighting mains (UL/FM listed variants)",
    "Pressure booster pump system delivery",
    "Municipal water supply mains",
    "HVAC chilled water systems",
    "Industrial process piping",
    "Steam & condensate lines (metal-seated)",
    "Sewage & wastewater (dual-plate variant)"
  ],
  salientFeatures: [
    "Swing type — large port, low pressure drop, ideal for water mains",
    "Dual-plate (wafer) — compact, lightweight, fast closure",
    "Silent disc-lift — low water hammer, ideal for pump discharge",
    "Spring-assisted closure (silent / dual-plate) — works at low velocity",
    "Resilient (rubber) seat for bubble-tight closure (water service)",
    "Metal-to-metal seat for steam / high-temperature service",
    "Replaceable seat & wear parts (where serviceable)",
    "Compact wafer dimensions (per API 594 / EN 558)",
    "Conforms to IS 5312 / API 6D / EN 12334",
    "Suitable for horizontal or vertical (upflow) installation per type"
  ],
  construction: [
    {
      title: "Swing check valve",
      rows: [
        { component: "Body", material: "Cast iron / Ductile iron / Cast steel" },
        { component: "Disc", material: "Cast iron / SS 304 / SS 316, EPDM/NBR-faced (optional)" },
        { component: "Disc hinge", material: "Stainless steel pin & bracket" },
        { component: "Seat ring", material: "Bronze / SS — replaceable" },
        { component: "Body cover", material: "Bolted, with gasket (CAF / spiral wound)" }
      ]
    },
    {
      title: "Dual-plate / silent check",
      rows: [
        { component: "Body", material: "Cast iron / Ductile iron / Cast steel / SS" },
        { component: "Plates / disc", material: "Stainless steel SS 304 / SS 316, dynamically balanced" },
        { component: "Spring", material: "Stainless steel SS 316 — fatigue resistant" },
        { component: "Seat", material: "EPDM / NBR / Viton (resilient) / metal-seated (high-temp)" },
        { component: "Hinge / stop pins", material: "Stainless steel" },
        { component: "Body design", material: "Wafer / lug — compact face-to-face per API 594" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/nrv-valve.svg",
  drawingAlt: "Non-return valve — swing / dual-plate, cross-section",
  footnotes: [
    "For pump discharge service with potential water hammer, prefer silent disc-lift or dual-plate spring-assisted variants.",
    "Install with arrow on body pointing in direction of flow; ensure adequate straight pipe (5×D) upstream."
  ]
};
