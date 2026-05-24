import type { TechnicalSpec } from "../technical-specs";

export const vfdPanel: TechnicalSpec = {
  key: "vfd-panel",
  title: "VFD Panel (Variable Frequency Drive)",
  shortLabel: "VFD Panel",
  productPath: "/products/vfd-panels/vfd-panel",
  family: "Panels",
  summary:
    "Variable Frequency Drive (VFD) panel for energy-efficient motor speed control, soft starting, and process automation. Suitable for pumps, fans, blowers, compressors, and conveyors with HVAC / process / pumping firmware.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 500" },
        { unit: "kW", value: "0.37 to 375" }
      ]
    },
    { label: "Input voltage", units: [{ unit: "V AC", value: "200–240 (1Φ/3Φ) / 380–415 (3Φ) / 440–480 (3Φ)" }] },
    { label: "Output", units: [{ unit: "—", value: "3-phase, 0–599 Hz (drive-dependent)" }] },
    { label: "Control modes", units: [{ unit: "—", value: "V/F / Sensorless vector / Closed-loop vector" }] },
    { label: "Overload capacity", units: [{ unit: "—", value: "150% for 60 sec (Heavy Duty) / 110% for 60 sec (Normal Duty)" }] },
    { label: "Communication", units: [{ unit: "—", value: "Modbus RTU (std), Ethernet / Profinet / BACnet (option)" }] },
    { label: "Display", units: [{ unit: "—", value: "Built-in keypad with LCD / detachable remote panel" }] },
    {
      label: "Protections",
      units: [
        {
          unit: "—",
          value: "Over current, Over voltage, Under voltage, Earth fault, Motor overload, Phase loss, IGBT temp"
        }
      ]
    },
    { label: "Enclosure", units: [{ unit: "—", value: "Powder-coated MS, IP54 / IP55 (panel level)" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Pumps, Fans, Blowers, Compressors, Conveyors, HVAC, Process industries"
        }
      ]
    }
  ],
  applications: [
    "Pump speed control & pressure regulation",
    "HVAC chilled water & cooling tower fans",
    "Industrial blowers & compressors",
    "Conveyor speed control",
    "Booster pump systems (energy savings)",
    "Cooling tower fan control",
    "Mining hoists & winches",
    "Water treatment plant aeration blowers"
  ],
  salientFeatures: [
    "Energy savings up to 40–60% on variable torque loads (pumps / fans)",
    "Soft start / soft stop — eliminates mechanical & hydraulic shock",
    "Multiple control modes: V/F, sensorless vector, closed-loop vector",
    "Built-in PID controller for closed-loop pressure / flow / temperature control",
    "PWM-based IGBT inverter — high efficiency, low harmonics",
    "Built-in EMC filter (Cat C2 / C3) — meets IEC 61800-3",
    "DC choke / line reactor reduces input current THD",
    "Sleep / wake mode for pump applications",
    "Motor overload protection (electronic, configurable)",
    "Modbus RTU communication standard (SCADA-ready)"
  ],
  construction: [
    {
      title: "VFD & power",
      rows: [
        { component: "VFD drive", material: "Danfoss / ABB / Siemens / Schneider / Delta / Yaskawa" },
        { component: "Input fuses", material: "Semiconductor fuses (HRC class)" },
        { component: "Input contactor", material: "AC-1 duty (line side)" },
        { component: "Line reactor", material: "Iron-core 3-phase reactor (option, 3–5% impedance)" },
        { component: "DC choke", material: "Internal or external (drive-dependent)" },
        { component: "EMC filter", material: "Built-in C2/C3 or external (per environment)" },
        { component: "Output reactor / dV/dt filter", material: "For long motor cables > 50 m (option)" },
        { component: "Bypass contactor", material: "Manual / auto bypass for VFD fault (option)" }
      ]
    },
    {
      title: "Control & enclosure",
      rows: [
        { component: "Keypad / HMI", material: "Built-in alphanumeric LCD or remote 7\" touchscreen" },
        { component: "Pressure transmitter input", material: "4–20 mA, for PID closed-loop" },
        { component: "I/O", material: "Digital inputs (start/stop/reverse), analogue I/O" },
        { component: "Communication", material: "Modbus RTU (std), Ethernet / Profinet (option)" },
        { component: "Indicators", material: "LED indicators (Run, Fault, Forward, Reverse)" },
        { component: "Push buttons", material: "Start (green) / Stop (red) / Reset" },
        { component: "Enclosure", material: "Powder-coated MS, IP54/55, ventilated with fan + filter" },
        { component: "Cooling", material: "Forced fan-cooled with dust filter; AC-cooled (large frames)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/vfd-panel.jpeg",
  drawingAlt: "Variable frequency drive (VFD) panel — typical layout",
  footnotes: [
    "Specify motor rating, supply voltage, control mode, & communication protocol at RFQ stage.",
    "For motor cables > 50 m, recommend dV/dt filter or sinewave filter to protect motor insulation."
  ]
};
