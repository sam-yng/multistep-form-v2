/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "lightgray": "#d6d9e6",
      "coolgray": "	#9699ab",
      "alb": "#dbe1ff",
      "denim": "#022959",
      "white": "#ffff",
      "navy": "#02295a"
    },
    extend: {
      fontFamily: {
        medium: ["medium"],
        bold: ["bold"],
        regular: ["regular"]
      }
    },
  },
  plugins: [],
}