export type ProductCategory = {
  slug: string;
  name: string;
  intro: string;
};

export type ProductGroup = {
  slug: string;
  name: string;
  categories: ProductCategory[];
};

export const productGroups: ProductGroup[] = [
  {
    slug: "pumps",
    name: "Pumps",
    categories: [
      { slug: "borewell-submersible-pumps", name: "Borewell Submersible Pumps", intro: "High-head borewell pumping for agriculture, infrastructure, and industrial duty (V3 / V4 / V5 / V6 / V8)." },
      { slug: "openwell-submersible-pumps", name: "Openwell Submersible Pumps", intro: "Robust openwell pump sets for continuous lifting from openwells and reservoirs." },
      { slug: "stainless-steel-pumps", name: "Stainless Steel Pumps", intro: "Corrosion-resistant stainless steel pumps for tough water quality and long service life." },
      { slug: "monoblock-pumps", name: "Monoblock Pumps", intro: "Integrated pump and motor monoblock designs for compact surface installation." },
      { slug: "mini-monoblock-pumps", name: "Mini Monoblock Pumps", intro: "Compact monoblock pumps for domestic and light commercial water supply." },
      { slug: "centrifugal-pumps", name: "Centrifugal Pumps", intro: "End-suction centrifugal pumps for transfer, circulation, and process duty." },
      { slug: "self-priming-pumps", name: "Self Priming Pumps", intro: "Fast priming and stable suction characteristics for dependable above-ground supply." },
      { slug: "pressure-booster-pumps", name: "Pressure Booster Pumps", intro: "Booster systems for stable pressure in buildings, plants, and distribution networks." },
      { slug: "horizontal-pumps", name: "Horizontal Pumps", intro: "Horizontal split-case pumps for large-flow water supply and infrastructure duty." },
      { slug: "vertical-pumps", name: "Vertical Pumps", intro: "Vertical inline multistage pumps for tight footprints and pressure boosting." },
      { slug: "sewage-pumps", name: "Sewage Pumps", intro: "Heavy-duty sewage and solids handling pumps for municipal and industrial waste." },
      { slug: "dewatering-pumps", name: "Dewatering Pumps", intro: "Construction and mining dewatering — portable, abrasion-tolerant, quick to deploy." }
    ]
  },
  {
    slug: "motors",
    name: "Motors",
    categories: [
      { slug: "water-filled-motors", name: "Water Filled Motors", intro: "Water-lubricated rewindable submersible motors (3'' – 8'', 0.5 – 100 HP)." },
      { slug: "oil-filled-motors", name: "Oil Filled Motors", intro: "Oil-lubricated rewindable submersible motors (3'' / 4'', 0.5 – 7.5 HP)." },
      { slug: "induction-motors", name: "Induction Motors", intro: "3-phase squirrel cage industrial motors for pumps, blowers, compressors, and machinery." },
      { slug: "single-phase-motors", name: "Single Phase Motors", intro: "Single-phase capacitor-start / capacitor-run motors for domestic and light industrial duty." }
    ]
  },
  {
    slug: "solar",
    name: "Solar",
    categories: [
      { slug: "solar-pumping-systems", name: "Solar Pumping Systems", intro: "End-to-end solar water pumping systems engineered for agriculture and remote locations." },
      { slug: "solar-controllers", name: "Solar Controllers", intro: "MPPT / VFD controllers that maximise energy harvest and protect the pump set." },
      { slug: "solar-pv-modules", name: "Solar PV Modules", intro: "Mono-PERC, TOPCon and bifacial PV modules for solar pumping and rooftop systems." },
      { slug: "solar-structures", name: "Solar Structures", intro: "Hot-dip galvanised PV mounting structures designed for wind / snow loads and corrosion resistance." },
      { slug: "solar-ac-dc-cables", name: "Solar AC/DC Cables", intro: "Solar-grade DC & AC cabling optimised for UV, voltage drop, and lifetime safety." }
    ]
  },
  {
    slug: "pipes-cables",
    name: "Pipes & Cables",
    categories: [
      { slug: "upvc-column-pipes", name: "uPVC Column Pipes", intro: "Column pipes engineered for borewell installations with high mechanical strength." },
      { slug: "submersible-flat-cables", name: "Submersible Flat Cables", intro: "Export-grade submersible flat cables designed for submersible pump installations." },
      { slug: "pvc-insulated-cables", name: "PVC Insulated Cables", intro: "PVC insulated power cables for industrial and infrastructure electrical works." },
      { slug: "industrial-cables", name: "Industrial Cables", intro: "Armoured / XLPE industrial cables for LT and HT distribution in harsh environments." }
    ]
  },
  {
    slug: "valves",
    name: "Valves",
    categories: [
      { slug: "butterfly-valves", name: "Butterfly Valves", intro: "Wafer / lug / flanged butterfly valves for isolation and flow control duty." },
      { slug: "nrv-valves", name: "Non-Return (NRV) Valves", intro: "Swing, dual-plate and silent disc-lift check valves to prevent reverse flow." },
      { slug: "gate-valves", name: "Gate Valves", intro: "Resilient-seated and metal-seated sluice / gate valves for full-bore isolation duty." },
      { slug: "ball-valves", name: "Ball Valves", intro: "2-piece, 3-piece, floating and trunnion-mounted ball valves for quick shutoff duty." }
    ]
  },
  {
    slug: "panels",
    name: "Panels",
    categories: [
      { slug: "control-panels", name: "Control Panels", intro: "Pump and motor control panels engineered for protection and reliability." },
      { slug: "starter-panels", name: "Starter Panels (DOL / Star-Delta / MCC)", intro: "Motor starter panels with robust protection and easy serviceability." },
      { slug: "automation-panels", name: "Automation Panels (PLC / SCADA)", intro: "PLC / SCADA automation panels for pumping stations and industrial control." },
      { slug: "vfd-panels", name: "VFD Panels", intro: "VFD panels for energy efficiency, pressure stability, and smooth motor control." },
      { slug: "pump-controllers", name: "Pump Controllers", intro: "Smart controllers for dry-run safety, level control, and performance monitoring." }
    ]
  }
];

export const allCategories = productGroups.flatMap((g) => g.categories);

