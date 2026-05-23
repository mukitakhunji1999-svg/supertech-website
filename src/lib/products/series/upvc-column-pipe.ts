import type { TechnicalSpec } from "../technical-specs";

export const upvcColumnPipe: TechnicalSpec = {
  key: "upvc-column-pipe",
  title: "uPVC Column Pipe (Borewell)",
  shortLabel: "uPVC Column Pipe",
  productPath: "/products/upvc-column-pipes/upvc-column-pipe",
  family: "Pipes & Cables",
  summary:
    "High-strength uPVC column pipe engineered for borewell submersible pump installations. Threaded sockets with EPDM O-ring sealing — leak-proof, corrosion-free, and 5–7× lighter than GI column pipes. Conforms to IS 12818.",
  characteristics: [
    {
      label: "Size range",
      units: [
        { unit: "mm", value: "32 / 40 / 50 / 65 / 80 / 100 / 125 / 150" },
        { unit: "inch", value: "1¼ / 1½ / 2 / 2½ / 3 / 4 / 5 / 6" }
      ]
    },
    { label: "Pressure rating", units: [{ unit: "Class", value: "1 (1.0 MPa) / 2 (1.5 MPa) / 3 (2.0 MPa) / 4 (2.5 MPa)" }] },
    { label: "Pipe length", units: [{ unit: "Metres", value: "3.0 (1¼\"–6\") — standard" }] },
    { label: "Joint type", units: [{ unit: "—", value: "Threaded socket–spigot with EPDM O-ring" }] },
    { label: "Material", units: [{ unit: "—", value: "uPVC — unplasticised polyvinyl chloride" }] },
    { label: "Standard", units: [{ unit: "—", value: "IS 12818, BS 6920 (potable water)" }] },
    { label: "Service life", units: [{ unit: "Years", value: "25+ in normal borewell conditions" }] },
    { label: "Operating temperature", units: [{ unit: "°C", value: "5 to 45" }] },
    {
      label: "Applications",
      units: [
        { unit: "Use", value: "Borewell submersible pump column, Domestic & agriculture borewells, OEM" }
      ]
    }
  ],
  applications: [
    "Borewell submersible pump column for V3 / V4 / V5 / V6 / V8 pumps",
    "Domestic borewell installations",
    "Agricultural borewell installations",
    "Municipal water supply borewells",
    "OEM pumpset assembly with integrated column",
    "Replacement of corroded GI column pipes"
  ],
  salientFeatures: [
    "5–7× lighter than equivalent GI column pipe — easy installation",
    "Corrosion-proof — no rust, scale, or pitting over service life",
    "Threaded socket–spigot joint with EPDM O-ring — leak-proof",
    "High tensile strength — designed for full submersible pump weight",
    "Smooth bore — low friction loss, energy savings on pump head",
    "No deposit build-up — sustained pump efficiency over years",
    "Suitable for potable water (BS 6920 compliant)",
    "UV-stabilised exterior printing for asset traceability",
    "Available in pressure classes 1 / 2 / 3 / 4 (per duty depth)",
    "Conforms to IS 12818"
  ],
  construction: [
    {
      title: "Pipe construction",
      rows: [
        { component: "Material", material: "uPVC (unplasticised PVC, K-67 grade resin)" },
        { component: "Wall thickness", material: "Per IS 12818 class — increases with depth/pressure" },
        { component: "Bore", material: "Smooth machined ID for low friction loss" },
        { component: "Socket", material: "Integrally moulded threaded socket" },
        { component: "Spigot", material: "Machined threaded spigot end" },
        { component: "Marking", material: "UV-stable printed: brand, size, class, lot, IS standard" }
      ]
    },
    {
      title: "Joint & accessories",
      rows: [
        { component: "O-ring", material: "EPDM rubber, food-grade for potable water" },
        { component: "Coupler / reducer", material: "uPVC moulded, matching pressure class" },
        { component: "Top adaptor", material: "uPVC × GI threaded, EPDM seal" },
        { component: "Bottom plug", material: "uPVC threaded, with EPDM seal" },
        { component: "Pipe wrench", material: "Strap wrench (supplied as accessory)" }
      ]
    }
  ],
  drawingSrc: "/images/drawings/upvc-column-pipe.svg",
  drawingAlt: "uPVC column pipe — socket–spigot joint detail",
  footnotes: [
    "Select pressure class per pump setting depth: Class 1 ≤ 100 m, Class 2 ≤ 150 m, Class 3 ≤ 200 m, Class 4 ≤ 250 m.",
    "Tighten threaded joints by hand + 1 full turn with strap wrench; do not over-tighten."
  ]
};
