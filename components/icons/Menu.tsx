import { IconProps } from './Icon';

const Menu = ({ className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M 4 6 h 16 v 2 H 4 z m 0 5 h 16 v 2 H 4 z m 9 5 h 7 v 2 H 13 z" />
  </svg>
);

export default Menu;
