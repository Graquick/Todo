/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // "false" or "media"
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      xl: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      mxl: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      lg: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      mlg: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      md: { max: "425px" },
      // => @media (max-width: 425px) { ... }

      sm: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      xs: { max: "320px" },
      // => @media (max-width: 320px) { ... }
    },
    fontFamily: {
      raleway: "Raleway, sans-serif",
      roboto: "Roboto, sans-serif",
      play: "Press\\ Start\\ 2P, cursive",
    },
  },
  plugins: [],
};
