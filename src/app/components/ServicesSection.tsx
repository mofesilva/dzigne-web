import React from 'react'
import ServiceListItem from './ServiceListItem'

function ServicesSection() {
    return (
        <section className='section-container'>
            <div className="py-20">
                <h1 className="font-rajdhani text-4xl font-bold text-center pb-20">O que fazemos de melhor!</h1>
                <ul className="flex gap-10 text-center justify-center">
                    <ServiceListItem icon="fa-solid fa-code" title="Desenvolvimento" description="Acreditamos no poder de projetos desenvolvidos sob medida, alinhados às necessidades do seu negócio." />
                    <ServiceListItem icon="fa-solid fa-user-plus" title="Alocação de equipes" description="Montamos times sob demanda com os perfis certos para acelerar sua entrega com qualidade e eficiência." />
                    <ServiceListItem icon="fa-solid fa-microchip" title="Tecnologia proprietária" description="Através da nossa tecnologia proprietária, seu aplicativo fica pronto ainda mais rápido!" />
                    <ServiceListItem icon="fa-solid fa-cloud" title="Infraestrutura" description="Oferecemos toda infraestrutura para seu sistema ou aplicativo ficar rodando, na nuvem!" />
                </ul>
            </div>
        </section>
    )
}

export default ServicesSection