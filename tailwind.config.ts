import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F19",
          600: "#1F2937",
          500: "#374151"
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F7FB"
        },
        brand: {
          DEFAULT: "#5B2EFF",
          700: "#3C1DB8",
          50: "#F2EDFF"
        },
        line: "#E7E7F2"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
