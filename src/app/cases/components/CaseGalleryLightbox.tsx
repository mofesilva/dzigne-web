"use client";

import React from "react";
import LazyImage from '@/components/LazyImage';
import Carousel from '@/components/Swiper';
import type { Swiper as SwiperClass } from 'swiper/types';

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
    const swiperRef = React.useRef<SwiperClass | null>(null);

    React.useEffect(() => setIndex(startIndex ?? 0), [startIndex]);

    React.useEffect(() => onIndexChange?.(index), [index, onIndexChange]);

    // Scroll lock and keyboard handling (kept from previous implementation)
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
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
        const docOnTouchMove = (e: TouchEvent) => {
            const tgt = e.target as HTMLElement | null;
            if (tgt && tgt.closest && tgt.closest(".dg-thumb-scroll")) return;
            e.preventDefault();
        };

        document.addEventListener("touchmove", docOnTouchMove, { passive: false });

        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("touchmove", docOnTouchMove);

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
    }, [onClose]);

    if (!images || images.length === 0) return null;

    const slides = images.map((img, i) => (
        <div key={i} className="flex items-center justify-center" style={{ maxHeight: 'calc(90dvh - 6rem)' }}>
            <div style={{ maxHeight: 'calc(90dvh - 6rem)', maxWidth: '95vw', width: '100%', height: 'auto' }} className="flex items-center justify-center">
                <LazyImage
                    src={img.src}
                    alt={img.alt ?? ""}
                    width={1200}
                    height={800}
                    style={{ objectFit: 'contain', maxHeight: 'calc(90dvh - 6rem)', maxWidth: '95vw' }}
                    className="rounded-md shadow-lg lightbox-image"
                    draggable={false}
                />
            </div>
        </div>
    ));

    const onOverlayClick = (e: React.MouseEvent) => {
        // only close when clicking directly on the overlay (not its children)
        if (e.target !== e.currentTarget) return;
        onClose();
    };

    return (
        <div
            onClick={onOverlayClick}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-0 md:p-4 select-none"
            style={{ height: "100dvh", overflow: "hidden", overscrollBehavior: "contain", touchAction: "manipulation" } as React.CSSProperties}
        >
            <button
                aria-label="Fechar galeria"
                className="absolute left-4 top-4 w-10 h-10 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/20 hover:bg-green-accent/20 cursor-pointer"
                onClick={onClose}
            >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            {/* Prev/Next buttons moved to overlay level so horizontal offset matches close button */}
            <button
                aria-label="Imagem anterior"
                className="lightbox-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/20 hover:bg-green-accent/20 cursor-pointer z-[1010]"
            >
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
                aria-label="Próxima imagem"
                className="lightbox-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/20 hover:bg-green-accent/20 cursor-pointer z-[1010]"
            >
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>

            <div className="w-full flex items-center justify-center box-border">
                <div className="lightbox-inner flex flex-col items-center w-full max-w-[95vw]" style={{ maxHeight: "90dvh", paddingBottom: '4.5rem' }}>
                    <div className="flex-1 relative flex items-center justify-center w-full" style={{ paddingBottom: '0.5rem' }}>
                        <Carousel
                            className="case-lightbox-swiper w-full"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                            options={{
                                slidesPerView: 1,
                                centeredSlides: true,
                                spaceBetween: 0,
                                autoplay: false,
                                // ensure initial slide respects the provided startIndex
                                initialSlide: startIndex ?? index,
                                navigation: { nextEl: '.lightbox-next', prevEl: '.lightbox-prev' },
                                pagination: false,
                                loop: true,
                            }}
                            // When looping is enabled Swiper exposes `realIndex` which maps to the
                            // original slides array index. Use that to keep our thumbnail index in sync.
                            onSlideChange={(s: SwiperClass) => {
                                const real = typeof s.realIndex === 'number' ? s.realIndex : s.activeIndex % images.length;
                                setIndex(real);
                            }}
                            onSwiper={(s: SwiperClass) => (swiperRef.current = s)}
                            slides={slides}
                        />
                    </div>

                    <style jsx global>{`
                        .dg-thumb-scroll { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
                        .dg-thumb-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }
                        /* Ensure slides are always centered and images contained */
                        .case-lightbox-swiper .swiper-wrapper { align-items: center; }
                        .case-lightbox-swiper .swiper-slide { display: flex; align-items: center; justify-content: center; }
                        .case-lightbox-swiper .lightbox-image, .case-lightbox-swiper img { object-fit: contain !important; max-width: 95vw; max-height: calc(90dvh - 6rem); }
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
                                onClick={() => {
                                    // If swiper is in loop mode use slideToLoop (keeps correct duplicated-slide handling)
                                    if (swiperRef.current) {
                                        const s = swiperRef.current;
                                        if (typeof s.slideToLoop === 'function') {
                                            try { s.slideToLoop(i); } catch { s.slideTo(i); }
                                        } else if (typeof s.slideTo === 'function') {
                                            try { s.slideTo(i); } catch { setIndex(i); }
                                        } else {
                                            setIndex(i);
                                        }
                                    } else {
                                        setIndex(i);
                                    }
                                }}
                                className={`p-0.5 ${i === index ? "border-2 border-green-accent bg-green-accent/10" : "bg-white/10"} hover:bg-green-accent/20 rounded-sm cursor-pointer`}
                                aria-label={`Ir para imagem ${i + 1}`}
                            >
                                {/* thumbnail: use LazyImage wrapper with fill so the image stays contained */}
                                <div className="w-12 h-12 relative overflow-hidden bg-transparent">
                                    <LazyImage wrapperClassName="w-full h-full relative" src={img.src} alt={img.alt ?? ""} className="object-contain" fill />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
