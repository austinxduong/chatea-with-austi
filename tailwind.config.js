module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        play: ["Play Fair"],
        montserrat: ["Montserrat"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
