/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loginBlue: '#049CAA',
        hoverloginBlue: '#076B74'
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],  // Define the font family properly here
      },
    },
  },
  plugins: [],
}