/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    fontFamily:{
      namedis:["name","Pacifico"],
      logodis:["logo","DM Sans"],
    }
  },
  plugins: [],
}

