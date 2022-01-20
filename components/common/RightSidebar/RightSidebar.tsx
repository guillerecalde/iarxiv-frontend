import Link from 'next/link';

import { NavigationLink, useNavigation, useUI } from '@hooks';

import RightSidebarLayout from '../RightSidebar/RightSidebarLayout';

const RightSidebar = () => {
  const links: Array<NavigationLink> = useNavigation();
  const { closeRightSidebar } = useUI();

  return (
    <RightSidebarLayout handleClose={closeRightSidebar}>
      <div className="px-4 sm:px-6 sm:w-full flex-1 z-20">
        <ul>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.name} className="text-2xl font-bold my-2">
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ul>
      </div>
    </RightSidebarLayout>
  );
};

export default RightSidebar;
