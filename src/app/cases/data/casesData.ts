
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
        resultsCaption?: string;
        results?: { icon: string; text: string }[];
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
            challenge: 'A Universidade Mackenzie precisava de uma plataforma para ajudar os estudantes de Direito a se prepararem para o exame da OAB. A solução precisava ser intuitiva para os alunos e, ao mesmo tempo, permitir que os professores gerenciassem o conteúdo de forma dinâmica.',
            solution: 'Desenvolvemos uma plataforma com duas frentes: um aplicativo mobile para os estudantes e um painel web para os professores.\nNo app, os alunos conseguem realizar simulados personalizados, acompanhar o próprio progresso e direcionar os estudos com base nas áreas de maior dificuldade.\nNo painel web, os professores têm acesso à criação e edição de questões e gestão completa do conteúdo educacional.',
            resultsCaption: 'Plataforma proprietária desenvolvida sob medida para a Mackenzie.',
            results: [
                { icon: 'users', text: '+500 usuários cadastrados' },
                { icon: 'notebook', text: '+700 questões organizadas em 21 categorias' },
                { icon: 'checklist', text: '+300 simulados realizados' },

            ],
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
            challenge: 'A Igreja Presbiteriana do Brasil possui um modelo de governo representativo que gera grandes volumes de documentos, atas e decisões conciliares. Toda essa gestão dependia de processos manuais e arquivos físicos — o que tornava o acesso a documentos históricos lento e a logística de cada reunião do Supremo Concílio complexa.',
            solution: 'Desenvolvemos o iCalvinus, uma plataforma web e mobile construída especificamente para o modelo de governança presbiteriana.\nA plataforma centraliza toda a gestão conciliar em ambiente digital: documentos históricos e futuros em um só lugar, geração automática de atas, controle de presença e um módulo de votação eletrônica — tudo acessível de forma simples e imediata.',
            resultsCaption: 'Redução de 2/3 do tempo das reuniões do Supremo Concílio. Facilidade de acesso do Digesto, Anuário, Decisões e Atas.',
            results: [
                { icon: 'users', text: '+3400 usuários ativos cadastrados' },
                { icon: 'buildings', text: '+4300 igrejas ativas cadastradas' },
                { icon: 'documents', text: '+2800 documentos, decisões, ementas concentradas na plataforma' },
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
            duration: 'Contínuo desde 2019',
            team: '2 desenvolvedores',
            technologies: ['Flutter', 'Firebase', 'Node.js', 'MySQL', 'Akamai Cloud'],
            challenge: 'O CEO da SigmaCon identificou uma lacuna no mercado de segurança condominial: a falta de uma ferramenta que facilitasse a comunicação entre moradores e a gestão do condomínio, por meio de abertura e acompanhamento de ocorrências.',
            solution: 'Desenvolvemos o SigmaApp, um aplicativo mobile com foco inicial na gestão de ocorrências. Com o tempo, novas necessidades foram surgindo e o app foi evoluindo para incorporar controle de acesso, reserva e gestão de espaços comuns e notificações aos condôminos, combinando funcionalidades nativas e integrações externas.',
            resultsCaption: 'O SigmaApp está ativo no mercado e segue em desenvolvimento contínuo, incorporando melhorias para atender novos clientes e novas demandas que surgem ao longo do caminho. A Dzign-e atua com coparticipação na receita do aplicativo, refletindo o nível de confiança e comprometimento construído ao longo do projeto.',
            results: [
                { icon: 'check', text: '+41.000 visitas registradas' },
                { icon: 'documents', text: '+7.000 ocorrências registradas' },
                { icon: 'users', text: '+17.000 usuários ativos' },
            ],
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
            challenge: 'A Igreja Presbiteriana Independente do Brasil possui um modelo de governo representativo que envolve diferentes níveis institucionais: igrejas locais, presbitérios e sínodos. A denominação precisava de uma plataforma que centralizasse a gestão conciliar e, ao mesmo tempo, organizasse toda a sua estrutura denominacional, incluindo o cadastro de membros e das entidades que compõem a IPIB.',
            solution: 'Desenvolvemos o IPIConecta, uma plataforma web e mobile construída especificamente para o modelo de governança da IPIB.\nA plataforma centraliza a gestão conciliar em ambiente digital: documentos históricos e futuros em um só lugar, geração automática de atas, controle de presença e módulo de votação eletrônica, tudo acessível de forma simples e imediata.\nAlém da gestão conciliar, o IPIConecta integra o cadastro e gerenciamento de membros, igrejas, presbitérios e sínodos, contemplando toda a estrutura denominacional da instituição em um único sistema.',
            resultsCaption: 'A IPIB passou a contar com uma solução própria e aderente às especificidades da sua estrutura denominacional, que centralizou a base documental e modernizou a gestão conciliar e institucional da denominação.',
            results: [
                { icon: 'users', text: '+1000 ministros cadastrados' },
                { icon: 'buildings', text: '+500 igrejas cadastradas' },
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
            resultsCaption: 'Sistema de segurança 24/7 implementado. Comunicação instantânea entre moradores e administração.',
            results: [
                { icon: 'clock', text: '95% de redução no tempo de reserva de espaços' },
                { icon: 'buildings', text: 'Mais de 150 condomínios utilizando a plataforma' },
                { icon: 'graph', text: '80% de aumento na satisfação dos moradores' },
                { icon: 'shield', text: 'Redução de 70% em conflitos por reservas' },
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
