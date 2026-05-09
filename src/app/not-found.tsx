import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
      <div className="max-w-md text-center px-6">
        <div className="text-5xl font-black text-primary-700 mb-3">404</div>
        <h1 className="text-2xl font-black text-navy-700 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist. Use product search or browse categories.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          <Button asChild><Link href="/search">Search</Link></Button>
          <Button asChild variant="outline"><Link href="/products">Browse Products</Link></Button>
        </div>
      </div>
    </div>
  );
}
