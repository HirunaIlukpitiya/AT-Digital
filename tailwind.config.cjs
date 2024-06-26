/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm' : '375px',
      'md' : '768px',
      'lg' : '1200px',
      'xl' : '1440px'
    },
    extend: {
      colors: {
        'ATpurple' : '#6B3CC9',
        'ATskyblue' : '#1CBDDD',
        'ATlightgreen' : '#4DCA79',
        'ATdarkgreen' : '#78BF91',
        'ATorange' : '#F28D35',
        'ATlightpurple' : '#FAF8FF',
        'ATsilver' : '#6F6C90',
        'ATblack' : '#2F2F2F',
        'ATwhite' : '#FFF8E0',
      },
      fontFamily: {
        'Inter' : ['Inter', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}