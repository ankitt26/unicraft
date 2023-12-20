/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        button: ["2px 4px 10px rgba(202.73, 202.73, 202.73, 0.20) inset"],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(calc(-384px * 4))" },
        },
      },
    },
  },
  plugins: [],
};
