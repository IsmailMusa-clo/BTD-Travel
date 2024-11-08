/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        mainGreen: '#00BE64',
        textGreen: '#69BE96',
        textGray: '#8989A2',
        lightGray: '#F7F9FB',
      },
      backgroundImage: {
        backgroundEffect: "url('../src/assets/images/background-effect.png')",
        orderBgEffect: "url('../src/assets/images/background-effect.png')"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

