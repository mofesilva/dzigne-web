import React from 'react';

function AboutTeamSection() {
    return (
        <section className='bg-eggshell w-full py-32'>
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-carbon mb-4">
                        Nossa Equipe
                    </h2>
                    <p className="font-league-spartan text-xl text-carbon/80 max-w-2xl mx-auto">
                        Profissionais apaixonados por tecnologia e comprometidos com a excelência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="font-rajdhani text-3xl font-bold text-carbon mb-6">
                            "Na Dzign-e, unimos inteligência técnica e sensibilidade de negócio para entregar soluções digitais que crescem com você."
                        </h3>
                        <p className="font-league-spartan text-lg text-carbon/80 mb-8 leading-relaxed">
                            Nossa equipe é formada por desenvolvedores, designers e estrategistas digitais que trabalham
                            em sintonia para transformar suas ideias em realidade. Cada projeto é uma oportunidade de
                            superar expectativas e criar algo extraordinário.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-code text-carbon text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-rajdhani text-xl font-bold text-carbon">Desenvolvimento Full-Stack</h4>
                                    <p className="font-league-spartan text-carbon/70">Frontend, Backend e Mobile</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-palette text-carbon text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-rajdhani text-xl font-bold text-carbon">Design & UX/UI</h4>
                                    <p className="font-league-spartan text-carbon/70">Experiências digitais memoráveis</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-accent w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-chart-line text-carbon text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-rajdhani text-xl font-bold text-carbon">Estratégia Digital</h4>
                                    <p className="font-league-spartan text-carbon/70">Planejamento e crescimento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="bg-carbon rounded-2xl p-8">
                            <h4 className="font-rajdhani text-2xl font-bold text-white mb-4">
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