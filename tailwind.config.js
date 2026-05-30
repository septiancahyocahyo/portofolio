/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          deepest: '#0A1F3A',
          dark: '#062B43',
          medium: '#044568',
          blue: '#5692A9',
          light: '#9DCDDC',
          pale: '#CDD7DF',
        },
        nebula: {
          deepest: '#210535',
          dark: '#420D4A',
          medium: '#7B347E',
          pink: '#C774B2',
          light: '#F4D5E0',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'Menlo', 'monospace'],
      },
      keyframes: {
        floatAnim: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        orbit1: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        orbit2: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-10px) scale(1.3)', opacity: '0.6' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        progressFill: {
          from: { width: '0%' },
          to: { width: 'var(--target-width)' },
        },
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'float': 'floatAnim 6s ease-in-out infinite',
        'orbit-1': 'orbit1 9s linear infinite',
        'orbit-2': 'orbit2 14s linear infinite',
        'particle': 'floatParticle 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'spin-reverse': 'spinReverse 15s linear infinite',
      },
    },
  },
  plugins: [],
};


