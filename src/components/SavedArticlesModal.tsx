import React from 'react';
import { Article } from '../types';
import { Bookmark, Clock, ArrowRight, Trash2, X, BookOpen } from 'lucide-react';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  savedIds: string[];
  onOpenArticle: (article: Article) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  articles,
  savedIds,
  onOpenArticle,
  onRemoveSaved,
}) => {
  if (!isOpen) return null;

  const savedArticles = articles.filter((a) => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-4 bg-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-teal-300" fill="currentColor" />
            <div>
              <h3 className="font-bold text-sm sm:text-base">Artigos Guardados Offline</h3>
              <p className="text-[11px] text-teal-200">
                {savedArticles.length} {savedArticles.length === 1 ? 'artigo guardado' : 'artigos guardados'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-teal-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="text-center py-8 text-stone-500">
              <BookOpen className="w-10 h-10 mx-auto text-stone-300 mb-2" />
              <p className="text-xs font-semibold">Nenhum artigo guardado ainda.</p>
              <p className="text-[11px] text-stone-400 mt-1 max-w-xs mx-auto">
                Clique no ícone de marcador em qualquer artigo para guardá-lo e ler mesmo sem internet!
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition flex items-start justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onOpenArticle(art);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center space-x-2 text-[10px] text-stone-500 mb-1">
                    <span className="font-bold uppercase text-teal-700">{art.category}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-0.5" />
                      {art.readingTime}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition">
                    {art.title}
                  </h4>
                </div>

                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    onClick={() => onRemoveSaved(art.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg cursor-pointer"
                    title="Remover dos guardados"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      onOpenArticle(art);
                      onClose();
                    }}
                    className="p-1.5 text-teal-700 hover:text-teal-900 rounded-lg cursor-pointer"
                    title="Ler artigo"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
