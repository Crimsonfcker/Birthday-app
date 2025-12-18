/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        confettiFall: 'confettiFall 3s ease-in-out infinite',
        fireworkParticle: 'fireworkParticle 2s ease-out forwards',
        floatUp: 'floatUp 8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 0.5s ease-out',
        scaleUp: 'scaleUp 0.5s ease-out',
        shake: 'shake 0.5s ease-in-out',
        giftOpen: 'giftOpen 1s ease-out',
      },
      keyframes: {
        confettiFall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
        fireworkParticle: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(0)', opacity: '0' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        giftOpen: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}