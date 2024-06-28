/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assest/images/banner.webp')",
        newBanner: "url('./assest/images/fullcard image.webp')",
        hight: "h-full",
      },
      boxShadow: {
        insetcustom: "inset 0 0 0 2000px rgba(18, 72, 107, .9)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        bgColors: "#12486b",
        grey: "#868383",
        "light-grey": "#F6F3F4",
        "denim-blue": "#E9EEF6",
        "skin-light": "#e9c8b3",
        "soft-orange": "#e9c8b3",
        "gulf-blue": "#062152",
        "elegant-navy": "#4a536b",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
