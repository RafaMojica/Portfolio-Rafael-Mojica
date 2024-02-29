import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ecf0f3",
        primary: "#4B5563",
        secondary: "#5651e5",
        gray400: "#9ca3af",
        terciario: "#709dff", //Degraded
        buttonBgProject: "white",
      },
    },
  },
  plugins: [],
};

export default config;
