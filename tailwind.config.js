/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        hideModal: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-1000px)" },
        },
        showModal: {
          "0%": { transform: "translateY(-1000px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        hideModal: "hideModal 0.75s ease",
        showModal: "showModal 0.75s ease",
      },
    },
  },
  plugins: [],
};
