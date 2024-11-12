import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/public/iconfont/iconfont.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const aliPuHuiTiBold = localFont({
  src: "./fonts/Alibaba-PuHuiTi-Bold.ttf",
  variable: "--font-ali-puhuiti-bold",
  weight: "100 900",
});
const aliPuHuiTiRegular = localFont({
  src: "./fonts/Alibaba-PuHuiTi-Regular.ttf",
  variable: "--font-ali-puhuiti-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "格恩源",
  keywords:
    "格恩源, 电池, 可充电电池, 一次性电池, 电池解决方案, 技术规格, 用户指南, 购买选项, 家庭电池, 专业设备电池, 紧急备用电源, 能源效率, 电池官网",
  description:
    "探索我们的高品质电池产品，包括可充电电池、一次性电池以及专为各种设备设计的电池解决方案。我们的电池官网提供全面的技术规格、用户指南和购买选项。无论是家庭使用、专业设备还是紧急备用电源，我们都能提供持久、可靠的能源支持。立即访问我们的网站，了解如何通过我们的电池产品提高您的能源效率和便利性。",
};

// 移动端常用视口设置
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aliPuHuiTiBold.variable} ${aliPuHuiTiRegular.variable} __next`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
