import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";
import { RevealSection } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.73499688245!2d72.41493165!3d23.02049765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba2bd573%3A0x70c697f30f73d5cb!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735123456789!5m2!1sen!2sin";

export function HomeContactTeaser() {
  const wa = `https://wa.me/${siteConfig.social.whatsapp}`;

  return (
    <RevealSection id="contact" className="section-tint scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">Contact</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Engineering desk · Export inquiry · Government supply
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass-panel rounded-[22px] p-6 md:p-8">
            <LeadForm
              type="contact"
              title="Inquiry form"
              subtitle="Duty point, standards, delivery country — our engineering desk responds with selection context."
              defaultMessage="Requirement:\n- Application:\n- Flow / head:\n- Voltage / phase:\n- Destination:\n"
            />
          </div>

          <div className="glass-panel flex flex-col rounded-[22px] p-6 md:p-8">
            <h3 className="font-display text-lg font-bold text-navy-700">{siteConfig.name}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-gray-600">
              Manufacturer · Industrial pump supplier · Exporter · Government supplier · Industrial water engineering
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <strong className="text-navy-700">Phone:</strong>{" "}
                {siteConfig.contact.phones.map((p, i) => (
                  <span key={p}>
                    {i > 0 ? " · " : null}
                    <Link href={`tel:${p.replace(/\D/g, "")}`} className="font-medium text-primary-700 hover:underline">
                      {p}
                    </Link>
                  </span>
                ))}
              </p>
              <p>
                <strong className="text-navy-700">Email:</strong>{" "}
                <Link href={`mailto:${siteConfig.contact.email}`} className="font-medium text-primary-700 hover:underline">
                  {siteConfig.contact.email}
                </Link>
              </p>
              <p>
                <strong className="text-navy-700">Location:</strong> {siteConfig.contact.location}
              </p>
              <p>
                <strong className="text-navy-700">GST:</strong> 24AFMFS2359P1Z9
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild className="font-display">
                <Link href={`tel:${siteConfig.contact.phones[0]?.replace(/\D/g, "") ?? ""}`}>Call now</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-300 font-display">
                <Link href={`mailto:${siteConfig.contact.email}`}>Email export desk</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-300 font-display">
                <Link href={wa} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[22px] border border-primary-700/10 shadow-card [height:360px]">
          <iframe
            title="SUPERTECH WATER SOLUTION location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            className="h-full w-full border-0 grayscale-[20%] contrast-[1.02]"
          />
        </div>
      </div>
    </RevealSection>
  );
}
