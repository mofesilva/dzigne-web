'use client';

import React, { useState, useEffect } from "react";
import BrandIcon from "./BrandIcon";

type Props = {
    phone?: string;
    message?: string;
};

export default function FloatingWhatsApp({
    phone = "+5519999094848",
    message = "Olá, gostaria de mais informações",
}: Props) {
    const encoded = encodeURIComponent(message);
    const href = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encoded}`;

    // Desktop: starts expanded, collapses on scroll
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 768px)');
        if (!mql.matches) return;

        const onScroll = () => {
            setExpanded(window.scrollY <= 50);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
            className="floating-wpp fixed right-6 bottom-6 z-40 flex items-center rounded-full text-white font-outfit font-semibold cursor-pointer transition-all duration-500 ease-in-out hover:brightness-110 active:scale-[0.97]"
        >
            {/* Icon */}
            <span className="flex items-center justify-center w-[52px] h-[52px] shrink-0">
                <BrandIcon name="whatsapp" size={24} className="invert" alt="WhatsApp" />
            </span>

            {/* Text — hidden on mobile, animated on desktop */}
            <span
                className={[
                    'hidden md:inline-block overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out leading-none pt-0.5',
                    expanded
                        ? 'max-w-[200px] opacity-100 pr-5'
                        : 'max-w-0 opacity-0 pr-0',
                ].join(' ')}
            >
                Entrar em contato
            </span>

            <style>{`
                .floating-wpp {
                    background: #25D366;
                    box-shadow:
                        0 4px 16px rgba(37, 211, 102, 0.35),
                        0 0 32px rgba(37, 211, 102, 0.15);
                }
                .floating-wpp:hover {
                    box-shadow:
                        0 6px 24px rgba(37, 211, 102, 0.5),
                        0 0 40px rgba(37, 211, 102, 0.25);
                }
            `}</style>
        </a>
    );
}
