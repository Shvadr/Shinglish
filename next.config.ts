import type { NextConfig } from "next";

const basePath = "/Shinglish"
const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/Shinglish",
  images: {
    unoptimized: true
  },
  env: {basePath: basePath}
};




export default nextConfig;
