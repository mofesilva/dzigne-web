/**
 * Centralized case data.
 *
 * Currently a local file — designed to be swapped for a Cappuccino Cloud
 * Database fetch once the Dzign-e CMS is ready.
 */

export interface CaseData {
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

    // CaseHeroSection props
    hero: {
        logo: string;
        company: string;
        title?: string;
        description: string;
        tags: string[];
        mockup?: string;
        invertLogo?: boolean;
    };

    // CaseDetailsSection props
    details: {
        duration: string;
        team: string;
        technologies: string[];
        challenge: string;
        solution: string;
        results?: string[];
    };

    // CaseGallerySection props
    gallery: {
        title: string;
        description: string;
        imagesFolder: string;
    };

    // CasesListSection / CaseCard props
    listing: {
        logo: string;
        company: string;
        description: string;
        mockup: string;
        tags: string[];
        invertLogo?: boolean;
    };
}

export const casesData: CaseData[] = [
    // ── OAB Mack ──
    {
        slug: 'oab-mack',
        navigationLabel: { company: 'OAB Mack', title: 'Universidade Presbiteriana Mackenzie' },
        metadata: {
            title: 'Case OAB Mack - Plataforma para estudo de questões do Exame da OAB | Dzign-e',
            description: 'Como desenvolvemos uma solução digital completa que revolucionou a preparação dos estudantes de Direito para o exame da OAB',
        },
        hero: {
            logo: '/assets/images/logos/mackenzie2.png',
            company: 'Universidade Mackenzie',
            title: 'OAB Mack',
            description: 'Desenvolvemos uma solução digital completa que revolucionou a preparação dos estudantes de Direito para o exame da OAB, integrando simulados intuitivos com gestão dinâmica de conteúdo.',
            tags: ['Educação', 'Mobile App', 'Web Platform', 'Gameficado', 'Estudo'],
            mockup: '/assets/images/mockups/oabmack_mockup_2.png',
            invertLogo: true,
        },
        details: {
            duration: '6 meses',
            team: '2 desenvolvedores',
            technologies: ['Flutter', 'Dart', 'Node.js', 'MySQL', 'Akamai Cloud'],
            challenge: 'A Universidade Mackenzie precisava de uma plataforma moderna que permitisse aos estudantes de Direito se prepararem de forma mais eficiente para o exame da OAB.\nO desafio era criar uma solução que fosse intuitiva para os alunos.\nE ao mesmo tempo oferecesse ferramentas robustas para os professores gerenciarem o conteúdo dinamicamente.',
            solution: 'Desenvolvemos uma plataforma completa composta por um aplicativo móvel para estudantes e um painel web para professores.\nO app permite realizar simulados personalizados, acompanhar progresso e estudar com base nas áreas de maior dificuldade.\nO painel web oferece criação de questões, análise de desempenho dos alunos e gestão completa do conteúdo educacional.',
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a galeria de imagens do projeto.',
            imagesFolder: '/assets/images/mockups/cases/oab-mack',
        },
        listing: {
            logo: '/assets/images/logos/mackenzie2.png',
            company: 'Universidade Mackenzie',
            description: 'Uma plataforma educacional que transformou a preparação dos estudantes de Direito para o exame da OAB, integrando simulados interativos com gestão dinâmica de conteúdo.',
            mockup: '/assets/images/mockups/oabmack_mockup_2.png',
            tags: ['Educação', 'Direito', 'Plataforma de Estudos'],
        },
    },

    // ── iCalvinus ──
    {
        slug: 'icalvinus',
        navigationLabel: { company: 'iCalvinus', title: 'Igreja Presbiteriana do Brasil' },
        metadata: {
            title: 'Case iCalvinus - Sistema Conciliar da IPB | Dzign-e',
            description: 'Como desenvolvemos o sistema oficial da Igreja Presbiteriana do Brasil para gestão conciliar',
        },
        hero: {
            logo: '/assets/images/logos/icalvinus-hn.png',
            company: 'Igreja Presbiteriana do Brasil',
            description: 'Criamos o sistema oficial da Igreja Presbiteriana do Brasil focado na gestão conciliar.',
            tags: ['Religioso', 'Gestão', 'Web Platform', 'Mobile App'],
            mockup: '/assets/images/mockups/iCalvinus_mockup_4.png',
        },
        details: {
            duration: '4 anos',
            team: '2 desenvolvedores',
            technologies: ['Flutter', 'Firebase', 'Node.js', 'MySQL', 'Akamai Cloud',],
            challenge: 'A Igreja Presbiteriana do Brasil, tendo seu modelo de governo representativo, enfrentava uma enorme dificuldade de gerenciar as informações e documentos de decisões das reuniões conciliares.\nTodos os documentos e decisões eram impressos e armazenados na Secretaria Executiva.\nIsso dificultava a logística de armazenamento, transporte para reuniões e consultas.\nEssa instituição precisava de um sistema que centralizasse todos os documentos passados e futuros, de forma a providenciar o fácil acesso assim como a consulta eficiente.',
            solution: 'Desenvolvemos um sistema web e móvel completo que permite a centralização de documentos, decisões e comunicações em uma plataforma digital acessível e eficiente, além de cadastro de sínodos, presbitérios, igrejas e rol de membros.\nO sistema inclui funcionalidades como upload e organização de documentos, acesso controlado por níveis hierárquicos, ferramentas de busca avançada, notificações automáticas para reuniões e decisões, e um painel administrativo para gestão completa do conteúdo conciliar.',
            results: [
                'Redução de 2/3 do tempo de reuniões conciliares',
                'Mais de 2800 documentos, decisões, ementas concentradas na plataforma',
                '80% de aumento na satisfação dos moradores',
                'Redução de 70% em conflitos por reservas',
                'Sistema de segurança 24/7 implementado',
                'Comunicação instantânea entre moradores e administração',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a galeria de imagens do projeto.',
            imagesFolder: '/assets/images/mockups/cases/icalvinus',
        },
        listing: {
            logo: '/assets/images/logos/icalvinus-hn.png',
            company: 'Igreja Presbiteriana do Brasil',
            description: 'Um sistema inovador que transformou a gestão conciliar da Igreja Presbiteriana do Brasil, centralizando documentos e decisões em uma plataforma digital acessível e eficiente.',
            mockup: '/assets/images/mockups/iCalvinus_mockup_4.png',
            tags: ['Gestão', 'Organização Religiosa', 'Gestão de Documentos'],
        },
    },

    // ── SigmaApp ──
    {
        slug: 'sigmaapp',
        navigationLabel: { company: 'SigmaApp', title: 'Sigmacon' },
        metadata: {
            title: 'Case Sigmacon - App de Gestão Condominial | Dzign-e',
            description: 'Como desenvolvemos um aplicativo revolucionário para gestão condominial integrando IoT, reservas e segurança',
        },
        hero: {
            logo: '/assets/images/logos/sigmaapp-n.png',
            company: 'Sigmacon',
            description: 'Revolucionamos a gestão condominial com um aplicativo inteligente que integra reservas de espaços, sistema de câmeras, controle de acesso e comunicação entre moradores e administração.',
            tags: ['Gestão', 'Mobile App', 'IoT', 'Segurança', 'Condomínios'],
            mockup: '/assets/images/mockups/sigmaapp-mockup-2.png',
        },
        details: {
            duration: '8 meses',
            team: '2 desenvolvedores',
            technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'AWS IoT', 'WebRTC', 'TypeScript'],
            challenge: 'O CEO da Sigmacon identificou uma lacuna no mercado de segurnça condominial, um aplicativo que intetgrasse enfrentavam dificuldades para gerenciar reservas de espaços comuns, controlar acessos, monitorar segurança e manter comunicação eficiente entre moradores e administração. Era necessária uma solução integrada que centralizasse todas essas funcionalidades em uma plataforma móvel intuitiva.',
            solution: 'Desenvolvemos um aplicativo móvel completo que permite aos moradores reservar espaços comuns, visualizar câmeras de segurança, autorizar visitantes, receber comunicados da administração e acessar serviços do condomínio. Para administradores, criamos um painel de gestão com controle total das funcionalidades, relatórios e monitoramento em tempo real.',
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a galeria de imagens do projeto.',
            imagesFolder: '/assets/images/mockups/cases/sigmaapp',
        },
        listing: {
            logo: '/assets/images/logos/sigmaapp.png',
            company: 'Sigmacon',
            description: 'O aplicativo móvel que mudou a forma de gerenciar segurança em condomínios, integrando reservas de espaços, controle de acesso e monitoramento em uma única plataforma intuitiva.',
            mockup: '/assets/images/mockups/sigmaapp-mockup-2.png',
            tags: ['Segurança', 'Condomínios', 'IoT', 'Gestão de Espaços'],
        },
    },

    // ── IPIConecta ──
    {
        slug: 'ipiconecta',
        navigationLabel: { company: 'IPIConecta', title: 'Igreja Presbiteriana Independente do Brasil' },
        metadata: {
            title: 'Case IPIConecta - Sistema de Gestão Conciliar da IPI | Dzign-e',
            description: 'Como desenvolvemos o sistema oficial da Igreja Presbiteriana Independente do Brasil para gestão conciliar',
        },
        hero: {
            logo: '/assets/images/logos/ipi.png',
            company: 'IPI - Igreja Presbiteriana Independente',
            title: 'IPIConecta',
            description: 'Desenvolvemos o IPIConecta, o sistema oficial da Igreja Presbiteriana Independente do Brasil para gestão conciliar, centralizando documentos, decisões e comunicações em uma plataforma digital acessível.',
            tags: ['Religioso', 'Gestão', 'Web Platform', 'Mobile App'],
            mockup: '/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png',
        },
        details: {
            duration: '3 anos',
            team: '2 desenvolvedores',
            technologies: ['React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TypeScript', 'Socket.io'],
            challenge: 'A IPI do Brasil necessitava conectar suas igrejas, presbitérios e sínodos em uma única plataforma que facilitasse a comunicação e a administração denominacional.\nOs processos administrativos dependiam de trocas de e-mails, documentos físicos e planilhas isoladas, gerando retrabalho e perda de informações importantes.\nNão existia uma forma padronizada de acompanhar deliberações, compartilhar comunicados oficiais ou manter um registro histórico acessível a todos os níveis da estrutura eclesiástica.\nA denominação precisava de uma ferramenta própria que unificasse a gestão administrativa e fortalecesse o vínculo entre suas comunidades.',
            solution: 'Criamos o IPIConecta, uma plataforma web e mobile sob medida que serve como o hub digital da denominação, integrando gestão de concílios, comunicação interna e cadastro institucional em um único ambiente.\nO sistema oferece painel de gestão para lideranças, módulo de comunicados e notificações em tempo real, repositório organizado de atas e documentos oficiais, cadastro hierárquico de igrejas e membros, além de relatórios e dashboards para acompanhamento denominacional.',
            results: [
                'Centralização de documentos e decisões conciliares',
                'Acesso digital para todos os sínodos, presbitérios e igrejas',
                'Redução significativa no tempo de reuniões conciliares',
                'Comunicação instantânea entre concílios',
                'Sistema de busca avançada para consulta de decisões',
                'Plataforma 100% responsiva com acesso mobile e web',
            ],
        },
        gallery: {
            title: 'Galeria de Imagens',
            description: 'Explore a galeria de imagens do projeto.',
            imagesFolder: '/assets/images/mockups/cases/ipiconecta',
        },
        listing: {
            logo: '/assets/images/logos/ipiconecta-h4.png',
            company: 'Igreja Presbiteriana Independente do Brasil',
            description: 'Um sistema definitivo para gestão conciliar, centralizando documentos, decisões e comunicações em uma plataforma digital acessível e eficiente, além de cadastro de sínodos, presbitérios, igrejas e rol de membros.',
            mockup: '/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png',
            tags: ['Gestão', 'Organização Religiosa', 'Gestão de Documentos'],
        },
    },

    // ── Contrata Já ──
    {
        slug: 'contrata-ja',
        navigationLabel: { company: 'Contrata Já', title: 'Contrata Já' },
        metadata: {
            title: 'Case Contrata Já - Marketplace de Serviços | Dzign-e',
            description: 'Como desenvolvemos uma marketplace que conecta profissionais de serviços a clientes de forma rápida e segura',
        },
        hero: {
            logo: '/assets/images/logos/contrataja-hn2.png',
            company: 'Contrata Já',
            description: 'Uma marketplace em desenvolvimento que conecta profissionais de serviços a clientes, facilitando contratações rápidas e seguras com avaliações e portfólios integrados.',
            tags: ['Serviços', 'Marketplace', 'Plataforma de Contratação', 'Mobile App', 'Web Platform'],
            mockup: '/assets/images/mockups/contrataja-ipad-mockup-2.png',
        },
        details: {
            duration: '6 meses',
            team: '1 desenvolvedores',
            technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Akamai Cloud'],
            challenge: 'Os condomínios enfrentavam dificuldades para gerenciar reservas de espaços comuns, controlar acessos, monitorar segurança e manter comunicação eficiente entre moradores e administração. Era necessária uma solução integrada que centralizasse todas essas funcionalidades em uma plataforma móvel intuitiva.',
            solution: 'Desenvolvemos um aplicativo móvel completo que permite aos moradores reservar espaços comuns, visualizar câmeras de segurança, autorizar visitantes, receber comunicados da administração e acessar serviços do condomínio. Para administradores, criamos um painel de gestão com controle total das funcionalidades, relatórios e monitoramento em tempo real.',
            results: [
                '95% de redução no tempo de reserva de espaços',
                'Mais de 150 condomínios utilizando a plataforma',
                '80% de aumento na satisfação dos moradores',
                'Redução de 70% em conflitos por reservas',
                'Sistema de segurança 24/7 implementado',
                'Comunicação instantânea entre moradores e administração',
            ],
        },
        gallery: {
            title: 'Funcionalidades Inovadoras',
            description: 'Explore as principais funcionalidades que transformaram a gestão condominial e a experiência dos moradores.',
            imagesFolder: '/assets/images/mockups/contrata-ja',
        },
        listing: {
            logo: '/assets/images/logos/contrataja-h.png',
            company: 'Contrata Já',
            description: 'Uma marketplace em desenvolvimento que conecta profissionais de serviços a clientes, facilitando contratações rápidas e seguras com avaliações e portfólios integrados.',
            mockup: '/assets/images/mockups/contrataja-ipad-mockup-2.png',
            tags: ['Serviços', 'Marketplace', 'Plataforma de Contratação'],
        },
    },
];

/* ─── Helpers ─── */

export function getCaseBySlug(slug: string): CaseData | undefined {
    return casesData.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string) {
    const index = casesData.findIndex((c) => c.slug === slug);
    if (index === -1) return { previous: undefined, next: undefined };

    const prev = casesData[index - 1];
    const next = casesData[index + 1];

    return {
        previous: prev
            ? {
                href: `/cases/${prev.slug}`,
                company: prev.navigationLabel.company,
                title: prev.navigationLabel.title,
                mockup: prev.listing.mockup,
            }
            : undefined,
        next: next
            ? {
                href: `/cases/${next.slug}`,
                company: next.navigationLabel.company,
                title: next.navigationLabel.title,
                mockup: next.listing.mockup,
            }
            : undefined,
    };
}

export function getAllCases() {
    return casesData;
}

export function getAllSlugs() {
    return casesData.map((c) => c.slug);
}
