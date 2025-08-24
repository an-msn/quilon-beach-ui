import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "odisej-blue": {
          900: "#0d2b50",
          800: "#133a6d",
          700: "#1a4a8a",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        "custom-serif": [
          '"PP Editorial Old"',
          ...defaultTheme.fontFamily.serif,
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
      },
      boxShadow: {
        custom: "0 10px 30px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [forms, typography],
};
