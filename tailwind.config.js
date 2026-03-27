/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          black: "#0A0A0A",
          dark: "#1A1A1A",
          blue: "#00D4FF",
          purple: "#7B2CFF",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 255, 0.35)",
      },
    },
  },
  plugins: [],
}