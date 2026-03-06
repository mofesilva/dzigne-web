'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface PassionBlock {
    title: string;
    text: React.ReactNode;
    image: string;
    alt: string;
}

const blocks: PassionBlock[] = [
    {
        title: 'Marcas',
        text: (
            <>
                ...marcas que falam antes da primeira palavra.
                Do naming ao sistema visual completo, damos vida a identidades
                que se tornam{' '}
                <span className="text-green-accent">impossíveis de ignorar</span>.
            </>
        ),
        image: '/assets/images/about/marcas.jpg',
        alt: 'Criação de marcas e identidade visual',
    },
    {
        title: 'Produtos',
        text: (
            <>
                ...produtos digitais que as pessoas realmente querem usar.
                Sites, apps e plataformas projetados para{' '}
                <span className="text-green-accent">encantar</span>
                {' '}— e construídos para escalar.
            </>
        ),
        image: '/assets/images/about/produtos.jpg',
        alt: 'Desenvolvimento de produtos digitais',
    },
    {
        title: 'Oportunidades',
        text: (
            <>
                ...oportunidades onde outros veem obstáculos.
                Conectamos estratégia, design e tecnologia para{' '}
                <span className="text-green-accent">abrir portas</span>
                {' '}que transformam negócios.
            </>
        ),
        image: '/assets/images/about/oportunidades.jpg',
        alt: 'Oportunidades de negócio e estratégia digital',
    },
];

const N = blocks.length;

/*
 * Scroll-driven continuous animation.
 * No hold zones — every scroll pixel produces proportional visual change.
 * Each block: 50% enter, 50% exit. Adjacent blocks overlap at boundaries.
 */
function AboutPassionSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const rafId = useRef(0);

    useEffect(() => {
        const ease = (t: number) => t * t * (3 - 2 * t);

        function tick() {
            const section = sectionRef.current;
            if (!section) { rafId.current = requestAnimationFrame(tick); return; }

            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight;

            const scrolled = -rect.top;
            const scrollable = section.offsetHeight - vh;
            const progress = scrollable > 0
                ? Math.max(0, Math.min(1, scrolled / scrollable))
                : 0;

            // Title fade: reveals in first 10% of scroll
            const titleEl = section.querySelector<HTMLElement>('[data-title]');
            if (titleEl) {
                const t = Math.max(0, Math.min(1, progress / 0.10));
                titleEl.style.opacity = `${t}`;
            }

            /*
             * Layout: title takes 0→12%, then each slide gets an equal chunk of the remaining 88%.
             * Each slide chunk: 20% fade-in, 60% hold, 20% fade-out (last slide never fades out).
             */
            const contentStart = 0.12;
            const contentRange = 1 - contentStart;
            const sliceSize = contentRange / N; // ~0.293 per slide

            for (let i = 0; i < N; i++) {
                const card = section.querySelector<HTMLElement>(`[data-card="${i}"]`);
                if (!card) continue;

                const sliceStart = contentStart + i * sliceSize;
                const sliceEnd = sliceStart + sliceSize;
                const fadeDuration = sliceSize * 0.2; // 20% of slice for each fade

                let opacity: number;

                if (progress < sliceStart) {
                    opacity = 0;
                } else if (progress < sliceStart + fadeDuration) {
                    // Fade in
                    opacity = ease((progress - sliceStart) / fadeDuration);
                } else if (progress < sliceEnd - fadeDuration) {
                    // Hold
                    opacity = 1;
                } else if (progress < sliceEnd) {
                    // Fade out (skip for last slide)
                    if (i === N - 1) {
                        opacity = 1;
                    } else {
                        opacity = 1 - ease((progress - (sliceEnd - fadeDuration)) / fadeDuration);
                    }
                } else {
                    opacity = i === N - 1 ? 1 : 0;
                }

                card.style.opacity = `${opacity}`;
                card.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
            }

            rafId.current = requestAnimationFrame(tick);
        }

        rafId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-black w-full relative h-[500vh] md:h-[400vh]"
        >
            {/* Sticky frame */}
            <div className="sticky top-0 h-svh overflow-hidden">
                <div className="h-full px-6 md:px-12 lg:px-20 2xl:px-32 pb-10 md:pb-14 flex flex-col justify-end">

                    {/* TÍTULO */}
                    <h2 data-title className="font-rajdhani font-medium text-eggshell leading-tight shrink-0 mb-4 md:mb-6" style={{ opacity: 0 }}>
                        A Dzign-e nasce da{' '}
                        <span className="font-bold text-green-accent">
                            paixão de criar...
                        </span>
                    </h2>

                    {/* Content area — blocks stacked absolute, only one visible */}
                    <div className="relative h-[60vh] shrink-0">
                        {blocks.map((block, i) => (
                            <div
                                key={i}
                                data-card={i}
                                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center will-change-[opacity]"
                                style={{ opacity: 0 }}
                            >
                                {/* Imagem */}
                                <div className="relative w-full aspect-[4/3] max-h-[50vh] overflow-hidden rounded-2xl bg-carbon-medium">
                                    <Image
                                        src={block.image}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Texto */}
                                <div className="flex flex-col justify-center max-w-lg">
                                    <h3 className="font-rajdhani font-medium text-eggshell leading-snug">
                                        {block.text}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPassionSection;
