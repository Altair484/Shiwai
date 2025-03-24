import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="flex py-3 justify-center">
                <div className="flex justify-center flex-wrap">
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/about"
                    >
                        A propos
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/aquarelles"
                    >
                        GALLERIe
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/croquis"
                    >
                        CROQUIS
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/contact"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;