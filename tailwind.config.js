/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      screens: {
      'vsm': {'max': '350px'},
      // => @media (max-width: 350px) { ... }
      },
      dropShadow: {
        '3xl': '0px 0px 10px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}