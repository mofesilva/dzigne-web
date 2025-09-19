"use client";

import React from 'react';
import Image from 'next/image';
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

    const openAt = (idx: number) => {
        setStartIndex(idx);
        setOpen(true);
    };

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <figure key={index} className="group">
                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-white/5 cursor-pointer" onClick={() => openAt(index)}>
                            <div className="w-full h-full p-4 box-border flex items-center justify-center">
                                <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                                    <Image
                                        src={image.src}
                                        alt={image.alt ?? ''}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                        className="object-contain"
                                        quality={90}
                                    />
                                </div>
                            </div>
                        </div>

                        {image.description && (
                            <figcaption className="font-league-spartan text-white/80 text-center mt-3 text-sm">
                                {image.description}
                            </figcaption>
                        )}
                    </figure>
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
