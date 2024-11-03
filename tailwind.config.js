/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        mainGreen: '#69BE96',
        textGreen: '#00BE64',
        textGray: '#8989A2',
        lightGray: '#F7F9FB',
      },
      backgroundImage: {
        backgroundEffect: "url('../src/assets/images/background-effect.png')"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

