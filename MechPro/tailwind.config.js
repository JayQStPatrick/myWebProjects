/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/landing7.jpg')",
      },
      colors: {
        "deep-blue": "#010026",
        navy_blue_home: "#27374D",
        navy_blue_write: "#070A52",
        blue_grey: "#526D82",
        light_blue_grey: "#9DB2BF",
        hover_blue_grey: "#E9F1F5",
        select_search: "#D9D9D933",
        "menu-button": "#B21F66",
        "active-red": "#EB1D36",
        "active-green": "#1FAB89",
        "font-green": "#178E5CB2",
        "home-lander": "#EADBC8",
        "solid-green": "#1F 6650",
        "pure-white": "#F9FCFB",
        blue: "#2CBCE9",
        red: "#DC4492",
        purple: "#9400FF",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        Dmserif: ["DM Serif Display", "serif"],
        DMsans: ["DM Sans", "sans-serif"],
      },
      screens: {
        xsm: "240px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
};
