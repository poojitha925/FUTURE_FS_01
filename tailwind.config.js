/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#fdf8f2",
          100: "#faf0e4",
          200: "#f5e0c8",
          300: "#eecfaa",
          400: "#e4b882",
          500: "#d49a5a",
          600: "#b87c3e",
          700: "#8f5f2e",
          800: "#6b4520",
          900: "#4a2e14",
        },
        warm: {
          50:  "#fef9f4",
          100: "#fdf0e2",
          200: "#fbe0c5",
          300: "#f7c89e",
          400: "#f2a96f",
          500: "#e88840",
          600: "#c96820",
          700: "#a04e16",
          800: "#7a3a10",
          900: "#56270a",
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      animation: {
        "fade-in":    "fadeIn 0.8s ease forwards",
        "slide-up":   "slideUp 0.7s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(30px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        float:   { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-18px)" } },
      },
    },
  },
  plugins: [],
}
