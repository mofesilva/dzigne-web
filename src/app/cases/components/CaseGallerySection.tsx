import React from 'react';
import Image from 'next/image';

interface CaseGallerySectionProps {
    title: string;
    description: string;
    images: {
        src: string;
        alt: string;
        description?: string;
    }[];
}

function CaseGallerySection({ title, description, images }: CaseGallerySectionProps) {
    return (
        <section className="bg-carbon w-full py-20">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="font-league-spartan text-xl text-white/90 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden rounded-lg bg-white/5 p-4">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    quality={90}
                                />
                            </div>
                            {image.description && (
                                <p className="font-league-spartan text-white/80 text-center mt-4">
                                    {image.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseGallerySection;