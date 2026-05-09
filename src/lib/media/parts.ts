export type PartImage = {
  src: string;
  alt: string;
  tag: string;
};

// Images sourced from local "parts images" folder and copied into /public/images/parts
export const partImages: PartImage[] = [
  { src: "/images/parts/IMG20250828132148.png", alt: "Pump spare parts assortment", tag: "Spare Parts" },
  { src: "/images/parts/IMG20250828132213.png", alt: "Pump impeller spare part", tag: "Impellers" },
  { src: "/images/parts/IMG20250828132235.png", alt: "Pump diffuser spare part", tag: "Diffusers" },
  { src: "/images/parts/IMG20250828132249.png", alt: "Pump shaft spare part", tag: "Pump Shafts" },
  { src: "/images/parts/IMG20250828132301.png", alt: "Pump bush spare part", tag: "Pump Bushes" },
  { src: "/images/parts/IMG20250828132318.png", alt: "Pump accessories components", tag: "Accessories" },
  { src: "/images/parts/IMG20250828132332.png", alt: "Submersible cable joint kit", tag: "Cable Joints" },
  { src: "/images/parts/IMG20250828140323.png", alt: "Industrial pump spare parts", tag: "Service Parts" }
];

