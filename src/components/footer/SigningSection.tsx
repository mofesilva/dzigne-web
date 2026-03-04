import React from 'react';
import BrandIcon from '@/components/BrandIcon';

function SigningSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 lg:py-10">
            <p
                className="font-outfit text-carbon/40 text-center md:text-left text-caption"
            >
                © 2026 Dzign-e · Todos os direitos reservados
            </p>

            <div className="flex items-center gap-6">
                <a
                    href="https://www.instagram.com/dzign.e/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-100 transition-opacity duration-200"
                >
                    <BrandIcon name="instagram" size={22} alt="Instagram" />
                </a>
                <a
                    href="https://www.linkedin.com/company/dzigne/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-100 transition-opacity duration-200"
                >
                    <BrandIcon name="linkedin" size={22} alt="LinkedIn" />
                </a>
                <a
                    href="https://wa.me/5519999094848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-100 transition-opacity duration-200"
                >
                    <BrandIcon name="whatsapp" size={22} alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default SigningSection;