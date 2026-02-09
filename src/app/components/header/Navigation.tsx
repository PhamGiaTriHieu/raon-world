'use client';
import {cn} from '@/lib/utils';
import {usePathname, useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const getInitialActiveNav = () => {
    if (pathname === '/contactUs') return null;

    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        return hash.charAt(0).toUpperCase() + hash.slice(1);
      }
    }

    return 'Home';
  };

  const [activeNav, setActiveNav] = useState<string | null>(
    getInitialActiveNav,
  );
  const shouldShowActive = pathname !== '/contactUs';

  useEffect(() => {
    const updateActiveNav = () => {
      if (pathname !== '/contactUs') {
        const hash = window.location.hash.substring(1);
        if (hash) {
          const title = hash.charAt(0).toUpperCase() + hash.slice(1);
          setActiveNav(title);
        } else {
          setActiveNav('Home');
        }
      } else {
        setActiveNav(null);
      }
    };

    updateActiveNav();

    const handleHashChange = () => {
      if (pathname !== '/contactUs') {
        const hash = window.location.hash.substring(1);
        if (hash) {
          const title = hash.charAt(0).toUpperCase() + hash.slice(1);
          setActiveNav(title);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  const handleClickNavItem = (title: string) => {
    setActiveNav(title);

    const sectionId = title.toLowerCase();

    if (pathname === '/contactUs') {
      if (title === 'Home') {
        router.push('/');
      } else {
        router.push(`/#${sectionId}`);
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }
  };

  return (
    <nav>
      <ul className="flex gap-8">
        <NavItem
          title="Home"
          isActive={shouldShowActive && activeNav === 'Home'}
          onClick={() => handleClickNavItem('Home')}
        />
        <NavItem
          title="Solutions"
          isActive={shouldShowActive && activeNav === 'Solutions'}
          onClick={() => handleClickNavItem('Solutions')}
        />
        <NavItem
          title="Company"
          isActive={shouldShowActive && activeNav === 'Company'}
          onClick={() => handleClickNavItem('Company')}
        />
        <NavItem
          title="Feature"
          isActive={shouldShowActive && activeNav === 'Feature'}
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
