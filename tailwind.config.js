// tailwind.config.js (Tema Terang / Dibalik)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hirarki Background (Sekarang jadi Terang)
        'bg-deep-industrial': '#E0E0E0',     // <-- Dibalik (sebelumnya #1A1A1A)
        'bg-industrial-dark': '#BDBDBD',     // <-- Dibalik (ditukar dengan accent-steel)
        'bg-industrial-medium': '#9E9E9E',   // <-- Dibalik (ditukar dengan text-subtle)

        // Hirarki Teks (Sekarang jadi Gelap)
        'text-light-concrete': '#1A1A1A',    // <-- Dibalik (sebelumnya #E0E0E0)
        'text-subtle-concrete': '#333333',  // <-- Dibalik (ditukar dengan bg-medium)
        'accent-steel': '#242424',          // <-- Dibalik (ditukar dengan bg-dark)
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