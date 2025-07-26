import React from 'react'
import NavigationButton from '../../components/NavigationButton';

function CompanyBio() {
    return (
        <section aria-label="Conheça a Dzign-e" className='section-container py-20'>
            {/* Header com título e botão */}
            <div className="flex justify-between items-start mb-16">
                <div>
                    <h1 className="font-rajdhani text-5xl font-bold text-white mb-4">
                        Somos a Dzign-e
                    </h1>
                    <p className="font-league-spartan text-xl pb-8 text-white/70 max-w-2xl">
                        Uma software house brasileira especializada em criar produtos e soluções
                        digitais
                        sob medida para empresas que buscam inovação,
                        eficiência e resultados reais. Combinamos design inteligente, tecnologia de ponta e uma escuta ativa
                        das dores do
                        cliente para transformar ideias em sistemas, apps e plataformas robustas.
                        Nosso compromisso vai além do código: entregamos projetos com propósito, que evoluem negócios e
                        simplificam a vida das
                        pessoas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-center mb-8">
                        <NavigationButton
                            href={'/about-us'}
                            text={'Conheça a Dzign-e'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyBio;