'use client'
import React from 'react'
import Carousel from '@/components/Swiper'
import TestimonialCard from './TestimonialCard'

function TestimonialsSection() {
    const testimonials = [
        {
            text: "A Dzign-e desenvolveu uma solução que transformou completamente nossa operação digital. A qualidade técnica e o atendimento foram excepcionais do início ao fim do projeto.",
            name: "João Silva",
            position: "Diretor de TI",
            company: "TechCorp",
            photo: "/assets/images/depoimentos/adalberto.jpg"
        },
        {
            text: "Parceria estratégica fundamental para o crescimento da nossa empresa. A equipe sempre entregou soluções inovadoras que superaram nossas expectativas.",
            name: "Maria Santos",
            position: "CEO",
            company: "InnovaTech",
            photo: "/assets/images/depoimentos/claudia.jpg"
        },
        {
            text: "Excelente trabalho no desenvolvimento da nossa plataforma mobile. A Dzign-e demonstrou expertise técnica e comprometimento em cada etapa do projeto.",
            name: "Carlos Oliveira",
            position: "Gerente de Projetos",
            company: "DigitalSoft",
            photo: "/assets/images/depoimentos/marcelo.jpg"
        }
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
                    background: #4A5568;
                }
            `}</style>

            <section className="bg-eggshell pt-10 pb-20">
                <div className="section-container">
                    <div className="text-start mb-16">
                        <h2 className="text-5xl font-rajdhani font-bold text-carbon mt-4">
                            O que dizem nossos clientes
                        </h2>
                    </div>

                    <div className="relative">
                        <Carousel
                            slides={slides}
                            options={{
                                slidesPerView: 1,
                                spaceBetween: 30,
                                autoplay: false,
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