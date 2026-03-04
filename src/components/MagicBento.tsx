'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/* ═══════════════════════════════════════════════════════
   MagicBento — composable building-blocks layer
   Adapted from react-bits (https://reactbits.dev)
   ═══════════════════════════════════════════════════════ */

const MOBILE_BREAKPOINT = 768;

// ─── Internal Helpers ─────────────────────────────────

function createParticle(x: number, y: number, color: string): HTMLDivElement {
    const el = document.createElement('div');
    el.className = 'bento-particle';
    el.style.cssText = `
    position:absolute;width:4px;height:4px;border-radius:50%;
    background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.6);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;
  `;
    return el;
}

function spotlightThresholds(radius: number) {
    return { proximity: radius * 0.5, fadeDistance: radius * 0.75 };
}

function setGlowProps(card: HTMLElement, mx: number, my: number, glow: number, radius: number) {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--glow-x', `${((mx - r.left) / r.width) * 100}%`);
    card.style.setProperty('--glow-y', `${((my - r.top) / r.height) * 100}%`);
    card.style.setProperty('--glow-intensity', String(glow));
    card.style.setProperty('--glow-radius', `${radius}px`);
}

function useIsMobile() {
    const [m, setM] = useState(false);
    useEffect(() => {
        const check = () => setM(window.innerWidth <= MOBILE_BREAKPOINT);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return m;
}

// ─── ParticleCard (internal) ──────────────────────────

interface ParticleCardInternalProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disableAnimations?: boolean;
    particleCount?: number;
    glowColor?: string;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}

function ParticleCardInternal({
    children,
    className = '',
    style,
    disableAnimations = false,
    particleCount = 12,
    glowColor = '127, 209, 12',
    enableTilt = false,
    clickEffect = true,
    enableMagnetism = true,
}: ParticleCardInternalProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
    const isHoveredRef = useRef(false);
    const poolRef = useRef<HTMLDivElement[]>([]);
    const poolReady = useRef(false);
    const magRef = useRef<gsap.core.Tween | null>(null);

    const initPool = useCallback(() => {
        if (poolReady.current || !cardRef.current) return;
        const { width, height } = cardRef.current.getBoundingClientRect();
        poolRef.current = Array.from({ length: particleCount }, () =>
            createParticle(Math.random() * width, Math.random() * height, glowColor),
        );
        poolReady.current = true;
    }, [particleCount, glowColor]);

    const clearAll = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magRef.current?.kill();
        particlesRef.current.forEach(p => {
            gsap.to(p, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => p.remove(),
            });
        });
        particlesRef.current = [];
    }, []);

    const spawnParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;
        if (!poolReady.current) initPool();

        poolRef.current.forEach((p, i) => {
            const tid = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;
                const clone = p.cloneNode(true) as HTMLDivElement;
                cardRef.current!.appendChild(clone);
                particlesRef.current.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true,
                });
                gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
            }, i * 100);
            timeoutsRef.current.push(tid);
        });
    }, [initPool]);

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;
        const el = cardRef.current;

        const enter = () => {
            isHoveredRef.current = true;
            spawnParticles();
            if (enableTilt) {
                gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
            }
        };

        const leave = () => {
            isHoveredRef.current = false;
            clearAll();
            if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
            if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
        };

        const move = (e: MouseEvent) => {
            if (!enableTilt && !enableMagnetism) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;

            if (enableTilt) {
                gsap.to(el, {
                    rotateX: ((y - cy) / cy) * -10,
                    rotateY: ((x - cx) / cx) * 10,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000,
                });
            }

            if (enableMagnetism) {
                magRef.current = gsap.to(el, {
                    x: (x - cx) * 0.05,
                    y: (y - cy) * 0.05,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        const click = (e: MouseEvent) => {
            if (!clickEffect) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxD = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height),
            );
            const ripple = document.createElement('div');
            ripple.style.cssText = `
        position:absolute;width:${maxD * 2}px;height:${maxD * 2}px;border-radius:50%;
        background:radial-gradient(circle,rgba(${glowColor},0.4) 0%,rgba(${glowColor},0.2) 30%,transparent 70%);
        left:${x - maxD}px;top:${y - maxD}px;pointer-events:none;z-index:1000;
      `;
            el.appendChild(ripple);
            gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
        };

        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        el.addEventListener('mousemove', move);
        el.addEventListener('click', click);

        return () => {
            isHoveredRef.current = false;
            el.removeEventListener('mouseenter', enter);
            el.removeEventListener('mouseleave', leave);
            el.removeEventListener('mousemove', move);
            el.removeEventListener('click', click);
            clearAll();
        };
    }, [spawnParticles, clearAll, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`${className} relative overflow-hidden`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {children}
        </div>
    );
}

