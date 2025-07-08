/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          rose:{100:'#fe4d53'},
        },
        
        keyframes: {
          fade: {
            '0%': { opacity:0 },
            '100%': { opacity:1 },
          }
        },
        animation: {
          'fade-in': 'fade 1s linear 1',
        }
        
      }
    },
  plugins: [],
}