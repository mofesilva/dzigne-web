import React from 'react';
import { ClockCircle, UsersGroupTwoRounded, Code, Target, LightbulbBolt, GraphUp, CheckCircle } from '@solar-icons/react/ssr';

interface CaseDetail {
    label: string;
    value: string;
    icon: React.ReactNode;
}

interface CaseDetailsSectionProps {
    duration: string;
    team: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results?: string[];
}

function CaseDetailsSection({ duration, team, technologies, challenge, solution, results }: CaseDetailsSectionProps) {
    const details: CaseDetail[] = [
        { label: "Duração", value: duration, icon: <ClockCircle weight="Outline" size={36} className="text-green-accent" /> },
        { label: "Equipe", value: team, icon: <UsersGroupTwoRounded weight="Outline" size={36} className="text-green-accent" /> },
        { label: "Tecnologias", value: technologies.join(", "), icon: <Code weight="Bold" size={36} className="text-green-accent" /> },
    ];

    return (
        <section className="bg-eggshell w-full py-16">
            <div className="section-container">
                {/* Informações básicas do projeto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {details.map((detail, index) => (
                        <div key={index} className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300 flex flex-col items-center justify-center text-center min-h-[200px]">
                            <div className="mb-4">
                                {detail.icon}
                            </div>
                            <h5 className="font-rajdhani font-bold text-carbon mb-3">
                                {detail.label}
                            </h5>
                            <p className="font-league-spartan text-carbon/70 leading-relaxed">
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desafio e Solução */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300">
                        <h3 className="font-rajdhani font-bold text-carbon mb-6 flex items-center">
                            <Target weight="Bold" size={28} className="text-green-accent mr-3" />
                            O Desafio
                        </h3>
                        <h6 className="font-league-spartan text-carbon/80 leading-relaxed">
                            {challenge}
                        </h6>
                    </div>
                    <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300">
                        <h3 className="font-rajdhani font-bold text-carbon mb-6 flex items-center">
                            <LightbulbBolt weight="Outline" size={28} className="text-green-accent mr-3" />
                            Nossa Solução
                        </h3>
                        <h6 className="font-league-spartan text-carbon/80 leading-relaxed">
                            {solution}
                        </h6>
                    </div>
                </div>

                {/* Resultados */}
                {results && results.length > 0 && (<div>
                    <h3 className="font-rajdhani font-bold text-carbon mt-16 mb-8 text-center flex items-center justify-center">
                        <GraphUp weight="Outline" size={28} className="text-green-accent mr-3" />
                        Resultados Alcançados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results?.map((result, index) => (
                            <div key={index} className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300">
                                <div className="flex flex-col items-center justify-center">
                                    <CheckCircle weight="Bold" size={30} className="text-green-accent mt-1 pb-4" />
                                    <p className="font-league-spartan text-center text-carbon/80 leading-relaxed">
                                        {result}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)}
            </div>
        </section>
    );
}

export default CaseDetailsSection;