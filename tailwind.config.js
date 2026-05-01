/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Texturina"', 'serif'],
        secondary: ['"Modern Antiqua"', 'serif'],
      },
      colors: {
        /* Info */
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          DEFAULT: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768',
        },
        /* Success */
        success: {
          lighter: '#D3FCD2',
          light: '#77ED8B',
          DEFAULT: '#22C55E',
          dark: '#118D57',
          darker: '#065E49',
        },
        /* Warning */
        warning: {
          lighter: '#FFF5CC',
          light: '#FFD666',
          DEFAULT: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100',
        },
        /* Error */
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          DEFAULT: '#FF5630',
          dark: '#B71D18',
          darker: '#7A0916',
        },
      },
    },
  },
  plugins: [],
};
