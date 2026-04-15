'use client';

import React from 'react';
import SectionTitle from '@/components/SectionTitle';

/* ── 4 categories, 6 steps ────────────────────────── */
const categories = [
    {
        number: '01',
        steps: [
            {
                title: 'Briefing',
                text: 'Nossa equipe se reúne com os parceiros para entender objetivos, desafios e requisitos. Alinhamos expectativas, cultura, modelo de negócio e metas do projeto.',
            },
        ],
    },
    {
        number: '02',
        steps: [
            {
                title: 'Planejamento',
                text: 'Traduzimos os insights do briefing em um plano concreto — escopo, prazos, recursos e alocação de tarefas.',
            },
            {
                title: 'Arquitetura do Sistema',
                text: 'Projetamos a estrutura técnica: infraestrutura, tecnologias, fluxo de dados e escalabilidade futura.',
            },
        ],
    },
    {
        number: '03',
        steps: [
            {
                title: 'Reunião de Alinhamento',
                text: 'Revisamos plano, arquitetura e ajustes necessários com o parceiro antes de avançar para produção.',
            },
            {
                title: 'Produção',
                text: 'Desenvolvimento com metodologias ágeis, conforme as especificações, com testes rigorosos de qualidade.',
            },
        ],
    },
    {
        number: '04',
        steps: [
            {
                title: 'Entrega, Manutenção e Suporte',
                text: 'Entrega completa com apresentação de funcionalidades e fluxos. Suporte pós-desenvolvimento, manutenção de infraestrutura e correção de bugs.',
            },
        ],
    },
];

/* Outer corners of the 2x2 grid are larger */
const corners = [
    'rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-xl',
    'rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-xl',
    'rounded-tl-xl rounded-tr-xl rounded-bl-3xl rounded-br-xl',
    'rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-3xl',
];

/* ── Main Section ──────────────────────────────────── */
function AboutProcessSection() {
    return (
        <section className="bg-black w-full py-24 md:py-32 lg:py-44 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">

                <SectionTitle
                    caption="Nosso Processo"
                    title="Transparência em"
                    accent="cada etapa"
                    description="Entenda cada fase do projeto com clareza. Do briefing à entrega, mantemos nossos parceiros informados e envolvidos em todas as decisões."
                />

                {/* ─── 2x2 card grid ─────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {categories.map((cat, i) => (
                        <div
                            key={cat.number}
                            className={`relative bg-carbon-medium overflow-hidden ${corners[i]} min-h-[200px] md:min-h-[240px] p-5 md:p-6 lg:p-7`}
                        >
                            {/* Giant outlined number — left side, bleeding bottom */}
                            <span
                                className="absolute left-3 md:left-4 lg:left-5 bottom-0 translate-y-[33%] font-rajdhani font-bold text-[24rem] md:text-[30rem] lg:text-[28rem] leading-[0.85] select-none pointer-events-none z-0"
                                style={{
                                    color: 'transparent',
                                    WebkitTextStroke: '3px rgba(127, 209, 12, 0.5)',
                                }}
                                aria-hidden="true"
                            >
                                {cat.number}
                            </span>

                            {/* Step content — overlaps the number, bottom-right */}
                            <div className="relative z-10 h-full flex flex-col justify-end items-end">
                                <div className="max-w-[100%] sm:max-w-[45%] flex flex-col gap-3">
                                    {cat.steps.map((step, j) => (
                                        <div key={j}>
                                            <h4 className="font-rajdhani font-bold text-eggshell text-sm md:text-base lg:text-lg leading-tight">
                                                {step.title}
                                            </h4>
                                            <p className="font-outfit text-eggshell text-[0.65rem] md:text-xs lg:text-sm leading-snug mt-1">
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AboutProcessSection;
