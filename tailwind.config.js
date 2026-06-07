/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // 🎯 Custom 18-column grid (for ItemRows & complex forms)
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
      },

      // 🎨 Color palette — subtle blue tone (same across pages)
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6",   // blue-500
          dark: "#1e40af",    // blue-800
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500
          light: "#94a3b8",   // slate-400
          dark: "#475569",    // slate-600
        },
        accent: {
          DEFAULT: "#10b981", // emerald-500
        },
        danger: {
          DEFAULT: "#ef4444", // red-500
          dark: "#b91c1c",    // red-700
        },
      },

      // 🧭 Box shadow presets for professional UI
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
      },

      // ✨ Smooth transitions
      transitionProperty: {
        spacing: "margin, padding",
        colors: "background-color, border-color, color, fill, stroke",
        shadow: "box-shadow",
        width: "width",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },

      // 📏 Consistent spacing
      spacing: {
        18: "4.5rem",
      },

      // 🌙 Better typography in dark mode
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.primary.light") },
            strong: { color: theme("colors.white") },
            code: { color: theme("colors.secondary.light") },
            h1: {
              background: "linear-gradient(90deg,#4f46e5,#3b82f6)",
              "-webkit-background-clip": "text",
              color: "transparent",
            },
            h2: {
              background: "linear-gradient(90deg,#4f46e5,#3b82f6)",
              "-webkit-background-clip": "text",
              color: "transparent",
            },
          },
        },
      }),

      // 🖌 Gradient text utility
      backgroundImage: {
        "gradient-header": "linear-gradient(90deg, #4f46e5, #3b82f6)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      // 🔹 Custom Button Component
      addComponents({
        ".btn-primary": {
          "@apply bg-primary text-white px-4 py-2 rounded-lg font-medium shadow transition-all duration-300":
            {},
        },
        ".btn-primary:hover": {
          "@apply bg-primary-dark shadow-lg ring-2 ring-primary-light": {},
        },

        ".btn-secondary": {
          "@apply bg-secondary text-white px-4 py-2 rounded-lg font-medium shadow transition-all duration-300":
            {},
        },
        ".btn-secondary:hover": {
          "@apply bg-secondary-dark shadow-md ring-2 ring-secondary": {},
        },

        ".btn-danger": {
          "@apply bg-danger text-white px-4 py-2 rounded-lg font-medium shadow transition-all duration-300":
            {},
        },
        ".btn-danger:hover": {
          "@apply bg-danger-dark shadow-md ring-2 ring-danger": {},
        },

        // 🔹 Scrollable card panel
        ".card-panel": {
          "@apply h-96 overflow-y-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6":
            {},
        },

        // 🔹 Card component
        ".card": {
          "@apply bg-white p-4 rounded shadow hover:shadow-lg transition-all dark:bg-gray-800 dark:text-gray-100":
            {},
        },
      });
    },
  ],
};
