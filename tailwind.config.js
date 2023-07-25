/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#f3f7fc",
        background: "#060e19",
        primary: "#2d70c8",
	      secondary: "#081525",
        accent: "#2e72cc" 
      }
    },
  },
  plugins: [
    require("@vueform/slider/tailwind"),
    require("@tailwindcss/typography")
  ],
}

