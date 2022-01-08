type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <main>{children}</main>
  </div>
);

export default Layout;
