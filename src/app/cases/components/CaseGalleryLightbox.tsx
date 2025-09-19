"use client";

import React from "react";

interface ImageItem {
    src: string;
    alt?: string;
    description?: string;
}

interface Props {
    images: ImageItem[];
    startIndex: number;
    onClose: () => void;
    onIndexChange?: (idx: number) => void;
}

export default function CaseGalleryLightbox({ images, startIndex, onClose, onIndexChange }: Props) {
    const [index, setIndex] = React.useState<number>(startIndex ?? 0);

    React.useEffect(() => setIndex(startIndex ?? 0), [startIndex]);

    // Scroll lock and keyboard handling
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        document.addEventListener("keydown", onKey);

        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        const doc = document;
        const body = doc.body;
        const html = doc.documentElement;

        const prevBody = {
            position: body.style.position || "",
            top: body.style.top || "",
            left: body.style.left || "",
            right: body.style.right || "",
            width: body.style.width || "",
            overflow: body.style.overflow || "",
        };
        const prevHtmlOverflow = html.style.overflow || "";

        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";

        // Prevent touchmove globally except when inside the thumbnail strip (.dg-thumb-scroll)
        const onTouchMove = (e: TouchEvent) => {
            const tgt = e.target as HTMLElement | null;
            if (tgt && tgt.closest && tgt.closest(".dg-thumb-scroll")) return;
            e.preventDefault();
        };

        document.addEventListener("touchmove", onTouchMove as EventListener, { passive: false } as any);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("touchmove", onTouchMove as EventListener);

            // restore body/html styles
            body.style.position = prevBody.position;
            body.style.top = prevBody.top;
            body.style.left = prevBody.left;
            body.style.right = prevBody.right;
            body.style.width = prevBody.width;
            body.style.overflow = prevBody.overflow;
            html.style.overflow = prevHtmlOverflow;

            // restore scroll position
            window.scrollTo(0, scrollY);
        };
    }, [index, onClose]);

    React.useEffect(() => onIndexChange?.(index), [index, onIndexChange]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    if (!images || images.length === 0) return null;

    // Touch/swipe handling for mobile
    const touchStartX = React.useRef<number | null>(null);
    const touchStartY = React.useRef<number | null>(null);
    const touchStartTime = React.useRef<number | null>(null);
    const touchIgnore = React.useRef<boolean>(false);

    const onTouchStart = (e: React.TouchEvent) => {
        const t = e.touches[0];
        touchStartX.current = t.clientX;
        touchStartY.current = t.clientY;
        touchStartTime.current = Date.now();
        const tgt = e.target as HTMLElement | null;
        touchIgnore.current = !!(tgt && tgt.closest && (tgt.closest("button") || tgt.closest(".dg-thumb-scroll")));
    };

    const onTouchMove = (e: React.TouchEvent) => {
        // noop - we evaluate on touchend
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchIgnore.current) {
            touchStartX.current = null;
            touchStartY.current = null;
            touchStartTime.current = null;
            touchIgnore.current = false;
            return;
        }

        const touch = (e.changedTouches && e.changedTouches[0]) || null;
        if (!touch || touchStartX.current === null || touchStartY.current === null || touchStartTime.current === null) return;
        const dx = touch.clientX - touchStartX.current;
        const dy = touch.clientY - touchStartY.current;

        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        const THRESHOLD = 50;
        if (absDx > THRESHOLD && absDx > absDy * 1.5) {
            if (dx < 0) next();
            else prev();
        }

        touchStartX.current = null;
        touchStartY.current = null;
        touchStartTime.current = null;
        touchIgnore.current = false;
    };

    const onOverlayClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        if (target.closest("button")) return;
        if (target.closest(".lightbox-image")) return;
        onClose();
    };

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={onOverlayClick}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 select-none"
            style={{ height: "100dvh", overflow: "hidden", overscrollBehavior: "contain", touchAction: "manipulation" } as React.CSSProperties}
        >
            <button
                aria-label="Fechar galeria"
                className="absolute left-4 top-4 w-10 h-10 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/20 hover:bg-black/10 cursor-pointer"
                onClick={onClose}
            >
                ✕
            </button>

            <button
                aria-label="Imagem anterior"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/30 hover:bg-black/20 cursor-pointer"
                onClick={prev}
            >
                ‹
            </button>

            <button
                aria-label="Próxima imagem"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/30 hover:bg-black/20 cursor-pointer"
                onClick={next}
            >
                ›
            </button>

            <div className="w-full flex items-center justify-center box-border">
                <div className="lightbox-inner flex flex-col items-center w-full max-w-[95vw]" style={{ maxHeight: "90dvh", paddingBottom: '4.5rem' }}>
                    <div className="flex-1 flex items-center justify-center w-full" style={{ paddingBottom: '0.5rem' }}>
                        <img
                            src={images[index].src}
                            alt={images[index].alt ?? ""}
                            className="w-auto h-auto object-contain rounded-md shadow-lg lightbox-image"
                            style={{ maxHeight: "calc(90dvh - 6rem)", maxWidth: "95vw" } as React.CSSProperties}
                            draggable={false}
                        />
                    </div>

                    <style jsx global>{`
                        .dg-thumb-scroll { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
                        .dg-thumb-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }
                    `}</style>
                </div>
            </div>

            {/* fixed bottom-center thumbnail strip */}
            <div className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-[1100] w-[min(90vw,100%)] pointer-events-auto">
                <div className="mx-auto flex justify-center">
                    <div className="dg-thumb-scroll flex items-center gap-2 px-2 overflow-x-auto overflow-y-hidden max-w-[90vw]">

                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`p-0.5 ${i === index ? "border-2 border-green-accent bg-green-accent/10" : "bg-white/10"} rounded-sm`}
                                aria-label={`Ir para imagem ${i + 1}`}
                            >
                                <div className="w-12 h-12 relative overflow-hidden bg-transparent flex items-center justify-center">
                                    <img src={img.src} alt={img.alt ?? ""} className="max-w-full max-h-full object-contain" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
