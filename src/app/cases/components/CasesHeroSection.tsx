'use client';

import React from 'react';
import BlurText from '../../../components/BlurText';
import ScrollIndicator from '../../../components/ScrollIndicator';

function CasesHeroSection() {
    return (
        <section className="w-full h-svh relative overflow-hidden bg-black pt-24">
            <div className="absolute inset-0 top-24 flex items-center justify-center px-8 md:px-16 lg:px-24 2xl:px-32">

                {/* Mobile layout — quotes above, text centered */}
                <div className="md:hidden flex flex-col items-center text-center">
                    <span className="font-rajdhani text-green-accent text-[18rem] leading-[0.2] font-bold select-none animate-levitate" aria-hidden="true">
                        &ldquo;
                    </span>
                    <BlurText
                        as="h2"
                        text="Você não pode construir uma reputação com base no que ainda vai fazer."
                        delay={80}
                        animateBy="words"
                        direction="bottom"
                        className="font-rajdhani font-semibold text-white leading-[1.15] [&]:justify-center"
                    />
                    <h6 className="font-outfit text-green-accent font-normal tracking-wide mt-8">
                        Henry Ford
                    </h6>
                </div>

                {/* Desktop layout — quotes beside text */}
                <div className="hidden md:grid max-w-5xl mx-auto grid-cols-[auto_1fr] gap-8 items-start">
                    <span className="font-rajdhani text-green-accent md:text-[22rem] lg:text-[28rem] leading-[0.5] font-bold select-none row-span-2 animate-levitate" aria-hidden="true">
                        &ldquo;
                    </span>
                    <div>
                        <BlurText
                            as="h2"
                            text="Você não pode construir uma reputação com base no que ainda vai fazer."
                            delay={80}
                            animateBy="words"
                            direction="bottom"
                            className="font-rajdhani font-semibold text-white leading-[1.15]"
                        />
                        <h6 className="font-outfit text-green-accent font-normal tracking-wide mt-8">
                            Henry Ford
                        </h6>
                    </div>
                </div>

            </div>

            <ScrollIndicator />
        </section>
    );
}

export default CasesHeroSection; 