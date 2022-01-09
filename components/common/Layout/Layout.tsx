import { Navbar } from '@components/common';

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navbar />
    <main>{children}</main>
  </div>
);

export default Layout;
