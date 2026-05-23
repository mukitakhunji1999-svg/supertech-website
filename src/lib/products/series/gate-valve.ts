import type { TechnicalSpec } from "../technical-specs";

export const gateValve: TechnicalSpec = {
  key: "gate-valve",
  title: "Gate Valve (Resilient Seated / Metal Seated)",
  shortLabel: "Gate Valve",
  productPath: "/products/gate-valves/gate-valve",
  family: "Valves",
  summary:
    "Sluice / gate valves engineered for full-bore isolation duty in water supply, wastewater, fire-fighting, and industrial mainlines. Resilient seated (rubber-wedge) and metal-seated (steam / process) variants.",
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
        { unit: "—", value: "PN10 / PN16 / PN25 / PN40 / ANSI 125 / ANSI 150" }
      ]
    },
    { label: "Body", units: [{ unit: "—", value: "Cast iron / Ductile iron / Cast steel / Bronze" }] },
    { label: "Wedge / disc", units: [{ unit: "—", value: "Rubber-coated DI (resilient) / Solid wedge (metal)" }] },
    { label: "Stem", units: [{ unit: "—", value: "Stainless steel SS 410 / SS 304 / SS 316" }] },
    { label: "Stem type", units: [{ unit: "—", value: "Non-rising stem (NRS) / Outside screw & yoke (OS&Y)" }] },
    { label: "End connection", units: [{ unit: "—", value: "Flanged (PN10/16) / Socket-weld / Butt-weld" }] },
    { label: "Operation", units: [{ unit: "—", value: "Hand-wheel / Cap-top / Electric / Pneumatic" }] },
    { label: "Standards", units: [{ unit: "—", value: "IS 14846 (sluice) / IS 778 (bronze) / EN 1171 / API 600" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Water mains, Wastewater, Fire systems, Industrial isolation, Refineries, Process plants"
        }
      ]
    }
  ],
  applications: [
    "Municipal water supply mains (resilient seated)",
    "Wastewater treatment plants",
    "Fire-fighting isolation valves",
    "Industrial mainline isolation (on/off only)",
    "Refineries & process plants (metal-seated)",
    "Building services & plumbing mains",
    "Pumping station inlet & discharge isolation",
    "Underground & buried installation (cap-top)"
  ],
  salientFeatures: [
    "Full-bore design — minimal pressure drop when fully open",
    "Bi-directional flow capability",
    "Resilient seated (rubber wedge) — 100% bubble-tight shutoff",
    "Metal-seated for high-temperature & abrasive service",
    "Non-rising stem (NRS) — compact in buried installation",
    "OS&Y variant for above-ground installations (visible position)",
    "EPDM o-ring stem seal — leak-free, replaceable",
    "Internal & external CED / epoxy coating (water service)",
    "Suitable for potable water (WRAS / NSF on request)",
    "Conforms to IS 14846 / EN 1171 / API 600"
  ],
  construction: [
    {
      title: "Resilient seated (water service)",
      rows: [
        { component: "Body & bonnet", material: "Ductile iron DI, internally & externally epoxy / CED coated" },
        { component: "Wedge", material: "Ductile iron, fully encapsulated in EPDM rubber" },
        { component: "Stem", material: "Stainless steel SS 410 / SS 304" },
        { component: "Stem nut", material: "Brass / bronze" },
        { component: "Stem seal", material: "Multiple EPDM O-rings, replaceable under pressure" },
        { component: "Bonnet bolts", material: "Stainless steel SS 304 (encapsulated head)" },
        { component: "Operating element", material: "Hand-wheel (above ground) / cap-top (buried)" }
      ]
    },
    {
      title: "Metal-seated (process / steam)",
      rows: [
        { component: "Body & bonnet", material: "Cast steel WCB / WC9 / SS 304 / SS 316" },
        { component: "Wedge (solid / flexible)", material: "Forged steel / SS, hard-faced (stellite)" },
        { component: "Seat ring", material: "Hard-faced (stellite) — renewable" },
        { component: "Stem", material: "Stainless steel SS 410 / SS 316" },
        { component: "Gland packing", material: "Graphite / PTFE braided" },
        { component: "Bonnet joint", material: "Bolted with spiral-wound gasket" },
        { component: "Stem type", material: "OS&Y for visible position indication" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/gate-valve.png",
  drawingAlt: "Gate valve — resilient seated, cross-section",
  footnotes: [
    "Not suitable for throttling / flow control — use only fully open or fully closed.",
    "For buried installation, use cap-top with extension spindle and surface box."
  ]
};
