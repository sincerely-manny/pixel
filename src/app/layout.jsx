// eslint-disable-next-line camelcase
import { Roboto_Flex, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import LayoutMain from 'layouts/layout-main';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
  display: 'swap',
  variable: '--font-poppins',
});
const editorialNew = localFont({
  src: '../styles/fonts/EditorialNew-Regular.woff2',
  variable: '--font-editorial-new',
  display: 'swap',
});

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en" className={`${roboto.variable} ${poppins.variable} ${editorialNew.variable}`}>
    <body>
      <LayoutMain>{children}</LayoutMain>
    </body>
  </html>
);

export default RootLayout;
