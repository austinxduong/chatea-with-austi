
   
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,scss}', './components/**/*.{js,ts,jsx,tsx.scss}', './styles/**/*.{js,ts,jsx,tsx,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};