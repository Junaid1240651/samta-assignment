/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        exsm: "300px",
      },
    },
  },
  plugins: [],
};
