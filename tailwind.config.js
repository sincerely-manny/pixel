/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

const hexWithOpacity = require('./src/utils/hexWithOpacity');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
      heading: ['var(--font-poppins)', ...defaultTheme.fontFamily.serif],
      serif: ['var(--font-editorial-new)', ...defaultTheme.fontFamily.serif],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0E0A0F',
      white: '#FFFFFF',
      primary: {
        1: '#9966FF',
        '1-hover': '#BB99FF',
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        1: '#40BFAA',
        2: '#4D66E5',
        3: '#F04242',
      },
      grey: {
        94: '#F0EEF1',
        98: '#FAF9FA',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
    fontSize: {
      '4xs': [
        '0.625rem',
        {
          lineHeight: '1em',
          fontWeight: 500,
          letterSpacing: '0.04em',
        },
      ],
      '3xs': [
        '0.6875rem',
        {
          lineHeight: '1em',
          fontWeight: '500',
          letterSpacing: '0.04em',
        },
      ],
      '2xs': [
        '0.75rem',
        {
          lineHeight: '1em',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      xs: [
        '0.875rem',
        {
          lineHeight: '1em',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      ],
      sm: [
        '0.9375rem',
        {
          lineHeight: '1em',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.25em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      '2xl': [
        '1.375rem',
        {
          lineHeight: '1em',
        },
      ],
      '2.4xl': [
        '3rem',
        {
          lineHeight: '1.125em',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      '2.5xl': [
        '3.75rem',
        {
          lineHeight: '1.125em',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '4.75rem',
        {
          lineHeight: '1.125em',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      '3.5xl': [
        '7rem',
        {
          lineHeight: '1em',
          letterSpacing: '-0.04em',
          fontWeight: '200',
        },
      ],
      '4xl': [
        '8.5rem',
        {
          lineHeight: '1em',
          letterSpacing: '-0.04em',
          fontWeight: '200',
        },
      ],
    },
    borderRadius: {
      none: '0',
      sm: '3px',
      DEFAULT: '4px',
      xl: '40px',
      '2xl': '100px',
      full: '9999px',
    },
    dropShadow: ({ colors }) => ({
      'heading-white': `0 0 20px ${hexWithOpacity(colors.white, 0.2)}`,
    }),
    boxShadow: (theme) => ({
      'button-violet': `0 0 60px  ${hexWithOpacity(theme('colors.primary.1-hover'), 0.4)}`,
      xl: `0 20px 30px ${hexWithOpacity(theme('colors.black'), 0.2)}`,
      'xl-left': `-40px 20px 30px -40px ${hexWithOpacity(theme('colors.black'), 0.6)}`,
      'xl-left-light': `-40px 20px 30px -40px ${hexWithOpacity(theme('colors.black'), 0.2)}`,
      'xl-right': `40px 20px 30px -40px ${hexWithOpacity(theme('colors.black'), 0.6)}`,
      'xl-right-light': `40px 20px 30px -40px ${hexWithOpacity(theme('colors.black'), 0.2)}`,
      '2xl': `0 20px 80px 60px ${hexWithOpacity(theme('colors.black'), 0.7)}`,
    }),
    extend: {
      backgroundImage: (theme) => ({
        'violet-gradient':
          'linear-gradient(90deg, #EAC8F2 0%, #E6ADEC 32.41%, #D49EE8 71.97%, #CA97E6 100%)',
        'violet-radial': `radial-gradient(circle, ${theme(
          'colors.primary.1'
        )} 0%, transparent 75%)`,
        'violet-hover-radial': `radial-gradient(circle, ${theme(
          'colors.primary.1-hover'
        )} 0%, transparent 75%)`,
        'white-gradient-267deg-to-17p': `linear-gradient(
          267deg, ${theme('colors.white')} 0%, 
          ${hexWithOpacity(theme('colors.white'), 0.17)}  100%)`,
        'white-gradient-122deg-to-50p': `linear-gradient(
          122deg, ${theme('colors.white')} 0%, 
          ${hexWithOpacity(theme('colors.white'), 0.5)}  100%)`,
        'violet-gradient-2': `linear-gradient(
          135deg, #D383FC 21.78%, ${theme('colors.primary.2')} 39.25%,
          ${hexWithOpacity(theme('colors.primary.2'), 0.2)} 86.85%)`,
      }),
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0)' },
        },
        shakeX: {
          'from, to': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        shakeX: 'shakeX 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
