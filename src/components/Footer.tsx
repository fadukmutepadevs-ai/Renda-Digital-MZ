import React from 'react';
import { CategoryId } from '../types';
import { ShieldCheck, Heart, Zap, ArrowUp, Cpu } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: CategoryId) => void;
  onOpenLaravelModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenLaravelModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-16 px-4 text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-black text-sm">
                MZ
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Renda Digital <span className="text-teal-400">MZ</span>
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-md">
              O portal de referência em Moçambique e no espaço lusófono para quem busca renda extra, trabalho remoto e negócios digitais com os pés no chão, transparência e respeito ao seu tempo e dinheiro.
            </p>

            <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Compromisso Ético & Anti-Golpes</span>
              </div>
              <p>
                Não promovemos pirâmides financeiras, bots de trading milagrosos, plataformas falsas de tarefas ou promessas de enriquecimento rápido. Todo ganho legítimo requer dedicação, competência e trabalho honesto.
              </p>
            </div>
          </div>

          {/* Seções Rápidas */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Seções do Portal
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('renda-extra')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Renda Extra Realista
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('trabalho-online')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Trabalho Online & Freelance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('ferramentas')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Ferramentas Gratuitas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('negocios-digitais')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Negócios Digitais
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('dicas')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Dicas & Prevenção de Erros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('oportunidades')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Oportunidades & Bolsas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('guias')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Guias Passo a Passo
                </button>
              </li>
            </ul>
          </div>

          {/* Performance & Arquitetura */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Engenharia & Desempenho
            </h4>
            <ul className="space-y-2 text-[11px] text-stone-400">
              <li className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Otimizado para redes móveis 2G/3G/4G</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Fontes nativas de sistema (0 KB baixados)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Pronto para Laravel + MySQL API</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-stone-800">
              <button
                onClick={onOpenLaravelModal}
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
              >
                <span>Configurar Backend Laravel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Renda Digital MZ. Conteúdo aberto e informativo para capacitação digital.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-stone-400 hover:text-white cursor-pointer transition"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
