import fs from 'fs';
import path from 'path';

export interface GalleryImage {
    src: string;
    alt: string;
    description: string;
}

export function getGalleryImages(imagesFolder: string): GalleryImage[] {
    try {
        const relative = imagesFolder.replace(/^\//, '').replace(/\/$/, '');
        const publicDir = path.join(process.cwd(), 'public');
        const dirPath = path.resolve(publicDir, relative);

        if (!dirPath.startsWith(publicDir)) return [];

        const files = fs.readdirSync(dirPath).filter((f) =>
            /\.(jpe?g|png|webp|avif|gif)$/i.test(f)
        );

        return files.map((file) => ({
            src: `/${relative}/${file}`,
            alt: file,
            description: '',
        }));
    } catch {
        return [];
    }
}
