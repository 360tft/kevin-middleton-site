import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/products", destination: "/", permanent: true },
      { source: "/work-with-me", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
