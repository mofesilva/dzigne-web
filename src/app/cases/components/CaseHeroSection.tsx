import React from 'react';
import Image from 'next/image';

interface CaseHeroSectionProps {
    logo: string;
    company: string;
    title?: string;
    description: string;
    tags: string[];
}

function CaseHeroSection({ logo, company, title, description, tags }: CaseHeroSectionProps) {
    return (
        <div className="text-center text-white mb-16">
            <div className="mb-8">
                <Image
                    src={logo}
                    alt={`${company} Logo`}
                    width={150}
                    height={75}
                    className="h-16 w-auto object-contain mx-auto"
                />
            </div>

            <h1 className="font-rajdhani font-bold mb-6">
                {title}
            </h1>

            <h5 className="font-league-spartan text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                {description}
            </h5>

            <div className="flex flex-wrap justify-center gap-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-accent text-carbon px-4 py-2 rounded-full font-rajdhani font-semibold text-small"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CaseHeroSection;