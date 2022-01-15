import classNames from 'classnames';

import { Navbar, Sidebar } from '@components/common';

import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <div className={classNames(styles.fit, 'flex')}>
      <Sidebar />
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
