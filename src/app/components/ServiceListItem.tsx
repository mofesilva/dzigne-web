'use client';
import React, { useState, useRef, useEffect } from 'react'

interface ServiceListItemProps {
    icon: React.ReactNode
    title: string
    description: string
    globalMousePosition: { x: number, y: number }
    isMouseInSection: boolean
}

function ServiceListItem({ icon, title, description, globalMousePosition, isMouseInSection }: ServiceListItemProps) {
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

    return (
        <div
            ref={cardRef}
            className="relative bg-eggshell/[0.04] border border-eggshell/[0.08] rounded-2xl p-8 lg:p-10 transition-all duration-300 group hover:bg-eggshell/[0.07]"
            onMouseEnter={() => isMouseInSection && setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
        >
            {/* Green border on hover */}
            <div
                className={`absolute -inset-[1px] rounded-2xl border border-green-accent/60 pointer-events-none transition-opacity duration-300 ease-out ${isInside ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Spotlight near border */}
            {isNearby && !isInside && isMouseInSection && (
                <div
                    className="absolute -inset-[1px] rounded-2xl pointer-events-none"
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

            <div className="mb-8 text-green-accent drop-shadow-[0_0_12px_rgba(127,209,12,0.3)]">
                {icon}
            </div>
            <h4
                className="font-rajdhani font-bold text-eggshell mb-3 group-hover:text-green-accent transition-colors cursor-default"
                style={{ fontSize: 'clamp(1.4rem, 1.5vw + 0.5rem, 1.8rem)' }}
            >
                {title}
            </h4>
            <p
                className="font-league-spartan text-eggshell/50 leading-relaxed cursor-default"
                style={{ fontSize: 'clamp(0.9rem, 0.5vw + 0.5rem, 1.05rem)' }}
            >
                {description}
            </p>
        </div>
    )
}

export default ServiceListItem