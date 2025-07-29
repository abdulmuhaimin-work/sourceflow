/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e4c96',
          orange: '#ff7a59',
          yellow: '#ffd700',
        }
      },
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        DEFAULT: '-1px',
      }
    },
  },
  plugins: [],
} 