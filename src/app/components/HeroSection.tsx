import React from 'react';
import NavigationButton from '../../components/NavigationButton';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='flex flex-col items-center justify-center text-center w-full'>
            <div className="max-w-4xl mx-auto mb-16">
                <h1 className='text-5xl 2xl:text-6xl font-rajdhani font-bold text-eggshell mb-6 leading-tight'>
                    O parceiro<br />
                    <span className="text-green-accent">ideal para o seu</span><br />
                    Negócio
                </h1>

                <p className='text-lg 2xl:text-xl font-league-spartan text-eggshell mb-8 max-w-2xl mx-auto'>
                    Do conceito ao lançamento.<br />Criamos soluções digitais sob medida que transformam ideias em produtos extraordinários.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <NavigationButton
                        href={'/cases'}
                        text={'Ver nossos Cases'}
                    />
                    <NavigationButton
                        href={'/about-us'}
                        text={'Conheça a Dzign-e'}
                    />
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.instagram.com/dzign.e/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-eggshell hover:text-green-accent transition-colors duration-300"
                    >
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/dzigne/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-eggshell hover:text-green-accent transition-colors duration-300"
                    >
                        <i className="fa-brands fa-linkedin-in text-2xl"></i>
                    </a>
                </div>
            </div>

            {/* Mockup embaixo */}
            <div className="drop-shadow-[0_0_50px_rgba(127,209,12,0.3)] pb-20">
                <Image
                    src='/assets/images/mockups/iCalvinus_mockup_4.png'
                    alt="Hero Image"
                    width={600}
                    height={450}
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
}

export default HeroSection;