'use client';

import React, { useEffect, useRef } from 'react';
import NavigationButton from '../../components/NavigationButton';
import ScrollIndicator from '../../components/ScrollIndicator';
import Image from 'next/image';

function HeroSection() {
    const contentRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Parallax só no desktop — no mobile causa jitter/tremidas
        const isTouchDevice =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (contentRef.current) {
                contentRef.current.style.transform = `translateY(${scrollY * -0.3}px)`;
            }
            if (mockupRef.current) {
                mockupRef.current.style.transform = `translateY(${scrollY * -0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='bg-black w-full h-svh md:h-dvh overflow-hidden relative'>
            {/* Mockup — right side, bottom aligned */}
            <div ref={mockupRef} className="hidden md:block absolute right-[2%] lg:right-[5%] bottom-[10%] w-[50%] lg:w-[48%] z-0 md:will-change-transform">
                <Image
                    src="/assets/images/mockups/iCalvinus_mockup_2.png"
                    alt="iCalvinus Mockup"
                    width={1920}
                    height={1440}
                    quality={100}
                    className="w-full h-auto animate-levitate"
                    priority
                />
            </div>

            {/* Content — left aligned */}
            <div ref={contentRef} className="w-full h-full flex flex-col justify-end relative z-10 px-6 md:px-12 lg:px-20 2xl:px-32 pb-[12vh] md:pb-[14vh] md:will-change-transform">
                <div className="max-w-3xl">
                    <h1
                        className='font-rajdhani text-eggshell mb-4 md:mb-6 tracking-wide'
                    >
                        <span className="font-medium">O parceiro</span><br />
                        <span className="font-bold text-green-accent">ideal para o seu Negócio</span>
                    </h1>

                    <h6
                        className='font-outfit text-eggshell mb-10 max-w-xl leading-relaxed'
                    >
                        Do conceito ao lançamento. Criamos soluções digitais sob medida que transformam ideias em produtos extraordinários.
                    </h6>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <NavigationButton
                            href={'/cases'}
                            text={'Ver nossos Cases'}
                        />
                        <NavigationButton
                            href={'/about-us'}
                            text={'Conheça a Dzign-e'}
                        />
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/dzign.e/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/icons/brands/instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/dzigne/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/icons/brands/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
                        </a>
                    </div>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}

export default HeroSection;