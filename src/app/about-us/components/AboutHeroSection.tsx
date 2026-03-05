'use client';

import React from 'react';
import BlurText from '../../../components/BlurText';
import ScrollIndicator from '../../../components/ScrollIndicator';

function AboutHeroSection() {
    return (
        <section className="w-full h-svh flex items-center justify-center relative overflow-hidden bg-black">
            <div className="px-8 md:px-16 lg:px-24 2xl:px-32 w-full">
                <div className="max-w-5xl mx-auto grid grid-cols-[auto_1fr] gap-4 md:gap-8 items-start">

                    {/* Giant decorative quote mark */}
                    <span className="font-rajdhani text-green-accent text-[14rem] md:text-[22rem] lg:text-[28rem] leading-[0.5] font-bold select-none row-span-2 animate-levitate" aria-hidden="true">
                        &ldquo;
                    </span>

                    {/* Quote + Author */}
                    <div>
                        <BlurText
                            as="h2"
                            text="A única forma de fazer um trabalho extraordinário é amar o que você faz."
                            delay={80}
                            animateBy="words"
                            direction="bottom"
                            className="font-rajdhani font-semibold text-white leading-[1.15]"
                        />
                        <h6 className="font-outfit text-green-accent font-normal tracking-wide mt-8">
                            Steve Jobs
                        </h6>
                    </div>

                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}

export default AboutHeroSection;
