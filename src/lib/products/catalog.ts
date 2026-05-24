import { allCategories } from "@/lib/products/product-groups";
import { slugify } from "@/lib/seo/slugify";
import { ssSubmersibleSeries, submersibleMotorSeries } from "@/lib/resources/brochure-data";

export type SpecRow = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  shortDescription: string;
  applications: string[];
  features: string[];
  specifications: SpecRow[];
  brochureKey?: string;
  /** Optional reference into the technical-specs registry for rich "View more" tables + drawing. */
  technicalSpecKey?: string;
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
};

function ensureCategory(slug: string) {
  if (!allCategories.find((c) => c.slug === slug)) {
    throw new Error(`Unknown category slug: ${slug}`);
  }
  return slug;
}

export const products: Product[] = [
  // ─── V4 borewell submersible (4" — flagship pump line) ───────────────────
  {
    id: "v4-borewell-submersible-pump",
    name: "V4 — 100 mm (4\") Borewell Submersible Pump Set",
    slug: "v4-borewell-submersible-pump",
    categorySlug: ensureCategory("borewell-submersible-pumps"),
    shortDescription:
      "Premium 4-inch borewell submersible pump set engineered for stable performance, sand resistance, and long service life. Available in Oil Filled (OF) and Water Filled (WF) motor configurations, suitable for 100 mm borewell or above.",
    applications: [
      "Domestic & municipal water supply",
      "Agriculture water supply",
      "Sprinkler & pressure boosting irrigation",
      "Fire fighting systems",
      "High-rise buildings",
      "Civil & industrial applications"
    ],
    features: [
      "Oil Filled (OF) and Water Filled (WF) motor variants",
      "Stage range from 4 to 50 — head up to ~400 m with multi-stage selection",
      "Glass-filled noryl impellers and bowls for sand resistance",
      "Non-magnetic stainless steel 304 motor body",
      "SS 304 hardware throughout for corrosion resistance",
      "Compliant with IS:8034-2002 (WF motor pumpsets)"
    ],
    specifications: [
      { label: "Bore size", value: "Suitable for 100 mm borewell or above" },
      { label: "Speed", value: "2880 RPM" },
      { label: "Power range", value: "0.37 kW (0.5 HP) to 7.5 kW (10 HP)" },
      { label: "Outlet sizes", value: "32 mm • 38 mm • 50 mm • 65 mm (series-dependent)" },
      { label: "Flow type", value: "Radial / Mixed (series-dependent)" },
      { label: "Supply", value: "200–240 V 1Φ / 380–415 V 3Φ • 50 Hz" }
    ],
    brochureKey: "v4-borewell-submersible",
    technicalSpecKey: "v4-borewell-submersible",
    seo: {
      primaryKeyword: "4 inch borewell submersible pump manufacturer",
      secondaryKeywords: [
        "v4 submersible pump exporter",
        "100mm borewell pump supplier",
        "4 inch submersible pump price",
        "borewell submersible pump supplier in UAE",
        "submersible pump set IS 8034 compliant"
      ]
    }
  },
  // ─── V3 borewell submersible (3" — narrow borewells) ─────────────────────
  {
    id: "v3-borewell-submersible-pump",
    name: "V3 — 75 / 80 mm (3\") Borewell Submersible Pump Set",
    slug: "v3-borewell-submersible-pump",
    categorySlug: ensureCategory("borewell-submersible-pumps"),
    shortDescription:
      "Compact 3-inch borewell submersible pump set for narrow borewells. Engineered for sprinkler / drip irrigation, civil and domestic supply, pressure boosting, and small fire fighting systems. Oil Filled (OF) and Water Filled (WF) variants.",
    applications: [
      "Domestic water supply",
      "Sprinkler & drip irrigation",
      "Pressure boosting systems",
      "Civil & industrial supply",
      "Fire fighting systems",
      "Fountains & gardens"
    ],
    features: [
      "Oil Filled (OF) and Water Filled (WF) motor variants",
      "Suitable for 75 mm or 80 mm borewells (motor OD 72 mm)",
      "Stage range from 10 to 36 — multi-stage high-head variants",
      "Glass-filled noryl impeller and bowl for sand resistance",
      "CNC-machined components for reliable performance"
    ],
    specifications: [
      { label: "Bore size", value: "75 mm or 80 mm" },
      { label: "Speed", value: "2880 RPM" },
      { label: "Power range", value: "0.37 kW (0.5 HP) to 0.94 kW (1.25 HP)" },
      { label: "Outlet size", value: "32 mm" },
      { label: "Flow type", value: "Radial" },
      { label: "Supply", value: "200–240 V single phase • 50 Hz" }
    ],
    brochureKey: "v3-borewell-submersible",
    technicalSpecKey: "v3-borewell-submersible",
    seo: {
      primaryKeyword: "3 inch borewell submersible pump",
      secondaryKeywords: [
        "v3 submersible pump manufacturer",
        "75mm borewell pump supplier",
        "narrow borewell pump exporter",
        "3 inch submersible pump price",
        "domestic submersible pump supplier"
      ]
    }
  },
  // ─── V5 borewell submersible (5") ────────────────────────────────────────
  {
    id: "v5-borewell-submersible-pump",
    name: "V5 — 125 mm (5\") Borewell Submersible Pump Set",
    slug: "v5-borewell-submersible-pump",
    categorySlug: ensureCategory("borewell-submersible-pumps"),
    shortDescription:
      "Robust 5-inch borewell submersible pump set for medium-scale agriculture, infrastructure, and industrial duty. Radial and mixed-flow hydraulics for moderate-to-high heads.",
    applications: [
      "Medium-scale agricultural irrigation",
      "Municipal water supply",
      "Industrial process water",
      "Fire fighting & pressure boosting",
      "Mining dewatering"
    ],
    features: [
      "Radial and mixed-flow hydraulic options",
      "Multi-stage configurations for high-head selection",
      "Non-magnetic SS 304 motor body",
      "Heavy-duty thrust bearing for sustained axial load"
    ],
    specifications: [
      { label: "Bore size", value: "Suitable for 125 mm borewell or above" },
      { label: "Speed", value: "2900 RPM" },
      { label: "Power range", value: "1.5 kW (2 HP) to 18.5 kW (25 HP)" },
      { label: "Outlet sizes", value: "50 mm • 65 mm • 80 mm (series-dependent)" },
      { label: "Supply", value: "380–415 V 3Φ • 50 Hz" }
    ],
    technicalSpecKey: "v5-borewell-submersible",
    seo: {
      primaryKeyword: "5 inch borewell submersible pump",
      secondaryKeywords: [
        "v5 submersible pump manufacturer",
        "125mm borewell pump supplier",
        "5 inch submersible pump price",
        "industrial submersible pump exporter"
      ]
    }
  },
  // ─── V6 borewell submersible (6") ────────────────────────────────────────
  {
    id: "v6-borewell-submersible-pump",
    name: "V6 — 150 mm (6\") Borewell Submersible Pump Set",
    slug: "v6-borewell-submersible-pump",
    categorySlug: ensureCategory("borewell-submersible-pumps"),
    shortDescription:
      "Heavy-duty 6-inch borewell submersible pump set for large-scale irrigation mainlines, municipal infrastructure, EPC water supply, and high-flow industrial duty.",
    applications: [
      "Large-scale agricultural irrigation mainlines",
      "Municipal & infrastructure water supply",
      "EPC project water transfer",
      "Industrial cooling & process water",
      "Mining dewatering"
    ],
    features: [
      "Heavy-duty hydraulics for sustained high-flow duty",
      "Multi-stage radial and mixed-flow design options",
      "Robust SS 304 motor body and SS 410 rotating parts",
      "CED-coated CI components for corrosion resistance"
    ],
    specifications: [
      { label: "Bore size", value: "Suitable for 150 mm borewell or above" },
      { label: "Speed", value: "2900 RPM" },
      { label: "Power range", value: "3.7 kW (5 HP) to 37 kW (50 HP)" },
      { label: "Outlet sizes", value: "65 mm • 80 mm • 100 mm (series-dependent)" },
      { label: "Supply", value: "380–415 V 3Φ • 50 Hz" }
    ],
    technicalSpecKey: "v6-borewell-submersible",
    seo: {
      primaryKeyword: "6 inch borewell submersible pump",
      secondaryKeywords: [
        "v6 submersible pump manufacturer",
        "150mm borewell pump supplier",
        "heavy duty submersible pump exporter",
        "industrial submersible pump india"
      ]
    }
  },
  // ─── V8 borewell submersible (8") ────────────────────────────────────────
  {
    id: "v8-borewell-submersible-pump",
    name: "V8 — 200 mm (8\") Borewell Submersible Pump Set",
    slug: "v8-borewell-submersible-pump",
    categorySlug: ensureCategory("borewell-submersible-pumps"),
    shortDescription:
      "Heavy industrial 8-inch borewell submersible pump set for large municipal mainlines, irrigation networks, and high-flow industrial duty. Mixed-flow hydraulics for sustained discharge.",
    applications: [
      "Large municipal water mainlines",
      "Government water schemes",
      "Large-scale irrigation networks",
      "EPC infrastructure water supply",
      "Mining and process dewatering"
    ],
    features: [
      "Mixed-flow hydraulics for high-discharge duty",
      "Heavy industrial construction with SS 304 motor body",
      "Long-life carbon vs. stainless steel thrust bearing",
      "Engineered for star-delta / soft-starter / VFD starting"
    ],
    specifications: [
      { label: "Bore size", value: "Suitable for 200 mm borewell or above" },
      { label: "Speed", value: "2900 RPM" },
      { label: "Power range", value: "11 kW (15 HP) to 93 kW (125 HP)" },
      { label: "Outlet sizes", value: "80 mm • 100 mm • 125 mm" },
      { label: "Supply", value: "380–415 V 3Φ • 50 Hz" }
    ],
    technicalSpecKey: "v8-borewell-submersible",
    seo: {
      primaryKeyword: "8 inch borewell submersible pump",
      secondaryKeywords: [
        "v8 submersible pump manufacturer",
        "200mm borewell pump supplier",
        "heavy industrial submersible pump",
        "municipal water supply pump exporter"
      ]
    }
  },
  {
    id: "openwell-submersible-pump",
    name: "Openwell Submersible Pump",
    slug: "openwell-submersible-pump",
    categorySlug: ensureCategory("openwell-submersible-pumps"),
    shortDescription:
      "Premium openwell submersible pumping engineered for continuous duty, stable flow, and export-grade reliability across agriculture, utilities, and industrial water transfer.",
    applications: ["Agricultural irrigation", "Domestic water supply", "Industrial water pumping", "Utility water transfer"],
    features: [
      "Submersible centrifugal hydraulic design for efficient water extraction",
      "Compact installation for openwell and sump applications",
      "Durable construction for corrosion resistance and long service life",
      "Multiple capacities and heads to match project requirements"
    ],
    specifications: [
      { label: "Pump type", value: "Submersible centrifugal" },
      { label: "Installation", value: "Direct openwell / sump installation" },
      { label: "Duty", value: "Continuous / heavy-duty options" },
      { label: "Markets", value: "India • Middle East • Africa" }
    ],
    brochureKey: "openwell-submersible-pump",
    technicalSpecKey: "openwell-submersible",
    seo: {
      primaryKeyword: "openwell submersible pump manufacturer",
      secondaryKeywords: [
        "openwell pump exporter",
        "submersible pump supplier",
        "openwell pump supplier in UAE",
        "openwell pump supplier in Saudi Arabia"
      ]
    }
  },
  // ─── Centrifugal monoblock ───────────────────────────────────────────────
  {
    id: "centrifugal-monoblock-pump",
    name: "Centrifugal Monoblock Pump",
    slug: "centrifugal-monoblock-pump",
    categorySlug: ensureCategory("monoblock-pumps"),
    shortDescription:
      "Compact integrated centrifugal monoblock pump (motor + pump on a single shaft) for surface water transfer, agriculture, domestic supply, and light industrial duty.",
    applications: [
      "Agricultural water transfer",
      "Domestic water supply",
      "Garden & lawn irrigation",
      "Industrial fluid transfer",
      "Water tank filling"
    ],
    features: [
      "Single-shaft monoblock — no alignment required",
      "Cast iron body with CED coating for corrosion resistance",
      "Dynamically balanced impeller for low vibration",
      "Class F insulation with thermal overload protection"
    ],
    specifications: [
      { label: "Construction", value: "Single-stage centrifugal monoblock" },
      { label: "Power range", value: "0.37 kW (0.5 HP) to 7.5 kW (10 HP)" },
      { label: "Speed", value: "2900 RPM" },
      { label: "Outlet sizes", value: "25 / 32 / 40 / 50 / 65 mm" },
      { label: "Supply", value: "200–240 V 1Φ / 380–415 V 3Φ • 50 Hz" }
    ],
    technicalSpecKey: "centrifugal-monoblock",
    seo: {
      primaryKeyword: "centrifugal monoblock pump manufacturer",
      secondaryKeywords: [
        "monoblock pump supplier",
        "monoblock water pump exporter",
        "centrifugal pump india",
        "surface pump supplier"
      ]
    }
  },
  // ─── Induction motor ─────────────────────────────────────────────────────
  {
    id: "induction-motor",
    name: "Induction Motor (3-Phase Squirrel Cage)",
    slug: "induction-motor",
    categorySlug: ensureCategory("induction-motors"),
    shortDescription:
      "Industrial-class 3-phase squirrel cage induction motor for pumps, blowers, compressors, and general machinery. Robust cast iron / aluminium construction with class F insulation and IE2/IE3 options.",
    applications: [
      "Pump drives (surface & monoblock)",
      "Blowers & compressors",
      "Conveyor systems",
      "Machine tools",
      "HVAC drives",
      "General industrial machinery"
    ],
    features: [
      "Squirrel cage construction — rugged and low maintenance",
      "Class F insulation with Class B temperature rise",
      "Dynamically balanced rotor (vibration grade A as per IS 12075)",
      "TEFC IP55 enclosure for industrial environments",
      "Compliant with IS 12615 / IEC 60034"
    ],
    specifications: [
      { label: "Output range", value: "0.37 kW (0.5 HP) to 75 kW (100 HP)" },
      { label: "Poles", value: "2 / 4 / 6 / 8" },
      { label: "Frequency", value: "50 Hz (60 Hz on request)" },
      { label: "Protection", value: "IP55" },
      { label: "Insulation", value: "Class F" },
      { label: "Efficiency", value: "IE2 standard, IE3 / IE4 on request" }
    ],
    technicalSpecKey: "induction-motor",
    seo: {
      primaryKeyword: "induction motor manufacturer",
      secondaryKeywords: [
        "3 phase squirrel cage motor",
        "industrial induction motor supplier",
        "IE2 IE3 motor exporter",
        "TEFC motor manufacturer india"
      ]
    }
  },
  {
    id: "mini-openwell-submersible-pump",
    name: "Mini Openwell Submersible Pump",
    slug: "mini-openwell-submersible-pump",
    categorySlug: ensureCategory("openwell-submersible-pumps"),
    shortDescription:
      "Compact openwell submersible pump designed for dependable lifting, energy-efficient operation, and simple handling in domestic, commercial, and light-agri use cases.",
    applications: ["Water irrigation", "Commercial water supply", "Domestic supply", "Service water transfer"],
    features: ["Corrosion resistant", "Energy saving", "Easy to operate", "Sturdy body"],
    specifications: [
      { label: "Pump type", value: "Compact submersible centrifugal" },
      { label: "Use case", value: "Domestic • commercial • light agriculture" }
    ],
    brochureKey: "mini-openwell-submersible-pump",
    seo: {
      primaryKeyword: "mini openwell submersible pump",
      secondaryKeywords: ["openwell submersible pump supplier", "compact submersible pump exporter"]
    }
  },
  {
    id: "powergold-self-priming-pump",
    name: "SUPERTECH PowerGold Series (Self Priming Pump)",
    slug: "powergold-series-self-priming-pump",
    categorySlug: ensureCategory("self-priming-pumps"),
    shortDescription:
      "High-performance self-priming series engineered for strong suction, reliable priming capability, and stable water supply in residential, commercial, and small farm applications.",
    applications: ["Residential water supply", "Hotels & hospitals", "Car washing", "Small farms", "Lawn sprinklers"],
    features: [
      "Corrosion-resistant metal components for long service life",
      "Self-priming capability up to 8 meter (at mean sea level)",
      "Thermal overload protection for motor safety",
      "Portable, lightweight design with lift handle"
    ],
    specifications: [
      { label: "Power range", value: "0.5 HP to 1.0 HP (0.37 kW to 0.75 kW)" },
      { label: "Pipe size", value: "15×15 mm to 25×25 mm" },
      { label: "Total head", value: "5 to 35 meter" },
      { label: "Capacity", value: "36 to 5 LPM (2160 to 300 LPH)" },
      { label: "Voltage", value: "180 to 240 V" }
    ],
    brochureKey: "powergold-series",
    seo: {
      primaryKeyword: "self priming pump manufacturer",
      secondaryKeywords: ["self priming pump supplier", "suction pump exporter", "self priming pump supplier in Dubai"]
    }
  },
  {
    id: "deluxe-self-priming-pump",
    name: "SUPERTECH Deluxe Series (Self Priming Pump)",
    slug: "deluxe-series-self-priming-pump",
    categorySlug: ensureCategory("self-priming-pumps"),
    shortDescription:
      "Industrial-grade self-priming pump series built for low-noise operation, rugged construction, and stable performance across domestic and commercial water supply needs.",
    applications: ["Bungalows & flats", "Hotels, hospitals", "Car washing", "Small farms", "Lawn sprinklers"],
    features: [
      "Trouble-free service components engineered for reliability",
      "Self-priming up to 7.5 meter (at mean sea level)",
      "Thermal overload protection for motor safety",
      "Terminal box for robust electrical connectivity"
    ],
    specifications: [
      { label: "Power range", value: "0.5 HP to 1.0 HP (0.37 kW to 0.75 kW)" },
      { label: "Pipe size", value: "15×15 mm to 25×25 mm" },
      { label: "Total head", value: "5 to 40 meter" },
      { label: "Capacity", value: "50 to 18 LPM (3000 to 1080 LPH)" },
      { label: "Voltage", value: "180 to 240 V" }
    ],
    brochureKey: "deluxe-series",
    seo: {
      primaryKeyword: "self priming pump exporter",
      secondaryKeywords: ["domestic self priming pump", "self priming pump supplier in UAE"]
    }
  },
  {
    id: "sewage-mud-pump",
    name: "Sewage Pump & Mud Pump",
    slug: "sewage-pump-and-mud-pump",
    categorySlug: ensureCategory("sewage-pumps"),
    shortDescription:
      "Heavy-duty sewage and mud pumping for contaminated fluids and solids handling with maintainable wear parts and balanced rotating assemblies.",
    applications: ["Sewage handling", "Contaminated fluid transfer", "Sloppy water pumping", "Utility and industrial applications"],
    features: [
      "Replaceable wear parts for long life",
      "Heavily balanced rotating parts for stable operation",
      "Simple maintenance access for service efficiency",
      "Oil lubricated heavy-duty bearings"
    ],
    specifications: [
      { label: "Use", value: "Sewage • mud • contaminated fluids • solids" },
      { label: "Service", value: "Maintainable wear components" }
    ],
    brochureKey: "sewage-mud-pump",
    seo: {
      primaryKeyword: "sewage pump manufacturer",
      secondaryKeywords: ["mud pump supplier", "sewage pump supplier in Saudi Arabia", "sewage pump exporter from India"]
    }
  },
  {
    id: "stainless-steel-solar-pump",
    name: "Stainless Steel (Solar Compatible) Pump",
    slug: "stainless-steel-solar-pump",
    categorySlug: ensureCategory("stainless-steel-pumps"),
    shortDescription:
      "Solar compatible stainless steel pumping engineered for corrosion resistance, export-grade durability, and efficient water delivery in agriculture and utility installations.",
    applications: ["Solar agriculture", "Remote water supply", "Utility distribution", "Water transfer"],
    features: ["Stainless steel construction", "Solar compatibility", "Long life materials", "High efficiency hydraulics"],
    specifications: [
      { label: "Construction", value: "Stainless steel wetted parts options" },
      { label: "System", value: "Solar-ready configurations available" }
    ],
    brochureKey: "stainless-steel-solar-pump",
    seo: {
      primaryKeyword: "stainless steel submersible pump",
      secondaryKeywords: ["solar pump manufacturer", "stainless steel pump exporter", "solar pump supplier Middle East"]
    }
  },
  {
    id: "dewatering-pump",
    name: "Dewatering Submersible Pump",
    slug: "dewatering-submersible-pump",
    categorySlug: ensureCategory("dewatering-pumps"),
    shortDescription:
      "Portable submersible dewatering pump engineered for construction sites, trenches, pits, mines, and emergency drainage. Wear-resistant impeller handles silty, abrasive water reliably.",
    applications: ["Construction dewatering", "Foundation trenches", "Pits & excavations", "Mining dewatering", "Emergency drainage"],
    features: [
      "Top-discharge configuration for easy hose connection",
      "Wear-resistant high-chrome impeller for abrasive water",
      "Double mechanical seal in oil bath",
      "Continuous-duty rated, IP68"
    ],
    specifications: [
      { label: "Power range", value: "0.75 kW (1 HP) to 37 kW (50 HP)" },
      { label: "Head range", value: "6 to 60 m" },
      { label: "Discharge", value: "150 to 4500 LPM" },
      { label: "Protection", value: "IP68 fully submersible" }
    ],
    brochureKey: "dewatering-pump",
    technicalSpecKey: "dewatering-submersible-pump",
    seo: {
      primaryKeyword: "dewatering pump supplier",
      secondaryKeywords: ["dewatering pump exporter", "dewatering pump supplier in UAE", "construction dewatering pumps"]
    }
  },
  // ─── Stainless steel submersible pump (flagship in stainless-steel-pumps) ─
  {
    id: "stainless-steel-submersible-pump",
    name: "Stainless Steel Submersible Pump",
    slug: "stainless-steel-submersible-pump",
    categorySlug: ensureCategory("stainless-steel-pumps"),
    shortDescription:
      "Premium stainless steel submersible pump for corrosion-prone applications — coastal / saline water, RO feed, mineral-rich groundwater, and potable supply.",
    applications: ["Coastal & saline groundwater", "RO feed pumping", "Solar pumping", "Food & pharma duty"],
    features: [
      "SS 304 / SS 316 wetted parts (project-specific)",
      "Stamped & laser-welded — no castings in wetted path",
      "Lightweight design (~20–30% lighter than CI equivalents)",
      "Built-in non-return valve at discharge"
    ],
    specifications: [
      { label: "Power range", value: "0.37 kW (0.5 HP) to 22 kW (30 HP)" },
      { label: "Head range", value: "10 to 350 m" },
      { label: "Discharge", value: "30 to 1000 LPM" },
      { label: "Wetted parts", value: "SS 304 (std) / SS 316 (on request)" }
    ],
    technicalSpecKey: "stainless-steel-pump",
    seo: {
      primaryKeyword: "stainless steel submersible pump",
      secondaryKeywords: ["SS 304 submersible pump", "SS 316 submersible pump exporter", "coastal water pump supplier"]
    }
  },
  // ─── Self priming pump (flagship in self-priming-pumps) ───────────────────
  {
    id: "self-priming-pump",
    name: "Self Priming Pump",
    slug: "self-priming-pump",
    categorySlug: ensureCategory("self-priming-pumps"),
    shortDescription:
      "High-suction self priming pump engineered for fast priming, stable suction lift, and dependable performance in residential, commercial, and light industrial duty.",
    applications: ["Residential water supply", "Car wash", "Small farms", "Lawn sprinkler", "Light commercial"],
    features: [
      "Self-priming up to 8 m suction lift",
      "Integral air-separation chamber",
      "Built-in non-return foot valve",
      "Thermal overload protection"
    ],
    specifications: [
      { label: "Power range", value: "0.37 kW (0.5 HP) to 2.2 kW (3 HP)" },
      { label: "Head range", value: "5 to 45 m" },
      { label: "Discharge", value: "12 to 80 LPM" },
      { label: "Suction lift", value: "Up to 8 m at MSL" }
    ],
    technicalSpecKey: "self-priming-pump",
    seo: {
      primaryKeyword: "self priming pump manufacturer",
      secondaryKeywords: ["self priming pump exporter", "8m suction pump", "suction pump supplier"]
    }
  },
  // ─── End-suction centrifugal (flagship in centrifugal-pumps) ──────────────
  {
    id: "end-suction-centrifugal-pump",
    name: "End-Suction Centrifugal Pump",
    slug: "end-suction-centrifugal-pump",
    categorySlug: ensureCategory("centrifugal-pumps"),
    shortDescription:
      "Industrial-class end-suction centrifugal pump to ISO 2858 / DIN 24255 hydraulics for industrial water transfer, HVAC, fire-fighting, and EPC project duty. Back-pull-out design.",
    applications: ["Industrial water transfer", "HVAC circulation", "Fire fighting", "Cooling tower", "EPC mainlines"],
    features: [
      "ISO 2858 / DIN 24255 hydraulics",
      "Back-pull-out design",
      "Replaceable wear rings",
      "Mechanical seal as standard"
    ],
    specifications: [
      { label: "Power range", value: "1.5 kW (2 HP) to 75 kW (100 HP)" },
      { label: "Head range", value: "10 to 150 m" },
      { label: "Discharge", value: "100 to 8000 LPM" },
      { label: "Flange standard", value: "PN10 / PN16 / ANSI 125–150" }
    ],
    technicalSpecKey: "end-suction-centrifugal",
    seo: {
      primaryKeyword: "end suction centrifugal pump",
      secondaryKeywords: ["ISO 2858 centrifugal pump", "industrial centrifugal pump supplier", "HVAC pump exporter"]
    }
  },
  // ─── Pressure booster ────────────────────────────────────────────────────
  {
    id: "pressure-booster-pump",
    name: "Pressure Booster Pump System",
    slug: "pressure-booster-pump",
    categorySlug: ensureCategory("pressure-booster-pumps"),
    shortDescription:
      "Multi-stage pressure booster pump system for constant pressure across buildings, plants, and distribution networks. Single and multi-pump duty-standby with VFD or pressure-switch control.",
    applications: ["High-rise buildings", "Hotels & hospitals", "Hydro-pneumatic systems", "Sprinkler", "RO / WTP"],
    features: [
      "Multi-stage vertical inline hydraulic",
      "VFD-controlled cascade for constant pressure",
      "Common manifold with isolation & NRVs",
      "Dry-run protection & motor overload protection"
    ],
    specifications: [
      { label: "Pumps per skid", value: "1 to 6 (1 duty + standby on request)" },
      { label: "Power range", value: "0.37 kW (0.5 HP) to 22 kW (30 HP) per pump" },
      { label: "Head range", value: "20 to 220 m" },
      { label: "Control", value: "Pressure switch / VFD with PID / cascade" }
    ],
    technicalSpecKey: "pressure-booster",
    seo: {
      primaryKeyword: "pressure booster pump system",
      secondaryKeywords: ["hydro-pneumatic booster", "high rise building water pump", "constant pressure pump system"]
    }
  },
  // ─── Horizontal split-case ───────────────────────────────────────────────
  {
    id: "horizontal-split-case-pump",
    name: "Horizontal Split-Case Pump",
    slug: "horizontal-split-case-pump",
    categorySlug: ensureCategory("horizontal-pumps"),
    shortDescription:
      "Horizontal axially-split casing centrifugal pump for high-flow water transfer in municipal, fire-fighting, HVAC chilled water, and industrial cooling duty. Double-suction impeller.",
    applications: ["Municipal water supply", "Fire fighting", "HVAC chilled water", "Industrial cooling", "Power plants"],
    features: [
      "Axially-split casing — service without disturbing piping",
      "Double-suction impeller — balanced axial thrust",
      "Replaceable wear rings",
      "Suitable for clean water up to 80 °C"
    ],
    specifications: [
      { label: "Power range", value: "7.5 kW (10 HP) to 375 kW (500 HP)" },
      { label: "Head range", value: "20 to 200 m" },
      { label: "Discharge", value: "500 to 30000 LPM" },
      { label: "Flange standard", value: "PN10 / PN16 / ANSI 125–250" }
    ],
    technicalSpecKey: "horizontal-split-case",
    seo: {
      primaryKeyword: "horizontal split case pump",
      secondaryKeywords: ["HSC pump manufacturer", "fire fighting pump UL FM", "double suction pump"]
    }
  },
  // ─── Vertical inline ─────────────────────────────────────────────────────
  {
    id: "vertical-inline-pump",
    name: "Vertical Inline Multi-Stage Pump",
    slug: "vertical-inline-pump",
    categorySlug: ensureCategory("vertical-pumps"),
    shortDescription:
      "Vertical inline multi-stage centrifugal pump for compact footprint, high efficiency, and easy maintenance in pressure boosting, RO/WTP, HVAC, and industrial process duty.",
    applications: ["Pressure boosting", "RO / WTP", "HVAC", "Boiler feed", "Sprinkler", "Fire jockey"],
    features: [
      "Compact vertical footprint",
      "Stamped SS hydraulic — high efficiency",
      "Cartridge mechanical seal — replaceable",
      "VFD-ready"
    ],
    specifications: [
      { label: "Power range", value: "0.37 kW (0.5 HP) to 45 kW (60 HP)" },
      { label: "Head range", value: "10 to 250 m" },
      { label: "Discharge", value: "30 to 1500 LPM" },
      { label: "Stages", value: "1 to 22" }
    ],
    technicalSpecKey: "vertical-inline-pump",
    seo: {
      primaryKeyword: "vertical inline pump",
      secondaryKeywords: ["multistage pump", "boiler feed pump", "RO feed pump", "vertical centrifugal pump"]
    }
  },
  // ─── Sewage submersible ──────────────────────────────────────────────────
  {
    id: "sewage-submersible-pump",
    name: "Sewage Submersible Pump",
    slug: "sewage-submersible-pump",
    categorySlug: ensureCategory("sewage-pumps"),
    shortDescription:
      "Heavy-duty sewage submersible pump for solids handling, fibrous material, and contaminated liquids in municipal, industrial, and commercial wastewater duty.",
    applications: ["Municipal sewage", "STP / ETP", "Drainage", "Basement sumps", "Industrial effluent"],
    features: [
      "Non-clog vortex / single-channel impeller options",
      "Reinforced cast iron wear plate at suction",
      "Heavy-duty IP68 enclosure with double mechanical seal",
      "Solids handling up to 80 mm (model dependent)"
    ],
    specifications: [
      { label: "Power range", value: "0.75 kW (1 HP) to 37 kW (50 HP)" },
      { label: "Head range", value: "5 to 50 m" },
      { label: "Discharge", value: "200 to 5000 LPM" },
      { label: "Solids", value: "Up to 80 mm spherical" }
    ],
    technicalSpecKey: "sewage-submersible-pump",
    seo: {
      primaryKeyword: "sewage submersible pump manufacturer",
      secondaryKeywords: ["sewage pump exporter", "STP pump supplier", "wastewater pump india"]
    }
  },
  // ─── Mini monoblock ──────────────────────────────────────────────────────
  {
    id: "mini-monoblock-pump",
    name: "Mini Monoblock Pump",
    slug: "mini-monoblock-pump",
    categorySlug: ensureCategory("mini-monoblock-pumps"),
    shortDescription:
      "Compact mini monoblock pump for domestic and light commercial water supply. Integrated motor + pump on a single shaft, simple installation and low maintenance.",
    applications: ["Domestic water supply", "Bungalows", "Gardens", "Light commercial", "Cooler / desert cooler"],
    features: [
      "Compact, lightweight design",
      "Brass / noryl impeller — corrosion resistant",
      "Thermal overload protection",
      "Capacitor-start, capacitor-run"
    ],
    specifications: [
      { label: "Power range", value: "0.18 kW (0.25 HP) to 0.75 kW (1 HP)" },
      { label: "Head range", value: "5 to 30 m" },
      { label: "Discharge", value: "20 to 200 LPM" },
      { label: "Supply", value: "180–240 V (1Φ) 50 Hz" }
    ],
    technicalSpecKey: "mini-monoblock-pump",
    seo: {
      primaryKeyword: "mini monoblock pump",
      secondaryKeywords: ["small domestic pump", "1 HP monoblock pump", "compact water pump"]
    }
  },
  // ─── Motors ──────────────────────────────────────────────────────────────
  {
    id: "water-filled-submersible-motor",
    name: "Water Filled Submersible Motor",
    slug: "water-filled-submersible-motor",
    categorySlug: ensureCategory("water-filled-motors"),
    shortDescription:
      "Water Filled (WF) submersible motor designed to IS:9283 / IEC 60034 standards for borewell submersible pump sets. Water-lubricated thrust bearings for long service life.",
    applications: ["V3/V4/V5/V6/V8 borewell pumpsets", "OEM pumpset assembly", "Replacement motors", "Solar pumping (50 Hz)"],
    features: [
      "Water-lubricated, water-cooled — no oil leakage risk",
      "Hermetically sealed with diaphragm compensation",
      "Class F insulation, IP68 protection",
      "Rewindable construction"
    ],
    specifications: [
      { label: "Output range", value: "0.37 kW (0.5 HP) to 37 kW (50 HP)" },
      { label: "OD sizes", value: "75 / 100 / 125 / 150 / 200 mm" },
      { label: "Speed", value: "2880 RPM" },
      { label: "Standards", value: "IS 9283 / IEC 60034" }
    ],
    technicalSpecKey: "water-filled-motor",
    seo: {
      primaryKeyword: "water filled submersible motor",
      secondaryKeywords: ["WF motor manufacturer", "borewell motor supplier", "submersible motor india"]
    }
  },
  {
    id: "oil-filled-submersible-motor",
    name: "Oil Filled Submersible Motor",
    slug: "oil-filled-submersible-motor",
    categorySlug: ensureCategory("oil-filled-motors"),
    shortDescription:
      "Oil Filled (OF) submersible motor with mineral-oil bath for superior lubrication and heat dissipation. Suitable for inclined / horizontal installation and frequent restart.",
    applications: ["Borewell pumpsets", "Horizontal/inclined installation", "Solar pumping", "Frequent-start duty"],
    features: [
      "Oil-bath lubrication — superior heat dissipation",
      "Any installation orientation",
      "Higher restart frequency capability",
      "Class F insulation, IP68"
    ],
    specifications: [
      { label: "Output range", value: "0.37 kW (0.5 HP) to 18.5 kW (25 HP)" },
      { label: "OD sizes", value: "75 / 100 / 125 / 150 mm" },
      { label: "Speed", value: "2880 RPM" },
      { label: "Filling", value: "Food-grade mineral / synthetic oil" }
    ],
    technicalSpecKey: "oil-filled-motor",
    seo: {
      primaryKeyword: "oil filled submersible motor",
      secondaryKeywords: ["OF motor manufacturer", "horizontal submersible motor", "oil bath motor supplier"]
    }
  },
  {
    id: "three-phase-motor",
    name: "3-Phase Induction Motor",
    slug: "three-phase-induction-motor",
    categorySlug: ensureCategory("three-phase-motors"),
    shortDescription:
      "Industrial 3-phase squirrel cage induction motor for pumps, blowers, compressors, and general machinery duty. IE2 standard, IE3 / IE4 on request.",
    applications: ["Pumps", "Blowers", "Compressors", "Conveyors", "Machine tools", "HVAC"],
    features: [
      "Squirrel cage construction",
      "Class F insulation with Class B temperature rise",
      "TEFC IP55 enclosure",
      "IE2 / IE3 / IE4 efficiency options"
    ],
    specifications: [
      { label: "Output range", value: "0.37 kW (0.5 HP) to 75 kW (100 HP)" },
      { label: "Poles", value: "2 / 4 / 6 / 8" },
      { label: "Protection", value: "IP55" },
      { label: "Standards", value: "IS 12615 / IEC 60034" }
    ],
    technicalSpecKey: "induction-motor",
    seo: {
      primaryKeyword: "3 phase induction motor",
      secondaryKeywords: ["squirrel cage motor", "IE3 motor supplier", "industrial motor manufacturer"]
    }
  },
  {
    id: "single-phase-motor",
    name: "Single Phase Induction Motor",
    slug: "single-phase-induction-motor",
    categorySlug: ensureCategory("single-phase-motors"),
    shortDescription:
      "Single phase induction motor (capacitor-start / capacitor-run) for domestic and light commercial pumping, fans, and general drive duty.",
    applications: ["Domestic pumps", "Fans", "Small compressors", "Light industrial machinery"],
    features: [
      "Capacitor-start, capacitor-run (CSCR)",
      "High starting torque",
      "Class F insulation",
      "TEFC IP44 / IP55"
    ],
    specifications: [
      { label: "Output range", value: "0.18 kW (0.25 HP) to 2.2 kW (3 HP)" },
      { label: "Poles", value: "2 / 4" },
      { label: "Supply", value: "180–240 V (1Φ) 50 Hz" },
      { label: "Standards", value: "IS 996" }
    ],
    technicalSpecKey: "single-phase-motor",
    seo: {
      primaryKeyword: "single phase motor",
      secondaryKeywords: ["1 phase induction motor", "CSCR motor", "domestic motor supplier"]
    }
  },
  // ─── Solar ───────────────────────────────────────────────────────────────
  {
    id: "solar-pumping-system",
    name: "Solar Pumping System (PMKSY-KUSUM Compatible)",
    slug: "solar-pumping-system",
    categorySlug: ensureCategory("solar-pumping-systems"),
    shortDescription:
      "Turnkey solar water pumping system — PV modules + MPPT-VFD controller + AC/DC submersible pump + structures + cabling. MNRE / PM-KUSUM compliant.",
    applications: ["Agriculture", "Drinking water", "Remote villages", "PM-KUSUM schemes", "Defence"],
    features: [
      "MPPT solar controller with VFD",
      "Dry-run / overload / surge / reverse polarity protection",
      "MNRE / PM-KUSUM compliant",
      "Remote monitoring (GSM / IoT) optional"
    ],
    specifications: [
      { label: "Power range", value: "0.75 kW (1 HP) to 18.5 kW (25 HP)" },
      { label: "Head range", value: "10 to 200 m" },
      { label: "Discharge", value: "20,000 to 4,00,000+ LPD (sunshine)" },
      { label: "PV wattage", value: "1,000 to 25,000 Wp" }
    ],
    technicalSpecKey: "solar-pumping-system",
    seo: {
      primaryKeyword: "solar pumping system manufacturer",
      secondaryKeywords: ["PM-KUSUM solar pump", "solar water pump supplier", "agriculture solar pump"]
    }
  },
  {
    id: "solar-controller",
    name: "Solar Pump Controller (MPPT-VFD)",
    slug: "solar-pump-controller",
    categorySlug: ensureCategory("solar-controllers"),
    shortDescription:
      "Smart MPPT-VFD solar pump controller — maximizes solar harvesting and drives AC submersible/surface pumps. IP65 outdoor enclosure.",
    applications: ["PM-KUSUM solar pumping", "Solar-grid hybrid", "Retrofit on existing AC pumps"],
    features: [
      "MPPT efficiency ≥ 98%",
      "VFD output 0–50 Hz",
      "Comprehensive protection package",
      "Modbus RTU / GSM / IoT optional"
    ],
    specifications: [
      { label: "Power range", value: "0.75 kW (1 HP) to 18.5 kW (25 HP)" },
      { label: "Input DC", value: "150–850 V (MPPT window)" },
      { label: "Protection", value: "IP65 outdoor" },
      { label: "Compliance", value: "MNRE empanelled, IEC 61683" }
    ],
    technicalSpecKey: "solar-controller",
    seo: {
      primaryKeyword: "solar pump controller MPPT VFD",
      secondaryKeywords: ["solar VFD drive", "MPPT solar inverter", "solar pump drive supplier"]
    }
  },
  {
    id: "solar-pv-module",
    name: "Solar PV Module (Mono-PERC / Bifacial)",
    slug: "solar-pv-module",
    categorySlug: ensureCategory("solar-pv-modules"),
    shortDescription:
      "High-efficiency mono-PERC / bifacial solar PV modules for solar pumping, rooftop, and ground-mount installations. ALMM-listed, IEC certified, 25-year linear performance warranty.",
    applications: ["Solar pumping", "Rooftop solar", "Utility-scale plants", "Off-grid electrification", "Solar street lighting"],
    features: [
      "Mono-PERC / TOPCon / bifacial cell technology",
      "Half-cell / multi-busbar design",
      "Anti-PID / anti-LID treatment",
      "Salt-mist & ammonia corrosion resistance"
    ],
    specifications: [
      { label: "Power range", value: "330 / 400 / 450 / 540 / 580 / 600 / 670 Wp" },
      { label: "Efficiency", value: "Up to 22.5%" },
      { label: "Certification", value: "IEC 61215 / IEC 61730 / IS 14286 / ALMM" },
      { label: "Warranty", value: "12 yr product / 25 yr linear performance" }
    ],
    technicalSpecKey: "solar-pv-module",
    brochureKey: "solar-pv-module-datasheet",
    seo: {
      primaryKeyword: "solar PV module manufacturer",
      secondaryKeywords: ["mono-PERC solar panel", "bifacial PV module", "ALMM solar module"]
    }
  },
  {
    id: "solar-mounting-structure",
    name: "Solar Mounting Structure (Hot-Dip Galvanised)",
    slug: "solar-mounting-structure",
    categorySlug: ensureCategory("solar-structures"),
    shortDescription:
      "Hot-dip galvanised solar mounting structure for ground-mount, rooftop, and tracker-mount PV arrays. MNRE compliant, designed for 25-year service life.",
    applications: ["Solar pumping mounting", "Rooftop solar", "Ground-mount plants", "Carports", "Trackers"],
    features: [
      "Hot-dip galvanised (≥ 80 µm) for 25+ yr corrosion protection",
      "Bolted modular design — no on-site welding",
      "Wind / snow load engineered to IS 875 / IS 1893",
      "MNRE / PM-KUSUM compliant"
    ],
    specifications: [
      { label: "Material", value: "MS hot-dip galvanised / Aluminium alloy" },
      { label: "Coating thickness", value: "≥ 80 µm (per IS 4759 / ASTM A123)" },
      { label: "Wind load design", value: "Up to 55 m/s" },
      { label: "Module tilt", value: "15–30° fixed / seasonal / dual-axis" }
    ],
    technicalSpecKey: "solar-structure",
    seo: {
      primaryKeyword: "solar mounting structure manufacturer",
      secondaryKeywords: ["solar panel structure", "hot dip galvanised structure", "MNRE solar structure"]
    }
  },
  {
    id: "solar-ac-dc-cable",
    name: "Solar AC / DC Cable (1500 V DC)",
    slug: "solar-ac-dc-cable",
    categorySlug: ensureCategory("solar-ac-dc-cables"),
    shortDescription:
      "Solar-grade single-core cable for DC PV array wiring and AC interconnections. UV-resistant XLPO with 25-year outdoor service life. EN 50618 / TUV certified.",
    applications: ["Solar PV array string wiring", "Inverter DC link", "AC interconnection", "Outdoor exposed runs"],
    features: [
      "Tinned copper conductor — Class 5 flexible",
      "XLPO insulation & sheath — halogen-free, UV-resistant",
      "1500 V DC voltage rating",
      "Operating temperature -40 to +120 °C"
    ],
    specifications: [
      { label: "Voltage rating", value: "1500 V DC / 1000 V AC" },
      { label: "Sizes", value: "1.5 / 2.5 / 4.0 / 6.0 / 10 / 16 / 25 mm² and above" },
      { label: "Standards", value: "EN 50618 / IEC 62930 / TUV 2 PfG 1169" },
      { label: "Service life", value: "25+ years outdoor exposed" }
    ],
    technicalSpecKey: "solar-cable",
    seo: {
      primaryKeyword: "solar cable manufacturer",
      secondaryKeywords: ["solar DC cable", "PV cable supplier", "EN 50618 solar cable"]
    }
  },
  // ─── Pipes & Cables ──────────────────────────────────────────────────────
  {
    id: "upvc-column-pipe",
    name: "uPVC Column Pipe (Borewell)",
    slug: "upvc-column-pipe",
    categorySlug: ensureCategory("upvc-column-pipes"),
    shortDescription:
      "High-strength uPVC column pipe for borewell submersible pump installations. Threaded socket–spigot with EPDM O-ring — leak-proof, 5–7× lighter than GI column pipes.",
    applications: ["Borewell submersible pump column", "Domestic & agriculture borewells", "OEM pumpset assembly"],
    features: [
      "5–7× lighter than GI column pipe",
      "Threaded socket–spigot with EPDM O-ring",
      "Corrosion-proof — no rust or scale",
      "Smooth bore — low friction loss"
    ],
    specifications: [
      { label: "Size range", value: "32 mm to 150 mm (1¼\" to 6\")" },
      { label: "Pressure class", value: "Class 1 / 2 / 3 / 4 (per IS 12818)" },
      { label: "Pipe length", value: "3.0 m standard" },
      { label: "Standard", value: "IS 12818, BS 6920 (potable water)" }
    ],
    technicalSpecKey: "upvc-column-pipe",
    seo: {
      primaryKeyword: "uPVC column pipe manufacturer",
      secondaryKeywords: ["borewell column pipe", "IS 12818 pipe", "uPVC pipe exporter"]
    }
  },
  {
    id: "submersible-flat-cable-product",
    name: "Submersible Flat Cable (3-Core)",
    slug: "submersible-flat-cable",
    categorySlug: ensureCategory("submersible-flat-cables"),
    shortDescription:
      "Submersible flat cable engineered for connection between submersible pump motors and surface control panels. EPR / XLPE insulation with PCP / heavy-duty PVC sheath.",
    applications: ["V3/V4/V5/V6/V8 submersible motors", "Borewell installations", "Sewage / dewatering pumps", "Solar pumping"],
    features: [
      "Flat parallel construction — easy column-mount routing",
      "EPR / XLPE insulation — high dielectric strength",
      "PCP / heavy-duty PVC sheath — abrasion & water resistant",
      "Class 5 flexible copper conductor"
    ],
    specifications: [
      { label: "Cores", value: "3-core / 3-core + earth / 4-core" },
      { label: "Sizes", value: "1.5 / 2.5 / 4.0 / 6.0 / 10 / 16 / 25 mm² and above" },
      { label: "Voltage rating", value: "650 / 1100 V" },
      { label: "Standard", value: "IS 9968 / IS 694" }
    ],
    technicalSpecKey: "submersible-flat-cable",
    seo: {
      primaryKeyword: "submersible flat cable manufacturer",
      secondaryKeywords: ["3 core submersible cable", "borewell pump cable", "submersible motor cable supplier"]
    }
  },
  {
    id: "pvc-insulated-cable",
    name: "PVC Insulated Cable (1.1 kV LT)",
    slug: "pvc-insulated-cable",
    categorySlug: ensureCategory("pvc-insulated-cables"),
    shortDescription:
      "PVC insulated power & control cable for fixed-wiring in industrial, infrastructure, and building electrical installations. Single-core and multi-core variants.",
    applications: ["Industrial wiring", "Building electrical", "LT distribution", "Control wiring", "EPC projects"],
    features: [
      "Copper / aluminium conductors",
      "PVC Type-A / Type-C / FRLS insulation",
      "Armoured / unarmoured options",
      "Conforms to IS 694 / IS 1554"
    ],
    specifications: [
      { label: "Voltage grade", value: "650 / 1100 V (1.1 kV LT)" },
      { label: "Sizes", value: "1.5 mm² to 400 mm²" },
      { label: "Conductor", value: "Annealed copper / aluminium" },
      { label: "Standards", value: "IS 694 / IS 1554 Part-1" }
    ],
    technicalSpecKey: "pvc-insulated-cable",
    seo: {
      primaryKeyword: "PVC insulated cable manufacturer",
      secondaryKeywords: ["1.1 kV cable", "industrial PVC cable supplier", "IS 1554 cable"]
    }
  },
  {
    id: "industrial-cable",
    name: "Industrial XLPE Cable (LT / HT)",
    slug: "industrial-xlpe-cable",
    categorySlug: ensureCategory("industrial-cables"),
    shortDescription:
      "Industrial-grade XLPE insulated power cable for LT (1.1 kV) and HT (3.3 / 6.6 / 11 / 33 kV) distribution. Substations, plant feeders, EPC infrastructure.",
    applications: ["LT distribution", "HT feeders", "Plant motor cables", "Underground & duct installation"],
    features: [
      "XLPE insulation — 90 °C continuous, 250 °C short-circuit",
      "Higher current capacity than PVC (~20% more)",
      "Galvanised steel armouring",
      "Type-test certified at NABL labs"
    ],
    specifications: [
      { label: "Voltage grade", value: "1.1 / 3.3 / 6.6 / 11 / 33 kV" },
      { label: "Sizes", value: "16 mm² to 630 mm²" },
      { label: "Standard", value: "IS 7098 / IEC 60502" },
      { label: "Sheath", value: "PVC ST2 / FRLS / HFFR" }
    ],
    technicalSpecKey: "industrial-cable",
    seo: {
      primaryKeyword: "XLPE cable manufacturer",
      secondaryKeywords: ["HT cable supplier", "11 kV XLPE cable", "industrial power cable"]
    }
  },
  // ─── Valves ──────────────────────────────────────────────────────────────
  {
    id: "butterfly-valve",
    name: "Butterfly Valve (Wafer / Lug / Flanged)",
    slug: "butterfly-valve",
    categorySlug: ensureCategory("butterfly-valves"),
    shortDescription:
      "Concentric (resilient seated) and double-offset butterfly valves for isolation and flow control in water, wastewater, HVAC, fire-fighting, and process duty.",
    applications: ["Water supply", "Wastewater", "HVAC", "Fire fighting", "Industrial process"],
    features: [
      "100% bubble-tight bi-directional shutoff",
      "Compact face-to-face dimension",
      "Lever / gear / electric / pneumatic operation",
      "Conforms to IS 13095 / EN 593 / API 609"
    ],
    specifications: [
      { label: "Size range", value: "DN 40 to DN 1200" },
      { label: "Pressure rating", value: "PN6 / PN10 / PN16 / PN25" },
      { label: "Body", value: "CI / DI / Cast steel / SS 316" },
      { label: "Seat", value: "EPDM / NBR / Viton / PTFE" }
    ],
    technicalSpecKey: "butterfly-valve",
    brochureKey: "butterfly-valve-datasheet",
    seo: {
      primaryKeyword: "butterfly valve manufacturer",
      secondaryKeywords: ["wafer butterfly valve", "DI body butterfly valve", "EN 593 valve"]
    }
  },
  {
    id: "non-return-valve",
    name: "Non-Return Valve (NRV)",
    slug: "non-return-valve",
    categorySlug: ensureCategory("nrv-valves"),
    shortDescription:
      "Non-return (check) valves for preventing reverse flow in pump discharge, water mains, fire systems, and process lines. Swing, dual-plate, silent disc-lift configurations.",
    applications: ["Pump discharge", "Fire mains", "Booster systems", "Water mains", "HVAC"],
    features: [
      "Swing / dual-plate / silent disc-lift / ball-check types",
      "Spring-assisted closure (silent / dual-plate)",
      "Resilient (rubber) seat for bubble-tight closure",
      "Conforms to IS 5312 / API 6D / EN 12334"
    ],
    specifications: [
      { label: "Size range", value: "DN 15 to DN 600" },
      { label: "Pressure rating", value: "PN10 / PN16 / PN25 / PN40" },
      { label: "Body", value: "CI / DI / Cast steel / Bronze / SS" },
      { label: "Type", value: "Swing / Dual-plate / Silent disc / Ball-check" }
    ],
    technicalSpecKey: "nrv-valve",
    seo: {
      primaryKeyword: "non return valve manufacturer",
      secondaryKeywords: ["NRV check valve", "swing check valve", "dual plate NRV"]
    }
  },
  {
    id: "gate-valve",
    name: "Gate (Sluice) Valve",
    slug: "gate-valve",
    categorySlug: ensureCategory("gate-valves"),
    shortDescription:
      "Sluice / gate valves for full-bore isolation duty in water supply, wastewater, fire-fighting, and industrial mainlines. Resilient seated and metal-seated variants.",
    applications: ["Water mains", "Wastewater", "Fire systems", "Industrial isolation", "Process plants"],
    features: [
      "Full-bore design — minimal pressure drop",
      "Bi-directional flow capability",
      "Resilient seated (rubber wedge) for bubble-tight shutoff",
      "Conforms to IS 14846 / EN 1171 / API 600"
    ],
    specifications: [
      { label: "Size range", value: "DN 40 to DN 1200" },
      { label: "Pressure rating", value: "PN10 / PN16 / PN25 / PN40" },
      { label: "Body", value: "CI / DI / Cast steel" },
      { label: "Stem type", value: "NRS (buried) / OS&Y (above ground)" }
    ],
    technicalSpecKey: "gate-valve",
    brochureKey: "gate-valve-datasheet",
    seo: {
      primaryKeyword: "gate valve manufacturer",
      secondaryKeywords: ["sluice valve supplier", "resilient seated gate valve", "EN 1171 gate valve"]
    }
  },
  {
    id: "ball-valve",
    name: "Ball Valve (2-Piece / 3-Piece / Floating / Trunnion)",
    slug: "ball-valve",
    categorySlug: ensureCategory("ball-valves"),
    shortDescription:
      "Industrial ball valves for quick shutoff, low pressure drop, and bi-directional bubble-tight sealing. Floating-ball and trunnion-mounted variants for water, oil, gas, chemicals, steam.",
    applications: ["Water", "Gas", "Oil & petrochemical", "Chemicals", "Steam (metal-seated)"],
    features: [
      "Quarter-turn (90°) operation",
      "Bi-directional bubble-tight shutoff",
      "Anti-blowout stem — safe against pressure surges",
      "Fire-safe variant available (API 607)"
    ],
    specifications: [
      { label: "Size range", value: "DN 8 to DN 600" },
      { label: "Pressure rating", value: "PN16 / PN25 / PN40 / PN64 / ANSI 150–900" },
      { label: "Body", value: "Brass / CI / Cast steel / SS 304 / SS 316 / Duplex" },
      { label: "Seat", value: "PTFE / RPTFE / Devlon / PEEK" }
    ],
    technicalSpecKey: "ball-valve",
    brochureKey: "ball-valves-datasheet",
    seo: {
      primaryKeyword: "ball valve manufacturer",
      secondaryKeywords: ["SS 316 ball valve", "industrial ball valve supplier", "API 6D ball valve"]
    }
  },
  // ─── Panels ──────────────────────────────────────────────────────────────
  {
    id: "pump-control-panel",
    name: "Pump Control Panel",
    slug: "pump-control-panel",
    categorySlug: ensureCategory("control-panels"),
    shortDescription:
      "Engineered pump control panel for submersible and surface pump installations. Includes contactor, overload relay, single-phasing preventer, dry-run protection, and metering.",
    applications: ["Domestic / agricultural pumps", "Industrial pumps", "Municipal pumping", "Pressure boosters", "Sewage & dewatering"],
    features: [
      "Built to pump rating + starting method",
      "Single-phasing preventer & dry-run protection",
      "Under/Over voltage cutoff",
      "Powder-coated MS enclosure (IP54 / IP65)"
    ],
    specifications: [
      { label: "Pump rating", value: "0.37 kW (0.5 HP) to 150 kW (200 HP)" },
      { label: "Supply", value: "180–240 V (1Φ) / 380–415 V (3Φ)" },
      { label: "Starting", value: "DOL / Star-Delta / Soft-Start / VFD" },
      { label: "Enclosure", value: "IP54 (indoor) / IP65 (outdoor)" }
    ],
    technicalSpecKey: "control-panel",
    seo: {
      primaryKeyword: "pump control panel manufacturer",
      secondaryKeywords: ["submersible pump panel", "motor control panel", "DOL panel supplier"]
    }
  },
  {
    id: "motor-starter-panel",
    name: "Motor Starter Panel (DOL / Star-Delta / Auto-Transformer)",
    slug: "motor-starter-panel",
    categorySlug: ensureCategory("starter-panels"),
    shortDescription:
      "Motor starter panel for 3-phase induction motors and submersible pump sets. DOL, Star-Delta, and Auto-Transformer variants with complete protection package.",
    applications: ["3-phase motor starting", "Pumps", "Blowers & compressors", "Conveyors", "Industrial loads"],
    features: [
      "DOL (≤ 5 HP) / Star-Delta (5–60 HP) / Auto-Transformer (≥ 60 HP)",
      "Soft-starter option",
      "Thermal overload with single-phasing protection",
      "Conforms to IEC 61439 / IS 8623"
    ],
    specifications: [
      { label: "Motor rating", value: "0.75 kW (1 HP) to 150 kW (200 HP)" },
      { label: "Supply", value: "380–415 V (3Φ) 4-wire" },
      { label: "Short-circuit withstand", value: "10 / 25 / 50 kA" },
      { label: "Enclosure", value: "IP54 / IP55 / IP65" }
    ],
    technicalSpecKey: "starter-panel",
    seo: {
      primaryKeyword: "motor starter panel manufacturer",
      secondaryKeywords: ["star delta starter", "auto transformer starter", "DOL starter panel"]
    }
  },
  {
    id: "automation-panel",
    name: "PLC-Based Automation Panel",
    slug: "automation-panel",
    categorySlug: ensureCategory("automation-panels"),
    shortDescription:
      "PLC-based automation panel for pumping stations, WTP / STP / ETP, and industrial process. Programmable logic, HMI display, SCADA-ready signals, and integrated motor control.",
    applications: ["Pumping stations", "Water treatment plants", "STP / ETP", "Pressure booster cascade", "Building automation"],
    features: [
      "Programmable Logic Controller (PLC)",
      "Colour HMI touchscreen",
      "Cascade duty-standby with auto-rotation",
      "Modbus RTU / Ethernet for SCADA"
    ],
    specifications: [
      { label: "PLC brands", value: "Siemens / Allen-Bradley / Mitsubishi / Delta" },
      { label: "HMI", value: "7\" / 10\" / 15\" colour touchscreen" },
      { label: "Communication", value: "Ethernet / Modbus / Profinet / OPC-UA" },
      { label: "Pumps controlled", value: "1 to 8 (expandable)" }
    ],
    technicalSpecKey: "automation-panel",
    seo: {
      primaryKeyword: "PLC automation panel manufacturer",
      secondaryKeywords: ["pumping station automation", "SCADA panel supplier", "PLC HMI panel"]
    }
  },
  {
    id: "vfd-panel",
    name: "VFD Panel (Variable Frequency Drive)",
    slug: "vfd-panel",
    categorySlug: ensureCategory("vfd-panels"),
    shortDescription:
      "Variable Frequency Drive (VFD) panel for energy-efficient motor speed control, soft starting, and process automation. Pumps, fans, blowers, compressors.",
    applications: ["Pump speed control", "HVAC chilled water", "Cooling tower fans", "Compressors", "Conveyors"],
    features: [
      "Energy savings 40–60% on variable torque loads",
      "Soft start / soft stop",
      "Built-in PID controller",
      "Modbus RTU communication standard"
    ],
    specifications: [
      { label: "Motor rating", value: "0.37 kW (0.5 HP) to 375 kW (500 HP)" },
      { label: "Input voltage", value: "200–240 / 380–415 / 440–480 V AC" },
      { label: "Drive brands", value: "Danfoss / ABB / Siemens / Schneider / Delta / Yaskawa" },
      { label: "Enclosure", value: "IP54 / IP55 panel level" }
    ],
    technicalSpecKey: "vfd-panel",
    seo: {
      primaryKeyword: "VFD panel manufacturer",
      secondaryKeywords: ["variable frequency drive panel", "VFD pump panel", "energy saving VFD"]
    }
  },
  {
    id: "smart-pump-controller",
    name: "Smart Pump Controller",
    slug: "smart-pump-controller",
    categorySlug: ensureCategory("pump-controllers"),
    shortDescription:
      "Smart pump controller for protection, automation, and energy efficiency in domestic, agricultural, and small commercial pumping installations. Dry-run, voltage cutoff, auto-restart.",
    applications: ["Domestic pumps", "Agricultural borewell pumps", "Sprinkler / drip irrigation", "Pressure booster"],
    features: [
      "Built-in dry-run protection",
      "Voltage cutoff (under/over voltage)",
      "Auto-restart after fault clearance",
      "GSM / Wi-Fi remote monitoring (premium)"
    ],
    specifications: [
      { label: "Pump rating", value: "0.37 kW (0.5 HP) to 5.5 kW (7.5 HP)" },
      { label: "Supply", value: "180–270 V (1Φ) / 320–460 V (3Φ)" },
      { label: "Display", value: "LED / LCD with V/A/kW/fault codes" },
      { label: "Enclosure", value: "IP54 ABS / MS" }
    ],
    technicalSpecKey: "pump-controller",
    seo: {
      primaryKeyword: "smart pump controller",
      secondaryKeywords: ["dry run protection controller", "pump auto controller", "GSM pump controller"]
    }
  },

  // Stainless steel submersible pump series variants (brochure-derived, rebranded)
  ...ssSubmersibleSeries.points.map((pt) => ({
    id: `ss-submersible-${pt.model.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: `Stainless Steel Submersible Pump Model ${pt.model}`,
    slug: slugify(`stainless-steel-submersible-pump-${pt.model}`),
    categorySlug: ensureCategory("stainless-steel-pumps"),
    shortDescription:
      "Export-grade stainless steel submersible pump variant engineered for corrosion resistance, stable performance, and procurement-ready documentation for global projects.",
    applications: [
      "Agricultural irrigation",
      "Industrial water transfer",
      "Utility distribution",
      "Remote and export project installations"
    ],
    features: [
      "Corrosion-resistant stainless steel construction options",
      "Designed for export documentation and procurement evaluation",
      "Stable hydraulic performance envelope across stages",
      "Configuration-based selection support for duty point matching"
    ],
    specifications: [
      { label: "Model", value: pt.model },
      ...(pt.stages ? [{ label: "Stages", value: String(pt.stages) }] : []),
      ...(pt.speedRpm ? [{ label: "Speed reference", value: `${pt.speedRpm} rpm` }] : []),
      ...ssSubmersibleSeries.commonSpecs,
      { label: "Markets", value: "India • UAE • Saudi Arabia • Qatar • Oman • Kuwait • Bahrain • Africa" }
    ],
    brochureKey: "stainless-steel-submersible-series",
    seo: {
      primaryKeyword: "stainless steel submersible pump",
      secondaryKeywords: [
        "stainless steel submersible pump manufacturer india",
        "stainless steel submersible pump exporter",
        "submersible pump supplier in UAE",
        "industrial pump supplier Saudi Arabia",
        "export quality submersible pump"
      ]
    }
  })),

  // Submersible motors (brochure-derived, rebranded)
  ...submersibleMotorSeries.points.map((pt) => ({
    id: `submersible-motor-${String(pt.kw ?? pt.hp ?? pt.model).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: `Submersible Motor ${pt.kw ? `${pt.kw} kW` : pt.model}`,
    slug: slugify(`submersible-motor-${pt.kw ? `${pt.kw}-kw` : pt.model}`),
    categorySlug: ensureCategory("water-filled-motors"),
    shortDescription:
      "Industrial submersible motor engineered for stable thermal performance, long-life duty cycles, and export-ready documentation to support EPC and government procurement.",
    applications: ["Submersible pump sets", "Agriculture pumping", "Industrial water pumping", "Utility installations"],
    features: [
      "Export-ready documentation and BOM-driven material traceability",
      "Designed for continuous duty cycles and stable operation",
      "Supports common project voltages and frequency variants",
      "Procurement-friendly specification format for tenders and RFQs"
    ],
    specifications: [
      ...(pt.kw ? [{ label: "Rated power (representative)", value: `${pt.kw} kW` }] : []),
      ...(pt.hp ? [{ label: "Rated power (representative)", value: `${pt.hp} HP` }] : []),
      ...submersibleMotorSeries.commonSpecs,
      { label: "Markets", value: "India • Middle East • Africa export markets" }
    ],
    brochureKey: "submersible-motor-series",
    seo: {
      primaryKeyword: "water filled submersible motor manufacturer",
      secondaryKeywords: [
        "submersible motor exporter from india",
        "submersible motor supplier in UAE",
        "submersible motor for pump set",
        "industrial motor manufacturer india"
      ]
    }
  }))
].map((p) => ({
  ...p,
  slug: p.slug ?? slugify(p.name)
}));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

