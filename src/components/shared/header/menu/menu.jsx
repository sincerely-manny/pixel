'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PropTypes } from 'prop-types';

import Link from 'components/shared/link';

import menuItems from './data/menu-items';
import ChevronDown from './images/chevron_down.inline.svg';

const Menu = ({ className = '' }) => {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root delayDuration="0" className={className}>
      <NavigationMenu.List className="flex gap-10">
        {menuItems.map((item) => (
          <NavigationMenu.Item
            key={item.href}
            data-current={pathname.startsWith(item.href)}
            aria-current={pathname.startsWith(item.href) ? 'step' : false}
            className="relative data-[current=true]:font-semibold data-[current=true]:text-white"
          >
            {item.submenu ? (
              <>
                <NavigationMenu.Trigger className="group/menutrigger flex items-center gap-2">
                  {item.title}{' '}
                  <ChevronDown className="transition-transform group-data-[state=open]/menutrigger:translate-y-1 group-data-[state=open]/menutrigger:rotate-180" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute mt-3 flex w-full min-w-max flex-col gap-2 overflow-hidden rounded bg-black/50 p-4 font-normal shadow-lg"
                  >
                    {item.submenu.map((subitem) => (
                      <NavigationMenu.Link key={subitem.href} asChild>
                        <Link
                          data-current={pathname.startsWith(subitem.href)}
                          aria-current={pathname.startsWith(subitem.href) ? 'step' : false}
                          to={subitem.href}
                          className="text-grey-98 hover:underline data-[current=true]:font-semibold data-[current=true]:text-white"
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
                <Link to={item.href} className="text-grey-98 hover:underline">
                  {item.title}
                </Link>
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
