'use client'
import Link from 'next/link';
import React from 'react'

interface NavigationButtonProps {
    href: string
    text: string
    icon: string
}

function NavigationButton({ href, text, icon }: NavigationButtonProps) {
    return (
        <Link href={href} className="group bg-green-accent pr-4 pl-6 py-2 rounded-lg border-2 border-transparent hover:bg-transparent hover:border-green-accent transition-colors duration-300 inline-block">
            <span className="text-carbon group-hover:text-green-accent font-rajdhani font-semibold">
                {text} <i className={`fa-solid ${icon}`}></i>
            </span>
        </Link>
    )
}

export default NavigationButton;