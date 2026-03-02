'use client';
import React, { useState } from 'react'
import ServiceListItem from './ServiceListItem'
import NavigationButton from '../../components/NavigationButton'
import { Code, UserPlus, Cpu } from '@solar-icons/react/ssr';

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
            className='bg-carbon py-16 rounded-t-4xl mx-2'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                {/* Header com título e botão */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-6">
                    <div>
                        <h1 className="font-rajdhani font-bold text-white mb-4">
                            Construímos software
                        </h1>
                        <h5 className="font-league-spartan text-white/70 max-w-2xl">
                            Inteligente, rápido e familiar. A Dzign-e é a melhor forma de desenvolver com eficiência.
                        </h5>
                    </div>
                    <NavigationButton
                        href={'/services'}
                        text={'Ver mais serviços'}
                    />
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceListItem
                        icon={<Code weight="Bold" size={36} />}
                        title="Desenvolvimento"
                        description="Projetos desenvolvidos sob medida, com arquitetura robusta e tecnologias modernas para seu negócio."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <ServiceListItem
                        icon={<UserPlus weight="Outline" size={36} />}
                        title="Alocação de Equipes"
                        description="Times especializados sob demanda com os perfis certos para acelerar suas entregas."
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <ServiceListItem
                        icon={<Cpu weight="Bold" size={36} />}
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