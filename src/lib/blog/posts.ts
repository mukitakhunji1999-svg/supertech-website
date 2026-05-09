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
  /** Short legacy body (used when `sections` is absent). */
  content: string[];
  /** Long-form sections with stable ids for TOC / Article UX. */
  sections?: { id: string; heading: string; paragraphs: string[] }[];
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
    ],
    sections: [
      {
        id: "duty-point",
        heading: "Start with the duty point, not the catalogue headline",
        paragraphs: [
          "Procurement comparisons fail when each supplier optimizes a different operating assumption. The duty point is the contract between hydraulics and economics: required flow, total dynamic head, water level behavior, and future expansion margin. Start there and force every bidder to map explicitly to the same declared envelope.",
          "For borewell duty, include static and minimum water levels, casing diameter, and discharge pressure target. For openwell duty, clarify suction conditions and wet pit constraints. Export buyers should also include frequency, voltage variation behavior, and any mandatory efficiency framing used in tender evaluation."
        ]
      },
      {
        id: "materials",
        heading: "Materials, water chemistry, and lifecycle realism",
        paragraphs: [
          "Water chemistry influences corrosion, abrasion, and seal life. Sand content accelerates wear in tight clearances; chlorides stress stainless grades differently depending on concentration and temperature. If chemistry is unknown, document the risk and specify a verification plan rather than guessing metallurgy from marketing names.",
          "Serviceability matters: can wear parts be replaced without pulling the entire string repeatedly? Can the supplier provide a spares map aligned to your stocking policy? SUPERTECH WATER SOLUTION recommends RFQ submissions that include chemistry notes and maintenance access constraints so recommendations remain field-realistic."
        ]
      },
      {
        id: "documentation",
        heading: "Documentation discipline for EPC and government buyers",
        paragraphs: [
          "EPC and government evaluations reward clarity: consistent naming, tabulated performance references, and traceable material statements. Avoid ambiguous model codes that cannot be tied to a datasheet line item. Ask for commissioning checklists and protection settings assumptions in writing.",
          "For export schedules, align documentation release gates to manufacturing release so customs and QA reviews do not become critical path surprises."
        ]
      }
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
  },
  {
    title: "How to select industrial pumps for factories, utilities, and EPC projects",
    slug: slugify("How to select industrial pumps"),
    categorySlug: "industrial-solutions",
    excerpt:
      "A structured industrial pump selection framework: duty definition, NPSH margin, electrical coordination, maintenance access, and documentation for competitive procurement.",
    publishedAt: now,
    keywords: [
      "industrial pump selection",
      "factory water pump guide",
      "EPC pump procurement",
      "pump manufacturer India technical"
    ],
    content: [],
    sections: [
      {
        id: "system-boundary",
        heading: "Define the system boundary before you compare pump curves",
        paragraphs: [
          "Industrial pumping is almost never an isolated component purchase. The station includes suction piping, discharge piping, valves, instrumentation, motors, starters or VFDs, and protection logic. If the RFQ only requests a pump curve without defining pipe losses, NRV behavior, and control philosophy, you will get incomparable offers and commissioning disputes later.",
          "Start by documenting fluid properties, design flows for each operating case, maximum and minimum heads, NPSH available calculation assumptions, and parallel/series operation rules. For utilities, include redundancy requirements and maintenance bypass expectations."
        ]
      },
      {
        id: "npsh",
        heading: "NPSH, cavitation, and why margin saves money",
        paragraphs: [
          "Cavitation is not a random failure mode; it is a predictable consequence of insufficient NPSH margin or off-design operation. Industrial buyers should require explicit NPSH available versus required discussion at the selection stage, not after noise appears in the field.",
          "If a supplier cannot explain margin choices relative to your transient cases (valve closure, VFD ramp, minimum flow), treat that as a procurement risk signal."
        ]
      },
      {
        id: "electrical",
        heading: "Electrical coordination: starting, harmonics, and protection",
        paragraphs: [
          "Motor heating depends on starting method, runout power, and grid voltage stability. VFD applications introduce harmonics and bearing currents risks that must be coordinated with cable screens, earthing, and drive settings. SUPERTECH WATER SOLUTION recommends integrated RFQs that include electrical single-line assumptions so pump and panel selections remain consistent.",
          "For export destinations, clarify frequency, voltage band, and any mandatory efficiency labeling expectations used in evaluation."
        ]
      },
      {
        id: "lifecycle",
        heading: "Lifecycle: spares, standardization, and O&M readability",
        paragraphs: [
          "Factories benefit from configuration standardization to reduce spare proliferation — but only if standardization does not violate distinct duty points across stations. Document a spares philosophy: which wear parts are site-stocked versus factory-lead, and what inspection intervals are expected.",
          "EPC turnover packages should include readable O&M narratives, not only datasheets. Ask for commissioning baseline parameters to be recorded as part of handover."
        ]
      }
    ]
  },
  {
    title: "Difference between V4 and V6 pumps: a procurement-neutral technical primer",
    slug: slugify("Difference between V4 and V6 pumps"),
    categorySlug: "pump-guides",
    excerpt:
      "Understand common borewell pump diameter class terminology used in Indian markets, what it implies hydraulically, and how to avoid mis-selection when comparing offers.",
    publishedAt: now,
    keywords: ["V4 vs V6 pump", "borewell pump sizing", "submersible pump stages", "pump selection India"],
    content: [],
    sections: [
      {
        id: "terminology",
        heading: "What buyers usually mean by diameter class terminology",
        paragraphs: [
          "In many Indian procurement conversations, diameter class shorthand is used as a coarse proxy for hydraulic envelope and mechanical envelope: the outer diameter of the pump assembly relative to common borewell casing sizes, and the motor/pump frame suitable for a class of heads and flows. The exact technical mapping must still be validated against the duty point and casing ID; shorthand is not a substitute for hydraulic sign-off.",
          "SUPERTECH WATER SOLUTION recommends always anchoring comparisons to declared flow/head points, stage count, speed assumptions, and efficiency references rather than label shorthand alone."
        ]
      },
      {
        id: "hydraulics",
        heading: "Hydraulic implications: stages, curves, and operating point stability",
        paragraphs: [
          "Higher head requirements generally push designs toward more stages or different hydraulics, which interacts with motor rating, cable losses, and starting characteristics. Two pumps with similar shorthand labels can differ materially in curve shape, BEP placement, and allowable operating region.",
          "Request curve families and allowable operating range guidance, especially if the station will modulate with VFD control or if static water level changes seasonally."
        ]
      },
      {
        id: "installation",
        heading: "Installation constraints: bore ID, column pipe, and pulling safety",
        paragraphs: [
          "Mechanical fit to bore casing and safe pulling procedures matter for lifecycle maintenance. Document minimum casing clearance assumptions and lifting plans for field teams.",
          "For export projects, align packaging to pulling tackle available on site to avoid hidden commissioning costs."
        ]
      }
    ]
  },
  {
    title: "Industrial pump maintenance playbook for plants and utilities",
    slug: slugify("Industrial pump maintenance playbook"),
    categorySlug: "pump-maintenance",
    excerpt:
      "Expand maintenance strategy beyond periodic greasing: condition monitoring, electrical protection checks, alignment discipline, and spares rationalization for industrial pump fleets.",
    publishedAt: now,
    keywords: ["industrial pump maintenance", "pump reliability program", "pump vibration analysis", "plant water pump O&M"],
    content: [],
    sections: [
      {
        id: "inspection",
        heading: "Inspection routes that catch failures before trips",
        paragraphs: [
          "Build a route-based inspection program: bearing temperature trends, seal leakage patterns, vibration signatures, and discharge pressure stability versus setpoints. Industrial stations often trip intermittently before catastrophic failure; trending reveals early drift.",
          "Log electrical parameters as well: current imbalance, ground leakage trends, and drive fault codes for VFD systems."
        ]
      },
      {
        id: "alignment",
        heading: "Alignment, piping strain, and soft-foot elimination",
        paragraphs: [
          "Pipe strain is a common hidden cause of seal and bearing damage. Verify that piping flanges do not impose offset loads after final bolt-up. Soft-foot on motor bases distorts alignment readings and accelerates coupling wear.",
          "After maintenance, re-check alignment under hot-running conditions where applicable."
        ]
      },
      {
        id: "spares",
        heading: "Spares rationalization without compromising response time",
        paragraphs: [
          "Standardize impeller and seal kits where duty points allow. For critical trains, define minimum site inventory and maximum acceptable lead time for factory spares.",
          "For slurry and sewage duty, track wear part intervals empirically rather than guessing from generic manuals."
        ]
      }
    ]
  },
  {
    title: "Best pumps for factory applications: selection patterns that scale",
    slug: slugify("Best pumps for factory applications"),
    categorySlug: "industrial-solutions",
    excerpt:
      "Factory water systems span utility transfer, circulation, boosting, and process makeup. Here is how to classify applications and select pumps that scale across a site without spare-part chaos.",
    publishedAt: now,
    keywords: ["factory water pump", "industrial transfer pump", "booster pump factory", "process water pump India"],
    content: [],
    sections: [
      {
        id: "taxonomy",
        heading: "Taxonomy first: utility versus process versus emergency duty",
        paragraphs: [
          "Utility pumps often prioritize uptime and standardized O&M. Process pumps may prioritize materials compatibility and tight performance tolerance. Emergency pumps prioritize proof testing protocols and black-start assumptions. Mixing these classes under one generic specification creates mis-selection.",
          "Document each station’s consequence of failure: is downtime measured in minutes of lost production or in regulatory risk? That framing should influence redundancy and instrumentation choices."
        ]
      },
      {
        id: "boosting",
        heading: "Booster and circulation loops: control stability matters",
        paragraphs: [
          "Pressure boosting interacts with control valves, VFD ramps, and minimum flow bypass logic. Specify whether the pump is expected to ride a control curve or operate at discrete setpoints.",
          "For circulation duty, clarify temperature extremes and whether the fluid properties change seasonally."
        ]
      },
      {
        id: "standardization",
        heading: "Fleet standardization without forcing wrong hydraulics",
        paragraphs: [
          "Standardization reduces training and spares cost, but forcing one curve shape across mismatched duties increases energy waste and wear. A pragmatic approach is standardizing within hydraulic families while allowing two to three curve tiers across the plant.",
          "SUPERTECH WATER SOLUTION supports RFQs that include multi-station tables so recommendations remain fleet-aware."
        ]
      }
    ]
  },
  {
    title: "Energy efficient industrial pumps: where efficiency is won and lost",
    slug: slugify("Energy efficient industrial pumps"),
    categorySlug: "industrial-solutions",
    excerpt:
      "Efficiency is not only motor labeling: it is operating point discipline, system curve matching, VFD strategy, and maintenance state. This guide helps buyers avoid efficiency theater.",
    publishedAt: now,
    keywords: ["energy efficient pumps", "VFD pump savings", "industrial pump efficiency India", "pump BEP operation"],
    content: [],
    sections: [
      {
        id: "bep",
        heading: "Operating near BEP: system curves decide real savings",
        paragraphs: [
          "Pump efficiency marketing is often quoted at best efficiency point, but plants frequently operate away from BEP due to control margins, throttling practices, or seasonal demand shifts. Efficiency programs should start with a system curve review: valve throttling losses, unnecessary bypass flows, and oversized impeller trimming opportunities.",
          "Request suppliers to annotate expected operating region on the curve for each real case, not only the single BEP number."
        ]
      },
      {
        id: "vfd",
        heading: "VFDs: savings potential and new failure modes to manage",
        paragraphs: [
          "VFDs can save energy when demand varies, but they also introduce harmonics, bearing currents, and control complexity. Cable screens, drive filters, and earthing must be engineered as a system.",
          "Define minimum speed limits to avoid unstable regions or excessive temperature rise in motors not designed for extended low-speed operation."
        ]
      },
      {
        id: "maintenance-state",
        heading: "Maintenance state is an efficiency variable",
        paragraphs: [
          "Worn wear rings and damaged impellers move the operating point and increase power draw for the same apparent discharge performance. Efficiency audits should include mechanical wear assessments, not only electrical metering.",
          "Implement simple KPI tracking: kWh per cubic meter moved for transfer duties, tracked monthly."
        ]
      }
    ]
  }
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string) {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

