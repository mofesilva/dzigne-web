import React from 'react';
import NavigationButton from './NavigationButton';
import Image from 'next/image';

function HeroSection() {
    return (
        <>
            <section className='flex justify-between items-start py-10 h-auto'>
                <div className="">
                    <i className="fa-solid fa-code pb-4 text-4xl text-green-accent"></i>
                    <h1 className='text-5xl/6 font-rajdhani font-bold pb-2 pt-4'>DO CONCEITO</h1>
                    <h2 className='text-5xl font-rajdhani font-bold text-green-accent pb-2'>AO LANÇAMENTO</h2>
                    <p className='text-2xl/6 font-league-spartan font-regular pb-4'>Criamos o software ideal<br />para o seu negócio!</p>
                    <NavigationButton href={'/cases'} text={'Cases'} icon={'fa-solid fa-chevron-right'} />
                    <div className="flex flex-row gap-2 pt-4">
                        <a
                            href="https://www.instagram.com/dzign.e/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="hero__brands fa-brands fa-instagram text-eggshell text-2xl hover:text-green-accent-light transition-colors duration-300"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/dzigne/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="hero__brands fa-brands fa-linkedin-in text-eggshell text-2xl hover:text-green-accent-light transition-colors duration-300"></i>
                        </a>
                    </div></div>
                <div className="drop-shadow-[0_0_50px_rgba(127,209,12,0.3)]">
                    <Image src='/assets/images/mockups/iCalvinus_mockup_4.png' alt="Hero Image" width={600} height={600} />
                </div>
            </section>
        </>
    );
}

export default HeroSection;