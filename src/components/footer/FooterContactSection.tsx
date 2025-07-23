'use client'
import React from 'react';
import Image from 'next/image';
import dzigneLogoBlack from '../../assets/dzigne-logotype-black.png';

function FooterContactSection() {
    return (
        <section className="flex flex-col items-start justify-start h-auto p-10">
            <Image src={dzigneLogoBlack}
                alt="Logotipo Dzign-e"
                className="h-auto w-30 pb-2" />
            <div className="items-start text-start justify-start">
                <a href="https://www.instagram.com/dzign.e/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram text-carbon text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/dzigne/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-carbon text-3xl"></i>
                </a>
            </div>
            <div className="contato__footer">
                <div className="contato__item">

                    <a href="mailto:contato@dzign-e.com.br" className="contato__to">
                        contato@dzign-e.com.br
                    </a>
                </div>
                <div className="contato__item">

                    <a
                        href="https://wa.me/5519999094848"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato__to"
                    >
                        (19) 99909-4848
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FooterContactSection;