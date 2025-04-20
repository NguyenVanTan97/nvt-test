/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-80%) rotate(0deg)" },
          "30%": { transform: "translateX(-30%) rotate(12deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "Montserrat"],
      },
    },
  },
  plugins: [],
};
