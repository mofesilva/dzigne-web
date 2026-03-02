'use client';
import React, { useState } from 'react';
import AboutValueCard from './AboutValueCard';
import { Heart, HandShake, Rocket, Star } from '@solar-icons/react/ssr';

function AboutValuesSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseInSection, setIsMouseInSection] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsMouseInSection(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInSection(false);
    };

    return (
        <section
            className='bg-carbon w-full py-16'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <h1 className="font-rajdhani font-bold text-white mb-4">
                        Nossos Valores
                    </h1>
                    <h5 className="font-league-spartan text-white/70 max-w-2xl mx-auto">
                        Os princípios que nos guiam em cada projeto e decisão que tomamos.
                    </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AboutValueCard
                        icon={<Heart weight="Bold" size={36} />}
                        title="Paixão"
                        description="Amamos o que fazemos e isso se reflete em cada linha de código que escrevemos."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon={<HandShake weight="Outline" size={36} />}
                        title="Transparência"
                        description="Comunicação clara e honesta em todas as etapas do projeto."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon={<Rocket weight="Bold" size={36} />}
                        title="Agilidade"
                        description="Entregas rápidas sem comprometer a qualidade do produto final."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon={<Star weight="Bold" size={36} />}
                        title="Qualidade"
                        description="Sempre buscamos a excelência em cada detalhe dos nossos projetos."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutValuesSection;
