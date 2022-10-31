/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '769px',
      // => @media (min-width: 769px) { ... }
    },
    extend: {
      colors: {
        primary: '#FF5353',
        default: '#fafafa',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
};
