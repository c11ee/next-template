import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      mdd: "650px",
      md: "740px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
      xxxl: "1666px",
    },
    extend: {
      fontFamily: {
        pht: "var(--font-ali-puhuiti-regular)",
        "pht-b": "var(--font-ali-puhuiti-bold)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0077C2",
        gray: {
          100: "#eeeeee",
          200: "#cccccc",
          400: "#5c5c5c",
          900: "#333333",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
