/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e8',
        'cream-dark': '#ede7d9',
        navy: '#0f1f3d',
        'navy-mid': '#1a3260',
        gold: '#c9a84c',
        'gold-light': '#fef9ec',
        'text-muted': '#5f5d58',
        'text-main': '#1a1917',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-up-1': 'fadeUp 0.7s ease 0.1s both',
        'fade-up-2': 'fadeUp 0.7s ease 0.2s both',
        'fade-up-3': 'fadeUp 0.7s ease 0.35s both',
        'fade-up-4': 'fadeUp 0.7s ease 0.5s both',
        'fade-in': 'fadeIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}

