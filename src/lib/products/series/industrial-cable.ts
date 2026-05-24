import type { TechnicalSpec } from "../technical-specs";

export const industrialCable: TechnicalSpec = {
  key: "industrial-cable",
  title: "Industrial XLPE Cable (LT / HT)",
  shortLabel: "Industrial XLPE Cable",
  productPath: "/products/industrial-cables/industrial-cable",
  family: "Pipes & Cables",
  summary:
    "Industrial-grade XLPE (cross-linked polyethylene) insulated power cable for LT (1.1 kV) and HT (3.3 / 6.6 / 11 / 33 kV) distribution. Suitable for substations, plant feeders, EPC infrastructure, and harsh environment installations.",
  characteristics: [
    {
      label: "Voltage grade",
      units: [
        { unit: "kV", value: "1.1 / 3.3 / 6.6 / 11 / 33 (HT)" }
      ]
    },
    {
      label: "Cores",
      units: [
        { unit: "—", value: "1 / 3 / 3.5 / 4 (LT); 1 / 3 (HT)" }
      ]
    },
    {
      label: "Conductor sizes",
      units: [
        { unit: "mm²", value: "16 / 25 / 35 / 50 / 70 / 95 / 120 / 150 / 185 / 240 / 300 / 400 / 500 / 630" }
      ]
    },
    { label: "Conductor", units: [{ unit: "—", value: "Annealed copper / aluminium, compacted (Class 2)" }] },
    { label: "Insulation", units: [{ unit: "—", value: "XLPE (cross-linked polyethylene)" }] },
    { label: "Armouring", units: [{ unit: "—", value: "Galvanised steel wire / strip (standard for ≥3-core)" }] },
    { label: "Sheath", units: [{ unit: "—", value: "PVC ST2 / FRLS / HFFR" }] },
    { label: "Operating temperature", units: [{ unit: "°C", value: "90 (continuous) / 250 (short-circuit, 5 sec)" }] },
    { label: "Standards", units: [{ unit: "—", value: "IS 7098 / IEC 60502 (LT & HT XLPE)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Substations, Plant feeders, EPC infrastructure, Industrial distribution, Wind farms"
        }
      ]
    }
  ],
  applications: [
    "LT distribution from substation to LT panels",
    "HT distribution between substations / feeders",
    "Plant feeders & motor cables",
    "Pumping station main incomers",
    "EPC infrastructure power transmission",
    "Wind / solar farm collector cabling",
    "Underground & duct installation",
    "Direct burial with bedding sand (armoured)"
  ],
  salientFeatures: [
    "XLPE insulation — 90 °C continuous, 250 °C short-circuit",
    "Higher current carrying capacity than PVC equivalents (~20% more)",
    "Excellent dielectric strength & lower dielectric losses",
    "Resistant to thermal aging, moisture, & chemical attack",
    "Triple-extruded HT cables (semi-conductor / XLPE / semi-conductor)",
    "Galvanised steel armouring for mechanical protection",
    "PVC ST2 / FRLS / HFFR outer sheath options",
    "Suitable for direct burial, ducts, cable trays, in-air",
    "Type-test certified at CPRI / KEMA / NABL labs",
    "Conforms to IS 7098 / IEC 60502"
  ],
  construction: [
    {
      title: "Cable construction (HT)",
      rows: [
        { component: "Conductor", material: "Annealed copper / aluminium, compacted Class 2 (IEC 60228)" },
        { component: "Conductor screen", material: "Extruded semi-conducting compound" },
        { component: "Insulation", material: "XLPE (cross-linked polyethylene)" },
        { component: "Insulation screen", material: "Extruded semi-conducting compound + copper tape" },
        { component: "Metallic screen", material: "Copper wire / tape (HT only)" },
        { component: "Inner sheath", material: "PVC extruded" },
        { component: "Armouring", material: "Galvanised steel wire (round) / strip (flat)" },
        { component: "Outer sheath", material: "PVC ST2 / FRLS / HFFR — UV stabilised" }
      ]
    },
    {
      title: "Performance",
      rows: [
        { component: "Continuous temperature", material: "90 °C (XLPE)" },
        { component: "Short-circuit temperature", material: "250 °C for 5 sec" },
        { component: "Insulation resistance", material: "≥ 1000 MΩ-km at 20 °C" },
        { component: "Voltage withstand test", material: "Per IS 7098 / IEC 60502 (3 × Uo for 5 min, HT)" },
        { component: "Partial discharge (HT)", material: "≤ 10 pC at 2 × Uo" },
        { component: "Bend radius", material: "15 × OD (LT) / 20 × OD (HT)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/industrial-cable.png",
  drawingAlt: "Industrial XLPE armoured cable — cross-section",
  footnotes: [
    "Specify voltage grade, current rating, installation method (air / buried / duct), and short-circuit level for sizing.",
    "Use proper jointing kits and termination kits matched to cable voltage and conductor cross-section."
  ]
};
