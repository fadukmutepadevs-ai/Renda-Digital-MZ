import { Article, ToolItem, Opportunity, Guide } from '../types';
import { ARTICLE_IMAGES } from './articleIllustrations';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: '7-formas-de-ganhar-renda-extra-pela-internet',
    title: '7 formas reais de ganhar renda extra pela internet',
    category: 'renda-extra',
    summary: 'Ideias práticas e viáveis para gerar rendimentos adicionais no tempo livre, com transparência sobre esforço, prazos e custos.',
    image: ARTICLE_IMAGES.rendaExtra,
    imageCaption: 'Ilustração: Ecossistema de trabalho online e carteiras móveis (M-Pesa) para geração de renda real.',
    instructionIntro: 'Siga este roteiro prático para escolher a sua primeira fonte de renda e dar os primeiros passos sem gastar dinheiro:',
    instructions: [
      {
        step: 1,
        title: 'Mapeie a sua principal habilidade prática',
        action: 'Escolha apenas 1 habilidade para começar: você é melhor em escrever com clareza, criar imagens no celular, organizar dados ou conversar com pessoas? Concentre-se nela durante as próximas 4 semanas.',
        tip: 'Não tente fazer tudo ao mesmo tempo. Especialistas focados em uma entrega simples fecham clientes muito mais rápido.',
      },
      {
        step: 2,
        title: 'Instale as ferramentas gratuitas essenciais',
        action: 'Baixe o Canva para celular, o Google Docs para textos e ative o WhatsApp Business para separar mensagens de trabalho das suas conversas pessoais.',
        tip: 'Todas essas ferramentas possuem versões 100% gratuitas que consomem poucos dados móveis.',
      },
      {
        step: 3,
        title: 'Crie duas amostras reais de demonstração',
        action: 'Mesmo sem clientes prévios, produza 2 trabalhos práticos (ex: um panfleto digital para uma pastelaria do bairro ou uma planilha de controle financeiro) para ter o que mostrar aos primeiros interessados.',
      },
      {
        step: 4,
        title: 'Defina a sua forma de recebimento',
        action: 'Garanta que sua conta M-Pesa ou E-Mola esteja ativa no seu nome ou tenha uma conta bancária com NUIT regular para emitir recibos quando solicitado.',
        warning: 'Nunca compartilhe seu código PIN ou códigos SMS recebidos com nenhum pretenso cliente.',
      },
    ],
    readingTime: '6 min',
    riskLevel: 'Baixo',
    initialCost: '0 MZN (apenas internet e dedicação)',
    estimatedReturn: '3.000 a 25.000+ MZN/mês (dependendo da dedicação)',
    requirements: ['Smartphone ou computador com acesso à internet', 'Vontade de aprender uma competência prática', 'Pelo menos 1 a 2 horas livres por dia'],
    tags: ['Renda Extra', 'Iniciantes', 'Internet', 'Moçambique'],
    publishedAt: '2025-01-15',
    isFeatured: true,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Não existe dinheiro fácil ou automático: todo ganho legítimo vem da troca de valor, tempo ou habilidade.',
      'Prestar serviços locais ou internacionais é a forma mais rápida de monetizar sem capital inicial.',
      'Use ferramentas gratuitas no início para manter o custo em zero.'
    ],
    content: [
      'Ganhar renda extra online é uma oportunidade real e acessível para quem vive em Moçambique e no espaço lusófono, desde que se compreenda uma regra básica: a internet é um meio de comunicação e trabalho, não uma máquina mágica de dinheiro.',
      '1. Gestão de Redes Sociais para Pequenos Negócios Locais: Muitas lojas, oficinas, confeitarias e prestadores de serviços de bairro não têm tempo nem conhecimento para postar com consistência no Instagram, Facebook ou WhatsApp Business. Se você sabe criar artes básicas no Canva e responder clientes com educação, já tem um serviço vendável.',
      '2. Redação e Revisão de Textos: Blogs, portais de notícias e criadores de conteúdo contratam redactores para escrever artigos, posts e resumos. A fluência em português e boa pesquisa são os únicos requisitos.',
      '3. Tradução e Transcrição de Áudio: Se você domina inglês, francês ou línguas locais além do português, pode transcrever reuniões, entrevistas ou traduzir documentos curtos para estudantes e empresas.',
      '4. Assistência Virtual e Apoio Administrativo: Profissionais ocupados precisam de pessoas para organizar caixas de email, agendar reuniões, preencher planilhas do Excel e contactar fornecedores.',
      '5. Design Gráfico Simples e Identidade Visual: Criação de logotipos simples, flyers digitais, cardápios para restaurantes e cartazes de eventos para circulação em grupos do WhatsApp.',
      '6. Aulas Particulares e Explicações Online: Se domina Matemática, Física, Inglês, Contabilidade ou Informática, pode dar explicações individuais pelo Google Meet ou chamadas do WhatsApp para alunos da sua província ou de fora.',
      '7. Criação e Venda de Materiais Digitais Práticos: Apostilas de estudo, modelos de currículos profissionais prontos, planilhas orçamentárias no Excel adaptadas ao custo de vida em Moçambique.'
    ]
  },
  {
    id: 'art-2',
    slug: 'como-comecar-a-trabalhar-como-freelancer',
    title: 'Como começar a trabalhar como freelancer do zero',
    category: 'trabalho-online',
    summary: 'Guia definitivo para construir o seu portfólio inicial, definir preços justos e conseguir os primeiros clientes pagantes.',
    image: ARTICLE_IMAGES.freelancer,
    imageCaption: 'Ilustração: Estrutura profissional de portfólio, proposta comercial com 50% de sinal e reputação 5 estrelas.',
    instructionIntro: 'Instruções diretas para montar seu posicionamento freelance e fechar seu primeiro projeto:',
    instructions: [
      {
        step: 1,
        title: 'Crie uma pasta pública no Google Drive ou Notion',
        action: 'Crie uma pasta com o título "Portfólio - [Seu Nome] - [Sua Habilidade]" e configure o link como "Qualquer pessoa com o link pode visualizar". Coloque lá de 2 a 3 amostras do seu trabalho.',
        tip: 'Ter um link leve no Google Drive é muito mais rápido e profissional do que enviar dezenas de arquivos pesados por WhatsApp.',
      },
      {
        step: 2,
        title: 'Formate a sua mensagem de apresentação direta',
        action: 'Escreva uma mensagem de no máximo 4 parágrafos explicando quem você é, o que entrega e o link do seu portfólio de demonstração.',
        templateText: 'Olá! Sou [Seu Nome], especialista em [Design / Redação / Gestão]. Notei que sua empresa tem ótimos produtos e preparei uma amostra rápida para ilustrar como podemos atrair mais clientes pelo WhatsApp. Segue o link com meu portfólio: [LINK]. Podemos bater um papo rápido de 5 minutos?',
      },
      {
        step: 3,
        title: 'Adote a regra de ouro dos 50% de adiantamento',
        action: 'Ao fechar o valor do serviço com o cliente, sempre estabeleça 50% antes de iniciar e os 50% restantes no momento da entrega do arquivo final.',
        warning: 'Nunca entregue o arquivo original editável ou credenciais de acesso antes do pagamento total acordado.',
      },
    ],
    readingTime: '8 min',
    riskLevel: 'Baixo',
    initialCost: '0 MZN',
    estimatedReturn: 'Variável (cresce conforme a reputação e carteira)',
    requirements: ['1 habilidade específica útil (ex: escrita, design, suporte)', 'Amostras de trabalho para mostrar (portfólio fictício)', 'Perfil profissional organizado'],
    tags: ['Freelance', 'Trabalho Remoto', 'Primeiros Clientes'],
    publishedAt: '2025-01-20',
    isFeatured: true,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Você não precisa esperar ter clientes para criar um portfólio: crie projetos de demonstração.',
      'Comece atendendo conhecidos e empresas locais antes de disputar plataformas globais com milhões de concorrentes.',
      'Defina termos claros de pagamento: 50% de entrada antes de começar e 50% na entrega final.'
    ],
    content: [
      'Trabalhar como freelancer significa ser dono do seu próprio tempo e vender suas habilidades para diferentes clientes, sem vínculo empregatício tradicional.',
      'Passo 1 — Escolha uma única habilidade para começar: Tentar oferecer tudo (design, programação, marketing, tradução) confunde quem quer contratar. Comece dizendo claramente: "Eu ajudo restaurantes a terem cardápios atraentes no WhatsApp" ou "Eu escrevo artigos para blogs de educação".',
      'Passo 2 — Construa 3 exemplos práticos (Portfólio): Mesmo sem clientes anteriores, crie 3 peças fictícias. Se é designer, redesenhe a publicação de uma loja conhecida. Se é redator, escreva 2 artigos completos no Google Docs e compartilhe o link de visualização.',
      'Passo 3 — Prospecção Ativa Simples: Em vez de apenas se cadastrar em plataformas com milhares de concorrentes globais, pesquise pequenas empresas no seu bairro ou cidade que possuem páginas desatualizadas. Envie uma mensagem humilde oferecendo um trabalho experimental ou consultoria rápida.',
      'Passo 4 — Cuidados com pagamentos: Nunca entregue trabalhos finais sem garantia. O padrão recomendado para iniciantes é solicitar 50% de sinal adiantado e os restantes 50% antes do arquivo final editável ser entregue. Em Moçambique, canais como M-Pesa, E-Mola e transferências bancárias são ideais para contratos nacionais; para clientes internacionais, informe-se sobre Payoneer e Wise.'
    ]
  },
  {
    id: 'art-3',
    slug: 'ferramentas-gratuitas-para-trabalhar-online',
    title: 'Ferramentas gratuitas para trabalhar online sem gastar nada',
    category: 'ferramentas',
    summary: 'Seleção das melhores plataformas com plano gratuito generoso e baixo consumo de dados móveis para iniciar sua jornada.',
    image: ARTICLE_IMAGES.ferramentas,
    imageCaption: 'Ilustração: Caixa de ferramentas com Canva, Google Docs, WhatsApp Business e Trello em nuvem.',
    instructionIntro: 'Instruções de instalação e configuração do seu ecossistema de trabalho gratuito:',
    instructions: [
      {
        step: 1,
        title: 'Crie uma conta Google dedicada para o trabalho',
        action: 'Evite misturar e-mails pessoais com trabalho. Crie um e-mail profissional simples (ex: seunome.servicos@gmail.com) para acessar o Drive, Docs e Meet.',
      },
      {
        step: 2,
        title: 'Ative o modo offline do Google Docs no seu celular',
        action: 'No aplicativo do Google Docs no Android/iOS, toque nos 3 pontinhos ao lado dos arquivos e marque "Disponível off-line". Assim você trabalha mesmo quando estiver sem internet.',
        tip: 'Isso economiza bateria e megabytes do seu pacote de dados.',
      },
      {
        step: 3,
        title: 'Monte seu quadro de encomendas no Trello',
        action: 'Crie 3 colunas simples no Trello gratuito: "A Fazer", "Em Andamento" e "Entregue e Pago". Mova os cartões para nunca esquecer um prazo de entrega.',
      },
    ],
    readingTime: '5 min',
    riskLevel: 'Baixo',
    initialCost: '0 MZN',
    estimatedReturn: 'Economia direta em softwares e maior produtividade',
    requirements: ['Navegador web moderno ou celular Android'],
    tags: ['Ferramentas', 'Gratuito', 'Produtividade', 'Design'],
    publishedAt: '2025-01-22',
    isFeatured: false,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Você não precisa de softwares piratas pesados ou licenças caras de centenas de dólares para ser produtivo.',
      'Prefira ferramentas que funcionem no navegador e tenham aplicativos leves para celular.',
      'Organize seus arquivos na nuvem gratuita para nunca perder trabalhos de clientes.'
    ],
    content: [
      'Um dos maiores equívocos de quem quer começar no mundo digital é achar que precisa comprar um computador de última geração ou assinar programas caros.',
      '1. Canva (Versão Gratuita): Ideal para criar posts de redes sociais, apresentações, currículos e propostas comerciais. Oferece milhares de modelos prontos e roda perfeitamente em celulares simples.',
      '2. Google Docs e Google Drive: Suite completa de escritório. 15 GB gratuitos na nuvem. Você pode escrever textos, planilhar gastos e orçamentos e compartilhar com clientes através de links leves.',
      '3. Notion e Trello: Para organizar suas tarefas, prazos de entrega e lista de clientes potenciais. O Trello é visual com colunas ("A Fazer", "Em Andamento", "Concluído").',
      '4. CapCut Mobile: Editor de vídeo gratuito e intuitivo para criar reels, vídeos de TikTok e publicações promocionais sem marcas d’água abusivas.',
      '5. DeepL e Grammarly: Assistentes essenciais para quem traduz ou redige conteúdos em vários idiomas, garantindo pontuação e ortografia profissionais.'
    ]
  },
  {
    id: 'art-4',
    slug: 'como-criar-um-negocio-digital-comecando-do-zero',
    title: 'Como criar um negócio digital começando do zero',
    category: 'negocios-digitais',
    summary: 'Estratégia passo a passo para validar uma ideia, atrair os primeiros compradores e gerir lucros com responsabilidade.',
    image: ARTICLE_IMAGES.negocioDigital,
    imageCaption: 'Ilustração: Loja digital simplificada com catálogo no WhatsApp Business e pedidos confirmados.',
    instructionIntro: 'Instruções de execução para validar sua oferta antes de investir qualquer dinheiro:',
    instructions: [
      {
        step: 1,
        title: 'Entreviste 5 pessoas do seu público-alvo',
        action: 'Antes de criar qualquer produto ou página, pergunte para 5 pessoas reais qual é a maior dificuldade que enfrentam no tema que você pretende atender.',
        tip: 'Se as pessoas não reclamam com frequência sobre o problema, dificilmente pagarão por uma solução.',
      },
      {
        step: 2,
        title: 'Crie seu catálogo comercial no WhatsApp Business',
        action: 'Cadastre suas 3 principais ofertas com foto nítida, descrição clara e preço fixado em Meticais. Evite "preço no inbox" — a transparência gera o dobro de fechamentos.',
      },
      {
        step: 3,
        title: 'Separe 100% dos lucros no primeiro trimestre',
        action: 'Não retire todo o faturamento para despesas supérfluas. Mantenha uma reserva para recargas de dados móveis e eventuais divulgações locais.',
      },
    ],
    readingTime: '7 min',
    riskLevel: 'Médio',
    initialCost: 'Baixo (100 a 1.000 MZN em tráfego ou pacotes)',
    estimatedReturn: 'Construção de ativo de médio e longo prazo',
    requirements: ['Noção clara de demanda no mercado', 'Disposição para lidar com atendimento ao cliente', 'Organização financeira'],
    tags: ['Negócios Digitais', 'Empreendedorismo', 'Vendas Online'],
    publishedAt: '2025-01-25',
    isFeatured: false,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Antes de gastar dinheiro criando um site ou produto complexo, valide se alguém realmente pagaria por isso.',
      'O WhatsApp Business é o CRM e motor de vendas mais poderoso e acessível da nossa região.',
      'Reinvista os primeiros lucros em melhoria de processo em vez de gastar tudo de imediato.'
    ],
    content: [
      'Criar um negócio digital não requer escritórios caros ou estoque físico gigantesco se você começar com modelos leves e escaláveis.',
      'Fase 1 — Identifique uma dor real: Pessoas pagam por três coisas fundamentais: economizar tempo, economizar dinheiro ou aprender algo que lhes traga prestígio e renda. Se o que você oferece não resolve um problema evidente, as vendas serão difíceis.',
      'Fase 2 — Teste com o Produto Mínimo Viável (MVP): Se quer vender um curso ou apostila, converse com 10 pessoas do seu nicho antes de escrever 100 páginas. Descubra as dúvidas exatas delas.',
      'Fase 3 — Configure seu Canal de Atendimento: Em Moçambique e na África Austral, o WhatsApp é rei. Configure o WhatsApp Business com catálogo, mensagens de ausência e respostas rápidas com detalhes bancários ou número de carteira móvel.',
      'Fase 4 — Entregue acima da média: Clientes satisfeitos trazem amigos sem custo de marketing. Um atendimento gentil, rápido e transparente é o maior diferencial competitivo.'
    ]
  },
  {
    id: 'art-5',
    slug: 'como-vender-servicos-pela-internet',
    title: 'Como vender serviços pela internet e prospectar clientes',
    category: 'dicas',
    summary: 'Roteiros de mensagens, técnicas de abordagem ética e como precificar seu trabalho sem desvalorizar seu tempo.',
    image: ARTICLE_IMAGES.venderServicos,
    imageCaption: 'Ilustração: Negociação ética por chat e proposta comercial com valor percebido.',
    instructionIntro: 'Roteiro de prospecção diária: faça isso por 14 dias seguidos para obter seus primeiros contatos:',
    instructions: [
      {
        step: 1,
        title: 'Mapeie 5 empresas ou comércios por dia',
        action: 'Abra o Instagram ou Facebook e liste pequenos negócios que tenham produtos de qualidade, mas publicações sem padrão ou horários desatualizados.',
      },
      {
        step: 2,
        title: 'Envie uma prévia de valor sem cobrar nada antecipado',
        action: 'Faça uma melhoria de demonstração e mande junto com a mensagem. Exemplo: "Fiz esta arte demonstrativa para o cardápio da sua loja para você ver como ficaria no WhatsApp".',
        tip: 'Mostrar resultado visual antes de pedir dinheiro elimina 90% da resistência inicial.',
      },
      {
        step: 3,
        title: 'Apresente 2 opções de planos (Pacote Pontual vs. Pacote Mensal)',
        action: 'Dê ao cliente o poder de escolha: "Plano 1: 5 artes pontuais por X MZN" ou "Plano 2: Suporte mensal contínuo por Y MZN".',
      },
    ],
    readingTime: '6 min',
    riskLevel: 'Baixo',
    initialCost: '0 MZN',
    estimatedReturn: 'Rápido, proporcional aos contatos realizados',
    requirements: ['Conta ativa no WhatsApp ou Instagram', 'Portfólio com pelo menos 2 exemplos', 'Paciência e persistência'],
    tags: ['Vendas', 'Prospecção', 'Dicas Comerciais'],
    publishedAt: '2025-01-28',
    isFeatured: false,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Nunca envie spam genérico com "Olá, quer comprar meu serviço?". Personalize cada contato.',
      'Mostre que você pesquisou o negócio do cliente antes de mandar mensagem.',
      'Foque no benefício para o cliente: como seu serviço vai trazer mais faturamento ou poupar dores de cabeça para ele.'
    ],
    content: [
      'Muitas pessoas aprendem uma habilidade excelente, mas ficam semanas sem clientes porque esperam que as pessoas adivinhem que elas estão disponíveis.',
      '1. Onde encontrar clientes: Grupos locais de comércio no Facebook, páginas do Instagram de pequenos negócios da sua cidade, conexões no LinkedIn e contatos da sua própria lista telefônica.',
      '2. Roteiro de abordagem eficaz: Comece elogiando algo genuíno no perfil da empresa. Depois, aponte uma melhoria gentil: "Notei que você tem produtos excelentes, mas os clientes demoram a ver os preços. Eu montei uma prévia de cardápio digital que facilitaria muito os seus pedidos. Posso te enviar para dar uma olhada sem compromisso?".',
      '3. Como precificar: No início, não cobre barato demais a ponto de não compensar a internet gasta, nem cobre preços de agência internacional. Calcule quanto tempo gasta em cada tarefa e adicione uma margem de segurança para revisões.'
    ]
  },
  {
    id: 'art-6',
    slug: 'erros-que-iniciantes-devem-evitar-ao-tentar-ganhar-dinheiro-online',
    title: 'Erros que iniciantes devem evitar ao tentar ganhar dinheiro online',
    category: 'dicas',
    summary: 'Como identificar fraudes, esquemas piramidais, promessas irreais e proteger seu dinheiro e seu tempo.',
    image: ARTICLE_IMAGES.errosAntiGolpes,
    imageCaption: 'Ilustração: Escudo de segurança cibernética e detecção de pirâmides e falsos apps de tarefas.',
    instructionIntro: 'Protocolo de segurança digital: execute estas 3 verificações antes de aceitar qualquer proposta:',
    instructions: [
      {
        step: 1,
        title: 'Verifique se existe pedido de dinheiro adiantado',
        action: 'Se o pretenso contratante pedir depósito via M-Pesa para "liberar tarefas", "pagar taxa de uniforme" ou "ativar servidor VIP", bloqueie imediatamente.',
        warning: 'Nenhum empregador ou cliente sério cobra do profissional para que ele possa prestar o serviço.',
      },
      {
        step: 2,
        title: 'Analise a lógica de retorno financeiro',
        action: 'Pergunte-se: "Por que alguém pagaria 1.000 MT por dia para eu apenas curtir 3 vídeos?". Se a conta matemática não faz sentido econômico, é fraude montada para confiscar o seu saldo.',
      },
      {
        step: 3,
        title: 'Proteja seus dados sensíveis e credenciais',
        action: 'Nunca envie fotos do seu documento frente e verso em grupos abertos de WhatsApp ou Telegram sem saber o NUIT e razão social da empresa.',
      },
    ],
    readingTime: '6 min',
    riskLevel: 'Crítico',
    initialCost: '0 MZN',
    estimatedReturn: 'Prevenção de perdas financeiras e frustrações',
    requirements: ['Atenção e bom senso crítico'],
    tags: ['Segurança', 'Golpes', 'Anti-Fraude', 'Proteção'],
    publishedAt: '2025-02-01',
    isFeatured: true,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Se exigem que você "deposite dinheiro primeiro para ter direito a trabalhar", é 99% provável que seja golpe.',
      'Plataformas de "clique em vídeos e ganhe 1.000 MT por dia" não se sustentam e travam na hora do saque.',
      'Ninguém doa dinheiro na internet sem contrapartida de trabalho real ou valor comercial.'
    ],
    content: [
      'Infelizmente, a busca legítima por renda extra atrai golpistas que se aproveitam da necessidade das pessoas. Conhecer os padrões desses esquemas é a sua melhor blindagem.',
      'Erro 1 — Cair em esquemas de tarefas falsas ("Apps de Investimento"): Aplicativos piratas pedem depósitos via M-Pesa prometendo 30% a 50% de retorno em 24 horas curtindo vídeos ou fazendo avaliações fictícias. No início mostram saldo falso na tela, mas exigem taxas cada vez maiores quando você tenta sacar.',
      'Erro 2 — Pagar taxas para conseguir emprego ou vagas: Empresas sérias nunca cobram do candidato para liberar teste, fardamento ou contrato.',
      'Erro 3 — Pular de galho em galho sem dominar nada: Começar marketing de afiliados hoje, desistir em 3 dias para tentar criptomoedas, depois tentar dropshipping. Escolha uma única área e dedique-se por pelo menos 90 dias antes de julgar os resultados.',
      'Erro 4 — Gastar economia de emergência em cursos milagrosos: Quase todo conhecimento básico está disponível gratuitamente no YouTube e em guias abertos como o Renda Digital MZ. Só pague por cursos avançados quando já estiver ganhando seus primeiros rendimentos.'
    ]
  },
  {
    id: 'art-7',
    slug: 'como-receber-pagamentos-de-clientes-online-em-mocambique',
    title: 'Como receber pagamentos online e internacionais com segurança',
    category: 'guias',
    summary: 'Visão prática das soluções financeiras: M-Pesa, E-Mola, contas bancárias locais, cartões virtuais e carteiras globais.',
    image: ARTICLE_IMAGES.pagamentosSeguros,
    imageCaption: 'Ilustração: Métodos de recebimento - M-Pesa, transferências locais e carteiras internacionais (Payoneer).',
    instructionIntro: 'Instruções para configurar seus canais de cobrança e guardar comprovantes:',
    instructions: [
      {
        step: 1,
        title: 'Padronize seus dados de cobrança nacional',
        action: 'Tenha salvo um texto rápido com o número da sua carteira móvel (M-Pesa/E-Mola), nome completo e NUIT para enviar imediatamente assim que o serviço for aprovado.',
      },
      {
        step: 2,
        title: 'Exija e confirme o comprovativo oficial no aplicativo',
        action: 'Ao receber notificação de transferência de cliente nacional, abra o seu aplicativo oficial do banco ou M-Pesa para verificar se o saldo realmente entrou na sua conta.',
        warning: 'Golpistas às vezes enviam capturas de tela falsificadas ou SMS com remetente simulado. Apenas confie no extrato oficial do seu app!',
      },
      {
        step: 3,
        title: 'Para clientes estrangeiros, crie conta na Payoneer',
        action: 'A Payoneer fornece dados de conta bancária virtual nos EUA e Europa (Routing Number e Account Number) para receber pagamentos de empresas internacionais e plataformas como Upwork e Fiverr.',
      },
    ],
    readingTime: '7 min',
    riskLevel: 'Baixo',
    initialCost: '0 MZN para abrir contas básicas',
    estimatedReturn: 'Segurança e facilidade no recebimento',
    requirements: ['Documento de identificação (BI / Passaporte)', 'Telefone registrado'],
    tags: ['Pagamentos', 'M-Pesa', 'Finanças', 'Bancos'],
    publishedAt: '2025-02-05',
    isFeatured: false,
    author: 'Equipa Renda Digital MZ',
    keyTakeaways: [
      'Para clientes em Moçambique, M-Pesa e transferências bancárias com envio de comprovante bancário são a norma.',
      'Para clientes internacionais, carteiras como Payoneer e cartões virtuais autorizados permitem receber em USD/EUR.',
      'Guarde sempre os recibos e comprovativos de cada serviço prestado para controle pessoal.'
    ],
    content: [
      'Ter uma forma segura de receber o fruto do seu trabalho é fundamental para manter a motivação e a regularidade.',
      'Clientes Nacionais: Em Moçambique, a maioria dos clientes prefere a agilidade das carteiras móveis (M-Pesa da Vodacom, E-Mola da Movitel, mKesh da Tmcel) ou transferências interbancárias. Para serviços recorrentes, forneça dados claros com NUIT caso o cliente precise declarar o gasto.',
      'Clientes Internacionais: Quando prestar serviços para o Brasil, Portugal ou Angola, métodos tradicionais como PayPal podem ter restrições locais de saque direto. Alternativas muito utilizadas por freelancers africanos incluem a Payoneer (que fornece dados de conta receptora nos EUA/Europa) e plataformas com intermediação própria como Upwork ou Fiverr, que transferem diretamente para contas bancárias locais autorizadas.',
      'Segurança fundamental: Nunca compartilhe seus códigos PIN de carteira móvel ou códigos SMS recebidos com nenhum pretenso cliente. Se alguém pedir seu PIN para "aprovar uma transferência", recuse imediatamente!'
    ]
  }
];

