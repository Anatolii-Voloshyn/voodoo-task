/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'space': ['Space Grotesk', 'Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

