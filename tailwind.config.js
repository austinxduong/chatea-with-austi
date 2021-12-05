
   
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
        25: '8rem',
      }
  },
},
  variants: {
    extend: {},
  },
  plugins: [],

};