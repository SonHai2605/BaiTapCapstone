/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        merriweather: [ "Merriweather", 'serif'],
      },
      boxShadow:{
        '3xl': '0px 10px 45px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}