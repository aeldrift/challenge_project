/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        cardBorder: `linear-gradient(90deg, white, white), linear-gradient(0deg, ${colors.neutral[300]}, ${colors.neutral[200]})`,
        cardBorderHover: `linear-gradient(90deg, white, white), linear-gradient(0deg, ${colors.neutral[400]}, ${colors.neutral[300]})`,
      },
      boxShadow: {
        short:
          "0px 7px 2px 0px rgba(0, 0, 0, 0), 0px 5px 2px 0px rgba(0, 0, 0, 0.01), 0px 3px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.05)",
        mid: "0px 100px 28px 0px rgba(0, 0, 0, 0), 0px 64px 26px 0px rgba(0, 0, 0, 0.01), 0px 36px 22px 0px rgba(0, 0, 0, 0.03), 0px 16px 16px 0px rgba(0, 0, 0, 0.03), 0px 4px 9px 0px rgba(0, 0, 0, 0.03)",
        long: "0px 360px 101px 0px rgba(0, 0, 0, 0), 0px 231px 92px 0px rgba(0, 0, 0, 0), 0px 130px 78px 0px rgba(0, 0, 0, 0.02),0px 58px 58px 0px rgba(0, 0, 0, 0.03), 0px 14px 32px 0px rgba(0, 0, 0, 0.03)",
      },
      keyframes: {
        rotateSway: {
          "0%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
        pulseGrow: {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.5)" },
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "translate(-50%, -50%) translate(0px, -4px)" }, // Start at top
          "12.5%": { transform: "translate(-50%, -50%) translate(3px, -3px)" }, // Top-right
          "25%": { transform: "translate(-50%, -50%) translate(4px, 0px)" }, // Right
          "37.5%": { transform: "translate(-50%, -50%) translate(3px, 3px)" }, // Bottom-right
          "50%": { transform: "translate(-50%, -50%) translate(0px, 4px)" }, // Bottom
          "62.5%": { transform: "translate(-50%, -50%) translate(-3px, 3px)" }, // Bottom-left
          "75%": { transform: "translate(-50%, -50%) translate(-4px, 0px)" }, // Left
          "87.5%": { transform: "translate(-50%, -50%) translate(-3px, -3px)" }, // Top-left
          "100%": { transform: "translate(-50%, -50%) translate(0px, -4px)" }, // Back to top
        },
      },
      animation: {
        appear: "appear 0.5s ease-out forwards",
        rotateSway: "rotateSway 1.5s ease-in-out infinite",
        pulseGrow: "pulseGrow 2.5s ease-in-out infinite",
        orbit: "orbit 4s linear infinite",
      },
      animationDuration: {
        "2s": "2000ms",
        "3s": "3000ms",
        "4s": "4000ms",
        "5s": "5000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
