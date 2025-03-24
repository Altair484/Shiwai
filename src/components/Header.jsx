import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`fixed z-10 left-0 top-0 w-full h-header overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'h-screen bg-white' : ''}`}>
            <div className="mx-auto max-w-retina px-4">
                <div className="flex flex-wrap relative justify-between bg-white bg-opacity-90 backdrop-blur-sm">
                    {/* Logo du site */}
                    <div className="w-1/2 lg:w-2/12 lg:ml-1/12 flex items-center h-header transition-all duration-500 ease-in-out order-1 lg:order-2 lg:justify-center">
                        <Link className="font-cormorant text-base uppercase custom-underline" to="/">
                            SHIWAI
                        </Link>
                    </div>

                    {/* Menu trigger (mobile) */}
                    <div className="w-1/2 flex items-center justify-end h-header transition-all duration-500 ease-in-out order-2 lg:hidden">
                        <button
                            className="font-cormorant text-base uppercase custom-underline"
                            onClick={toggleMenu}
                        >
                            MENU
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className={`w-10/12 lg:w-5/12 h-screen-minus-header lg:h-auto pb-32 lg:pb-0 flex justify-center items-end lg:items-center lg:justify-end transition-all duration-500 ease-in-out order-3 ${menuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                        <ul className="flex flex-col lg:flex-row mb-0">
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/about"
                                >
                                    A propos
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/aquarelles"
                                >
                                    GALLERIE
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/croquis"
                                >
                                    Croquis
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/contact"
                                >
                                    contact
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 hidden">
                                <div className="flex justify-center items-center">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" className="flex">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Sélection de langue */}
                    <div className={`w-1/2 lg:w-4/12 flex items-center h-header transition-all duration-500 ease-in-out order-4 lg:order-1 justify-start ${menuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                        <ul className="flex mb-0">
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-dark" href="#">FR</a>
                            </li>
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-gray" href="#">EN</a>
                            </li>
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-gray" href="#">CN</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact email (mobile) */}
                    <div className={`w-1/2 flex items-center justify-end h-header transition-all duration-500 ease-in-out order-5 ${menuOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
                        <a className="custom-underline text-xs uppercase font-inter" href="mailto:shiwai1991@gmail.com">
                            shiwai1991@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;