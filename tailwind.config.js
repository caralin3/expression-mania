const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          ...colors.blue,
          aero: '#d1f4e7',
          blizzard: '#a2eaf2',
          cadet: '#3c737f',
          columbia: '#c7e2eb',
          dark: '#0e2f59',
          prussian: '#142f40',
        },
        green: {
          ...colors.green,
          sea: '#4a6a65',
        },
        yellow: {
          ...colors.yellow,
          pale: '#d7d9a7',
        },
      },
      spacing: {
        128: '32rem',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
