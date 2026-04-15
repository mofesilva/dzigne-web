import React from 'react';
import Image from 'next/image';

import NavigationButton from '../../components/NavigationButton';
import { AltArrowRight } from '@solar-icons/react/ssr';
import TagLine from '@/components/TagLine';
import { cdnUrl } from '@/lib/cdn';

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
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4"
                    style={{ gridAutoRows: 'minmax(280px, auto)' }}
                >
                    {/* ═══ iCalvinus — Featured (2col × 2row) ═══ */}
                    <div
                        className="relative overflow-clip rounded-tl-4xl rounded-bl-4xl border-2 border-neutral-300 md:col-span-2 xl:row-span-2 md:min-h-[280px] bg-neutral-200 flex flex-col md:block"
                    >
                        <TagLine text="Gestão · Organização Religiosa · Documentos" variant="light" className="block md:hidden px-7 pt-7" noWrap />
                        <div className="relative md:absolute md:inset-0 md:overflow-clip pointer-events-none">
                            <Image
                                src={cdnUrl('/mockups/iCalvinus_mockup_2.png')}
                                alt=""
                                width={600}
                                height={500}
                                quality={90}
                                className="relative md:absolute w-[75%] mx-auto md:mx-0 md:w-[50%] lg:w-[48%] h-auto md:top-1/2 md:-translate-y-1/2 md:right-4 lg:right-8 object-contain pt-6 md:pt-0"
                                aria-hidden
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-1 md:h-full p-7 lg:p-10 relative z-10">
                            <TagLine text="Gestão · Organização Religiosa · Documentos" variant="light" className="hidden md:block" noWrap />
                            <div className="max-w-sm">
                                <Image
                                    src={cdnUrl('/clients/icalvinus-h.png')}
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
                        className="relative overflow-clip rounded-bl-4xl md:rounded-bl-none md:rounded-tr-4xl xl:rounded-tr-4xl border-2 border-neutral-300 xl:min-h-[280px] bg-neutral-200 flex flex-col xl:block"
                    >
                        <TagLine text="Gestão · Organização Religiosa" variant="light" className="px-7 pt-7 xl:hidden" noWrap />
                        <Image
                            src={cdnUrl('/mockups/ipiconecta_desktop_mockup_1.png')}
                            alt=""
                            width={400}
                            height={300}
                            quality={90}
                            className="relative xl:absolute pointer-events-none w-[55%] md:w-[50%] mx-auto xl:mx-0 xl:w-72 h-auto xl:top-1/2 xl:-translate-y-1/2 xl:right-4 object-contain pt-4 xl:pt-0"
                            aria-hidden
                        />
                        <div className="flex flex-col justify-between flex-1 xl:h-full p-7 lg:p-9 relative z-10 xl:max-w-[55%]">
                            <TagLine text="Gestão · Organização Religiosa" variant="light" className="hidden xl:block" noWrap />
                            <div>
                                <Image
                                    src={cdnUrl('/clients/ipiconecta-h4.png')}
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
                        className="relative overflow-clip rounded-br-4xl border-2 border-neutral-300 xl:min-h-[280px] bg-neutral-200 flex flex-col xl:block"
                    >
                        <TagLine text="Segurança · Condomínios · IoT" variant="light" className="px-7 pt-7 xl:hidden" noWrap />
                        <Image
                            src={cdnUrl('/mockups/sigmaapp-mockup-1.png')}
                            alt=""
                            width={400}
                            height={300}
                            quality={90}
                            className="relative xl:absolute pointer-events-none w-[55%] md:w-[50%] mx-auto xl:mx-0 xl:w-72 h-auto xl:top-1/2 xl:-translate-y-1/2 xl:right-4 object-contain pt-4 xl:pt-0"
                            aria-hidden
                        />
                        <div className="flex flex-col justify-between flex-1 xl:h-full p-7 lg:p-9 relative z-10 xl:max-w-[55%]">
                            <TagLine text="Segurança · Condomínios · IoT" variant="light" className="hidden xl:block" noWrap />
                            <div>
                                <Image
                                    src={cdnUrl('/clients/sigmaapp.png')}
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
