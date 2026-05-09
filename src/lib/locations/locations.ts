export type LocationLanding = {
  slug: string;
  name: string;
  region: string;
  country: string;
  focusKeywords: string[];
  heroLine: string;
};

export const locations: LocationLanding[] = [
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    focusKeywords: ["borewell pump manufacturer in Ahmedabad", "submersible pump supplier Ahmedabad", "solar pump supplier Ahmedabad"],
    heroLine: "Industrial pump manufacturing base in Ahmedabad — selection support, documentation, and dispatch ready."
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    region: "Gujarat",
    country: "India",
    focusKeywords: ["submersible pump manufacturer Gujarat", "borewell pump supplier Gujarat", "industrial pump supplier Gujarat"],
    heroLine: "Premium pump manufacturing and supply across Gujarat with EPC-ready documentation."
  },
  {
    slug: "india",
    name: "India",
    region: "India",
    country: "India",
    focusKeywords: ["submersible pump manufacturer india", "solar pump manufacturer india", "industrial pump supplier india"],
    heroLine: "Pan-India manufacturing, procurement support, and export coordination for global buyers."
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "Dubai",
    country: "UAE",
    focusKeywords: ["pump supplier in Dubai", "solar pump supplier Dubai", "industrial pump supplier Dubai"],
    heroLine: "GCC-ready pump supply for Dubai: export documentation, fast RFQ support, and project-focused selection."
  },
  {
    slug: "uae",
    name: "UAE",
    region: "United Arab Emirates",
    country: "UAE",
    focusKeywords: ["pump supplier in UAE", "submersible pump supplier in UAE", "pump exporter from india to UAE"],
    heroLine: "Export-grade pump supply for UAE projects — built for infrastructure, utilities, and agriculture."
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Saudi Arabia",
    country: "Saudi Arabia",
    focusKeywords: ["pump supplier in Saudi Arabia", "submersible pump supplier Saudi Arabia", "dewatering pump supplier Saudi Arabia"],
    heroLine: "Premium export supply for Saudi Arabia — selection support and industrial documentation."
  },
  {
    slug: "qatar",
    name: "Qatar",
    region: "Qatar",
    country: "Qatar",
    focusKeywords: ["pump supplier in Qatar", "industrial pump supplier Qatar", "solar pumping solutions Qatar"],
    heroLine: "Export-ready pump and solar pumping solutions for Qatar — EPC friendly submissions."
  },
  {
    slug: "oman",
    name: "Oman",
    region: "Oman",
    country: "Oman",
    focusKeywords: ["pump supplier in Oman", "borewell pump exporter Oman", "solar pump supplier Oman"],
    heroLine: "Reliable industrial and agricultural pumping supply for Oman — built for long duty cycles."
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    region: "Kuwait",
    country: "Kuwait",
    focusKeywords: ["pump supplier in Kuwait", "industrial pump supplier Kuwait", "submersible pump supplier Kuwait"],
    heroLine: "Premium supply and export coordination for Kuwait projects — fast RFQ support."
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    region: "Bahrain",
    country: "Bahrain",
    focusKeywords: ["pump supplier in Bahrain", "industrial pump exporter Bahrain", "solar pump supplier Bahrain"],
    heroLine: "Project-ready export supply for Bahrain — documentation-first approach for B2B procurement."
  }
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

