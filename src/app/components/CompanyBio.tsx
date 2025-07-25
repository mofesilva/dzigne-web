import React from 'react'

function CompanyBio() {
    return (
        <section aria-label="Conheça a Dzign-e" className='section-container py-10'>
            <div className="about__us__container">
                <div className="about__us__content">
                    <h1 className="about__us__title">Somos a Dzign-e</h1>
                    <p className="about__us__paragraph">Uma software house brasileira especializada em criar produtos e soluções
                        digitais
                        sob medida para empresas que buscam inovação,
                        eficiência e resultados reais. Combinamos design inteligente, tecnologia de ponta e uma escuta ativa
                        das dores do
                        cliente para transformar ideias em sistemas, apps e plataformas robustas.
                        Nosso compromisso vai além do código: entregamos projetos com propósito, que evoluem negócios e
                        simplificam a vida das
                        pessoas.</p>
                    <h2 className="about__us__subtitle">“Na Dzign-e, unimos inteligência técnica e sensibilidade de negócio para
                        entregar soluções digitais que crescem com
                        você.”</h2>
                    <a href="/about-us.html" className="about__button button">
                        Inside Dzign-e
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CompanyBio;