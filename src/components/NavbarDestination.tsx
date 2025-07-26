import React from 'react';
import Link from 'next/link';

interface NavbarDestinationProps {
    destination: string;
    text: string;
    onClick?: () => void;
}

function NavbarDestination({ destination, text, onClick }: NavbarDestinationProps) {
    return (
        <Link
            href={destination}
            className='hover:text-green-accent-light transition-colors duration-300 select-none'
            onClick={onClick}
        >
            {text}
        </Link>
    )
}

export default NavbarDestination;