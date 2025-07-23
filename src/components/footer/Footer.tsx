import React from 'react';
import FooterContactSection from './FooterContactSection';


function Footer() {
    return (
        <footer className="footer-section text-foreground">
            <div className="section-container">
                <div className="footer">
                    <div className="footer__container">
                        <div className="footer__content">
                            <FooterContactSection />
                            <div className="w-1 h-auto bg-foreground">
                                <span className="divider" id="logo__divider"></span>
                            </div>

                            <div className="address__footer__section">
                                <div className="footer__content--text">
                                    <h1>CAMPINAS</h1>
                                    <p>Av. Ântonio Artioli, 570, Lojas 07 e 08<br />
                                        Swiss Park - Campinas <br />
                                        São Paulo - Brasil</p>
                                </div>
                                <div className="footer__content--text">
                                    <h1>BELO HORIZONTE</h1>
                                    <p>Rua Professor Pimenta da Veiga, 78<br />
                                        Cidade Nova - Belo Horizonte <br />
                                        Minas Gerais - Brasil</p>
                                </div>
                                <div className="footer__content--text">
                                    <h1>LEGNANO</h1>
                                    <p>Av. Joaquim José Diniz, 78, 602<br />
                                        Cidade Nova - Legnano <br />
                                        Minas Gerais - Itália</p>
                                </div>
                            </div>
                            <div className="divider__container">
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
                    <div className="signing">
                        <p>Made with <i className="fa-regular fa-beat fa-heart"></i> by Dzign-e Sistemas e Tecnolgia LTDA
                            16.950.862/0001-15 - Todas as imagens pertencem a Freepik
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;