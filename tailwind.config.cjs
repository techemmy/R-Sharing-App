/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

function generateSpacingScale(max, step) {
  const scale = {};
  for (let i = 0; i <= max; i = parseFloat((i + step).toFixed(1))) {
    scale[i] = `${i}rem`;
  }
  return scale;
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // spacing: generateSpacingScale(100, 0.1),
      // borderWidth: generateSpacingScale(50, 0.1),
      colors: {
        primary: "gold",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      //
      // fontSize: {
      //   sm: "1rem",
      //   md: "2rem",
      //   lg: "3rem",
      // },

      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "2xl": "8px 6px 66px 0px rgba(0,0,0,0.26)",
      },
      screens: {
        sm: "768px",
      },
      backgroundImage: (theme) => ({}),
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: { fontSize: "4.3rem" },
        h2: { fontSize: "2rem" },
        h3: { fontSize: "1rem" },
      });
    }),

    plugin(function ({ addUtilities, theme }) {
      const spacingUtilities = generateSpacingScale(100, 0.1);
      const borderWidthUtilities = generateSpacingScale(50, 0.1);

      addUtilities(
        {
          ".space-x": spacingUtilities, // Add spacing utilities
          ".border-width": borderWidthUtilities, // Add border width utilities
        },
        ["responsive", "hover"],
      ); // Optional variants for responsiveness and hover states
    }),
  ],
};
