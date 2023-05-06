/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'syasinn1':"url('')"}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

