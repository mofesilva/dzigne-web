import React from 'react';
import Link from 'next/link';

function FooterNavigationSection() {
    return (
        <>
            <div className="font-rajdhani text-lg font-semibold text-carbon self-center text-center md:text-left">
                <ul className="">
                    <li className="">
                        <Link href="/" className="footer__menu__link">
                            Contato
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/about-us" className="">
                            Inside Dzign-e
                        </Link>
                    </li>
                    <li className="">
                        <a href="/cases" className="">
                            Cases
                        </a>
                    </li>
                    <li className="">
                        <a href="/plataformas" className="">
                            Plataformas
                        </a>
                    </li>
                    <li className="">
                        <a href="/politicas-de-privacidade" className="">
                            Políticas de privacidade
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default FooterNavigationSection;