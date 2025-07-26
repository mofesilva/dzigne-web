'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavbarDestination from './NavbarDestination';

function StickyNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-4 w-full z-50">
            <div className="section-container">
                <nav className={`
                    ${isScrolled ? 'bg-carbon/75 backdrop-blur-md' : 'bg-carbon'}
                    rounded-2xl px-6 py-4
                    w-full transition-all duration-300
                    ${isScrolled ? 'border border-white/20' : 'border border-transparent'}
                `}>
                    <div className='flex justify-between items-center'>
                        <Image
                            src='/assets/dzigne-logotype-white-green.png'
                            alt="Dzign-e"
                            className="h-6 w-auto"
                            width={100}
                            height={100}
                        />

                        {/* Desktop Menu */}
                        <ul className='lg:flex hidden gap-8 font-rajdhani font-bold text-lg text-white'>
                            <NavbarDestination destination="/" text="Home" />
                            <NavbarDestination destination="/about-us" text="Inside Dzign-e" />
                            <NavbarDestination destination="/cases" text="Cases" />
                            <NavbarDestination destination="/plataformas" text="Plataformas" />
                        </ul>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <i className="fas fa-times text-green-accent text-xl"></i>
                            ) : (
                                <i className="fas fa-bars text-green-accent text-xl"></i>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`
                        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                        <div className="pt-4 pb-2 border-t border-white/20 mt-4">
                            <ul className='flex flex-col gap-4 font-rajdhani font-bold text-lg text-white'>
                                <NavbarDestination destination="/" text="Home" onClick={closeMobileMenu} />
                                <NavbarDestination destination="/about-us" text="Inside Dzign-e" onClick={closeMobileMenu} />
                                <NavbarDestination destination="/cases" text="Cases" onClick={closeMobileMenu} />
                                <NavbarDestination destination="/plataformas" text="Plataformas" onClick={closeMobileMenu} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default StickyNavbar; 