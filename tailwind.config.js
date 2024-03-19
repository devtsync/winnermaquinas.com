/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    backgroundImage: {
      'img_pc_hero': "url('../assets/bg-hero-pc.jpg')"
    },
    extend: {
      colors: {
        'blue-winner': '#122865',
        'gray-winner': '#c0c2c0', 
      },
    },
  },
  plugins: [],
};
