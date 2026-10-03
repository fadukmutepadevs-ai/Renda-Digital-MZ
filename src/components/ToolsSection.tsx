import React, { useState } from 'react';
import { ToolItem } from '../types';
import { ExternalLink, Check, Zap, Smartphone, Monitor, Layers, Filter } from 'lucide-react';

interface ToolsSectionProps {
  tools: ToolItem[];
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ tools }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Design', 'Produtividade', 'Comunicação', 'Gestão', 'Conteúdo'];

  const filteredTools =
    selectedCategory === 'Todas' ? tools : tools.filter((t) => t.category === selectedCategory);

  const getUsageBadge = (rating: string) => {
    switch (rating) {
      case 'Mínimo (Leve)':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Moderado':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <section className="py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Ferramentas Gratuitas para Trabalhar Online
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Plataformas e aplicativos leves para produzir, vender e organizar sem custos iniciais.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col justify-between hover:border-teal-400 transition shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-base text-stone-900">{tool.name}</h3>
                  <span className="text-[11px] font-semibold text-teal-700">{tool.category}</span>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    {tool.isFree ? '100% Grátis' : 'Freemium'}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center space-x-0.5 ${getUsageBadge(
                      tool.dataUsageRating
                    )}`}
                    title="Consumo de dados móveis"
                  >
                    <Zap className="w-2.5 h-2.5" />
                    <span>{tool.dataUsageRating}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                {tool.description}
              </p>

              <div className="bg-stone-50 rounded-lg p-2.5 mb-3 border border-stone-100 text-xs">
                <span className="block text-[11px] font-bold text-stone-700 mb-1">
                  Por que recomendamos:
                </span>
                <ul className="space-y-1 text-[11px] text-stone-600">
                  {tool.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-stone-500 mb-4">
                <strong className="text-stone-700">Ideal para:</strong> {tool.bestFor}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[10px] text-stone-400 flex items-center space-x-1">
                <Smartphone className="w-3 h-3" />
                <span>{tool.platform}</span>
              </span>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
              >
                <span>Acessar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
