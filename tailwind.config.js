/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova"],
        mono: ["Input Mono Narrow"],
      },
      colors: {
        gray: {
          300: "#E6E9F0",
          400: "#D7DCE9",
          900: "#0D0629",
        },
      },
    },
  },
  plugins: [],
};
