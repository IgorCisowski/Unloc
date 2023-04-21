const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/pages/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      green: {
        DEFAULT: "#19ac19",
      },
      orange: {
        DEFAULT: "#ea683c",
      },
      pinkred: {
        200: "#FC005B",
        300: "#D20F6B",
        400: "#A8186B",
        500: "#7E1B5F",
        600: "#79114D",
        700: "#75083B",
        800: "#700028",
        900: "#E0097E",
      },
      violet: {
        200: "#2D1A5140",
        400: "#210D48",
        450: "#210D4880",
      },
      neutral: {
        100: "rgb(var(--color-neutral-100) / <alpha-value>)",
        300: "rgb(var(--color-neutral-300) / <alpha-value>)",
        400: "rgb(var(--color-neutral-400) / <alpha-value>)",
        500: "rgb(var(--color-neutral-500) / <alpha-value>)",
        600: "rgb(var(--color-neutral-600) / <alpha-value>)",
        700: "rgb(var(--color-neutral-700) / <alpha-value>)",
        800: "rgb(var(--color-neutral-800) / <alpha-value>)",
        900: "rgb(var(--color-neutral-900) / <alpha-value>)",
        950: "rgb(var(--color-neutral-950) / <alpha-value>)",
      },
    }),
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      screens: {
        "2xl": "1477px",
      },
      container: {
        "2xl": "1477px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      colors: {
        primary: {
          DEFAULT: "#e0097f",
          dark: "#ad1468",
          darker: "#8e1a59",
        },
        secondary: {
          DEFAULT: "#2e13d2",
          dark: "#24119a",
        },
      },
      fontFamily: {
        sans: ["var(--redhat-display-font)", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        mobileLayout: "1fr auto",
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        "range-filter": "auto 1fr auto",
      },
      backgroundImage: {
        "gradient-15": "linear-gradient(15deg, var(--tw-gradient-stops))",
        "gradient-200": "linear-gradient(200deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

module.exports = config;
