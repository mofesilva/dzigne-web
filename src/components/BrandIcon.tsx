import React from 'react';
import Image from 'next/image';
import { cdnUrl } from '@/lib/cdn';

interface BrandIconProps {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
}

export default function BrandIcon({ name, size = 24, className = '', alt }: BrandIconProps) {
    return (
        <Image
            src={cdnUrl(`/icons/${name}.svg`)}
            alt={alt ?? name}
            width={size}
            height={size}
            className={className}
        />
    );
}
