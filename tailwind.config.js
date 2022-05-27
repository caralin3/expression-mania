module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
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
