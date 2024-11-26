/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./index.html"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "Poppins": "Poppins",
        "PoppinsLight": "Poppins Latin",
        "PoppinsBold": "PoppinsBold"
      },
      container:{
        center:true,
        padding:
        {
          DEFAULT:"1rem",
          lg:"0.625rem"
        }
      }
    },
  },
  plugins: [
    function({addVariant})
    {
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');

    }
  ],
}