import { Container, Logo } from '@components/ui';

import NavbarRoot from './NavbarRoot';

const Navbar = () => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-4 md:py-4">
        <Logo />
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