export const INITIAL_TOOLS: ToolItem[] = [
  {
    id: 'tool-1',
    name: 'Canva',
    category: 'Design',
    description: 'Plataforma para criar posts de redes sociais, cartazes, panfletos, logotipos e propostas com milhares de modelos prontos.',
    isFree: true,
    priceNote: 'Versão gratuita muito completa; plano Pro opcional.',
    platform: 'Multiplataforma',
    dataUsageRating: 'Moderado',
    url: 'https://www.canva.com',
    pros: ['Fácil de usar mesmo sem experiência', 'App para celular leve e em português', 'Exporta em PNG e PDF para impressão'],
    bestFor: 'Design para redes sociais e apresentações comerciais'
  },
  {
    id: 'tool-2',
    name: 'Google Docs & Drive',
    category: 'Produtividade',
    description: 'Pacote de escritório na nuvem com 15 GB gratuitos para redigir artigos, montar tabelas orçamentárias e guardar trabalhos.',
    isFree: true,
    priceNote: '100% gratuito com conta Gmail.',
    platform: 'Multiplataforma',
    dataUsageRating: 'Mínimo (Leve)',
    url: 'https://drive.google.com',
    pros: ['Funciona offline no celular se configurado', 'Compartilhamento por link seguro', 'Salva automaticamente'],
    bestFor: 'Redatores, assistentes virtuais e propostas de orçamento'
  },
  {
    id: 'tool-3',
    name: 'WhatsApp Business',
    category: 'Comunicação',
    description: 'Versão comercial do WhatsApp com catálogo de produtos/serviços, mensagens automáticas e etiquetas organizadoras.',
    isFree: true,
    priceNote: 'Totalmente gratuito.',
    platform: 'Android',
    dataUsageRating: 'Mínimo (Leve)',
    url: 'https://www.whatsapp.com/business',
    pros: ['Mais de 90% dos clientes já usam no dia a dia', 'Catálogo direto sem precisar de site pago', 'Respostas rápidas para perguntas frequentes'],
    bestFor: 'Atendimento, vendas e negociação de serviços'
  },
  {
    id: 'tool-4',
    name: 'Trello',
    category: 'Gestão',
    description: 'Quadro visual simples no estilo Kanban para acompanhar prazos, encomendas e tarefas pendentes de clientes.',
    isFree: true,
    priceNote: 'Plano gratuito atende perfeitamente até 10 quadros.',
    platform: 'Multiplataforma',
    dataUsageRating: 'Mínimo (Leve)',
    url: 'https://trello.com',
    pros: ['Evita esquecer prazos de entrega', 'Organização visual simples', 'Funciona rápido no navegador mobile'],
    bestFor: 'Organização de tarefas diárias e projetos de clientes'
  },
  {
    id: 'tool-5',
    name: 'CapCut',
    category: 'Conteúdo',
    description: 'Editor de vídeo completo para smartphones, com legendas automáticas, transições e cortes precisos para vídeos curtos.',
    isFree: true,
    priceNote: 'Funções essenciais gratuitas sem marca d’água abusiva.',
    platform: 'Android',
    dataUsageRating: 'Moderado',
    url: 'https://www.capcut.com',
    pros: ['Legendas automáticas em português', 'Efeitos modernos e rápidos', 'Exportação em alta definição'],
    bestFor: 'Criadores de Reels, TikTok e anúncios de produtos'
  },
  {
    id: 'tool-6',
    name: 'DeepL Tradutor',
    category: 'Produtividade',
    description: 'Tradutor com altíssima precisão e naturalidade no vocabulário em português, superando tradutores genéricos.',
    isFree: true,
    priceNote: 'Gratuito no navegador para textos corriqueiros.',
    platform: 'Web',
    dataUsageRating: 'Mínimo (Leve)',
    url: 'https://www.deepl.com',
    pros: ['Tradução com tom profissional e idiomático', 'Interface ultra rápida e limpa', 'Suporta múltiplos idiomas'],
    bestFor: 'Trabalhos de tradução, leitura de artigos internacionais e e-mails'
  }
];

