import { slugify } from "@/lib/seo/slugify";

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  categorySlug: string;
  excerpt: string;
  publishedAt: string;
  keywords: string[];
  content: string[];
};

export const blogCategories: BlogCategory[] = [
  { slug: "pump-guides", name: "Pump Guides", description: "Selection, sizing, and performance insights for pumps and systems." },
  { slug: "solar-pumping", name: "Solar Pumping", description: "Solar pumping design, components, and best practices for field projects." },
  { slug: "industrial-solutions", name: "Industrial Solutions", description: "Industrial pumping and flow solutions for plants, utilities, and EPC." },
  { slug: "water-management", name: "Water Management", description: "Distribution, dewatering, sewage, and water movement strategy for projects." },
  { slug: "agriculture-solutions", name: "Agriculture Solutions", description: "Irrigation pumping and solar water pumping for farms and agri supply chains." },
  { slug: "pump-maintenance", name: "Pump Maintenance", description: "Maintenance, troubleshooting, and lifecycle value guidance for pump assets." },
  { slug: "export-industry", name: "Export Industry", description: "Procurement, documentation, and export readiness for GCC and Africa markets." },
  { slug: "government-tenders", name: "Government Tenders", description: "Tender documentation, technical schedules, and procurement workflows." }
];

const now = new Date().toISOString().slice(0, 10);

export const blogPosts: BlogPost[] = [
  {
    title: "How to choose submersible pumps for borewell and openwell applications",
    slug: slugify("How to choose submersible pumps"),
    categorySlug: "pump-guides",
    excerpt:
      "A procurement-first guide to selecting submersible pumps based on duty point, installation, water quality, and lifecycle value for India, GCC, and Africa projects.",
    publishedAt: now,
    keywords: ["submersible pump selection", "borewell pump guide", "openwell pump", "submersible pump manufacturer india"],
    content: [
      "Choosing the right submersible pump starts with defining the duty point: required flow and head, including friction losses and site constraints.",
      "Next, confirm installation conditions: borewell diameter, depth, water level fluctuation, and cable routing.",
      "Evaluate water quality and solids content to choose materials and protection strategies.",
      "For export and EPC procurement, prioritize documentation clarity (datasheets, curves, tables) and serviceability.",
      "Finally, request a configuration-specific quotation with the duty point and destination country for accurate lead times and packing requirements."
    ]
  },
  {
    title: "Best solar pumps for agriculture: what matters in real installations",
    slug: slugify("Best solar pumps for agriculture"),
    categorySlug: "solar-pumping",
    excerpt:
      "Understand solar pumping system sizing, controllers, PV modules, and field realities to select solar pumps with stable performance and protection.",
    publishedAt: now,
    keywords: ["solar pump manufacturer", "solar pumping solutions", "solar pump supplier UAE"],
    content: [
      "Solar pumping performance depends on irradiance, PV sizing, motor efficiency, controller behavior, and water demand profile.",
      "Always size PV and controller with margin for heat, dust, and seasonal variation.",
      "Protection features like dry-run, under/over-voltage, and soft start improve reliability.",
      "For export projects, confirm documentation, cable sizing, and structure design criteria.",
      "Request selection based on duty point and site geography to reduce underperformance risk."
    ]
  },
  {
    title: "Industrial pump maintenance guide: reduce downtime and lifecycle cost",
    slug: slugify("Industrial pump maintenance guide"),
    categorySlug: "pump-maintenance",
    excerpt:
      "A structured maintenance approach for industrial pumps and pumping stations, designed for EPC and plant operations teams.",
    publishedAt: now,
    keywords: ["industrial pump maintenance", "dewatering pump supplier", "pump spare parts"],
    content: [
      "Plan inspections around duty cycle: vibration, noise, temperature, leakage, and electrical parameters.",
      "Use clean power, correct cable sizing, and proper earthing to protect motors and panels.",
      "Track spares mapping and standardize configurations where possible for faster repairs.",
      "For sewage and slurry duty, monitor wear parts and maintain clearance to preserve performance.",
      "Document every service event to build a reliable maintenance baseline."
    ]
  },
  {
    title: "Borewell pump buying guide for EPC contractors and export buyers",
    slug: slugify("Borewell pump buying guide"),
    categorySlug: "pump-guides",
    excerpt:
      "What procurement teams should ask for: duty point validation, materials, documentation, and project-ready spares planning for borewell pumps.",
    publishedAt: now,
    keywords: ["borewell pump exporter", "submersible pump manufacturer india", "pump exporter from india"],
    content: [
      "Define duty point and borewell constraints first — without this, comparisons are not technically valid.",
      "Request configuration-based datasheets and performance curves where applicable.",
      "Confirm protection strategy: panel, controller, cable joints, and installation practices.",
      "For export, align packaging, labeling, and documentation requirements upfront.",
      "Select suppliers who can support commissioning timelines and spares planning."
    ]
  },
  {
    title: "Pump installation guide: critical checks that prevent early failures",
    slug: slugify("Pump installation guide"),
    categorySlug: "pump-guides",
    excerpt:
      "A practical checklist for borewell, openwell, dewatering, and industrial pump installations to reduce failures and improve performance stability.",
    publishedAt: now,
    keywords: ["pump installation", "submersible cable manufacturer", "control panel manufacturer"],
    content: [
      "Verify cable sizing, joints, insulation, and earthing before commissioning.",
      "Confirm discharge piping, NRV placement, and alignment to reduce mechanical stress.",
      "Avoid dry-run by validating water levels and using protection controllers.",
      "Record baseline performance metrics at commissioning for future troubleshooting.",
      "Use correct tightening torque and sealing practices to prevent leakage and vibration."
    ]
  },
  {
    title: "Export quality pumps from India: documentation and procurement essentials",
    slug: slugify("Export quality pumps from India"),
    categorySlug: "export-industry",
    excerpt:
      "How B2B buyers evaluate export suppliers: technical tables, configuration clarity, compliance, packaging, and response speed — for GCC and Africa markets.",
    publishedAt: now,
    keywords: ["pump exporter from india", "pump supplier middle east", "pump supplier in UAE"],
    content: [
      "Export quality is not only materials — it is also documentation clarity and procurement reliability.",
      "Request standardized technical tables and configuration naming to avoid ambiguity in procurement.",
      "Confirm packaging, labeling, warranty terms, and spares planning in the quotation stage.",
      "Prioritize suppliers who can support EPC timelines and commissioning documentation.",
      "Align payment terms and logistics processes early for smoother dispatch."
    ]
  }
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string) {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

