import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1280px" }
      },
      colors: {
        primary: {
          50:  "#eef6ff",
          100: "#d9ecff",
          200: "#b9dcff",
          300: "#88c5ff",
          400: "#4aa6ff",
          500: "#1e86ff",
          600: "#0b66e6",
          700: "#0a4fb4",
          800: "#0b3f8a",
          900: "#0b356f",
          950: "#061a39"
        },
        navy: {
          700: "#1b3a5f",
          800: "#0f2540",
          900: "#0a1e3c",
          950: "#060f1e"
        },
        gray: {
          50:  "#f8f9fb",
          100: "#f0f2f5",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        }
      },
      fontFamily: {
        sans: ["Segoe UI", "Inter", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        card:   "0 4px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.14)",
        nav:    "0 2px 12px rgba(0,0,0,0.07)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg,rgba(10,30,60,0.82) 0%,rgba(10,30,60,0.55) 55%,rgba(10,30,60,0.25) 100%)"
      },
      keyframes: {
        "count-up": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "none" } }
      },
      animation: {
        "count-up": "count-up 0.5s ease forwards"
      }
    }
  },
  plugins: []
} satisfies Config;
