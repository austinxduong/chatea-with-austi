
   
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,scss}', './components/**/*.{js,ts,jsx,tsx,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rale: ['Raleway', 'sans-serif'],
        arimo: ['Arimo'],
      },
      height: {
        25: '10rem',
      },
      colors: {
        char: {
          100:'#222021',
        },
        harbor: {
          300:'#C7C6C1',
        },
        pearl: {
          100:'#D9DDDC',
        },
        trout: {
          100:'#97978F',
        },
        stone: {
          100:'#877F7D',
        },
        aba: {
          100:'#D6CFC7',
        },
  
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
    }

  },
},
  variants: {
    extend: {},
  },
  plugins: [],

};