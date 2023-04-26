/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
  content: [],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'theme': '#7F6665',
      'theme_bg': '#F0EFE9',
      'theme_bg2': '#F6F5F0',
      'theme_but': '#E4E2DC',
      'themepurple_shadow': '#F1F8F1',
      'white': '#ffffff',
      'black': '#000000',
      'nicoblack': '#252525',
      'gray': '#cccccc',
    },
    fontFamily:{
      'mplus': ["M PLUS Rounded 1c", 'sans-serif'],
      'notosans': ["Noto Sans JP", 'sans-serif'],
    },
    extend: {
      boxShadow:{
        'card': '0 0 3px #3A3343',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
