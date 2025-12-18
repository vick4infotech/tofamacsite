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
          50: "#f6f3ff",
          100: "#ede6ff",
          200: "#d8ccff",
          300: "#bca6ff",
          400: "#9a78ff",
          500: "#7c4dff",
          600: "#6536f0",
          700: "#542ad0",
          800: "#3f229a",
          900: "#2d1c6b"
        },
        ink: {
          50: "#f5f7ff",
          100: "#e9edff",
          200: "#cfd8ff",
          300: "#aab9ff",
          400: "#7b90ff",
          500: "#5268ff",
          600: "#3346f3",
          700: "#2737c6",
          800: "#202f9e",
          900: "#1c2a86"
        }
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
