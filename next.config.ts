import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lg.com',
      },
      {
        protocol: 'https',
        hostname: 'media.us.lg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tclpakistan.com',
      }
    ],
  },
};

export default nextConfig;
