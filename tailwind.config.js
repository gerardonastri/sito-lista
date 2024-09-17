/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#DC2E71",
          dark: "#70183A",
        },
        general: "#4F4F4F",
      },
      fontFamily: {
        gothic: ["League Gothic", "sans-serif"]
      }
    },
  },
  plugins: [],
};

