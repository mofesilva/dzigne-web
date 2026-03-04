import React from "react";
import BrandIcon from "./BrandIcon";

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
                <BrandIcon name="whatsapp" size={20} className="invert" alt="WhatsApp" />
            </span>

            <h6 className="font-outfit pr-3 pb-0.5">Entrar em contato</h6>
        </a>
    );
}
