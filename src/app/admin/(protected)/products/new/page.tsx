import { getProductsData } from "@/lib/admin/db";
import { ProductForm } from "@/components/admin/product-form";
import { createProductAction } from "../actions";

export default async function NewProductPage({
  searchParams
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const data = await getProductsData();
  const sp = await searchParams;
  const initialTab = sp.tab && data.tabs.some((t) => t.id === sp.tab) ? sp.tab : data.tabs[0]?.id ?? "";
  const initial = {
    id: "",
    tabId: initialTab,
    order: 100,
    title: "",
    description: "",
    imageSrc: "",
    imageAlt: "",
    href: "/products"
  };
  return <ProductForm mode="create" tabs={data.tabs} initial={initial} action={createProductAction} />;
}
