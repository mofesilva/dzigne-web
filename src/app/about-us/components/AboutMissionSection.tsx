import React from 'react';
import { LightbulbBolt, UsersGroupTwoRounded, Cup } from '@solar-icons/react/ssr';

function AboutMissionSection() {
    return (
        <section className='bg-eggshell w-full py-16'>
            <div className="section-container text-center">
                <h1 className="font-rajdhani font-bold text-carbon mb-8">
                    Nossa Missão
                </h1>
                <h5 className="font-league-spartan text-carbon/80 max-w-4xl mx-auto leading-relaxed">
                    Transformar ideias em soluções digitais inovadoras, combinando design inteligente com tecnologia de ponta.
                    Nosso compromisso vai além do código: entregamos projetos com propósito, que evoluem negócios e
                    simplificam a vida das pessoas.
                </h5>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-neutral-200 rounded-2xl p-8 border-2 border-neutral-300 text-start">
                        <div className="text-carbon pb-6">
                            <LightbulbBolt weight="Outline" size={36} />
                        </div>
                        <h4 className="font-rajdhani font-bold text-carbon mb-2">Inovação</h4>
                        <p className="font-league-spartan text-carbon/70">Sempre buscamos as melhores tecnologias e práticas do mercado</p>
                    </div>

                    <div className="bg-neutral-200 rounded-2xl p-8 border-2 border-neutral-300 text-start">
                        <div className="text-carbon pb-6">
                            <UsersGroupTwoRounded weight="Outline" size={36} />
                        </div>
                        <h4 className="font-rajdhani font-bold text-carbon mb-2">Colaboração</h4>
                        <p className="font-league-spartan text-carbon/70">Trabalhamos em parceria próxima com nossos clientes</p>
                    </div>

                    <div className="bg-neutral-200 rounded-2xl p-8 border-2 border-neutral-300 text-start">
                        <div className="text-carbon pb-6">
                            <Cup weight="Bold" size={36} />
                        </div>
                        <h4 className="font-rajdhani font-bold text-carbon mb-2">Excelência</h4>
                        <p className="font-league-spartan text-carbon/70">Entregamos sempre o melhor resultado possível</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMissionSection; 