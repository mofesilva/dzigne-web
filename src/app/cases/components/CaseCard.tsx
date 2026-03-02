import React from 'react';
import Image from 'next/image';
import NavigationButton from '../../../components/NavigationButton';
import { AltArrowRight } from '@solar-icons/react/ssr';

interface CaseCardProps {
    logo: string;
    company: string;
    title?: string;
    description: string;
    mockup: string;
    href: string;
    tags: string[];
    isReversed: boolean;
}

function CaseCard({ logo, company, title, description, mockup, href, tags, isReversed }: CaseCardProps) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:h-[500px] ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
            {/* Conteúdo de texto */}
            <div className={`${isReversed ? 'lg:col-start-2' : ''} order-2 lg:order-none`}>
                <div className="mb-6">
                    <Image
                        src={logo}
                        alt={`${company} Logo`}
                        width={200}
                        height={60}
                        quality={100}
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {title != null && (
                    <h3 className="font-rajdhani font-bold text-carbon mb-4">
                        {title}
                    </h3>
                )}

                <h6 className="font-league-spartan text-carbon/80 mb-6 leading-relaxed">
                    {description}
                </h6>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-accent text-carbon px-3 py-1 rounded-full font-rajdhani font-semibold text-small"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <NavigationButton
                    href={href}
                    text="Ver Case Completo"
                    icon={<AltArrowRight weight="Bold" size={16} />}
                    inverted={true}
                />
            </div>

            {/* Mockup */}
            <div className="h-full flex items-center justify-center order-1 lg:order-none">
                <Image
                    src={mockup}
                    alt={`${title} Mockup`}
                    width={600}
                    height={400}
                    className="lg:max-h-[450px] max-h-[250px] w-auto object-contain"
                    quality={90}
                />
            </div>
        </div>
    );
}

export default CaseCard; 