type NavbarRoot = {
  children: React.ReactNode,
};

const NavbarRoot = ({ children }: NavbarRoot) => (
  <div className="sticky top-0 bg-primary z-40 transition-all duration-150">
    {children}
  </div>
);

export default NavbarRoot;
