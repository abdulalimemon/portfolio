/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F87272",
          // "secondary": "#00F48E",
          "secondary": "#FFCD38",
          "accent": "#112240",
          "neutral": "#B3C5EF",
          "base-100": "#0F172A",
          "info": "#1A3B69",
          "success": "#36D399",
          "warning": "#FBBD23", 
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
}
