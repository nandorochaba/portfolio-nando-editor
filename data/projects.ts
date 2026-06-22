import { Project, ProjectStatus } from '../types';

export const projectsData: Project[] = [
  {
    id: 'cyberpunk-cinematic-trailer',
    title: 'Cyberpunk 2083 Cinematic Trailer',
    description: 'Trailers de games de alta octanagem com montagem rítmica agressiva, sound design 3D e efeitos visuais pesados.',
    longDescription: 'Edição de trailer promocional imersivo para um jogo futurista de RPG de grande orçamento. Unimos dezenas de assets pré-renderizados com transições personalizadas, sound effects de impacto tridimensional e color grading focado em neons de alto contraste para gerar o máximo de engajamento no lançamento.',
    category: 'Cinematográfico',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Visualizações no Lançamento', value: '10M+' },
      { label: 'Retenção Média', value: '94.8%' },
      { label: 'Padrão Renderização', value: '4K HDR' }
    ],
    tech_stack: ['DaVinci Resolve', 'After Effects', 'Saber Plugin', 'Element 3D'],
    architecture_summary: 'Processamento de canais de áudio separados, sincronia milimétrica de impactos visuais com graves profundos e color grading neon em LUTs personalizados de altíssimo contraste.',
    validation_steps: [
      { id: '1', title: 'Roteirização de Ritmo e Batidas', completed: true },
      { id: '2', title: 'Seleção Espacial de Tomadas', completed: true },
      { id: '3', title: 'Sound Design de Impacto', completed: true },
      { id: '4', title: 'Motion Design de Subs & Títulos', completed: true },
      { id: '5', title: 'Color Grading & Exportação Raw', completed: true }
    ],
    client_quote: {
      text: "O nível de sincronismo e os impactos dos graves na edição de áudio deixaram o trailer dez vezes mais imersivo. Superou todas as expectativas globais!",
      author: "Dimitri Volkov",
      position: "Product Director na CyberLabs Studios"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://www.youtube.com/watch?v=CbHnNhvkdfY&pp=ugUEEgJwdA%3D%3D",
  },
  {
    id: 'nike-unstoppable-commercial',
    title: 'Nike Unstoppable Commercial',
    description: 'Campanha publicitária dinâmica com cortes rápidos, sound design orgânico e transições energéticas.',
    category: 'Comercial',
    status: ProjectStatus.DELIVERED,
    longDescription: 'Produção e pós-produção de comercial de alta intensidade para mídias sociais e TV. O maior desafio técnico foi manter a atenção do usuário ativa a cada milissegundo através de um ritmo rápido guiado por som orgânico de respiração, pegadas amplificadas e cortes rápidos de movimento esportivo.',
    metrics: [
      { label: 'Conversão em Vendas', value: '+12.5%' },
      { label: 'Retenção Completa', value: '89.2%' },
      { label: 'Engajamento Médio', value: '4.2x' }
    ],
    tech_stack: ['Premiere Pro', 'Adobe Audition', 'Twixtor (Frame Interpolation)', 'Boris FX'],
    architecture_summary: 'Estratégia dinâmica com velocidade variável (Speed Ramping) refinada com fluxo de vídeo óptico estabilizado e refinamento de som estéreo expandido no Adobe Audition.',
    validation_steps: [
      { id: '1', title: 'Definição de Beat Map e Storyboard', completed: true },
      { id: '2', title: 'Cortes Rítmicos Primários', completed: true },
      { id: '3', title: 'Aplicação de Twixtor Slow-Mo', completed: true },
      { id: '4', title: 'Sound Design Corporal Orgânico', completed: true },
      { id: '5', title: 'Correção de Cor Esportiva Quente', completed: true }
    ],
    client_quote: {
      text: "Conseguimos reter a atenção dos usuários até o último segundo de vídeo. Os cortes dinâmicos entregaram o visual de cinema que queríamos.",
      author: "Ricardo Menezes",
      position: "Diretor de Marketing Esportivo LATAM"
    },
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c003210bded3df5b3e27a6e118c7f1efbfe7e0cd&profile_id=165&oauth2_token_id=57447761",
  },
  {
    id: 'neon-drive-music-video',
    title: 'Neon Drive - Music Video',
    description: 'Videoclipe de Synthwave retro-futurista com máscaras personalizadas, efeitos de fita VHS e glow analógico de alta fidelidade.',
    longDescription: 'Vídeo musical imersivo inspirado na estética cyberpunk dos anos 80. Construído integrando máscaras complexas em carros e luzes, color grading focado em tons magenta e turquesa, simulações realistas de distorção de fita analógica (VHS) e sincronização harmônica completa.',
    category: 'Cinematográfico',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Streams no YouTube', value: '3M+' },
      { label: 'Avaliações de Estética', value: '98/100' },
      { label: 'Color Depth de Saída', value: '10-bit Rec.709' }
    ],
    tech_stack: ['After Effects', 'Premiere Pro', 'Red Giant Universe', 'Sapphire Plugins'],
    architecture_summary: 'Rotoscopia detalhada para isolar os neons da banda, aplicação de aberração cromática analógica realista e transições de pulsação acompanhando as frequências graves.',
    validation_steps: [
      { id: '1', title: 'Sincronismo Primário Multicâmera', completed: true },
      { id: '2', title: 'Rotoscopia e Máscaras de Contorno', completed: true },
      { id: '3', title: 'Mapeamento de Efeitos Retrô', completed: true },
      { id: '4', title: 'Criação de Vinhetas Glitch', completed: true },
      { id: '5', title: 'Masterização de Áudio Estéreo', completed: true }
    ],
    client_quote: {
      text: "Nando trouxe nossa visão musical à vida digital. O visual neon retro é uma obra de arte viva que impulsionou o lançamento do nosso álbum.",
      author: "Leo Stratus",
      position: "Vocalista da banda Neon Wave"
    },
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b94dbdc6e693170b6f98288da6183637e6da89e&profile_id=165&oauth2_token_id=57447761",
  },
  {
    id: 'modern-nature-documentary',
    title: 'Echoes of Modern Nature',
    description: 'Mini-documentário focado em narrativa profunda, transições invisíveis e correção de cores naturalista com perfil RAW.',
    longDescription: 'Um documentário poético abordando a intersecção entre biomas naturais e arquitetura moderna de megalópoles. Usando cortes longos e estáveis para estabelecer um senso de tranquilidade, transições invisíveis por mascaramento e um sound design ambiental sutil mas detalhado, o vídeo eleva a experiência narrativa comercial.',
    category: 'Cinematográfico',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Prêmios de Edição', value: '2x Best Cut' },
      { label: 'Tempo Assistido Médio', value: '12min' },
      { label: 'Qualidade Sonora', value: 'Dolby Atmos' }
    ],
    tech_stack: ['DaVinci Resolve', 'Avid Media Composer', 'DeNoise Premium', 'Lattice LUT Manager'],
    architecture_summary: 'Rendimento de cores naturalista usando matriz cromática de cores RAW nativas e remoção agressiva de ruído de baixa frequência sem perda de textura.',
    validation_steps: [
      { id: '1', title: 'Seleção de Texturas de Áudio', completed: true },
      { id: '2', title: 'Corte Poético com Ritmo Orgânico', completed: true },
      { id: '3', title: 'Remoção de Ruído de Filmagem', completed: true },
      { id: '4', title: 'Equalização de Sons do Ambiente', completed: true },
      { id: '5', title: 'Aprovação de Matriz Integradora', completed: true }
    ],
    client_quote: {
      text: "A montagem poética e o cuidado extremo com a fidelidade das tomadas de luz natural deram um ar internacional imbatível ao documentário.",
      author: "Marcos Villela",
      position: "Cineasta e Diretor Ambiental"
    },
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/340338301.sd.mp4?s=34ac37b2d2f2af264d2d47ed173d1aff04d538e3&profile_id=165&oauth2_token_id=57447761",
  },
  {
    id: 'viral-tech-reels',
    title: 'Viral Tech Hacks Series',
    description: 'Cortes ultra-dinâmicos de formato curto para TikTok, Reels e Shorts com retenção recorde e legendas futuristas.',
    longDescription: 'Desenvolvimento e pós-produção de uma série com mais de 30 vídeos curtos para educação em IA. Foco em reter o espectador logo no primeiro segundo usando enquadramentos dinâmicos, emojis 3D animados, efeitos sonoros (SFX) e zoom sutil mas direto a cada bloco de corte.',
    category: 'Reels / TikTok / Shorts',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Visualizações Globais', value: '25M+' },
      { label: 'Engajamento de Tráfego', value: '9.7%' },
      { label: 'Cliques Diretos nos Bots', value: '+320%' }
    ],
    tech_stack: ['After Effects', 'Premiere Pro', 'CapCut Desktop', 'Subtitles Advanced Engine'],
    architecture_summary: 'Processamento automatizado de legenda com quebra inteligente de blocos de leitura e sobreposição de efeitos sonoros como swishes na entrada de cada elemento visual.',
    validation_steps: [
      { id: '1', title: 'Hooks de Entrada de 3s', completed: true },
      { id: '2', title: 'Sincronização de Legenda Rápida', completed: true },
      { id: '3', title: 'Mapeamento de Emojis Animados', completed: true },
      { id: '4', title: 'Inclusão de Sound Effects Rápidos', completed: true },
      { id: '5', title: 'Renderização Otimizada Web-M', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/510850877.sd.mp4?s=d94eb3e961be4ed200c92131ee698fc1fbc40d42&profile_id=165&oauth2_token_id=57447761",
    isVertical: true,
  },
  {
    id: 'street-workout-tiktok',
    title: 'Street Workout TikTok Power',
    description: 'Edição de alta adrenalina com batidas sincopadas, efeitos de transição e Sound Design (SFX) amplificado para retenção máxima no TikTok.',
    longDescription: 'Desenvolvimento de uma edição agressiva para as mídias verticais do TikTok. Focado em rítmica pesada, cortes nos picos de áudio, efeitos visuais com glows rápidos e transições invisíveis que geram loops contínuos — um dos maiores pilares de viralização orgânica do algoritmo do TikTok.',
    category: 'Reels / TikTok / Shorts',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Visualizações no TikTok', value: '5.4M' },
      { label: 'Taxa de Compartilhamento', value: '12.3%' },
      { label: 'Salvamentos de Áudio', value: '45K' }
    ],
    tech_stack: ['Premiere Pro', 'After Effects', 'Twixtor (Speed Ramping)', 'Audition SFX Master'],
    architecture_summary: 'Sincronização cirúrgica de impactos físicos com graves encorpados, transições em máscara lateral para simular fluxo ininterrupto e color grading de alto contraste.',
    validation_steps: [
      { id: '1', title: 'Análise de Batidas de Áudio & Drop Map', completed: true },
      { id: '2', title: 'Acelerações & Câmera Lenta (Speed Ramps)', completed: true },
      { id: '3', title: 'Mixagem de Sound Effects Corporais', completed: true },
      { id: '4', title: 'Color Grading Estilo "High-Contrast Athletics"', completed: true },
      { id: '5', title: 'Análise de Loop Fluido de Fim para o Começo', completed: true }
    ],
    client_quote: {
      text: "Minhas visualizações orgânicas quadruplicaram após essa edição. O ritmo dinâmico e o loop sem costuras seguram o público do início ao fim!",
      author: "Gabriel 'Steel' Santos",
      position: "Atleta Profissional & Criador de Conteúdo"
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7dd3210bded3df5b3e27a6e118c7f1efbfe7e0cd&profile_id=165&oauth2_token_id=57447761",
    isVertical: true,
  },
  {
    id: 'fintech-interactive-shorts',
    title: 'Fintech Interactive Micro-Shorts',
    description: 'Motion Graphics dinâmicos e infográficos explicativos adaptados para telas verticais sobre finanças e inteligência artificial.',
    longDescription: 'Criação de vídeos curtos explicativos focados em converter usuários comuns em Leads qualificados. Apresenta transações de dados financeiros na nuvem traduzidos em gráficos animados modernos de 9:16, zoom digital suave, enquadramento centralizado de alta legibilidade de textos e inserção de mockups tridimensionais.',
    category: 'Reels / TikTok / Shorts',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Taxa de Retenção Completa', value: '81.4%' },
      { label: 'Cliques no Link (CTR)', value: '8.9%' },
      { label: 'Novos Leads Gerados', value: '+12.5k' }
    ],
    tech_stack: ['After Effects', 'Illustrator (Design de Vetores)', 'Overlord', 'Premiere Pro'],
    architecture_summary: 'Desenho de layouts focados em margens de segurança das redes, legendas em bloco único colorido no centro e aceleração constante usando curvas de velocidade orgânicas.',
    validation_steps: [
      { id: '1', title: 'Planejamento de Margens de Segurança de Interface', completed: true },
      { id: '2', title: 'Importação e Rigging de Vetores UI', completed: true },
      { id: '3', title: 'Animação de Legendas Coloridas Centralizadas', completed: true },
      { id: '4', title: 'Efeitos de Cursor e Click Animado', completed: true },
      { id: '5', title: 'Otimização com Áudio Limpo por IA', completed: true }
    ],
    client_quote: {
      text: "Conseguimos passar conceitos complexos em apenas 45 segundos de forma super leve e profissional.",
      author: "Beatriz Ramos",
      position: "Head of Growth na FinTech NeoBank"
    },
    image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/415115147.sd.mp4?s=fcdc310bded3df5b3e27a6e118c7f1efbfe7e0cd&profile_id=165&oauth2_token_id=57447761",
    isVertical: true,
  },
  {
    id: 'volvo-safety-reimagined',
    title: 'Volvo Safety Reimagined',
    description: 'Vídeo corporativo institucional com elementos HUD (Head-Up Display) tridimensionais, motion tracking avançado e sonorização corporativa limpa.',
    longDescription: 'Pós-produção de vídeo para o lançamento VIP de veículo corporativo de luxo. A edição equilibra perfeitamente filmagens estáticas altamente iluminadas com overlays de realidade aumentada (HUD) projetados diretamente no painel do automóvel através de rastreamento 3D refinado de câmera.',
    category: 'Comercial',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Retornos de Clientes VIPs', value: '98%' },
      { label: 'Estabilidade de Pista Visual', value: 'Perfeita' },
      { label: 'Codecs de Vídeo Padrão', value: 'Dolby Vision' }
    ],
    tech_stack: ['After Effects (Camera Tracker)', 'Premiere Pro', 'Cinema 4D (Mockups)', 'PluralEyes Sync'],
    architecture_summary: 'Rastreamento tridimensional de lente em After Effects integrado a gráficos explicativos com visualização HUD flutuante simulando um assistente de direção inteligente.',
    validation_steps: [
      { id: '1', title: 'Auditoria de Sincronismo PluralEyes', completed: true },
      { id: '2', title: 'Edição de Entrevistas & Tomadas de Pista', completed: true },
      { id: '3', title: 'Geração de Tracking 3D Físico', completed: true },
      { id: '4', title: 'Refinamento de Motion Graphics HUD', completed: true },
      { id: '5', title: 'Sonorização de Cabine Realista', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://player.vimeo.com/external/354802156.sd.mp4?s=ccda553ed1be3e4a2d3989c927447fa436f0ecfa&profile_id=165&oauth2_token_id=57447761",
  },
  {
    id: 'youtube-case',
    title: 'Instagram Reels Viral',
    description: 'Edição ultra-dinâmica e de alta performance criada especificamente para engajamento no Instagram Reels e TikTok.',
    longDescription: 'Pós-produção avançada focada em dinâmicas de altíssima engajamento e retenção prontas para o algoritmo do Instagram Reels, TikTok e Shorts. Utiliza transições de forte impacto visual, áudio imersivo, design inovador de legendas síncronas e hooks impactantes para manter a atenção visual contínua de ponta a ponta.',
    category: 'Reels / TikTok / Shorts',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Engajamento de Shorts', value: '94%' },
      { label: 'Cliques no Link na Bio', value: '18.5k' },
      { label: 'Visualizações Finais', value: '450K+' }
    ],
    tech_stack: ['Premiere Pro', 'After Effects', 'Photoshop (Covers)', 'Audition Sound FX'],
    architecture_summary: 'Construção de roteiro encurtado com zoom-punch a cada frase relevante, legendização inteligente, trilhas vibrantes em loop, e design estético ultra saturado.',
    validation_steps: [
      { id: '1', title: 'Hook Inicial Dinâmico (0-3s)', completed: true },
      { id: '2', title: 'Sincronização de Entonação e Swish', completed: true },
      { id: '3', title: 'Design de Elementos HUD Retentivos', completed: true },
      { id: '4', title: 'Otimização de Export em High Bitrate Vertical', completed: true }
    ],
    client_quote: {
      text: "A dinâmica de edição prendeu meu público do início ao fim do vídeo promocional. O melhor resultado técnico de engajamento que já tivemos no canal!",
      author: "Julio Nogueira",
      position: "Creator & Host do Canal TechVlog"
    },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fm=webp&q=75&fit=crop&w=1000",
    videoUrl: "https://www.instagram.com/reel/DWSUMBHDOMx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    isVertical: true,
  }
];
