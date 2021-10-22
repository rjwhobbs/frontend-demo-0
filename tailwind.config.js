module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        "desat-blue": "#23303e",
        "sun-yellow": "#fad400",
        "dark-blue": "#19536b",
        "light-blue": "#69c5ff",
        "dark-yellow": "#ebc700",
        "dark-grey": "#5a636c",
        "off-white": "#fffaf6",
        "grey-blue": "#57545F",
      },
      height: {
        100: "100rem",
      },
      inset: {
        "43vw": "43vw",
      },
      fontSize: {
        "11vw": "11vw",
        "4.5xl": "2.5rem",
      },
      lineHeight: {
        initial: "initial",
      },
      margin: {
        "7vw": "7vw",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
