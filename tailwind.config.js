/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish: ["Mulish", "sans-serif"]
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      dropShadow: {
        // 'xl': '0 0px 15px rgb(223, 66, 66)',
        'xl': '0 0px 20px rgba(237, 235, 232, 0.95)',
        'xc': '0 0px 25px rgba(1, 6, 31, 0.75)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
      // (0px 0px 15px rgb(223, 66, 66))
    },
  },
  plugins: [],
}
