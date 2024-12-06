/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        accent: "#00BFFF",
        secondary: "#FFA500",
        lightGray: "#F5F5F5",
        darkGray: "#2E2E2E",
      },
    },
  },
  plugins: [],
}