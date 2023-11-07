/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // Plugin included by default, so no need for this
  // plugins: [require("@tailwindcss/line-clamp")],
  plugins: [],
};
