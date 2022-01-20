import {
  ChevronsLeft,
  Collection,
  History,
  Home,
  Wrench,
} from '@components/icons';

export interface NavigationLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const useNavigation = (): Array<NavigationLink> => {
  return [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'Collections', href: '/', icon: <Collection /> },
    { name: 'History', href: '/', icon: <History /> },
    { name: 'Settings', href: '/', icon: <Wrench /> },
  ];
};
