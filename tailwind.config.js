/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", 'sans-serif'],
        "logo": ['Holtwood One SC', 'sans-serif']
      }
    },
  },
  plugins: [],
}

