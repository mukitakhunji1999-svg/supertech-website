import type { Metadata } from "next";
import Link from "next/link";
import { blogCategories, blogPosts } from "@/lib/blog/posts";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog — Industrial Pump Guides, Solar Pumping, Export Insights",
  description:
    "Industrial knowledge hub by SUPERTECH WATER SOLUTION: pump guides, solar pumping, industrial solutions, maintenance, export procurement, and government tender insights."
};

export default function BlogIndexPage() {
  const latest = [...blogPosts].slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Industrial Knowledge for Procurement Teams"
        subtitle="Topic clusters for pump selection, solar pumping, industrial solutions, maintenance, export procurement, and government tender workflows."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-4">Categories</div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogCategories.map((c) => (
              <Link key={c.slug} href={`/blog/${c.slug}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
                    <CardTitle className="text-base">{c.name}</CardTitle>
                    <CardDescription>{c.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-1">Latest Articles</div>
              <h2 className="text-2xl font-black text-navy-700">Recent Industrial Guides</h2>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/rfq">Need RFQ Support?</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.categorySlug}/${p.slug}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
                    <div className="text-[11px] font-black tracking-widest text-primary-700 uppercase mb-1">{p.categorySlug.replace(/-/g," ")}</div>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
