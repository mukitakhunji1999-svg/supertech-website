/**
 * Homepage hero slides — assets in `public/images/hero/`.
 * Replace the image files (same names) to swap a slide without touching code.
 */
export type HeroSlideHref =
  | "/products"
  | "/products/submersible-pumps"
  | "/products/butterfly-valves"
  | "/products/control-panels"
  | "/products/solar-pumping-systems"
  | "/resources"
  | "/#export"
  | "/contact"
  | "/about"
  | "/#industries"
  | "/#technical";

export type HeroSlideConfig = {
  id: number;
  tag: string;
  title: string;
  sub: string;
  imageSrc: string;
  imageAlt: string;
  /** `contain` keeps the whole product visible; `cover` fills the panel (use for landscape photos) */
  imageFit: "contain" | "cover";
  /** CSS object-position when `imageFit === "cover"` */
  imagePosition?: string;
  /** Tailwind aspect-ratio class for the visual frame — tune per image so nothing is cropped */
  aspectClass: string;
  /** Soft glow color behind the product card */
  accent: "blue" | "cyan" | "amber" | "green";
  primary: { label: string; href: HeroSlideHref };
  secondary: { label: string; href: HeroSlideHref };
};

export const heroSlides: HeroSlideConfig[] = [
  {
    id: 1,
    tag: "Pumps · Motors · Industrial",
    title: "Industrial Pump Solutions",
    sub:
      "Submersible, borewell, openwell and monoblock pump sets — hydraulic selection and export-ready documentation for agriculture, industry and infrastructure.",
    imageSrc: "/images/hero/submersible-pumpset.png",
    imageAlt: "SUPERTECH submersible and industrial pump range",
    imageFit: "contain",
    aspectClass: "aspect-[3/2]",
    accent: "blue",
    primary: { label: "Explore products", href: "/products" },
    secondary: { label: "Request quotation", href: "/contact" }
  },
  {
    id: 2,
    tag: "Valves · Pipelines · Flow control",
    title: "Industrial Valves & Distribution",
    sub:
      "Ball, butterfly, gate and NRV valves for pumping stations, pipelines and process lines — reliable shut-off and throttling for your system.",
    imageSrc: "/images/hero/industrial-valves.jpg",
    imageAlt: "Industrial ball, butterfly and gate valves",
    imageFit: "contain",
    aspectClass: "aspect-[15/4]",
    accent: "cyan",
    primary: { label: "Browse valves", href: "/products/butterfly-valves" },
    secondary: { label: "Valve enquiry", href: "/contact" }
  },
  {
    id: 3,
    tag: "Electrical · Motor control · Panels",
    title: "Pump Control & Starter Panels",
    sub:
      "MCC, starter, VFD and automation panels — motor protection, smooth starting and site-ready wiring for borewell and industrial pump installations.",
    imageSrc: "/images/hero/control-panel.webp",
    imageAlt: "Motor control and pump starter panels",
    imageFit: "contain",
    aspectClass: "aspect-[4/3]",
    accent: "blue",
    primary: { label: "Panel solutions", href: "/products/control-panels" },
    secondary: { label: "Panel specification", href: "/contact" }
  },
  {
    id: 4,
    tag: "Solar · Irrigation · Off-grid",
    title: "Solar Pumping & PV Systems",
    sub:
      "Solar pump sets, controllers and PV modules for borewells, farms and remote sites — dependable daytime pumping with lower running cost.",
    imageSrc: "/images/hero/solar-pumping.jpg",
    imageAlt: "Solar panels and solar water pumping systems",
    imageFit: "cover",
    imagePosition: "center",
    aspectClass: "aspect-[16/10]",
    accent: "amber",
    primary: { label: "Solar pumping line", href: "/products/solar-pumping-systems" },
    secondary: { label: "Solar project quote", href: "/contact" }
  }
];
