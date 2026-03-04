'use client';
import React from 'react';
import StatItem from '../../components/StatItem';

const stats = [
    { value: '98%', label: '', description: 'taxa de satisfação dos nossos parceiros' },
    { value: '24h', label: '', description: 'tempo médio de resposta ao cliente' },
    { value: '18+', label: 'tecnologias', description: 'no nosso arsenal de desenvolvimento' },
    { value: '100%', label: '', description: 'dos projetos entregues no prazo' },
];

function AboutStatsSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <p className="text-caption font-outfit text-eggshell/60 mb-4 tracking-widest uppercase">
                        Em números
                    </p>
                    <h1 className="font-rajdhani text-eggshell">
                        <span className="font-medium">Números que contam </span>
                        <span className="font-bold text-green-accent">nossa história</span>
                    </h1>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-12">
                    {stats.map((stat, i) => (
                        <StatItem
                            key={i}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutStatsSection;
