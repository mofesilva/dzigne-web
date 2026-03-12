import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPlatformBySlug, getAdjacentPlatforms, getAllSlugs } from '../data/platformsData';
import DetailHeroSection from '@/components/DetailHeroSection';
import PlatformDetailsSection from '../components/PlatformDetailsSection';
import PlatformGallerySection from '../components/PlatformGallerySection';
import PlatformNavigationSection from '../components/PlatformNavigationSection';
import { getGalleryImages } from '../../cases/lib/getGalleryImages';

interface PlatformPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
    const { slug } = await params;
    const platformData = getPlatformBySlug(slug);
    if (!platformData) return {};

    return {
        title: platformData.metadata.title,
        description: platformData.metadata.description,
    };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
    const { slug } = await params;
    const platformData = getPlatformBySlug(slug);

    if (!platformData) notFound();

    const { previous, next } = getAdjacentPlatforms(slug);

    return (
        <main className="flex flex-col">
            <DetailHeroSection
                logo={platformData.hero.logo}
                company={platformData.hero.company}
                title={platformData.hero.title}
                description={platformData.hero.description}
                tags={platformData.hero.tags}
                mockup={platformData.hero.mockup}
                invertLogo={platformData.hero.invertLogo}
            />

            <PlatformDetailsSection
                duration={platformData.details.duration}
                team={platformData.details.team}
                technologies={platformData.details.technologies}
                challenge={platformData.details.challenge}
                solution={platformData.details.solution}
                results={platformData.details.results}
            />

            <PlatformGallerySection
                title={platformData.gallery.title}
                description={platformData.gallery.description}
                images={getGalleryImages(platformData.gallery.imagesFolder)}
            />

            <PlatformNavigationSection
                previousPlatform={previous}
                nextPlatform={next}
            />
        </main>
    );
}
