import React from 'react';

import Links from './links';
import Menu from './menu';
import MobileMenuButton from './mobile-menu-button';

const Header = () => (
  <header className="safe-paddings relative z-10 h-16">
    <div className="container grid h-16 grid-cols-[1fr_auto_1fr] items-center justify-between text-sm lg:grid-cols-[0_auto_1fr] md:grid-cols-[1fr_auto]">
      <div className="md:hidden" />
      <MobileMenuButton className="hidden md:block" />
      <Menu className="md:hidden" />
      <Links />
    </div>
  </header>
);

Header.propTypes = {};

export default Header;
