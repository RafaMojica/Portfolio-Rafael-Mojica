/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ecf0f3",
        main: "#1f2937",
        secondary: "#5651e5",
        terciario: "#709dff",        //Degraded
        gray300: "rgb(209 213 219)", //Form, line navbar
        gray500: "#6b7280",          //Close project
        gray600: "rgb(75, 85, 99)",  //Message start, about me, Technologies
        gray700: "rgb(55, 65, 81)",  //Present start
        shodowGrey400: "#9ca3af",
        buttonTextMain: "white",
        buttonBgProject: "white",
      }
    },
  },
  plugins: [],
}
