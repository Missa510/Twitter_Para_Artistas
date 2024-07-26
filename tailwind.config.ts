import type { Config } from "tailwindcss";
import animations from "@midudev/tailwind-animations";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nigga': '#000',
        'nigga-secondary': '#101010',
        'niggant': '#efefef',
        'niggant-secondary': '#bfbfba',
      },
      backgroundImage: {
        'banner-fondo': "url('../../public/images/banner_home.webp')",
        'banner-fondo-claro': "url('../../public/images/banner_home_claro.webp')"
      }
    },
  },
  plugins: [animations],
};

export default config;