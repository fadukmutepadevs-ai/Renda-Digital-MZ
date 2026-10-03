import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, HelpCircle, RotateCcw, X } from 'lucide-react';

interface ScamDetectorProps {
  onClose?: () => void;
}

interface Question {
  id: number;
  text: string;
  detail: string;
  isRedFlagIfYes: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Pedem que você deposite dinheiro (M-Pesa, E-Mola ou banco) antes de começar a trabalhar ou para "ativar sua conta"?',
    detail: 'Empresas legítimas pagam você pelo seu trabalho; elas nunca cobram taxa para permitir que você trabalhe.',
    isRedFlagIfYes: true,
  },
  {
    id: 2,
    text: 'Prometem ganhos automáticos e fáceis (ex: "Ganhe 2.000 MT por dia curtindo vídeos ou clicando em links")?',
    detail: 'Nenhuma empresa no mundo paga valores altos por tarefas irrelevantes que um robô faria de graça.',
    isRedFlagIfYes: true,
  },
  {
    id: 3,
    text: 'O ganho principal vem de indicar novos amigos ou recrutar pessoas que também devem depositar dinheiro?',
    detail: 'Se a maior parte da renda depende de recrutar novos membros em vez de vender produtos a consumidores finais, trata-se de pirâmide financeira.',
    isRedFlagIfYes: true,
  },
  {
    id: 4,
    text: 'Dizem que você acumulou um saldo alto, mas para sacar você é obrigado a pagar uma "taxa de liberação ou imposto"?',
    detail: 'O truque clássico da taxa de saque: assim que você pagar a taxa, o golpista bloqueará o seu contato.',
    isRedFlagIfYes: true,
  },
  {
    id: 5,
    text: 'A empresa não possui NUIT, endereço físico conhecido ou os administradores usam nomes e perfis falsos em grupos?',
    detail: 'Falta de transparência e urgência fabricada ("últimas vagas só até hoje") são sinais críticos de fraude.',
    isRedFlagIfYes: true,
  },
];

export const ScamDetector: React.FC<ScamDetectorProps> = ({ onClose }) => {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  const handleAnswer = (questionId: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleReset = () => {
    setAnswers({ 1: null, 2: null, 3: null, 4: null, 5: null });
  };

  // Count red flags
  const redFlagsCount = Object.entries(answers).reduce((acc, [qid, val]) => {
    const q = QUESTIONS.find((item) => item.id === Number(qid));
    if (q && val === true && q.isRedFlagIfYes) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const isComplete = answeredCount === QUESTIONS.length;

  const getVerdict = () => {
    if (redFlagsCount >= 2) {
      return {
        title: 'ALTO RISCO DE GOLPE OU PIRÂMIDE',
        color: 'bg-rose-50 border-rose-300 text-rose-950',
        badgeColor: 'bg-rose-600 text-white',
        icon: ShieldAlert,
        description:
          'PARE IMEDIATAMENTE! Esta proposta reúne sinais clássicos de esquemas fraudulentos desenhados para roubar o seu saldo via carteiras móveis. Não transfira nenhum valor e bloqueie o contato.',
      };
    }
    if (redFlagsCount === 1) {
      return {
        title: 'SITUAÇÃO SUSPEITA — PROCEDA COM CAUTELA',
        color: 'bg-amber-50 border-amber-300 text-amber-950',
        badgeColor: 'bg-amber-600 text-white',
        icon: AlertTriangle,
        description:
          'Existe pelo menos um indício preocupante. Exija garantias formais, nunca pague taxas antecipadas e pesquise a reputação antes de entregar tempo ou dados pessoais.',
      };
    }
    return {
      title: 'APARENTA SER UMA OPORTUNIDADE LEGÍTIMA',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-950',
      badgeColor: 'bg-emerald-700 text-white',
      icon: ShieldCheck,
      description:
        'Nenhum sinal crítico de golpe foi detectado com base nas respostas. Lembre-se ainda assim de manter boas práticas contratuais e nunca compartilhar senhas ou códigos PIN.',
    };
  };

  const verdict = getVerdict();
  const VerdictIcon = verdict.icon;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-rose-100 text-rose-800">
              <ShieldAlert className="w-4 h-4" />
            </span>
            <h3 className="text-base sm:text-lg font-black text-stone-900">
              Detector Rápido de Golpes & Esquemas Piramidais
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            Responda 5 perguntas simples sobre uma proposta que viu na internet e veja o diagnóstico instantâneo.
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

      {/* Progress & Reset */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pb-2 border-b border-stone-100">
        <span>
          Respondidas: <strong className="text-stone-800">{answeredCount} de {QUESTIONS.length}</strong>
        </span>
        {answeredCount > 0 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center space-x-1 text-teal-700 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reiniciar teste</span>
          </button>
        )}
      </div>

      {/* Questions list */}
      <div className="space-y-3 mb-6">
        {QUESTIONS.map((q) => {
          const currentVal = answers[q.id];

          return (
            <div
              key={q.id}
              className={`p-3.5 rounded-xl border text-xs transition ${
                currentVal !== null
                  ? currentVal
                    ? 'bg-rose-50/50 border-rose-200'
                    : 'bg-emerald-50/40 border-emerald-200'
                  : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                <div className="max-w-xl">
                  <span className="font-bold text-stone-800 block text-xs sm:text-sm">
                    {q.id}. {q.text}
                  </span>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                    {q.detail}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => handleAnswer(q.id, true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                      currentVal === true
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    SIM
                  </button>

                  <button
                    onClick={() => handleAnswer(q.id, false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                      currentVal === false
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    NÃO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verdict Panel */}
      {answeredCount > 0 && (
        <div className={`p-4 sm:p-5 rounded-xl border ${verdict.color} transition-all`}>
          <div className="flex items-start space-x-3">
            <VerdictIcon className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center space-x-2 mb-1 flex-wrap gap-1">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${verdict.badgeColor}`}>
                  {redFlagsCount} alerta(s) identificado(s)
                </span>
                <h4 className="font-extrabold text-sm sm:text-base tracking-tight">
                  {verdict.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-normal">
                {verdict.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
