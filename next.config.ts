import type { NextConfig } from "next";

// Static export served from https://explainitnormal.co.uk/clint
// Override with NEXT_PUBLIC_BASE_PATH="" to serve from a domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clint";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
