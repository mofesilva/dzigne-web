import React from 'react';
import fs from 'fs';
import path from 'path';
import CaseGalleryClient from './CaseGalleryClient';

interface CaseGallerySectionProps {
    title: string;
    description: string;
    imagesFolder: string;
}

function CaseGallerySection({ title, description, imagesFolder }: CaseGallerySectionProps) {
    let imagesToRender: { src: string; alt?: string; description?: string }[] = [];

    try {
        const publicFolderRelative = imagesFolder.replace(/^\//, '').replace(/\/$/, '');
        const dirPath = path.join(process.cwd(), 'public', publicFolderRelative);
        const files = fs.readdirSync(dirPath).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f));

        const folderImages = files.map((file) => ({
            src: `/${publicFolderRelative}/${file}`,
            alt: file,
            description: ''
        }));

        if (folderImages.length > 0) {
            imagesToRender = folderImages;
        }
    } catch {
        // Could not read folder on server side; fall back to empty array
    }

    return (
        <section className="bg-black w-full py-24 md:py-32 lg:py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="text-center mb-16 lg:mb-20">
                    <p className="text-caption font-outfit tracking-widest uppercase text-eggshell/30 mb-6">
                        {title}
                    </p>
                    <h2 className="font-rajdhani font-bold text-eggshell mb-4">
                        {description}
                    </h2>
                </div>

                <CaseGalleryClient images={imagesToRender} />
            </div>
        </section>
    );
}

export default CaseGallerySection;