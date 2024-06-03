/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assest/images/banner.webp')",
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
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
