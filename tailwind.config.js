/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          "slide-up": "slideUp 1s ease-out",
        },
        keyframes: {
          slideUp: {
            "0%": {
              transform: "translateY(50px)",
              opacity: 0,
            },
            "100%": {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        },
      },
    },
    plugins: [],
  };