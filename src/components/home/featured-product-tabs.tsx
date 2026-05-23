import { getProductsByTab } from "@/lib/admin/db";
import { HomeFeaturedProductTabsClient, type FeaturedTab } from "./featured-product-tabs-client";

export async function HomeFeaturedProductTabs() {
  const data = await getProductsByTab();
  const tabs: FeaturedTab[] = data.map((t) => ({
    id: t.id,
    label: t.label,
    items: t.items.map((p) => ({
      title: p.title,
      description: p.description,
      imageSrc: p.imageSrc,
      imageAlt: p.imageAlt || p.title,
      href: p.href
    }))
  }));
  return <HomeFeaturedProductTabsClient tabs={tabs} />;
}
