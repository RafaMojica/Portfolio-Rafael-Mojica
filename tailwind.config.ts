import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/commons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ecf0f3",
        main: "#1f2937",
        secondary: "#5651e5",
        terciario: "#709dff", //Degraded
        gray300: "rgb(209 213 219)", //Form, line navbar
        gray500: "#6b7280", //Close project
        gray600: "rgb(75, 85, 99)", //Message start, about me, Technologies
        gray700: "rgb(55, 65, 81)", //Present start
        shodowGrey400: "#9ca3af",
        buttonTextMain: "white",
        buttonBgProject: "white",
      },
    },
  },
  plugins: [],
};

export default config;
