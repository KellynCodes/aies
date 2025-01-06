/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "Inter"],
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          400: "#FBFDF8",
          600: "#FFF8F9",
        },
        color: "#F6F7F9",

        primary: {
          DEFAULT: "#1CBD5D",
          25: "##E6F2EA",
          100: "##B3D8C0",
          200: "#99CBAB",
          300: "#007D2D",
          400: "#007129",
          500: "#12B768",
          600: "#007129",
          700: "#00581F",
          800: "#003212",
          880: "#003627",
          900: "#001909",
          dark: "#07352A",
        },
        "accent-black": "#24292C",
        error: {
          DEFAULT: "",
          25: "#FFFBFA",
          200: "#FDA29B",
          300: "#FDA29B",
          400: "#B42318",
          500: "#FE293B",
          600: "#D92D20",
          700: "#B42318",
        },
        gray: {
          DEFAULT: "",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#A9B5CB",
          500: "#667185",
          600: "#475367",
          700: "#344054",
          900: "#1C2B3F",
        },
        warning: {
          25: "#FFFCF5",
          300: "#FEC84B",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
        },
        success: {
          500: "#17B26A",
        },
      },
      fontSize: {
        "2xs": "10px",
      },
      fontWeight: {
        500: "500",
      },
      borderRadius: {
        DEFAULT: "8px",
        xs: "4px",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        box: "var(--box_shadow)",
        "box-lg": "var(--box_shadow-lg)",
        "white-shadow": "var(--white_shadow)",
        "input-box": "var(--input_box_shadow)",
        "input-error-box": "var(--input_box_error_shadow)",
        "focused-box": "var(--focused_box_shadow)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
