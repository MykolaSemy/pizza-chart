/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgGradient:
          "linear-gradient(90deg, rgba(150,249,255,1) 0%, rgba(255,255,255,1) 100%)",
      },
      colors: {
        primary: "rgba(150,249,255,1)",
      },
    },
  },
  plugins: [],
};
