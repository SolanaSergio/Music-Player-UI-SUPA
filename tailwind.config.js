/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.7)',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% 50%',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};