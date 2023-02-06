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
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#F2F2F2",
        },
        blue: {
          1: "#2F80ED",
          2: "#E9F3FF",
        },
        red: {
          1: "#EB5757",
        },
        purple: {
          1: "#9B51E0",
          2: "#EEDCFF",
        },
        yellow: {
          1: "#E6A443",
          2: "#FCEED3",
        },
        green: {
          1: "#43B78D",
          2: "#D2F2EA",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
