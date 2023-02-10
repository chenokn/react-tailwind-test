/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "20px",
    },

    borderRadius: {
      DEFAULT: "4px",
      lg: "0.5rem",
    },

    spacing: {
      0: 0,
      xs: "4px",
      sm: "8px",
      md: "10px",
      lg: "16px",
      xl: "24px",
    },

    boxShadow: {
      card: "0 0.5rem 0.75rem rgba(0,0,0,0.16)",
    },

    extend: {
      colors: {
        cs: {
          midnight: "#253648",
          gallery: "#F7F7F8",
          cta: "#0F81A3",
          "cta-hover": "#66AEC5",
          green: "#15693B",
          "green-bg": "#DDF9EA",
          orange: "#764C25",
          "orange-bg": "#FDEFE2",
          "gray-bg": "#EEEFF1",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Add class if needed safely added on build
    "bg-cs-gallery",
  ],
};
