import plugin from "tailwindcss/plugin";
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
      colors: {
        "curious-blue": {
          DEFAULT: "#03A9F4",
          "50": "#F2FDFF",
          "100": "#E6FBFF",
          "200": "#BDF0FC",
          "300": "#96E4FA",
          "400": "#4DCAF7",
          "500": "#03A9F4",
          "600": "#028FDB",
          "700": "#026FB8",
          "800": "#015294",
          "900": "#00376E",
          "950": "#001F47",
        },
        "custom-black": "#0202020",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }: any) {
      addComponents({
        ".text-primary": {
          backgroundColor: theme("colors.curious-blue.700"),
          padding: ".5rem 1rem",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    }),
  ],
};
export default config;
