'use client';
import React from 'react';
import { MagicBentoCard } from '@/components/MagicBento';
import TechIcon from './TechIcon';
import TagLine from '@/components/TagLine';

export interface TechDef {
    src: string;
    name: string;
}

interface StackCardProps {
    label: string;
    title: string;
    description: string;
    techs: TechDef[];
    glowColor: string;
    corner?: string;
}

export default function StackCard({ label, title, description, techs, glowColor, corner = '' }: StackCardProps) {
    return (
        <MagicBentoCard
            glowColor={glowColor}
            enableStars
            clickEffect
            particleCount={12}
            className={`border border-eggshell/[0.06] bg-onyx ${corner}`}
        >
            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                <TagLine text={label} noWrap />
                <div>
                    <h4 className="font-rajdhani font-bold text-eggshell mb-2">
                        {title}
                    </h4>
                    <p className="font-outfit text-eggshell/65 mb-8">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-5 lg:gap-6">
                        {techs.map((t, i) => (
                            <TechIcon key={i} tech={t} />
                        ))}
                    </div>
                </div>
            </div>
        </MagicBentoCard>
    );
}
