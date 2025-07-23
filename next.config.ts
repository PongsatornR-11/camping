import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  reactStrictMode: false,

  //allow image on next js
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "hiivzcinvtszjzqzyisf.supabase.co",
      },
    ],
  },
};

export default nextConfig;
