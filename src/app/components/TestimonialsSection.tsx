'use client'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'


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

function TestimonialsSection() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const avatarRowRef = useRef<HTMLDivElement>(null)

    const selected = testimonials[selectedIndex]

    const goTo = useCallback((index: number) => {
        if (isAnimating) return
        setIsAnimating(true)
        const next = (index + testimonials.length) % testimonials.length
        setSelectedIndex(next)
        setTimeout(() => setIsAnimating(false), 400)
    }, [isAnimating])

    const goPrev = useCallback(() => goTo(selectedIndex - 1), [selectedIndex, goTo])
    const goNext = useCallback(() => goTo(selectedIndex + 1), [selectedIndex, goTo])

    // Scroll the selected avatar into view on mobile
    useEffect(() => {
        if (!avatarRowRef.current) return
        const container = avatarRowRef.current
        const activeEl = container.children[selectedIndex] as HTMLElement
        if (!activeEl) return
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }, [selectedIndex])

    return (
        <section className="bg-eggshell py-32">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-24 lg:mb-32">
                    <h6 className="font-outfit text-green-accent font-semibold tracking-[0.25em] uppercase mb-6">Depoimentos</h6>
                    <h2 className="font-rajdhani font-bold text-carbon">
                        O que dizem nossos clientes
                    </h2>
                </div>



                {/* Testimonial Content */}
                <div className="relative flex items-center justify-center gap-8 md:gap-14 lg:gap-20 max-w-6xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={goPrev}
                        className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-neutral-300 
                                   flex items-center justify-center text-carbon cursor-pointer
                                   hover:border-green-accent hover:text-green-accent 
                                   transition-all duration-200 bg-neutral-200"
                        aria-label="Depoimento anterior"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>

                    {/* Card */}
                    <div
                        key={selectedIndex}
                        className="flex-1 min-w-0 text-center animate-fadeIn"
                    >
                        {/* Profile */}
                        <div className="flex flex-col items-center gap-5 mb-14 lg:mb-18">
                            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 lg:ring-[5px] ring-green-accent">
                                <Image
                                    src={selected.photo}
                                    alt={`${selected.name} - ${selected.position}`}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-3">
                                <h4 className="font-rajdhani font-bold text-carbon">
                                    {selected.name}
                                </h4>
                                <h6 className="text-gray-500 font-outfit font-normal mt-2">
                                    {selected.position}{selected.company ? ` · ${selected.company}` : ''}
                                </h6>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="relative px-2 md:px-8 lg:px-12">

                            <h5 className="text-gray-700 font-outfit font-normal leading-relaxed relative z-10 pt-8 lg:pt-10">
                                &ldquo;{selected.text}&rdquo;
                            </h5>

                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goNext}
                        className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-neutral-300 
                                   flex items-center justify-center text-carbon cursor-pointer
                                   hover:border-green-accent hover:text-green-accent 
                                   transition-all duration-200 bg-neutral-200"
                        aria-label="Próximo depoimento"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                </div>
            </div>
            {/* Avatar Row */}
            <div
                ref={avatarRowRef}
                className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mt-20 lg:mt-28 overflow-x-auto py-6 px-6 scrollbar-hide"
            >
                {testimonials.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="flex-shrink-0 group relative focus:outline-none cursor-pointer"
                        aria-label={`Ver depoimento de ${t.name}`}
                    >
                        <div
                            className={`
                                    w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden
                                    transition-all duration-300 ease-out
                                    ${i === selectedIndex
                                    ? 'ring-[3px] ring-green-accent scale-110'
                                    : 'ring-2 ring-neutral-300 opacity-45 hover:opacity-75 hover:ring-neutral-400'
                                }
                                `}
                        >
                            <Image
                                src={t.photo}
                                alt={t.name}
                                width={72}
                                height={72}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </button>
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection