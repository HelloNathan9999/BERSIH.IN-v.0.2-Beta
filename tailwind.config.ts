import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // warna utama khas BERSIH.IN
        primary: {
          DEFAULT: "#16A34A", // hijau daun
          foreground: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF"
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280"
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
