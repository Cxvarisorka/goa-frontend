// src/Navbar.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

// Flags
import geoFlag from "../assets/flags/georgia.png";
import engFlag from "../assets/flags/united-kingdom.png";



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

    const contactInfo = [
        {
            text: "Georgia, Tbilisi",
            icon: <MdLocationOn />
        },
        {
            text: "Email: goalorientadze@gmail.com",
            icon: <MdEmail />,
            display: true         
        },
        {
            text: "(+995) 555 277 335",
            icon: <IoCall />
        
        },
    ]

    const socialLinks = [
        {
           icon: <MdFacebook />,
           href: "https://www.facebook.com/nika11keshelava"
        },
        {
            icon: <FaYoutube />,
            href: "https://www.youtube.com/@Goal_Oriented_Academy__GOA"
        }   
    ]

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="shadow-md text-white">
            <div className="bg-primary-black">
                <div className="2xl:container relative mx-auto px-3 py-3 text-sm lg:text-base flex md:justify-between justify-center items-center">
                    <div className="flex gap-5 sm:text-left text-center sm:items-start items-center">
                        {
                            contactInfo.map(obj => {
                                return (
                                    <div key={obj.text} className={` items-center gap-2 ${obj.display ? 'flex' : 'sm:flex hidden'}`}>
                                        <p className="text-xl">{obj.icon}</p>
                                        <p>{obj.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="md:flex hidden gap-5">
                        {
                            socialLinks.map((obj,index) => {
                                return (
                                    <a key={index} target="_blank" href={obj.href} className="text-xl">{obj.icon}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <nav className="bg-primary-green">
                <div className="2xl:container relative mx-auto py-4 px-3 2xl:text-xl xl:text-xl lg:text-lg sm:text-base flex justify-between items-center z-50">
                    <h1 className="font-bold text-3xl lg:text-5xl">
                        <Link to={'/'}>Goa</Link>
                    </h1>

                    <button className="md:hidden block text-3xl" onClick={() => setIsOpen(curValue => !curValue)}>{!isOpen ? <MdMenu /> : <IoMdClose />}</button>

                    <ul className={`flex md:flex-row flex-col md:p-0 p-5 gap-4 md:static absolute md:opacity-100 md:left-0 md:bg-transparent ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0' } bg-[#1e4022] md:top-0 top-full md:w-auto w-full duration-300`}>
                        {navItems.map(navObj => <NavItem t={t} key={navObj.text} {...navObj} />)}
                    </ul>

                    <div className="flex gap-1">
                        <img className="sm:w-11 w-7 cursor-pointer" src={engFlag} onClick={() => changeLanguage('en')} alt="United-Kingdom Flag" />
                        <img className="sm:w-11 w-7 cursor-pointer" src={geoFlag} onClick={() => changeLanguage('ka')} alt="Georgian Flag" />
                    </div>
                </div>
                
            </nav>
        </header>
    );
};

export default Navbar;
