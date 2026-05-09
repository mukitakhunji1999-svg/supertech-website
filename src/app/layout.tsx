import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { AnalyticsIdentity } from "@/components/seo/analytics-identity";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Industrial Pump Engineering & Export`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#0f6cbd",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-dvh bg-primary-50 font-sans text-navy-700 antialiased">
        <JsonLd id="ld-organization" data={organizationSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
        <AnalyticsIdentity />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
