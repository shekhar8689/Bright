/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '008080':'#008080',
        '87CEEB':'#87CEEB',
      },
    },
  },
  plugins: [],
}

