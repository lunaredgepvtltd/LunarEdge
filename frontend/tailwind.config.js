const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // or 'media' if you want to rely on device preference only
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        service: "0 3px 8px rgba(0, 0, 0, 0.24)",
      },
      animation: {
        "spin-slow": "spin 80s linear infinite", // 8 seconds for slow spin
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      textShadow: {
        default: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.7)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.8)",
        "md-red": "2px 2px 4px rgba(255, 0, 0, 0.5)",
        "sm-white": "1px 1px 2px rgba(255, 255, 255, 0.7)",
        "md-white": "2px 2px 4px rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #fff7ad, #ffa9f9)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme, e }) {
      // Text Shadow Utilities
      const textShadow = theme("textShadow");
      const textShadowUtilities = Object.keys(textShadow).map((key) => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadow[key],
          },
        };
      });
      addUtilities(textShadowUtilities, ["responsive", "hover"]);

      // Grayscale Utilities
      addUtilities(
        {
          ".grayscale-100": {
            filter: "grayscale(100%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
