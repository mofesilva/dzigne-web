import React from 'react';
import Link from 'next/link';

function HeroSection() {
    return (
        <section className='flex flex-col justify-center items-start py-10 h-auto'>
            <i className="fa-solid fa-code pb-4 text-4xl text-green-accent"></i>
            <h1 className='text-5xl/6 font-rajdhani font-bold pb-2 pt-4'>DO CONCEITO</h1>
            <h2 className='text-5xl font-rajdhani font-bold text-green-accent pb-2'>AO LANÇAMENTO</h2>
            <p className='text-2xl/6 font-league-spartan font-regular pb-4'>Criamos o software ideal<br />para o seu negócio!</p>
            <Link href="/cases" className="hero__button button">
                Cases <i className="fa-solid fa-chevron-right" id="hero__button__chevron"></i>
            </Link>
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
            </div>

        </section>
    );
}

export default HeroSection;