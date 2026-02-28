/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "32px",
        "2xl": "32px",
      },
    },
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",

        "text-primary": "#0F172A",
        "text-secondary": "#334155",
        "text-muted": "#64748B",

        border: "#E2E8F0",
        "bg-light": "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.7" }],
        lg: ["18px", { lineHeight: "1.7" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["30px", { lineHeight: "1.3" }],
        "4xl": ["36px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.1" }],
      },

      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
        6: "32px",
        7: "48px",
        8: "64px",
        9: "80px",
        10: "96px",
      },

      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.08)",
      },

      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
