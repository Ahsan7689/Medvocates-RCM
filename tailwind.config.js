/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primary Dark Luxury Colors
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#0f1111'
        },
        grey: {
          DEFAULT: '#4a4a4a',
          light: '#c9c9c9',
          muted: '#999999'
        },
        gold: {
          DEFAULT: '#c9a961',
          light: '#d4a574',
          dark: '#b8955c'
        },
        brown: '#5d3a3a',
        softgrey: '#f5f5f5',
        success: '#2d8685',
        alert: '#c01530',
        datagrey: '#627c71',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace']
      },
      fontSize: {
        // Desktop Typography Scale
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '0.02em', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', letterSpacing: '0.01em', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'h6': ['16px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'small': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        // Mobile overrides (handled in responsive CSS)
        'h1-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'luxury': '0.03em',
        'normal': '0.01em',
      },
      borderRadius: {
        'sharp': '2px',
        'card': '8px',
        'button': '2px',
      },
      boxShadow: {
        'luxury': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'luxury-hover': '0 12px 32px rgba(0, 0, 0, 0.4)',
        'gold-glow': '0 8px 24px rgba(201, 169, 97, 0.2)',
        'gold-focus': '0 0 0 3px rgba(201, 169, 97, 0.2)',
      },
      transitionDuration: {
        'luxury': '200ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a961 0%, #d4a574 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1a1a1a 0%, #0f1111 100%)',
      }
    },
  },
  plugins: [],
}