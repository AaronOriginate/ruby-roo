import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ruby-roo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
