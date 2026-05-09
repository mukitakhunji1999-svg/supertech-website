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
    name: "Dewatering Pump",
    slug: "dewatering-pump",
    categorySlug: ensureCategory("dewatering-pumps"),
    shortDescription:
      "Export-grade dewatering pumps engineered for construction sites, trenches, pits, and emergency water removal with rapid deployment and high reliability.",
    applications: ["Construction dewatering", "Foundation trenches", "Pits & excavations", "Emergency drainage"],
    features: ["Rugged field design", "High reliability", "Service-friendly construction", "Wide operating range"],
    specifications: [{ label: "Use", value: "Construction • utilities • infrastructure" }],
    brochureKey: "dewatering-pump",
    seo: {
      primaryKeyword: "dewatering pump supplier",
      secondaryKeywords: ["dewatering pump exporter", "dewatering pump supplier in UAE", "construction dewatering pumps"]
    }
  }
  ,
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

