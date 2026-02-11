import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mock-application-polaron/:path*",
        destination: "https://polaron-demo-page.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
export default nextConfig;
