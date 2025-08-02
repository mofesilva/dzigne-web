import React from 'react';

function AboutMissionSection() {
    return (
        <section className='bg-eggshell w-full py-16'>
            <div className="section-container text-center">
                <h2 className="font-rajdhani text-5xl font-bold text-carbon mb-8">
                    Nossa Missão
                </h2>
                <p className="font-league-spartan text-xl text-carbon/80 max-w-4xl mx-auto leading-relaxed">
                    Transformar ideias em soluções digitais inovadoras, combinando design inteligente com tecnologia de ponta.
                    Nosso compromisso vai além do código: entregamos projetos com propósito, que evoluem negócios e
                    simplificam a vida das pessoas.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300 text-center">
                        <div className="bg-green-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-lightbulb text-carbon text-2xl"></i>
                        </div>
                        <h3 className="font-rajdhani text-2xl font-bold text-carbon mb-2">Inovação</h3>
                        <p className="font-league-spartan text-carbon/70">Sempre buscamos as melhores tecnologias e práticas do mercado</p>
                    </div>

                    <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300 text-center">
                        <div className="bg-green-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-users text-carbon text-2xl"></i>
                        </div>
                        <h3 className="font-rajdhani text-2xl font-bold text-carbon mb-2">Colaboração</h3>
                        <p className="font-league-spartan text-carbon/70">Trabalhamos em parceria próxima com nossos clientes</p>
                    </div>

                    <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300 text-center">
                        <div className="bg-green-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-trophy text-carbon text-2xl"></i>
                        </div>
                        <h3 className="font-rajdhani text-2xl font-bold text-carbon mb-2">Excelência</h3>
                        <p className="font-league-spartan text-carbon/70">Entregamos sempre o melhor resultado possível</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMissionSection; 