import React from 'react';
import LazyImage from '@/components/LazyImage';

function FooterContactSection() {
    return (
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
            <LazyImage
                src="/assets/dzigne-logotype-black.png"
                alt="Logotipo Dzign-e"
                width={180}
                height={180}
                className="h-auto w-36 mb-8"
            />

            {/* Tagline */}
            <h4
                className="font-rajdhani font-medium text-carbon max-w-md mb-6"
            >
                Transformando visão em{' '}
                <span className="font-bold">realidade digital</span>{' '}
                sob medida
            </h4>

            {/* Contact */}
            <div className="flex flex-col gap-2">
                <a
                    href="mailto:contato@dzign-e.com.br"
                    className="font-outfit text-carbon/60 hover:text-carbon transition-colors duration-200"
                >
                    contato@dzign-e.com.br
                </a>
                <a
                    href="https://wa.me/5519999094848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-outfit text-carbon/60 hover:text-carbon transition-colors duration-200"
                >
                    (19) 99909-4848
                </a>
            </div>
        </section>
    );
}

export default FooterContactSection;