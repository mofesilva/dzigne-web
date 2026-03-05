'use client';
import React from 'react';
import Image from 'next/image';
import type { TechDef } from './StackCard';

export default function TechIcon({ tech }: { tech: TechDef }) {
    return (
        <div className="flex flex-col items-center gap-3 group cursor-default">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-eggshell/[0.04] border border-eggshell/[0.08] flex items-center justify-center group-hover:border-green-accent/40 group-hover:bg-green-accent/[0.06] transition-all duration-300">
                <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <span className="font-outfit text-eggshell/50 text-xs lg:text-small group-hover:text-eggshell/80 transition-colors duration-300">
                {tech.name}
            </span>
        </div>
    );
}
