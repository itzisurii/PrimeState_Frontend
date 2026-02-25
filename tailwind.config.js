module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}", // Angular templates
  ],
  theme: {
    extend: {
      colors: {
        primary: "#75269d",
        "primary-dark": "#5a1d7a",
        "primary-hover": "#5e1e7d",
        "sidebar-bg": "#120a17",
        "sidebar-surface": "#1e1226",
        "background-light": "#f8f9fc",
        "background-dark": "#0f0f11",
        "card-bg": "#ffffff",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(117, 38, 157, 0.3)",
      },
    },
  },
  plugins: [],
};