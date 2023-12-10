import PropTypes from 'prop-types';
import React from 'react';

import Links from './links';
import Menu from './menu';

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen = false, onBurgerClick }) => (
  <header className="safe-paddings">
    <div className="container flex h-16 items-center justify-between text-sm">
      <div />
      <Menu />
      <Links />
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

export default Header;
