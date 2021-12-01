
   
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'outfit': ['Outfit']
    },
    extend: {
      colors: {
        fuchsia: '#F181F1'
        },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};