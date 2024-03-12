/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "monserrat": ["Montserrat", 'sans-serif'],
        "holtwood": ['Holtwood One SC', 'sans-serif']
      }
    },
  },
  plugins: [],
}

