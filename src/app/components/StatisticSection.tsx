import React from 'react'

function StatisticSection() {
    return (
        <section aria-label="Resumo das estatísticas da Dzign-e">
            <div className="statistic__container">
                <div className="statistic__content">
                    <div className="statistic__info__card">
                        <i className="fa-solid fa-business-time"></i>
                        <h1 className="statistic__title">+ de 15 anos</h1>
                        <p>transformando <br />ideias em produtos digitais</p>
                    </div>
                    <div className="statistic__info__card">
                        <i className="fa-solid fa-terminal"></i>
                        <h1 className="statistic__title">+ de 35 anos</h1>
                        <p>de experiência com <br />desenvolvimento acumulado</p>
                    </div>
                    <div className="statistic__info__card">
                        <i className="fa-solid fa-id-badge"></i>
                        <h1 className="statistic__title">+ de 60 empresas</h1>
                        <p>transformadas<br /> por nossas soluções!</p>
                    </div>
                    <div className="statistic__info__card">
                        <i className="fa-solid fa-compass"></i>
                        <h1 className="statistic__title">+ de 9 segmentos</h1>
                        <p>impactados<br /> por nossa expertise!</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default StatisticSection;