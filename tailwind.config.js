/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    // TODO: Uncomment this part of the code and the import of "defaultTheme" above, and complete TODOs
    // fontFamily: {
    //   // TODO: Add font families
    //   //       Delete "mono" if it isn't needed
    //   sans: ['', ...defaultTheme.fontFamily.sans],
    //   mono: ['', ...defaultTheme.fontFamily.mono],
    // },
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
  },
  plugins: [require('tailwindcss-safe-area')],
};
