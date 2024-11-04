/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceR: {
          '50%, 100%': { transform: 'translatex(-25%)' },
          '100%': { transform: 'none' },
        }
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}