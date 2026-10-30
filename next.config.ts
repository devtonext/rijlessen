import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["*.monkeycode-ai.live"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
