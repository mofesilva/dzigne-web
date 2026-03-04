import React from 'react';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import BrandIcon from '@/components/BrandIcon';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">

                {/* ── Top section ── */}
                <div className="pt-14 lg:pt-20 pb-14 lg:pb-16">
                    <div className="flex flex-col lg:flex-row gap-12 justify-between">

                        {/* Left — Logo + Contact */}
                        <div style={{ flexShrink: 0, maxWidth: 280 }}>
                            <LazyImage
                                src="/assets/dzigne-logotype-black.png"
                                alt="Dzign-e"
                                width={120}
                                height={40}
                                className="w-24 h-auto mb-6"
                            />
                            <a href="mailto:contato@dzign-e.com.br" className="block font-outfit text-sm transition-colors mb-1" style={{ color: 'rgba(23,23,23,0.55)' }}>
                                contato@dzign-e.com.br
                            </a>
                            <a href="tel:+5519999094848" className="block font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>
                                +55 (19) 99909-4848
                            </a>
                        </div>

                        {/* Right — Nav columns */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '2rem' }}>
                            <div>
                                <p className="font-rajdhani font-bold text-xs uppercase mb-4" style={{ color: '#171717', letterSpacing: '0.15em' }}>Navegação</p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <li><Link href="/" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Home</Link></li>
                                    <li><Link href="/about-us" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Sobre nós</Link></li>
                                    <li><Link href="/cases" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Cases</Link></li>
                                    <li><Link href="/services" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Serviços</Link></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-rajdhani font-bold text-xs uppercase mb-4" style={{ color: '#171717', letterSpacing: '0.15em' }}>Soluções</p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <li><Link href="/plataformas" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Plataformas</Link></li>
                                    <li><a href="https://wa.me/5519999094848" target="_blank" rel="noopener noreferrer" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Fale conosco</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-rajdhani font-bold text-xs uppercase mb-4" style={{ color: '#171717', letterSpacing: '0.15em' }}>Legal</p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <li><Link href="/politicas-de-privacidade" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Privacidade</Link></li>
                                    <li><Link href="/politicas-de-privacidade" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Termos</Link></li>
                                    <li><Link href="/politicas-de-privacidade" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Cookies</Link></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-rajdhani font-bold text-xs uppercase mb-4" style={{ color: '#171717', letterSpacing: '0.15em' }}>Redes</p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <li><a href="https://www.instagram.com/dzign.e/" target="_blank" rel="noopener noreferrer" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/company/dzigne/" target="_blank" rel="noopener noreferrer" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>LinkedIn</a></li>
                                    <li><a href="https://wa.me/5519999094848" target="_blank" rel="noopener noreferrer" className="font-outfit text-sm transition-colors" style={{ color: 'rgba(23,23,23,0.55)' }}>WhatsApp</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Giant Brand Name ── */}
                <div style={{ overflow: 'hidden', userSelect: 'none', pointerEvents: 'none' }} aria-hidden="true">
                    <p
                        className="font-rajdhani font-black whitespace-nowrap"
                        style={{
                            fontSize: '16vw',
                            lineHeight: 0.85,
                            letterSpacing: '-0.03em',
                            color: 'rgba(23, 23, 23, 0.06)',
                        }}
                    >
                        DZIGN-E
                    </p>
                </div>

                {/* ── Bottom bar ── */}
                <div style={{ borderTop: '1px solid rgba(23,23,23,0.1)', padding: '1.25rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="font-rajdhani font-bold text-xs uppercase" style={{ color: 'rgba(23,23,23,0.4)', letterSpacing: '0.1em' }}>Siga-nos</span>
                        <a href="https://www.instagram.com/dzign.e/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.4 }}>
                            <BrandIcon name="instagram" size={16} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/dzigne/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.4 }}>
                            <BrandIcon name="linkedin" size={16} alt="LinkedIn" />
                        </a>
                        <a href="https://wa.me/5519999094848" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.4 }}>
                            <BrandIcon name="whatsapp" size={16} alt="WhatsApp" />
                        </a>
                    </div>
                    <p className="font-outfit text-xs" style={{ color: 'rgba(23,23,23,0.35)' }}>
                        © 2026 Dzign-e Sistemas e Tecnologia LTDA
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;