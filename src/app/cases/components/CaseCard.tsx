'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { AltArrowRight } from '@solar-icons/react/ssr';
import TagLine from '../../../components/TagLine';
import NavigationButton from '../../../components/NavigationButton';

interface CaseCardProps {
    logo: string;
    company: string;
    title?: string;
    description: string;
    mockup: string;
    href: string;
    tags: string[];
    isReversed: boolean;
    index: number;
    invertLogo?: boolean;
    isDark?: boolean;
}

function CaseCard({ logo, company, description, mockup, href, tags, isReversed, index, invertLogo = true, isDark: isDarkProp }: CaseCardProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const isDark = isDarkProp ?? index % 2 === 0;

    return (
        <section
            ref={ref}
            className={`w-full ${isDark ? 'bg-black' : 'bg-eggshell'} overflow-hidden`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-24 md:py-32 lg:py-40">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>

                    {/* ── Text Content ── */}
                    <motion.div
                        className={`${isReversed ? 'lg:col-start-2' : ''} order-2 lg:order-none`}
                        initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Index number */}
                        <span className={`font-rajdhani font-bold text-[8rem] md:text-[10rem] leading-none ${isDark ? 'text-green-accent/15' : 'text-black/10'} select-none block -mb-10 md:-mb-14`}>
                            {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="mb-6">
                            <Image
                                src={logo}
                                alt={`${company} Logo`}
                                width={200}
                                height={60}
                                quality={100}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>

                        <p className={`font-outfit leading-relaxed mb-8 max-w-lg ${isDark ? 'text-eggshell/65' : 'text-carbon/70'}`}>
                            {description}
                        </p>

                        <TagLine
                            text={tags.join(' · ')}
                            variant={isDark ? 'dark' : 'light'}
                            className="text-left mb-10"
                        />

                        <NavigationButton
                            href={href}
                            text="Ver Case Completo"
                            icon={<AltArrowRight weight="Bold" size={16} />}
                            inverted={!isDark}
                        />
                    </motion.div>

                    {/* ── Mockup ── */}
                    <motion.div
                        className={`${isReversed ? 'lg:col-start-1' : ''} order-1 lg:order-none relative flex items-center justify-center`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Glow behind mockup */}
                        <div className={`absolute inset-0 ${isDark ? 'bg-green-accent/[0.03]' : 'bg-carbon/[0.02]'} rounded-3xl blur-3xl scale-90 pointer-events-none`} />

                        <motion.div
                            className="relative z-10"
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image
                                src={mockup}
                                alt={`${company} Mockup`}
                                width={700}
                                height={500}
                                className="lg:max-h-[520px] max-h-[300px] w-auto object-contain drop-shadow-2xl"
                                quality={90}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default CaseCard; 