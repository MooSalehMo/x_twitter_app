import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // Set this to your desired maximum file size (e.g., '10mb')
    },
  },
};

export default nextConfig;
