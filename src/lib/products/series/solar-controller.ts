import type { TechnicalSpec } from "../technical-specs";

export const solarController: TechnicalSpec = {
  key: "solar-controller",
  title: "Solar Pump Controller (MPPT-VFD)",
  shortLabel: "Solar Controller",
  productPath: "/products/solar-controllers/solar-pump-controller",
  family: "Solar",
  summary:
    "Smart MPPT-VFD solar pump controller engineered to maximize solar energy harvesting and drive AC submersible / surface pumps. Comprehensive protection package and outdoor IP65 enclosure.",
  characteristics: [
    {
      label: "Power Rating",
      units: [
        { unit: "HP", value: "1 to 25" },
        { unit: "kW", value: "0.75 to 18.5" }
      ]
    },
    { label: "Input voltage (DC)", units: [{ unit: "V DC", value: "150 – 850 (MPPT tracking window)" }] },
    { label: "Max PV array voltage", units: [{ unit: "V DC", value: "Up to 1,000 V (open circuit)" }] },
    { label: "MPPT efficiency", units: [{ unit: "%", value: "≥ 98" }] },
    { label: "Output", units: [{ unit: "—", value: "3-phase AC, 0 – 50 Hz (V/F or vector)" }] },
    { label: "Display", units: [{ unit: "—", value: "LCD with Hz / V / A / kW readout, fault codes" }] },
    { label: "Protection", units: [{ unit: "IP", value: "IP65 outdoor enclosure" }] },
    { label: "Cooling", units: [{ unit: "—", value: "Natural / fan-cooled (rating dependent)" }] },
    { label: "Compliance", units: [{ unit: "—", value: "MNRE empanelled, IEC 61683 / IS 17386" }] },
    {
      label: "Applications",
      units: [{ unit: "Use", value: "PMKSY/KUSUM solar pumping, Drinking water, Solar-grid hybrid" }]
    }
  ],
  applications: [
    "PM-KUSUM Component-B/C solar pumping",
    "Agricultural solar pumping systems",
    "Drinking water solar pumping",
    "Solar-grid hybrid pump systems",
    "Retrofit on existing AC submersible / surface pumps",
    "Remote village water supply"
  ],
  salientFeatures: [
    "Maximum Power Point Tracking (MPPT) — ≥98% efficiency",
    "Variable frequency drive (VFD) output — soft-start, smooth ramping",
    "Wide DC input window — works across the day's solar curve",
    "Comprehensive protection: dry-run, overload, surge, reverse polarity, over/under V",
    "Auto-restart on solar availability after fault clearance",
    "Built-in DC switch, surge protection device (SPD type-II)",
    "AC bypass terminal (grid input on hybrid variants)",
    "RS485 Modbus communication for SCADA / monitoring",
    "GSM / IoT remote monitoring (optional add-on)",
    "Field-serviceable design with replaceable IGBT cassette"
  ],
  construction: [
    {
      title: "Electrical details",
      rows: [
        { component: "Inverter stage", material: "IGBT (Infineon / Mitsubishi)" },
        { component: "MPPT controller", material: "DSP-based perturb-and-observe algorithm" },
        { component: "DC fuses & switch", material: "1000 V DC rated, plug-in fuses, isolator" },
        { component: "AC contactor", material: "IEC AC-3 rated, with overload relay" },
        { component: "Display", material: "LCD with backlit, alphanumeric" },
        { component: "Surge protection", material: "Type-II SPD on DC and AC sides" }
      ]
    },
    {
      title: "Enclosure & mounting",
      rows: [
        { component: "Enclosure", material: "Powder-coated MS / SS 304 (option), IP65" },
        { component: "Mounting", material: "Wall-mount with brackets; pole-mount on request" },
        { component: "Cable entry", material: "PG glands, IP65" },
        { component: "Cooling", material: "Natural convection (≤ 3 HP) / fan-cooled (≥ 5 HP)" },
        { component: "Earthing", material: "External earthing terminal, galvanised lug" },
        { component: "Painting", material: "Outdoor-grade polyester powder coat (RAL 7035)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/solar-controller.png",
  drawingAlt: "Solar pump controller (MPPT-VFD) — schematic",
  footnotes: [
    "Specify PV array size, pump rating, voltage class, and motor model for accurate selection.",
    "Mount in a shaded / well-ventilated location; do not expose the controller to direct rain or sun."
  ]
};
