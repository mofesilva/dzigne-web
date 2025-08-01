import React from 'react';
import Image from 'next/image';

interface CaseHeroSectionProps {
    logo: string;
    company: string;
    title: string;
    description: string;
    tags: string[];
}

function CaseHeroSection({ logo, company, title, description, tags }: CaseHeroSectionProps) {
    return (
        <div className="text-center text-white">
            <div className="mb-8">
                <Image
                    src={logo}
                    alt={`${company} Logo`}
                    width={150}
                    height={75}
                    className="h-16 w-auto object-contain mx-auto"
                />
            </div>
            
            <h1 className="font-rajdhani text-5xl lg:text-6xl font-bold mb-6">
                {title}
            </h1>
            
            <p className="font-league-spartan text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                {description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-accent text-carbon px-4 py-2 rounded-full font-rajdhani font-semibold text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CaseHeroSection;