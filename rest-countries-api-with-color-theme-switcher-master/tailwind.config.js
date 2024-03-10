/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { sans: "Nunito Sans" },
    extend: {
      colors: {
        VeryDarkBlue: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: " hsl(0, 0%, 98%)",
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlueDarkMode: " hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};
// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
