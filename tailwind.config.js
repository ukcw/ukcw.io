/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'open-sans': ['Rubik Moonrocks', 'cursive'],
        palanquin: ['Palanquin', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'pulse-color-light': {
          '0%': {
            'background-color': '#3b82f6',
          },
          '25%': {
            'background-color': '#93c5fd',
          },
          '50%': {
            'background-color': '#dbeafe',
          },
          '75%': {
            'background-color': '#93c5fd',
          },
          '100%': {
            'background-color': '#3b82f6',
          },
        },
        'pulse-color-dark': {
          '0%': {
            'background-color': '#ef4444',
          },
          '25%': {
            'background-color': '#fca5a5',
          },
          '50%': {
            'background-color': '#fee2e2',
          },
          '75%': {
            'background-color': '#fca5a5',
          },
          '100%': {
            'background-color': '#ef4444',
          },
        },
      },
      animation: {
        'pulse-light': 'pulse-color-light 2.5s linear infinite',
        'pulse-dark': 'pulse-color-dark 2.5s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
