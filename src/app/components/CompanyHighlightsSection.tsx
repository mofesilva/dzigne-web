'use client';
import React from 'react';
import Image from 'next/image';
import BlurText from '@/components/BlurText';

const logosRow1 = [
    { src: '/assets/images/logos/arion1.png', alt: 'Arion' },
    { src: '/assets/images/logos/contrataja-hn1.png', alt: 'Contrata Já' },
    { src: '/assets/images/logos/ergon1.png', alt: 'Ergon' },
    { src: '/assets/images/logos/gar1.png', alt: 'GAR' },
    { src: '/assets/images/logos/gideoes1.png', alt: 'Gideões' },
    { src: '/assets/images/logos/icalvinus-hn.png', alt: 'iCalvinus' },
    { src: '/assets/images/logos/infinity1.png', alt: 'Infinity' },
    { src: '/assets/images/logos/ipb1.png', alt: 'IPB' },
];

const logosRow2 = [
    { src: '/assets/images/logos/ipi1.png', alt: 'IPI' },
    { src: '/assets/images/logos/ipiconecta-h2.png', alt: 'IPIconecta' },
    { src: '/assets/images/logos/labormed1.png', alt: 'Labormed' },
    { src: '/assets/images/logos/mackenzie1.png', alt: 'Mackenzie' },
    { src: '/assets/images/logos/sigmaapp-n.png', alt: 'SigmaApp' },
    { src: '/assets/images/logos/sigmacon1png.png', alt: 'Sigmacon' },
    { src: '/assets/images/logos/trilobit1.png', alt: 'Trilobit' },
];

function LogoCard({ logo }: { logo: { src: string; alt: string } }) {
    return (
        <div className="flex-shrink-0 mx-3">
            <div className="bg-onyx rounded-3xl border border-carbon flex items-center justify-center w-[180px] h-[100px] md:w-[240px] md:h-[130px] lg:w-[280px] lg:h-[150px]">
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={200}
                    className="h-auto max-h-[55px] md:max-h-[70px] lg:max-h-[90px] w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] object-contain"
                />
            </div>
        </div>
    );
}

function CompanyHighlightsSection() {
    const duplicatedRow1 = [...logosRow1, ...logosRow1, ...logosRow1];
    const duplicatedRow2 = [...logosRow2, ...logosRow2, ...logosRow2];

    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            {/* Section heading */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 mb-12 md:mb-16 lg:mb-20">
                <h1 className="font-rajdhani text-eggshell text-center justify-center flex flex-wrap">
                    <BlurText
                        as="span"
                        text="Resultados que "
                        className="font-medium"
                        animateBy="words"
                        direction="bottom"
                        delay={80}
                    />
                    <BlurText
                        as="span"
                        text="falam por si"
                        className="font-bold text-green-accent"
                        animateBy="words"
                        direction="bottom"
                        delay={80}
                    />
                </h1>
            </div>

            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-black to-transparent" />

                <div className="flex flex-col gap-6 py-2">
                    {/* Row 1 — scrolls left */}
                    <div className="flex items-center w-max animate-marquee">
                        {duplicatedRow1.map((logo, i) => (
                            <LogoCard key={`r1-${i}`} logo={logo} />
                        ))}
                    </div>

                    {/* Row 2 — scrolls right (reverse) */}
                    <div className="flex items-center w-max animate-marquee-reverse">
                        {duplicatedRow2.map((logo, i) => (
                            <LogoCard key={`r2-${i}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyHighlightsSection;
