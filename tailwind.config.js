/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          accent: "#D5F7C8",
        },
        sand: {
          accent: "#FFFEF1"
        }
      },
      fontSize: {
        "title": '28.81px'
      },
    },
  },
  plugins: [],
};
