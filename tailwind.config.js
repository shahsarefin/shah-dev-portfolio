// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: '0.875rem', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
