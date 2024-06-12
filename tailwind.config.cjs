/** @type {import('tailwindcss').Config} */

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
      spacing: generateSpacingScale(100, 0.1),
      border: generateSpacingScale(50, 0.1),
      colors: {
        primary: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: "hsl(243, 100%, 62%)",
          pastelBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberryRed: "hsl(354, 84%, 57%)",
        },
        neutral: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
        },
      },
      screens: {
        sm: "768px",
      },
      backgroundImage: (theme) => ({
        desktop: "url('./assets/bg-sidebar-desktop.svg')",
        mobile: "url('./assets/bg-sidebar-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
