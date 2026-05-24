export const siteConfig = {
  name: "SUPERTECH WATER SOLUTION",
  legalName: "SUPERTECH WATER SOLUTION",
  brandLine: "SUPERTECH KAIZEN",
  /** Brand mark — file at repository root and copied to `public/logo.png` for Next.js */
  logoPath: "/logo.png" as const,
  url: "https://www.supertechwatersolution.com",
  description:
    "SUPERTECH WATER SOLUTION is a premium industrial manufacturer and exporter of pumps, motors, solar pumping solutions, valves, pipes, cables, panels, and pump accessories for India, Middle East, and Africa markets.",
  contact: {
    /** All public-facing email addresses, primary first. */
    emails: ["info@supertechwatersolution.com", "supertechwatersolution@gmail.com"],
    /** Primary email — kept as a convenience alias for backwards-compatible call sites
     *  (lead-routing API, schema.org metadata, etc.). Always equals `emails[0]`. */
    email: "info@supertechwatersolution.com",
    phones: ["+91-7573979525", "+91-9726724897"],
    location: "Ahmedabad, Gujarat, India"
  },
  markets: ["India", "UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Africa"],
  social: {
    whatsapp: "+917573979525"
  }
} as const;

