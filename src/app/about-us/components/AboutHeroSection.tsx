import React from 'react';
import Divider from '@/components/Divider';

function AboutHeroSection() {
    return (
        <section className="bg-black w-full min-h-[60vh] flex items-end relative overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-36 pb-20 md:pb-28 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <h6 className="font-outfit text-green-accent font-semibold tracking-[0.25em] uppercase mb-6">
                        Sobre nós
                    </h6>

                    <h1 className="font-rajdhani text-eggshell mb-6">
                        <span className="font-medium">Mais do que código.</span>
                        <br />
                        <span className="font-bold text-green-accent">Criamos experiências.</span>
                    </h1>

                    <p className="font-outfit text-eggshell/50 max-w-2xl mx-auto leading-relaxed mb-10">
                        Uma software house brasileira movida pelo design intencional e engenharia de
                        excelência — transformando visões em produtos digitais que impactam negócios reais.
                    </p>

                    <div className="flex justify-center">
                        <Divider width="60" color="green-accent" height="3px" horizontal />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHeroSection;
