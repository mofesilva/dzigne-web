import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AltArrowRight } from '@solar-icons/react/ssr';

interface CaseGridCardProps {
    logo: string;
    alt: string;
    text: string;
    mockup: string;
    href: string;
    tags: string[];
    featured?: boolean;
}

function CaseGridCard({ logo, alt, text, mockup, href, tags, featured = false }: CaseGridCardProps) {
    if (featured) {
        return (
            <Link
                href={href}
                className="group block lg:col-span-2 border-t-2 border-carbon/10 pt-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Mockup */}
                    <div className="flex items-center justify-center">
                        <Image
                            src={mockup}
                            alt={`${alt} Mockup`}
                            width={700}
                            height={500}
                            quality={90}
                            className="w-full max-h-[320px] lg:max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-carbon/40 font-outfit tracking-widest uppercase text-caption"
                                >
                                    {index > 0 && <span className="mr-2">·</span>}
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Image
                            src={logo}
                            alt={alt}
                            width={200}
                            height={60}
                            quality={100}
                            className="h-11 w-auto object-contain object-left mb-5"
                        />

                        <p
                            className="font-outfit text-carbon/60 leading-relaxed mb-8 max-w-md"
                        >
                            {text}
                        </p>

                        <span className="font-rajdhani font-bold text-green-accent inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                            Ver case completo
                            <AltArrowRight weight="Bold" size={18} />
                        </span>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="group block border-t-2 border-carbon/10 pt-10"
        >
            {/* Mockup */}
            <div className="flex items-center justify-center mb-8">
                <Image
                    src={mockup}
                    alt={`${alt} Mockup`}
                    width={600}
                    height={400}
                    quality={90}
                    className="w-full max-h-[220px] lg:max-h-[260px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* Content */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-carbon/40 font-outfit tracking-widest uppercase text-caption"
                    >
                        {index > 0 && <span className="mr-2">·</span>}
                        {tag}
                    </span>
                ))}
            </div>

            <Image
                src={logo}
                alt={alt}
                width={160}
                height={50}
                quality={100}
                className="h-9 w-auto object-contain object-left mb-4"
            />

            <p
                className="font-outfit text-carbon/60 leading-relaxed mb-6 text-small"
            >
                {text}
            </p>

            <span className="font-rajdhani font-bold text-green-accent inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Ver case
                <AltArrowRight weight="Bold" size={16} />
            </span>
        </Link>
    );
}

export default CaseGridCard;
