import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "136": "34rem",
        "144": "36rem",
        "152": "38rem",
      },
      colors: {
        'light-pink': '#f4b4f0',
        'pink': '#db79d4',
        'purple': '#faf8fb',
        'dark-purple': '#876d8f',
      },
    },
  },
  plugins: [],
};
export default config;
