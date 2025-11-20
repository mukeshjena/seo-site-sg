/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        secondary: {
          light: '#8b5cf6',
          dark: '#a78bfa',
        },
        accent: {
          light: '#10b981',
          dark: '#34d399',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', top: '20px', position: 'relative' },
          '100%': { opacity: '1', top: '0', position: 'relative' },
        },
        slideDown: {
          '0%': { opacity: '0', top: '-20px', position: 'relative' },
          '100%': { opacity: '1', top: '0', position: 'relative' },
        },
        slideLeft: {
          '0%': { opacity: '0', left: '20px', position: 'relative' },
          '100%': { opacity: '1', left: '0', position: 'relative' },
        },
        slideRight: {
          '0%': { opacity: '0', left: '-20px', position: 'relative' },
          '100%': { opacity: '1', left: '0', position: 'relative' },
        },
      },
    },
  },
  plugins: [],
}
