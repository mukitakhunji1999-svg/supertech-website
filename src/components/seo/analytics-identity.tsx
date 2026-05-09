import Script from "next/script";
import { organizationSchema } from "@/lib/seo/schema";

export function AnalyticsIdentity() {
  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
    </>
  );
}

