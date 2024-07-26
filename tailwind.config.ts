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
        'svg-nigga': 'fill: #101010',
        'svg-niggant': 'fill: #efefef',
        'nigga': '#101010',
        'nigga-secondary': '#202020',
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