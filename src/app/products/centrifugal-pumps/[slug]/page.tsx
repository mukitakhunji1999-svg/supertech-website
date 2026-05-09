import type { Metadata } from "next";
import {
  FamilyLineProductPage,
  familyLineMetadata,
  familyLineStaticParams
} from "@/components/products/family-line-product-page";

export function generateStaticParams() {
  return familyLineStaticParams("centrifugal-pumps");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return familyLineMetadata("centrifugal-pumps", params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <FamilyLineProductPage family="centrifugal-pumps" slug={params.slug} />;
}
