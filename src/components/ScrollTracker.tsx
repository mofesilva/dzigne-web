'use client';

import { useEffect, useRef } from 'react';

export default function ScrollTracker() {
    const fillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // O indicador é hidden no mobile (hidden md:flex), pular o loop rAF
        const mql = window.matchMedia('(min-width: 768px)');
        if (!mql.matches) return;

        let rafId: number;

        function update() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

            if (fillRef.current) {
                fillRef.current.style.height = `${pct}%`;
            }

            rafId = requestAnimationFrame(update);
        }

        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
            {/* Track */}
            <div className="relative w-[3px] h-[120px] rounded-full bg-white/10">
                {/* Fill */}
                <div
                    ref={fillRef}
                    className="absolute top-0 left-0 w-full rounded-full bg-green-accent"
                    style={{ height: '0%' }}
                />
            </div>
        </div>
    );
}
