import React from 'react';
import { Code, Pallete, GraphUp } from '@solar-icons/react/ssr';

function AboutTeamSection() {
    return (
        <section className='bg-eggshell w-full py-16'>
            <div className="section-container">
                <div className="text-center mb-16">
                    <h1 className="font-rajdhani font-bold text-carbon mb-4">
                        Nossa Equipe
                    </h1>
                    <h5 className="font-league-spartan text-carbon/80 max-w-2xl mx-auto">
                        Profissionais apaixonados por tecnologia e comprometidos com a excelência.
                    </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-rajdhani font-bold text-carbon mb-6">
                            &ldquo;Na Dzign-e, unimos inteligência técnica e sensibilidade de negócio para entregar soluções digitais que crescem com você.&rdquo;
                        </h2>
                        <h6 className="font-league-spartan text-carbon/80 mb-8 leading-relaxed">
                            Nossa equipe é formada por desenvolvedores, designers e estrategistas digitais que trabalham
                            em sintonia para transformar suas ideias em realidade. Cada projeto é uma oportunidade de
                            superar expectativas e criar algo extraordinário.
                        </h6>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <Code weight="Bold" size={20} className="text-carbon" />
                                </div>
                                <div>
                                    <h5 className="font-rajdhani font-bold text-carbon">Desenvolvimento Full-Stack</h5>
                                    <p className="font-league-spartan text-carbon/70">Frontend, Backend e Mobile</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <Pallete weight="Outline" size={20} className="text-carbon" />
                                </div>
                                <div>
                                    <h5 className="font-rajdhani font-bold text-carbon">Design & UX/UI</h5>
                                    <p className="font-league-spartan text-carbon/70">Experiências digitais memoráveis</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <GraphUp weight="Outline" size={20} className="text-carbon" />
                                </div>
                                <div>
                                    <h5 className="font-rajdhani font-bold text-carbon">Estratégia Digital</h5>
                                    <p className="font-league-spartan text-carbon/70">Planejamento e crescimento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="bg-carbon rounded-2xl p-8">
                            <h4 className="font-rajdhani font-bold text-white mb-4">
                                Pronto para começar?
                            </h4>
                            <p className="font-league-spartan text-white/80 mb-6">
                                Vamos conversar sobre o seu próximo projeto e como podemos ajudar a transformar sua visão em realidade.
                            </p>
                            <a
                                href="mailto:contato@dzign-e.com"
                                className="inline-block bg-green-accent text-carbon px-6 py-3 rounded-lg font-rajdhani font-semibold hover:bg-green-accent-light transition-colors"
                            >
                                Entre em Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTeamSection; 