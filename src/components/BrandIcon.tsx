import React from 'react';
import Image from 'next/image';

interface BrandIconProps {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
}

export default function BrandIcon({ name, size = 24, className = '', alt }: BrandIconProps) {
    return (
        <Image
            src={`/assets/icons/brands/${name}.svg`}
            alt={alt ?? name}
            width={size}
            height={size}
            className={className}
        />
    );
}
