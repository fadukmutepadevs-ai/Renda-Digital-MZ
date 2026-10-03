import React, { useState } from 'react';
import { Article } from '../types';
import {
  ArrowLeft,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Bookmark,
  Share2,
  CheckCircle2,
  Info,
  Calendar,
  User,
  Check,
  Printer,
  Copy,
  Lightbulb,
  ListOrdered,
  FileText,
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle,
  allArticles,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedTemplateIdx, setCopiedTemplateIdx] = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);

  const handleShare = () => {
    const text = `${article.title} - Renda Digital MZ: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const handleCopyTemplate = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplateIdx(idx);
    setTimeout(() => setCopiedTemplateIdx(null), 2500);
  };

  const related = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Top navigation actions */}
      <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-stone-200">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-stone-700 hover:text-teal-700 bg-white border border-stone-200 hover:border-teal-400 px-3 py-1.5 rounded-lg transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para artigos</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
              isBookmarked
                ? 'bg-teal-50 border-teal-300 text-teal-800 font-semibold'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline">{isBookmarked ? 'Salvo offline' : 'Guardar offline'}</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-1 text-xs px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition cursor-pointer"
            title="Compartilhar"
          >
            {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedShare ? 'Copiado!' : 'Compartilhar'}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center space-x-1 text-xs px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 transition cursor-pointer"
            title="Imprimir ou Salvar PDF"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-6">
        <div className="flex items-center space-x-2 text-xs text-stone-500 mb-2">
          <span className="font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            {article.category.replace('-', ' ')}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {article.readingTime} de leitura
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {article.publishedAt}
          </span>
        </div>

        <h1 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          {article.summary}
        </p>
      </header>

      {/* 1. STATIC LIGHTWEIGHT IMAGE (Explicitly required by user prompt) */}
      <div className="mb-6">
        <div className="rounded-xl overflow-hidden border border-stone-300 shadow-xs bg-gradient-to-br from-stone-900 to-teal-950 aspect-[16/9] w-full relative">
          {!imgError ? (
            <img
              src={article.image}
              alt={article.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <span className="text-teal-400 font-extrabold text-base mb-1">Renda Digital MZ</span>
              <span className="text-white font-bold text-sm">{article.title}</span>
            </div>
          )}
        </div>
        {article.imageCaption && (
          <p className="text-[11px] text-stone-500 mt-2 text-center italic font-normal">
            {article.imageCaption}
          </p>
        )}
      </div>

      {/* 2. TEXTO DA INSTRUÇÃO DO ARTIGO (Immediately following image) */}
      {article.instructions && article.instructions.length > 0 && (
        <section className="bg-white rounded-xl border border-teal-200 p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-1.5 rounded-lg bg-teal-100 text-teal-800">
              <ListOrdered className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
              Instruções Práticas Passo a Passo
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
            {article.instructionIntro || 'Siga atentamente as instruções abaixo para colocar este método em prática com segurança:'}
          </p>

          <div className="space-y-4">
            {article.instructions.map((inst, idx) => (
              <div
                key={inst.step}
                className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs sm:text-sm relative pl-12 sm:pl-14"
              >
                {/* Step badge */}
                <div className="absolute left-3.5 sm:left-4 top-4 w-7 h-7 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {inst.step}
                </div>

                <h3 className="font-bold text-stone-900 text-sm mb-1.5">
                  {inst.title}
                </h3>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-2.5">
                  {inst.action}
                </p>

                {/* Optional Template Message to copy */}
                {inst.templateText && (
                  <div className="bg-white rounded-lg p-3 border border-stone-300 my-2.5">
                    <div className="flex items-center justify-between mb-1.5 text-[11px]">
                      <span className="font-bold text-stone-700 flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5 text-teal-600" />
                        <span>Modelo de Mensagem Pronto para Usar:</span>
                      </span>
                      <button
                        onClick={() => handleCopyTemplate(inst.templateText!, idx)}
                        className="inline-flex items-center space-x-1 text-teal-700 hover:text-teal-900 font-bold cursor-pointer"
                      >
                        {copiedTemplateIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>
                    <blockquote className="text-[11px] sm:text-xs text-stone-600 italic bg-stone-50 p-2.5 rounded border border-stone-200">
                      "{inst.templateText}"
                    </blockquote>
                  </div>
                )}

                {/* Practical Tip */}
                {inst.tip && (
                  <div className="flex items-start space-x-1.5 text-[11px] sm:text-xs text-teal-900 bg-teal-50/80 p-2 rounded-lg border border-teal-100 mt-2">
                    <Lightbulb className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold">Dica de Sucesso:</strong> {inst.tip}
                    </span>
                  </div>
                )}

                {/* Safety Warning */}
                {inst.warning && (
                  <div className="flex items-start space-x-1.5 text-[11px] sm:text-xs text-rose-900 bg-rose-50 p-2 rounded-lg border border-rose-200 mt-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold">Atenção Crítica:</strong> {inst.warning}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Honest Realism Box (Risk, Requirements, Expected Timeline) */}
      <section className="bg-stone-100 rounded-xl p-4 sm:p-5 mb-8 border border-stone-200 text-xs sm:text-sm">
        <h2 className="font-bold text-stone-800 text-xs uppercase tracking-wider mb-3 flex items-center space-x-1.5">
          <Info className="w-4 h-4 text-teal-700" />
          <span>Ficha de Realismo & Requisitos do Método</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-[11px] text-stone-500 font-medium">Nível de Risco</span>
            <div className="flex items-center space-x-1 mt-1 font-bold text-stone-900">
              {article.riskLevel === 'Baixo' ? (
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              )}
              <span>{article.riskLevel}</span>
            </div>
            <span className="text-[10px] text-stone-400">
              {article.riskLevel === 'Baixo'
                ? 'Sem exigência de investimento financeiro de risco.'
                : 'Requer atenção ao tempo e gestão de clientes.'}
            </span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-[11px] text-stone-500 font-medium">Custo Inicial</span>
            <span className="block mt-1 font-bold text-stone-900">{article.initialCost}</span>
            <span className="text-[10px] text-stone-400">Comece sem dívidas nem licenças caras</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-[11px] text-stone-500 font-medium">Retorno Estimado</span>
            <span className="block mt-1 font-bold text-emerald-700">{article.estimatedReturn}</span>
            <span className="text-[10px] text-stone-400">Depende de disciplina e entrega real</span>
          </div>
        </div>

        {article.requirements && article.requirements.length > 0 && (
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-[11px] font-bold text-stone-700 uppercase mb-1.5">
              O que você precisa para começar:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-600">
              {article.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Key Takeaways Callout */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r-xl mb-8">
          <h2 className="font-bold text-teal-900 text-sm mb-2">Pontos Fundamentais para Lembrar:</h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-teal-950">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="font-bold text-teal-700">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Full Body */}
      <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed border-b border-stone-200 pb-8">
        <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2 border-b border-stone-100 pb-2">
          Análise Detalhada & Aprofundamento
        </h2>

        {article.content.map((paragraph, idx) => {
          const isHeading = paragraph.match(/^[0-9]+\. /) || paragraph.startsWith('Passo') || paragraph.startsWith('Fase') || paragraph.startsWith('Erro');

          if (isHeading) {
            return (
              <div key={idx} className="pt-3">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 text-teal-900">
                  {paragraph.split(':')[0]}
                </h3>
                {paragraph.includes(':') && (
                  <p className="text-stone-700 leading-relaxed font-normal">
                    {paragraph.substring(paragraph.indexOf(':') + 1).trim()}
                  </p>
                )}
              </div>
            );
          }

          return (
            <p key={idx} className="text-stone-700 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Anti-Scam Reminder on every article */}
      <div className="my-6 bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-900">
        <div className="flex items-start space-x-2.5">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">Aviso de Segurança Renda Digital MZ:</strong>
            <span>
              Nenhuma empresa ou cliente sério pede para você depositar dinheiro via M-Pesa ou pagar taxas prévias para "libertar trabalhos" ou "receber pagamentos". Se alguém solicitar depósito adiantado para você poder trabalhar, encerre a conversa imediatamente.
            </span>
          </div>
        </div>
      </div>

      {/* Author & Tags */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b border-stone-200 text-xs text-stone-500">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-stone-400" />
          <span>Publicado por: <strong className="text-stone-700">{article.author}</strong></span>
        </div>

        <div className="flex items-center space-x-1.5 flex-wrap gap-1">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-[11px]">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Content */}
      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="text-base font-bold text-stone-900 mb-3">Conteúdos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArticle(item)}
                className="bg-stone-50 hover:bg-white p-3 rounded-lg border border-stone-200 hover:border-teal-400 cursor-pointer transition group"
              >
                <div className="aspect-[16/9] w-full rounded overflow-hidden mb-2 bg-gradient-to-br from-stone-900 to-teal-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[10px] font-bold text-teal-700 uppercase">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="text-xs font-bold text-stone-800 line-clamp-2 mt-1 group-hover:text-teal-700">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
