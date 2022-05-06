module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#FFEEDE",
          dark: "#FF922C",
        },
        green: {
          light: '#EAFFE2',
          dark: '#54BF29',
        }
      },
      keyframes: {
        spinPause: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '12.5%': {
            transform: 'rotate(45deg)'
          },
          '25%': {
            transform: 'rotate(90deg)'
          },
          '37.5%': {
            transform: 'rotate(135deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '62.5%': {
            transform: 'rotate(225deg)'
          },
          '75%': {
            transform: 'rotate(270deg)'
          },
          '87.5%': {
            transform: 'rotate(315deg)'
          },
          "100%": {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'spin-pause': 'spinPause 16s ease-in-out infinite forwards'
      }
    },
  },
  plugins: [],
}
