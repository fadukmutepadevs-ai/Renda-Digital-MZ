import React from 'react';
import { CategoryId } from '../types';
import {
  Sparkles,
  Coins,
  Laptop,
  Wrench,
  Briefcase,
  Lightbulb,
  Award,
  BookOpen,
} from 'lucide-react';

interface CategoryNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  articlesCountByCategory: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  articlesCountByCategory,
}) => {
  const categories: { id: CategoryId; label: string; icon: any; desc: string }[] = [
    {
      id: 'todos',
      label: 'Todos os Conteúdos',
      icon: Sparkles,
      desc: 'Visão geral e destaques',
    },
    {
      id: 'renda-extra',
      label: 'Renda Extra',
      icon: Coins,
      desc: 'Ideias reais para renda adicional',
    },
    {
      id: 'trabalho-online',
      label: 'Trabalho Online',
      icon: Laptop,
      desc: 'Freelancing, serviços e remoto',
    },
    {
      id: 'ferramentas',
      label: 'Ferramentas',
      icon: Wrench,
      desc: 'Apps gratuitos e produtividade',
    },
    {
      id: 'negocios-digitais',
      label: 'Negócios Digitais',
      icon: Briefcase,
      desc: 'E-commerce e infoprodutos',
    },
    {
      id: 'dicas',
      label: 'Dicas Práticas',
      icon: Lightbulb,
      desc: 'Estratégias e prevenção de erros',
    },
    {
      id: 'oportunidades',
      label: 'Oportunidades',
      icon: Award,
      desc: 'Bolsas e plataformas de vagas',
    },
    {
      id: 'guias',
      label: 'Guias Passo a Passo',
      icon: BookOpen,
      desc: 'Tutoriais práticos para iniciantes',
    },
  ];

  return (
    <div className="bg-stone-100 border-b border-stone-200 py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count = articlesCountByCategory[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-900 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-200' : 'text-stone-500'}`} />
                <span>{cat.label}</span>
                {count !== undefined && count > 0 && (
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-teal-800 text-teal-100' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
