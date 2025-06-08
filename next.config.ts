import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1"],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
