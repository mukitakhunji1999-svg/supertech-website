import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategories, getPostsByCategory } from "@/lib/blog/posts";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogCategoryParams = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: BlogCategoryParams): Promise<Metadata> {
  const { category } = await params;
  const c = blogCategories.find((x) => x.slug === category);
  if (!c) return {};
  return { title: c.name, description: c.description, alternates: { canonical: `/blog/${c.slug}` } };
}

export default async function BlogCategoryPage({ params }: BlogCategoryParams) {
  const { category } = await params;
  const c = blogCategories.find((x) => x.slug === category);
  if (!c) return notFound();
  const posts = getPostsByCategory(c.slug);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={c.name}
        subtitle={c.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: c.name }
        ]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild>
              <Link href="/rfq">Request Quotation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.categorySlug}/${p.slug}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
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
