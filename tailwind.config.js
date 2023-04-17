/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bg-dark": "#0f0e17",
      "bg-light": "#fffffe",
      "headline-text": "#fffffe",
      "body-text-light": "#a7a9be",
      "text-dark": "#2e2f3e",
      highlight: "#ff8906",
      tertiary: "#e53170",
    },
    extend: {},
  },
  plugins: [],
};
