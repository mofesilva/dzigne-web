'use client';
import React, { useState, useRef } from 'react'

interface ServiceListItemProps {
    icon: string
    title: string
    description: string
}

function ServiceListItem({ icon, title, description }: ServiceListItemProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <div
            ref={cardRef}
            className="relative bg-eggshell/5 border border-eggshell/10 rounded-2xl p-8 transition-all duration-300 group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Efeito spotlight na borda */}
            {isHovered && (
                <div
                    className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                    style={{
                        background: `radial-gradient(80px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(127, 209, 12, 0.6), transparent 70%)`,
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