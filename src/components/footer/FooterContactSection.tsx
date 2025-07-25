'use client'
import React from 'react';
import Image from 'next/image';

function FooterContactSection() {
    return (
        <>
            <section className="flex flex-col items-start justify-start h-auto p-10 pl-0">
                <Image src='/assets/dzigne-logotype-black.png'
                    alt="Logotipo Dzign-e"
                    width={100}
                    height={100}
                    className="h-auto w-30 pb-4" />
                <div className="pl-0 items-start text-start justify-start pb-4">
                    <a href="https://www.instagram.com/dzign.e/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram text-carbon text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/dzigne/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in text-carbon text-2xl"></i>
                    </a>
                </div>
                <div className="pb-4">
                    <div className="flex items-center gap-1">
                        <i className="fa-solid fa-at text-carbon text-xl"></i>
                        <a href="mailto:contato@dzign-e.com.br" className="font-league-spartan text-xl text-carbon">
                            contato@dzign-e.com.br
                        </a>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <i className="fa-brands fa-whatsapp text-carbon text-xl font-bold"></i>
                        <a
                            href="https://wa.me/5519999094848"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-league-spartan text-xl text-carbon"
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