import React from 'react';
import Link from 'next/link';

const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'Sobre nós', href: '/about-us' },
    { label: 'Cases', href: '/cases' },
    { label: 'Serviços', href: '/services' },
    { label: 'Contato', href: '/#contato' },
];

const legalLinks = [
    { label: 'Termos de Serviço', href: '/politicas-de-privacidade' },
    { label: 'Políticas de Privacidade', href: '/politicas-de-privacidade' },
    { label: 'Política de Cookies', href: '/politicas-de-privacidade' },
];

function FooterNavigationSection() {
    return (
        <div className="flex gap-16 lg:gap-24 justify-center lg:justify-end pt-2">
            {/* Company */}
            <div>
                <p
                    className="font-rajdhani font-bold text-carbon mb-5 tracking-wide uppercase text-small"
                >
                    Empresa
                </p>
                <ul className="flex flex-col gap-4">
                    {companyLinks.map((link) => (
                        <li key={link.href + link.label}>
                            <Link
                                href={link.href}
                                className="font-outfit text-carbon hover:text-carbon/60 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Legal */}
            <div>
                <p
                    className="font-rajdhani font-bold text-carbon mb-5 tracking-wide uppercase text-small"
                >
                    Legal
                </p>
                <ul className="flex flex-col gap-4">
                    {legalLinks.map((link) => (
                        <li key={link.href + link.label}>
                            <Link
                                href={link.href}
                                className="font-outfit text-carbon hover:text-carbon/60 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FooterNavigationSection;