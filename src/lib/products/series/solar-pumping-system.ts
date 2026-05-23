import type { TechnicalSpec } from "../technical-specs";

export const solarPumpingSystem: TechnicalSpec = {
  key: "solar-pumping-system",
  title: "Solar Pumping System (PMKSY-KUSUM Compatible)",
  shortLabel: "Solar Pumping System",
  productPath: "/products/solar-pumping-systems/solar-pumping-system",
  family: "Solar",
  summary:
    "Turnkey solar water pumping system comprising PV modules, MPPT-VFD solar controller, AC / DC submersible pump, mounting structures, and cabling. Engineered to MNRE / PM-KUSUM specifications for agriculture, drinking water, and remote duty.",
  characteristics: [
    {
      label: "System Rating",
      units: [
        { unit: "HP", value: "1 to 25" },
        { unit: "kW", value: "0.75 to 18.5" }
      ]
    },
    { label: "Head Range", units: [{ unit: "Metres", value: "10 to 200" }] },
    { label: "Discharge", units: [{ unit: "LPD", value: "20,000 to 4,00,000+ (sunshine basis)" }] },
    { label: "Pump Type", units: [{ unit: "—", value: "AC submersible / DC submersible / Surface" }] },
    { label: "PV Wattage", units: [{ unit: "Wp", value: "1,000 to 25,000" }] },
    { label: "Controller", units: [{ unit: "—", value: "MPPT-VFD with dry-run, overload, surge protection" }] },
    { label: "Compliance", units: [{ unit: "—", value: "MNRE / PM-KUSUM / IS 14286 / IEC 61215" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Agriculture, Drinking water, Remote villages, Aquaculture, Forest dept., Defence"
        }
      ]
    }
  ],
  applications: [
    "Agricultural irrigation (drip / sprinkler / flood)",
    "Drinking water supply for villages",
    "Remote location water supply",
    "PM-KUSUM scheme installations",
    "Aquaculture & livestock farms",
    "Forest department & wildlife reserves",
    "Defence & border outposts",
    "Schools, anganwadi, primary health centres"
  ],
  salientFeatures: [
    "MPPT solar controller with variable frequency drive (VFD)",
    "Dry-run, no-water, overload, surge & reverse-polarity protection",
    "Compatible with mono-PERC / poly-crystalline PV modules",
    "Suitable for 100 mm / 150 mm borewells (submersible) or open surface",
    "Stainless steel hydraulic parts on premium variants",
    "GI / hot-dip galvanised mounting structure (manual / dual-axis trackers)",
    "Remote monitoring (GSM / IoT) option",
    "MNRE / PM-KUSUM specification compliant",
    "Up to 5-year system warranty (25 years on PV modules)",
    "Turnkey supply + installation + commissioning"
  ],
  construction: [
    {
      title: "System components",
      rows: [
        { component: "Solar PV modules", material: "Mono-PERC / poly-crystalline, IEC 61215 / IEC 61730 certified" },
        { component: "Solar controller", material: "MPPT-VFD, IP65 enclosure, IGBT inverter stage" },
        { component: "Pump unit", material: "AC submersible (SS hydraulic) or DC submersible (BLDC)" },
        { component: "Module mounting structure", material: "Hot-dip galvanised MS / aluminium, MNRE-compliant" },
        { component: "DC cabling", material: "Solar-grade XLPE/XLPO (PV1-F), UV-resistant" },
        { component: "AC cabling", material: "Submersible flat cable (3-core + earth), factory-sealed" }
      ]
    },
    {
      title: "Controller features",
      rows: [
        { component: "MPPT", material: "Multiple-point tracking, efficiency ≥98%" },
        { component: "Display", material: "LCD with Hz / V / A / W readout" },
        { component: "Protections", material: "Dry-run, overload, over/under voltage, surge, reverse polarity" },
        { component: "IP rating", material: "IP65 outdoor enclosure" },
        { component: "Communication (option)", material: "RS485 Modbus / GSM / IoT for remote monitoring" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/solar-pumping-system.svg",
  drawingAlt: "Solar pumping system — PV modules, controller, and submersible pump schematic",
  footnotes: [
    "System sizing depends on solar insolation at site; specify location for accurate PV array selection.",
    "PM-KUSUM Component-B / Component-C empanelment available for state nodal agencies."
  ]
};
