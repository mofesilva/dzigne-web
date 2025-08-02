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

                {/* Tech Stack Table Card */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="bg-neutral-200 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-carbon/10">
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon text-xl">Frontend</th>
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon text-xl border-l border-carbon/10">Backend</th>
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon text-xl border-l border-carbon/10">Cloud & DevOps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-6 align-top">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/icons/nextjs-icon-svgrepo-com.svg"
                                                    alt="Next.js"
                                                    className="w-5 h-5 opacity-70 mr-3"
                                                />
                                                <span className="font-league-spartan text-carbon text-sm">Next.js</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-flutter text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Flutter</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-dart-lang text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Dart</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-react text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">React</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-js-square text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">JavaScript</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-paint-brush text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">UI/UX Design</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 align-top border-l border-carbon/10">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <i className="fab fa-node-js text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Node.js</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-server text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Express</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-php text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">PHP</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-python text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Python</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-database text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">PostgreSQL</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-leaf text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">MongoDB</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 align-top border-l border-carbon/10">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <i className="fab fa-aws text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">AWS</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-docker text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Docker</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-github text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">GitHub</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fab fa-linux text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Linux</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-fire text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Firebase</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-cloud text-lg opacity-70 mr-3 text-carbon"></i>
                                                <span className="font-league-spartan text-carbon text-sm">Vercel</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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