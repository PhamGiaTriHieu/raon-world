'use client';
import {cn} from '@/lib/utils';
import {useState} from 'react';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('Home');

  const handleClickNavItem = (title: string) => {
    console.log(`${title} clicked`);
    setActiveNav(title);
  };
  return (
    <nav>
      <ul className="flex gap-8">
        <NavItem
          title="Home"
          isActive={activeNav === 'Home'}
          onClick={() => handleClickNavItem('Home')}
        />
        <NavItem
          title="Solutions"
          isActive={activeNav === 'Solutions'}
          onClick={() => handleClickNavItem('Solutions')}
        />
        <NavItem
          title="Company"
          isActive={activeNav === 'Company'}
          onClick={() => handleClickNavItem('Company')}
        />
        <NavItem
          title="Feature"
          isActive={activeNav === 'Feature'}
          onClick={() => handleClickNavItem('Feature')}
        />
      </ul>
    </nav>
  );
};

export default Navigation;

interface INavItemProps {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}
const NavItem = ({title, isActive, onClick}: INavItemProps) => {
  return (
    <li
      className={cn(
        'text-body-16 font-medium text-black-5 cursor-pointer select-none',
        isActive && 'text-primary',
      )}
      onClick={onClick}
    >
      {title}
    </li>
  );
};
