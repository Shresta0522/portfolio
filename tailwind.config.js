/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1D',
        secondary: '#3B1C32',
        accent: '#6A1E55',
        highlight: '#A64D79',
      },
    },
  },
  plugins: [],
}

