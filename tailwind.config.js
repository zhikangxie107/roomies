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
          focused: "#C9EEBA",
          dark: "#294936"
        },
        teal: {
          accent: "#96B8AE",
          dark: "#3E6259"
        },
        sand: {
          accent: "#FFFEF1"
        },
        grey: {
          accent: "#515151"
        },
        black: {
          bkgd: "#121713"
        }
      },
      fontSize: {
        "title": '28.81px'
      },
      textColor: {
        grey: "#9A9A94"
      }
    },
  },
  plugins: [],
};
