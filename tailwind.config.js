const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './public/app.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'kale-blue': '#00c9ff',
        'kale-green': '#92fe9d',
        'lily-left': '#efd5ff',
        'lily-right': '#515ada',
        'deep-blue': '#000851',
        'ocean-blue': '#1CB5E0',
        'fairy-pink': '#EE99AC',
        'pokemon-electric': '#F8D030',
        'pokemon-water': '#6890F0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
