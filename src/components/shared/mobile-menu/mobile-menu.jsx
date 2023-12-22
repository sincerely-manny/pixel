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
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = () => {
  const controls = useAnimation();
  // eslint-disable-next-line no-unused-vars
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
      // TODO: Add "top" value equal to the header's height so mobile menu would be positioned right after the header, e.g. "top-20"
      //       Check out this screenshot for better understanding — https://user-images.githubusercontent.com/20713191/144218387-afd19e0c-c33d-4c8f-8cfe-b6e6214d236c.png
      // TODO: Add background color, e.g. "bg-white"
      // className="rounded-md absolute left-8 right-8 z-[-1] hidden w-full px-8 pb-7 pt-4 lg:block md:left-4 md:right-4"
      className="absolute bottom-16 left-8 right-8 top-16 z-[-1] rounded-xl bg-white px-8 pb-7 pt-4 text-black md:left-4 md:right-4"
      initial="from"
      animate={controls}
      variants={variants}
      // TODO: Replace the color to the one from the color palette
      style={{ boxShadow: '0px 10px 20px rgba(26, 26, 26, 0.4)' }}
    >
      <NavigationMenu.Root delayDuration="0" orientation="vertical">
        <NavigationMenu.List className="flex flex-col gap-3">
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
                      className="ml-2 mt-2 flex flex-col gap-1 overflow-hidden font-normal text-black"
                    >
                      {item.submenu.map((subitem) => (
                        <NavigationMenu.Link key={subitem.href} asChild>
                          <Link
                            to={subitem.href}
                            data-current={pathname.startsWith(subitem.href)}
                            aria-current={pathname.startsWith(subitem.href) ? 'step' : false}
                            className="hover:underline data-[current=true]:font-medium data-[current=true]:text-primary-1"
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
                  <Link to={item.href} className="hover:underline">
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
