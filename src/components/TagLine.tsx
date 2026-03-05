import React from 'react';

interface TagLineProps {
    text: string;
    className?: string;
}

export default function TagLine({ text, className = '' }: TagLineProps) {
    return (
        <div className={`text-center ${className}`}>
            <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                {text}
            </span>
        </div>
    );
}
