module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1182px",
    },
    extend: {
      fontSize: {},
      colors: {
        primary: {
          DEFAULT: "#47CFA9",
        },
        typo: {
          dark: "#131313",
          light: "#515151",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
