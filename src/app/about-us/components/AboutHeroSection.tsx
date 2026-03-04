import React from 'react';

function AboutHeroSection() {
    return (
        <section className="bg-black w-full min-h-[60vh] flex items-end relative overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-36 pb-20 md:pb-28 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <h6 className="font-outfit text-green-accent font-semibold tracking-[0.25em] uppercase mb-6">
                        Sobre nós
                    </h6>

                    <h1 className="font-rajdhani text-eggshell">
                        <span className="font-medium">
                            O digital que move negócios
                        </span>
                        <br />
                        <span className="font-bold text-green-accent">
                            nasce de quem entende pessoas.
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default AboutHeroSection;
