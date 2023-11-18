module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          300: "#e0e0e0",
          900: "#1c1c1c",
          "900_02": "#250441",
          "900_03": "#20003c",
          "900_01": "#17002e",
          "400_7f": "#c0c0c07f",
        },
        black: { 900: "#000000", "900_44": "#00000044", "900_82": "#00000082" },
        deep_purple: { A400_01: "#6f2cff", A400: "#6f2dff", A700: "#6f00ff" },
        white: { A700: "#ffffff" },
        pink: { 400: "#d15187" },
        purple: { 400: "#a445bb" },
      },
      boxShadow: {
        bs: "0px 0px  1px 0px #6f2cff",
        bs1: "0px 2px  4px 0px #c0c0c07f",
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
