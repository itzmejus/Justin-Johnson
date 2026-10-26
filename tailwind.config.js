/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light theme: white + red, matching assist.siteselo.com
        "background": "#ffffff",
        "on-background": "#1b1b20",
        "surface": "#ffffff",
        "surface-bright": "#ffffff",
        "surface-container-lowest": "#fffaf0",
        "surface-container-low": "#f8f8f9",
        "surface-container": "#ffffff",
        "surface-container-high": "#fff1f0",
        "surface-container-highest": "#f4f4f5",
        "on-surface": "#1b1b20",
        "on-surface-variant": "#62616d",
        "outline": "#a1a1aa",
        "outline-variant": "#e4e4e7",
        "primary": "#dc2626",
        "primary-dim": "#b91c1c",
        "primary-container": "#b91c1c",
        "on-primary": "#ffffff",
        "secondary": "#c2410c",
        "tertiary": "#b45309",
        "accent": "#fbbf24",
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Inter"],
        label: ["Inter"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "hint-in": {
          from: { opacity: "0", transform: "translateY(8px) scale(0.95)" },
          to: { opacity: "1", transform: "none" },
        },
        "hint-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        caret: "caret 1s step-end infinite",
        "hint-in": "hint-in 0.4s ease-out both",
        "hint-bob": "hint-bob 3s ease-in-out infinite",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
