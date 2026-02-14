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
        vermilion: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#C93531",
          600: "#b12d2a",
          700: "#8a2422",
          800: "#6d1d1b",
          900: "#581a19",
          950: "#2f0d0d",
        },
        gold: {
          50: "#fdfcf3",
          100: "#fcf8e3",
          200: "#f8efbc",
          300: "#f2e18b",
          400: "#e8c94e",
          500: "#D4A84B",
          600: "#c08b2e",
          700: "#9e6c25",
          800: "#815524",
          900: "#6a4621",
          950: "#3d250f",
        },
        indigo: {
          custom: "#2C3E6E",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#E8E0D4",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif SC", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        weave: "weave 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        weave: {
          "0%, 100%": { transform: "scaleX(0)", transformOrigin: "left" },
          "50%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "li-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23D4A84B' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201, 53, 49, 0.3)",
        "glow-gold": "0 0 40px rgba(212, 168, 75, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
