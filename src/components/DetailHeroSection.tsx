'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import TagLine from '@/components/TagLine';
import ScrollIndicator from '@/components/ScrollIndicator';

interface DetailHeroSectionProps {
    logo: string;
    company: string;
    title?: string;
    description: string;
    tags: string[];
    mockup?: string;
    invertLogo?: boolean;
}

function DetailHeroSection({ logo, company, title, description, tags, mockup, invertLogo = false }: DetailHeroSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full lg:min-h-svh relative overflow-hidden bg-black pt-24 pb-16 lg:pb-0">
            <div className="relative lg:absolute lg:inset-0 lg:top-24 flex items-center justify-center px-6 md:px-12 lg:px-20 2xl:px-32 py-8 lg:py-0">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

                    {/* Text side (golden ratio ~3/5) */}
                    <motion.div
                        className={`flex flex-col justify-center ${mockup ? 'lg:col-span-3' : 'lg:col-span-5 items-center text-center'}`}
                        initial={{ opacity: 0, x: mockup ? -50 : 0, y: mockup ? 0 : 30 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="mb-8">
                            <Image
                                src={logo}
                                alt={`${company} Logo`}
                                width={180}
                                height={60}
                                quality={100}
                                className={`h-12 md:h-14 w-auto object-contain ${invertLogo ? 'brightness-0 invert' : ''}`}
                            />
                        </div>

                        {title && (
                            <h1 className="font-rajdhani font-bold text-eggshell mb-4">
                                {title}
                            </h1>
                        )}

                        <h6 className={`font-outfit text-eggshell/65 mb-10 leading-relaxed ${mockup ? 'max-w-xl' : 'max-w-2xl'}`}>
                            {description}
                        </h6>

                        <TagLine text={tags.join(' · ')} className={mockup ? 'text-left' : 'text-center'} />
                    </motion.div>

                    {/* Mockup side (golden ratio ~2/5) */}
                    {mockup && (
                        <motion.div
                            className="lg:col-span-2 flex items-center justify-center relative"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="absolute inset-0 bg-green-accent/[0.02] rounded-full blur-[100px] scale-75 pointer-events-none" />
                            <motion.div
                                className="relative z-10"
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Image
                                    src={mockup}
                                    alt={`${company} Mockup`}
                                    width={600}
                                    height={500}
                                    quality={90}
                                    className="max-h-[300px] lg:max-h-[500px] w-auto object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}

export default DetailHeroSection;
