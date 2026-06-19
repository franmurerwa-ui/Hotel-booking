/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003580",
          dark: "#00224f",
          light: "#0a4fb0",
        },
        accent: {
          DEFAULT: "#febb02",
          dark: "#e0a400",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
        popover: "0 8px 24px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
