// tailwind.config.js
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
        "gradient-landing": "linear-gradient(180deg, #9B30FF 0%, #37006A 33.33%, #9B30FF 75%, #FFFFFF 100%)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '17.33px',
        '7xl': '5rem',
      },
      lineHeight: {
        'custom-line': '13px',
        '80': '80px',
      },
    },
  },
  plugins: [],
};

export default config;
