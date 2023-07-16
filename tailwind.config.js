/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

