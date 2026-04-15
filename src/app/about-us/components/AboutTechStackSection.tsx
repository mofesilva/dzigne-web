'use client';
import React from 'react';
import { MagicBentoGrid } from '@/components/MagicBento';
import SectionTitle from '@/components/SectionTitle';
import TagLine from '@/components/TagLine';
import StackCard from './StackCard';
import type { TechDef } from './StackCard';
import { cdnUrl } from '@/lib/cdn';

const GLOW = '127, 209, 12';
/* ── Frontend & Mobile ────────────────────────────── */
const frontend: TechDef[] = [
    { src: cdnUrl('/icons/nextdotjs.svg'), name: 'Next.js' },
    { src: cdnUrl('/icons/react.svg'), name: 'React' },
    { src: cdnUrl('/icons/javascript.svg'), name: 'JavaScript' },
    { src: cdnUrl('/icons/tailwindcss.svg'), name: 'Tailwind CSS' },
    { src: cdnUrl('/icons/flutter.svg'), name: 'Flutter' },
    { src: cdnUrl('/icons/dart.svg'), name: 'Dart' },
];

/* ── Backend & Dados ──────────────────────────────── */
const backend: TechDef[] = [
    { src: cdnUrl('/icons/nodedotjs.svg'), name: 'Node.js' },
    { src: cdnUrl('/icons/express.svg'), name: 'Express' },
    { src: cdnUrl('/icons/php.svg'), name: 'PHP' },
    { src: cdnUrl('/icons/mysql.svg'), name: 'MySQL' },
    { src: cdnUrl('/icons/mongodb.svg'), name: 'MongoDB' },
];

/* ── Cloud & DevOps ───────────────────────────────── */
const cloudDevops: TechDef[] = [
    { src: cdnUrl('/icons/akamai.svg'), name: 'Akamai Cloud' },
    { src: cdnUrl('/icons/docker.svg'), name: 'Docker' },
    { src: cdnUrl('/icons/github.svg'), name: 'GitHub' },
    { src: cdnUrl('/icons/linux.svg'), name: 'Linux' },
    { src: cdnUrl('/icons/firebase.svg'), name: 'Firebase' },
    { src: cdnUrl('/icons/vercel.svg'), name: 'Vercel' },
];

function AboutTechStackSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                <SectionTitle
                    caption="Arsenal Tecnológico"
                    title="As ferramentas por trás da"
                    accent="excelência"
                    description="Utilizamos as tecnologias mais modernas do mercado para garantir performance, escalabilidade e qualidade em cada projeto."
                />
                <MagicBentoGrid glowColor={GLOW} spotlightRadius={250} enableSpotlight>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
                        style={{ gridAutoRows: 'minmax(360px, auto)' }}
                    >
                        <StackCard
                            label="Interfaces & Apps"
                            title="Frontend & Mobile"
                            description="Interfaces modernas e apps nativos com as melhores tecnologias do ecossistema."
                            techs={frontend}
                            glowColor={GLOW}
                            corner="rounded-tl-4xl"
                        />
                        <StackCard
                            label="APIs & Bancos de Dados"
                            title="Backend & Dados"
                            description="Arquiteturas robustas e bancos de dados otimizados que escalam com o seu negócio."
                            techs={backend}
                            glowColor={GLOW}
                        />
                        <StackCard
                            label="Infra & Deploy"
                            title="Cloud & DevOps"
                            description="Infraestrutura automatizada, CI/CD e monitoramento para manter tudo no ar, sempre."
                            techs={cloudDevops}
                            glowColor={GLOW}
                            corner="rounded-br-4xl"
                        />
                    </div>
                </MagicBentoGrid>
            </div>
        </section>
    );
}

export default AboutTechStackSection;
