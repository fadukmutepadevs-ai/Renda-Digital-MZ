import React, { useState } from 'react';
import { TrendingUp, Clock, AlertCircle, Sparkles, CheckCircle2, X } from 'lucide-react';

interface IncomeSimulatorProps {
  onClose?: () => void;
}

interface SkillProfile {
  id: string;
  name: string;
  hourlyRateMznMin: number;
  hourlyRateMznMax: number;
  setupTime: string;
  description: string;
}

const SKILLS: SkillProfile[] = [
  {
    id: 'design',
    name: 'Design para Redes Sociais & Flyers',
    hourlyRateMznMin: 200,
    hourlyRateMznMax: 450,
    setupTime: '1 a 2 semanas praticando no Canva',
    description: 'Criação de cartazes para comércios locais, cardápios e posts de WhatsApp.',
  },
  {
    id: 'redacao',
    name: 'Redação & Revisão de Textos',
    hourlyRateMznMin: 180,
    hourlyRateMznMax: 400,
    setupTime: 'Imediato (se domina boa ortografia)',
    description: 'Artigos para blogs, descrições de produtos e resumos acadêmicos.',
  },
  {
    id: 'assistente',
    name: 'Assistência Virtual & Apoio Remoto',
    hourlyRateMznMin: 150,
    hourlyRateMznMax: 350,
    setupTime: '1 semana (organização de emails e planilhas)',
    description: 'Gestão de mensagens, agendamento de reuniões e atendimento a clientes.',
  },
  {
    id: 'aulas',
    name: 'Aulas Particulares & Explicações Online',
    hourlyRateMznMin: 250,
    hourlyRateMznMax: 600,
    setupTime: 'Imediato no seu tema de domínio',
    description: 'Aulas de Matemática, Inglês, Informática ou reforço escolar via WhatsApp/Meet.',
  },
  {
    id: 'vendas',
    name: 'Negócios Digitais & Catálogo WhatsApp',
    hourlyRateMznMin: 220,
    hourlyRateMznMax: 500,
    setupTime: '2 a 3 semanas para validar oferta',
    description: 'Revenda de produtos úteis ou prestação de pequenos serviços na sua cidade.',
  },
];

export const IncomeSimulator: React.FC<IncomeSimulatorProps> = ({ onClose }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('design');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);

  const selectedSkill = SKILLS.find((s) => s.id === selectedSkillId) || SKILLS[0];

  // Conservative realistic calculations (4 weeks per month)
  // Assuming 65% efficiency for starters (accounting for client finding & learning time)
  const effectiveHours = Math.round(hoursPerWeek * 0.65);
  const minMonthlyMzn = effectiveHours * 4 * selectedSkill.hourlyRateMznMin;
  const maxMonthlyMzn = effectiveHours * 4 * selectedSkill.hourlyRateMznMax;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-teal-100 text-teal-800">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h3 className="text-base sm:text-lg font-black text-stone-900">
              Simulador Realista de Potencial de Renda
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            Estimativas transparentes em Meticais (MZN) baseadas em horas dedicadas reais e preços de mercado.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-600 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              1. Selecione a sua área de foco:
            </label>
            <div className="space-y-1.5">
              {SKILLS.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkillId(skill.id)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition flex items-start justify-between ${
                    selectedSkillId === skill.id
                      ? 'bg-teal-50 border-teal-500 text-teal-950 font-medium'
                      : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div>
                    <span className="font-bold block">{skill.name}</span>
                    <span className="text-[11px] text-stone-500">{skill.description}</span>
                  </div>
                  {selectedSkillId === skill.id && (
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <label className="font-bold text-stone-700 uppercase tracking-wider">
                2. Tempo disponível por semana:
              </label>
              <span className="font-extrabold text-teal-800 text-sm bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                {hoursPerWeek} horas / semana
              </span>
            </div>

            <input
              type="range"
              min="4"
              max="35"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-teal-700"
            />

            <div className="flex justify-between text-[10px] text-stone-400 mt-1">
              <span>4h (1h/dia útil)</span>
              <span>10h (tempo parcial)</span>
              <span>20h+ (meio período)</span>
              <span>35h (dedicação forte)</span>
            </div>
          </div>
        </div>

        {/* Results & Realistic Timeline */}
        <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
              Projeção Mensal Realista:
            </span>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs mb-4">
              <div className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {minMonthlyMzn.toLocaleString()} a {maxMonthlyMzn.toLocaleString()} MZN
                <span className="text-xs font-normal text-stone-500 block sm:inline sm:ml-1">/mês</span>
              </div>
              <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                Baseado em ~{effectiveHours} horas produtivas remuneradas por semana (já descontando o tempo de prospecção e mensagens).
              </p>
            </div>

            {/* Timeline expectation */}
            <div className="space-y-2 mb-4 text-xs">
              <span className="font-bold text-stone-700 text-[11px] uppercase tracking-wider block">
                Linha do Tempo Esperada:
              </span>

              <div className="space-y-1.5 text-[11px] text-stone-600">
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-teal-800 shrink-0">Mês 1:</span>
                  <span>Construção de 2 ou 3 amostras e envio de mensagens para conhecidos. Ganhos: 0 a 1.500 MZN.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-teal-800 shrink-0">Mês 2:</span>
                  <span>Primeiros 2 clientes pagantes fecham serviços pontuais. Ganhos: 2.000 a 6.000 MZN.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-teal-800 shrink-0">Mês 3+:</span>
                  <span>Clientes fixos mensais e recomendações boca a boca. Estabilização da meta estimada.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-[11px] text-amber-900 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Aviso de Honestidade:</strong> Nenhuma projeção é garantida. Se você não enviar propostas, treinar suas habilidades e entregar no prazo, o retorno será zero. O sucesso online é fruto de competência prática e consistência.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
