/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    'ml-1',
    'ml-2',
    'ml-3',
    'ml-4',
    'ml-5', // Agrega tantas clases como necesites
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)', // Usando la variable CSS
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        contrast: 'var(--constrast)'
      },
    },
  },
  plugins: [],
};
