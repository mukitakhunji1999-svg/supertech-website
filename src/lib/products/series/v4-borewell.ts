/**
 * SUPERTECH V4 — 100 mm (4") Borewell Submersible Pump Set
 *
 * Series covers Oil Filled (OF) and Water Filled (WF) motor variants,
 * suitable for 100 mm borewell or above. Performance at 2880 RPM,
 * 200–240 V single phase / 380–415 V three phase, 50 Hz AC supply.
 *
 * Performance data is sourced from the SUPERTECH engineering catalogue
 * for 4" submersible pump sets; republished here for procurement reference.
 */

import type { TechnicalSpec } from "../technical-specs";

export const v4BorewellSubmersible: TechnicalSpec = {
  key: "v4-borewell-submersible",
  title: "V4 — 100 mm (4\") Borewell Submersible Pump Set",
  shortLabel: "V4 Borewell Submersible Pump",
  productPath: "/products/borewell-submersible-pumps/v4-borewell-submersible-pump",
  family: "Pumps",
  summary:
    "Premium 4-inch borewell submersible pump set engineered for stable performance, sand resistance, and long service life across agriculture, municipal water supply, industrial, and high-rise applications. Available in Oil Filled (OF) and Water Filled (WF) motor configurations.",
  characteristics: [
    {
      label: "Motor Rating",
      units: [
        { unit: "HP", value: "0.5 to 10" },
        { unit: "kW", value: "0.37 to 7.5" }
      ]
    },
    { label: "Stages", units: [{ unit: "No.", value: "4 to 50" }] },
    { label: "Head Range", units: [{ unit: "Metres", value: "10 to 400" }] },
    { label: "Discharge", units: [{ unit: "LPM", value: "30 to 400" }] },
    {
      label: "Outlet",
      units: [
        { unit: "mm", value: "32 / 38 / 50 / 65" },
        { unit: "inch", value: "1¼ / 1½ / 2 / 2½" }
      ]
    },
    { label: "Speed", units: [{ unit: "RPM", value: "2880" }] },
    { label: "Frequency", units: [{ unit: "Hz", value: "50" }] },
    { label: "Supply", units: [{ unit: "Volt", value: "200–240 (1Φ) / 380–415 (3Φ)" }] },
    { label: "Bore", units: [{ unit: "mm", value: "Minimum 100 mm" }] },
    {
      label: "Applications",
      units: [
        {
          unit: "Use",
          value: "Domestic, Agriculture, Industrial, Sprinkler, Fire fighting, High-rise buildings"
        }
      ]
    }
  ],
  applications: [
    "Domestic & municipal water supply",
    "Agriculture water supply",
    "Sprinkler & pressure boosting irrigation",
    "Fire fighting systems",
    "High-rise buildings",
    "Fountains & gardens",
    "Civil & industrial applications"
  ],
  salientFeatures: [
    "Dynamically balanced rotating parts for minimum noise and vibration-free operation",
    "Compact body and reduced weight for easy installation and transportation",
    "Wide voltage band operation for stable performance in variable supply conditions",
    "Oil Filled (OF) motors filled with food-grade insulating oil for bearing lubrication and improved thermal conductivity",
    "Water Filled (WF) motors with multi-layer PVC insulated winding and German-technology carbon thrust bearing",
    "Starts easily at low voltage",
    "Non-Return Valve (NRV) reduces thrust load from back pressure when the pump set is switched off",
    "Impeller and bowl in glass-filled noryl for strong resistance against sand",
    "SS 304 hardware (including stud nut) for corrosion resistance in hard or sandy water",
    "CI parts coated with CED for better corrosion resistance, durability, and alignment",
    "Compliant with IS:8034-2002 (Water Filled motor pumpsets)"
  ],
  operatingSpecs: [
    { label: "Bore size", value: "Suitable for 100 mm borewell or above (min. bore dia. 100 mm)" },
    { label: "Speed", value: "2880 RPM" },
    { label: "Supply", value: "200–240 V single phase / 380–415 V three phase" },
    { label: "Frequency", value: "50 Hz AC" },
    { label: "Motor OD (max)", value: "96.5 mm" },
    { label: "Pump OD (max)", value: "96.5 mm (OF) • 98 mm (WF)" },
    { label: "Standard outlet sizes", value: "32 mm • 38 mm • 50 mm • 65 mm (series-dependent)" },
    { label: "Flow type", value: "Radial / Mixed (series-dependent)" },
    { label: "Motor configurations", value: "Oil Filled (OF) and Water Filled (WF)" },
    { label: "Single-phase availability", value: "OF up to 3 HP • WF up to 5 HP" },
    { label: "Compliance", value: "IS:8034-2002 (WF motor pumpsets)" }
  ],
  construction: [
    {
      title: "Motor details — Oil Filled (OF)",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Aluminium pressure die-cast" },
        { component: "Motor body", material: "Non-magnetic stainless steel" },
        { component: "Bearing", material: "Roller ball bearing / heavy-duty angular contact bearing" },
        {
          component: "Mechanical seal",
          material:
            "High-grade mechanical seal for zero leakage, minimal friction loss, and shaft-wear protection"
        },
        { component: "Winding", material: "Dual-coat EC grade copper wire with F class insulation" },
        {
          component: "Cable sealing",
          material: "Water-protecting device preventing outside material from entering the motor arrangement"
        },
        {
          component: "Pressure diaphragm",
          material: "Sufficient size to contain expansion of insulating oil and avoid cooling-oil defeat"
        }
      ]
    },
    {
      title: "Motor details — Water Filled (WF)",
      rows: [
        { component: "Stator", material: "Insulated varnish using vacuum impregnation method" },
        { component: "Rotor", material: "Copper / aluminium pressure die-cast" },
        { component: "Motor body", material: "Non-magnetic stainless steel 304" },
        {
          component: "Thrust bearing",
          material:
            "Self-aligned carbon vs. stainless steel thrust bearing withstanding high axial thrust load in water lubrication (German technology)"
        },
        { component: "Winding", material: "Multi-layer PVC insulated wire" },
        {
          component: "Cable sealing",
          material: "Nitrile rubber bush locking to prevent foreign particles entering the motor arrangement"
        },
        {
          component: "Journal bearings",
          material: "Gun-metal bush with 2% nickel, additional centrifugal molding process for wear protection"
        },
        {
          component: "Pressure diaphragm",
          material: "Sufficient size to contain water expansion inside the diaphragm motor and avoid cooling-water defeat"
        }
      ]
    },
    {
      title: "Pump details",
      rows: [
        { component: "Bowl", material: "Glass-filled noryl / cast iron" },
        { component: "Impeller", material: "Glass-filled abrasion-resistant noryl / cast iron" },
        { component: "Shaft", material: "Chrome steel (OF) / stainless steel (WF)" },
        { component: "Wearing rings", material: "High-quality abrasion-resistant stainless steel" },
        {
          component: "Suction casing",
          material:
            "Heavy-duty casting material with SS strainer for protection against foreign particles"
        },
        {
          component: "Non-return valve",
          material: "Reduces thrust generated from back pressure of long pipelines on switch-off"
        }
      ]
    }
  ],
  performance: [
    {
      title: "V4 OF & WF — Series WO:1L / WW:1L / VSO:71 / VSR:71 (38 mm outlet, radial)",
      outletSize: "38 mm (50 mm on demand)",
      flowType: "Radial",
      heads: [0, 70, 85, 110, 120, 130, 140, 150],
      rows: [
        { model: "WO:1L / WW:1L", stages: 7, kw: 1.1, hp: 1.5, discharge: [47, 42, 39, 36, 34, 32, 27, 23] },
        { model: "WO:1L / WW:1L", stages: 8, kw: 1.5, hp: 2.0, discharge: [53, 48, 45, 41, 39, 36, 31, 27] },
        { model: "WO:1L / WW:1L", stages: 10, kw: 1.5, hp: 2.0, discharge: [67, 60, 56, 52, 48, 45, 38, 33] },
        { model: "VSO:71 / VSR:71", stages: 12, kw: 2.2, hp: 3.0, discharge: [80, 72, 69, 63, 61, 56, 49, 41] },
        { model: "VSR:71", stages: 15, kw: 2.2, hp: 3.0, discharge: [100, 90, 86, 79, 75, 70, 59, 52] }
      ]
    },
    {
      title: "V4 WF — Series VS:71H (38 mm outlet, radial, high-stage)",
      outletSize: "38 mm (50 mm on demand)",
      flowType: "Radial",
      heads: [0, 80, 95, 115, 125, 135, 145, 150],
      rows: [
        { model: "VS:71H", stages: 18, kw: 3.0, hp: 4.0, discharge: [122, 109, 103, 94, 88, 82, 71, 63] },
        { model: "VS:71H", stages: 19, kw: 3.7, hp: 5.0, discharge: [129, 115, 109, 99, 93, 87, 75, 67] },
        { model: "VS:71H", stages: 22, kw: 3.7, hp: 5.0, discharge: [149, 133, 126, 115, 108, 101, 87, 78] },
        { model: "VS:71H", stages: 25, kw: 3.7, hp: 5.0, discharge: [169, 152, 144, 131, 123, 115, 98, 89] },
        { model: "VS:71H", stages: 31, kw: 4.0, hp: 6.0, discharge: [210, 188, 178, 162, 152, 142, 122, 110] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:0L / WW:0L (38 mm outlet, radial)",
      outletSize: "38 mm",
      flowType: "Radial",
      heads: [0, 30, 50, 80, 90, 110, 120],
      rows: [
        { model: "WO:0L / WW:0L", stages: 7, kw: 0.75, hp: 1.0, discharge: [46, 44, 42, 35, 32, 27, 22] },
        { model: "WO:0L / WW:0L", stages: 10, kw: 1.1, hp: 1.5, discharge: [66, 63, 60, 50, 46, 38, 31] },
        { model: "WO:0L / WW:0L", stages: 12, kw: 1.5, hp: 2.0, discharge: [79, 76, 72, 60, 55, 46, 37] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:2L / WW:2L (32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 20, 30, 40, 50, 60, 70, 90],
      rows: [
        { model: "WO:2L / WW:2L", stages: 7, kw: 0.55, hp: 0.75, discharge: [42, 39, 38, 37, 36, 33, 30, 23] },
        { model: "WO:2L / WW:2L", stages: 8, kw: 0.75, hp: 1.0, discharge: [48, 45, 44, 42, 41, 38, 34, 26] },
        { model: "WO:2L / WW:2L", stages: 10, kw: 0.75, hp: 1.0, discharge: [60, 56, 54, 53, 51, 47, 43, 33] },
        { model: "WO:2L / WW:2L", stages: 12, kw: 1.1, hp: 1.5, discharge: [72, 68, 65, 63, 61, 57, 51, 39] },
        { model: "WO:2L / WW:2L", stages: 14, kw: 1.1, hp: 1.5, discharge: [84, 79, 76, 74, 71, 66, 60, 46] },
        { model: "WO:2L / WW:2L", stages: 16, kw: 1.5, hp: 2.0, discharge: [96, 90, 87, 84, 81, 76, 68, 52] },
        { model: "WO:2L / WW:2L", stages: 18, kw: 1.5, hp: 2.0, discharge: [108, 102, 98, 95, 92, 85, 77, 59] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:3L / WW:3L (32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 22, 26, 37, 42, 45, 55, 68],
      rows: [
        { model: "WO:3L / WW:3L", stages: 6, kw: 0.37, hp: 0.5, discharge: [35, 32, 31, 29, 28, 26, 23, 8] },
        { model: "WO:3LE / WW:3LE", stages: 8, kw: 0.75, hp: 1.0, discharge: [46, 43, 41, 39, 37, 35, 30, 10] },
        { model: "WO:3L / WW:3L", stages: 10, kw: 0.55, hp: 0.75, discharge: [58, 53, 51, 48, 46, 44, 38, 13] },
        { model: "WO:3L / WW:3L", stages: 12, kw: 0.75, hp: 1.0, discharge: [69, 64, 61, 58, 55, 53, 45, 15] },
        { model: "WO:3L / WW:3L", stages: 16, kw: 1.1, hp: 1.5, discharge: [92, 85, 81, 77, 73, 71, 60, 20] },
        { model: "WO:3L / WW:3L", stages: 21, kw: 1.1, hp: 1.5, discharge: [121, 112, 107, 102, 97, 92, 79, 27] },
        { model: "WW:3L", stages: 25, kw: 1.5, hp: 2.0, discharge: [144, 134, 128, 121, 115, 110, 94, 32] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:4H / WW:4H(L) (32 mm outlet, radial)",
      outletSize: "32 mm (38 mm on demand)",
      flowType: "Radial",
      heads: [0, 13, 20, 24, 27, 34, 39, 45],
      rows: [
        { model: "WO:4HE / WW:4H(L)E", stages: 10, kw: 0.75, hp: 1.0, discharge: [73, 63, 59, 55, 53, 43, 35, 22] },
        { model: "WO:4H / WW:4H(L)", stages: 14, kw: 0.75, hp: 1.0, discharge: [102, 88, 82, 77, 74, 60, 49, 31] },
        { model: "WO:4H / WW:4H(L)", stages: 16, kw: 0.75, hp: 1.0, discharge: [116, 101, 94, 88, 84, 68, 56, 35] },
        { model: "WO:4H / WW:4H(L)", stages: 18, kw: 1.1, hp: 1.5, discharge: [131, 113, 105, 99, 95, 77, 63, 40] }
      ]
    },
    {
      title: "V4 WF — Series VSO:5H / VS:5H (32 mm outlet, radial, high-head)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 14, 16, 18, 20, 25, 30, 40, 45, 50],
      rows: [
        { model: "VSO:5H / VS:5H", stages: 7, kw: 0.37, hp: 0.5, discharge: [54, 48, 46, 45, 43, 42, 37, 32, 25, 19] },
        { model: "VSO:5H / VS:5H", stages: 10, kw: 0.55, hp: 0.75, discharge: [77, 69, 66, 64, 62, 60, 53, 45, 36, 27] },
        { model: "VSO:5H / VS:5H", stages: 13, kw: 0.75, hp: 1.0, discharge: [100, 89, 86, 84, 81, 78, 68, 59, 47, 35] },
        { model: "VS:5H", stages: 18, kw: 1.1, hp: 1.5, discharge: [139, 123, 119, 116, 112, 108, 95, 81, 65, 48] },
        { model: "VS:5H", stages: 20, kw: 1.1, hp: 1.5, discharge: [154, 137, 133, 129, 124, 120, 105, 90, 73, 54] },
        { model: "VS:5H", stages: 25, kw: 1.5, hp: 2.0, discharge: [193, 171, 166, 161, 155, 150, 131, 113, 91, 67] },
        { model: "VS:5H", stages: 27, kw: 1.5, hp: 2.0, discharge: [208, 185, 179, 174, 167, 162, 141, 122, 98, 72] },
        { model: "VS:5H", stages: 30, kw: 1.5, hp: 2.0, discharge: [231, 206, 199, 193, 186, 180, 158, 135, 109, 80] },
        { model: "VS:5H", stages: 40, kw: 2.2, hp: 3.0, discharge: [308, 274, 265, 257, 248, 240, 210, 180, 145, 107] },
        { model: "VS:5H", stages: 50, kw: 3.0, hp: 4.0, discharge: [385, 343, 332, 321, 310, 300, 263, 225, 182, 133] }
      ]
    },
    {
      title: "V4 WF — Series VS:7H (32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 25, 30, 35, 45, 50, 55, 60, 65, 75],
      rows: [
        { model: "VS:7H", stages: 10, kw: 0.75, hp: 1.0, discharge: [80, 71, 68, 63, 58, 53, 47, 41, 34, 26] },
        { model: "VS:7H", stages: 15, kw: 1.1, hp: 1.5, discharge: [120, 107, 101, 95, 87, 79, 71, 62, 52, 40] },
        { model: "VS:7H", stages: 20, kw: 1.5, hp: 2.0, discharge: [160, 142, 135, 126, 116, 106, 94, 82, 69, 53] },
        { model: "VS:7H", stages: 25, kw: 2.2, hp: 3.0, discharge: [201, 178, 169, 158, 145, 132, 118, 103, 86, 66] },
        { model: "VS:7H", stages: 30, kw: 2.2, hp: 3.0, discharge: [241, 214, 203, 189, 174, 158, 142, 124, 103, 79] },
        { model: "VS:7H", stages: 40, kw: 3.0, hp: 4.0, discharge: [321, 285, 270, 252, 232, 211, 189, 165, 138, 106] },
        { model: "VS:7H", stages: 50, kw: 3.7, hp: 5.0, discharge: [401, 356, 338, 315, 290, 264, 236, 206, 172, 132] }
      ]
    },
    {
      title: "V4 OF & WF — Series VSO:74 J / VS:74 J (50 & 65 mm outlet, mixed flow)",
      outletSize: "50 & 65 mm",
      flowType: "Mixed",
      heads: [0, 190, 225, 265, 295, 320, 350, 365, 380],
      rows: [
        { model: "VSO:74 J / VS:74 J", stages: 7, kw: 1.5, hp: 2.0, discharge: [39, 29, 26, 23, 21, 19, 16, 14, 12] },
        { model: "VSO:74 JE", stages: 7, kw: 2.2, hp: 3.0, discharge: [39, 29, 26, 23, 21, 19, 16, 14, 12] },
        { model: "VSO:74 J / VS:74 J", stages: 8, kw: 2.2, hp: 3.0, discharge: [44, 33, 30, 27, 24, 21, 18, 16, 13] },
        { model: "VS:74 J", stages: 9, kw: 2.2, hp: 3.0, discharge: [50, 37, 34, 30, 27, 24, 20, 18, 15] },
        { model: "VS:74 J", stages: 10, kw: 3.0, hp: 4.0, discharge: [56, 41, 38, 33, 30, 27, 22, 20, 17] },
        { model: "VS:74 J", stages: 12, kw: 3.7, hp: 5.0, discharge: [67, 49, 45, 40, 36, 32, 27, 24, 20] },
        { model: "VS:74 J", stages: 14, kw: 3.7, hp: 5.0, discharge: [78, 58, 53, 47, 42, 37, 31, 28, 23] },
        { model: "VS:74 J", stages: 16, kw: 4.5, hp: 6.0, discharge: [89, 66, 60, 53, 48, 43, 36, 32, 27] },
        { model: "VS:74 J", stages: 18, kw: 4.5, hp: 6.0, discharge: [100, 74, 68, 60, 54, 48, 40, 36, 30] }
      ]
    },
    {
      title: "V4 OF & WF — Series VSO:74 C / VS:74 C (50 & 65 mm outlet, mixed flow, high-discharge)",
      outletSize: "50 & 65 mm",
      flowType: "Mixed",
      heads: [0, 210, 260, 320, 370, 425, 485, 600],
      rows: [
        { model: "VSO:74 C / VS:74 C", stages: 5, kw: 1.5, hp: 2.0, discharge: [30, 24, 21, 19, 17, 15, 13, 9] },
        { model: "VSO:74 C / VS:74 C", stages: 6, kw: 1.5, hp: 2.0, discharge: [36, 28, 26, 23, 21, 18, 15, 10] },
        { model: "VSO:74 C / VS:74 C", stages: 6, kw: 2.2, hp: 3.0, discharge: [36, 28, 26, 23, 21, 18, 15, 10] },
        { model: "VS:74 C", stages: 7, kw: 2.2, hp: 3.0, discharge: [42, 33, 30, 27, 24, 21, 18, 12] },
        { model: "VS:74 C", stages: 10, kw: 3.7, hp: 5.0, discharge: [60, 47, 43, 39, 34, 30, 26, 17] },
        { model: "VS:74 C", stages: 14, kw: 5.5, hp: 7.5, discharge: [84, 66, 60, 54, 48, 42, 36, 24] },
        { model: "VS:74 C", stages: 16, kw: 7.5, hp: 10.0, discharge: [96, 75, 68, 62, 55, 48, 41, 27] }
      ]
    },
    {
      title: "V4 OF & WF — Series VSO:79 / VS:79 (65 mm outlet, mixed flow)",
      outletSize: "65 mm",
      flowType: "Mixed",
      heads: [0, 120, 200, 250, 300, 350, 400, 450, 500],
      rows: [
        { model: "VSO:79 / VS:79", stages: 6, kw: 2.2, hp: 3.0, discharge: [38, 33, 30, 27, 24, 21, 18, 15, 12] },
        { model: "VS:79", stages: 7, kw: 2.2, hp: 3.0, discharge: [44, 39, 35, 32, 28, 24.5, 21, 18, 14] },
        { model: "VS:79", stages: 10, kw: 3.7, hp: 5.0, discharge: [62, 55, 50, 45, 40, 35, 30, 25, 20] },
        { model: "VS:79", stages: 12, kw: 4.5, hp: 6.0, discharge: [75, 66, 60, 54, 48, 42, 36, 30, 24] },
        { model: "VS:79", stages: 14, kw: 5.5, hp: 7.5, discharge: [88, 77, 70, 63, 56, 49, 42, 35, 28] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:5L / WW:5L (32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 10, 15, 20, 25, 35, 40],
      rows: [
        { model: "WO:5L / WW:5L", stages: 8, kw: 0.37, hp: 0.5, discharge: [45, 42, 40, 38, 34, 28, 20] },
        { model: "WO:5L / WW:5L", stages: 9, kw: 0.37, hp: 0.5, discharge: [50, 48, 45, 43, 39, 32, 22] },
        { model: "WO:5L / WW:5L", stages: 14, kw: 0.55, hp: 0.75, discharge: [78, 74, 70, 67, 60, 49, 35] },
        { model: "WO:5L / WW:5L", stages: 16, kw: 0.75, hp: 1.0, discharge: [90, 85, 80, 77, 69, 56, 40] },
        { model: "WO:5L / WW:5L", stages: 18, kw: 0.75, hp: 1.0, discharge: [101, 95, 90, 86, 77, 63, 45] },
        { model: "WO:5L / WW:5L", stages: 20, kw: 0.75, hp: 1.0, discharge: [112, 106, 100, 96, 86, 70, 50] },
        { model: "WO:5L / WW:5L", stages: 21, kw: 0.75, hp: 1.0, discharge: [118, 111, 105, 101, 90, 74, 52] },
        { model: "WO:5L / WW:5L", stages: 25, kw: 1.1, hp: 1.5, discharge: [140, 132, 125, 120, 108, 88, 62] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:7L / WW:7L / VSO:77 (50 mm outlet, mixed flow)",
      outletSize: "50 mm",
      flowType: "Mixed",
      heads: [0, 110, 160, 190, 220, 250],
      rows: [
        { model: "WO:7L / WW:7L", stages: 6, kw: 1.1, hp: 1.5, discharge: [40, 33, 27, 22, 18, 10] },
        { model: "WO:7L / WW:7L", stages: 8, kw: 1.5, hp: 2.0, discharge: [53, 44, 36, 30, 24, 14] },
        { model: "WW:7L", stages: 10, kw: 2.2, hp: 3.0, discharge: [66, 55, 45, 38, 32, 17] },
        { model: "VSO:77 / WW:7L", stages: 12, kw: 2.2, hp: 3.0, discharge: [79, 66, 54, 46, 38, 20] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:2H / WW:2H (32 mm outlet, radial)",
      outletSize: "32 mm",
      flowType: "Radial",
      heads: [0, 28, 42, 43, 45, 52, 58, 64, 80, 92],
      rows: [
        { model: "WO:2H / WW:2H", stages: 4, kw: 0.37, hp: 0.5, discharge: [35, 31, 29, 28.5, 28, 26, 23, 21, 16, 11] },
        { model: "WO:2H / WW:2H", stages: 5, kw: 0.37, hp: 0.5, discharge: [44, 39, 36, 36, 35, 33, 29, 26, 20, 14] },
        { model: "WO:2H / WW:2H", stages: 7, kw: 0.75, hp: 1.0, discharge: [60, 55, 51, 50, 49, 45, 41, 37, 28, 19] },
        { model: "WO:2H / WW:2H", stages: 10, kw: 1.1, hp: 1.5, discharge: [87, 78, 72, 71, 69, 63, 59, 53, 40, 28] },
        { model: "WO:2H / WW:2H", stages: 12, kw: 1.1, hp: 1.5, discharge: [104, 94, 86, 85, 83, 76, 71, 63, 49, 33] },
        { model: "WO:2H / WW:2H", stages: 14, kw: 1.5, hp: 2.0, discharge: [121, 110, 101, 99, 97, 89, 82, 74, 57, 39] },
        { model: "WW:2H", stages: 16, kw: 1.5, hp: 2.0, discharge: [139, 125, 115, 113, 111, 101, 94, 84, 65, 44] },
        { model: "WW:2H", stages: 18, kw: 2.2, hp: 3.0, discharge: [156, 141, 129, 127, 125, 114, 106, 95, 73, 50] }
      ]
    },
    {
      title: "V4 OF & WF — Series WO:3H(N) / WW:3H(N) (38 mm outlet, radial)",
      outletSize: "38 mm (50 mm on demand)",
      flowType: "Radial",
      heads: [0, 35, 42, 50, 70, 75, 80, 90, 95],
      rows: [
        { model: "WO:3H(N) / WW:3H(N)", stages: 7, kw: 0.55, hp: 0.75, discharge: [51, 46, 42, 38, 32, 28, 25, 20, 14] },
        { model: "WO:3H(N)E / WW:3H(N)E", stages: 7, kw: 0.75, hp: 1.0, discharge: [51, 46, 42, 38, 32, 28, 25, 20, 14] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 8, kw: 0.75, hp: 1.0, discharge: [58, 53, 48, 43, 36, 33, 29, 23, 16] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 10, kw: 0.75, hp: 1.0, discharge: [73, 66, 60, 54, 45, 41, 36, 29, 20] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 12, kw: 1.1, hp: 1.5, discharge: [88, 79, 72, 65, 54, 49, 43, 35, 24] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 15, kw: 1.1, hp: 1.5, discharge: [110, 99, 90, 81, 68, 61, 54, 44, 30] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 14, kw: 1.5, hp: 2.0, discharge: [102, 92, 84, 75, 63, 57, 50, 40, 28] },
        { model: "WO:3H(N) / WW:3H(N)", stages: 18, kw: 1.5, hp: 2.0, discharge: [132, 118, 108, 97, 81, 73, 64, 52, 36] },
        { model: "WW:3H(N)", stages: 21, kw: 2.2, hp: 3.0, discharge: [154, 138, 126, 113, 95, 85, 75, 60, 42] },
        { model: "WW:3H(N)", stages: 25, kw: 2.2, hp: 3.0, discharge: [183, 164, 150, 135, 113, 101, 89, 71, 50] }
      ]
    }
  ],
  drawingSrc: "/images/drawings/v4-borewell-submersible.png",
  drawingAlt: "V4 4-inch borewell submersible pump set — schematic cross-section",
  footnotes: [
    "Note: OF — Single-phase motors are available up to 3 H.P. WF — Single-phase motors are available up to 5 H.P.",
    "Performance data is approximate at 2880 RPM under nominal supply voltage. Site duty point selection via RFQ recommended.",
    "Discharge values are in LPM (litres per minute); head values are in metres."
  ]
};
