import React from 'react';
import Image from 'next/image';

import NavigationButton from '../../components/NavigationButton';
import { AltArrowRight } from '@solar-icons/react/ssr';

function CasesHighlightsSection() {
    return (
        <section className="bg-eggshell w-full relative overflow-hidden">
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-24 lg:pt-32 pb-4">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div className="max-w-3xl">
                        <p
                            className="text-caption font-outfit text-carbon/60 mb-4 tracking-widest uppercase"
                        >
                            Portfólio
                        </p>
                        <h1
                            className="font-rajdhani text-carbon"
                        >
                            <span className="font-medium">Nossos</span><br />
                            <span className="font-bold">cases de sucesso</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* ── Bento Grid ── */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-12 pb-24 lg:pb-32">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
                    style={{ gridAutoRows: 'minmax(280px, auto)' }}
                >
                    {/* ═══ iCalvinus — Featured (2col × 2row) ═══ */}
                    <div
                        className="relative overflow-hidden rounded-tl-4xl rounded-bl-4xl border-2 border-neutral-300 md:col-span-2 lg:col-span-2 lg:row-span-2 md:min-h-[280px] bg-neutral-200 flex flex-col md:block"
                    >
                        <span className="block md:hidden font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase px-7 pt-7">
                            Gestão · Organização Religiosa · Documentos
                        </span>
                        <Image
                            src="/assets/images/mockups/iCalvinus_mockup_2.png"
                            alt=""
                            width={600}
                            height={500}
                            quality={90}
                            className="relative md:absolute pointer-events-none w-[75%] mx-auto md:mx-0 md:w-[50%] lg:w-[48%] h-auto md:top-1/2 md:-translate-y-1/2 md:right-4 lg:right-8 object-contain pt-6 md:pt-0"
                            aria-hidden
                        />
                        <div className="flex flex-col justify-between flex-1 md:h-full p-7 lg:p-10 relative z-10">
                            <span className="hidden md:block font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase">
                                Gestão · Organização Religiosa · Documentos
                            </span>
                            <div className="max-w-sm">
                                <Image
                                    src="/assets/images/logos/icalvinus-h.png"
                                    alt="iCalvinus Logo"
                                    width={200}
                                    height={60}
                                    quality={100}
                                    className="h-11 w-auto object-contain object-left mb-4"
                                />
                                <p
                                    className="font-outfit text-carbon/80 leading-relaxed mb-6"
                                >
                                    Criamos o sistema oficial da Igreja Presbiteriana do Brasil,
                                    integrando funcionalidades cadastrais, documentos e gestão conciliar.
                                </p>
                                <NavigationButton
                                    href="/cases/icalvinus"
                                    text="Ver case completo"
                                    icon={<AltArrowRight weight="Bold" size={16} />}
                                    inverted={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ═══ IPIConecta — Top right ═══ */}
                    <div
                        className="relative overflow-hidden rounded-tr-4xl border-2 border-neutral-300 md:min-h-[280px] bg-neutral-200 flex flex-col md:block"
                    >
                        <span className="block md:hidden font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase px-7 pt-7">
                            Gestão · Organização Religiosa
                        </span>
                        <Image
                            src="/assets/images/mockups/ipiconecta_desktop_mockup_1.png"
                            alt=""
                            width={400}
                            height={300}
                            quality={90}
                            className="relative md:absolute pointer-events-none w-[75%] mx-auto md:mx-0 md:w-72 lg:w-80 h-auto md:top-1/2 md:-translate-y-1/2 md:right-4 lg:right-6 object-contain pt-6 md:pt-0"
                            aria-hidden
                        />
                        <div className="flex flex-col justify-between flex-1 md:h-full p-7 lg:p-9 relative z-10 md:max-w-[55%]">
                            <span className="hidden md:block font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase">
                                Gestão · Organização Religiosa
                            </span>
                            <div>
                                <Image
                                    src="/assets/images/logos/ipiconecta-h4.png"
                                    alt="IPIConecta Logo"
                                    width={160}
                                    height={50}
                                    quality={100}
                                    className="h-9 w-auto object-contain object-left mb-3"
                                />
                                <p
                                    className="text-small font-outfit text-carbon/80 leading-relaxed mb-5"
                                >
                                    Sistema integrado conectando igrejas presbiterianas
                                    em todo o Brasil.
                                </p>
                                <NavigationButton
                                    href="/cases/ipiconecta"
                                    text="Ver case"
                                    icon={<AltArrowRight weight="Bold" size={16} />}
                                    inverted={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ═══ SigmaApp — Bottom right ═══ */}
                    <div
                        className="relative overflow-hidden rounded-br-4xl border-2 border-neutral-300 md:min-h-[280px] bg-neutral-200 flex flex-col md:block"
                    >
                        <span className="block md:hidden font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase px-7 pt-7">
                            Segurança · Condomínios · IoT
                        </span>
                        <Image
                            src="/assets/images/mockups/sigmaapp-mockup-1.png"
                            alt=""
                            width={400}
                            height={300}
                            quality={90}
                            className="relative md:absolute pointer-events-none w-[75%] mx-auto md:mx-0 md:w-72 lg:w-80 h-auto md:top-1/2 md:-translate-y-1/2 md:right-4 lg:right-6 object-contain pt-6 md:pt-0"
                            aria-hidden
                        />
                        <div className="flex flex-col justify-between flex-1 md:h-full p-7 lg:p-9 relative z-10 md:max-w-[55%]">
                            <span className="hidden md:block font-outfit text-carbon/50 text-xs tracking-[0.2em] uppercase">
                                Segurança · Condomínios · IoT
                            </span>
                            <div>
                                <Image
                                    src="/assets/images/logos/sigmaapp.png"
                                    alt="SigmaApp Logo"
                                    width={160}
                                    height={50}
                                    quality={100}
                                    className="h-9 w-auto object-contain object-left mb-3"
                                />
                                <p
                                    className="text-small font-outfit text-carbon/80 leading-relaxed mb-5"
                                >
                                    Aplicativo que revolucionou a gestão condominial
                                    em uma única solução.
                                </p>
                                <NavigationButton
                                    href="/cases/sigmaapp"
                                    text="Ver case"
                                    icon={<AltArrowRight weight="Bold" size={16} />}
                                    inverted={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt-12">
                    <NavigationButton href="/cases" text="Ver todos os cases" inverted={true} />
                </div>
            </div>
        </section>
    );
}

export default CasesHighlightsSection;
