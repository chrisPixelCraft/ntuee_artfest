/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brown: {
          900: "#4a2c2a", // Replace with the actual color value you need
          306: "#4E1F15",
        },
        yellow: {
          306: "#de9262",
          307: "#9c6648",
        },
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"], // ensure you have a fallback font
        microsoft: ["Microsoft JhengHei", "sans-serif"],
      },
      backgroundImage: {
        azalea_horizontal: "url('./assets/ntuee_azalea_festival.png')",
      },
      height: {
        "95vh": "95vh",
        "75vh": "75vh",
        "60vh": "60vh",
      },
    },
  },
  plugins: [],
};
