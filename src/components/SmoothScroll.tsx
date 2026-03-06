'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    // Disable browser scroll restoration — always start at top on reload
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Dispositivos touch já possuem scroll inercial nativo suave.
        // O Lenis intercepta o touch scroll e causa tremidas/lag no mobile.
        const isTouchDevice =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return null;
}
