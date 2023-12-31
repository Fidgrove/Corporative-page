/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bckg: "#eaeaea",
        black: "#15223f",
        red: "#f70f1c",
        blue: "#42c3fa",
      },
      animation: {
        loading: "shine 1.6s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "-100px" },
          "40%, 100%": { "background-position": "140px" },
        },
      },
    },
  },
  plugins: [],
};
