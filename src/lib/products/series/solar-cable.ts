import type { TechnicalSpec } from "../technical-specs";

export const solarCable: TechnicalSpec = {
  key: "solar-cable",
  title: "Solar AC / DC Cable (TUV / EN 50618)",
  shortLabel: "Solar AC/DC Cable",
  productPath: "/products/solar-ac-dc-cables/solar-ac-dc-cable",
  family: "Solar",
  summary:
    "Solar-grade single-core cable for DC PV array wiring and AC interconnections. UV-resistant XLPO insulation and sheath, suitable for outdoor installation with 25-year service life. EN 50618 / TUV certified.",
  characteristics: [
    { label: "Conductor", units: [{ unit: "—", value: "Tinned annealed copper, Class 5 (flexible)" }] },
    {
      label: "Conductor sizes",
      units: [
        { unit: "mm²", value: "1.5 / 2.5 / 4.0 / 6.0 / 10 / 16 / 25 / 35 / 50 / 70 / 95" }
      ]
    },
    { label: "Voltage rating", units: [{ unit: "V DC", value: "1500 (DC) / 1000 (AC)" }] },
    { label: "Insulation", units: [{ unit: "—", value: "XLPO — cross-linked polyolefin (halogen-free)" }] },
    { label: "Sheath", units: [{ unit: "—", value: "XLPO — UV / weather / ozone resistant" }] },
    { label: "Temperature range", units: [{ unit: "°C", value: "-40 to +120 (continuous)" }] },
    { label: "Service life", units: [{ unit: "Years", value: "25+ outdoor (UV exposed)" }] },
    { label: "Fire performance", units: [{ unit: "—", value: "Flame retardant, halogen-free, low smoke" }] },
    {
      label: "Standards",
      units: [
        { unit: "—", value: "EN 50618 / IEC 62930 / TUV 2 PfG 1169 / UL 4703 (Type PV)" }
      ]
    },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Solar PV array wiring (DC), Inverter-to-array, Combiner box, AC interconnection"
        }
      ]
    }
  ],
  applications: [
    "Solar PV array string wiring (module to combiner)",
    "Combiner box to inverter / controller DC link",
    "Inverter AC output cabling",
    "Ground-mount & rooftop solar plants",
    "Solar pumping system DC wiring",
    "Solar carports & canopies",
    "Outdoor exposed cable runs (UV / weather)"
  ],
  salientFeatures: [
    "Tinned copper conductor — corrosion resistance + low-resistance termination",
    "Class 5 flexible conductor — easy installation through conduits",
    "XLPO insulation & sheath — halogen-free, low smoke, flame retardant",
    "UV / ozone / weather resistant — outdoor exposed 25+ years",
    "Operating temperature -40 °C to +120 °C",
    "Voltage rating 1500 V DC (suits 1500 V system architecture)",
    "TUV 2 PfG 1169 / EN 50618 / IEC 62930 certified",
    "MC4 connector compatible (when terminated)",
    "RoHS compliant",
    "Black & red colour coding standard (custom colours on request)"
  ],
  construction: [
    {
      title: "Cable construction",
      rows: [
        { component: "Conductor", material: "Tinned annealed copper, Class 5 (per IEC 60228)" },
        { component: "Insulation", material: "XLPO — cross-linked polyolefin, halogen-free" },
        { component: "Sheath", material: "XLPO — UV / weather / ozone / ammonia resistant" },
        { component: "Colour", material: "Black / red (standard); custom colours on request" },
        { component: "Identification", material: "Embossed print: brand, size, voltage, certification" }
      ]
    },
    {
      title: "Performance",
      rows: [
        { component: "Voltage rating", material: "1500 V DC / 1000 V AC" },
        { component: "Operating temperature", material: "-40 °C to +120 °C (continuous), 250 °C short-circuit" },
        { component: "Bend radius", material: "5 × cable OD (installation), 4 × OD (fixed)" },
        { component: "Fire performance", material: "IEC 60332-1-2 / IEC 60754 / IEC 61034 (LSZH)" },
        { component: "Mechanical", material: "Resistant to abrasion, oil, fuel, chemicals (IEC 60811)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/solar-cable.png",
  drawingAlt: "Solar AC/DC cable — cross-section",
  footnotes: [
    "Specify cable size, length, and quantity per RFQ. Volume discounts apply on drum lots.",
    "Use MC4-compatible connectors for solar string termination; do not splice without certified IP67 joiners."
  ]
};
