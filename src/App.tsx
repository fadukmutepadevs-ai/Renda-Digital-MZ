import React, { useState, useEffect, useMemo } from 'react';
import { CategoryId, Article, ToolItem, Opportunity, Guide } from './types';
import { api } from './services/api';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { ToolsSection } from './components/ToolsSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { GuidesSection } from './components/GuidesSection';
import { IncomeSimulator } from './components/IncomeSimulator';
import { ScamDetector } from './components/ScamDetector';
import { LaravelConfigModal } from './components/LaravelConfigModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import {
  Sparkles,
  Search,
  Filter,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Wrench,
  Award,
  Zap,
} from 'lucide-react';

export default function App() {
  // Navigation & View state
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [riskFilter, setRiskFilter] = useState<'todos' | 'Baixo' | 'Médio' | 'Alto'>('todos');

  // Modals & Interactive Tools state
  const [showSimulator, setShowSimulator] = useState<boolean>(false);
  const [showScamDetector, setShowScamDetector] = useState<boolean>(false);
  const [showLaravelModal, setShowLaravelModal] = useState<boolean>(false);
  const [showSavedModal, setShowSavedModal] = useState<boolean>(false);

  // Data & Cache state
  const [articles, setArticles] = useState<Article[]>([]);
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [dataSaver, setDataSaver] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize data on mount (instant from memory/localStorage)
  const loadPortalData = async () => {
    try {
      const [arts, tls, opps, gds] = await Promise.all([
        api.getArticles(),
        api.getTools(),
        api.getOpportunities(),
        api.getGuides(),
      ]);
      setArticles(arts);
      setTools(tls);
      setOpportunities(opps);
      setGuides(gds);
      setBookmarks(api.getBookmarks());
      setDataSaver(api.isDataSaverEnabled());
    } catch (e) {
      console.warn('Erro ao carregar dados:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortalData();

    // Support browser hash routing for deep-linking
    const handleHashChange = async () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('artigo/')) {
        const slug = hash.replace('artigo/', '');
        const art = await api.getArticleBySlug(slug);
        if (art) {
          setSelectedArticle(art);
          return;
        }
      } else if (
        [
          'renda-extra',
          'trabalho-online',
          'ferramentas',
          'negocios-digitais',
          'dicas',
          'oportunidades',
          'guias',
        ].includes(hash)
      ) {
        setActiveCategory(hash as CategoryId);
        setSelectedArticle(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when selecting an article or category
  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
    window.location.hash = `artigo/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromArticle = () => {
    setSelectedArticle(null);
    window.location.hash = activeCategory === 'todos' ? '' : activeCategory;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: CategoryId) => {
    setActiveCategory(cat);
    setSelectedArticle(null);
    window.location.hash = cat === 'todos' ? '' : cat;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (id: string) => {
    api.toggleBookmark(id);
    setBookmarks(api.getBookmarks());
  };

  const handleToggleDataSaver = () => {
    const nextState = !dataSaver;
    setDataSaver(nextState);
    api.setDataSaver(nextState);
  };

  // Article count breakdown by category
  const articlesCountByCategory = useMemo(() => {
    const counts: Record<string, number> = { todos: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    let result = articles;

    if (activeCategory !== 'todos' && activeCategory !== 'ferramentas' && activeCategory !== 'oportunidades' && activeCategory !== 'guias') {
      result = result.filter((a) => a.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (riskFilter !== 'todos') {
      result = result.filter((a) => a.riskLevel === riskFilter);
    }

    return result;
  }, [articles, activeCategory, searchQuery, riskFilter]);

  return (
    <div className={`min-h-screen flex flex-col font-sans ${dataSaver ? 'data-saver-mode' : ''}`}>
      {/* Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        dataSaver={dataSaver}
        onToggleDataSaver={handleToggleDataSaver}
        savedCount={bookmarks.length}
        onOpenSaved={() => setShowSavedModal(true)}
        onOpenLaravelModal={() => setShowLaravelModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-8">
        {selectedArticle ? (
          /* Single Article Reader View */
          <ArticleView
            article={selectedArticle}
            onBack={handleBackFromArticle}
            isBookmarked={bookmarks.includes(selectedArticle.id)}
            onToggleBookmark={handleToggleBookmark}
            onSelectArticle={handleOpenArticle}
            allArticles={articles}
          />
        ) : (
          /* Portal Feed / Section View */
          <div>
            {/* Show Hero only when in 'todos' without search */}
            {activeCategory === 'todos' && !searchQuery && (
              <Hero
                onExploreOpportunities={() => {
                  setActiveCategory('oportunidades');
                  window.location.hash = 'oportunidades';
                }}
                onViewTips={() => {
                  setActiveCategory('dicas');
                  window.location.hash = 'dicas';
                }}
                onOpenSimulator={() => setShowSimulator(true)}
                onOpenScamDetector={() => setShowScamDetector(true)}
                dataSaver={dataSaver}
              />
            )}

            {/* Category Navigation Bar */}
            <CategoryNav
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
              articlesCountByCategory={articlesCountByCategory}
            />

            <div className="max-w-6xl mx-auto px-4 py-6">
              {/* Optional Active Interactive Tools inside the page */}
              {showSimulator && (
                <div className="mb-8">
                  <IncomeSimulator onClose={() => setShowSimulator(false)} />
                </div>
              )}

              {showScamDetector && (
                <div className="mb-8">
                  <ScamDetector onClose={() => setShowScamDetector(false)} />
                </div>
              )}

              {/* SECTION: FERRAMENTAS */}
              {activeCategory === 'ferramentas' && (
                <ToolsSection tools={tools} />
              )}

              {/* SECTION: OPORTUNIDADES */}
              {activeCategory === 'oportunidades' && (
                <OpportunitiesSection opportunities={opportunities} />
              )}

              {/* SECTION: GUIAS */}
              {activeCategory === 'guias' && (
                <GuidesSection guides={guides} />
              )}

              {/* SECTION: ARTICLES (Início, Renda Extra, Trabalho Online, Negócios Digitais, Dicas) */}
              {activeCategory !== 'ferramentas' &&
                activeCategory !== 'oportunidades' &&
                activeCategory !== 'guias' && (
                  <div>
                    {/* Header of the list with search and risk filters */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center space-x-2">
                          <span>
                            {activeCategory === 'todos'
                              ? 'Artigos em Destaque & Guias'
                              : activeCategory === 'renda-extra'
                              ? 'Renda Extra Realista'
                              : activeCategory === 'trabalho-online'
                              ? 'Trabalho Online & Freelance'
                              : activeCategory === 'negocios-digitais'
                              ? 'Negócios Digitais & E-commerce'
                              : 'Dicas Práticas & Prevenção'}
                          </span>
                          <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                            {filteredArticles.length}
                          </span>
                        </h2>
                        <p className="text-xs text-stone-600 mt-0.5">
                          Orientações passo a passo focadas na realidade prática de Moçambique.
                        </p>
                      </div>

                      {/* Filters */}
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-stone-500 font-medium hidden sm:inline">Filtrar Risco:</span>
                        <div className="flex rounded-lg border border-stone-200 bg-white p-0.5">
                          {(['todos', 'Baixo', 'Médio'] as const).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => setRiskFilter(lvl)}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                                riskFilter === lvl
                                  ? 'bg-teal-700 text-white shadow-2xs'
                                  : 'text-stone-600 hover:text-stone-900'
                              }`}
                            >
                              {lvl === 'todos' ? 'Todos' : lvl}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Articles Grid */}
                    {filteredArticles.length === 0 ? (
                      <div className="bg-white rounded-xl border border-stone-200 p-8 text-center text-stone-500">
                        <Search className="w-8 h-8 mx-auto text-stone-400 mb-2" />
                        <p className="text-sm font-bold text-stone-800">
                          Nenhum artigo encontrado para a pesquisa.
                        </p>
                        <p className="text-xs text-stone-400 mt-1">
                          Tente termos como "freelancer", "renda", "canva", "m-pesa" ou limpe a busca.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setRiskFilter('todos');
                          }}
                          className="mt-3 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold cursor-pointer"
                        >
                          Limpar Filtros
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredArticles.map((article) => (
                          <ArticleCard
                            key={article.id}
                            article={article}
                            onOpenArticle={handleOpenArticle}
                            isBookmarked={bookmarks.includes(article.id)}
                            onToggleBookmark={handleToggleBookmark}
                            dataSaver={dataSaver}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

              {/* Quick Jump / Showcase blocks on the 'todos' home screen */}
              {activeCategory === 'todos' && !searchQuery && (
                <div className="mt-12 space-y-12">
                  {/* Two Banner CTA Cards for Simulator & Anti-Scam */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => setShowSimulator(true)}
                      className="bg-gradient-to-r from-teal-900 to-teal-800 text-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition border border-teal-700 flex items-start justify-between gap-4 group"
                    >
                      <div>
                        <div className="flex items-center space-x-1.5 text-teal-300 text-xs font-bold uppercase mb-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Ferramenta Interativa</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold group-hover:text-teal-200 transition">
                          Simular Potencial de Ganhos em Meticais
                        </h3>
                        <p className="text-xs text-teal-100/90 mt-1 leading-relaxed">
                          Descubra quanto pode render seu tempo livre baseado em valores reais praticados no mercado.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-teal-700/80 flex items-center justify-center shrink-0 mt-1 group-hover:translate-x-1 transition">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div
                      onClick={() => setShowScamDetector(true)}
                      className="bg-gradient-to-r from-stone-900 to-rose-950 text-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition border border-rose-900/50 flex items-start justify-between gap-4 group"
                    >
                      <div>
                        <div className="flex items-center space-x-1.5 text-rose-300 text-xs font-bold uppercase mb-1">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Segurança & Blindagem</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold group-hover:text-rose-200 transition">
                          Detector Rápido de Golpes Online
                        </h3>
                        <p className="text-xs text-rose-100/90 mt-1 leading-relaxed">
                          Faça o teste de 5 perguntas e saiba na hora se uma proposta ou aplicativo é pirâmide financeira.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-rose-900/80 flex items-center justify-center shrink-0 mt-1 group-hover:translate-x-1 transition">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Quick Tools Showcase */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-black text-stone-900">
                          Ferramentas Gratuitas Recomendadas
                        </h3>
                        <p className="text-xs text-stone-500">
                          Economize dinheiro usando aplicativos sem custos de licença
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelectCategory('ferramentas')}
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Ver todas ({tools.length})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tools.slice(0, 3).map((tool) => (
                        <div
                          key={tool.id}
                          className="bg-white p-4 rounded-xl border border-stone-200 hover:border-teal-400 transition"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-bold text-sm text-stone-900">{tool.name}</h4>
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                              Grátis
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 line-clamp-2 mb-2">
                            {tool.description}
                          </p>
                          <span className="text-[11px] text-teal-700 font-semibold block">
                            Ideal para: {tool.bestFor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities Showcase */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-black text-stone-900">
                          Plataformas & Vagas Verificadas
                        </h3>
                        <p className="text-xs text-stone-500">
                          Onde encontrar clientes internacionais e formação gratuita
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelectCategory('oportunidades')}
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Ver todas ({opportunities.length})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {opportunities.slice(0, 2).map((opp) => (
                        <div
                          key={opp.id}
                          className="bg-white p-4 rounded-xl border border-stone-200 hover:border-teal-400 transition flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[10px] font-bold uppercase text-teal-700">
                              {opp.type}
                            </span>
                            <h4 className="font-bold text-sm text-stone-900 mt-0.5">
                              {opp.title}
                            </h4>
                            <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                              {opp.description}
                            </p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-stone-500">
                              Nível: <strong className="text-stone-700">{opp.difficulty}</strong>
                            </span>
                            <button
                              onClick={() => handleSelectCategory('oportunidades')}
                              className="text-teal-700 font-bold hover:underline"
                            >
                              Saiba como se cadastrar →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <SavedArticlesModal
        isOpen={showSavedModal}
        onClose={() => setShowSavedModal(false)}
        articles={articles}
        savedIds={bookmarks}
        onOpenArticle={handleOpenArticle}
        onRemoveSaved={handleToggleBookmark}
      />

      {showLaravelModal && (
        <LaravelConfigModal
          onClose={() => setShowLaravelModal(false)}
          onRefreshData={loadPortalData}
        />
      )}

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenLaravelModal={() => setShowLaravelModal(true)}
      />

      {/* Mobile Sticky Thumb Navigation */}
      <MobileBottomNav
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
