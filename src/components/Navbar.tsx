import Image from 'next/image';
import React from 'react';
import NavbarDestination from './NavbarDestination';



function Navbar() {
    return (
        <nav className='flex justify-between items-center h-36'>
            <Image
                src='/assets/dzigne-logotype-white-green.png'
                alt="Dzign-e"
                className="h-8 w-auto"
                width={100}
                height={100}
            />
            <ul className='lg:flex hidden gap-8 font-rajdhani font-bold text-xl '>
                <NavbarDestination destination="/" text="Home" />
                <NavbarDestination destination="/about-us" text="Inside Dzign-e" />
                <NavbarDestination destination="/cases" text="Cases" />
                <NavbarDestination destination="/plataformas" text="Plataformas" />
            </ul>
        </nav>
    )
}

export default Navbar;