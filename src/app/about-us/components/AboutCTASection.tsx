import React from 'react';
import NavigationButton from '@/components/NavigationButton';

function AboutCTASection() {
    return (
        <section className="bg-black w-full py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-caption font-outfit text-eggshell/60 mb-4 tracking-widest uppercase">
                        Próximo capítulo
                    </p>
                    <h1 className="font-rajdhani text-eggshell mb-6">
                        <span className="font-medium">Vamos construir algo </span>
                        <br />
                        <span className="font-bold text-green-accent">extraordinário juntos?</span>
                    </h1>
                    <p className="font-outfit text-eggshell/65 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Se você quer um parceiro que trata o seu projeto como se fosse dele
                        — a conversa começa aqui.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <NavigationButton
                            href="https://wa.me/5511999999999?text=Olá! Gostaria de conversar sobre um projeto."
                            text="Fale Conosco"
                        />
                        <NavigationButton
                            href="/cases"
                            text="Ver nossos Cases"
                            inverted
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCTASection;
