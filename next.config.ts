import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }
    ]
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"]
  }
};

export default nextConfig;

