# SUPERTECH WATER SOLUTION — Premium Industrial Website

Production-ready industrial website for **SUPERTECH WATER SOLUTION** built for:

- **SEO domination** (programmatic category/product/location/blog pages)
- **B2B lead conversion** (RFQ + tender + distributor + brochure inquiry flows)
- **Export markets** (India, GCC, Africa)

## Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS**
- **Framer Motion + GSAP** (premium motion / cinematic hero)
- **shadcn-style UI primitives** (Radix + CVA)
- **Dynamic SEO**: metadata, JSON-LD schemas, dynamic sitemap, robots

## Key SEO architecture

- **Products**
  - `/products` (mega hub)
  - `/products/[category]` (category hub pages)
  - `/products/[category]/[slug]` (product detail pages with 1500+ word technical content generated server-side)
- **Locations**
  - `/locations` and `/locations/[slug]` (GEO landing pages)
- **Blog**
  - `/blog`, `/blog/[category]`, `/blog/[category]/[slug]` (topic clusters)
- **Resources**
  - `/resources/brochures` (brochure downloads)
  - `/resources/datasheets`

## Lead generation

- **API**: `POST /api/leads` (stores to `data/leads.ndjson`, optional SMTP email)
- **Forms**: RFQ, contact, distributor inquiry, tender inquiry, brochure request

### Email setup (optional)

Create `.env.local`:

```bash
SMTP_HOST="smtp.yourprovider.com"
SMTP_PORT="587"
SMTP_USER="your-user"
SMTP_PASS="your-pass"
LEAD_EMAIL_TO="supertechwatersolution@gmail.com"
```

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Brochures / PDFs

- Put source PDFs in `assets/brochures/` (source-of-truth storage)
- Put public downloadable PDFs in `public/brochures/`
- Map brochure file paths in `src/lib/resources/brochures.ts`

## Notes

- Branding rules enforced: **ONLY SUPERTECH WATER SOLUTION / SUPERTECH KAIZEN**.
- No other brand names are referenced in the site.

