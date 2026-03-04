'use client';
import React from 'react';
import Image from 'next/image';
import { MagicBentoGrid, MagicBentoCard } from '@/components/MagicBento';

const GLOW = '127, 209, 12';

/*
 *  All tech SVGs live in /assets/icons/tech/ with fill="#ffffff".
 *  No CSS invert needed — they're already white.
 */

interface TechDef {
    src: string;
    name: string;
}

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

function TechIcon({ tech }: { tech: TechDef }) {
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

interface StackCardProps {
    label: string;
    title: string;
    description: string;
    techs: TechDef[];
    corner?: string;
}

function StackCard({ label, title, description, techs, corner = '' }: StackCardProps) {
    return (
        <MagicBentoCard
            glowColor={GLOW}
            enableStars
            clickEffect
            particleCount={12}
            className={`border border-eggshell/[0.06] bg-onyx ${corner}`}
        >
            <div className="flex flex-col justify-between h-full p-7 lg:p-9 relative z-10">
                <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                    {label}
                </span>
                <div>
                    <h4 className="font-rajdhani font-bold text-eggshell mb-2">
                        {title}
                    </h4>
                    <p className="font-outfit text-eggshell/45 mb-8">
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

function AboutTechStackSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
                    <div className="w-full">
                        <p className="text-caption font-outfit text-eggshell/60 mb-4 tracking-widest uppercase">
                            Arsenal Tecnológico
                        </p>
                        <h1 className="font-rajdhani text-eggshell mb-5 md:mb-6">
                            <span className="font-medium">As ferramentas por trás da </span>
                            <br />
                            <span className="font-bold text-green-accent">excelência</span>
                        </h1>
                        <p className="font-outfit text-eggshell/50 max-w-xl">
                            Utilizamos as tecnologias mais modernas do mercado para garantir
                            performance, escalabilidade e qualidade em cada projeto.
                        </p>
                    </div>
                </div>

                {/* MagicBento Tech Grid */}
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
                            corner="rounded-tl-4xl"
                        />
                        <StackCard
                            label="APIs & Bancos de Dados"
                            title="Backend & Dados"
                            description="Arquiteturas robustas e bancos de dados otimizados que escalam com o seu negócio."
                            techs={backend}
                        />
                        <StackCard
                            label="Infra & Deploy"
                            title="Cloud & DevOps"
                            description="Infraestrutura automatizada, CI/CD e monitoramento para manter tudo no ar, sempre."
                            techs={cloudDevops}
                            corner="rounded-br-4xl"
                        />
                    </div>
                </MagicBentoGrid>

                {/* Bottom tag line */}
                <div className="mt-12 lg:mt-16 text-center">
                    <span className="font-outfit text-eggshell/20 text-xs tracking-[0.2em] uppercase">
                        Next.js · React · Flutter · Node.js · Python · AWS · Docker · Vercel · e mais
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AboutTechStackSection;
