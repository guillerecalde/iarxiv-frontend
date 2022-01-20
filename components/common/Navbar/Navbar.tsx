import { Container, Logo } from '@components/ui';

import HeaderMenu from '../HeaderMenu';
import NavbarRoot from './NavbarRoot';

const Navbar = () => {
  return (
    <NavbarRoot>
      <Container>
        <div className="relative flex flex-row justify-between py-4 md:py-4">
          <div className="flex items-center flex-1">
            <Logo />
          </div>
          <div className="flex items-center justify-end flex-1 space-x-8">
            <HeaderMenu />
          </div>
        </div>
      </Container>
    </NavbarRoot>
  );
};

export default Navbar;
