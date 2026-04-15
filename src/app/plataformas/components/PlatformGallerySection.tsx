import React from 'react';
import CaseGalleryClient from '../../cases/components/CaseGalleryClient';

interface PlatformGallerySectionProps {
    title: string;
    description: string;
    images: { src: string; alt?: string; description?: string }[];
}

function PlatformGallerySection({ title, description, images }: PlatformGallerySectionProps) {
    return (
        <section className="bg-black w-full py-24 md:py-32 lg:py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="text-center mb-16 lg:mb-20">
                    <p className="text-caption font-outfit tracking-widest uppercase text-eggshell/65 mb-6">
                        {title}
                    </p>
                    <h2 className="font-rajdhani font-bold text-eggshell mb-4">
                        {description}
                    </h2>
                </div>

                <CaseGalleryClient images={images} />
            </div>
        </section>
    );
}

export default PlatformGallerySection;
