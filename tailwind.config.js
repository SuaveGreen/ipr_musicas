/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        chord: '#FF0000' // Cor personalizada para os acordes 
      },
      keyframes: {
        bounceR: {
          '50%, 100%': { transform: 'translatex(-25%)' },
          '100%': { transform: 'none' },
        }
      },
    },
    screens: {
      'celular': '320px',
      // => @media (min-width: 320px) { ... }

      'tabletsm': '640px',
      // => @media (min-width: 640px) sm { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) md { ... }

      'tabletx': '1024px',
      // => @media (min-width: 1024px) lg { ... }

      'notebook': '1280px',
      // => @media (min-width: 1280px) xl { ... }

      'monitor': '1536px',
      // => @media (min-width: 1536px) 2xl { ... }
    }
  },
  plugins: [require('tailwind-scrollbar')],
}