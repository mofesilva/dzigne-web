import React from 'react';

function PrivacyHeroSection() {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h1 className='text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6 leading-tight'>
                Políticas de <br />
                <span className="text-green-accent">Privacidade</span>
            </h1>

            <p className='text-lg font-league-spartan text-white/80 max-w-2xl mx-auto'>
                Conheça como tratamos e protegemos suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).
            </p>
        </div>
    );
}

export default PrivacyHeroSection;