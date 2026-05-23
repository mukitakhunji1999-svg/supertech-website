import type { TechnicalSpec } from "../technical-specs";

export const verticalInlinePump: TechnicalSpec = {
  key: "vertical-inline-pump",
  title: "Vertical Inline Multi-Stage Pump",
  shortLabel: "Vertical Inline Pump",
  productPath: "/products/vertical-pumps/vertical-inline-pump",
  family: "Pumps",
  summary:
    "Vertical inline multi-stage centrifugal pump engineered for compact footprint, high efficiency, and easy maintenance in pressure boosting, RO/water treatment, HVAC, and industrial process duty.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 60" },
        { unit: "kW", value: "0.37 to 45" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "1 to 22" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "10 to 250" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "30 to 1500" }] },
    {
      label: "Flange Size",
      units: [
        { unit: "mm", value: "25 / 32 / 40 / 50 / 65 / 80 / 100" },
        { unit: "inch", value: "1 / 1¼ / 1½ / 2 / 2½ / 3 / 4" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2900" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Liquid temp", units: [{ unit: "°C", value: "-15 to +120 (variant dependent)" }] },
    { label: "Construction", units: [{ unit: "—", value: "Vertical inline, stamped SS hydraulic" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pressure boosting, RO / WTP, HVAC, Boiler feed, Industrial process, Sprinkler, Fire jockey"
        }
      ]
    }
  ],
  applications: [
    "Pressure boosting in tall buildings",
    "Reverse osmosis (RO) & water treatment plants",
    "HVAC chilled / condenser water",
    "Boiler feed (low-temperature, with cooling)",
    "Industrial process water",
    "Sprinkler & micro-irrigation",
    "Fire jockey pump duty",
    "CIP (clean-in-place) for food & pharma (SS 316)"
  ],
  salientFeatures: [
    "Compact vertical footprint — half the floor area of horizontal pumps",
    "Suction and discharge on the same centerline — easy piping",
    "Stamped SS hydraulic — high efficiency and corrosion resistance",
    "Cartridge mechanical seal — replaceable without dismantling pump",
    "SS 304 / SS 316 wetted parts options",
    "Standard motor (IEC frame) — easily replaceable",
    "VFD-ready when ordered with VPI / inverter-duty motor",
    "Lower noise level than horizontal end-suction equivalents",
    "Wide range of stages for fine head selection"
  ],
  construction: [
    {
      title: "Hydraulic details",
      rows: [
        { component: "Casing", material: "Stainless steel SS 304 / SS 316 stamped" },
        { component: "Impellers", material: "Stainless steel SS 304 / SS 316 — closed type" },
        { component: "Diffusers (chambers)", material: "Stainless steel SS 304 / SS 316" },
        { component: "Shaft", material: "Stainless steel SS 431 / SS 316" },
        { component: "Mechanical seal", material: "Cartridge — Carbon vs. SiC, EPDM secondary" },
        { component: "Top cover / bottom plate", material: "Cast iron / SS 304" },
        { component: "Wear rings", material: "Engineering plastic / SS — replaceable" },
        { component: "Coupling", material: "Cast iron, spacer-type for seal service" }
      ]
    },
    {
      title: "Drive & frame",
      rows: [
        { component: "Motor", material: "Standard IEC frame, B5 flange-mounted, F class IP55" },
        { component: "Coupling guard", material: "Sheet metal, powder-coated" },
        { component: "Bearings", material: "In motor (deep-groove ball, sealed)" },
        { component: "Painting", material: "Powder coat / industrial epoxy" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/vertical-inline.png",
  drawingAlt: "Vertical inline multi-stage pump — schematic",
  footnotes: [
    "Specify liquid temperature, SG, and dosing chemicals for correct material and seal selection.",
    "Foot-mounted suction strainer recommended for open-tank installations."
  ]
};
