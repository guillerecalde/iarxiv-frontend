import Link from 'next/link';

import { Collection, History, Home, Wrench } from '@components/icons';

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

const Sidebar = () => (
  <div className="flex flex-col w-48 overflow-x-hidden bg-white">
    <div className="flex flex-col mt-3">
      {LINKS.map((link) => (
        <Link href={link.href} key={link.name}>
          <a className="flex items-center px-6 h-12 mt-2 rounded text-gray-700 hover:text-sky-600 hover:fill-sky-600">
            <span className="min-w-[1.5rem] w-6 h-6">{link.icon}</span>
            <span className="ml-2 text-sm font-medium">{link.name}</span>
          </a>
        </Link>
      ))}
    </div>
	</div>
);

export default Sidebar;
