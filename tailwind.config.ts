import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#F5F5F5",
        muted: "#A1A1AA",
        border: "rgba(255, 255, 255, 0.08)",
        card: "rgba(255, 255, 255, 0.03)",
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
        }
      },
    },
  },
  plugins: [],
}
export default config
