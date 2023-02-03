const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          6: "#F2F2F2",
        },
        blue: {
          1: "#2F80ED",
        },
      },
    },
  },
  plugins: [],
};
