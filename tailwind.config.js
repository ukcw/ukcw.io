/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ["JetBrains Mono", "monospace"],
        'open-sans': ["Rubik Moonrocks", "cursive"],
        'palanquin': ["Palanquin", "sans-serif"],
        'fira-sans': ["Fira Sans", "sans-serif"],
        'dm-sans': ["DM Sans", "sans-serif"],
        'libre-baskerville': ["Libre Baskerville", "serif"],
        'Poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
