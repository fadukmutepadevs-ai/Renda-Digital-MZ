export type CategoryId =
  | 'todos'
  | 'renda-extra'
  | 'trabalho-online'
  | 'ferramentas'
  | 'negocios-digitais'
  | 'dicas'
  | 'oportunidades'
  | 'guias';

export interface ArticleInstructionStep {
  step: number;
  title: string;
  action: string;
  tip?: string;
  warning?: string;
  templateText?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: Exclude<CategoryId, 'todos'>;
  summary: string;
  image: string;
  imageCaption: string;
  instructionIntro: string;
  instructions: ArticleInstructionStep[];
  content: string[];
  readingTime: string;
  riskLevel: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  initialCost: string;
  estimatedReturn: string;
  requirements: string[];
  tags: string[];
  publishedAt: string;
  isFeatured?: boolean;
  author: string;
  keyTakeaways: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Design' | 'Produtividade' | 'Comunicação' | 'Gestão' | 'Conteúdo' | 'Finanças';
  description: string;
  isFree: boolean;
  priceNote: string;
  platform: 'Web' | 'Android' | 'Desktop' | 'Multiplataforma';
  dataUsageRating: 'Mínimo (Leve)' | 'Moderado' | 'Alto';
  url: string;
  pros: string[];
  bestFor: string;
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'Plataforma Freelance' | 'Trabalho Remoto' | 'Programa Legítimo' | 'Capacitação Gratuita' | 'Microtarefas';
  description: string;
  requirements: string[];
  paymentMethods: string[];
  url: string;
  verified: boolean;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  tips: string;
}

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  warning?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: 'Iniciante' | 'Freelance' | 'Negócios' | 'Finanças';
  timeNeeded: string;
  difficulty: 'Fácil' | 'Médio' | 'Desafiador';
  summary: string;
  steps: GuideStep[];
  checklist: string[];
}

export interface FilterState {
  category: CategoryId;
  searchQuery: string;
  riskFilter: 'todos' | 'Baixo' | 'Médio' | 'Alto';
  onlyFree: boolean;
}
