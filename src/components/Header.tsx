import React, { useState } from 'react';
import { CategoryId } from '../types';
import { Search, Bookmark, ShieldCheck, Zap, SlidersHorizontal, Menu, X, Cpu, RotateCw } from 'lucide-react';

interface HeaderProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  dataSaver: boolean;
  onToggleDataSaver: () => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenLaravelModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  dataSaver,
  onToggleDataSaver,
  savedCount,
  onOpenSaved,
  onOpenLaravelModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navItems: { id: CategoryId; label: string }[] = [
    { id: 'todos', label: 'Início' },
    { id: 'renda-extra', label: 'Renda Extra' },
    { id: 'trabalho-online', label: 'Trabalho Online' },
    { id: 'ferramentas', label: 'Ferramentas' },
    { id: 'negocios-digitais', label: 'Negócios Digitais' },
    { id: 'dicas', label: 'Dicas' },
    { id: 'oportunidades', label: 'Oportunidades' },
    { id: 'guias', label: 'Guias' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      {/* Top micro bar for performance & honesty promise */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-[11px] sm:text-xs">
              Portal Educativo Oficial MZ • Conteúdo 100% Realista Sem Fórmulas Mágicas
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[11px]">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-1 px-2 py-0.5 rounded cursor-pointer bg-stone-800 hover:bg-stone-700 text-stone-200 transition active:scale-95"
              title="Recarregar a página inteira de forma rápida e eficiente"
            >
              <RotateCw className="w-3 h-3 text-teal-400" />
              <span>Actualizar</span>
            </button>

            <button
              onClick={onToggleDataSaver}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded cursor-pointer transition ${
                dataSaver
                  ? 'bg-emerald-800 text-emerald-100 font-semibold'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
              }`}
              title="Ativa modo ultraleve para poupar megabytes do seu pacote de internet"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span>{dataSaver ? 'Poupança Ativa (-70% dados)' : 'Poupar Dados'}</span>
            </button>

            <button
              onClick={onOpenLaravelModal}
              className="hidden md:flex items-center space-x-1 text-stone-400 hover:text-stone-200 cursor-pointer"
              title="Configuração da API Laravel + MySQL"
            >
              <Cpu className="w-3 h-3" />
              <span>API Laravel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div
            onClick={() => onSelectCategory('todos')}
            className="flex items-center space-x-2.5 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-lg bg-teal-700 flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm group-hover:bg-teal-800 transition">
              MZ
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900">
                  Renda Digital <span className="text-teal-700">MZ</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                  Moçambique
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-normal leading-none hidden sm:block">
                Trabalho online, ferramentas gratuitas e negócios legítimos
              </p>
            </div>
          </div>

          {/* Search bar on desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar artigos, ferramentas, M-Pesa, freelancing..."
                className="w-full bg-stone-100 border border-stone-200 rounded-full pl-9 pr-4 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1.5 text-xs text-stone-400 hover:text-stone-600 font-bold"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Quick Actions Right */}
          <div className="flex items-center space-x-2">
            {/* Search icon trigger for small screens */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="lg:hidden p-2 text-stone-600 hover:text-teal-700 hover:bg-stone-100 rounded-full cursor-pointer"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved Offline Articles */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-stone-600 hover:text-teal-700 hover:bg-stone-100 rounded-full cursor-pointer transition"
              title="Artigos guardados para ler offline"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-700 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Search */}
        {showSearchInput && (
          <div className="mt-2.5 pt-2 border-t border-stone-200 lg:hidden">
            <div className="relative">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Digite o que procura (ex: Freelance, Canva, Dicas)..."
                className="w-full bg-stone-100 border border-stone-300 rounded-lg pl-9 pr-8 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2 text-sm text-stone-500 font-bold p-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 mt-2.5 overflow-x-auto no-scrollbar pt-1">
          {navItems.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-3 shadow-lg">
          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
            Navegar por Seção
          </p>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {navItems.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectCategory(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-xs font-medium px-3 py-2 rounded-md transition ${
                    isActive
                      ? 'bg-teal-700 text-white font-semibold'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
            <button
              onClick={() => {
                onToggleDataSaver();
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-1.5 text-stone-800 font-medium py-1"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Modo Poupança de Dados: {dataSaver ? 'Ligado' : 'Desligado'}</span>
            </button>
            <button
              onClick={() => {
                onOpenLaravelModal();
                setMobileMenuOpen(false);
              }}
              className="text-teal-700 font-semibold py-1"
            >
              Configurar API
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
