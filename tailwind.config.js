module.exports = {
  content: [

    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  enabled: true,
  darkMode: 'media', // or 'class'
  theme: {
  },
  variants: {
  },
  plugins: [
    require('daisyui'),
  ],
}