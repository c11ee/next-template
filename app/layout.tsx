import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aliPuHuiTiBold.variable} ${aliPuHuiTiRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}