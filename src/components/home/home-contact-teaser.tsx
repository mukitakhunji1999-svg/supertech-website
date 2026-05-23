import Link from "next/link";
import { Download, FileText, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";
import { siteConfig } from "@/lib/site-config";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.73499688245!2d72.41493165!3d23.02049765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba2bd573%3A0x70c697f30f73d5cb!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735123456789!5m2!1sen!2sin";

export function HomeContactTeaser() {
  const wa = `https://wa.me/${siteConfig.social.whatsapp}`;
  const firstPhone = siteConfig.contact.phones[0]?.replace(/\D/g, "") ?? "";

  return (
    <RevealSection id="contact" className="section-padded scroll-mt-24 bg-slate-50/50">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Engineering desk · Export inquiry · Government supply"
          lede="Tell us your duty point, standards and destination. Our team responds with selection notes and ready-to-quote pricing."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="card-soft p-6 md:p-8">
            <LeadForm
              type="contact"
              title="Inquiry form"
              subtitle="Duty point, standards, delivery country — our engineering desk responds with selection context."
              defaultMessage="Requirement:\n- Application:\n- Flow / head:\n- Voltage / phase:\n- Destination:\n"
            />
          </div>

          <div className="space-y-6">
            <div className="card-soft p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-navy-700">
                {siteConfig.name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-800">
                Manufacturer · Industrial pump supplier · Exporter · Government supplier
              </p>

              <ul className="mt-5 space-y-3 text-sm">
                {siteConfig.contact.phones.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-800">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <Link
                      href={`tel:${p.replace(/\D/g, "")}`}
                      className="font-medium text-navy-700 transition-colors hover:text-navy-800"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-800">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-navy-700 transition-colors hover:text-navy-800"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-800">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium text-navy-700">{siteConfig.contact.location}</span>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <Link
                  href="/#quote"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Get quote
                </Link>
                <Link
                  href={`tel:${firstPhone}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-700 px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call now
                </Link>
                <Link
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 font-display text-sm font-semibold text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </Link>
                <Link
                  href="/resources/brochures"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5" />
                  Catalog
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 [height:280px]">
              <iframe
                title="SUPERTECH WATER SOLUTION location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                className="h-full w-full border-0 grayscale-[40%]"
              />
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