// ─── GlobalSpotlight (internal) ───────────────────────

function GlobalSpotlight({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = 300,
    glowColor = '127, 209, 12',
}: {
    gridRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}) {
    const spotRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;

        const spot = document.createElement('div');
        spot.style.cssText = `
      position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;
      background:radial-gradient(circle,
        rgba(${glowColor},0.15) 0%,rgba(${glowColor},0.08) 15%,
        rgba(${glowColor},0.04) 25%,rgba(${glowColor},0.02) 40%,
        rgba(${glowColor},0.01) 65%,transparent 70%);
      z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;
    `;
        document.body.appendChild(spot);
        spotRef.current = spot;

        const onMove = (e: MouseEvent) => {
            if (!spotRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section');
            const rect = section?.getBoundingClientRect();
            const inside = rect &&
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;

            const cards = gridRef.current.querySelectorAll('.bento-card');

            if (!inside) {
                gsap.to(spotRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
                cards.forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'));
                return;
            }

            const { proximity, fadeDistance } = spotlightThresholds(spotlightRadius);
            let minDist = Infinity;

            cards.forEach(c => {
                const el = c as HTMLElement;
                const cr = el.getBoundingClientRect();
                const cx = cr.left + cr.width / 2;
                const cy = cr.top + cr.height / 2;
                const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
                minDist = Math.min(minDist, dist);
                const glow = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance - dist) / (fadeDistance - proximity) : 0;
                setGlowProps(el, e.clientX, e.clientY, glow, spotlightRadius);
            });

            gsap.to(spotRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });

            const targetOp = minDist <= proximity ? 0.8
                : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.8
                    : 0;
            gsap.to(spotRef.current, { opacity: targetOp, duration: targetOp > 0 ? 0.2 : 0.5, ease: 'power2.out' });
        };

        const onLeave = () => {
            gridRef.current?.querySelectorAll('.bento-card').forEach(c =>
                (c as HTMLElement).style.setProperty('--glow-intensity', '0'),
            );
            if (spotRef.current) gsap.to(spotRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            spotRef.current?.remove();
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
}

// ═══════════════════════════════════════════════════════
//  EXPORTED — MagicBentoGrid
// ═══════════════════════════════════════════════════════

export interface MagicBentoGridProps {
    children: React.ReactNode;
    enableSpotlight?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
    disableAnimations?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function MagicBentoGrid({
    children,
    enableSpotlight = true,
    spotlightRadius = 300,
    glowColor = '127, 209, 12',
    disableAnimations = false,
    className = '',
    style,
}: MagicBentoGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const off = disableAnimations || isMobile;

    return (
        <>
            <style>{`
        .bento-section {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
          --glow-color: ${glowColor};
        }
        .bento-card--glow::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 4px;
          background: radial-gradient(
            var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
            rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
            transparent 60%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .bento-card--glow:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${glowColor}, 0.12);
        }
        .bento-particle::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: rgba(${glowColor}, 0.2);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>

            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={off}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <div
                ref={gridRef}
                className={`bento-section select-none relative ${className}`}
                style={style}
            >
                {children}
            </div>
        </>
    );
}

// ═══════════════════════════════════════════════════════
//  EXPORTED — MagicBentoCard
// ═══════════════════════════════════════════════════════

export interface MagicBentoCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    enableStars?: boolean;
    enableBorderGlow?: boolean;
    enableTilt?: boolean;
    enableMagnetism?: boolean;
    clickEffect?: boolean;
    particleCount?: number;
    glowColor?: string;
    disableAnimations?: boolean;
}

export function MagicBentoCard({
    children,
    className = '',
    style,
    enableStars = true,
    enableBorderGlow = true,
    enableTilt = false,
    enableMagnetism = false,
    clickEffect = true,
    particleCount = 12,
    glowColor = '127, 209, 12',
    disableAnimations = false,
}: MagicBentoCardProps) {
    const isMobile = useIsMobile();
    const off = disableAnimations || isMobile;

    const cls = `bento-card ${enableBorderGlow ? 'bento-card--glow' : ''} relative overflow-hidden transition-all duration-300 ${className}`;

    return (
        <ParticleCardInternal
            className={cls}
            style={style}
            disableAnimations={off}
            particleCount={enableStars && !off ? particleCount : 0}
            glowColor={glowColor}
            enableTilt={enableTilt}
            clickEffect={clickEffect && !off}
            enableMagnetism={enableMagnetism && off}
        >
            {children}
        </ParticleCardInternal>
    );
}
