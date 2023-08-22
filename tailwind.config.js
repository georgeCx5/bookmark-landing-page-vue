/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        'neo-soft-blue': 'hsl(231, 69%, 60%)',
        'neo-soft-red': 'hsl(0, 94%, 66%)',

        // ### Neutral
        'neo-grayish-blue': 'hsl(229, 8%, 60%)',
        'neo-very-dark-blue': 'hsl(229, 31%, 21%)',

        // ### Extras
        'neo-extra-one': '#F7F7F7',
      },
      dropShadow: {
        'btn': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'rubik': 'Rubik',
      },
      screens: {
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}