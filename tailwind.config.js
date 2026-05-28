/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF2',
        rose: { soft: '#FDF2F8', medium: '#F9A8D4' },
        lavender: { soft: '#F5E6FF', medium: '#C4B5FD' },
        gold: { soft: '#FDE68A' },
        ink: '#4A3F55',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'pastel-sky':
          'linear-gradient(180deg, #FFF8F5 0%, #FDF2F8 45%, #F5E6FF 100%)',
      },
      boxShadow: {
        paper: '0 10px 30px -10px rgba(74, 63, 85, 0.15), 0 4px 12px -4px rgba(74, 63, 85, 0.08)',
        soft: '0 6px 20px -8px rgba(74, 63, 85, 0.18)',
      },
    },
  },
  plugins: [],
};
