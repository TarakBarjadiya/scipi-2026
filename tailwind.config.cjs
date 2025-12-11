module.exports = {
  content: ["./index.html", "./App.tsx", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', "system-ui", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        accent: {
          primary: "#0f4c81",
          secondary: "#1e7be0",
          light: "#f5f7fb",
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      keyframes: {
        underlinePulse: {
          "0%": { textDecorationColor: "rgba(148,163,184,0.25)" }, // slate-400 low
          "50%": { textDecorationColor: "rgba(148,163,184,1)" }, // full
          "100%": { textDecorationColor: "rgba(148,163,184,0.25)" },
        },
      },
      animation: {
        underlinePulse: "underlinePulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
