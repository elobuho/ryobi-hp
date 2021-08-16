const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "2rem",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1920px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: {
        DEFAULT: "#e1e723",
        // dark: "#c3c912",
        bg: {
          DEFAULT: "#0b0a05",
          light: "#2a2a27",
        },
      },
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
