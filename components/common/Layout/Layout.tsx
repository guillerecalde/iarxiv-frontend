import classNames from 'classnames';

import {
  Navbar,
  RightSidebar as RightSidebarNavigation,
  Sidebar,
} from '@components/common';
import { RightSidebar } from '@components/ui';
import { useUI } from '@hooks';

import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const RightSidebarUI = () => {
  const { closeRightSidebar, displayRightSidebar } = useUI();
  return displayRightSidebar ? (
    <RightSidebar onClose={closeRightSidebar}>
      <RightSidebarNavigation />
    </RightSidebar>
  ) : null;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <div className={classNames(styles.fit, 'flex')}>
      <Sidebar />
      <main>{children}</main>
      <RightSidebarUI />
    </div>
  </>
);

export default Layout;
