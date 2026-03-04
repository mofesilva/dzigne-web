import React from 'react';
import Image from 'next/image';

interface EssenceBlock {
    text: React.ReactNode;
    image: string;
    alt: string;
    reverse?: boolean;
}

const blocks: EssenceBlock[] = [
    {
        text: (
            <>
                Cada detalhe existe por um motivo.{' '}
                <span className="text-green-accent">
                    Nada é acidente
                </span>
                {' '}— do primeiro pixel à última linha de código, tudo é pensado
                para funcionar em silêncio e impressionar sem avisar.
            </>
        ),
        image: '/assets/images/about/craft.jpg',
        alt: 'Design intencional e atenção aos detalhes',
    },
    {
        text: (
            <>
                Preferimos{' '}
                <span className="text-green-accent">
                    conversas honestas
                </span>
                {' '}a relatórios bonitos. Quem trabalha com a gente sabe
                exatamente onde está, para onde vai e por que cada decisão foi tomada.
            </>
        ),
        image: '/assets/images/about/transparency.jpg',
        alt: 'Colaboração e comunicação aberta',
        reverse: true,
    },
    {
        text: (
            <>
                Tecnologia só vale quando{' '}
                <span className="text-green-accent">
                    move o ponteiro
                </span>
                . Não construímos por construir — entregamos o que faz o negócio
                do outro lado crescer de verdade.
            </>
        ),
        image: '/assets/images/about/results.jpg',
        alt: 'Resultados reais e impacto nos negócios',
    },
];

function AboutEssenceSection() {
    return (
        <section className="bg-eggshell w-full">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
                    {blocks.map((block, index) => {
                        const isReverse = block.reverse ?? false;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
                            >
                                {/* Image */}
                                <div
                                    className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${isReverse ? 'md:order-2' : 'md:order-1'
                                        }`}
                                >
                                    <Image
                                        src={block.image}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Text */}
                                <div
                                    className={`flex items-center ${isReverse ? 'md:order-1' : 'md:order-2'
                                        }`}
                                >
                                    <h3 className="font-rajdhani font-medium text-carbon leading-snug">
                                        {block.text}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AboutEssenceSection;
