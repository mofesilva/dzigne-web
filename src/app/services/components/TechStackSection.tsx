'use client';
import React from 'react';

interface TechItemProps {
    name: string;
    icon: string;
}

function TechItem({ name, icon }: TechItemProps) {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-accent/30 transition-all duration-300 group">
            <i className={`${icon} text-3xl text-white/70 group-hover:text-green-accent transition-colors mb-2`}></i>
            <span className="text-sm font-league-spartan text-white/60 group-hover:text-white transition-colors text-center">
                {name}
            </span>
        </div>
    );
}

function TechStackSection() {
    const frontendTechs = [
        { name: "React", icon: "fab fa-react" },
        { name: "Next.js", icon: "fas fa-code" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "TailwindCSS", icon: "fas fa-paint-brush" },
        { name: "Flutter", icon: "fas fa-mobile-alt" }
    ];

    const backendTechs = [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express", icon: "fas fa-server" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Python", icon: "fab fa-python" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-leaf" }
    ];

    const cloudTechs = [
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Linux", icon: "fab fa-linux" },
        { name: "Firebase", icon: "fas fa-fire" },
        { name: "Vercel", icon: "fas fa-cloud" }
    ];

    return (
        <section className="bg-eggshell w-full py-32">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-carbon mb-8">
                        Tecnologias que <span className="text-green-accent">Dominamos</span>
                    </h2>
                    <p className="font-league-spartan text-xl text-carbon/80 max-w-4xl mx-auto leading-relaxed">
                        Utilizamos as melhores e mais modernas tecnologias do mercado para 
                        garantir performance, escalabilidade e qualidade em todos os projetos.
                    </p>
                </div>

                {/* Tech Categories com fundo escuro */}
                <div className="bg-carbon rounded-3xl p-12 max-w-6xl mx-auto">
                    {/* Frontend */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                                <i className="fas fa-desktop text-xl text-white"></i>
                            </div>
                            <h3 className="text-3xl font-rajdhani font-bold text-white">Frontend</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {frontendTechs.map((tech, index) => (
                                <TechItem key={index} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-12"></div>

                    {/* Backend */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                                <i className="fas fa-server text-xl text-white"></i>
                            </div>
                            <h3 className="text-3xl font-rajdhani font-bold text-white">Backend & Database</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {backendTechs.map((tech, index) => (
                                <TechItem key={index} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-12"></div>

                    {/* Cloud & DevOps */}
                    <div>
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                                <i className="fas fa-cloud text-xl text-white"></i>
                            </div>
                            <h3 className="text-3xl font-rajdhani font-bold text-white">Cloud & DevOps</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {cloudTechs.map((tech, index) => (
                                <TechItem key={index} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-carbon/5 border border-carbon/10 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-rajdhani font-bold text-carbon mb-4">
                            Stack Personalizada para Seu Projeto
                        </h3>
                        <p className="text-base font-league-spartan text-carbon/70 mb-6 leading-relaxed">
                            Além das tecnologias listadas, adaptamos nossa stack às necessidades específicas 
                            do seu projeto, sempre priorizando performance e escalabilidade.
                        </p>
                        <a 
                            href="/contato" 
                            className="inline-flex items-center px-6 py-3 bg-green-accent text-white font-league-spartan font-semibold rounded-lg hover:bg-green-accent-light transition-colors"
                        >
                            <i className="fas fa-rocket mr-2"></i>
                            Vamos Conversar sobre Seu Projeto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;