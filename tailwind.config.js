/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#B68C5A',
        grey: '#414040',
        lightGrey: '#707070',
        lighterGrey: '#CFCFCF',
        objectBg: '#F3F3F3',
      },

      fontFamily: {
        titleFont: ["EB Garamond", "serif"],
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
