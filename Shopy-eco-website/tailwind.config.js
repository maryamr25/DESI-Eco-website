/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lablue : '#3a4660',
        tan : '#c9af98',
        peach : '#ed8a63',
        brown:'#845007'
      }
    },
  },
  plugins: [],
}

