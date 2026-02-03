import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/categories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
