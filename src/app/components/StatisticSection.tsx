'use client';
import React, { useState, useEffect, useRef } from 'react'

function StatisticSection() {
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
            className='bg-carbon w-full py-20'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatisticCard
                        icon="fa-solid fa-business-time"
                        title="+ de 15 anos"
                        description="transformando ideias em produtos digitais"
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <StatisticCard
                        icon="fa-solid fa-terminal"
                        title="+ de 35 anos"
                        description="de experiência com desenvolvimento acumulado"
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <StatisticCard
                        icon="fa-solid fa-id-badge"
                        title="+ de 60 empresas"
                        description="transformadas por nossas soluções!"
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                    <StatisticCard
                        icon="fa-solid fa-compass"
                        title="+ de 9 segmentos"
                        description="impactados por nossa expertise!"
                        globalMousePosition={mousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                </div>
            </div>
        </section>
    )
}

interface StatisticCardProps {
    icon: string;
    title: string;
    description: string;
    globalMousePosition: { x: number; y: number };
    isMouseInSection: boolean;
}

function StatisticCard({ icon, title, description, globalMousePosition, isMouseInSection }: StatisticCardProps) {
    const [isNearby, setIsNearby] = useState(false);
    const [isInside, setIsInside] = useState(false);
    const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current || !isMouseInSection) {
            setIsNearby(false);
            setIsInside(false);
            return;
        }

        const rect = cardRef.current.getBoundingClientRect();
        const distance = 120;

        const isNear = globalMousePosition.x >= rect.left - distance &&
            globalMousePosition.x <= rect.right + distance &&
            globalMousePosition.y >= rect.top - distance &&
            globalMousePosition.y <= rect.bottom + distance;

        const isWithin = globalMousePosition.x >= rect.left &&
            globalMousePosition.x <= rect.right &&
            globalMousePosition.y >= rect.top &&
            globalMousePosition.y <= rect.bottom;

        setIsNearby(isNear);
        setIsInside(isWithin);

        if (isNear) {
            setLocalMousePosition({
                x: globalMousePosition.x - rect.left,
                y: globalMousePosition.y - rect.top
            });
        }
    }, [globalMousePosition, isMouseInSection]);

    const handleCardMouseEnter = () => {
        if (isMouseInSection) {
            setIsInside(true);
        }
    };

    const handleCardMouseLeave = () => {
        setIsInside(false);
    };

    return (
        <div
            ref={cardRef}
            className="relative bg-eggshell/5 border border-eggshell/10 rounded-2xl p-8 transition-all duration-300 group"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
        >
            {/* Borda verde quando dentro */}
            <div
                className={`absolute -inset-[1px] rounded-2xl border border-green-accent pointer-events-none transition-opacity duration-300 ease-out ${isInside ? 'opacity-70' : 'opacity-0'}`}
            />

            {/* Efeito spotlight quando próximo mas fora */}
            {isNearby && !isInside && isMouseInSection && (
                <div
                    className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-200"
                    style={{
                        background: `radial-gradient(80px circle at ${localMousePosition.x}px ${localMousePosition.y}px, rgba(127, 209, 12, 0.6), transparent 70%)`,
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        padding: '1px'
                    }}
                />
            )}

            <div className="mb-6">
                <i className={`${icon} text-green-accent text-4xl`}></i>
            </div>
            <h2 className="font-rajdhani text-2xl font-bold text-white mb-4 group-hover:text-green-accent transition-colors cursor-default">
                {title}
            </h2>
            <p className="font-league-spartan text-white/70 leading-relaxed cursor-default">
                {description}
            </p>
        </div>
    )
}

export default StatisticSection;