/**
 * Technical specification registry for SUPERTECH product detail pages.
 *
 * Each TechnicalSpec describes the rich data shown under a product's
 * "View more" page: construction (materials of construction), key operating
 * specifications, performance curves (head/discharge matrices), salient
 * features, applications, and a schematic drawing.
 *
 * Data is sourced from the SUPERTECH engineering catalogues and republished
 * here under the SUPERTECH WATER SOLUTION brand for procurement and
 * tender-style reference.
 */

export type SpecRowKV = { label: string; value: string };

/** A row in the materials-of-construction table. */
export type ConstructionRow = {
  component: string;
  material: string;
};

export type ConstructionSection = {
  /** "Motor details", "Pump details", etc. */
  title: string;
  rows: ConstructionRow[];
};

/**
 * One row in a performance chart — represents a single pump model variant
 * with stage count, motor rating, and discharge values at each head point.
 *
 * For a given series, all rows share the same `heads` array (head in meters).
 * The `discharge` array is the discharge in LPM at each corresponding head.
 */
export type PerformanceRow = {
  /** Model code (e.g. "VS:71H", "WO:2L / WW:2L") */
  model: string;
  stages?: number;
  kw?: number;
  hp?: number;
  /** Discharge in LPM at each head in the parent table's `heads` array. */
  discharge: Array<number | null>;
};

export type PerformanceTable = {
  /** "V4 OF & WF — 38 mm outlet, radial flow" */
  title: string;
  /** Short summary above the table */
  caption?: string;
  /** Outlet / port size, e.g. "38 mm" */
  outletSize?: string;
  /** "Radial" | "Mixed" */
  flowType?: "Radial" | "Mixed" | string;
  /** Heads in meters at which discharge is reported (column headers). */
  heads: number[];
  /** Each row = a model variant in this sub-series. */
  rows: PerformanceRow[];
  notes?: string[];
};

export type TechnicalSpec = {
  /** Stable identifier referenced by Product.technicalSpecKey. */
  key: string;
  /** Display title for the technical section. */
  title: string;
  /** Series-level short description. */
  summary: string;
  /** Top-level applications. */
  applications: string[];
  /** Bullet salient features. */
  salientFeatures: string[];
  /** General operating spec table (frequency, voltage, speed, etc.). */
  operatingSpecs: SpecRowKV[];
  /** Materials of construction, grouped by section. */
  construction: ConstructionSection[];
  /** Performance curves / charts (head vs discharge). */
  performance: PerformanceTable[];
  /** Path to a drawing/schematic asset under /public. */
  drawingSrc?: string;
  drawingAlt?: string;
  /** Free-form footnote(s) — e.g. "Single phase available up to 3 HP". */
  footnotes?: string[];
};

// ─── Series registry ──────────────────────────────────────────────────────────

import { v4BorewellSubmersible } from "./series/v4-borewell";
import { v3BorewellSubmersible } from "./series/v3-borewell";

export const technicalSpecs: Record<string, TechnicalSpec> = {
  [v4BorewellSubmersible.key]: v4BorewellSubmersible,
  [v3BorewellSubmersible.key]: v3BorewellSubmersible
};

export function getTechnicalSpec(key: string): TechnicalSpec | undefined {
  return technicalSpecs[key];
}
