'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavbarDestination from './NavbarDestination';

function StickyNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-4 w-full z-50">
            <div className="section-container">
                <nav className={`
                    ${isScrolled ? 'bg-carbon/75 backdrop-blur-md' : 'bg-carbon'}
                    rounded-2xl px-6 py-3
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
                        <ul className='lg:flex hidden gap-8 font-rajdhani font-bold text-lg text-white'>
                            <NavbarDestination destination="/" text="Home" />
                            <NavbarDestination destination="/about-us" text="Inside Dzign-e" />
                            <NavbarDestination destination="/cases" text="Cases" />
                            <NavbarDestination destination="/plataformas" text="Plataformas" />
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default StickyNavbar; 