export const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Upwork — Mercado Global de Freelancers',
    type: 'Plataforma Freelance',
    description: 'Uma das maiores plataformas do mundo para conectar prestadores de serviços a clientes globais que pagam em dólares ou euros.',
    requirements: ['Inglês intermediário/avançado', 'Habilidade comprovada com exemplos', 'Perfil verificado com documento'],
    paymentMethods: ['Transferência bancária direta', 'Payoneer'],
    url: 'https://www.upwork.com',
    verified: true,
    difficulty: 'Intermediário',
    tips: 'Dedique tempo para preencher seu perfil de forma impecável e envie propostas focadas na dor do cliente, não apenas no seu currículo.'
  },
  {
    id: 'opp-2',
    title: 'Fiverr — Catálogo de Serviços sob Demanda',
    type: 'Plataforma Freelance',
    description: 'Permite criar "Gigs" (anúncios do seu serviço), como "Vou criar o logotipo da sua marca" ou "Vou transcrever 20 minutos de áudio".',
    requirements: ['Conta criada com e-mail', 'Descrição clara de entregáveis e prazos', 'Atenção às regras de comunicação dentro do site'],
    paymentMethods: ['Payoneer', 'Transferência bancária'],
    url: 'https://www.fiverr.com',
    verified: true,
    difficulty: 'Iniciante',
    tips: 'Comece com preços de entrada competitivos para obter as suas primeiras 5 avaliações 5 estrelas; depois aumente seus valores.'
  },
  {
    id: 'opp-3',
    title: 'ProBlogger & Grupos Especializados de Redação',
    type: 'Trabalho Remoto',
    description: 'Mural de vagas para escritores, revisores de conteúdo, redactores para sites e gestores de blogs em língua inglesa e portuguesa.',
    requirements: ['Excelente escrita e pontuação', 'Capacidade de cumprir prazos de entrega', 'Amostras de textos já redigidos'],
    paymentMethods: ['Transferência bancária', 'Carteiras digitais'],
    url: 'https://problogger.com/jobs/',
    verified: true,
    difficulty: 'Intermediário',
    tips: 'Leia atentamente as instruções de cada vaga antes de candidatar. Muitas pedem uma palavra-código no assunto para filtrar candidatos desatentos.'
  },
  {
    id: 'opp-4',
    title: 'Coursera & Google Career Certificates (Bolsas)',
    type: 'Capacitação Gratuita',
    description: 'Cursos oficiais do Google e de universidades de ponta com auxílio financeiro / bolsas de 100% para alunos que solicitarem.',
    requirements: ['Comprometimento de horas de estudo', 'Preenchimento do formulário de solicitação de auxílio financeiro'],
    paymentMethods: ['Gratuito com certificado após aprovação de auxílio'],
    url: 'https://www.coursera.org',
    verified: true,
    difficulty: 'Iniciante',
    tips: 'Ao se inscrever em um curso profissionalizante, clique em "Auxílio financeiro disponível" para solicitar isenção da taxa do certificado.'
  }
];

