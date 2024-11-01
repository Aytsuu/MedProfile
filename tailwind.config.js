/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      outfit: ["'Outfit'", "sans-serif"],
      molle: ["'Molle'", "sans-serif"],
      inter: ["'Inter'", "sans-serif"],
      }, 
      colors:{
        'custom-teal': '#037580',
        'custom-teal2': '#008794',
        'custom-teal3': '#049CAA',
        'custom-teal4': '#0097A4',
        'customGray': '#D9D8D8',
      }
    },
  },
  plugins: [],
  
}

