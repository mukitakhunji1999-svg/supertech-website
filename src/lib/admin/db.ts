import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

export type ProductTab = { id: string; label: string };

export type Product = {
  id: string;
  tabId: string;
  order: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type ProductsData = {
  tabs: ProductTab[];
  products: Product[];
};

export type SiteSettings = {
  name: string;
  tagline: string;
  email: string;
  phones: string[];
  whatsapp: string;
  address: string;
  updatedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const PRODUCTS_FILE = path.join(DATA_DIR, "products.json");
const SETTINGS_FILE = path.join(DATA_DIR, "site-settings.json");

async function readJson<T>(file: string): Promise<T> {
  const buf = await fs.readFile(file, "utf-8");
  return JSON.parse(buf) as T;
}

async function writeJson(file: string, data: unknown): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf-8");
  await fs.rename(tmp, file);
}

export async function getProductsData(): Promise<ProductsData> {
  return readJson<ProductsData>(PRODUCTS_FILE);
}

export async function saveProductsData(data: ProductsData): Promise<void> {
  await writeJson(PRODUCTS_FILE, data);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const data = await getProductsData();
  return data.products.find((p) => p.id === id);
}

export async function upsertProduct(input: Product): Promise<void> {
  const data = await getProductsData();
  const idx = data.products.findIndex((p) => p.id === input.id);
  if (idx === -1) {
    data.products.push(input);
  } else {
    data.products[idx] = input;
  }
  data.products.sort((a, b) => {
    if (a.tabId !== b.tabId) return a.tabId.localeCompare(b.tabId);
    return a.order - b.order;
  });
  await saveProductsData(data);
}

export async function deleteProduct(id: string): Promise<void> {
  const data = await getProductsData();
  data.products = data.products.filter((p) => p.id !== id);
  await saveProductsData(data);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return readJson<SiteSettings>(SETTINGS_FILE);
}

export async function saveSiteSettings(settings: SiteSettings): Promise<void> {
  await writeJson(SETTINGS_FILE, { ...settings, updatedAt: new Date().toISOString() });
}

/** Persist an uploaded image to /public/uploads/products and return its public URL. */
export async function saveProductImage(file: File, productId: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name).toLowerCase().replace(/[^a-z0-9.]/g, "") || ".jpg";
  const safeId = productId.replace(/[^a-z0-9-_]/gi, "-").toLowerCase();
  const filename = `${safeId}-${Date.now()}${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads", "products");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), buffer);
  return `/uploads/products/${filename}`;
}

/** Group products by tab for rendering in the public Featured Products section. */
export type ProductTabWithItems = ProductTab & { items: Product[] };
export async function getProductsByTab(): Promise<ProductTabWithItems[]> {
  const data = await getProductsData();
  return data.tabs.map((tab) => ({
    ...tab,
    items: data.products
      .filter((p) => p.tabId === tab.id)
      .sort((a, b) => a.order - b.order)
  }));
}
