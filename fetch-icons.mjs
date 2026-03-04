import fs from 'fs';
import https from 'https';
import path from 'path';

const dest = 'm:/Projetos/website/dzigne-web/public/assets/icons/brands';
const techs = ['vercel', 'firebase', 'mongodb', 'postgresql', 'express', 'tailwindcss'];

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

(async () => {
    for (const t of techs) {
        // Request white-filled SVG from Simple Icons CDN
        const url = `https://cdn.simpleicons.org/${t}/ffffff`;
        try {
            let svg = await fetchUrl(url);
            fs.writeFileSync(path.join(dest, t + '.svg'), svg, 'utf8');
            console.log(`OK: ${t} (${svg.length} bytes)`);
        } catch (e) {
            console.log(`FAIL: ${t} - ${e.message}`);
        }
    }
    console.log('Done!');
})();
