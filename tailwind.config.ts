import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nexus-gradient': 'linear-gradient(135deg, #1B4769 0%, #629BB5 50%, #89D8E1 100%)',
        'nexus-glow': 'radial-gradient(circle at 50% 50%, rgba(137, 216, 225, 0.25) 0%, rgba(98, 155, 181, 0.1) 45%, transparent 70%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        nexus: {
          primary: '#1B4769',
          mid: '#629BB5',
          accent: '#89D8E1',
          ice: '#EBF7F9',
          dark: '#0B1C2A',
          glow: '#A8EDF5',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': '#1B4769',
          '2': '#629BB5',
          '3': '#89D8E1',
          '4': '#2A719E',
          '5': '#A8EDF5',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(-1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(18px) rotate(1deg)' },
        },
        'feather-sway': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(10px, -15px) rotate(1.5deg) scale(1.02)' },
          '50%': { transform: 'translate(-8px, -25px) rotate(-1deg) scale(0.98)' },
          '75%': { transform: 'translate(12px, -10px) rotate(2deg) scale(1.01)' },
        },
        'feather-flow': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'feather-sway': 'feather-sway 18s ease-in-out infinite',
        'feather-flow': 'feather-flow 12s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
