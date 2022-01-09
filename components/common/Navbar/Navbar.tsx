import Link from 'next/head';

import { Logo } from '@components/ui';

import NavbarRoot from './NavbarRoot';

const Navbar = () => (
  <NavbarRoot>
    <div className="relative flex flex-row justify-between py-4 md:py-4">
      <Logo />
    </div>
  </NavbarRoot>
);

export default Navbar;
