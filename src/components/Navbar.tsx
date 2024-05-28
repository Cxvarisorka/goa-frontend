// src/Navbar.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  path: string;
  t: (key: string) => string;
}

const NavItem: React.FC<NavItemProps> = ({ text, path, t }) => {
  return (
    <li>
      <Link to={path} className="text-white hover:text-gray-300">
        {t(text)}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
    const navItems = [
        { text: 'home', path: '/' },
        { text: 'aboutus', path: '/aboutus' },
        { text: 'services', path: '/services' },
        { text: 'contactus', path: '/contactus' },
        { text: 'profile', path: '/profile' }
    ];

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="bg-green-600 text-white shadow-md">
        <nav className="2xl:container relative mx-auto py-4 px-3 text-sm lg:text-base flex justify-between items-center">
            <h1 className="font-bold text-xl lg:text-4xl">
            <Link to={'/'}>Goa</Link>
            </h1>
            <ul className="flex gap-4">
            {navItems.map(navObj => <NavItem t={t} key={navObj.text} {...navObj} />)}
            </ul>
            <div className="flex gap-2">
            <button 
                onClick={() => changeLanguage('en')}>
                English
            </button>
            <button 
                onClick={() => changeLanguage('ka')}>
                Georgian
            </button>
            </div>
        </nav>
        </header>
    );
};

export default Navbar;
