/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Crimson Pro', 'serif']
    },
    extend: {
      colors: {
        fuchsia: {
          200: '#D9CDF7',
          900: '#271A45'
        }
      }
    }
  },
  plugins: []
}
