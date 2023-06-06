/** @type {import('tailwindcss').Config} */
module.exports = {
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
        blue: "#3b49df",
        red: "#df3b3b",
        green: "#3bdf72",
        gray: "#b5bdc4",
        text: "#08090a",
        bg: "#eef0f1",
      },
      fontFamily: {
        sans: ["var(--font-noto)"],
      },
    },
  },
  plugins: [],
};
