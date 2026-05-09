export type IndustrialFaq = { question: string; answer: string };

export type IndustrialSection = {
  h2: string;
  /** Multiple paragraphs for depth (SEO + readability). */
  paragraphs: string[];
};

export type IndustrialPageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: IndustrialSection[];
  faqs: IndustrialFaq[];
  applications: string[];
  internalLinks: { href: string; label: string }[];
};
