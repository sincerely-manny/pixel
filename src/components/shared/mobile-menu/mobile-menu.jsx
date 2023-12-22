'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion, useAnimation } from 'framer-motion';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

import Link from 'components/shared/link';
import { mobileMenuOpenAtom } from 'store';

import menuItems from '../header/menu/data/menu-items';

import ChevronDown from './images/chevron_down.inline.svg';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      display: 'none',
      pointerEvents: 'none',
      opacity: 0,
    },
  },
  to: {
    zIndex: 999,
    display: 'block',
    pointerEvents: 'all',
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = () => {
  const controls = useAnimation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isMobileMenuOpen, controls]);

  return (
    <motion.nav
      className="container absolute left-8 right-8 top-16 justify-center rounded bg-white p-8 text-2xl text-black shadow-lg md:left-4 md:right-4"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <NavigationMenu.Root
        delayDuration="0"
        orientation="vertical"
        className="flex items-center justify-center"
      >
        <NavigationMenu.List className="flex flex-col justify-start gap-3">
          {menuItems.map((item) => (
            <NavigationMenu.Item
              key={item.href}
              data-current={pathname.startsWith(item.href)}
              aria-current={pathname.startsWith(item.href) ? 'step' : false}
              className="relative data-[current=true]:font-medium data-[current=true]:text-primary-1"
            >
              {item.submenu ? (
                <>
                  <NavigationMenu.Trigger
                    className="group/menuitem flex items-center gap-2"
                    onPointerMove={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                  >
                    {item.title}{' '}
                    <ChevronDown className="transition-transform group-data-[state=open]/menuitem:translate-y-1 group-data-[state=open]/menuitem:rotate-180" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                    asChild
                    onPointerEnter={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                  >
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.1 }}
                      className="ml-2 mt-2 flex flex-col gap-1 overflow-hidden font-light text-black"
                    >
                      {item.submenu.map((subitem) => (
                        <NavigationMenu.Link key={subitem.href} asChild>
                          <Link
                            to={subitem.href}
                            data-current={pathname.startsWith(subitem.href)}
                            aria-current={pathname.startsWith(subitem.href) ? 'step' : false}
                            className="hover:underline data-[current=true]:font-medium data-[current=true]:text-primary-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.title}
                          </Link>
                        </NavigationMenu.Link>
                      ))}
                    </motion.div>
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link asChild>
                  <Link
                    to={item.href}
                    className="hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </motion.nav>
  );
};

export default MobileMenu;
