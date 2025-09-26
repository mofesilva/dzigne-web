'use client';
import Carousel from '@/components/Swiper';
import React from 'react'
import CaseSlide from './CaseSlide';

function CasesHighlightsSection() {
    return (
        <section className=" bg-carbon sm:mx-2">
            <div className="section-container flex justify-center items-center">
                <Carousel
                    className="h-auto w-full"
                    style={{
                        '--swiper-navigation-color': '#7fd10c',
                        '--swiper-pagination-bullet-inactive-color': '#eeeeee',
                        '--swiper-pagination-bullet-inactive-opacity': '0.1',
                        '--swiper-pagination-color': '#7fd10c',
                        '--swiper-navigation-size': '24px',
                    } as React.CSSProperties}
                    options={{
                        spaceBetween: 32,
                        pagination: { clickable: true },
                        autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true } // Gap de 24px entre os slides
                    }}
                    slides={[
                        <CaseSlide key={1}
                            text="Criamos uma solução digital exclusiva que potencializou o estudo
                            dos alunos para a OAB, integrando simulados intuitivos
                            com gestão dinâmica do conteúdo pelos professores.
                            Descubra como revolucionamos a preparação dos estudantes."
                            logo="/assets/images/logos/mackenzie2.png"
                            alt="Mackenzie Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/oabmack_mockup.png"
                            href="/cases/oab-mack" />,
                        <CaseSlide key={2} text="Criamos o sistema oficial da Igreja Presbiteriana do Brasil, o iCalvinus, um sistema de gestão que integra diversas funcionalidades cadastrais, documentos e gestão conciliar. Com essa solução, a IPB conseguiu otimizar o acesso aos documentos e decisões e ainda reduziu o tempo das reuniões desta celere denominação evangelica."
                            logo="/assets/images/logos/icalvinus-hn.png"
                            alt="Icalvinus Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/iCalvinus_mockup_2.png"
                            href="/cases/icalvinus" />,
                        <CaseSlide key={3} text="Desenvolvemos um aplicativo que revolucionou a gestão condominial,
                            integrando reservas, câmeras e autorizações de entrada em
                            uma única solução inteligente, facilitando a vida dos moradores de diversos condomínios pelo Brasil."
                            logo="/assets/images/logos/sigmaapp-n.png"
                            alt="Sigmacon Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/sigmaapp-mockup-1.png"
                            href="/cases/sigmaapp" />,
                        <CaseSlide key={4} text="Contrata já é um marketplace em desenvolvimento, para conectar prestadores de serviços a potenciais clientes. Com uma interface intuitiva e funcionalidades robustas, a plataforma visa facilitar o processo de contratação, oferecendo segurança e eficiência tanto para profissionais quanto para usuários finais."
                            logo="/assets/images/logos/contrataja-hn1.png"
                            alt="Contrata Já Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/contrataja-ipad-mockup.png"
                            href="/cases/contrata-ja" />,
                        <CaseSlide key={5} text="Criamos o sistema oficial da Igreja Presbiteriana do Brasil, o iCalvinus, um sistema de gestão que integra diversas funcionalidades cadastrais, documentos e gestão conciliar. Com essa solução, a IPB conseguiu otimizar o acesso aos documentos e decisões e ainda reduziu o tempo das reuniões desta celere denominação evangelica."
                            logo="/assets/images/logos/ipiconecta-h2.png"
                            alt="Icalvinus Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/ipiconecta_desktop_mockup_1.png"
                            href="/cases/ipiconecta" />,

                    ]}
                />
            </div>
        </section>
    )
}

export default CasesHighlightsSection;