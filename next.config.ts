import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_PATH,
  // 代理配置
  rewrites() {
    return new Promise((resolve) => {
      resolve([
        {
          source: "/api/:path*",
          destination: `/:path*`,
        },
      ]);
    });
  },
};

export default nextConfig;
