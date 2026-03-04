import React from 'react';
import { Magnifier, ClipboardText, RulerPen, Code, Bug, Rocket, CheckCircle } from '@solar-icons/react/ssr';

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                    <span className="text-white font-rajdhani font-bold text-small">{number}</span>
                </div>
            </div>

            <h5 className="font-rajdhani font-bold text-white mb-4">{title}</h5>
            <p className="text-white/80 font-outfit leading-relaxed">{description}</p>
        </div>
    );
}

function ProcessSection() {
    const processSteps = [
        {
            number: "1",
            title: "Descoberta",
            description: "Analisamos profundamente suas necessidades, objetivos e desafios para entender exatamente o que você precisa.",
            icon: <Magnifier weight="Outline" size={28} className="text-white" />
        },
        {
            number: "2",
            title: "Planejamento",
            description: "Criamos uma estratégia detalhada com cronogramas, recursos e tecnologias ideais para seu projeto.",
            icon: <ClipboardText weight="Outline" size={28} className="text-white" />
        },
        {
            number: "3",
            title: "Design & Prototipagem",
            description: "Desenvolvemos wireframes, protótipos e designs que validam a experiência antes do desenvolvimento.",
            icon: <RulerPen weight="Outline" size={28} className="text-white" />
        },
        {
            number: "4",
            title: "Desenvolvimento",
            description: "Construímos sua solução com código limpo, arquitetura sólida e as melhores práticas do mercado.",
            icon: <Code weight="Bold" size={28} className="text-white" />
        },
        {
            number: "5",
            title: "Testes & QA",
            description: "Realizamos testes rigorosos para garantir qualidade, performance e segurança em todos os aspectos.",
            icon: <Bug weight="Outline" size={28} className="text-white" />
        },
        {
            number: "6",
            title: "Deploy & Suporte",
            description: "Fazemos a entrega e oferecemos suporte contínuo para manter tudo funcionando perfeitamente.",
            icon: <Rocket weight="Bold" size={28} className="text-white" />
        }
    ];

    return (
        <section className="bg-carbon w-full py-32">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h1 className="font-rajdhani font-bold text-white mb-8">
                        Nosso <span className="text-green-accent">Processo</span>
                    </h1>
                    <h5 className="font-outfit text-white/80 max-w-4xl mx-auto leading-relaxed">
                        Seguimos uma metodologia comprovada que garante entregas de qualidade, 
                        dentro do prazo e alinhadas com seus objetivos de negócio.
                    </h5>
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
                        <h5 className="font-rajdhani font-bold text-white mb-4">
                            Transparência Total
                        </h5>
                        <p className="font-outfit text-white/80 mb-6">
                            Durante todo o processo, você tem visibilidade completa do progresso
                            através de relatórios regulares e demonstrações práticas.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center text-green-accent font-outfit">
                                <CheckCircle weight="Bold" size={18} className="mr-2" />
                                Reuniões semanais
                            </div>
                            <div className="flex items-center text-green-accent font-outfit">
                                <CheckCircle weight="Bold" size={18} className="mr-2" />
                                Relatórios de progresso
                            </div>
                            <div className="flex items-center text-green-accent font-outfit">
                                <CheckCircle weight="Bold" size={18} className="mr-2" />
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