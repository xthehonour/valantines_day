/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'valentine-pink': '#ffb7c5',
        'valentine-red': '#e0115f',
        'valentine-dark': '#8b0000',
      }
    },
  },
  plugins: [],
}
