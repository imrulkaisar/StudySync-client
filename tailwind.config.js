/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5AC1FB",
        primaryShadow: "#398FFD",
        secondary: "#5240FF",
        secondaryShadow: "#7858F9",
        darkOverlay: "rgba(0,0,0,0.7)",
        lightOverlay: "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
        secondary: "'Open Sans', sans-serif",
      },
      backgroundColor: ["even", "odd"],
    },
  },
  plugins: [],
};
