import React from 'react';
import PlatformCard from './PlatformCard';
import { getAllPlatforms } from '../data/platformsData';

function PlatformsListSection() {
    const platforms = getAllPlatforms();

    // Pattern: platform 1 light, platforms 2-3 dark, platform 4 light
    const darkPattern = [false, true, true, false];

    return (
        <>
            {platforms.map((p, index) => (
                <PlatformCard
                    key={p.slug}
                    logo={p.listing.logo}
                    company={p.listing.company}
                    description={p.listing.description}
                    mockup={p.listing.mockup}
                    href={`/plataformas/${p.slug}`}
                    tags={p.listing.tags}
                    isReversed={index % 2 !== 0}
                    index={index}
                    invertLogo={p.listing.invertLogo}
                    isDark={darkPattern[index] ?? false}
                />
            ))}
        </>
    );
}

export default PlatformsListSection;
