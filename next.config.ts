import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["https://ccore.newebpay.com", "http://localhost:3000"],
    },
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/tp_notify',
      },
    ];
  },
};

export default nextConfig;
