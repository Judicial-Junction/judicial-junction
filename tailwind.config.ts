import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {},
          colors: {
            default: "#141E46",
            primary: "#F9F5F6",
            secondary: "#141E46",
            warning: "#BB2525",
          },
        },
        dark: {
          layout: {},
          colors: {
            default: "#D5CEA3",
            primary: "#2E2013",
            secondary: "#D5CEA3",
            warning: "#E5E5CB",
          },
        },
      },
    }),
  ],
};

export default config;
