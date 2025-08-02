'use client';
import React from 'react';

function TechStackSection() {
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

                {/* Categorias lado a lado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

                    {/* Frontend */}
                    <div className="text-start">
                        <div className="flex items-center justify-center mb-6">

                            <h3 className="text-2xl font-rajdhani font-bold text-carbon">Frontend</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center">
                                <i className="fab fa-react text-2xl text-carbon/70 mr-3"></i>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-code text-2xl text-carbon/70 mr-3"></i>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-js-square text-2xl text-carbon/70 mr-3"></i>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-code text-2xl text-carbon/70 mr-3"></i>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-paint-brush text-2xl text-carbon/70 mr-3"></i>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-mobile-alt text-2xl text-carbon/70 mr-3"></i>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-3">
                                <i className="fas fa-server text-xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-rajdhani font-bold text-carbon">Backend</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center">
                                <i className="fab fa-node-js text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Node.js</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-server text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Express</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-php text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">PHP</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-python text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Python</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-database text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">PostgreSQL</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-leaf text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    {/* Cloud */}
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-3">
                                <i className="fas fa-cloud text-xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-rajdhani font-bold text-carbon">Cloud & DevOps</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center">
                                <i className="fab fa-aws text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">AWS</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-docker text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Docker</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-github text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">GitHub</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fab fa-linux text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Linux</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-fire text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Firebase</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <i className="fas fa-cloud text-2xl text-carbon/70 mr-3"></i>
                                <span className="font-league-spartan text-carbon">Vercel</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-white border border-carbon/10 rounded-2xl p-8 max-w-3xl mx-auto">
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