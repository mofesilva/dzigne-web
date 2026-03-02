'use client';
import React from 'react';
import LazyImage from '@/components/LazyImage';
import BrandIcon from '@/components/BrandIcon';
import { PaintRoller, Server, Database, Leaf, Fire, CloudBoltMinimalistic, Rocket } from '@solar-icons/react/ssr';

function TechStackSection() {
    return (
        <section className="bg-eggshell w-full py-32">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h1 className="font-rajdhani font-bold text-carbon mb-8">
                        Tecnologias que <span className="text-green-accent">Dominamos</span>
                    </h1>
                    <h5 className="font-league-spartan text-carbon/80 max-w-4xl mx-auto leading-relaxed">
                        Utilizamos as melhores e mais modernas tecnologias do mercado para
                        garantir performance, escalabilidade e qualidade em todos os projetos.
                    </h5>
                </div>

                {/* Tech Stack Table Card */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="bg-neutral-200 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-carbon/10">
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon">Frontend</th>
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon border-l border-carbon/10">Backend</th>
                                    <th className="text-left p-6 font-rajdhani font-bold text-carbon border-l border-carbon/10">Cloud & DevOps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-6 align-top">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <LazyImage src="/assets/icons/nextjs-icon-svgrepo-com.svg" alt="Next.js" width={20} height={20} className="opacity-70 mr-3" />
                                                <span className="font-league-spartan text-carbon text-small">Next.js</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="flutter" size={18} className="opacity-70 mr-3" alt="Flutter" />
                                                <span className="font-league-spartan text-carbon text-small">Flutter</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="dart" size={18} className="opacity-70 mr-3" alt="Dart" />
                                                <span className="font-league-spartan text-carbon text-small">Dart</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="react" size={18} className="opacity-70 mr-3" alt="React" />
                                                <span className="font-league-spartan text-carbon text-small">React</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="javascript" size={18} className="opacity-70 mr-3" alt="JavaScript" />
                                                <span className="font-league-spartan text-carbon text-small">JavaScript</span>
                                            </div>
                                            <div className="flex items-center">
                                                <PaintRoller weight="Outline" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">UI/UX Design</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 align-top border-l border-carbon/10">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <BrandIcon name="nodejs" size={18} className="opacity-70 mr-3" alt="Node.js" />
                                                <span className="font-league-spartan text-carbon text-small">Node.js</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Server weight="Outline" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">Express</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="php" size={18} className="opacity-70 mr-3" alt="PHP" />
                                                <span className="font-league-spartan text-carbon text-small">PHP</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="python" size={18} className="opacity-70 mr-3" alt="Python" />
                                                <span className="font-league-spartan text-carbon text-small">Python</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Database weight="Outline" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">PostgreSQL</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Leaf weight="Outline" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">MongoDB</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 align-top border-l border-carbon/10">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <BrandIcon name="aws" size={18} className="opacity-70 mr-3" alt="AWS" />
                                                <span className="font-league-spartan text-carbon text-small">AWS</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="docker" size={18} className="opacity-70 mr-3" alt="Docker" />
                                                <span className="font-league-spartan text-carbon text-small">Docker</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="github" size={18} className="opacity-70 mr-3" alt="GitHub" />
                                                <span className="font-league-spartan text-carbon text-small">GitHub</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BrandIcon name="linux" size={18} className="opacity-70 mr-3" alt="Linux" />
                                                <span className="font-league-spartan text-carbon text-small">Linux</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Fire weight="Bold" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">Firebase</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CloudBoltMinimalistic weight="Outline" size={18} className="opacity-70 mr-3 text-carbon" />
                                                <span className="font-league-spartan text-carbon text-small">Vercel</span>
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
                        <h4 className="font-rajdhani font-bold text-carbon mb-4">
                            Stack Personalizada para Seu Projeto
                        </h4>
                        <p className="font-league-spartan text-carbon/70 mb-6 leading-relaxed">
                            Além das tecnologias listadas, adaptamos nossa stack às necessidades específicas
                            do seu projeto, sempre priorizando performance e escalabilidade.
                        </p>
                        <a
                            href="/contato"
                            className="inline-flex items-center px-6 py-3 bg-green-accent text-white font-league-spartan font-semibold rounded-lg hover:bg-green-accent-light transition-colors"
                        >
                            <Rocket weight="Bold" size={18} className="mr-2" />
                            Vamos Conversar sobre Seu Projeto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;
