// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'bg-deep-industrial': '#E0E0E0',     
        'bg-industrial-dark': '#BDBDBD',     
        'bg-industrial-medium': '#9E9E9E',   
        'bg-footer-gray': '#242424',   
        
        'text-white': '#E9E9E9',
        'text-light-concrete': '#1A1A1A',    
        'text-subtle-concrete': '#333333',  
        'accent-steel': '#242424',          
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'loop-scroll-left': 'loop-scroll-left 50s linear infinite',
        'loop-scroll-right': 'loop-scroll-right 50s linear infinite',
        'gradient-bg': 'gradient-bg 15s ease infinite', 
      },
      keyframes: {
        'loop-scroll-left': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'loop-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [],
}