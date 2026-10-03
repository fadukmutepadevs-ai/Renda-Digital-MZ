import { Article, ToolItem, Opportunity, Guide, CategoryId } from '../types';
import { INITIAL_ARTICLES, INITIAL_TOOLS, INITIAL_OPPORTUNITIES, INITIAL_GUIDES } from '../data/initialData';

const CACHE_KEYS = {
  ARTICLES: 'renda_mz_articles_v3',
  TOOLS: 'renda_mz_tools_v1',
  OPPORTUNITIES: 'renda_mz_opps_v1',
  GUIDES: 'renda_mz_guides_v1',
  BOOKMARKS: 'renda_mz_bookmarks_v1',
  DATA_SAVER: 'renda_mz_data_saver',
  API_CONFIG: 'renda_mz_api_config',
};

export interface ApiConfig {
  baseUrl: string;
  useLiveApi: boolean;
  status: 'offline' | 'connected' | 'error';
  lastSync?: string;
}

// Default config: offline mode with zero network delays for ultra-fast performance
const DEFAULT_CONFIG: ApiConfig = {
  baseUrl: (import.meta as any).env?.VITE_API_BASE_URL || '',
  useLiveApi: false,
  status: 'offline',
};

class ApiService {
  private config: ApiConfig;

  constructor() {
    this.config = this.loadConfig();
    this.bootstrapCache();
  }

