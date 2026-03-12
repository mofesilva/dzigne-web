'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import NavigationButton from '@/components/NavigationButton';
import { AltArrowLeft, AltArrowRight } from '@solar-icons/react/ssr';

interface NavigationPlatform {
    href: string;
    company: string;
    title: string;
    mockup: string;
}

interface PlatformNavigationSectionProps {
    previousPlatform?: NavigationPlatform;
    nextPlatform?: NavigationPlatform;
}

function NavigationCard({ platformData, direction }: { platformData: NavigationPlatform; direction: 'previous' | 'next' }) {
    const isPrev = direction === 'previous';

    return (
        <Link href={platformData.href} className="group block">
            <div className={`flex ${isPrev ? 'flex-row' : 'flex-row-reverse'} items-stretch rounded-2xl bg-carbon overflow-hidden border border-white/[0.06] group-hover:border-green-accent transition-colors duration-400 h-[200px] md:h-[240px]`}>
                {/* Mockup area */}
                <div className="relative w-[55%] md:w-[60%] bg-[#1a1a1a] flex-shrink-0">
                    <div className="absolute inset-4 md:inset-6">
                        <Image
                            src={platformData.mockup}
                            alt={platformData.company}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 55vw, 35vw"
                        />
                    </div>
                </div>

                {/* Text area */}
                <div className={`flex-1 flex flex-col justify-center p-6 md:p-8 ${isPrev ? 'items-start' : 'items-end text-right'}`}>
                    <div className="flex items-center gap-2 mb-4">
                        {isPrev && <AltArrowLeft weight="Bold" size={14} className="text-green-accent group-hover:-translate-x-1 transition-transform duration-300" />}
                        <span className="font-outfit text-xs text-eggshell/50 tracking-widest uppercase">
                            {isPrev ? 'Plataforma Anterior' : 'Próxima Plataforma'}
                        </span>
                        {!isPrev && <AltArrowRight weight="Bold" size={14} className="text-green-accent group-hover:translate-x-1 transition-transform duration-300" />}
                    </div>
                    <h4 className="font-rajdhani font-bold text-2xl md:text-3xl text-eggshell group-hover:text-green-accent transition-colors duration-300 leading-tight">
                        {platformData.company}
                    </h4>
                    <p className="font-outfit text-sm text-eggshell/50 mt-2 line-clamp-2">
                        {platformData.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function PlatformNavigationSection({ previousPlatform, nextPlatform }: PlatformNavigationSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const hasBoth = previousPlatform && nextPlatform;

    return (
        <section ref={ref} className="bg-black w-full">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-0 pb-20 md:pb-28">
                <div className="border-t border-eggshell/[0.06] mb-12 md:mb-16" />

                <motion.h3
                    className="font-rajdhani font-bold text-2xl md:text-3xl text-eggshell text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Outras Plataformas
                </motion.h3>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                    {previousPlatform ? (
                        <motion.div
                            className="w-full lg:max-w-[620px]"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <NavigationCard platformData={previousPlatform} direction="previous" />
                        </motion.div>
                    ) : <div />}

                    {nextPlatform ? (
                        <motion.div
                            className="w-full lg:max-w-[620px] lg:ml-auto"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: hasBoth ? 0.3 : 0.15 }}
                        >
                            <NavigationCard platformData={nextPlatform} direction="next" />
                        </motion.div>
                    ) : <div />}
                </div>

                {/* Ver Todas button */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <NavigationButton href="/plataformas" text="Ver Todas as Plataformas" />
                </motion.div>
            </div>
        </section>
    );
}

export default PlatformNavigationSection;
