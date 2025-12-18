import type { NextConfig } from "next";

/**
 * Keep config minimal and Vercel-friendly.
 * Add image domains only when you start using remote images.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
