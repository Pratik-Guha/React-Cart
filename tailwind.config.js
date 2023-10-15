/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josef:['Josefin Sans', 'sans-serif'],
        kanit:['Kanit', 'sans-serif'],
        popins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

