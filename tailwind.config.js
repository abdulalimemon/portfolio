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
          "primary": "#00E7BD",
          "secondary": "#328FFF",
          "accent": "#112240",
          "neutral": "#fa95ab",
          "base-100": "#0F172A",
          "info": "#1A3B69",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
}
