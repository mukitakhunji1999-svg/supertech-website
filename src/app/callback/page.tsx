import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Request a Callback — Sales & Export Team",
  description:
    "Request a phone callback from SUPERTECH WATER SOLUTION for industrial pumps, solar pumping, valves, panels, and export inquiries across India, GCC, and Africa.",
  path: "/callback",
  keywords: ["pump supplier callback", "industrial pump inquiry India", "export sales callback"]
});

export default function CallbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales"
        title="Request a callback"
        subtitle="Share your phone number, country, and a short requirement summary. Our team will call back during business hours for RFQ alignment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Callback" }]}
      />
      <section className="section-gray">
        <div className="container max-w-2xl py-14 md:py-20">
          <LeadForm
            type="callback"
            title="Callback request"
            subtitle="Best for time-sensitive tenders and export dispatch questions."
            defaultMessage="Callback request:\n- Product / application:\n- Preferred time window:\n- Country / city:\n"
          />
        </div>
      </section>
    </>
  );
}
