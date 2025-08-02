import React from 'react'
import Image from 'next/image'

const logos = [
    { src: '/assets/images/logos/arion.png', alt: 'Arion' },
    { src: '/assets/images/logos/ergon.png', alt: 'Ergon' },
    { src: '/assets/images/logos/gar.png', alt: 'GAR' },
    { src: '/assets/images/logos/gideoes.png', alt: 'Gideões' },
    { src: '/assets/images/logos/infinity.png', alt: 'Infinity' },
    { src: '/assets/images/logos/ipb.png', alt: 'IPB' },
    { src: '/assets/images/logos/ipi.png', alt: 'IPI' },
    { src: '/assets/images/logos/labormed.png', alt: 'Labormed' },
    { src: '/assets/images/logos/mackenzie.png', alt: 'Mackenzie' },
    { src: '/assets/images/logos/sigmacon.png', alt: 'Sigmacon' },
    { src: '/assets/images/logos/tecsports.png', alt: 'Tecsports' },
    { src: '/assets/images/logos/trilobit.png', alt: 'Trilobit' },
]

function LogosGrid() {
    return (
        <section className="bg-eggshell py-16">
            <div className="section-container">
                <h2 className="text-4xl 2xl:text-5xl font-rajdhani font-bold text-center mb-8 text-carbon">
                    Empresas que confiaram seu potencial à Dzign-e
                </h2>
                <div className="grid rounded-2xl bg-neutral-200 border-neutral-300 border-2 p-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={`${logo.alt} Logo`}
                                width={120}
                                height={120}
                                className="h-auto w-20 md:w-24 lg:w-28 opacity-50 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogosGrid 