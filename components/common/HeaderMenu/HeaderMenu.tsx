import { Menu } from '@components/icons';
import { Button } from '@components/ui';
import { useUI } from '@hooks';

const HeaderMenu = () => {
  const { toggleRightSidebar } = useUI();

  return (
    <div className="flex lg:hidden ml-6">
      <Button className="fill-gray-700" onClick={() => toggleRightSidebar()}>
        <Menu />
      </Button>
    </div>
  );
};

export default HeaderMenu;
