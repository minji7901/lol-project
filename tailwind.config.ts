import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "header-color": "#12171C",
        "main-color": "#3b82f6",
        secondly: "#EF4444 ",
        blueGreen: {
          100: "#39758E",
          200: "#102128",
        },
        darkGray: "#232323",
      },
    },
  },
  plugins: [],
};
export default config;
