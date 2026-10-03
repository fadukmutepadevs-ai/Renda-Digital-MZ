import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Smartphone, BookOpen, RotateCw } from 'lucide-react';
import { CategoryId } from '../types';

interface HeroProps {
  onExploreOpportunities: () => void;
  onViewTips: () => void;
  onOpenSimulator: () => void;
  onOpenScamDetector: () => void;
  dataSaver: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreOpportunities,
  onViewTips,
  onOpenSimulator,
  onOpenScamDetector,
  dataSaver,
}) => {
  const [isReloading, setIsReloading] = useState(false);

  const handleReloadPage = () => {
    setIsReloading(true);
    // Instant fast reload
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-stone-900 to-stone-900 text-white pt-9 pb-12 px-4 border-b border-stone-800">
      {/* Subtle background glow effect (disabled in data saver) */}
      {!dataSaver && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-emerald-600 blur-3xl"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10 text-center sm:text-left">
        {/* Anti-Slop / Trust Badge + Quick Refresh */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center space-x-2 bg-teal-950/80 border border-teal-700/60 rounded-full px-3 py-1 text-teal-300 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Focado na realidade de Moçambique & África Lusófona</span>
            <span className="hidden sm:inline text-teal-500">•</span>
            <span className="hidden sm:inline text-stone-300 text-[11px]">Zero promessas mágicas</span>
          </div>

          {/* Quick Page Reload Button */}
          <button
            onClick={handleReloadPage}
            disabled={isReloading}
            className="inline-flex items-center space-x-1.5 bg-teal-800/80 hover:bg-teal-700 text-teal-100 hover:text-white border border-teal-500/50 text-xs px-3 py-1 rounded-full font-bold transition shadow-xs cursor-pointer active:scale-95 disabled:opacity-75"
            title="Recarregar a página inteira de forma rápida e eficiente"
          >
            <RotateCw className={`w-3.5 h-3.5 text-teal-300 ${isReloading ? 'animate-spin' : ''}`} />
            <span>{isReloading ? 'Actualizando...' : 'Actualizar página'}</span>
          </button>
        </div>

        {/* REQUIRED TITLE with inline refresh action right next to 'a internet.' */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight sm:leading-tight mb-4 flex flex-wrap items-center gap-2.5">
          <span>Descubra novas formas de aumentar sua renda usando a internet.</span>
          <button
            onClick={handleReloadPage}
            disabled={isReloading}
            className="inline-flex items-center space-x-1.5 bg-teal-800/90 hover:bg-teal-700 text-teal-100 hover:text-white border border-teal-400/50 text-xs sm:text-sm px-3 py-1.5 rounded-full font-bold transition shadow-xs cursor-pointer active:scale-95 disabled:opacity-75"
            title="Recarregar a página inteira de forma rápida e eficiente"
          >
            <RotateCw className={`w-3.5 h-3.5 text-teal-300 ${isReloading ? 'animate-spin' : ''}`} />
            <span>{isReloading ? 'Actualizando...' : 'Actualizar'}</span>
          </button>
        </h1>

        {/* REQUIRED DESCRIPTION */}
        <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
          Informação, ferramentas e estratégias para quem quer explorar oportunidades no mundo digital.
        </p>

        {/* REQUIRED BUTTONS + Fast Action links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-start mb-8">
          <button
            onClick={onExploreOpportunities}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold px-6 py-3 rounded-lg text-sm transition shadow-md cursor-pointer active:scale-95"
          >
            <span>Explorar oportunidades</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewTips}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold px-6 py-3 rounded-lg text-sm border border-stone-700 transition cursor-pointer active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span>Ver dicas</span>
          </button>

          <div className="flex w-full sm:w-auto gap-2">
            <button
              onClick={onOpenSimulator}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 text-xs font-semibold px-3.5 py-3 rounded-lg border border-amber-500/30 transition cursor-pointer"
              title="Calcule uma projeção realista de ganhos baseada no seu tempo disponível"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Simulador</span>
            </button>

            <button
              onClick={onOpenScamDetector}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 bg-rose-950/70 hover:bg-rose-900/80 text-rose-300 text-xs font-semibold px-3.5 py-3 rounded-lg border border-rose-600/30 transition cursor-pointer"
              title="Faça o teste de 5 perguntas e descubra se uma proposta na internet é golpe"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Evitar Golpes</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars of Honesty */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-left text-xs">
          <div className="flex items-start space-x-2 bg-stone-950/40 p-2.5 rounded-lg border border-stone-800">
            <div className="p-1 rounded bg-teal-900/60 text-teal-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-stone-100 font-bold">100% Realista</strong>
              <span className="text-stone-400 text-[11px] leading-snug">
                Sem robôs de lucro fácil ou esquemas piramidais. Apenas habilidades reais.
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-2 bg-stone-950/40 p-2.5 rounded-lg border border-stone-800">
            <div className="p-1 rounded bg-teal-900/60 text-teal-400 shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-stone-100 font-bold">Ultra Leve em Celular</strong>
              <span className="text-stone-400 text-[11px] leading-snug">
                Consumo mínimo de pacotes de dados e carregamento veloz em 3G/4G.
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-2 bg-stone-950/40 p-2.5 rounded-lg border border-stone-800">
            <div className="p-1 rounded bg-teal-900/60 text-teal-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-stone-100 font-bold">M-Pesa & Práticas Locais</strong>
              <span className="text-stone-400 text-[11px] leading-snug">
                Como receber pagamentos no país ou no exterior com segurança comprovada.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
