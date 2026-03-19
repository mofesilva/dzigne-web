import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCaseBySlug, getAdjacentCases, getAllSlugs } from '../data/casesData';
import DetailHeroSection from '@/components/DetailHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';
import { getGalleryImages } from '../lib/getGalleryImages';

interface CasePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
    const { slug } = await params;
    const caseData = getCaseBySlug(slug);
    if (!caseData) return {};

    return {
        title: caseData.metadata.title,
        description: caseData.metadata.description,
    };
}

export default async function CasePage({ params }: CasePageProps) {
    const { slug } = await params;
    const caseData = getCaseBySlug(slug);

    if (!caseData) notFound();

    const { previous, next } = getAdjacentCases(slug);

    return (
        <main className="flex flex-col">
            <DetailHeroSection
                logo={caseData.hero.logo}
                company={caseData.hero.company}
                title={caseData.hero.title}
                description={caseData.hero.description}
                tags={caseData.hero.tags}
                mockup={caseData.hero.mockup}
                invertLogo={caseData.hero.invertLogo}
            />

            <CaseDetailsSection
                duration={caseData.details.duration}
                team={caseData.details.team}
                technologies={caseData.details.technologies}
                challenge={caseData.details.challenge}
                solution={caseData.details.solution}
                resultsCaption={caseData.details.resultsCaption}
                results={caseData.details.results}
            />

            <CaseGallerySection
                title={caseData.gallery.title}
                description={caseData.gallery.description}
                images={getGalleryImages(caseData.gallery.imagesFolder)}
            />

            <CaseNavigationSection
                previousCase={previous}
                nextCase={next}
            />
        </main>
    );
}
