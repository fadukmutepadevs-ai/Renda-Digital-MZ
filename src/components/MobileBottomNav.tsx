import React from 'react';
import { CategoryId } from '../types';
import { Home, Coins, Wrench, Award, BookOpen } from 'lucide-react';

interface MobileBottomNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const items: { id: CategoryId; label: string; icon: any }[] = [
    { id: 'todos', label: 'Início', icon: Home },
    { id: 'renda-extra', label: 'Renda', icon: Coins },
    { id: 'ferramentas', label: 'Ferramentas', icon: Wrench },
    { id: 'oportunidades', label: 'Vagas', icon: Award },
    { id: 'guias', label: 'Guias', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 md:hidden py-1.5 px-2 shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeCategory === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectCategory(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition cursor-pointer select-none ${
                isActive ? 'text-teal-700 font-bold' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
