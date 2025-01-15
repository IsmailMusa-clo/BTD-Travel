/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        mainGreen: '#00BE64',
        textGreen: '#69BE96',
        textGray: '#8989A2',
        textDarkGray: '#707070',
        lightGray: '#F7F9FB',
        textGrayBan: '#EEE3DF',
      },
      backgroundImage: {
        backgroundEffect: "url('../src/assets/images/background-effect.png')",
        orderBgEffect: "url('../src/assets/images/background-effect.png')"
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

