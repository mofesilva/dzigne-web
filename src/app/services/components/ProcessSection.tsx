import React from 'react';

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    icon: string;
}

function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                    <span className="text-white font-rajdhani font-bold text-sm">{number}</span>
                </div>
            </div>
            
            <h3 className="text-xl font-rajdhani font-bold text-carbon mb-4">{title}</h3>
            <p className="text-gray-700 font-league-spartan leading-relaxed">{description}</p>
        </div>
    );
}

function ProcessSection() {
    const processSteps = [
        {
            number: "1",
            title: "Descoberta",
            description: "Analisamos profundamente suas necessidades, objetivos e desafios para entender exatamente o que você precisa.",
            icon: "fas fa-search"
        },
        {
            number: "2",
            title: "Planejamento",
            description: "Criamos uma estratégia detalhada com cronogramas, recursos e tecnologias ideais para seu projeto.",
            icon: "fas fa-clipboard-list"
        },
        {
            number: "3",
            title: "Design & Prototipagem",
            description: "Desenvolvemos wireframes, protótipos e designs que validam a experiência antes do desenvolvimento.",
            icon: "fas fa-pencil-ruler"
        },
        {
            number: "4",
            title: "Desenvolvimento",
            description: "Construímos sua solução com código limpo, arquitetura sólida e as melhores práticas do mercado.",
            icon: "fas fa-code"
        },
        {
            number: "5",
            title: "Testes & QA",
            description: "Realizamos testes rigorosos para garantir qualidade, performance e segurança em todos os aspectos.",
            icon: "fas fa-bug"
        },
        {
            number: "6",
            title: "Deploy & Suporte",
            description: "Fazemos a entrega e oferecemos suporte contínuo para manter tudo funcionando perfeitamente.",
            icon: "fas fa-rocket"
        }
    ];

    return (
        <section className="w-full py-20 bg-carbon">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-rajdhani font-bold text-white mb-6">
                        Nosso <span className="text-green-accent">Processo</span>
                    </h2>
                    <p className="text-lg font-league-spartan text-white/80 max-w-3xl mx-auto">
                        Seguimos uma metodologia comprovada que garante entregas de qualidade, 
                        dentro do prazo e alinhadas com seus objetivos de negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {processSteps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-carbon-medium rounded-lg p-8 border border-green-accent/20">
                        <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                            Transparência Total
                        </h3>
                        <p className="text-base font-league-spartan text-white/80 mb-6">
                            Durante todo o processo, você tem visibilidade completa do progresso 
                            através de relatórios regulares e demonstrações práticas.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center text-green-accent font-league-spartan">
                                <i className="fas fa-check-circle mr-2"></i>
                                Reuniões semanais
                            </div>
                            <div className="flex items-center text-green-accent font-league-spartan">
                                <i className="fas fa-check-circle mr-2"></i>
                                Relatórios de progresso
                            </div>
                            <div className="flex items-center text-green-accent font-league-spartan">
                                <i className="fas fa-check-circle mr-2"></i>
                                Demos funcionais
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;