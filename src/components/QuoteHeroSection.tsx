'use client';

import React from 'react';
import Image from 'next/image';
import BlurText from './BlurText';
import ScrollIndicator from './ScrollIndicator';

interface QuoteHeroSectionProps {
    quote: string;
    author: string;
    portraitSrc: string;
    portraitAlt: string;
}

function QuoteHeroSection({ quote, author, portraitSrc, portraitAlt }: QuoteHeroSectionProps) {
    return (
        <section className="w-full h-svh relative overflow-hidden bg-black pt-24">
            <div className="absolute inset-0 top-24 flex items-center justify-center px-8 md:px-16 lg:px-24 2xl:px-32">

                {/* Mobile layout — quotes, image, text centered */}
                <div className="md:hidden flex flex-col items-center text-center">
                    <span className="font-rajdhani text-green-accent text-[18rem] leading-[0.2] font-bold select-none animate-levitate" aria-hidden="true">
                        &ldquo;
                    </span>
                    <Image
                        src={portraitSrc}
                        alt={portraitAlt}
                        width={160}
                        height={160}
                        className="w-[4.5rem] h-auto mb-8"
                    />
                    <BlurText
                        as="h2"
                        text={quote}
                        delay={80}
                        animateBy="words"
                        direction="bottom"
                        className="font-rajdhani font-semibold text-white leading-[1.15] [&]:justify-center"
                    />
                    <h6 className="font-outfit text-green-accent font-normal tracking-wide mt-8">
                        {author}
                    </h6>
                </div>

                {/* Desktop layout — image above, quotes beside text */}
                <div className="hidden md:flex flex-col items-center gap-12">
                    <Image
                        src={portraitSrc}
                        alt={portraitAlt}
                        width={200}
                        height={200}
                        className="w-28 lg:w-32 h-auto"
                    />
                    <div className="max-w-5xl mx-auto grid grid-cols-[auto_1fr] gap-8 items-start">
                        <span className="font-rajdhani text-green-accent md:text-[22rem] lg:text-[28rem] leading-[0.5] font-bold select-none row-span-2 animate-levitate" aria-hidden="true">
                            &ldquo;
                        </span>
                        <div>
                            <BlurText
                                as="h2"
                                text={quote}
                                delay={80}
                                animateBy="words"
                                direction="bottom"
                                className="font-rajdhani font-semibold text-white leading-[1.15]"
                            />
                            <h6 className="font-outfit text-green-accent font-normal tracking-wide mt-8">
                                {author}
                            </h6>
                        </div>
                    </div>
                </div>

            </div>

            <ScrollIndicator />
        </section>
    );
}

export default QuoteHeroSection;
