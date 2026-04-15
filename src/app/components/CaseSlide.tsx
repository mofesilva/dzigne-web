'use client';
import React from 'react';
import LazyImage from '@/components/LazyImage';
import NavigationButton from '../../components/NavigationButton';
import { AltArrowRight } from '@solar-icons/react/ssr';

interface CaseSlideProps {
    text: string;
    logo: string;
    isLogoHorizontal?: boolean;
    alt: string;
    mockup: string;
    href: string;
}

function CaseSlide({ text, logo, alt, mockup, href, isLogoHorizontal = false }: CaseSlideProps) {
    return (
        <div className="w-full min-h-[500px] md:min-h-[550px] relative overflow-hidden">
            {/* Mockup — positioned right, like Hero's mockup placement */}
            <div className="hidden md:flex absolute right-[2%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[44%] lg:w-[40%] items-center justify-center z-0">
                <LazyImage
                    src={mockup}
                    alt="Mockup"
                    width={800}
                    height={800}
                    quality={100}
                    className="w-full h-auto"
                />
            </div>

            {/* Content — left side, vertically centered, exactly like Hero */}
            <div className="relative z-10 flex flex-col justify-center h-full min-h-[500px] md:min-h-[550px] px-6 md:px-12 lg:px-20 2xl:px-32 py-16">
                <div className="max-w-lg">
                    <LazyImage
                        src={logo}
                        alt={alt}
                        width={150}
                        height={150}
                        quality={100}
                        className={`h-auto mb-6 brightness-0 invert opacity-80 ${isLogoHorizontal ? 'w-[130px] md:w-[160px]' : 'w-[70px] md:w-[90px]'}`}
                    />

                    <p
                        className="font-outfit text-eggshell/65 mb-10 leading-relaxed"
                    >
                        {text}
                    </p>

                    <NavigationButton
                        href={href}
                        text="Saiba mais"
                        icon={<AltArrowRight weight="Outline" size={16} />}
                    />
                </div>

                {/* Mobile mockup — below content */}
                <div className="md:hidden mt-10 flex justify-center">
                    <LazyImage
                        src={mockup}
                        alt="Mockup"
                        width={400}
                        height={400}
                        quality={100}
                        className="w-auto h-[220px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default CaseSlide;
