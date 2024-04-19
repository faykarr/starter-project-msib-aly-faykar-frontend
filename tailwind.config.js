/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryMain: '#151521',
        primarySurface: "#1C1B29",
        primaryBorder: "#232336",
        textSecondary: "#8A8B93",
        secondaryMain: "#445EBF",
        secondaryHover: "#2D3F7F"
      },
      // Font Family Poppins
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

