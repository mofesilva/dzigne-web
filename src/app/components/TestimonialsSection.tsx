'use client'
import React from 'react'
import Carousel from '@/components/Swiper'
import TestimonialCard from './TestimonialCard'

function TestimonialsSection() {
    const testimonials = [
        {
            text: "Temos uma parceria sólida com a Dzign-e desde 2018. Eles abraçaram o desafio de desenvolver um aplicativo pioneiro para gestão de segurança e transformaram nosso sonho em realidade de excelência. Continuamos trabalhando juntos com foco na melhoria contínua do produto.",
            name: "Adalberto Santos",
            position: "CEO",
            company: "Sigmacon",
            photo: "/assets/images/depoimentos/adalberto.jpg"
        },
        {
            text: "A Dzign-e sempre atendeu nossas expectativas, nos fornecendo serviços de qualidade e sempre fomos atendidos prontamente. A empresa é extremamente comprometida o que é muito importante pra mim.",
            name: "Cláudia Martins",
            position: "CEO",
            company: "Labormed Sorocaba",
            photo: "/assets/images/depoimentos/claudia.jpg"
        },
        {
            text: "A Dzign-e desenvolveu um aplicativo multiplataforma (iOS e Android) para simulados da OAB com layout moderno e intuitivo. Atenderam todos os requisitos e entregaram além do solicitado. Estamos impressionados com a qualidade do atendimento e suporte técnico.",
            name: "Anderson Amim",
            position: "Gerente de TI",
            company: "Universidade Mackenzie de Brasilia",
            photo: "/assets/images/depoimentos/anderson.jpg"
        },
        //TODO: Buscar depoimento da CCPrevi
        //TODO: Buscar depoimento da IPIB (Pb. Moisés talvez)
        {
            text: "Trabalhamos com a Dzign-e há nove anos e ela é nossa primeira opção para novos projetos. Gerencia nosso site e aplicativo, desenvolveu nosso sistema de reservas para cultos durante a pandemia com todas as funcionalidades pensadas. O suporte técnico é rápido e eficiente. Recomendamos sem dúvida.",
            name: "Presbª. Dorothy Maia",
            position: "Membro do conselho",
            company: "Primeira IPI de São Paulo",
            photo: "/assets/images/depoimentos/dorothy.jpg"
        },
        {
            text: "Somos clientes da Dzign-e há mais de sete anos. A integração entre site e aplicativo facilita muito a divulgação e uso pelos membros da igreja. Tudo que é feito no site aparece imediatamente no app, incluindo cultos online disponíveis 24h. A satisfação é total pela competência, profissionalismo e excelente comunicação da equipe.",
            name: "Rev. Geraldo Silveira",
            position: "Pastor titular",
            company: "Igreja Presbiteriana do Belvedere",
            photo: "/assets/images/depoimentos/geraldo.jpg"
        },
        {
            text: "Registramos nossa gratidão pelo desenvolvimento e administração do site e aplicativo da nossa igreja. A Dzign-e une qualidade e eficiência, sempre disponível inclusive em urgências, atendendo todas as demandas com atenção e prestatividade. Obrigado, Dzign-e!",
            name: "Rev. Marcelo Martinello",
            position: "Pastor auxiliar",
            company: "Igreja Presbiteriana de Vila Mariana",
            photo: "/assets/images/depoimentos/marcelo.jpg"
        },
        {
            text: "Trabalhamos com a Dzign-e há alguns anos no desenvolvimento de website sincronizado com aplicativo. Atendimento pronto, desenvolvido conforme nossas necessidades com total satisfação. Ferramentas fáceis e acessíveis, aprovadas pelos membros. Suporte rápido e efetivo. O investimento vale a pena. Recomendação total.",
            name: "Rev. Carlos E. Aranha Neto",
            position: "Pastor titular",
            company: "Igreja Presbiteriana de Campinas",
            photo: "/assets/images/depoimentos/aranha.jpg"
        },
    ]

    const slides = testimonials.map((testimonial, index) => (
        <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            position={testimonial.position}
            company={testimonial.company}
            photo={testimonial.photo}
        />
    ))

    return (
        <>
            <style jsx global>{`
                .testimonials-carousel .swiper-button-next,
                .testimonials-carousel .swiper-button-prev {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #4A5568;
                    background: none;
                    width: 44px;
                    height: 44px;
                    margin-top: 0;
                    z-index: 10;
                }
                
                .testimonials-carousel .swiper-button-prev {
                    left: -80px;
                }
                
                .testimonials-carousel .swiper-button-next {
                    right: -80px;
                }
                
                .testimonials-carousel .swiper-pagination {
                    position: static;
                    margin-top: 40px;
                }
                
                .testimonials-carousel .swiper-pagination-bullet {
                    background: #CBD5E0;
                    opacity: 1;
                    margin: 0 6px;
                }
                
                .testimonials-carousel .swiper-pagination-bullet-active {
                    background: #171717;
                }
            `}</style>

            <section className="bg-eggshell py-16">
                <div className="section-container">
                    <div className="text-start mb-8">
                        <h2 className="text-4xl 2xl:text-5xl font-rajdhani font-bold text-carbon mt-4">
                            O que dizem nossos clientes
                        </h2>
                    </div>

                    <div className="relative">
                        <Carousel
                            slides={slides}
                            options={{
                                slidesPerView: 1,
                                spaceBetween: 30,
                                autoplay: {
                                    delay: 3000,
                                    disableOnInteraction: false,
                                },
                                loop: false,
                                breakpoints: {
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    }
                                }
                            }}
                            className="testimonials-carousel"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection