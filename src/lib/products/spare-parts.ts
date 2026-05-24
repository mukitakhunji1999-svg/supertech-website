/**
 * Spare parts catalogue — a single category that lists individual replacement parts
 * for SUPERTECH pumps and motors (V3 / V4 / V6 / SP series). These are NOT full
 * product entries with their own `[slug]` detail pages — they are inventory items
 * displayed as a single image grid on `/products/spare-parts`.
 */
export type SparePartItem = {
  /** Stable identifier (kebab-case). Doubles as the image filename stem. */
  id: string;
  /** Display label shown under the image. */
  name: string;
  /** Optional short qualifier shown as a chip (series / family). */
  series?: "V3" | "V4" | "V6" | "SP" | "Universal";
  /** Optional one-line description shown on hover / detail card. */
  description?: string;
};

const IMG_DIR = "/images/spare-parts";

export const sparePartItems: SparePartItem[] = [
  // ── Bushes & bearings ──────────────────────────────────────────
  { id: "brass-bush",          name: "Brass Bush",                series: "Universal", description: "Precision-machined brass bush for shaft alignment and wear protection." },
  { id: "t-bush-brass",        name: "T-Bush (Brass)",            series: "Universal", description: "T-shaped brass guide bush for stage assemblies." },
  { id: "carbon-bush",         name: "Carbon Bush",                series: "Universal", description: "Self-lubricating carbon bush for low-friction shaft journals." },
  { id: "carbon-bearing",      name: "Carbon Bearing",             series: "Universal", description: "Carbon bearing for high-temperature, water-lubricated service." },
  { id: "pump-ss-rubber-bush", name: "Pump SS / Rubber Bush",      series: "Universal", description: "Stainless-steel-cased rubber bush — vibration damping & wear life." },
  { id: "sp46-rubber-bush",    name: "SP-46 Rubber Bush",          series: "SP",        description: "Rubber bush specific to SP-46 stage assemblies." },
  { id: "sp5-rubber-bush",     name: "SP-5 Rubber Bush",           series: "SP",        description: "Rubber bush specific to SP-5 stage assemblies." },

  // ── Impellers & diffusers ─────────────────────────────────────
  { id: "impellers",       name: "Impellers (Set)",      series: "Universal", description: "Closed-shroud submersible impellers — balanced and inspected." },
  { id: "impeller-front",  name: "Impeller (Front View)", series: "Universal", description: "Pump impeller — suction-side view." },
  { id: "impeller-back",   name: "Impeller (Back View)",  series: "Universal", description: "Pump impeller — discharge-side view." },
  { id: "diffuser",        name: "Diffuser",              series: "Universal", description: "Stage diffuser for stable head-rise and hydraulic efficiency." },

  // ── Couplings, collets & shaft hardware ───────────────────────
  { id: "coupling",          name: "Coupling",            series: "Universal", description: "Pump-to-motor coupling — keyed shaft engagement." },
  { id: "v4-coupling",       name: "V4 Coupling",          series: "V4",        description: "V4 series pump-to-motor coupling." },
  { id: "v6-to-v6-coupling", name: "V6 to V6 Coupling",    series: "V6",        description: "V6 inter-stage / motor coupling." },
  { id: "v6-to-v4-ip",       name: "V6-to-V4 Intermediate Piece", series: "V6", description: "Adapter intermediate piece — V6 pump on V4 motor stack." },
  { id: "v4-ip",             name: "V4 Intermediate Piece", series: "V4",        description: "V4 stage intermediate piece." },
  { id: "collet",            name: "Collet",                series: "Universal", description: "Shaft collet for impeller fixation." },
  { id: "locking-key",       name: "Locking Key",           series: "Universal", description: "Drive key for shaft-impeller torque transfer." },
  { id: "round-bar",         name: "Pump Shaft (Round Bar)", series: "Universal", description: "SS pump shaft stock — turned to spec." },
  { id: "nut",               name: "Pump Nut",              series: "Universal", description: "Lock nut for shaft / impeller stack." },

  // ── Bowls & housings (V series + SP series) ────────────────────
  { id: "v4-first-bowl",                 name: "V4 First Bowl",                 series: "V4",  description: "V4 first-stage bowl casting." },
  { id: "v4-upper-housing",              name: "V4 Upper Housing",              series: "V4",  description: "V4 pump upper housing." },
  { id: "v6-top-bowl",                   name: "V6 Top Bowl",                    series: "V6",  description: "V6 top-stage bowl casting." },
  { id: "v6-upper-housing",              name: "V6 Upper Housing",               series: "V6",  description: "V6 pump upper housing." },
  { id: "v6-lower-housing",              name: "V6 Lower Housing",               series: "V6",  description: "V6 pump lower housing." },
  { id: "v6-pressure-cup",               name: "V6 Pressure Cup",                series: "V6",  description: "V6 pressure cup for shaft-seal pressurisation." },
  { id: "sp5-bowl",                      name: "SP-5 Bowl",                       series: "SP",  description: "SP-5 stage bowl casting." },
  { id: "sp4-top-bowl-part-1",           name: "SP-4 Top Bowl (Part 1)",         series: "SP",  description: "SP-4 top bowl — upper half." },
  { id: "sp4-top-bowl-part-2",           name: "SP-4 Top Bowl (Part 2)",         series: "SP",  description: "SP-4 top bowl — lower half." },
  { id: "sp8-5-first-bowl-with-strainer", name: "SP-8/5 First Bowl with Strainer", series: "SP", description: "SP-8/5 first bowl assembly with integral strainer." },

  // ── Sealing, gaskets & flow components ────────────────────────
  { id: "mechanical-seal-oil-seal", name: "Mechanical Seal / Oil Seal", series: "Universal", description: "Mechanical face seal & oil seal kit for pump shaft." },
  { id: "sp5-gasket",               name: "SP-5 Gasket",                 series: "SP",        description: "Stage gasket for SP-5 bowl joints." },
  { id: "flanges",                  name: "Flanges",                     series: "Universal", description: "Discharge / suction flanges — drilled to standard PCDs." },
  { id: "v4-nrv",                   name: "V4 NRV (Non-Return Valve)",   series: "V4",        description: "Integral non-return valve for V4 pump discharge head." },
  { id: "strainer",                 name: "Strainer",                    series: "Universal", description: "Suction strainer for submersible pump inlet." },

  // ── Motor parts ───────────────────────────────────────────────
  { id: "winding-wire", name: "Motor Winding Wire", series: "Universal", description: "Submersible-grade enamelled copper winding wire for rewinding." }
];

/** All spare-part items mapped to public image URLs. */
export const sparePartImages = sparePartItems.map((p) => ({
  ...p,
  src: `${IMG_DIR}/${p.id}.png`,
  alt: `${p.name} — SUPERTECH spare part`
}));

/** Grouping helper for filter chips on the spare-parts page. */
export const sparePartSeriesGroups = ["All", "V3", "V4", "V6", "SP", "Universal"] as const;
export type SparePartSeriesFilter = (typeof sparePartSeriesGroups)[number];
