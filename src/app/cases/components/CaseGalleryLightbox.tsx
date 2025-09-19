"use client";

import React, { useEffect } from 'react';

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
    const [index, setIndex] = React.useState(startIndex ?? 0);

    useEffect(() => {
        setIndex(startIndex ?? 0);
    }, [startIndex]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };

        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [index]);

    useEffect(() => onIndexChange?.(index), [index, onIndexChange]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    if (!images || images.length === 0) return null;

    const onOverlayClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement | null;

        // If the click is on a button (prev/next/close/thumbnail), do nothing
        if (target?.closest('button')) return;

        // If the click is on the main image itself, do nothing
        if (target?.closest('.lightbox-image')) return;

        // Otherwise, close the overlay
        onClose();
    };

    return (
        <div
            onClick={onOverlayClick}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 select-none"
            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
        >
            <button
                aria-label="Fechar galeria"
                className="absolute left-2 top-2 w-10 h-10 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/20 hover:bg-black/10 cursor-pointer"
                onClick={onClose}
            >
                ✕
            </button>

            <button
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/30 hover:bg-black/20 cursor-pointer"
                onClick={prev}
            >
                ‹
            </button>

            <button
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-md border border-white/20 text-white bg-black/30 hover:bg-black/20 cursor-pointer"
                onClick={next}
            >
                ›
            </button>

            {/* Content column: image (flexible) + thumbnails (fixed) */}
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-[95vw]" style={{ maxHeight: '90vh' }}>
                    <div className="flex-1 flex items-center justify-center w-full">
                        {/* Reserve space for thumbnails by limiting image height to calc(90vh - thumbnails area) */}
                        <img
                            src={images[index].src}
                            alt={images[index].alt ?? ''}
                            style={{ maxHeight: 'calc(90vh - 4rem)', maxWidth: '95vw' }}
                            className="w-auto h-auto object-contain rounded-md shadow-lg lightbox-image"
                            draggable={false}
                        />
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`p-0.5 ${i === index ? 'border-2 border-green-accent bg-green-accent/10' : 'bg-white/10'} rounded-sm`}
                                aria-label={`Ir para imagem ${i + 1}`}
                            >
                                <div className="w-12 h-12 relative overflow-hidden bg-transparent flex items-center justify-center">
                                    <img src={img.src} alt={img.alt ?? ''} className="max-w-full max-h-full object-contain" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
