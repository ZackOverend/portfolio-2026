import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mock-application-polaron/:path*",
        destination: "https://zackoverend.com/mock-application-polaron/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
export default nextConfig;
