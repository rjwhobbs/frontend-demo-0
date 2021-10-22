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
      },
      height: {
        100: "100rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
