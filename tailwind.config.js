/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        carrierBackground: "url('../img/bgCarrier.jpg')"
      },
      colors: {
        darkRed: '#10b981',
        lightRed: '#34d399',
      },
    },
  },
  plugins: [],
}
