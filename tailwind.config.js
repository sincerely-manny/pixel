/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

const hexWithOpacity = (hex, opacityValue) => {
  let hexNormalized = hex;
  if (hex.length === 4) {
    hexNormalized = `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  } else if (hex.length === 7) {
    hexNormalized = hex.substring(1, 7);
  }
  const hexOpacityVal = (opacityValue * 256).toString(16).split('.')[0];
  return `#${hexNormalized}${hexOpacityVal.length === 1 ? `0${hexOpacityVal}` : hexOpacityVal}`;
};

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
      xl: '40px',
      '2xl': '100px',
      full: '9999px',
    },
    dropShadow: ({ colors }) => ({
      'heading-white': `0 0 20px ${hexWithOpacity(colors.white, 0.2)}`,
    }),
    boxShadow: (theme) => ({
      'button-violet': `0 0 60px  ${hexWithOpacity(theme('colors.primary.1-hover'), 0.4)}`,
    }),
    extend: {
      backgroundImage: (theme) => ({
        'violet-gradient':
          'linear-gradient(90deg, #EAC8F2 0%, #E6ADEC 32.41%, #D49EE8 71.97%, #CA97E6 100%)',
        'white-gradient-267deg-to-17p': `linear-gradient(267deg, ${theme(
          'colors.white'
        )} 0%, ${hexWithOpacity(theme('colors.white'), 0.17)}  100%)`,
        'white-gradient-122deg-to-50p': `linear-gradient(122deg, ${theme(
          'colors.white'
        )} 0%, ${hexWithOpacity(theme('colors.white'), 0.5)}  100%)`,
      }),
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
