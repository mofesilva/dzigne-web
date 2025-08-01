import React from 'react';

interface CaseDetail {
    label: string;
    value: string;
    icon: string;
}

interface CaseDetailsSectionProps {
    duration: string;
    team: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results: string[];
}

function CaseDetailsSection({ duration, team, technologies, challenge, solution, results }: CaseDetailsSectionProps) {
    const details: CaseDetail[] = [
        { label: "Duração", value: duration, icon: "fa-solid fa-clock" },
        { label: "Equipe", value: team, icon: "fa-solid fa-users" },
        { label: "Tecnologias", value: technologies.join(", "), icon: "fa-solid fa-code" },
    ];

    return (
        <section className="bg-eggshell w-full py-20">
            <div className="section-container">
                {/* Informações básicas do projeto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {details.map((detail, index) => (
                        <div key={index} className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-green-accent/40 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[200px]">
                            <div className="mb-4">
                                <i className={`${detail.icon} text-4xl text-green-accent`}></i>
                            </div>
                            <h3 className="font-rajdhani text-xl font-bold text-carbon mb-3">
                                {detail.label}
                            </h3>
                            <p className="font-league-spartan text-carbon/70 leading-relaxed">
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desafio e Solução */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="font-rajdhani text-3xl font-bold text-carbon mb-6">
                            <i className="fa-solid fa-bullseye text-green-accent mr-3"></i>
                            O Desafio
                        </h3>
                        <p className="font-league-spartan text-lg text-carbon/80 leading-relaxed">
                            {challenge}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-rajdhani text-3xl font-bold text-carbon mb-6">
                            <i className="fa-solid fa-lightbulb text-green-accent mr-3"></i>
                            Nossa Solução
                        </h3>
                        <p className="font-league-spartan text-lg text-carbon/80 leading-relaxed">
                            {solution}
                        </p>
                    </div>
                </div>

                {/* Resultados */}
                <div>
                    <h3 className="font-rajdhani text-3xl font-bold text-carbon mb-8 text-center">
                        <i className="fa-solid fa-chart-line text-green-accent mr-3"></i>
                        Resultados Alcançados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((result, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start">
                                    <i className="fa-solid fa-check-circle text-green-accent mr-3 mt-1"></i>
                                    <p className="font-league-spartan text-carbon/80 leading-relaxed">
                                        {result}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseDetailsSection;