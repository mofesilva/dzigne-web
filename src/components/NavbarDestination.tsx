
import React from 'react';
import Link from 'next/link';
interface NavbarDestinationProps {
    destination: string;
    text: string;
}

function NavbarDestination({ destination, text }: NavbarDestinationProps) { 
    return (
        <Link href={destination} className='hover:text-green-accent-light transition-colors duration-300 select-none'>
            {text}
        </Link>
    )
}

export default NavbarDestination;