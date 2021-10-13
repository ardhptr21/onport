module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "encode-sans": ['"Encode Sans"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#101920",
        secondary: "#888888",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
