import type { Metadata } from "next";
import {
  FamilyLineProductPage,
  familyLineMetadata,
  familyLineStaticParams
} from "@/components/products/family-line-product-page";

export function generateStaticParams() {
  return familyLineStaticParams("fire-fighting-pumps");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return familyLineMetadata("fire-fighting-pumps", params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <FamilyLineProductPage family="fire-fighting-pumps" slug={params.slug} />;
}
