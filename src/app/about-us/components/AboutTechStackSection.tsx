'use client';
import React from 'react';
import { MagicBentoGrid } from '@/components/MagicBento';
import SectionTitle from '@/components/SectionTitle';
import TagLine from '@/components/TagLine';
import StackCard from './StackCard';
import type { TechDef } from './StackCard';

const GLOW = '127, 209, 12';
/* ── Frontend & Mobile ────────────────────────────── */
const frontend: TechDef[] = [
    { src: '/assets/icons/tech/nextdotjs.svg', name: 'Next.js' },
    { src: '/assets/icons/tech/react.svg', name: 'React' },
    { src: '/assets/icons/tech/javascript.svg', name: 'JavaScript' },
    { src: '/assets/icons/tech/tailwindcss.svg', name: 'Tailwind CSS' },
    { src: '/assets/icons/tech/flutter.svg', name: 'Flutter' },
    { src: '/assets/icons/tech/dart.svg', name: 'Dart' },
];

/* ── Backend & Dados ──────────────────────────────── */
const backend: TechDef[] = [
    { src: '/assets/icons/tech/nodedotjs.svg', name: 'Node.js' },
    { src: '/assets/icons/tech/express.svg', name: 'Express' },
    { src: '/assets/icons/tech/php.svg', name: 'PHP' },
    { src: '/assets/icons/tech/python.svg', name: 'Python' },
    { src: '/assets/icons/tech/postgresql.svg', name: 'PostgreSQL' },
    { src: '/assets/icons/tech/mongodb.svg', name: 'MongoDB' },
];

/* ── Cloud & DevOps ───────────────────────────────── */
const cloudDevops: TechDef[] = [
    { src: '/assets/icons/tech/aws.svg', name: 'AWS' },
    { src: '/assets/icons/tech/docker.svg', name: 'Docker' },
    { src: '/assets/icons/tech/github.svg', name: 'GitHub' },
    { src: '/assets/icons/tech/linux.svg', name: 'Linux' },
    { src: '/assets/icons/tech/firebase.svg', name: 'Firebase' },
    { src: '/assets/icons/tech/vercel.svg', name: 'Vercel' },
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

                <TagLine
                    text="Next.js · React · Flutter · Node.js · Python · AWS · Docker · Vercel · e mais"
                    className="mt-12 lg:mt-16"
                />
            </div>
        </section>
    );
}

export default AboutTechStackSection;