  private loadConfig(): ApiConfig {
    try {
      const stored = localStorage.getItem(CACHE_KEYS.API_CONFIG);
      return stored ? { ...DEFAULT_CONFIG, ...JSON.parse(stored) } : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  }

  public saveConfig(config: Partial<ApiConfig>): ApiConfig {
    this.config = { ...this.config, ...config };
    try {
      localStorage.setItem(CACHE_KEYS.API_CONFIG, JSON.stringify(this.config));
    } catch (e) {
      console.warn('Falha ao salvar configuração da API:', e);
    }
    return this.config;
  }

  public getConfig(): ApiConfig {
    return this.config;
  }

  // Pre-seed localStorage on first visit for zero-latency subsequent loads
  private bootstrapCache(): void {
    try {
      if (!localStorage.getItem(CACHE_KEYS.ARTICLES)) {
        localStorage.setItem(CACHE_KEYS.ARTICLES, JSON.stringify(INITIAL_ARTICLES));
      }
      if (!localStorage.getItem(CACHE_KEYS.TOOLS)) {
        localStorage.setItem(CACHE_KEYS.TOOLS, JSON.stringify(INITIAL_TOOLS));
      }
      if (!localStorage.getItem(CACHE_KEYS.OPPORTUNITIES)) {
        localStorage.setItem(CACHE_KEYS.OPPORTUNITIES, JSON.stringify(INITIAL_OPPORTUNITIES));
      }
      if (!localStorage.getItem(CACHE_KEYS.GUIDES)) {
        localStorage.setItem(CACHE_KEYS.GUIDES, JSON.stringify(INITIAL_GUIDES));
      }
    } catch (e) {
      console.warn('LocalStorage indisponível para cache inicial:', e);
    }
  }

  // ==========================================
  // ARTIGOS
  // ==========================================
  public async getArticles(category?: CategoryId, search?: string): Promise<Article[]> {
    let articles: Article[] = [];

    // Se estiver conectado a uma API Laravel real:
    if (this.config.useLiveApi && this.config.baseUrl) {
      try {
        const url = new URL(`${this.config.baseUrl}/api/v1/articles`);
        if (category && category !== 'todos') url.searchParams.append('category', category);
        if (search) url.searchParams.append('q', search);

        const res = await fetch(url.toString(), {
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          const json = await res.json();
          articles = json.data || json;
          // Atualiza o cache local para uso offline
          localStorage.setItem(CACHE_KEYS.ARTICLES, JSON.stringify(articles));
          return articles;
        }
      } catch (err) {
        console.warn('Erro na requisição da API Laravel, usando cache offline:', err);
      }
    }

    // Leitura ultra-rápida do cache local (Instantâneo)
    try {
      const cached = localStorage.getItem(CACHE_KEYS.ARTICLES);
      articles = cached ? JSON.parse(cached) : INITIAL_ARTICLES;
    } catch {
      articles = INITIAL_ARTICLES;
    }

    if (category && category !== 'todos') {
      articles = articles.filter((a) => a.category === category);
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return articles;
  }

  public async getArticleBySlug(slug: string): Promise<Article | null> {
    const articles = await this.getArticles();
    return articles.find((a) => a.slug === slug) || null;
  }

  // ==========================================
  // FERRAMENTAS
  // ==========================================
  public async getTools(category?: string): Promise<ToolItem[]> {
    if (this.config.useLiveApi && this.config.baseUrl) {
      try {
        const url = new URL(`${this.config.baseUrl}/api/v1/tools`);
        if (category) url.searchParams.append('category', category);
        const res = await fetch(url.toString(), {
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          const json = await res.json();
          const tools = json.data || json;
          localStorage.setItem(CACHE_KEYS.TOOLS, JSON.stringify(tools));
          return tools;
        }
      } catch (err) {
        console.warn('Falha na API de ferramentas, usando dados em cache:', err);
      }
    }

    try {
      const cached = localStorage.getItem(CACHE_KEYS.TOOLS);
      const tools: ToolItem[] = cached ? JSON.parse(cached) : INITIAL_TOOLS;
      if (category && category !== 'Todos') {
        return tools.filter((t) => t.category === category);
      }
      return tools;
    } catch {
      return INITIAL_TOOLS;
    }
  }

  // ==========================================
  // OPORTUNIDADES
  // ==========================================
  public async getOpportunities(type?: string): Promise<Opportunity[]> {
    if (this.config.useLiveApi && this.config.baseUrl) {
      try {
        const url = new URL(`${this.config.baseUrl}/api/v1/opportunities`);
        if (type) url.searchParams.append('type', type);
        const res = await fetch(url.toString(), {
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          const json = await res.json();
          const opps = json.data || json;
          localStorage.setItem(CACHE_KEYS.OPPORTUNITIES, JSON.stringify(opps));
          return opps;
        }
      } catch (err) {
        console.warn('Falha na API de oportunidades, usando dados locais:', err);
      }
    }

    try {
      const cached = localStorage.getItem(CACHE_KEYS.OPPORTUNITIES);
      const opps: Opportunity[] = cached ? JSON.parse(cached) : INITIAL_OPPORTUNITIES;
      if (type && type !== 'Todos') {
        return opps.filter((o) => o.type === type);
      }
      return opps;
    } catch {
      return INITIAL_OPPORTUNITIES;
    }
  }

  // ==========================================
  // GUIAS
  // ==========================================
  public async getGuides(): Promise<Guide[]> {
    try {
      const cached = localStorage.getItem(CACHE_KEYS.GUIDES);
      return cached ? JSON.parse(cached) : INITIAL_GUIDES;
    } catch {
      return INITIAL_GUIDES;
    }
  }

  public async getGuideBySlug(slug: string): Promise<Guide | null> {
    const guides = await this.getGuides();
    return guides.find((g) => g.slug === slug) || null;
  }

  // ==========================================
  // FAVORITOS / LEITURA OFFLINE
  // ==========================================
  public getBookmarks(): string[] {
    try {
      const stored = localStorage.getItem(CACHE_KEYS.BOOKMARKS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  public toggleBookmark(articleId: string): boolean {
    try {
      const current = this.getBookmarks();
      const exists = current.includes(articleId);
      const updated = exists ? current.filter((id) => id !== articleId) : [...current, articleId];
      localStorage.setItem(CACHE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return !exists;
    } catch {
      return false;
    }
  }

  // ==========================================
  // MODO POUPANÇA DE DADOS (DATA SAVER)
  // ==========================================
  public isDataSaverEnabled(): boolean {
    try {
      return localStorage.getItem(CACHE_KEYS.DATA_SAVER) === 'true';
    } catch {
      return false;
    }
  }

  public setDataSaver(enabled: boolean): void {
    try {
      localStorage.setItem(CACHE_KEYS.DATA_SAVER, enabled ? 'true' : 'false');
    } catch (e) {
      console.warn('Erro ao salvar preferência de poupança de dados:', e);
    }
  }

  // ==========================================
  // RESET / REBOOT LOCAL DATA (PARA TESTES)
  // ==========================================
  public resetToDefault(): void {
    try {
      localStorage.setItem(CACHE_KEYS.ARTICLES, JSON.stringify(INITIAL_ARTICLES));
      localStorage.setItem(CACHE_KEYS.TOOLS, JSON.stringify(INITIAL_TOOLS));
      localStorage.setItem(CACHE_KEYS.OPPORTUNITIES, JSON.stringify(INITIAL_OPPORTUNITIES));
      localStorage.setItem(CACHE_KEYS.GUIDES, JSON.stringify(INITIAL_GUIDES));
    } catch (e) {
      console.error('Erro ao reiniciar dados:', e);
    }
  }
}

export const api = new ApiService();
