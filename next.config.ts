import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
    images: {
    qualities: [25, 50, 75, 100],
  },
};

// module.exports = {

// }

export default nextConfig;
