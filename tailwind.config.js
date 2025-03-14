module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,html}",
    "./pages/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      // Uncomment this if you want a custom border color utility:
      /*
      borderColor: {
        border: "var(--color-border)",
      },
      */
    },
  },
  plugins: [
    // If you have tailwindcss-animate installed, you can add it:
    // require("tailwindcss-animate")
  ],
};
