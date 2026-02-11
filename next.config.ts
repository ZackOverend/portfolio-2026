import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mock-polaron-webpage/:path*",
        destination: "https://polaron-demo-page.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
