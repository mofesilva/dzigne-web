import React from 'react';
import CaseGalleryClient from './CaseGalleryClient';

interface CaseGallerySectionProps {
    title: string;
    description: string;
    images: { src: string; alt?: string; description?: string }[];
}

function CaseGallerySection({ title, description, images }: CaseGallerySectionProps) {
    return (
        <section className="bg-black w-full py-24 md:py-32 lg:py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="mb-16 lg:mb-20">
                    <p className="flex items-center gap-3 text-caption font-outfit tracking-widest uppercase text-eggshell/65 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-accent -translate-y-px shrink-0" />
                        {title}
                    </p>
                    <h2 className="font-rajdhani font-bold text-eggshell mb-5 md:mb-6">
                        {description}
                    </h2>
                </div>

                <CaseGalleryClient images={images} />
            </div>
        </section>
    );
}

export default CaseGallerySection;