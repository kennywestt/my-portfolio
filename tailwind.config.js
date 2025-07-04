/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mono': {
          '50': '#fbfbfb',
          '100': '#f7f7f7',
          '200': '#ebebeb',
          '300': '#dcdcdc',
          '400': '#b2b2b2',
          '500': '#808080',
          '600': '#636363',
          '700': '#515151',
          '800': '#3f3f3f',
          '900': '#2e2e2e',
        }
      },
    },
  },
  plugins: [],
};
