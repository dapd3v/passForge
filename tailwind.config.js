/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pelorous': {
          '50': '#F0FCFC', 
          '100': '#DFF7F7', 
          '200': '#B4EAED', 
          '300': '#8BDCE0', 
          '400': '#43C5CC', 
          '500': '#08a9b5', 
          '600': '#0791A3', 
          '700': '#046F87', 
          '800': '#02536E', 
          '900': '#023852', 
          '950': '#012036'
        }
      }
    },
  },
  plugins: [],
}

