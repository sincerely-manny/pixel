import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';

import Link from 'components/shared/link';

import menuItems from './data/menu-items';
import ChevronDown from './images/chevron_down.inline.svg';

const Menu = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root delayDuration="0">
      <NavigationMenu.List className="flex gap-10">
        {menuItems.map((item) => (
          <NavigationMenu.Item
            key={item.href}
            data-current={pathname.startsWith(item.href)}
            aria-current={pathname.startsWith(item.href) ? 'step' : false}
          >
            {item.submenu ? (
              <>
                <NavigationMenu.Trigger className="group/menuitem flex items-center gap-2">
                  {item.title}{' '}
                  <ChevronDown className="transition-transform group-data-[state=open]/menuitem:translate-y-1 group-data-[state=open]/menuitem:rotate-180" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute flex min-w-max flex-col gap-2 pt-3">
                  {item.submenu.map((subitem) => (
                    <NavigationMenu.Link key={subitem.href} asChild>
                      <Link to={subitem.href}>{subitem.title}</Link>
                    </NavigationMenu.Link>
                  ))}
                </NavigationMenu.Content>
              </>
            ) : (
              <NavigationMenu.Link asChild>
                <Link to={item.href} className="text-grey-98">
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

export default Menu;
