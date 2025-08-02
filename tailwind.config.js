/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tiro: ['"Tiro Devanagari Sanskrit"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FF9933', // Saffron
        secondary: '#138808', // Green
        accent: '#FFD700', // Gold
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0.8' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}