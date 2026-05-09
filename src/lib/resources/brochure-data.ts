/**
 * Parsed brochure-derived model data (sanitized for SUPERTECH branding).
 *
 * IMPORTANT: Do not include any third-party brand names in UI/content.
 * The raw PDF filenames may contain legacy names, but UI must not.
 */

export type SeriesSpecPoint = {
  model: string;
  stages?: number;
  hp?: number;
  kw?: number;
  flowLpm?: number;
  speedRpm?: number;
  notes?: string;
};

export type BrochureSeries = {
  key: string;
  title: string;
  summary: string;
  points: SeriesSpecPoint[];
  commonSpecs: Array<{ label: string; value: string }>;
};

// Stainless steel submersible pump series (60Hz brochure extracted text showed model table).
export const ssSubmersibleSeries: BrochureSeries = {
  key: "ss-submersible-60hz-10vp-162",
  title: "Stainless Steel Submersible Pump Series (60 Hz)",
  summary:
    "Stainless steel submersible pump family engineered for export projects requiring corrosion resistance, stable performance, and procurement-ready documentation.",
  commonSpecs: [
    { label: "Construction", value: "Stainless steel construction options (export-grade)" },
    { label: "Frequency", value: "60 Hz" },
    { label: "Speed reference", value: "n = 3450 rpm (as per brochure reference curve)" },
    { label: "Applications", value: "Agriculture • utilities • industrial water transfer • export projects" }
  ],
  points: [
    // Extracted from the brochure model table visible in the PDF text (page area around 'Model Name HP kW L/min ...').
    // Where exact kW/LPM columns were not reliably parsed from the text extraction, we keep model + stage and treat as series variant.
    { model: "10VP-162/1-A", stages: 1, speedRpm: 3450 },
    { model: "10VP-162/1", stages: 1, speedRpm: 3450 },
    { model: "10VP-162/2-AA", stages: 2, speedRpm: 3450 },
    { model: "10VP-162/2-A", stages: 2, speedRpm: 3450 },
    { model: "10VP-162/2", stages: 2, speedRpm: 3450 },
    { model: "10VP-162/3-AA", stages: 3, speedRpm: 3450 },
    { model: "10VP-162/3-A", stages: 3, speedRpm: 3450 },
    { model: "10VP-162/3", stages: 3, speedRpm: 3450 },
    { model: "10VP-162/4-AA", stages: 4, speedRpm: 3450 },
    { model: "10VP-162/4-A", stages: 4, speedRpm: 3450 },
    { model: "10VP-162/4", stages: 4, speedRpm: 3450 },
    { model: "10VP-162/5-AA", stages: 5, speedRpm: 3450 },
    { model: "10VP-162/5-A", stages: 5, speedRpm: 3450 },
    { model: "10VP-162/5", stages: 5, speedRpm: 3450 },
    { model: "10VP-162/6", stages: 6, speedRpm: 3450 },
    { model: "10VP-162/7", stages: 7, speedRpm: 3450 },
    { model: "10VP-162/8", stages: 8, speedRpm: 3450 },
    { model: "10VP-162/9", stages: 9, speedRpm: 3450 },
    { model: "10VP-162/10", stages: 10, speedRpm: 3450 }
  ]
};

// Submersible motor catalogue (50/60 Hz) extracted text includes materials list and example electrical/mechanical ranges.
export const submersibleMotorSeries: BrochureSeries = {
  key: "submersible-motors-50-60hz-ci",
  title: "Submersible Motor Series (50/60 Hz)",
  summary:
    "Submersible motor range designed for stable thermal performance and long-life duty cycles with export-ready material specification and documentation support.",
  commonSpecs: [
    { label: "Frequency", value: "50 Hz / 60 Hz" },
    { label: "Voltage", value: "380 / 400 / 415 V (common), 460 V (as per brochure references)" },
    { label: "Typical speed", value: "≈2900 rpm (50 Hz) • ≈3500 rpm (60 Hz) (as per brochure references)" },
    { label: "Materials (examples)", value: "Cast iron FG-200 housings, stainless steel hardware, ceramic/carbon mechanical seal (as per brochure BOM pages)" }
  ],
  points: [
    // Power points were present but not consistently mapped to distinct model IDs in text extraction;
    // include representative procurement points for SEO + RFQ readiness.
    { model: "Submersible Motor 30 kW", kw: 30, notes: "Representative rating from extracted table segments." },
    { model: "Submersible Motor 37 kW", kw: 37, notes: "Representative rating from extracted table segments." },
    { model: "Submersible Motor 45 kW", kw: 45, notes: "Representative rating from extracted table segments." },
    { model: "Submersible Motor 55 kW", kw: 55, notes: "Representative rating from extracted table segments." },
    { model: "Submersible Motor 75 kW", kw: 75, notes: "Representative rating from extracted table segments." },
    { model: "Submersible Motor 100 kW", kw: 100, notes: "Representative rating from extracted table segments." }
  ]
};

