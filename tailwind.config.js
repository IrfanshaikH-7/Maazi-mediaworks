/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tilt: ['Tilt Neon', 'sans-serif'],
        glitch: ['Rubik Glitch', 'sans-serif'],
        nunito: ['Nunito','sans-serif']
      }
    },
  },
  plugins: [],
}

