import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Extracted from provided logo assets (primary blue)
          50: "#eef1ff",
          100: "#dee3ff",
          200: "#b9c2ff",
          300: "#8f9cff",
          400: "#6676ff",
          500: "#2c3ef6",
          600: "#2433d7",
          700: "#1d29b5",
          800: "#172190",
          900: "#121a6e",
        },
        accent: {
          // Extracted from provided logo assets (supporting green)
          50: "#ecfff7",
          100: "#d6ffef",
          200: "#a6ffe0",
          300: "#6dffcd",
          400: "#29f0b0",
          500: "#00dc8d",
          600: "#00b874",
          700: "#00935e",
          800: "#00724a",
          900: "#005437",
        },
      },
      boxShadow: {
        "emboss": "0 1px 0 rgba(255,255,255,0.6) inset, 0 -1px 0 rgba(0,0,0,0.08) inset, 0 10px 30px rgba(0,0,0,0.06)",
        "emboss-dark": "0 1px 0 rgba(255,255,255,0.08) inset, 0 -1px 0 rgba(0,0,0,0.35) inset, 0 10px 30px rgba(0,0,0,0.45)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
