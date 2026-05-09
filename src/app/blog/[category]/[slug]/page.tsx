import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticleChrome } from "@/components/blog/blog-article-chrome";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategories, blogPosts, getPost } from "@/lib/blog/posts";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo/page-metadata";
import { siteConfig } from "@/lib/site-config";

type BlogPostParams = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { category, slug } = await params;
  const p = getPost(slug);
  if (!p || p.categorySlug !== category) return {};
  return buildPageMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.categorySlug}/${p.slug}`,
    keywords: p.keywords,
    openGraphType: "article",
    publishedTime: p.publishedAt
  });
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { category, slug } = await params;
  const p = getPost(slug);
  const c = blogCategories.find((x) => x.slug === category);
  if (!p || !c || p.categorySlug !== c.slug) return notFound();

  const related = blogPosts.filter((x) => x.categorySlug === c.slug && x.slug !== p.slug).slice(0, 4);
  const url = `${siteConfig.url}/blog/${p.categorySlug}/${p.slug}`;
  const toc =
    p.sections?.map((s) => ({
      id: s.id,
      label: s.heading
    })) ?? [];

  const breadcrumbsLd = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: c.name, url: `${siteConfig.url}/blog/${c.slug}` },
    { name: p.title, url }
  ];

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
      <JsonLd id={`ld-blog-breadcrumb-${p.slug}`} data={breadcrumbSchema(breadcrumbsLd)} />
      <JsonLd
        id={`ld-article-${p.slug}`}
        data={articleSchema({
          headline: p.title,
          description: p.excerpt,
          url,
          datePublished: p.publishedAt,
          keywords: p.keywords
        })}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <BlogArticleChrome toc={toc}>
            <div className="max-w-3xl">
              <div className="mb-8 flex flex-wrap gap-2">
                {p.keywords.slice(0, 10).map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
                  >
                    {k}
                  </span>
                ))}
              </div>

              <article className="space-y-6 text-sm leading-relaxed text-gray-600 md:text-base">
                {p.sections?.length
                  ? p.sections.map((s) => (
                      <section key={s.id} id={s.id} className="scroll-mt-28">
                        <h2 className="mb-3 text-lg font-black text-navy-700 md:text-xl">{s.heading}</h2>
                        {s.paragraphs.map((para, idx) => (
                          <p key={idx} className="mb-3">
                            {para}
                          </p>
                        ))}
                      </section>
                    ))
                  : p.content.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
              </article>

              <p className="mt-8 rounded-xl border border-primary-100 bg-primary-50 px-5 py-4 font-medium text-gray-700">
                Need selection support for your project? Share duty point, voltage, and destination country using the RFQ form.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/rfq">Request quotation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">Explore products</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/callback">Request callback</Link>
                </Button>
              </div>
            </div>
          </BlogArticleChrome>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-white">
          <div className="container py-12 md:py-16">
            <div className="mb-2 text-xs font-black uppercase tracking-widest text-primary-700">Related</div>
            <h2 className="mb-7 text-2xl font-black text-navy-700 md:text-3xl">More from {c.name}</h2>
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
      ) : null}
    </>
  );
}
