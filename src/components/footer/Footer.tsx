import React from 'react';
import Image from 'next/image';
import LazyImage from '@/components/LazyImage';
import { Plain2, Phone } from '@solar-icons/react/ssr';

const socialLinks = [
    { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dzign.e/' },
    { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/dzigne/' },
    { name: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/5519999094848' },
] as const;

function Footer() {
    return (
        <footer className="footer-section text-onyx">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-12">

                {/* 3-column grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr_1fr] 2xl:grid-cols-[5fr_1.3fr_1fr] gap-10 lg:gap-16">

                    {/* Col 1 - Logo + Bio */}
                    <div>
                        <LazyImage
                            src="/assets/dzigne-logotype-black.png"
                            alt="Dzign-e"
                            width={200}
                            height={66}
                            className="w-36 md:w-40 h-auto mb-6"
                        />
                        <h5 className="text-onyx/55 font-rajdhani font-medium max-w-lg leading-relaxed">
                            Transformando visão em realidade digital sob medida.
                            Soluções tecnológicas personalizadas para impulsionar
                            o seu negócio.
                        </h5>
                    </div>

                    {/* Col 2 - Contato */}
                    <div>
                        <h4 className="font-rajdhani font-bold uppercase tracking-[0.15em] mb-2">
                            Contato
                        </h4>
                        <address className="not-italic flex flex-col gap-3">
                            <h6 className='font-outfit flex items-center gap-2'>
                                <Plain2 weight="Bold" size={18} className="text-onyx/50 flex-shrink-0" />
                                <a href="mailto:contato@dzign-e.com.br" className="text-onyx/65 hover:text-onyx transition-colors">
                                    contato@dzign-e.com.br
                                </a>
                            </h6>
                            {/* <h6 className="font-outfit text-onyx/65">
                                Campinas | Belo Horizonte | Legnano
                            </h6> */}
                            <h6 className='font-outfit flex items-center gap-2'>
                                <Phone weight="Bold" size={18} className="text-onyx/50 flex-shrink-0" />
                                <a href="tel:+5519999094848" className="text-onyx/65 hover:text-onyx transition-colors">
                                    +55 (19) 99909-4848
                                </a>
                            </h6>
                        </address>
                    </div>

                    {/* Col 3 - Redes sociais */}
                    <div>
                        <h4 className="font-rajdhani font-bold uppercase tracking-[0.15em] mb-0.5">
                            SOCIAL MEDIA
                        </h4>
                        <p className="text-onyx/55 mb-6">
                            Nos siga para acompanhar nossos projetos, novidades e insights sobre tecnologia e design.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ name, label, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-onyx/10 hover:bg-onyx/20 transition-colors"
                                >
                                    <Image
                                        src={`/assets/icons/brands/${name}.svg`}
                                        alt={label}
                                        width={22}
                                        height={22}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-onyx/10 mt-14 mb-6 md:mt-20 md:mb-8" />

                {/* Copyright */}
                <div className="flex justify-end">
                    <p className="text-onyx/35 font-bold">
                        &copy; 2026 Dzign-e Sistemas e Tecnologia LTDA. Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
