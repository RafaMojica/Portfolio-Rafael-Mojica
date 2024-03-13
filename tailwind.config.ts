import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#ecf0f3",
        primary: "#000000",
        secondary: "#5651e5",
        description: "#4B5563",
        shadow: "#9ca3af",

        dark: {
          background: "#000000",
          primary: "#ffffff",
          secondary: "#5651e5",
          description: "#ecf0f3",
          shadow: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};

export default config;
