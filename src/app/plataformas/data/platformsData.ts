/**
 * Centralized platform data.
 *
 * Currently a local file — designed to be swapped for a Cappuccino Cloud
 * Database fetch once the Dzign-e CMS is ready.
 */

export interface PlatformData {
    slug: string;

    metadata: {
        title: string;
        description: string;
    };

    // Short label used in prev/next navigation cards
    navigationLabel: {
        company: string;
        title: string;
    };

    // PlatformHeroSection props
    hero: {
        logo: string;
        company: string;
        title?: string;
        description: string;
        tags: string[];
        mockup?: string;
        invertLogo?: boolean;
    };

    // PlatformDetailsSection props
    details: {
        duration: string;
        team: string;
        technologies: string[];
        challenge: string;
        solution: string;
        results?: string[];
    };

    // PlatformGallerySection props
    gallery: {
        title: string;
        description: string;
        imagesFolder: string;
    };

    // PlatformsListSection / PlatformCard props
    listing: {
        logo: string;
        company: string;
        description: string;
        mockup: string;
        tags: string[];
        invertLogo?: boolean;
    };
}

export const platformsData: PlatformData[] = [
    // ── Cappuccino Cloud Database ──
    {
        slug: 'cappuccino-cloud-database',
        navigationLabel: { company: 'Cappuccino', title: 'Cloud Database' },
        metadata: {
            title: 'Cappuccino Cloud Database - Banco de Dados em Nuvem | Dzign-e',
            description: 'Conheça o Cappuccino Cloud Database, a plataforma de banco de dados em nuvem desenvolvida pela Dzign-e para simplificar o armazenamento e a gestão de dados.',
        },
        hero: {
            logo: '/assets/images/logos/cappuccino-logo.png',
            company: 'Dzign-e',
            title: 'Cappuccino Cloud Database',
            description: 'Uma plataforma de banco de dados em nuvem projetada para simplificar o armazenamento, a consulta e a gestão de dados em tempo real, com escalabilidade automática e integração nativa com aplicações web e mobile.',
            tags: ['Cloud', 'Database', 'BaaS', 'Real-time', 'Serverless'],
            mockup: '/assets/images/mockups/cappuccino_mockup.png',
            invertLogo: true,
        },
        details: {
            duration: 'Em contínuo desenvolvimento',
            team: '4 desenvolvedores',
            technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'AWS'],
            challenge: 'Desenvolvedores independentes e pequenas equipes frequentemente enfrentam barreiras complexas ao configurar e manter infraestrutura de banco de dados em nuvem.\nFerramentas existentes exigem conhecimento avançado de DevOps, configurações manuais extensas e custos imprevisíveis.\nEra necessário criar uma solução que democratizasse o acesso a um banco de dados em nuvem robusto, com setup instantâneo e curva de aprendizado mínima.',
            solution: 'O Cappuccino Cloud Database oferece uma experiência plug-and-play: o desenvolvedor cria um projeto, obtém suas credenciais e já pode armazenar e consultar dados em tempo real.\nA plataforma inclui SDK próprio, painel de administração intuitivo, regras de segurança declarativas e escalabilidade automática.\nCom APIs RESTful e suporte a WebSockets, a integração com qualquer stack tecnológica é imediata.',
            results: [
                'Setup de projeto em menos de 2 minutos',
                'SDK disponível para JavaScript, Flutter e Python',
                'Latência média de consulta abaixo de 50ms',
                'Escalabilidade automática sem configuração manual',
                'Painel de administração com analytics em tempo real',
                'Redução de 80% no tempo de configuração de backend',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a interface e funcionalidades do Cappuccino Cloud Database.',
            imagesFolder: '/assets/images/mockups/platforms/cappuccino',
        },
        listing: {
            logo: '/assets/images/logos/cappuccino-logo.png',
            company: 'Cappuccino Cloud Database',
            description: 'Banco de dados em nuvem com setup instantâneo, escalabilidade automática e SDK próprio. Simplifique seu backend e foque no que importa: o seu produto.',
            mockup: '/assets/images/mockups/cappuccino_mockup.png',
            tags: ['Cloud', 'Database', 'BaaS'],
            invertLogo: true,
        },
    },

    // ── Boomerang ──
    {
        slug: 'boomerang',
        navigationLabel: { company: 'Boomerang', title: 'Feedback & Engagement' },
        metadata: {
            title: 'Boomerang - Plataforma de Feedback e Engajamento | Dzign-e',
            description: 'Conheça o Boomerang, a plataforma da Dzign-e para coleta de feedback, NPS e engajamento de usuários em tempo real.',
        },
        hero: {
            logo: '/assets/images/logos/boomerang-logo.png',
            company: 'Dzign-e',
            title: 'Boomerang',
            description: 'Plataforma inteligente de coleta de feedback e engajamento que permite empresas compreenderem seus clientes em profundidade, com pesquisas automatizadas, análise de sentimento e dashboards interativos.',
            tags: ['Feedback', 'NPS', 'Engajamento', 'Analytics', 'Automação'],
            mockup: '/assets/images/mockups/boomerang_mockup.png',
            invertLogo: true,
        },
        details: {
            duration: 'Em contínuo desenvolvimento',
            team: '3 desenvolvedores',
            technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
            challenge: 'Empresas de todos os portes lutam para obter feedback significativo dos seus clientes de forma consistente.\nFerramentas tradicionais de pesquisa são genéricas, com baixas taxas de resposta e dados que raramente se traduzem em ações concretas.\nHavia a necessidade de uma plataforma que não apenas coletasse feedback, mas transformasse essas informações em insights acionáveis automaticamente.',
            solution: 'O Boomerang automatiza todo o ciclo de feedback: desde o disparo inteligente de pesquisas no momento certo até a análise de sentimento com IA.\nA plataforma oferece widgets embeddáveis, integração com canais como email e WhatsApp, segmentação avançada de público e dashboards que priorizam métricas de impacto.\nCom alertas em tempo real, equipes podem agir imediatamente sobre feedback crítico.',
            results: [
                'Taxa de resposta 3x maior que ferramentas tradicionais',
                'Análise de sentimento automatizada com IA',
                'Widgets personalizáveis e embeddáveis',
                'Integração nativa com WhatsApp e Email',
                'Dashboards interativos com métricas de NPS e CSAT',
                'Alertas em tempo real para feedback crítico',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a interface e funcionalidades do Boomerang.',
            imagesFolder: '/assets/images/mockups/platforms/boomerang',
        },
        listing: {
            logo: '/assets/images/logos/boomerang-logo.png',
            company: 'Boomerang',
            description: 'Plataforma inteligente de feedback e engajamento com pesquisas automatizadas, análise de sentimento por IA e dashboards interativos para transformar opiniões em ações.',
            mockup: '/assets/images/mockups/boomerang_mockup.png',
            tags: ['Feedback', 'NPS', 'Engajamento'],
            invertLogo: true,
        },
    },

    // ── Kart Collector ──
    {
        slug: 'kart-collector',
        navigationLabel: { company: 'Kart Collector', title: 'Gestão de Colecionáveis' },
        metadata: {
            title: 'Kart Collector - Plataforma de Gestão de Colecionáveis | Dzign-e',
            description: 'Conheça o Kart Collector, a plataforma da Dzign-e para colecionadores organizarem, avaliarem e negociarem suas coleções.',
        },
        hero: {
            logo: '/assets/images/logos/kartcollector-logo.png',
            company: 'Dzign-e',
            title: 'Kart Collector',
            description: 'A plataforma definitiva para colecionadores. Organize, catalogue, avalie e negocie itens da sua coleção com ferramentas inteligentes de precificação, comunidade integrada e marketplace seguro.',
            tags: ['Colecionáveis', 'Marketplace', 'Comunidade', 'Mobile App', 'Catálogo'],
            mockup: '/assets/images/mockups/kartcollector_mockup.png',
        },
        details: {
            duration: 'Em contínuo desenvolvimento',
            team: '5 desenvolvedores',
            technologies: ['Flutter', 'Node.js', 'Firebase', 'TypeScript', 'PostgreSQL', 'AWS'],
            challenge: 'Colecionadores de diferentes nichos — cards, miniaturas, selos, moedas — não possuíam uma ferramenta unificada para gerenciar suas coleções de forma profissional.\nPlanilhas e fotos desorganizadas resultavam em perda de controle sobre o inventário e seu valor real.\nAlém disso, faltava um espaço seguro e confiável para negociar itens entre colecionadores.',
            solution: 'O Kart Collector permite catalogar cada item com fotos, detalhes e avaliação de mercado automatizada.\nO aplicativo inclui scanner de código de barras para identificação rápida, estimativa de preço baseada em dados de mercado, e um marketplace integrado com sistema de reputação.\nA comunidade permite que colecionadores compartilhem suas coleções, troquem dicas e participem de eventos.',
            results: [
                'Catalogação de itens com scanner automático',
                'Estimativa de preço baseada em dados de mercado',
                'Marketplace seguro com sistema de reputação',
                'Comunidade ativa de colecionadores',
                'Suporte a múltiplas categorias de colecionáveis',
                'Relatórios de valor total da coleção em tempo real',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a interface e funcionalidades do Kart Collector.',
            imagesFolder: '/assets/images/mockups/platforms/kart-collector',
        },
        listing: {
            logo: '/assets/images/logos/kartcollector-logo.png',
            company: 'Kart Collector',
            description: 'A plataforma definitiva para colecionadores organizarem, catalogarem e negociarem itens com precificação inteligente, scanner automático e marketplace integrado.',
            mockup: '/assets/images/mockups/kartcollector_mockup.png',
            tags: ['Colecionáveis', 'Marketplace', 'Comunidade'],
        },
    },

    // ── Kangaroo ──
    {
        slug: 'kangaroo',
        navigationLabel: { company: 'Kangaroo', title: 'Gestão de Entregas' },
        metadata: {
            title: 'Kangaroo - Plataforma de Gestão de Entregas | Dzign-e',
            description: 'Conheça o Kangaroo, a plataforma da Dzign-e para gestão inteligente de entregas e logística last-mile.',
        },
        hero: {
            logo: '/assets/images/logos/kangaroo-logo.png',
            company: 'Dzign-e',
            title: 'Kangaroo',
            description: 'Plataforma de gestão inteligente de entregas e logística last-mile. Otimize rotas, acompanhe entregas em tempo real e ofereça uma experiência de rastreamento transparente para seus clientes.',
            tags: ['Logística', 'Entregas', 'Rastreamento', 'Mobile App', 'Otimização'],
            mockup: '/assets/images/mockups/kangaroo_mockup.png',
        },
        details: {
            duration: 'Em contínuo desenvolvimento',
            team: '4 desenvolvedores',
            technologies: ['Flutter', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
            challenge: 'Pequenas e médias empresas que realizam entregas próprias enfrentam enormes desafios logísticos sem ferramentas acessíveis.\nRotas ineficientes, falta de rastreamento em tempo real e comunicação falha com clientes resultam em custos elevados e insatisfação.\nEra necessária uma plataforma que simplificasse toda a operação de entrega, do despacho ao comprovante.',
            solution: 'O Kangaroo oferece um ecossistema completo: um painel web para gestores despacharem e monitorarem entregas, um app mobile para entregadores com navegação otimizada e um portal de rastreamento para clientes finais.\nO algoritmo de otimização de rotas reduz custos com combustível e tempo de entrega, enquanto notificações automáticas mantêm todos informados em cada etapa.',
            results: [
                'Redução de 35% nos custos de entrega com otimização de rotas',
                'Rastreamento em tempo real para clientes e gestores',
                'Comprovante de entrega digital com foto e assinatura',
                'Notificações automáticas em cada etapa da entrega',
                'Painel de gestão com analytics de performance',
                'App mobile com navegação otimizada para entregadores',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a interface e funcionalidades do Kangaroo.',
            imagesFolder: '/assets/images/mockups/platforms/kangaroo',
        },
        listing: {
            logo: '/assets/images/logos/kangaroo-logo.png',
            company: 'Kangaroo',
            description: 'Gestão inteligente de entregas com otimização de rotas, rastreamento em tempo real e comprovante digital. Simplifique sua logística last-mile.',
            mockup: '/assets/images/mockups/kangaroo_mockup.png',
            tags: ['Logística', 'Entregas', 'Rastreamento'],
        },
    },
];

/* ─── Helpers ─── */

export function getPlatformBySlug(slug: string): PlatformData | undefined {
    return platformsData.find((p) => p.slug === slug);
}

export function getAdjacentPlatforms(slug: string) {
    const index = platformsData.findIndex((p) => p.slug === slug);
    if (index === -1) return { previous: undefined, next: undefined };

    const prev = platformsData[index - 1];
    const next = platformsData[index + 1];

    return {
        previous: prev
            ? {
                href: `/plataformas/${prev.slug}`,
                company: prev.navigationLabel.company,
                title: prev.navigationLabel.title,
                mockup: prev.listing.mockup,
            }
            : undefined,
        next: next
            ? {
                href: `/plataformas/${next.slug}`,
                company: next.navigationLabel.company,
                title: next.navigationLabel.title,
                mockup: next.listing.mockup,
            }
            : undefined,
    };
}

export function getAllPlatforms() {
    return platformsData;
}

export function getAllSlugs() {
    return platformsData.map((p) => p.slug);
}
