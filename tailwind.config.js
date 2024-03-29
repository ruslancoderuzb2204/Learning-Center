/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      "3xl": { max: "1920px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1035px" },
      md: { max: "882px" },
      sm: { max: "740px" },
      xs: { max: "450px" },
    },
  },
  plugins: [],
};
