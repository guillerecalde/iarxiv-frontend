import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { ChevronsLeft, ChevronsRight, Collection, History, Home, Wrench } from '@components/icons';
import { Button } from '@components/ui';
interface SidebarLink {
  name: string,
  href: string,
  icon: JSX.Element,
};

const LINKS: Array<SidebarLink> = [
  { name: 'Home', href: '/', icon: <Home /> },
  { name: 'Collections', href: '/', icon: <Collection /> },
  { name: 'History', href: '/', icon: <History /> },
  { name: 'Settings', href: '/', icon: <Wrench /> },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarClasses = classNames(
    'relative overflow-x-hidden bg-white transition-all ease duration-500',
    {
      'w-48': !collapsed,
      'w-[4.5rem]': collapsed,
    },
  );

  const linkTextClasses = classNames(
    'text-sm font-medium transition-opacity ease duration-500 ml-2',
    {
      'opacity-0': collapsed,
    }
  );

  const collapseButtonClasses = classNames(
    'absolute right-0 bottom-0 text-gray-700 mb-4 mr-4 hover:text-sky-600 transition-transform duration-500',
    {
      'rotate-180': collapsed,
      'rotate-0': !collapsed,
    },
  );

  return (
    <div className={sidebarClasses}>
      <nav>
        <ul className="flex flex-col mt-3">
          <li>
            {LINKS.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className="flex items-center pl-6 h-12 mt-2 rounded text-gray-700 hover:text-sky-600 hover:fill-sky-600">
                  <span className="min-w-[1.5rem] w-6 h-6">{link.icon}</span>
                  <span className={linkTextClasses}>{link.name}</span>
                </a>
              </Link>
            ))}

          </li>
        </ul>
      </nav>
      <Button
        variant="circle"
        className={collapseButtonClasses}
        onClick={() => setCollapsed(!collapsed)}
      >
        <ChevronsLeft />
      </Button>
    </div>
  );
};

export default Sidebar;
