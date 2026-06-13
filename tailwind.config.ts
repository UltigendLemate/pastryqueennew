import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cream editorial patisserie palette
        paper: "#FBF8F1",
        ivory: "#F6F1E7",
        sand: "#EFE6D4",
        bisque: "#E7D9C0",
        pine: {
          DEFAULT: "#2A3B3B",
          deep: "#1B2827",
          soft: "#3D5251",
        },
        teal: {
          DEFAULT: "#689A9B",
          light: "#8FB6B7",
          deep: "#4E7B7C",
        },
        gold: {
          DEFAULT: "#B8894A",
          light: "#D9B779",
          deep: "#9A6E34",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.32em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "30%": { transform: "translate(3%,-8%)" },
          "50%": { transform: "translate(-4%,6%)" },
          "70%": { transform: "translate(6%,3%)" },
          "90%": { transform: "translate(-3%,5%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grain-shift": "grain-shift 8s steps(6) infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
