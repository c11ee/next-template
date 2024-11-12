import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_PATH,
  output: "export",
  images: {
    domains: ["192.168.0.147"],
    loader: "custom",
    // 处理网络图片
    loaderFile: "./my-loader.ts",
  },
  // // 代理配置
  // rewrites() {
  //   return new Promise((resolve) => {
  //     resolve([
  //       {
  //         source: "/api/:path*",
  //         destination: `/:path*`,
  //       },
  //     ]);
  //   });
  // },
};

export default nextConfig;
