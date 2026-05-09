import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategories, blogPosts, getPost } from "@/lib/blog/posts";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p || p.categorySlug !== params.category) return {};
  return { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.categorySlug}/${p.slug}` } };
}

export default function BlogPostPage({ params }: { params: { category: string; slug: string } }) {
  const p = getPost(params.slug);
  const c = blogCategories.find((x) => x.slug === params.category);
  if (!p || !c || p.categorySlug !== c.slug) return notFound();

  const related = blogPosts.filter((x) => x.categorySlug === c.slug && x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={c.name}
        title={p.title}
        subtitle={p.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: c.name, href: `/blog/${c.slug}` },
          { label: p.title }
        ]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Keywords */}
            <div className="mb-8 flex flex-wrap gap-2">
              {p.keywords.slice(0, 8).map((k) => (
                <span key={k} className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  {k}
                </span>
              ))}
            </div>

            {/* Article */}
            <article className="space-y-4 text-sm leading-relaxed text-gray-600">
              {p.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <p className="rounded-xl border border-primary-100 bg-primary-50 px-5 py-4 text-gray-700 font-medium">
                Need selection support for your project? Share duty point, voltage, and destination country using the RFQ form.
              </p>
            </article>

            <div className="mt-8 flex gap-3">
              <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
              <Button asChild variant="outline"><Link href="/products">Explore Products</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-white">
          <div className="container py-12 md:py-16">
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Related</div>
            <h2 className="text-2xl font-black text-navy-700 md:text-3xl mb-7">More from {c.name}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.categorySlug}/${r.slug}`}>
                  <Card className="h-full hover:border-primary-300">
                    <CardHeader>
                      <CardTitle className="text-base">{r.title}</CardTitle>
                      <CardDescription>{r.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
