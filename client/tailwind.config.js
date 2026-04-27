/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Лавандовый и персиковый
        lavender: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e7dcff',
          300: '#d3c1ff',
          400: '#b89eff',
          500: '#a085f0',
          600: '#8a6ee0'
        },
        peach: {
          50: '#fff7f3',
          100: '#ffeee5',
          200: '#ffd8c4',
          300: '#ffbfa1',
          400: '#ffa07e',
          500: '#ff8966',
          600: '#f06b48'
        },
        cream: '#fff9f5'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
