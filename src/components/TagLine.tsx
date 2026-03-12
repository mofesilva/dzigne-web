import React from 'react';

interface TagLineProps {
    text: string;
    className?: string;
    variant?: 'dark' | 'light';
    noWrap?: boolean;
}

export const unwrapTagLine = (text: string, className: string, colorClass: string) => {
    return (
        <span className={`tag-line ${colorClass} ${className}`}>
            {text}
        </span>
    );
}

export default function TagLine({ text, className = '', variant = 'dark', noWrap = false }: TagLineProps) {
    const colorClass = variant === 'dark' ? 'text-eggshell' : 'text-carbon';

    if (noWrap) {
        return unwrapTagLine(text, className, colorClass);
    }

    return (
        <div className={`text-center ${className}`}>
            <span className={`tag-line ${colorClass}`}>
                {text}
            </span>
        </div>
    );
}
