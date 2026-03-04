'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

interface ParallaxResult {
    ref: React.RefObject<HTMLDivElement | null>;
    style: React.CSSProperties;
}

/**
 * Custom hook for parallax scroll effects.
 * Uses IntersectionObserver for performance — only tracks scroll when visible.
 * @param speed - Parallax factor. Negative = moves opposite to scroll. Typical range: -0.15 to 0.15
 */
export function useParallax(speed: number): ParallaxResult {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
    const isVisible = useRef(false);
    const rafId = useRef<number | null>(null);

    const handleScroll = useCallback(() => {
        if (!isVisible.current || !ref.current) return;

        if (rafId.current) cancelAnimationFrame(rafId.current);

        rafId.current = requestAnimationFrame(() => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far the element is from center of viewport
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;

            setOffset(distanceFromCenter * speed);
        });
    }, [speed]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Desabilita parallax no mobile — scroll nativo já é suave
        const isTouchDevice =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible.current = entry.isIntersecting;
                if (entry.isIntersecting) {
                    handleScroll();
                }
            },
            { threshold: 0, rootMargin: '100px' }
        );

        observer.observe(element);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [handleScroll]);

    return {
        ref,
        style: {
            transform: `translateY(${offset}px)`,
            willChange: 'transform',
        },
    };
}
