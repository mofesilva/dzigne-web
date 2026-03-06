import React from 'react';
import CaseCard from './CaseCard';
import { getAllCases } from '../data/casesData';

function CasesListSection() {
    const cases = getAllCases();

    // Pattern: case 1 light, cases 2-3 dark, cases 4-5 light
    const darkPattern = [false, true, true, false, false];

    return (
        <>
            {cases.map((c, index) => (
                <CaseCard
                    key={c.slug}
                    logo={c.listing.logo}
                    company={c.listing.company}
                    description={c.listing.description}
                    mockup={c.listing.mockup}
                    href={`/cases/${c.slug}`}
                    tags={c.listing.tags}
                    isReversed={index % 2 !== 0}
                    index={index}
                    invertLogo={c.listing.invertLogo}
                    isDark={darkPattern[index] ?? false}
                />
            ))}
        </>
    );
}

export default CasesListSection; 