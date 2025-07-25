'use client';
import React, { useState, useRef, useEffect } from 'react'

interface ServiceListItemProps {
    icon: string
    title: string
    description: string
    globalMousePosition: { x: number, y: number }
}

function ServiceListItem({ icon, title, description, globalMousePosition }: ServiceListItemProps) {
    const [isNearby, setIsNearby] = useState(false);
    const [isInside, setIsInside] = useState(false);
    const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const distance = 350;

        // Verifica se está próximo do card
        const isNear = globalMousePosition.x >= rect.left - distance &&
            globalMousePosition.x <= rect.right + distance &&
            globalMousePosition.y >= rect.top - distance &&
            globalMousePosition.y <= rect.bottom + distance;

        // Verifica se está dentro do card
        const isWithin = globalMousePosition.x >= rect.left &&
            globalMousePosition.x <= rect.right &&
            globalMousePosition.y >= rect.top &&
            globalMousePosition.y <= rect.bottom;

        setIsNearby(isNear);
        setIsInside(isWithin);

        // Converte coordenadas globais para locais
        if (isNear) {
            setLocalMousePosition({
                x: globalMousePosition.x - rect.left,
                y: globalMousePosition.y - rect.top
            });
        }
    }, [globalMousePosition]);

    return (
        <div
            ref={cardRef}
            className="relative bg-eggshell/5 border border-eggshell/10 rounded-2xl p-8 transition-all duration-300 group"
        >
            {/* Borda toda verde quando dentro - só transição de opacity */}
            <div
                className={`absolute -inset-[1px] rounded-2xl border border-green-accent/70 pointer-events-none transition-opacity duration-300 ease-out ${isInside ? 'opacity-70' : 'opacity-0'
                    }`}
            />

            {/* Efeito spotlight quando próximo mas fora */}
            {isNearby && !isInside && (
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
            <h2 className="font-rajdhani text-2xl font-bold text-white mb-4 group-hover:text-green-accent transition-colors">
                {title}
            </h2>
            <p className="font-league-spartan text-white/70 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default ServiceListItem