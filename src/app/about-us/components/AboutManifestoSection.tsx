import React from 'react';

function AboutManifestoSection() {
    return (
        <section className="bg-black w-full py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
                    {/* Left — Bold manifesto statement */}
                    <div className="lg:col-span-3">
                        <p className="text-caption font-outfit text-eggshell/60 mb-6 tracking-widest uppercase">
                            Quem somos
                        </p>
                        <h2 className="font-rajdhani font-bold text-eggshell leading-tight">
                            Nascemos da obsessão por criar{' '}
                            <span className="text-green-accent">software que importa</span>.
                            {' '}Cada projeto que tocamos carrega nossa assinatura:{' '}
                            <span className="text-green-accent">design intencional</span>,
                            {' '}engenharia precisa e um compromisso inabalável com{' '}
                            <span className="text-green-accent">resultados reais</span>.
                        </h2>
                    </div>

                    {/* Right — Philosophy, border-t pattern (like StatItem) */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="border-t border-eggshell/[0.1] pt-6">
                            <h5 className="font-rajdhani font-bold text-eggshell mb-3">
                                Fundação & Propósito
                            </h5>
                            <p className="font-outfit text-eggshell/50 leading-relaxed">
                                Nascemos da união entre desenvolvedores e designers que
                                acreditam que tecnologia sem propósito é apenas código. Cada
                                solução que entregamos existe para gerar impacto mensurável.
                            </p>
                        </div>

                        <div className="border-t border-eggshell/[0.1] pt-6">
                            <h5 className="font-rajdhani font-bold text-eggshell mb-3">
                                Nossa Abordagem
                            </h5>
                            <p className="font-outfit text-eggshell/50 leading-relaxed">
                                Combinamos a agilidade de uma startup com o rigor técnico das
                                grandes consultorias. Do descobrimento ao deploy, cada etapa é
                                guiada por dados e executada com excelência.
                            </p>
                        </div>

                        <div className="border-t border-eggshell/[0.1] pt-6">
                            <h5 className="font-rajdhani font-bold text-eggshell mb-3">
                                O Diferencial
                            </h5>
                            <p className="font-outfit text-eggshell/50 leading-relaxed">
                                Não somos uma fábrica de software. Somos parceiros estratégicos
                                que entendem o seu negócio antes de escrever a primeira linha de
                                código — e continuamos ao seu lado depois do lançamento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Anchor phrase */}
                <div className="mt-16 lg:mt-24 text-center">
                    <h3 className="font-rajdhani font-bold text-green-accent">
                        Design com propósito. Código com alma.
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default AboutManifestoSection;
