// High-performance, lightweight, 100% valid SVG illustrations for Renda Digital MZ articles
// Uses base64 encoding to prevent XML parsing issues or broken image icons in all browsers/WebViews.

const encodeSvg = (svgString: string): string => {
  if (typeof window !== 'undefined' && window.btoa) {
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgString.trim())))}`;
  }
  // Fallback for SSR/build time
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
};

export const ARTICLE_IMAGES = {
  rendaExtra: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f766e" />
        <stop offset="100%" stop-color="#134e4a" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg1)" />
    <!-- Grid pattern -->
    <g stroke="#ffffff" stroke-width="1" opacity="0.07">
      <line x1="0" y1="90" x2="800" y2="90" />
      <line x1="0" y1="180" x2="800" y2="180" />
      <line x1="0" y1="270" x2="800" y2="270" />
      <line x1="0" y1="360" x2="800" y2="360" />
      <line x1="160" y1="0" x2="160" y2="450" />
      <line x1="320" y1="0" x2="320" y2="450" />
      <line x1="480" y1="0" x2="480" y2="450" />
      <line x1="640" y1="0" x2="640" y2="450" />
    </g>
    <!-- Laptop screen -->
    <rect x="230" y="100" width="340" height="210" rx="12" fill="#092625" stroke="#2dd4bf" stroke-width="3" />
    <rect x="250" y="120" width="300" height="150" rx="6" fill="#134e4a" />
    <!-- Window buttons -->
    <circle cx="270" cy="135" r="4" fill="#f87171" />
    <circle cx="282" cy="135" r="4" fill="#fbbf24" />
    <circle cx="294" cy="135" r="4" fill="#34d399" />
    <!-- Content bars -->
    <rect x="265" y="155" width="120" height="12" rx="3" fill="#2dd4bf" />
    <rect x="265" y="175" width="180" height="8" rx="2" fill="#99f6e4" opacity="0.7" />
    <rect x="265" y="190" width="150" height="8" rx="2" fill="#99f6e4" opacity="0.5" />
    <!-- Mini charts -->
    <rect x="415" y="155" width="120" height="95" rx="6" fill="#0f766e" stroke="#2dd4bf" stroke-width="1.5" />
    <path d="M430 225 L450 200 L470 210 L500 175 L520 185" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" />
    <circle cx="500" cy="175" r="4" fill="#34d399" />
    <!-- Base of laptop -->
    <path d="M190 310 L610 310 L590 328 L210 328 Z" fill="#042f2e" stroke="#2dd4bf" stroke-width="2" />
    <rect x="365" y="314" width="70" height="5" rx="2" fill="#2dd4bf" opacity="0.5" />
    <!-- Phone on right -->
    <rect x="580" y="140" width="105" height="180" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3" />
    <rect x="592" y="155" width="81" height="140" rx="8" fill="#1e293b" />
    <rect x="602" y="170" width="61" height="24" rx="4" fill="#059669" />
    <text x="632" y="186" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M-PESA</text>
    <rect x="602" y="205" width="61" height="6" rx="2" fill="#94a3b8" />
    <rect x="602" y="217" width="45" height="6" rx="2" fill="#64748b" />
    <!-- Floating badges -->
    <g transform="translate(100, 150)">
      <rect width="135" height="52" rx="10" fill="#042f2e" stroke="#34d399" stroke-width="2" />
      <text x="18" y="24" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Renda Legítima</text>
      <text x="18" y="41" fill="#ccfbf1" font-family="system-ui, sans-serif" font-size="10">Tempo e Habilidade</text>
    </g>
    <g transform="translate(110, 230)">
      <rect width="125" height="48" rx="10" fill="#042f2e" stroke="#fbbf24" stroke-width="2" />
      <text x="16" y="23" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Custo Zero</text>
      <text x="16" y="38" fill="#fef3c7" font-family="system-ui, sans-serif" font-size="10">Sem Investimento</text>
    </g>
  </svg>`),

  freelancer: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e3a8a" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg2)" />
    <!-- Portfolio frames -->
    <rect x="140" y="100" width="160" height="200" rx="12" fill="#1e293b" stroke="#60a5fa" stroke-width="2" />
    <rect x="155" y="120" width="130" height="80" rx="6" fill="#3b82f6" opacity="0.3" />
    <text x="220" y="165" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Projeto 1</text>
    <rect x="155" y="215" width="100" height="8" rx="2" fill="#e2e8f0" />
    <rect x="155" y="230" width="70" height="8" rx="2" fill="#94a3b8" />
    <rect x="155" y="255" width="130" height="24" rx="6" fill="#2563eb" />
    <text x="220" y="271" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Ver Portfólio</text>

    <!-- Center contract / proposal -->
    <rect x="320" y="80" width="220" height="260" rx="14" fill="#ffffff" stroke="#93c5fd" stroke-width="3" />
    <rect x="350" y="110" width="160" height="14" rx="4" fill="#1e3a8a" />
    <rect x="350" y="135" width="140" height="8" rx="2" fill="#64748b" />
    <rect x="350" y="150" width="150" height="8" rx="2" fill="#64748b" />
    <rect x="350" y="165" width="120" height="8" rx="2" fill="#64748b" />
    <!-- Checkmarks -->
    <circle cx="360" cy="195" r="8" fill="#10b981" />
    <path d="M356 195 L359 198 L365 192" fill="none" stroke="#ffffff" stroke-width="2" />
    <rect x="376" y="191" width="100" height="8" rx="2" fill="#334155" />
    <circle cx="360" cy="220" r="8" fill="#10b981" />
    <path d="M356 220 L359 223 L365 227" fill="none" stroke="#ffffff" stroke-width="2" />
    <rect x="376" y="216" width="115" height="8" rx="2" fill="#334155" />
    <!-- Agreement stamp -->
    <rect x="350" y="260" width="160" height="40" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" />
    <text x="430" y="284" fill="#065f46" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">50% Sinal Aprovado</text>

    <!-- Star badge -->
    <g transform="translate(560, 140)">
      <rect width="140" height="90" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2" />
      <text x="70" y="32" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="20" font-weight="black" text-anchor="middle">★ ★ ★ ★ ★</text>
      <text x="70" y="55" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Avaliação 5.0</text>
      <text x="70" y="72" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Reputação Freelance</text>
    </g>
  </svg>`),

  ferramentas: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#312e81" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg3)" />
    <!-- Central toolbox cloud -->
    <rect x="220" y="80" width="360" height="240" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="3" />
    <text x="400" y="120" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Ecossistema Gratuito na Nuvem</text>
    
    <rect x="250" y="140" width="140" height="60" rx="8" fill="#4338ca" stroke="#a5b4fc" stroke-width="1.5" />
    <text x="320" y="165" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Canva</text>
    <text x="320" y="185" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Design Gráfico</text>

    <rect x="410" y="140" width="140" height="60" rx="8" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5" />
    <text x="480" y="165" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Google Docs</text>
    <text x="480" y="185" fill="#bfdbfe" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">15 GB Nuvem Grátis</text>

    <rect x="250" y="215" width="140" height="60" rx="8" fill="#047857" stroke="#6ee7b7" stroke-width="1.5" />
    <text x="320" y="240" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">WhatsApp Biz</text>
    <text x="320" y="260" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Catálogo e CRM</text>

    <rect x="410" y="215" width="140" height="60" rx="8" fill="#b45309" stroke="#fde68a" stroke-width="1.5" />
    <text x="480" y="240" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Trello e Notas</text>
    <text x="480" y="260" fill="#fef3c7" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Prazos e Tarefas</text>

    <!-- Data Saver Pill -->
    <g transform="translate(300, 345)">
      <rect width="200" height="36" rx="18" fill="#064e3b" stroke="#34d399" stroke-width="2" />
      <text x="100" y="23" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Consumo Mínimo de Dados</text>
    </g>
  </svg>`),

  negocioDigital: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#581c87" />
        <stop offset="100%" stop-color="#2e1065" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg4)" />
    <!-- Digital Storefront Frame -->
    <rect x="180" y="90" width="440" height="250" rx="16" fill="#1e1b4b" stroke="#c084fc" stroke-width="3" />
    <!-- Browser bar -->
    <rect x="180" y="90" width="440" height="35" rx="16" fill="#2e1065" />
    <circle cx="205" cy="107" r="4" fill="#f43f5e" />
    <circle cx="217" cy="107" r="4" fill="#facc15" />
    <circle cx="229" cy="107" r="4" fill="#4ade80" />
    <rect x="250" y="98" width="220" height="18" rx="4" fill="#3b0764" />
    <text x="360" y="111" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">catalogo.whatsapp.mz</text>

    <!-- Products grid inside -->
    <rect x="210" y="145" width="110" height="120" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="1.5" />
    <rect x="225" y="160" width="80" height="45" rx="4" fill="#6b21a8" />
    <rect x="225" y="215" width="60" height="6" rx="2" fill="#e9d5ff" />
    <rect x="225" y="226" width="40" height="6" rx="2" fill="#c084fc" />
    <text x="280" y="250" fill="#4ade80" font-family="system-ui, sans-serif" font-size="10" font-weight="bold">500 MZN</text>

    <rect x="340" y="145" width="110" height="120" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="1.5" />
    <rect x="355" y="160" width="80" height="45" rx="4" fill="#6b21a8" />
    <rect x="355" y="215" width="60" height="6" rx="2" fill="#e9d5ff" />
    <rect x="355" y="226" width="40" height="6" rx="2" fill="#c084fc" />
    <text x="410" y="250" fill="#4ade80" font-family="system-ui, sans-serif" font-size="10" font-weight="bold">1.200 MZN</text>

    <rect x="470" y="145" width="130" height="170" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2" />
    <text x="535" y="175" fill="#34d399" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">WhatsApp Pedidos</text>
    <rect x="485" y="195" width="100" height="30" rx="6" fill="#047857" />
    <text x="535" y="214" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Novo Pedido</text>
    <text x="535" y="245" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Comprovante M-Pesa</text>
    <rect x="485" y="260" width="100" height="22" rx="4" fill="#10b981" />
    <text x="535" y="275" fill="#064e3b" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Entrega OK</text>
  </svg>`),

  venderServicos: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78350f" />
        <stop offset="100%" stop-color="#451a03" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg5)" />
    <!-- Chat conversation bubbles -->
    <rect x="180" y="90" width="440" height="260" rx="16" fill="#1c1917" stroke="#f59e0b" stroke-width="2" />
    <!-- Chat header -->
    <rect x="180" y="90" width="440" height="45" rx="16" fill="#292524" />
    <circle cx="215" cy="112" r="14" fill="#d97706" />
    <text x="215" y="117" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">MZ</text>
    <text x="240" y="112" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Cliente Comercial</text>
    <text x="240" y="125" fill="#22c55e" font-family="system-ui, sans-serif" font-size="10">Online</text>

    <!-- Message 1 (Prospector) -->
    <rect x="250" y="150" width="350" height="60" rx="10" fill="#065f46" stroke="#34d399" stroke-width="1" />
    <text x="265" y="172" fill="#ecfdf5" font-family="system-ui, sans-serif" font-size="11">"Olá! Preparei uma demonstração gratuita de cardápio</text>
    <text x="265" y="190" fill="#ecfdf5" font-family="system-ui, sans-serif" font-size="11">digital para sua loja. Gostaria de dar uma olhada?"</text>

    <!-- Message 2 (Client response) -->
    <rect x="200" y="225" width="310" height="50" rx="10" fill="#334155" stroke="#94a3b8" stroke-width="1" />
    <text x="215" y="247" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11">"Muito bom! Quanto cobra para fazer 5 artes por semana?"</text>

    <!-- Commercial proposal badge -->
    <rect x="300" y="290" width="220" height="40" rx="8" fill="#b45309" stroke="#fbbf24" stroke-width="1.5" />
    <text x="410" y="315" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Negociação Ética e Fechamento</text>
  </svg>`),

  errosAntiGolpes: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#881337" />
        <stop offset="100%" stop-color="#4c0519" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg6)" />
    <!-- Big Security Shield -->
    <path d="M400 80 L540 140 L540 250 C540 320 400 370 400 370 C400 370 260 320 260 250 L260 140 Z" fill="#1e293b" stroke="#f43f5e" stroke-width="4" />
    <!-- Inner lock / check -->
    <circle cx="400" cy="200" r="30" fill="#e11d48" />
    <rect x="388" y="195" width="24" height="24" rx="4" fill="#ffffff" />
    <path d="M394 195 L394 185 C394 180 406 180 406 185 L406 195" fill="none" stroke="#ffffff" stroke-width="4" />
    <text x="400" y="270" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">BLINDAGEM CONTRA GOLPES</text>
    <text x="400" y="295" fill="#fecdd3" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Nunca Pague Taxas Para Receber Salário</text>

    <!-- Warning badges left and right -->
    <g transform="translate(100, 150)">
      <rect width="130" height="60" rx="8" fill="#4c0519" stroke="#fb7185" stroke-width="2" />
      <text x="65" y="26" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">ALERTA 1</text>
      <text x="65" y="44" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">Apps de tarefas pagas</text>
    </g>
    <g transform="translate(570, 150)">
      <rect width="130" height="60" rx="8" fill="#4c0519" stroke="#fb7185" stroke-width="2" />
      <text x="65" y="26" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">ALERTA 2</text>
      <text x="65" y="44" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">Pirâmides financeiras</text>
    </g>
  </svg>`),

  pagamentosSeguros: encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#064e3b" />
        <stop offset="100%" stop-color="#022c22" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg7)" />
    <!-- Bank card and Mobile Money phones -->
    <rect x="180" y="110" width="220" height="140" rx="14" fill="#047857" stroke="#34d399" stroke-width="3" />
    <rect x="200" y="140" width="40" height="28" rx="4" fill="#fbbf24" />
    <text x="200" y="195" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">M-PESA / BANCO</text>
    <text x="200" y="225" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11">Conta Verificada</text>

    <!-- International Globe Transfer -->
    <circle cx="540" cy="180" r="70" fill="#0f766e" stroke="#5eead4" stroke-width="3" />
    <text x="540" y="175" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">PAYONEER E WISE</text>
    <text x="540" y="195" fill="#99f6e4" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">USD / EUR / MZN</text>

    <!-- Transfer Arrow connecting both -->
    <path d="M410 180 L460 180" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 4" />

    <!-- Security bottom badge -->
    <rect x="250" y="290" width="300" height="45" rx="10" fill="#022c22" stroke="#10b981" stroke-width="2" />
    <text x="400" y="318" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Guarda Segura de Comprovativos</text>
  </svg>`),
};
