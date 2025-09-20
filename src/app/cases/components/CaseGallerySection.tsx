import React from 'react';
import fs from 'fs';
import path from 'path';
import CaseGalleryClient from './CaseGalleryClient';

interface CaseGallerySectionProps {
    title: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
        description?: string;
    }[];
    imagesFolder?: string;
}

function CaseGallerySection({ title, description, images, imagesFolder }: CaseGallerySectionProps) {
    let imagesToRender: CaseGallerySectionProps['images'] = images ?? [];

    if (imagesFolder) {
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
        } catch (err) {
            // Could not read folder on server side; fall back to provided images
        }
    }

    return (
        <section className="bg-carbon w-auto py-20 sm:rounded-4xl m-0 sm:m-2">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="font-league-spartan text-xl text-white/90 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Render client gallery */}
                <CaseGalleryClient images={imagesToRender} />
            </div>
        </section>
    );
}

export default CaseGallerySection;