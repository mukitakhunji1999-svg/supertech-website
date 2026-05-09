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
      { slug: "borewell-submersible-pumps", name: "Borewell Submersible Pumps", intro: "High-head, high-efficiency borewell pumping for agriculture, infrastructure, and industrial duty." },
      { slug: "openwell-submersible-pumps", name: "Openwell Submersible Pumps", intro: "Robust openwell solutions with reliable performance for continuous pumping." },
      { slug: "stainless-steel-pumps", name: "Stainless Steel Pumps", intro: "Corrosion-resistant stainless steel construction for tough water quality and long service life." },
      { slug: "monoblock-pumps", name: "Monoblock Pumps", intro: "Integrated pump and motor monoblock designs optimized for compact installation and durability." },
      { slug: "mini-monoblock-pumps", name: "Mini Monoblock Pumps", intro: "Compact pumping for domestic and light commercial applications." },
      { slug: "centrifugal-pumps", name: "Centrifugal Pumps", intro: "High-flow centrifugal solutions for transfer, circulation, and process applications." },
      { slug: "self-priming-pumps", name: "Self Priming Pumps", intro: "Fast priming and stable suction characteristics for dependable water supply." },
      { slug: "pressure-booster-pumps", name: "Pressure Booster Pumps", intro: "Booster systems for stable pressure in buildings, plants, and distribution networks." },
      { slug: "horizontal-pumps", name: "Horizontal Pumps", intro: "Horizontal installation industrial pumps for flexible piping and service access." },
      { slug: "vertical-pumps", name: "Vertical Pumps", intro: "Vertical solutions for tight footprints and plant utility applications." },
      { slug: "sewage-pumps", name: "Sewage Pumps", intro: "Heavy-duty sewage and solids handling pumps for municipal and industrial waste." },
      { slug: "slurry-pumps", name: "Slurry Pumps", intro: "Abrasive slurry handling with wear-optimized hydraulics and materials." },
      { slug: "dewatering-pumps", name: "Dewatering Pumps", intro: "Construction and mining dewatering with high reliability and quick deployment." },
      { slug: "surface-pumps", name: "Surface Pumps", intro: "Surface-mounted water transfer for agriculture, buildings, and utilities." },
      { slug: "industrial-pumps", name: "Industrial Pumps", intro: "Process-ready industrial pumping portfolio for plants, utilities, and EPC projects." },
      { slug: "agricultural-pumps", name: "Agricultural Pumps", intro: "High-efficiency irrigation and farm water supply solutions built for long duty cycles." },
      { slug: "domestic-pumps", name: "Domestic Pumps", intro: "Quiet, efficient domestic water supply pumps for homes and small buildings." }
    ]
  },
  {
    slug: "motors",
    name: "Motors",
    categories: [
      { slug: "water-filled-motors", name: "Water Filled Motors", intro: "Reliable water-filled submersible motors engineered for thermal stability and efficiency." },
      { slug: "oil-filled-motors", name: "Oil Filled Motors", intro: "Oil-filled motor designs for smooth operation and consistent protection." },
      { slug: "induction-motors", name: "Induction Motors", intro: "Industrial induction motor range for pump sets and general-duty applications." },
      { slug: "three-phase-motors", name: "Three Phase Motors", intro: "Three-phase motors for industrial loads and high-duty applications." },
      { slug: "single-phase-motors", name: "Single Phase Motors", intro: "Single-phase motor solutions for domestic and light commercial pumping." }
    ]
  },
  {
    slug: "solar",
    name: "Solar",
    categories: [
      { slug: "solar-pumping-systems", name: "Solar Pumping Systems", intro: "End-to-end solar water pumping systems engineered for agriculture and remote locations." },
      { slug: "solar-controllers", name: "Solar Controllers", intro: "Smart solar controllers designed to maximize energy harvesting and protect pump sets." },
      { slug: "solar-pv-modules", name: "Solar PV Modules", intro: "PV modules for solar pumping and industrial energy systems." },
      { slug: "solar-structures", name: "Solar Structures", intro: "Engineered structures for PV mounting with corrosion resistance and wind load design." },
      { slug: "solar-ac-dc-cables", name: "Solar AC/DC Cables", intro: "Solar-grade cabling optimized for durability, voltage drop, and safety." }
    ]
  },
  {
    slug: "pipes-cables",
    name: "Pipes & Cables",
    categories: [
      { slug: "upvc-column-pipes", name: "uPVC Column Pipes", intro: "Column pipes engineered for borewell installations with high mechanical strength." },
      { slug: "submersible-flat-cables", name: "Submersible Flat Cables", intro: "Export-grade submersible flat cables designed for submersible pump installations." },
      { slug: "pvc-insulated-cables", name: "PVC Insulated Cables", intro: "PVC insulated cable range for industrial and infrastructure electrical applications." },
      { slug: "industrial-cables", name: "Industrial Cables", intro: "Industrial cable solutions for harsh environments and long-term reliability." }
    ]
  },
  {
    slug: "valves",
    name: "Valves",
    categories: [
      { slug: "butterfly-valves", name: "Butterfly Valves", intro: "Flow control butterfly valves for utilities, plants, and process lines." },
      { slug: "nrv-valves", name: "NRV Valves", intro: "Non-return valves engineered to prevent backflow and protect pump systems." },
      { slug: "gate-valves", name: "Gate Valves", intro: "Isolation gate valves for industrial and infrastructure networks." },
      { slug: "ball-valves", name: "Ball Valves", intro: "Reliable shut-off ball valves with durable sealing." },
      { slug: "industrial-valves", name: "Industrial Valves", intro: "Complete industrial valve portfolio for EPC and government supply." }
    ]
  },
  {
    slug: "panels",
    name: "Panels",
    categories: [
      { slug: "control-panels", name: "Control Panels", intro: "Pump and motor control panels engineered for protection and reliability." },
      { slug: "starter-panels", name: "Starter Panels", intro: "Motor starter panels with robust protection and easy serviceability." },
      { slug: "automation-panels", name: "Automation Panels", intro: "Automation panels for pumping stations and industrial control needs." },
      { slug: "vfd-panels", name: "VFD Panels", intro: "VFD panels for energy efficiency, pressure stability, and smooth motor control." },
      { slug: "pump-controllers", name: "Pump Controllers", intro: "Smart controllers for protection, dry-run safety, and performance monitoring." }
    ]
  },
  {
    slug: "spare-parts",
    name: "Spare Parts",
    categories: [
      { slug: "impellers", name: "Impellers", intro: "Precision impellers designed for efficiency and long wear life." },
      { slug: "diffusers", name: "Diffusers", intro: "Diffusers engineered for stable stage performance and durability." },
      { slug: "pump-shafts", name: "Pump Shafts", intro: "Shafts made for alignment stability and mechanical reliability." },
      { slug: "pump-bushes", name: "Pump Bushes", intro: "Wear bushes and bearings for long service intervals." },
      { slug: "cable-joints", name: "Cable Joints", intro: "Submersible cable joints optimized for insulation integrity and reliability." },
      { slug: "motor-rewinding-parts", name: "Motor Rewinding Parts", intro: "Rewinding and service parts for submersible motors and pump sets." },
      { slug: "pump-accessories", name: "Pump Accessories", intro: "Accessories for installation, protection, and system optimization." }
    ]
  }
];

export const allCategories = productGroups.flatMap((g) => g.categories);

