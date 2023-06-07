/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/assets/**/*.{html,js}"],
  content: ["**/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        mainColor:"#191C21",
        secondColor:"#3C3C3C"
      }
    },
  },
  plugins: [],
}

