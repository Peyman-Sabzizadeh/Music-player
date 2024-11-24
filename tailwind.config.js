/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:
      {
        custom:'Poppins'
      },
      container:
      {
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

