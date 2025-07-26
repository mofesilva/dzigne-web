'use client';
import React, { useState } from 'react'
import ServiceListItem from './ServiceListItem'
import NavigationButton from '../../components/NavigationButton'

function ServicesSection() {
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
                {/* Header com título e botão */}
                <div className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="font-rajdhani text-5xl font-bold text-white mb-4">
                            Construímos software
                        </h1>
                        <p className="font-league-spartan text-xl text-white/70 max-w-2xl">
                            Inteligente, rápido e familiar. A Dzign-e é a melhor forma de desenvolver com eficiência.
                        </p>
                    </div>
                    <NavigationButton
                        href={'/services'}
                        text={'Ver mais serviços'}
                    />
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceListItem
                        icon="fa-solid fa-code"
                        title="Desenvolvimento"
                        description="Projetos desenvolvidos sob medida, com arquitetura robusta e tecnologias modernas para seu negócio."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <ServiceListItem
                        icon="fa-solid fa-user-plus"
                        title="Alocação de Equipes"
                        description="Times especializados sob demanda com os perfis certos para acelerar suas entregas."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <ServiceListItem
                        icon="fa-solid fa-microchip"
                        title="Tecnologia Proprietária"
                        description="Soluções inovadoras com nossa tecnologia proprietária para acelerar seu desenvolvimento."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                </div>
            </div>
        </section>
    )
}

export default ServicesSection