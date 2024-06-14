import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_bg: '#1E2336',
        dark_border: '#1B1E2E',
        about_me_green: '#7ee787',
        about_me_yellow: '#eab308',
        work_experience_orange: '#ffa28b',
        skills_purple: '#939aff',
        my_work_yellow: '#ffdc8b',
        white: '#FFF',
        'red-500': '#E51400',
        'gray-200': '#292E42',
        'gray-300': '#36394A',
        'gray-500': '#A9B1D6',
        'blue-100': '#3DB9C9',
        'blue-300': '#3D59A1',
        'blue-800': '#282E44',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
export default config;
