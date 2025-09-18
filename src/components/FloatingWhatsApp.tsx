import React from "react";

type Props = {
    phone?: string; // in international format, e.g. +5511999999999
    message?: string;
};

export default function FloatingWhatsApp({
    phone = "+5519999094848",
    message = "Olá, gostaria de mais informações",
}: Props) {
    const encoded = encodeURIComponent(message);
    const href = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encoded}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
            className="fixed right-6 bottom-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-3 rounded-full shadow-lg ring-2 ring-green-400/30 transition-colors duration-150"
        >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                {/* Font Awesome WhatsApp icon (uses local fontawesome css) */}
                <i className="fa-brands fa-whatsapp text-white text-lg" aria-hidden />
            </span>

            <span className="font-medium text-sm hidden sm:inline">Entrar em contato</span>
        </a>
    );
}
