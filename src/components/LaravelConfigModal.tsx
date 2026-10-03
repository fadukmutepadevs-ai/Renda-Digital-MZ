import React, { useState } from 'react';
import { api, ApiConfig } from '../services/api';
import { Cpu, CheckCircle2, AlertCircle, RefreshCw, Database, Server, X, ExternalLink, Code } from 'lucide-react';

interface LaravelConfigModalProps {
  onClose: () => void;
  onRefreshData: () => void;
}

export const LaravelConfigModal: React.FC<LaravelConfigModalProps> = ({ onClose, onRefreshData }) => {
  const currentConfig = api.getConfig();
  const [baseUrl, setBaseUrl] = useState<string>(currentConfig.baseUrl || '');
  const [useLiveApi, setUseLiveApi] = useState<boolean>(currentConfig.useLiveApi);
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [testing, setTesting] = useState<boolean>(false);

  const handleSave = () => {
    api.saveConfig({
      baseUrl: baseUrl.trim(),
      useLiveApi: useLiveApi,
    });
    setStatusMsg('Configuração gravada com sucesso no navegador!');
    onRefreshData();
    setTimeout(() => setStatusMsg(''), 3000);
  };

  const handleTestConnection = async () => {
    if (!baseUrl.trim()) {
      setStatusMsg('Por favor, informe a URL base do seu servidor Laravel.');
      return;
    }
    setTesting(true);
    setStatusMsg('Testando conexão com ' + baseUrl + '...');

    try {
      const res = await fetch(`${baseUrl.replace(/\/$/, '')}/api/v1/articles`, {
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatusMsg('Conexão realizada com sucesso! API Laravel está respondendo normalmente.');
        api.saveConfig({ baseUrl: baseUrl.trim(), useLiveApi: true, status: 'connected' });
        setUseLiveApi(true);
        onRefreshData();
      } else {
        setStatusMsg(`Servidor respondeu com código de status HTTP ${res.status}.`);
      }
    } catch (err: any) {
      setStatusMsg(`Falha na conexão: ${err.message || 'Servidor inacessível ou erro de CORS'}. O portal continuará funcionando normalmente no modo local/offline ultrarrápido.`);
    } finally {
      setTesting(false);
    }
  };

  const handleResetStorage = () => {
    if (window.confirm('Tem certeza de que deseja restaurar os dados originais do portal em cache?')) {
      api.resetToDefault();
      onRefreshData();
      setStatusMsg('Dados de fábrica restaurados com sucesso!');
      setTimeout(() => setStatusMsg(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">Integração Laravel + MySQL + API</h3>
              <p className="text-[11px] text-stone-300">Conecte com seu painel administrativo backend</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5 overflow-y-auto text-xs text-stone-700">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-stone-900 text-xs">
              <Database className="w-4 h-4 text-teal-700" />
              <span>Arquitetura Desacoplada (Frontend Rápido + Backend Opcional)</span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              O <strong>Renda Digital MZ</strong> foi concebido para funcionar tanto de forma 100% autônoma (com cache no cliente e performance mobile instantânea) quanto conectado a uma API REST em <strong>Laravel</strong> que alimenta o banco de dados <strong>MySQL</strong>.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-3">
            <div>
              <label className="block font-bold text-stone-800 text-[11px] uppercase tracking-wider mb-1">
                URL da API Laravel (Ex: https://api.rendadigitalmz.com):
              </label>
              <input
                type="url"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://api.rendadigitalmz.com"
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-600 font-mono"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div>
                <span className="font-bold text-stone-800 block text-xs">Ativar Conexão com API</span>
                <span className="text-[11px] text-stone-500">
                  {useLiveApi
                    ? 'Requisições serão feitas ao Laravel e salvas localmente.'
                    : 'Modo Offline Ativo (Zero latência, carregamento instantâneo via cache).'}
                </span>
              </div>
              <input
                type="checkbox"
                checked={useLiveApi}
                onChange={(e) => setUseLiveApi(e.target.checked)}
                className="h-4 w-4 text-teal-600 rounded border-stone-300 focus:ring-teal-500 cursor-pointer"
              />
            </div>
          </div>

          {statusMsg && (
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 text-[11px] flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>{statusMsg}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={handleSave}
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-4 py-2 rounded-lg text-xs cursor-pointer transition shadow-xs"
            >
              Gravar Configuração
            </button>

            <button
              onClick={handleTestConnection}
              disabled={testing}
              className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold px-3 py-2 rounded-lg text-xs cursor-pointer transition border border-stone-300 flex items-center space-x-1"
            >
              {testing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Server className="w-3.5 h-3.5" />}
              <span>Testar Conexão</span>
            </button>

            <button
              onClick={handleResetStorage}
              className="ml-auto text-stone-500 hover:text-rose-700 text-[11px] underline cursor-pointer"
            >
              Restaurar dados padrão
            </button>
          </div>

          {/* Doc Spec Quick Reference */}
          <div className="border-t border-stone-200 pt-3">
            <span className="block font-bold text-stone-700 text-[11px] uppercase tracking-wider mb-1 flex items-center space-x-1">
              <Code className="w-3.5 h-3.5 text-stone-500" />
              <span>Rotas esperadas pelo frontend:</span>
            </span>
            <div className="bg-stone-900 text-stone-300 p-2.5 rounded-lg text-[10px] font-mono space-y-0.5 overflow-x-auto">
              <div>GET /api/v1/articles?category=...&q=...</div>
              <div>GET /api/v1/articles/:slug</div>
              <div>GET /api/v1/tools?category=...</div>
              <div>GET /api/v1/opportunities?type=...</div>
            </div>
            <p className="text-[10px] text-stone-400 mt-1">
              O arquivo de especificação completo está disponível em <code className="text-stone-700 font-bold">docs/LARAVEL_API_SPEC.md</code> no projeto.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
