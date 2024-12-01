import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "428px", //=> @media(min-width: 428px)
    //   md: "768px", //=> @media(min-width: 768px)
    //   lg: "1024px", //=> @media(min-width: 1024px)
    //   xl: "1280px", //=> @media(min-width: 1280px)
    //   "2xl": "1536px", //=> @media(min-width: 1536px)
    // },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
