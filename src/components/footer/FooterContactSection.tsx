'use client'
import React from 'react';
import Image from 'next/image';

function FooterContactSection() {
    return (
        <>
            <section className="flex flex-col items-center md:items-end justify-start h-auto pt-10 pb-0 px-10 md:py-10 md:pr-0 md:pl-0 text-center md:text-right">
                <Image src='/assets/dzigne-logotype-black.png'
                    alt="Logotipo Dzign-e"
                    width={100}
                    height={100}
                    className="h-auto w-30 pb-4" />
                <div className="flex items-center justify-center md:justify-start pb-4 gap-2">
                    <a href="https://www.instagram.com/dzign.e/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram text-carbon text-xl 2xl:text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/dzigne/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in text-carbon text-xl 2xl:text-2xl"></i>
                    </a>
                    <a href="mailto:contato@dzign-e.com.br"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope text-carbon text-xl 2xl:text-2xl"></i>
                    </a>
                    <a href="https://wa.me/5519999094848"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp text-carbon text-xl 2xl:text-2xl"></i>
                    </a>
                </div>
                <div className="pb-4 flex flex-col items-center md:items-end gap-1">
                    <div className="flex items-center justify-center md:justify-start w-full">
                        <a href="mailto:contato@dzign-e.com.br" className="font-league-spartan text-lg 2xl:text-xl text-carbon">
                            contato@dzign-e.com.br
                        </a>
                    </div>
                    <div className="flex items-center gap-1">
                        <a
                            href="https://wa.me/5519999094848"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-league-spartan text-lg 2xl:text-xl text-carbon"
                        >
                            (19) 99909-4848
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterContactSection;