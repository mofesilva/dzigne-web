import Carousel from '@/components/Swiper';
import React from 'react'
import CaseSlide from './CaseSlide';

function CasesHighlightsSection() {
    return (
        <section className="section-container flex justify-center items-center" style={{ minHeight: 600 }}>
            <Carousel
                className="h-auto md:h-[600px] w-full"
                style={{
                    '--swiper-navigation-color': '#7fd10c',
                    '--swiper-pagination-bullet-inactive-color': '#eeeeee',
                    '--swiper-pagination-bullet-inactive-opacity': '0.1',
                    '--swiper-pagination-color': '#7fd10c',
                    '--swiper-navigation-size': '24px',
                } as React.CSSProperties}
                options={{
                    spaceBetween: 32  // Gap de 24px entre os slides
                }}
                slides={[
                    <CaseSlide key={1}
                        text="Criamos uma solução digital exclusiva que potencializou o estudo
                            dos alunos para a OAB, integrando simulados intuitivos
                            com gestão dinâmica do conteúdo pelos professores.
                            Descubra como revolucionamos a preparação dos estudantes."
                        logo="/assets/images/logos/mackenzie1.png"
                        alt="Labormed Logo"
                        mockup="/assets/images/mockups/oabmack_mockup.png"
                        href="/" />,
                    <CaseSlide key={2} text="Desenvolvemos um app que revolucionou a gestão condominial,
                            integrando reservas, câmeras e autorizações de entrada em
                            uma única solução inteligente.

                            Clique e veja como a tecnologia virou aliada da segurança." logo="/assets/images/logos/sigmacon1png.png" alt="Arion Logo" mockup="/assets/images/mockups/oabmack_mockup.png" href="/" />,
                    <CaseSlide key={3} text="Auxiliamos a Universidade Mackenzie no desenvolvimento uma
                            plataforma personalizada, composta por um aplicativo móvel para alunos e
                            uma interface web para
                            professores. A solução proporcionou uma experiência intuitiva e produtiva de estudos,
                            permitindo gestão eficiente do
                            conteúdo e resultando em uma preparação mais robusta para os estudantes." logo="/assets/images/logos/ipi1.png" alt="Mackenzie Logo" mockup="/assets/images/mockups/oabmack_mockup.png" href="/" />
                ]}
            />
        </section>
    )
}

export default CasesHighlightsSection;