export const CDN_BASE_URL = 'https://assets.dzign-e.app';

/**
 * Builds a full CDN URL from a relative path.
 * @example cdnUrl('/clients/mackenzie2.png') → 'https://assets.dzign-e.app/clients/mackenzie2.png'
 */
export function cdnUrl(path: string): string {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${CDN_BASE_URL}${normalized}`;
}
