'use client';
import Carousel from '@/components/Swiper';
import React from 'react';
import CaseSlide from './CaseSlide';
import NavigationButton from '../../components/NavigationButton';

function CasesHighlightsSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden">
            {/* Header — same spacing as Hero */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-24 lg:pt-32 pb-4">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div className="max-w-3xl">
                        <p
                            className="font-league-spartan text-eggshell/40 mb-4 tracking-widest uppercase"
                            style={{ fontSize: 'clamp(0.7rem, 0.5vw + 0.4rem, 0.85rem)' }}
                        >
                            Portfólio
                        </p>
                        <h1
                            className="font-rajdhani text-eggshell"
                            style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 5rem)', lineHeight: 1.05 }}
                        >
                            <span className="font-medium">Nossos</span><br />
                            <span className="font-bold text-green-accent">cases de sucesso</span>
                        </h1>
                    </div>
                    <div className="flex-shrink-0">
                        <NavigationButton href="/cases" text="Ver todos os cases" />
                    </div>
                </div>
            </div>

            {/* Carousel — full bleed feel */}
            <div className="pb-20 lg:pb-28">
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
                        spaceBetween: 0,
                        pagination: { clickable: true },
                        autoplay: { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true },
                    }}
                    slides={[
                        <CaseSlide
                            key={1}
                            text="Criamos uma solução digital exclusiva que potencializou o estudo dos alunos para a OAB, integrando simulados intuitivos com gestão dinâmica do conteúdo pelos professores."
                            logo="/assets/images/logos/mackenzie2.png"
                            alt="Mackenzie Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/oabmack_mockup.png"
                            href="/cases/oab-mack"
                        />,
                        <CaseSlide
                            key={2}
                            text="Criamos o sistema oficial da Igreja Presbiteriana do Brasil, integrando funcionalidades cadastrais, documentos e gestão conciliar. A IPB otimizou o acesso aos documentos e reduziu o tempo das reuniões."
                            logo="/assets/images/logos/icalvinus-hn.png"
                            alt="iCalvinus Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/iCalvinus_mockup_2.png"
                            href="/cases/icalvinus"
                        />,
                        <CaseSlide
                            key={3}
                            text="Desenvolvemos um aplicativo que revolucionou a gestão condominial, integrando reservas, câmeras e autorizações de entrada em uma única solução inteligente."
                            logo="/assets/images/logos/sigmaapp-n.png"
                            alt="SigmaApp Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/sigmaapp-mockup-1.png"
                            href="/cases/sigmaapp"
                        />,
                        <CaseSlide
                            key={4}
                            text="Marketplace em desenvolvimento para conectar prestadores de serviços a potenciais clientes, com interface intuitiva e funcionalidades robustas."
                            logo="/assets/images/logos/contrataja-hn1.png"
                            alt="Contrata Já Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/contrataja-ipad-mockup.png"
                            href="/cases/contrata-ja"
                        />,
                        <CaseSlide
                            key={5}
                            text="Sistema integrado de gestão eclesiástica, conectando igrejas presbiterianas em todo o Brasil com ferramentas modernas de comunicação e administração."
                            logo="/assets/images/logos/ipiconecta-h2.png"
                            alt="IPIConecta Logo"
                            isLogoHorizontal={true}
                            mockup="/assets/images/mockups/ipiconecta_desktop_mockup_1.png"
                            href="/cases/ipiconecta"
                        />,
                    ]}
                />
            </div>
        </section>
    );
}

export default CasesHighlightsSection;
