import type { TechnicalSpec } from "../technical-specs";

export const automationPanel: TechnicalSpec = {
  key: "automation-panel",
  title: "PLC-Based Automation Panel",
  shortLabel: "Automation Panel",
  productPath: "/products/automation-panels/automation-panel",
  family: "Panels",
  summary:
    "PLC-based automation panel for pumping stations, water treatment plants, and industrial processes. Programmable logic, HMI display, SCADA-ready signals, and integrated motor control for fully automatic operation.",
  characteristics: [
    { label: "PLC", units: [{ unit: "—", value: "Siemens S7-1200 / Allen-Bradley Micro 850 / Mitsubishi FX5U / Delta DVP" }] },
    { label: "I/O capability", units: [{ unit: "—", value: "Digital 8–256 / Analogue 4–32 (expandable)" }] },
    { label: "HMI", units: [{ unit: "—", value: "7\" / 10\" / 15\" colour touchscreen" }] },
    { label: "Communication", units: [{ unit: "—", value: "Ethernet / Modbus RTU / Profinet / Profibus / OPC-UA" }] },
    { label: "Motor control", units: [{ unit: "—", value: "Direct contactor / Soft-starter / VFD" }] },
    { label: "Remote access", units: [{ unit: "—", value: "GSM / GPRS / IoT (optional)" }] },
    {
      label: "Pumps controlled",
      units: [
        { unit: "No.", value: "1 to 8 (typical), expandable" }
      ]
    },
    { label: "Enclosure", units: [{ unit: "—", value: "Powder-coated MS / SS 304, IP54 / IP65" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pumping stations, WTP, STP, ETP, Building automation, Industrial process"
        }
      ]
    }
  ],
  applications: [
    "Pumping stations with multi-pump control",
    "Water treatment plants (WTP)",
    "Sewage / effluent treatment plants (STP / ETP)",
    "Pressure booster systems with cascade control",
    "Building automation (BMS) integration",
    "Industrial process automation",
    "Solar pumping with remote monitoring",
    "Municipal water distribution"
  ],
  salientFeatures: [
    "Programmable Logic Controller (PLC) — application-specific logic",
    "Colour HMI touchscreen — alarms, trends, set-points, recipes",
    "Cascade duty-standby with auto-rotation of pumps",
    "Pressure / flow / level transmitter inputs (4–20 mA)",
    "VFD speed control with PID loop",
    "Soft-start / soft-stop sequencing",
    "Data logging (USB / SD card / cloud)",
    "Email / SMS / app alerts on alarm",
    "Modbus RTU / Ethernet for SCADA integration",
    "Remote access via VPN / IoT gateway"
  ],
  construction: [
    {
      title: "Automation & control",
      rows: [
        { component: "PLC", material: "Siemens / Allen-Bradley / Mitsubishi / Delta" },
        { component: "HMI", material: "7\" / 10\" / 15\" colour touchscreen, IP65 front" },
        { component: "I/O modules", material: "DI / DO / AI / AO expansion modules (plug-in)" },
        { component: "Pressure transmitter", material: "4–20 mA, 0–10/16/25 bar (process-dependent)" },
        { component: "Flow meter input", material: "Pulse / 4–20 mA from electromagnetic / ultrasonic flow meter" },
        { component: "Level sensor", material: "Ultrasonic / hydrostatic / float (process-dependent)" },
        { component: "VFDs", material: "Per pump (when speed control required)" },
        { component: "Communication modules", material: "Ethernet / Modbus / Profinet / Profibus" }
      ]
    },
    {
      title: "Power & enclosure",
      rows: [
        { component: "Incoming protection", material: "MCCB with electronic trip, ICU 25–50 kA" },
        { component: "Motor contactors", material: "AC-3 duty, sized to motor rating" },
        { component: "Overload relays", material: "Thermal / electronic, with single-phasing protection" },
        { component: "Control transformer", material: "230 V / 24 V DC SMPS for PLC supply" },
        { component: "UPS / battery backup", material: "PLC + HMI on UPS (optional)" },
        { component: "Enclosure", material: "Powder-coated MS / SS 304, IP54 / IP65" },
        { component: "Cooling", material: "Natural / fan-cooled / air-conditioner (large enclosures)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/control-panel.png",
  drawingAlt: "PLC-based automation panel — typical layout",
  footnotes: [
    "Specify number of pumps, control strategy (cascade / lead-lag / pressure / level), and SCADA protocol at RFQ stage.",
    "For mission-critical applications, recommend redundant PLC + UPS power for control circuit."
  ]
};
