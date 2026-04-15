import { CDN_BASE_URL } from '@/lib/cdn';

export interface GalleryImage {
    src: string;
    alt: string;
    description: string;
}

/**
 * Fetches gallery images from the CDN directory listing.
 * `imagesFolder` is a relative path like '/mockups/cases/oab-mack'.
 * Parses the HTML directory index to extract image filenames.
 */
export async function getGalleryImages(imagesFolder: string): Promise<GalleryImage[]> {
    try {
        const relative = imagesFolder.replace(/^\//, '').replace(/\/$/, '');
        const url = `${CDN_BASE_URL}/${relative}/`;

        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) return [];

        const html = await res.text();

        // Extract href values that look like image files from directory listing
        const fileRegex = /href="([^"]+\.(jpe?g|png|webp|avif|gif))"/gi;
        const files: string[] = [];
        let match;
        while ((match = fileRegex.exec(html)) !== null) {
            files.push(match[1]);
        }

        files.sort();

        return files.map((file) => ({
            src: `${CDN_BASE_URL}/${relative}/${file}`,
            alt: file,
            description: '',
        }));
    } catch {
        return [];
    }
}
