import React from 'react';
import FooterContactSection from './FooterContactSection';
import FooterAddressSection from './FooterAddressSection';


function Footer() {
    return (
        <footer className="footer-section text-foreground">
            <div className="section-container align-center place-content-center content-center items-center justify-center">
                <div className="flex">
                    <div className="flex gap-4">
                        <FooterContactSection />
                        <div className="w-0.5 h-[200] bg-carbon self-center">
                            <span className="divider" id="logo__divider"></span>
                        </div>
                        <FooterAddressSection />
                        <div className="">
                            <span className="divider"></span>
                        </div>
                        <div className="footer__nav">
                            <h1 className="footer__nav__title">A DZIGN-E</h1>
                            <ul className="footer__menu">
                                <li className="footer__menu__item">
                                    <a href="/" className="footer__menu__link">
                                        Contato
                                    </a>
                                </li>
                                <li className="nfooter__menu__item">
                                    <a href="/about-us/about-us.html" className="footer__menu__link">
                                        Inside Dzign-e
                                    </a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="/cases/cases.html" className="footer__menu__link">
                                        Cases
                                    </a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="/" className="footer__menu__link">
                                        Plataformas
                                    </a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="/" className="footer__menu__link">
                                        Políticas de privacidade
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="signing self-center">
                    <p className='font-rajdhani text-center text-carbon font-medium'>Made with <i className="fa-regular fa-beat fa-heart"></i> by Dzign-e Sistemas e Tecnolgia LTDA
                        16.950.862/0001-15 - Todas as imagens pertencem a Freepik
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;