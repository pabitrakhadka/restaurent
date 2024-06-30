/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      }
    },
    fontFamily: {
      Poppins: ["Poppins", 'sans-serif']
    }
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}