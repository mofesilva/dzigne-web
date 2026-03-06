'use client';
import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandIcon from './BrandIcon';

export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}
export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}
export interface StaggeredMenuProps {
    position?: 'left' | 'right';
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    isFixed?: boolean;
    changeMenuColorOnOpen?: boolean;
    closeOnClickAway?: boolean;
    whatsappUrl?: string;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    position = 'right',
    colors = ['#171717', '#1F1F1F'],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoUrl = '/assets/dzigne-logotype-white-green.png',
    menuButtonColor = '#fff',
    openMenuButtonColor = '#fff',
    changeMenuColorOnOpen = true,
    accentColor = '#7fd10c',
    isFixed = false,
    closeOnClickAway = true,
    whatsappUrl = 'https://wa.me/5519999094848',
    onMenuOpen,
    onMenuClose
}: StaggeredMenuProps) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);

    // Scroll-based header background (matches original StickyNavbar behavior)
    const [isScrolled, setIsScrolled] = useState(false);

    // Route change detection
    const pathname = usePathname();
    const prevPathnameRef = useRef(pathname);

    // Current page label derived from items (hidden on home)
    const currentPageLabel = React.useMemo(() => {
        if (!items.length || pathname === '/') return '';
        // Exact match first
        const exact = items.find(it => it.link === pathname);
        if (exact) return exact.label;
        // Prefix match for nested routes (e.g. /cases/sigmaapp → Cases)
        const prefix = items
            .filter(it => it.link !== '/' && pathname.startsWith(it.link))
            .sort((a, b) => b.link.length - a.link.length)[0];
        return prefix ? prefix.label : '';
    }, [pathname, items]);

    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const textWrapRef = useRef<HTMLSpanElement | null>(null);
    const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
    const colorTweenRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    // Ref for closeMenu to avoid stale closures in effects
    const closeMenuRef = useRef<() => void>(() => { });

    // Scroll listener for header background — also check immediately on mount
    useEffect(() => {
        setIsScrolled(window.scrollY > 50);
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open (iOS-safe: position fixed approach) — mobile only
    const scrollYRef = useRef(0);
    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        if (!isMobile) return;

        if (open) {
            scrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollYRef.current);
        }
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
        };
    }, [open]);

    // Close on route change
    useEffect(() => {
        if (prevPathnameRef.current !== pathname && openRef.current) {
            closeMenuRef.current();
        }
        prevPathnameRef.current = pathname;
    }, [pathname]);

    // Close on Escape key
    useEffect(() => {
        if (!open) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenuRef.current();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open]);

    // GSAP initial setup
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;

            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers: HTMLElement[] = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === 'left' ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen, visibility: 'visible' });

            gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
            gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

            gsap.set(textInner, { yPercent: 0 });

            if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
        });
        return () => ctx.revert();
    }, [menuButtonColor, position]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

        const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
        const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as string]: 0 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

            tl.to(
                itemEls,
                { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity' as string]: 1, stagger: { each: 0.08, from: 'start' } },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;

            if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: { each: 0.08, from: 'start' },
                        onComplete: () => {
                            gsap.set(socialLinks, { clearProps: 'opacity' });
                        }
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, [position]);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all: HTMLElement[] = [...layers, panel];
        closeTweenRef.current?.kill();

        const offscreen = position === 'left' ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
                if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

                const numberEls = Array.from(
                    panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
                ) as HTMLElement[];
                if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as string]: 0 });

                const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
                const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

                busyRef.current = false;
            }
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        if (!icon || !h || !v) return;

        spinTweenRef.current?.kill();

        if (opening) {
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power4.out' } })
                .to(h, { rotate: 45, duration: 0.5 }, 0)
                .to(v, { rotate: -45, duration: 0.5 }, 0);
        } else {
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power3.inOut' } })
                .to(h, { rotate: 0, duration: 0.35 }, 0)
                .to(v, { rotate: 90, duration: 0.35 }, 0)
                .to(icon, { rotate: 0, duration: 0.001 }, 0);
        }
    }, []);

    const animateColor = useCallback(
        (opening: boolean) => {
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
            } else {
                gsap.set(btn, { color: menuButtonColor });
            }
        },
        [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
    );

    useEffect(() => {
        if (toggleBtnRef.current) {
            if (changeMenuColorOnOpen) {
                const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
                gsap.set(toggleBtnRef.current, { color: targetColor });
            } else {
                gsap.set(toggleBtnRef.current, { color: menuButtonColor });
            }
        }
    }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

    const animateText = useCallback((opening: boolean) => {
        const inner = textInnerRef.current;
        if (!inner) return;

        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? 'Menu' : 'Close';
        const targetLabel = opening ? 'Close' : 'Menu';
        const cycles = 3;

        const seq: string[] = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === 'Menu' ? 'Close' : 'Menu';
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);

        setTextLines(seq);
        gsap.set(inner, { yPercent: 0 });

        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: 'power4.out'
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }

        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

    // Keep ref updated for effects
    closeMenuRef.current = closeMenu;

    // Click-away handler
    useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeOnClickAway, open, closeMenu]);

    return (
        <div
            className={`sm-scope z-[60] pointer-events-none ${isFixed ? 'fixed top-0 left-0 w-screen overflow-hidden' : 'w-full h-full'}`}
            style={{ height: isFixed ? '100dvh' : undefined }}
        >
            <div
                className={
                    (className ? className + ' ' : '') + 'staggered-menu-wrapper pointer-events-none relative w-full h-full z-[50]'
                }
                style={accentColor ? ({ ['--sm-accent' as string]: accentColor } as React.CSSProperties) : undefined}
                data-position={position}
                data-open={open || undefined}
            >
                <div
                    ref={preLayersRef}
                    className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
                    aria-hidden="true"
                >
                    {(() => {
                        const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
                        let arr = [...raw];
                        if (arr.length >= 3) {
                            const mid = Math.floor(arr.length / 2);
                            arr.splice(mid, 1);
                        }
                        return arr.map((c, i) => (
                            <div
                                key={i}
                                className="sm-prelayer absolute top-0 right-0 h-full w-full"
                                style={{ background: c }}
                            />
                        ));
                    })()}
                </div>

                {/* Backdrop overlay — covers full screen when open (mobile) */}
                {open && (
                    <div
                        className="sm-backdrop fixed inset-0 bg-black/70 z-[1] pointer-events-auto lg:hidden"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}

                <header
                    className={`staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between pointer-events-none z-20 ${isScrolled ? 'h-18' : 'h-24'} transition-all duration-500 px-6 md:px-12 lg:px-20 2xl:px-32 ${isScrolled ? 'py-4' : 'py-8 md:py-10'}`}
                    style={{ backgroundColor: isScrolled ? '#000000' : 'transparent' }}
                    aria-label="Main navigation header"
                >
                    <div className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">
                        <Link href="/">
                            <Image
                                src={logoUrl || '/assets/dzigne-logotype-white-green.png'}
                                alt="Dzign-e"
                                className={`sm-logo-img block w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-6' : 'h-6 md:h-10'}`}
                                width={300}
                                height={72}
                                priority
                                draggable={false}
                            />
                        </Link>
                    </div>

                    {/* Current page indicator */}
                    {currentPageLabel && (
                        <span
                            className="sm-page-indicator hidden md:flex items-center gap-2 pointer-events-none select-none font-rajdhani text-[11px] font-medium tracking-[0.25em] uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ color: accentColor, opacity: 0.7 }}
                            aria-label={`Página atual: ${currentPageLabel}`}
                        >
                            <span
                                className="inline-block w-5 h-[1px]"
                                style={{ background: accentColor, opacity: 0.5 }}
                                aria-hidden="true"
                            />
                            {currentPageLabel}
                            <span
                                className="inline-block w-5 h-[1px]"
                                style={{ background: accentColor, opacity: 0.5 }}
                                aria-hidden="true"
                            />
                        </span>
                    )}

                    <button
                        ref={toggleBtnRef}
                        className="sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-rajdhani font-bold text-lg leading-none overflow-visible pointer-events-auto text-white"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls="staggered-menu-panel"
                        onClick={toggleMenu}
                        type="button"
                    >
                        <span
                            ref={textWrapRef}
                            className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap mr-1"
                            aria-hidden="true"
                        >
                            <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                                {textLines.map((l, i) => (
                                    <span className="sm-toggle-line block h-[1em] leading-none" key={i}>
                                        {l}
                                    </span>
                                ))}
                            </span>
                        </span>

                        <span
                            ref={iconRef}
                            className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
                            aria-hidden="true"
                        >
                            <span
                                ref={plusHRef}
                                className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                style={{ background: accentColor || '#7fd10c' }}
                            />
                            <span
                                ref={plusVRef}
                                className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                style={{ background: accentColor || '#7fd10c' }}
                            />
                        </span>
                    </button>
                </header>

                <aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className="staggered-menu-panel absolute top-0 right-0 h-full flex flex-col overflow-y-auto z-10 pointer-events-auto border-l-2 border-green-accent"
                    style={{ WebkitBackdropFilter: 'blur(12px)' }}
                    aria-hidden={!open}
                >
                    <div className="sm-panel-inner flex-1 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center">
                            <ul
                                className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                                role="list"
                                data-numbering={displayItemNumbering || undefined}
                            >
                                {items && items.length ? (
                                    items.map((it, idx) => (
                                        <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                                            <Link
                                                className="sm-panel-item relative font-rajdhani font-bold cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]"
                                                href={it.link}
                                                aria-label={it.ariaLabel}
                                                data-index={idx + 1}
                                                onClick={closeMenu}
                                            >
                                                <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                                    {it.label}
                                                </span>
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                                        <span className="sm-panel-item relative font-rajdhani font-bold cursor-pointer leading-none tracking-[-2px] uppercase inline-block no-underline pr-[1.4em]">
                                            <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                                No items
                                            </span>
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {displaySocials && socialItems && socialItems.length > 0 && (
                            <div className="sm-socials mt-auto pt-4 flex flex-col gap-3" aria-label="Social links">
                                <h3 className="sm-socials-title m-0 text-base font-medium font-rajdhani" style={{ color: accentColor }}>
                                    Socials
                                </h3>
                                <ul
                                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-5 flex-wrap"
                                    role="list"
                                >
                                    {socialItems.map((s, i) => (
                                        <li key={s.label + i} className="sm-socials-item">
                                            <a
                                                href={s.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sm-socials-link flex items-center justify-center no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear"
                                                aria-label={s.label}
                                            >
                                                <BrandIcon
                                                    name={s.label.toLowerCase()}
                                                    size={24}
                                                    alt={s.label}
                                                    className="invert opacity-90 hover:opacity-100 transition-opacity"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* WhatsApp CTA */}
                        {whatsappUrl && (
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm-whatsapp-cta flex items-center justify-center gap-3 rounded-full px-6 py-4 font-outfit font-semibold text-base text-white no-underline transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                                style={{ background: '#25D366' }}
                                aria-label="Entrar em contato pelo WhatsApp"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Entrar em contato
                            </a>
                        )}
                    </div>
                </aside>
            </div>

            <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 50; pointer-events: none; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope .sm-icon-line-v { transform: translate(-50%, -50%) rotate(90deg); }
.sm-scope .sm-line { display: none !important; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(300px, 42vw, 540px); height: 100%; background: #000000; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 7em 2.5em 2.5em 2.5em; overflow-y: auto; z-index: 10; -webkit-overflow-scrolling: touch; visibility: hidden; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(300px, 42vw, 540px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; visibility: hidden; }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #7fd10c); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
.sm-scope .sm-socials-list .sm-socials-link:hover,
.sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
.sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #7fd10c); outline-offset: 3px; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #eeeeee; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: var(--sm-accent, #7fd10c); }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #eeeeee; font-weight: 700; font-size: clamp(2.2rem, 5vw, 4rem); cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: color 0.2s ease; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: var(--sm-accent, #7fd10c); }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 0; font-size: 18px; font-weight: 400; color: var(--sm-accent, #7fd10c); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; height: 100dvh; height: 100%; } .sm-scope .sm-prelayers { width: 100%; left: 0; right: 0; } .sm-scope .sm-panel-list { gap: 2rem; } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; padding: 7.5em 1.5em 2em 1.5em; height: 100dvh; height: 100%; } .sm-scope .sm-prelayers { width: 100%; left: 0; right: 0; height: 100dvh; height: 100%; } .sm-scope .sm-panel-item { font-size: clamp(2rem, 8vw, 3rem); } .sm-scope .sm-panel-list { gap: 2rem; } .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { top: -1.2em; right: auto; left: 0; font-size: 14px; } }
.sm-scope .sm-whatsapp-cta { box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3); }
.sm-scope .sm-page-indicator { transition: opacity 0.4s ease; }
.sm-scope [data-open] .sm-page-indicator { opacity: 0 !important; pointer-events: none; }
      `}</style>
        </div>
    );
};

export default StaggeredMenu;
