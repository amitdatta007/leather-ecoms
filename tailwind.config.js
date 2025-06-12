/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "primary-muted": "var(--primary-muted)",
        "text-primary": "var(--text-primary)",
        "paragraph": "var(--paragraph)",
        "text-muted-100": "var(--text-muted-100)",
        "text-muted-50": "var(--text-muted-50)",
        "text-muted-25": "var(--text-muted-25)", 
      },
    },
  },
  plugins: [],
};
