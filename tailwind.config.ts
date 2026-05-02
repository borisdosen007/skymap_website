import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#04040f",
          900: "#07071a",
          800: "#0d0d2b",
          700: "#111133",
        },
        gold: {
          300: "#fde68a",
          400: "#f5c842",
          500: "#e8b020",
        },
        star: "#fffde7",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
      animation: {
        "twinkle": "twinkle 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
