import React from 'react';

interface SectionTitleProps {
    caption: string;
    title: string;
    accent: string;
    description?: string;
    lineBreak?: boolean;
    accentGreen?: boolean;
    variant?: 'dark' | 'light';
    centered?: boolean;
    className?: string;
}

export default function SectionTitle({
    caption,
    title,
    accent,
    description,
    lineBreak = true,
    accentGreen = true,
    variant = 'dark',
    centered = false,
    className = '',
}: SectionTitleProps) {
    const isDark = variant === 'dark';

    return (
        <div
            className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20 ${className}`}
        >
            <div className={`w-full ${centered ? 'text-center' : ''}`}>
                <p
                    className={`text-caption font-outfit mb-4 tracking-widest uppercase ${isDark ? 'text-eggshell/60' : 'text-carbon/60'
                        }`}
                >
                    {caption}
                </p>
                <h1
                    className={`font-rajdhani ${isDark ? 'text-eggshell' : 'text-carbon'
                        } mb-5 md:mb-6`}
                >
                    <span className="font-medium">{title} </span>
                    {lineBreak && <br />}
                    <span
                        className={`font-bold ${accentGreen ? 'text-green-accent' : ''}`}
                    >
                        {accent}
                    </span>
                </h1>
                {description && (
                    <p
                        className={`font-outfit ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
                            } ${isDark ? 'text-eggshell/50' : 'text-carbon/60'}`}
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
