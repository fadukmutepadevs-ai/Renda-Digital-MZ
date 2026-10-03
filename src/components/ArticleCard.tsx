import React from 'react';
import { Article } from '../types';
import { Clock, ShieldCheck, AlertTriangle, ArrowRight, Bookmark, Tag, CheckCircle2 } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onOpenArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  dataSaver: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onOpenArticle,
  isBookmarked,
  onToggleBookmark,
  dataSaver,
}) => {
  const [imgError, setImgError] = React.useState(false);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'renda-extra':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'trabalho-online':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ferramentas':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'negocios-digitais':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'dicas':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'guias':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Baixo':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Médio':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-rose-700 bg-rose-50 border-rose-200';
    }
  };

  return (
    <article className="bg-white rounded-xl border border-stone-200 hover:border-teal-400 overflow-hidden transition duration-150 flex flex-col justify-between shadow-xs hover:shadow-sm group">
      <div>
        {/* Static Lightweight Image Banner */}
        <div
          onClick={() => onOpenArticle(article)}
          className="relative w-full aspect-[16/9] bg-gradient-to-br from-stone-900 to-teal-950 overflow-hidden cursor-pointer"
        >
          {!imgError ? (
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <span className="text-teal-400 font-extrabold text-sm mb-1">Renda Digital MZ</span>
              <span className="text-white font-bold text-xs line-clamp-1">{article.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

          {/* Category Pill over Image */}
          <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5 flex-wrap gap-1">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs ${getCategoryBadge(
                article.category
              )}`}
            >
              {article.category.replace('-', ' ')}
            </span>
            {article.isFeatured && (
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-800 text-white shadow-xs">
                Destaque
              </span>
            )}
          </div>

          {/* Bookmark button over image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article.id);
            }}
            className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition cursor-pointer shadow-xs ${
              isBookmarked
                ? 'bg-teal-600 text-white'
                : 'bg-stone-900/70 text-stone-200 hover:bg-stone-900'
            }`}
            title={isBookmarked ? 'Salvo para ler offline' : 'Salvar artigo offline'}
            aria-label="Salvar artigo"
          >
            <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>

          {/* Reading time badge over image */}
          <div className="absolute bottom-2 right-2.5 bg-stone-950/80 text-stone-200 px-2 py-0.5 rounded text-[10px] font-medium flex items-center">
            <Clock className="w-3 h-3 mr-1 text-teal-400" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <h3
            onClick={() => onOpenArticle(article)}
            className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-teal-700 cursor-pointer tracking-tight leading-snug mb-2 transition"
          >
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3.5 line-clamp-2">
            {article.summary}
          </p>

          {/* Instruction Steps Pill Count */}
          {article.instructions && article.instructions.length > 0 && (
            <div className="mb-3.5 flex items-center space-x-1.5 text-[11px] text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Contém roteiro de {article.instructions.length} passos práticos</span>
            </div>
          )}

          {/* Realism Breakdown Box */}
          <div className="bg-stone-50 rounded-lg p-2.5 mb-2 border border-stone-100 text-[11px] space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-stone-500 font-medium">Nível de Risco:</span>
              <span
                className={`font-semibold px-1.5 py-0.5 rounded border text-[10px] flex items-center space-x-1 ${getRiskColor(
                  article.riskLevel
                )}`}
              >
                {article.riskLevel === 'Baixo' ? (
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                )}
                <span>Risco {article.riskLevel}</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-stone-500 font-medium">Custo Inicial:</span>
              <span className="font-semibold text-stone-800">{article.initialCost}</span>
            </div>

            {article.estimatedReturn && (
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-medium">Potencial Estimado:</span>
                <span className="font-semibold text-emerald-800 text-right">{article.estimatedReturn}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-[11px] text-stone-500 truncate max-w-[60%]">
          <Tag className="w-3 h-3 shrink-0" />
          <span className="truncate">{article.tags.slice(0, 2).join(', ')}</span>
        </div>

        <button
          onClick={() => onOpenArticle(article)}
          className="inline-flex items-center space-x-1 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer active:translate-x-0.5 transition"
        >
          <span>Instruções & Artigo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