export const INITIAL_GUIDES: Guide[] = [
  {
    id: 'guide-1',
    slug: 'guia-passo-a-passo-primeiro-cliente',
    title: 'Passo a Passo: Como conquistar o seu 1º cliente pagante em 14 dias',
    category: 'Freelance',
    timeNeeded: '2 semanas (1h/dia)',
    difficulty: 'Fácil',
    summary: 'Roteiro prático sem enrolação para transformar uma habilidade básica num primeiro contrato de serviço real.',
    checklist: [
      'Definir 1 única habilidade inicial',
      'Criar 2 amostras no Canva ou Google Docs',
      'Montar catálogo no WhatsApp Business',
      'Mapear 15 negócios do seu bairro ou cidade',
      'Enviar mensagens personalizadas com proposta'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Escolha um serviço com entrega rápida',
        description: 'Não tente vender contratos de 6 meses no primeiro dia. Escolha algo direto: "Criar 5 artes promocionais para o WhatsApp", "Escrever 3 descrições de produtos", ou "Configurar um catálogo comercial".',
        tip: 'Quanto menor a complexidade inicial, menor a hesitação do cliente.'
      },
      {
        stepNumber: 2,
        title: 'Crie amostras sem esperar permissão',
        description: 'Selecione um comércio real (ex: uma confeitaria ou barbearia da sua zona) e crie uma publicação melhorada como demonstração do seu padrão de trabalho.',
        tip: 'Salve em formato de imagem nítida no celular para poder enviar de imediato quando conversar.'
      },
      {
        stepNumber: 3,
        title: 'Abordagem respeitosa e de valor',
        description: 'Entre em contato pelo WhatsApp comercial do dono ou envie mensagem no Instagram. Apresente-se com nome, elogie o trabalho dele e envie a amostra sem cobrar nada pela prévia: "Fiz esta arte como ideia para o vosso cardápio de sexta-feira. Se gostarem, podemos fazer um pacote semanal bem acessível!".',
        warning: 'Nunca critique de forma grosseira o perfil atual do cliente. Aponte sempre oportunidades de melhoria de forma elegante.'
      },
      {
        stepNumber: 4,
        title: 'Feche o acordo com segurança',
        description: 'Ao receber o interesse, defina os valores, quantas revisões estão inclusas e o prazo de entrega (ex: 48 horas). Solicite 50% de entrada para dar início.',
        tip: 'Envie um resumo escrito no chat confirmando tudo o que foi acordado para evitar mal-entendidos.'
      }
    ]
  },
  {
    id: 'guide-2',
    slug: 'como-proteger-se-de-esquemas-e-piramides',
    title: 'Checklist Anti-Golpes: Como saber se uma oportunidade é segura',
    category: 'Iniciante',
    timeNeeded: '10 minutos',
    difficulty: 'Fácil',
    summary: 'Aprenda a analisar qualquer oferta na internet com 5 perguntas eliminatórias antes de perder dinheiro ou dados.',
    checklist: [
      'Verificar se pedem pagamento adiantado para trabalhar',
      'Verificar se o foco é recrutar novas pessoas',
      'Checar se o retorno prometido é anormalmente alto (ex: 20% ao dia)',
      'Pesquisar se a empresa possui sede ou dados verificáveis',
      'Desconfiar de grupos fechados com comprovantes de depósitos duvidosos'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Analise de onde vem o dinheiro',
        description: 'Em qualquer trabalho legítimo, o dinheiro vem de um cliente que pagou por um produto ou serviço real. Se o dinheiro só vem de novos participantes que depositam taxas, trata-se de pirâmide financeira.',
        warning: 'Pirâmides sempre quebram e os últimos participantes perdem tudo.'
      },
      {
        stepNumber: 2,
        title: 'Cuidado com promessas de "lucro garantido sem esforço"',
        description: 'Não existe investimento ou trabalho que garanta lucros astronômicos diários sem risco. Propostas de "ganhe 2.000 MT por dia assistindo a 5 minutos de anúncios" usam scripts que bloqueiam a conta assim que a vítima tenta sacar.',
        tip: 'Lembre-se: se fosse tão fácil e garantido, o próprio dono do aplicativo não precisaria pedir depósitos para ninguém.'
      },
      {
        stepNumber: 3,
        title: 'Nunca pague para receber o seu próprio salário',
        description: 'Golpistas dizem: "O seu saldo é de 15.000 MT, mas precisa pagar 1.500 MT de taxa de desbloqueio de conta". Esta taxa é o golpe final. Nenhum banco ou plataforma séria cobra depósito prévio para liberar saldo de trabalho.',
        warning: 'Assim que você pagar a taxa de desbloqueio, os golpistas sumirão e bloquearão o seu número.'
      }
    ]
  }
];
