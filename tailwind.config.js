/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#A697D8",
        DEFAULT: "#8D7ACD",
        dark: "#725AC1",
      },
      secondary: {
        light: "#50647C",
        DEFAULT: "#161b22",
        dark: "#101419",
      },
      magnolia: {
        light: "#e4dee4",
        DEFAULT: "#e4dee4",
        dark: "#2D242C",
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
