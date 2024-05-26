import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        b1: "#27374d",
        b2: "#526D82",
        b3: "#9DB2BF",
        b4: "#DDE6ED",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

module.exports = {
  // extend: {
  //   animation: {
  //     pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  //   },
  //   keyframes: {
  //     pulse: {
  //       '0%, 100%': { opacity: 1 },
  //       '50%': { opacity: 0.5 },
  //     },
  //   },
  // },
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // This will capture all your React component files
    './src/styles/custom.css', // This points to your custom CSS file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

