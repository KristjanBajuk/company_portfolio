import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (~20-30% smaller than WebP), WebP fallback.
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Portfolio images rarely change: cache optimized variants for 31 days.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
