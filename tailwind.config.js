/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loginTextBlue: '#013D43',
        loginBlue: '#049CAA',
        hoverloginBlue: '#076B74',
        darkGrayColor: '#9F9F9F',
        'custom-teal': '#037580',
        'custom-teal2': '#008794',
        'custom-teal3': '#049CAA',
        'custom-teal4': '#0097A4',
        'customGray': '#D9D8D8',
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
