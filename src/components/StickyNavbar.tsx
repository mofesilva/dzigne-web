'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavbarDestination from './NavbarDestination';
import { HamburgerMenu, CloseCircle } from '@solar-icons/react/ssr';

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
        <div className='fixed w-full z-50 top-0'>
            <nav className={`
                w-full transition-all duration-500 px-6 md:px-12 lg:px-20 2xl:px-32
                ${isScrolled
                    ? 'bg-background py-4'
                    : 'bg-transparent py-8 md:py-10'
                }
            `}>
                <div className='relative flex justify-between items-center'>
                    <Image
                        src='/assets/dzigne-logotype-white-green.png'
                        alt="Dzign-e"
                        className={`w-auto transition-all duration-500 ${isScrolled ? 'h-6' : 'h-10'}`}
                        width={300}
                        height={72}
                        priority
                    />

                    {/* Desktop Menu */}
                    <ul className='lg:flex hidden gap-8 font-rajdhani font-bold text-lg text-white absolute left-1/2 -translate-x-1/2'>
                        <NavbarDestination destination="/" text="HOME" />
                        <NavbarDestination destination="/about-us" text="INSIDE DZIGN-E" />
                        <NavbarDestination destination="/cases" text="CASES" />
                        <NavbarDestination destination="/plataformas" text="PLATAFORMAS" />
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <CloseCircle weight="Outline" size={24} className="text-green-accent" />
                        ) : (
                            <HamburgerMenu weight="Outline" size={24} className="text-green-accent" />
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
    );
}

export default StickyNavbar;
