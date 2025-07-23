import React from 'react';

// Exemplo de como usar a estrutura de largura total com conteúdo centralizado
function ExampleSection() {
    return (
        // A seção ocupa toda a largura e pode ter cor de fundo
        <section className="section-full-width bg-gray-100">
            {/* O container centraliza o conteúdo e limita a largura máxima */}
            <div className="section-container py-16">
                <h2 className="text-4xl font-bold text-center mb-8">Título da Seção</h2>
                <p className="text-lg text-center max-w-2xl mx-auto">
                    Este é um exemplo de como usar a estrutura de largura total.
                    A seção ocupa toda a largura da tela, mas o conteúdo fica
                    centralizado e limitado pela classe section-container.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4">Item 1</h3>
                        <p>Conteúdo do primeiro item</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4">Item 2</h3>
                        <p>Conteúdo do segundo item</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4">Item 3</h3>
                        <p>Conteúdo do terceiro item</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExampleSection; 