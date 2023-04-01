/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['italiana', 'serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
