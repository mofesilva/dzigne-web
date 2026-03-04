import React from 'react';
import {
    Heart,
    HandShake,
    Rocket,
    Star,
    Shield,
    Target,
} from '@solar-icons/react/ssr';

const values = [
    {
        icon: <Heart weight="Bold" size={36} />,
        title: 'Paixão',
        description:
            'Amamos o que fazemos e isso se reflete em cada linha de código e pixel que entregamos.',
    },
    {
        icon: <HandShake weight="Outline" size={36} />,
        title: 'Transparência',
        description:
            'Comunicação clara e honesta em todas as etapas — sem surpresas, sem letras miúdas.',
    },
    {
        icon: <Rocket weight="Bold" size={36} />,
        title: 'Agilidade',
        description:
            'Entregas rápidas sem comprometer a qualidade. Iteramos, validamos e evoluímos juntos.',
    },
    {
        icon: <Star weight="Bold" size={36} />,
        title: 'Qualidade',
        description:
            'Cada detalhe importa. Da arquitetura ao acabamento, buscamos a excelência em tudo.',
    },
    {
        icon: <Shield weight="Bold" size={36} />,
        title: 'Confiança',
        description:
            'Construímos relações de longo prazo baseadas em responsabilidade e entregas consistentes.',
    },
    {
        icon: <Target weight="Bold" size={36} />,
        title: 'Foco em Resultado',
        description:
            'Tecnologia por si só não basta. Cada decisão técnica é guiada pelo impacto real no negócio.',
    },
];

function AboutMissionValuesSection() {
    return (
        <section className="bg-eggshell w-full relative overflow-hidden">
            {/* ── Mission Block ── */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-24 lg:pt-32 pb-4">
                <div className="max-w-4xl">
                    <p className="text-caption font-outfit text-carbon/60 mb-4 tracking-widest uppercase">
                        Nossa Missão
                    </p>
                    <h1 className="font-rajdhani text-carbon">
                        <span className="font-medium">Transformar ideias em </span>
                        <span className="font-bold text-green-accent">soluções digitais</span>
                        <br />
                        <span className="font-medium">que evoluem negócios</span>
                    </h1>
                </div>
            </div>

            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-6 pb-4">
                <p className="font-outfit text-carbon/60 max-w-2xl leading-relaxed">
                    Nosso compromisso vai além do código: entregamos projetos com propósito,
                    que combinam design inteligente com tecnologia de ponta para simplificar
                    a vida das pessoas e gerar impacto real.
                </p>
            </div>

            {/* ── Values Grid ── */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-12 pb-24 lg:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className={`bg-neutral-200 border-2 border-neutral-300 p-7 lg:p-9 ${i === 0
                                    ? 'rounded-tl-4xl'
                                    : i === 2
                                        ? 'rounded-tr-4xl'
                                        : i === 3
                                            ? 'rounded-bl-4xl'
                                            : i === 5
                                                ? 'rounded-br-4xl'
                                                : ''
                                } rounded-2xl`}
                        >
                            <span className="font-outfit text-carbon/40 text-xs tracking-[0.2em] uppercase">
                                Valor {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="text-green-accent mt-4 mb-4">{v.icon}</div>
                            <h4 className="font-rajdhani font-bold text-carbon mb-2">
                                {v.title}
                            </h4>
                            <p className="font-outfit text-carbon/70 leading-relaxed">
                                {v.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutMissionValuesSection;
