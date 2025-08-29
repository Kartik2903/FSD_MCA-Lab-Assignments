/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.html",
    "./frontend/**/*.js"
  ],
  theme: {
    extend: {
      // Example customizations (optional)
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
};