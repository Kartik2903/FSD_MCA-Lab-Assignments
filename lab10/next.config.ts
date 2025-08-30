import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // use remotePatterns to allow external hosts for next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
