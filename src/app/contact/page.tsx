import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us — Pump Inquiry & Export Sales",
  description:
    "Contact SUPERTECH WATER SOLUTION for industrial pumps, motors, solar pumping solutions, export inquiries for India, Middle East and Africa."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to Our Sales & Export Team"
        subtitle="Share your duty point, application, voltage, and destination country to receive selection support and an export-ready quotation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-gray">
        <div className="container py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Get in Touch</div>
              <h2 className="text-2xl font-black text-navy-700 mb-6">We Respond Fast to Genuine Inquiries</h2>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: siteConfig.contact.location },
                  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                  ...siteConfig.contact.phones.map((p) => ({ icon: Phone, label: "Phone / WhatsApp", value: p, href: `tel:${p}` }))
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-card">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <item.icon className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-navy-700 hover:text-primary-700 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-navy-700">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-5">
                <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Export Markets</div>
                <div className="text-sm text-gray-600">India • UAE • Saudi Arabia • Qatar • Oman • Kuwait • Bahrain • Africa</div>
              </div>
            </div>

            <LeadForm
              type="contact"
              title="Send an Inquiry"
              subtitle="For projects, government supply, EPC procurement and exports."
              defaultMessage="Please share: product category, duty point (flow & head), voltage/phase, installation depth (if any), and destination country."
            />
          </div>
        </div>
      </section>
    </>
  );
}
