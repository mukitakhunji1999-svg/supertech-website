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
          50: "#f5faff",
          100: "#d9ecff",
          200: "#b8d9f5",
          300: "#7eb8eb",
          400: "#4a9ee8",
          500: "#2e90fa",
          600: "#1a7ad9",
          700: "#0f6cbd",
          800: "#0c5499",
          900: "#0a4277",
          950: "#062a4d"
        },
        navy: {
          700: "#0f2744",
          800: "#0c1f36",
          900: "#09182a",
          950: "#050f1a"
        },
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 8px 32px rgba(15, 39, 68, 0.08)",
        "card-hover": "0 20px 48px rgba(15, 108, 189, 0.14)",
        nav: "0 2px 16px rgba(15, 39, 68, 0.06)"
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1.14)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "ken-burns": "ken-burns 16s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.6s ease forwards"
      }
    }
  },
  plugins: []
} satisfies Config;
