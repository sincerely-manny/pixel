import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';

import 'styles/main.css';

const LayoutMain = ({ children }) => (
  <>
    <SEO />
    <Header />
    <main className="container mt-24 md:mt-16">{children}</main>
    <Footer />
    <MobileMenu />
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
