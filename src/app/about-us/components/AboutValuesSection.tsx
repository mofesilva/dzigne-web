'use client';
import React, { useState } from 'react';
import AboutValueCard from './AboutValueCard';

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
            className='bg-carbon w-full pt-32 pb-20'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-white mb-4">
                        Nossos Valores
                    </h2>
                    <p className="font-league-spartan text-xl text-white/70 max-w-2xl mx-auto">
                        Os princípios que nos guiam em cada projeto e decisão que tomamos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AboutValueCard
                        icon="fa-solid fa-heart"
                        title="Paixão"
                        description="Amamos o que fazemos e isso se reflete em cada linha de código que escrevemos."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon="fa-solid fa-handshake"
                        title="Transparência"
                        description="Comunicação clara e honesta em todas as etapas do projeto."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon="fa-solid fa-rocket"
                        title="Agilidade"
                        description="Entregas rápidas sem comprometer a qualidade do produto final."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <AboutValueCard
                        icon="fa-solid fa-star"
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
