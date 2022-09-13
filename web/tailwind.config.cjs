/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url("/background-home.png")',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
