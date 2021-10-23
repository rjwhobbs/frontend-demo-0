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
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        "81vw": "81vw",
      },
      inset: {
        "43vw": "43vw",
      },
      fontSize: {
        "8vw": "8vw",
        "11vw": "11vw",
        "lg.5": "1.2rem",
        "4.5xl": "2.5rem",
      },
      lineHeight: {
        initial: "initial",
      },
      margin: {
        "7vw": "7vw",
        "8vw": "8vw",
      },
      order: {
        unset: "unset",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};
