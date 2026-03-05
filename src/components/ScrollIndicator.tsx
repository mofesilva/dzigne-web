'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollIndicatorProps {
    className?: string;
}

export default function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let rafId: number;

        function tick() {
            const opacity = Math.max(0, 0.6 - (window.scrollY / 500) * 0.6);
            el!.style.opacity = String(opacity);
            el!.style.pointerEvents = opacity === 0 ? 'none' : '';
            rafId = requestAnimationFrame(tick);
        }

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div
            ref={ref}
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center ${className}`}
            style={{ opacity: 0.6 }}
        >
            {/* Mobile — circle swipe up */}
            <div className="md:hidden">
                <div className="w-10 h-10 rounded-full border-[3px] border-white/30 flex items-center justify-center animate-[swipeUp_1.8s_cubic-bezier(0.9,0,0.1,1)_infinite]">
                    <div className="w-3 h-3 rounded-full bg-white" />
                </div>
            </div>
            {/* Desktop — mouse scroll */}
            <div className="hidden md:block">
                <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
                    <div className="w-1 h-2.5 rounded-full bg-white/60 animate-[scrollWheel_1.5s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>
    );
}
