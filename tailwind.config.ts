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
        background: {
          bg: "#ecf0f3",
          circleUpBg: "#3B82F6",
          circleDownBg: "#3B82F6",
        },
        primary: "#000000",
        secondary: "#5651e5",
        description: "#191919",
        shadow: "#9CA3AF",
        tag: "#5651e5",

        hover: "#ecf0f3",

        dark: {
          background: {
            bg: "#030712",
            circleUpBg: "#2563EB",
            circleDownBg: "#2563EB",
          },
          primary: "#ffffff",
          secondary: "#5651e5",
          description: "#ecf0f3",
          button: "#0B1940",
          shadow: "#030712",
          tag: "#06B6D4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
