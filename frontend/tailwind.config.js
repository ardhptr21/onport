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
      boxShadow: {
        button: "5px 5px 0px rgba(16, 25, 32, 0.8)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      fontWeight: ["hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
