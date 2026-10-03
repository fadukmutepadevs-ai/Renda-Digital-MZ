import React, { useState } from 'react';
import { Opportunity } from '../types';
import { ExternalLink, CheckCircle, ShieldCheck, AlertCircle, Award, CreditCard, Sparkles } from 'lucide-react';

interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ opportunities }) => {
  const [filterType, setFilterType] = useState<string>('Todos');

  const types = ['Todos', 'Plataforma Freelance', 'Trabalho Remoto', 'Capacitação Gratuita'];

  const filtered =
    filterType === 'Todos' ? opportunities : opportunities.filter((o) => o.type === filterType);

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Iniciante':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Intermediário':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  return (
    <section className="py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              Oportunidades & Plataformas Verificadas
            </h2>
            <span className="bg-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-teal-700" />
              <span>Verificado</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Plataformas legítimas para se candidatar, trabalhar remotamente ou obter bolsas de formação.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                filterType === t
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((opp) => (
          <div
            key={opp.id}
            className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col justify-between hover:border-teal-400 transition shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    {opp.type}
                  </span>
                  <h3 className="font-bold text-base text-stone-900 leading-snug mt-0.5">
                    {opp.title}
                  </h3>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${getDifficultyBadge(
                    opp.difficulty
                  )}`}
                >
                  Nível: {opp.difficulty}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {opp.description}
              </p>

              {/* Requirements & Payments */}
              <div className="space-y-2 mb-4 text-xs">
                <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                  <span className="block font-bold text-stone-700 text-[11px] mb-1">
                    Requisitos para começar:
                  </span>
                  <ul className="space-y-1 text-[11px] text-stone-600">
                    {opp.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <CheckCircle className="w-3 h-3 text-teal-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-2 text-[11px] text-stone-600 px-1">
                  <CreditCard className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>
                    <strong className="text-stone-700">Pagamentos / Recebimento:</strong>{' '}
                    {opp.paymentMethods.join(' • ')}
                  </span>
                </div>
              </div>

              {/* Practical Tip */}
              {opp.tips && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-2.5 mb-4 text-[11px] text-amber-900">
                  <div className="flex items-start space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Dica Estratégica:</strong> {opp.tips}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[10px] text-emerald-700 font-bold flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Legítimo & Auditado</span>
              </span>

              <a
                href={opp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition"
              >
                <span>Visitar site oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
