import type { Metadata } from "next";
import {
  FamilyLineProductPage,
  familyLineMetadata,
  familyLineStaticParams
} from "@/components/products/family-line-product-page";

type SlugParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return familyLineStaticParams("centrifugal-pumps");
}

export async function generateMetadata({ params }: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  return familyLineMetadata("centrifugal-pumps", slug);
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <FamilyLineProductPage family="centrifugal-pumps" slug={slug} />;
}
