/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }
    },
    extend: {
      colors: {
        primary: '#FF5353',
        default: '#D2D2D2',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
};
