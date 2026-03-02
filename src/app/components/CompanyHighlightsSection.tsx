'use client';
import React from 'react';
import Image from 'next/image';

const logos = [
    { src: '/assets/images/logos/arion1.png', alt: 'Arion' },
    { src: '/assets/images/logos/contrataja-hn1.png', alt: 'Contrata Já' },
    { src: '/assets/images/logos/ergon1.png', alt: 'Ergon' },
    { src: '/assets/images/logos/gar1.png', alt: 'GAR' },
    { src: '/assets/images/logos/gideoes1.png', alt: 'Gideões' },
    { src: '/assets/images/logos/icalvinus-hn.png', alt: 'iCalvinus' },
    { src: '/assets/images/logos/infinity1.png', alt: 'Infinity' },
    { src: '/assets/images/logos/ipb1.png', alt: 'IPB' },
    { src: '/assets/images/logos/ipi1.png', alt: 'IPI' },
    { src: '/assets/images/logos/ipiconecta-h2.png', alt: 'IPIconecta' },
    { src: '/assets/images/logos/labormed1.png', alt: 'Labormed' },
    { src: '/assets/images/logos/mackenzie1.png', alt: 'Mackenzie' },
    { src: '/assets/images/logos/sigmaapp-n.png', alt: 'SigmaApp' },
    { src: '/assets/images/logos/sigmacon1png.png', alt: 'Sigmacon' },
    { src: '/assets/images/logos/trilobit1.png', alt: 'Trilobit' },
];

function CompanyHighlightsSection() {
    // Duplicate array for seamless looping
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="bg-black w-full relative overflow-hidden">
            <div className="">
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-black to-transparent" />

                    <div className="flex items-center w-max animate-marquee">
                        {duplicatedLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 mx-3"
                            >
                                <div className="bg-onyx rounded-3xl border border-carbon flex items-center justify-center w-[140px] h-[80px] md:w-[180px] md:h-[100px] lg:w-[220px] lg:h-[120px]">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={140}
                                        height={140}
                                        className="h-auto max-h-[50px] md:max-h-[60px] lg:max-h-[70px] w-auto max-w-[100px] md:max-w-[130px] lg:max-w-[160px] object-contain opacity-50"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyHighlightsSection;
