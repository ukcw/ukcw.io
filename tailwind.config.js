/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ["JetBrains Mono", "monospace"],
      }
    },
  },
  plugins: [],
};
