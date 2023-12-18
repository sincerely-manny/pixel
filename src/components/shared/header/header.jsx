'use client';

import { useAtom } from 'jotai';
import React from 'react';

import { mobileMenuOpenAtom } from 'store';

import Links from './links';
import Menu from './menu';

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isMobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom);

  return (
    <header className="safe-paddings relative z-10">
      <div className="container grid h-16 grid-cols-[1fr_auto_1fr] items-center justify-between text-sm">
        <div />
        <Menu />
        <Links />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
