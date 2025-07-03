/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors:{
            primary:'#001948',
            secondary:'#DFA408',
        }
    },
  },
  plugins: [],
};
