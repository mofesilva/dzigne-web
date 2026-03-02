'use client';
import React from 'react';
import NavigationButton from '../../components/NavigationButton';
import { Code, UserPlus, Cpu } from '@solar-icons/react/ssr';

const services = [
    {
        number: '01',
        icon: <Code weight="Bold" size={28} />,
        title: 'Desenvolvimento',
        description: 'Projetos desenvolvidos sob medida, com arquitetura robusta e tecnologias modernas para seu negócio.',
    },
    {
        number: '02',
        icon: <UserPlus weight="Outline" size={28} />,
        title: 'Alocação de Equipes',
        description: 'Times especializados sob demanda com os perfis certos para acelerar suas entregas.',
    },
    {
        number: '03',
        icon: <Cpu weight="Bold" size={28} />,
        title: 'Tecnologia Proprietária',
        description: 'Soluções inovadoras com nossa tecnologia proprietária para acelerar seu desenvolvimento.',
    },
];

function ServicesSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 py-24 lg:py-32">
                {/* Header — Hero pattern: big heading left, CTA right-bottom */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 lg:mb-28">
                    <div className="max-w-3xl">
                        <p
                            className="font-league-spartan text-eggshell/40 mb-4 tracking-widest uppercase"
                            style={{ fontSize: 'clamp(0.7rem, 0.5vw + 0.4rem, 0.85rem)' }}
                        >
                            O que fazemos
                        </p>
                        <h1
                            className="font-rajdhani text-eggshell mb-5 md:mb-6"
                            style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 5rem)', lineHeight: 1.05 }}
                        >
                            <span className="font-medium">Construímos</span><br />
                            <span className="font-bold text-green-accent">software inteligente</span>
                        </h1>
                        <p
                            className="font-league-spartan text-eggshell/50 max-w-lg leading-relaxed"
                            style={{ fontSize: 'clamp(0.95rem, 0.8vw + 0.5rem, 1.15rem)' }}
                        >
                            Do conceito à entrega. Rápido, familiar e feito sob medida.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <NavigationButton href="/services" text="Ver mais serviços" />
                    </div>
                </div>

                {/* Services — numbered list with horizontal lines */}
                <div>
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="border-t border-eggshell/[0.08] py-10 lg:py-14 group cursor-default"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 lg:gap-20">
                                {/* Number + Icon */}
                                <div className="flex items-center gap-5 flex-shrink-0 md:w-[180px] lg:w-[220px]">
                                    <span
                                        className="font-rajdhani font-bold text-eggshell/10 group-hover:text-green-accent/30 transition-colors duration-500"
                                        style={{ fontSize: 'clamp(2.5rem, 3vw, 4rem)' }}
                                    >
                                        {service.number}
                                    </span>
                                    <div className="text-green-accent/70 group-hover:text-green-accent transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="font-rajdhani font-bold text-eggshell group-hover:text-green-accent transition-colors duration-500 flex-shrink-0 md:w-[260px] lg:w-[300px]"
                                    style={{ fontSize: 'clamp(1.5rem, 2vw + 0.3rem, 2.2rem)', lineHeight: 1.15 }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="font-league-spartan text-eggshell/40 group-hover:text-eggshell/60 leading-relaxed transition-colors duration-500 max-w-md"
                                    style={{ fontSize: 'clamp(0.9rem, 0.6vw + 0.5rem, 1.05rem)' }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-eggshell/[0.08]" />
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
