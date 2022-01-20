import { Cross } from '@components/icons';

import HeaderMenu from '../HeaderMenu';

interface RightSidebarLayoutProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const RightSidebarLayout = ({
  children,
  handleClose,
}: RightSidebarLayoutProps) => (
  <div className="relative h-full flex flex-col">
    <header className="sticky top-0 pl-4 py-4 pr-6 flex items-center justify-between bg-white box-border w-full z-10 min-height-[66px]">
      {handleClose && (
        <button
          onClick={handleClose}
          aria-label="Close"
          className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center mr-6"
        >
          <Cross className="h-6 w-6 hover:text-accent-3" />
          <span className="ml-2 text-accent-7 text-sm ">Close</span>
        </button>
      )}
      <HeaderMenu />
    </header>
    {children}
  </div>
);

export default RightSidebarLayout;
