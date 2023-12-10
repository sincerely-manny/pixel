/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

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
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        2: '#4D66E5',
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
      '3xs': [
        '11px',
        {
          lineHeight: '1em',
          fontWeight: '500',
          letterSpacing: '0.4em',
        },
      ],
      '2xs': [
        '12px',
        {
          lineHeight: '1em',
          letterSpacing: '0.2em',
          fontWeight: '400',
        },
      ],
      xs: [
        '14px',
        {
          lineHeight: '1em',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      ],
      sm: [
        '15px',
        {
          lineHeight: '1em',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '1.25em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.02em',
          fontWeight: '300',
        },
      ],
      '3xl': [
        '76px',
        {
          lineHeight: '1.125em',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
    },
    borderRadius: {
      none: '0',
      sm: '3px',
      DEFAULT: '4px',
      full: '9999px',
      lg: '30px',
      xl: '40px',
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
