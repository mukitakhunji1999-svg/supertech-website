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

/**
 * Masco-style at-a-glance characteristics table.
 * Each entry may have a primary value plus an optional secondary value
 * (e.g. HP + kW, or mm + inch).
 */
export type CharacteristicsRow = {
  /** Grouping label, e.g. "Motor Rating", "Outlet" */
  label: string;
  /** Unit + value pairs to display. */
  units: Array<{ unit: string; value: string }>;
};

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

export type TechnicalSpecFamily =
  | "Pumps"
  | "Motors"
  | "Solar"
  | "Pipes & Cables"
  | "Valves"
  | "Panels";

export type TechnicalSpec = {
  /** Stable identifier referenced by Product.technicalSpecKey. */
  key: string;
  /** Display title for the technical section. */
  title: string;
  /** Short label for navigation sidebars ("Our products"). */
  shortLabel?: string;
  /** Optional product detail route. */
  productPath?: string;
  /** Family used to group products in the sidebar. */
  family?: TechnicalSpecFamily;
  /** Series-level short description. */
  summary: string;
  /** At-a-glance Masco-style characteristics table (HP/KW/Stage/Head/Discharge/Outlet/RPM/Freq/Application). */
  characteristics: CharacteristicsRow[];
  /** Top-level applications. */
  applications: string[];
  /** Bullet salient features. */
  salientFeatures: string[];
  /** General operating spec table (frequency, voltage, speed, etc.). Optional. */
  operatingSpecs?: SpecRowKV[];
  /** Materials of construction, grouped by section (Motor / Pump). */
  construction: ConstructionSection[];
  /** Performance curves / charts (head vs discharge). Optional. */
  performance?: PerformanceTable[];
  /** Path to a drawing/schematic asset under /public. */
  drawingSrc?: string;
  drawingAlt?: string;
  /**
   * Optional catalogue pages (cross-sections, exploded views, performance tables
   * extracted from PDF catalogues). Rendered as a gallery below the main drawing.
   */
  catalogueDrawings?: Array<{
    src: string;
    alt: string;
    /** Short label shown beneath the thumbnail, e.g. "4'' WL cross-section" */
    label: string;
  }>;
  /** Free-form footnote(s). */
  footnotes?: string[];
};

// ─── Series registry ──────────────────────────────────────────────────────────

import { v4BorewellSubmersible } from "./series/v4-borewell";
import { v3BorewellSubmersible } from "./series/v3-borewell";
import { v5BorewellSubmersible } from "./series/v5-borewell";
import { v6BorewellSubmersible } from "./series/v6-borewell";
import { v8BorewellSubmersible } from "./series/v8-borewell";
import { openwellSubmersible } from "./series/openwell-submersible";
import { centrifugalMonoblock } from "./series/centrifugal-monoblock";
import { miniMonoblockPump } from "./series/mini-monoblock";
import { selfPrimingPump } from "./series/self-priming";
import { endSuctionCentrifugal } from "./series/end-suction-centrifugal";
import { pressureBoosterPump } from "./series/pressure-booster";
import { horizontalSplitCasePump } from "./series/horizontal-pump";
import { verticalInlinePump } from "./series/vertical-pump";
import { sewageSubmersiblePump } from "./series/sewage-pump";
import { dewateringSubmersiblePump } from "./series/dewatering-pump";
import { stainlessSteelPump } from "./series/stainless-steel-pump";

import { inductionMotor } from "./series/induction-motor";
import { waterFilledSubmersibleMotor } from "./series/water-filled-motor";
import { oilFilledSubmersibleMotor } from "./series/oil-filled-motor";
import { singlePhaseMotor } from "./series/single-phase-motor";

import { solarPumpingSystem } from "./series/solar-pumping-system";
import { solarController } from "./series/solar-controller";
import { solarPVModule } from "./series/solar-pv-module";
import { solarStructure } from "./series/solar-structure";
import { solarCable } from "./series/solar-cable";

import { upvcColumnPipe } from "./series/upvc-column-pipe";
import { submersibleFlatCable } from "./series/submersible-flat-cable";
import { pvcInsulatedCable } from "./series/pvc-insulated-cable";
import { industrialCable } from "./series/industrial-cable";

import { butterflyValve } from "./series/butterfly-valve";
import { nrvValve } from "./series/nrv-valve";
import { gateValve } from "./series/gate-valve";
import { ballValve } from "./series/ball-valve";

import { controlPanel } from "./series/control-panel";
import { starterPanel } from "./series/starter-panel";
import { automationPanel } from "./series/automation-panel";
import { vfdPanel } from "./series/vfd-panel";
import { pumpController } from "./series/pump-controller";

/** Ordered list for nav sidebars ("Our products"), grouped by family. */
export const technicalSpecsList: TechnicalSpec[] = [
  // Pumps
  v3BorewellSubmersible,
  v4BorewellSubmersible,
  v5BorewellSubmersible,
  v6BorewellSubmersible,
  v8BorewellSubmersible,
  openwellSubmersible,
  stainlessSteelPump,
  centrifugalMonoblock,
  miniMonoblockPump,
  endSuctionCentrifugal,
  selfPrimingPump,
  pressureBoosterPump,
  horizontalSplitCasePump,
  verticalInlinePump,
  sewageSubmersiblePump,
  dewateringSubmersiblePump,

  // Motors
  waterFilledSubmersibleMotor,
  oilFilledSubmersibleMotor,
  inductionMotor,
  singlePhaseMotor,

  // Solar
  solarPumpingSystem,
  solarController,
  solarPVModule,
  solarStructure,
  solarCable,

  // Pipes & Cables
  upvcColumnPipe,
  submersibleFlatCable,
  pvcInsulatedCable,
  industrialCable,

  // Valves
  butterflyValve,
  nrvValve,
  gateValve,
  ballValve,

  // Panels
  controlPanel,
  starterPanel,
  automationPanel,
  vfdPanel,
  pumpController
];

export const technicalSpecs: Record<string, TechnicalSpec> = Object.fromEntries(
  technicalSpecsList.map((s) => [s.key, s])
);

export function getTechnicalSpec(key: string): TechnicalSpec | undefined {
  return technicalSpecs[key];
}
