/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          50: '#fafafa ',
          100: '#f4f4f5 ',
          200: '#e4e4e7 ',
          300: '#d4d4d8 ',
          400: '#a1a1aa ',
          500: '#71717a ',
          600: '#52525b ',
          700: '#3f3f46 ',
          800: '#27272a ',
          900: '#18181b ',
        },
      },
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
            'background-color': '#60a5fa',
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
            'background-color': '#60a5fa',
          },
        },
        'pulse-color-dark': {
          '0%': {
            'background-color': '#f87171',
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
            'background-color': '#f87171',
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
