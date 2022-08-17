/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      md: "540px",
      xmd: "680px",
      lg: "870px",
      slg: "1070px",
      xlg: "1400px",
    },
    extend: {
      fontFamily: {
        s: ["Segoe UI", "Helvetica Neue", "Arial", "sans - serif"],
      },
    },
  },
  plugins: [],
};
