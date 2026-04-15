'use client';

import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { LightbulbBolt, Fire, Shield, GraphUp } from '@solar-icons/react/ssr';

/* ── DNA values from brand doc ─────────────────────── */
const dna = [
    {
        icon: LightbulbBolt,
        value: 'Inovação',
        text: 'Movidos pela inovação tecnológica e pelo potencial transformador das soluções digitais.',
    },
    {
        icon: Fire,
        value: 'Paixão',
        text: 'Criatividade, aprendizado constante e colaboração. Nosso time é apaixonado por tecnologia.',
    },
    {
        icon: Shield,
        value: 'Compromisso',
        text: 'Foco absoluto em qualidade, segurança e resultados excepcionais em cada entrega.',
    },
    {
        icon: GraphUp,
        value: 'Resultado',
        text: 'Soluções que resolvem problemas reais de maneira simples e eficaz.',
    },
];

/* ── Main Section ──────────────────────────────────── */
function AboutIdentitySection() {
    return (
        <section className="bg-black w-full py-28 md:py-36 lg:py-48 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">

                {/* ─── Section Title ──────────────────────────── */}
                <SectionTitle
                    caption="Nossa Essência"
                    title="Transformação Digital"
                    accent="na Prática"
                    description="Nossa essência é a paixão por criar soluções inteligentes, inovadoras e sob medida que transformam negócios. Simplificamos a inovação e agregamos valor real aos nossos parceiros."
                />

                {/* ─── DNA strip ──────────────────────────────── */}
                <div className="mt-20 md:mt-28 pt-10 border-t border-eggshell/[0.08]">
                    <p className="font-outfit text-eggshell/65 text-xs tracking-[0.25em] uppercase mb-10">
                        DNA Dzign-e
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {dna.map((item, i) => (
                            <div key={i}>
                                <item.icon size={28} className="text-green-accent mb-4" />
                                <h4 className="font-rajdhani font-bold text-green-accent text-2xl md:text-3xl mb-3">
                                    {item.value}
                                </h4>
                                <p className="font-outfit text-eggshell/65 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutIdentitySection;
