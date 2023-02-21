/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6ADEFC",
        secondary: "#a8e8f8",
      },
      height: {
        100: '10vh',
        900: "90vh",
      },
    },
  },
  plugins: [],
};
