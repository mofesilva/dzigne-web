"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import CaseGalleryLightbox from './CaseGalleryLightbox';

interface ImageItem {
    src: string;
    alt?: string;
    description?: string;
}

interface Props {
    images: ImageItem[];
}

export default function CaseGalleryClient({ images }: Props) {
    const [open, setOpen] = React.useState(false);
    const [startIndex, setStartIndex] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const openAt = (idx: number) => {
        setStartIndex(idx);
        setOpen(true);
    };

    // Assign sizes for visual variety: first image large, then alternate
    const getSpan = (i: number, total: number) => {
        if (total <= 2) return 'col-span-1';
        if (i === 0) return 'col-span-2 row-span-2';
        if ((i - 1) % 5 === 2) return 'col-span-2';
        return 'col-span-1';
    };

    return (
        <div ref={ref}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-3 md:gap-4">
                {images.map((image, index) => (
                    <motion.figure
                        key={index}
                        className={`group ${getSpan(index, images.length)}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.6) }}
                    >
                        <div
                            className="relative w-full h-full overflow-hidden rounded-2xl bg-eggshell/[0.03] border border-eggshell/[0.06] cursor-pointer hover:border-green-accent/30 transition-colors duration-300"
                            onClick={() => openAt(index)}
                        >
                            <div className="absolute inset-0 p-5 flex items-center justify-center">
                                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src={image.src}
                                        alt={image.alt ?? ''}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-contain"
                                        quality={90}
                                    />
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-green-accent/0 group-hover:bg-green-accent/[0.04] transition-colors duration-300 rounded-2xl pointer-events-none" />
                        </div>
                    </motion.figure>
                ))}
            </div>

            {open && (
                <CaseGalleryLightbox
                    images={images}
                    startIndex={startIndex}
                    onClose={() => setOpen(false)}
                />
            )}
        </div>
    );
}
