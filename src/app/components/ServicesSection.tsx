'use client';
import React from 'react';
import Image from 'next/image';
import NavigationButton from '../../components/NavigationButton';
import { MagicBentoGrid, MagicBentoCard } from '../../components/MagicBento';
import { IconStrategy } from './ServiceIcons';

const GLOW = '127, 209, 12';

function ServicesSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
                    <div className="w-full">
                        <p
                            className="text-eggshell/60 mb-4 tracking-widest uppercase"
                        >
                            O que fazemos
                        </p>
                        <h1
                            className="font-rajdhani text-eggshell mb-5 md:mb-6"
                        >
                            <span className="font-medium">Transformamos ideias em</span><br />
                            <span className="font-bold text-green-accent">produtos digitais</span>
                        </h1>
                        <p
                            className="font-outfit text-eggshell/50 max-w-xl"
                        >
                            Da estratégia à execução. Cada projeto combina design, tecnologia
                            e performance para entregar resultados reais ao seu negócio.
                        </p>
                    </div>
                </div>

                {/* ── Magic Bento Grid ── */}
                <MagicBentoGrid
                    glowColor={GLOW}
                    spotlightRadius={250}
                    enableSpotlight
                >
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-row-dense gap-3 lg:gap-4"
                        style={{ gridAutoRows: 'minmax(220px, auto)' } as React.CSSProperties}
                    >
                        {/* ═══ 1 · Desenvolvimento Web & Mobile ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={10}
                            className="rounded-tl-4xl border border-eggshell/[0.06] min-h-[220px] bg-onyx"
                        >
                            <Image
                                src="/processor-chip.png"
                                alt=""
                                width={320}
                                height={320}
                                className="absolute pointer-events-none w-64 h-64 lg:w-80 lg:h-80 -top-12 -right-12 lg:-top-16 lg:-right-16 object-contain opacity-40"
                                aria-hidden
                            />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Engenharia
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-2"
                                    >
                                        Desenvolvimento<br />Web & Mobile
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45"
                                    >
                                        Aplicações modernas que geram resultado. Sites que convertem,
                                        apps que retêm e sistemas que escalam.
                                    </p>
                                </div>
                            </div>
                        </MagicBentoCard>

                        {/* ═══ 2 · UI/UX Design ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={10}
                            className="border border-eggshell/[0.06] min-h-[220px] bg-onyx"
                        >
                            <Image
                                src="/graphic-design.png"
                                alt=""
                                width={320}
                                height={320}
                                className="absolute pointer-events-none w-64 h-64 lg:w-80 lg:h-80 -top-12 -right-12 lg:-top-16 lg:-right-16 object-contain opacity-20"
                                aria-hidden
                            />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Design
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-2"
                                    >
                                        UI/UX Design
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45"
                                    >
                                        Interfaces que encantam. Cada pixel pensado para
                                        guiar o usuário até a conversão.
                                    </p>
                                </div>
                            </div>
                        </MagicBentoCard>

                        {/* ═══ 3 · Produtos Digitais — large card (2col × 2row) ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={18}
                            className="rounded-tr-4xl border border-eggshell/[0.06] md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[220px] bg-onyx"
                        >
                            <Image
                                src="/uiux-design.png"
                                alt=""
                                width={480}
                                height={480}
                                className="absolute pointer-events-none w-96 h-96 lg:w-[30rem] lg:h-[30rem] -top-16 -right-16 lg:-top-24 lg:-right-24 object-contain opacity-60"
                                aria-hidden
                            />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-10 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Produto
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-3"
                                    >
                                        Produtos Digitais
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45 max-w-md"
                                    >
                                        Do MVP ao produto completo. Transformamos sua ideia em um
                                        produto digital validado, funcional e pronto para o mercado.
                                    </p>
                                    <span className="inline-block mt-4 font-outfit text-eggshell/15 text-xs tracking-[0.2em] uppercase">
                                        Discovery · Prototipação · Validação · Lançamento
                                    </span>
                                </div>
                            </div>
                        </MagicBentoCard>

                        {/* ═══ 4 · Hospedagem & Infraestrutura — large card (2col × 2row) ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={18}
                            className="rounded-bl-4xl border border-eggshell/[0.06] md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[220px] bg-onyx"
                        >
                            <Image
                                src="/cloud-database-3.png"
                                alt=""
                                width={480}
                                height={480}
                                className="absolute pointer-events-none w-96 h-96 lg:w-[30rem] lg:h-[30rem] -top-16 -right-16 lg:-top-24 lg:-right-24 object-contain opacity-40"
                                aria-hidden
                            />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-10 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Infraestrutura
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-3"
                                    >
                                        Hospedagem &<br />Infraestrutura
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45 max-w-md"
                                    >
                                        Seu projeto sempre no ar. Alta disponibilidade, CDN global,
                                        backups automáticos e monitoramento 24/7 para você focar
                                        no que importa.
                                    </p>
                                    <span className="inline-block mt-4 font-outfit text-eggshell/15 text-xs tracking-[0.2em] uppercase">
                                        AWS · Vercel · Docker · CI/CD
                                    </span>
                                </div>
                            </div>
                        </MagicBentoCard>

                        {/* ═══ 5 · Consultoria em TI ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={10}
                            className="border border-eggshell/[0.06] min-h-[220px] overflow-hidden bg-onyx"
                        >
                            <IconStrategy className="w-52 h-52 lg:w-72 lg:h-72 -top-8 -right-8 lg:-top-10 lg:-right-10" />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Estratégia
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-2"
                                    >
                                        Consultoria em TI
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45"
                                    >
                                        Analisamos sua operação e traçamos o roadmap
                                        tecnológico ideal para acelerar resultados.
                                    </p>
                                </div>
                            </div>
                        </MagicBentoCard>

                        {/* ═══ 6 · Analytics & Performance ═══ */}
                        <MagicBentoCard
                            glowColor={GLOW}
                            enableStars
                            clickEffect
                            particleCount={10}
                            className="rounded-br-4xl border border-eggshell/[0.06] min-h-[220px] bg-onyx"
                        >
                            <Image
                                src="/data-pyramid.svg"
                                alt=""
                                width={480}
                                height={480}
                                className="absolute pointer-events-none w-80 h-80 lg:w-[26rem] lg:h-[26rem] -bottom-24 -right-20 lg:-bottom-32 lg:-right-28 object-contain opacity-40"
                                aria-hidden
                            />
                            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                                    Dados
                                </span>
                                <div>
                                    <h4
                                        className="font-rajdhani font-bold text-eggshell mb-2"
                                    >
                                        Analytics &<br />Performance
                                    </h4>
                                    <p
                                        className="font-outfit text-eggshell/45 text-shadow-heavy"
                                    >
                                        Métricas configuradas, performance monitorada e
                                        otimização contínua para crescer com previsibilidade.
                                    </p>
                                </div>
                            </div>
                        </MagicBentoCard>
                    </div>
                </MagicBentoGrid>
            </div>
        </section>
    );
}

export default ServicesSection;
