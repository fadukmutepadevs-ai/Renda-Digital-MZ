import React, { useState } from 'react';
import { Guide } from '../types';
import { BookOpen, CheckSquare, Clock, AlertTriangle, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

interface GuidesSectionProps {
  guides: Guide[];
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ guides }) => {
  const [expandedGuideId, setExpandedGuideId] = useState<string>(guides[0]?.id || '');

  return (
    <section className="py-6">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Guias Práticos Passo a Passo
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Roteiros testados para executar tarefas sem cometer erros comuns de iniciantes.
        </p>
      </div>

      <div className="space-y-6">
        {guides.map((guide) => {
          const isExpanded = expandedGuideId === guide.id;

          return (
            <div
              key={guide.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs"
            >
              {/* Header Accordion Trigger */}
              <div
                onClick={() => setExpandedGuideId(isExpanded ? '' : guide.id)}
                className="p-5 bg-stone-50/50 hover:bg-stone-50 cursor-pointer flex items-start justify-between gap-3 border-b border-stone-100 transition"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs text-stone-500 mb-1.5">
                    <span className="font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[10px] uppercase">
                      {guide.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center text-[11px]">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.timeNeeded}
                    </span>
                    <span>•</span>
                    <span className="text-[11px]">Dificuldade: {guide.difficulty}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-1">
                    {guide.summary}
                  </p>
                </div>

                <button
                  className="p-1.5 rounded-full bg-white border border-stone-200 text-stone-500 shrink-0 mt-1"
                  aria-label="Expandir guia"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Expanded Guide Content */}
              {isExpanded && (
                <div className="p-5 space-y-6">
                  {/* Checklist Box */}
                  <div className="bg-teal-50/60 border border-teal-200 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                      <CheckSquare className="w-4 h-4 text-teal-700" />
                      <span>Checklist de Execução</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {guide.checklist.map((item, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            className="rounded border-stone-300 text-teal-700 focus:ring-teal-500 h-3.5 w-3.5"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Etapas Detalhadas:
                    </h4>

                    {guide.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="bg-white rounded-lg p-4 border border-stone-200 relative pl-12"
                      >
                        <div className="absolute left-3.5 top-4 w-6 h-6 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                          {step.stepNumber}
                        </div>

                        <h5 className="font-bold text-stone-900 text-sm mb-1">
                          {step.title}
                        </h5>

                        <p className="text-xs text-stone-600 leading-relaxed mb-2">
                          {step.description}
                        </p>

                        {step.tip && (
                          <div className="flex items-start space-x-1.5 text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 mt-2">
                            <Lightbulb className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <strong>Dica:</strong> {step.tip}
                            </span>
                          </div>
                        )}

                        {step.warning && (
                          <div className="flex items-start space-x-1.5 text-[11px] text-rose-800 bg-rose-50 p-2 rounded border border-rose-200 mt-2">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <span>
                              <strong>Atenção:</strong> {step.warning}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
