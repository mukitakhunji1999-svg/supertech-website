import { notFound } from "next/navigation";
import { getProductById, getProductsData } from "@/lib/admin/db";
import { ProductForm } from "@/components/admin/product-form";
import { updateProductAction } from "../../actions";

export default async function EditProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [product, data] = await Promise.all([getProductById(id), getProductsData()]);
  if (!product) notFound();
  return <ProductForm mode="edit" tabs={data.tabs} initial={product} action={updateProductAction} />;
}
