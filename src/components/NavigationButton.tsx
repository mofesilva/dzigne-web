'use client'
import Link from 'next/link';
import React from 'react'

interface NavigationButtonProps {
    href: string
    text: string
    icon?: string
    inverted?: boolean
}

function NavigationButton({ href, text, icon, inverted = false }: NavigationButtonProps) {
    return (
        <Link href={href} className={`group ${inverted ? 'bg-carbon hover:border-carbon' : 'bg-green-accent hover:border-green-accent'} ${icon ? 'pr-4 pl-6' : 'px-6'} py-2 rounded-lg border-2 border-transparent hover:bg-transparent transition-colors duration-300 inline-block cursor-pointer`}>
            <span className={`${inverted ? 'text-eggshell group-hover:text-carbon' : 'text-carbon group-hover:text-green-accent'} font-rajdhani font-semibold`}>
                {text} {icon && <i className={`fa-solid ${icon}`}></i>}
            </span>
        </Link>
    )
}

export default NavigationButton;