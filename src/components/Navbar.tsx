// src/Navbar.tsx
import React, { useState } from "react";
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
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

                <button className="md:hidden block" onClick={() => setIsOpen(curValue => !curValue)}>Menu</button>

                <ul className={`flex md:flex-row flex-col md:p-0 p-5 gap-4 md:static absolute md:opacity-100 md:left-0 md:bg-transparent ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0' } bg-green-800 md:top-0 top-full md:w-auto w-full duration-300`}>
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
