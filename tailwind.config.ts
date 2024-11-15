import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.1" },
          "50%": { transform: "scale(1.2)", opacity: "0.3" },
        },
      },
      animation: {
        "gradient-flow": "gradientFlow 8s ease infinite",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
