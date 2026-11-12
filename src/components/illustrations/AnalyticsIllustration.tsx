export function AnalyticsIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[156px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Data Sources</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">8 connected</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">All synced</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">SLA Trend</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">↑ 3.2%</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">This quarter</p>
      </div>
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">analyticsplus.manageengine.com</text>
        <text x="16" y="66" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="white">IT Operations Dashboard</text>
        <text x="16" y="80" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">Unified view · 8 data sources · Auto-refreshed every 5 minutes</text>
        {/* KPI cards */}
        {[
          { label: 'Ticket SLA', val: '97.8%', trend: '↑', color: '#22c55e', sub: 'vs 94.6% last month' },
          { label: 'Patch Rate', val: '94.2%', trend: '↑', color: '#2563EB', sub: '1,174 / 1,247 devices' },
          { label: 'MTTR', val: '2.3 hrs', trend: '↓', color: '#22c55e', sub: '↓18% improved' },
          { label: 'Open Tickets', val: '48', trend: '↓', color: '#F5A623', sub: 'vs 67 last week' },
        ].map((k, i) => (
          <g key={i}>
            <rect x={8 + i * 137} y="90" width="130" height="72" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <text x={20 + i * 137} y="110" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">{k.label}</text>
            <text x={20 + i * 137} y="136" fontFamily="Inter,sans-serif" fontSize="20" fontWeight="700" fill={k.color}>{k.val}</text>
            <text x={20 + i * 137} y="153" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.3)">{k.sub}</text>
          </g>
        ))}
        {/* Line chart */}
        <rect x="8" y="172" width="348" height="140" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="20" y="191" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">SLA Performance — 12 months</text>
        {/* Grid */}
        {[0,1,2,3].map(i => (<line key={i} x1="20" y1={210 + i * 28} x2="348" y2={210 + i * 28} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>))}
        {/* Area fill */}
        <path d="M20,268 L50,262 L82,255 L114,258 L146,248 L178,244 L210,252 L242,243 L274,238 L306,240 L338,232 L338,298 L20,298 Z" fill="url(#ag1)" opacity="0.3"/>
        <path d="M20,268 L50,262 L82,255 L114,258 L146,248 L178,244 L210,252 L242,243 L274,238 L306,240 L338,232" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
        {/* Second line */}
        <path d="M20,285 L50,280 L82,278 L114,282 L146,275 L178,271 L210,268 L242,264 L274,260 L306,263 L338,255" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2"/>
        <defs><linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2563EB" stopOpacity="0.4"/><stop offset="100%" stopColor="#2563EB" stopOpacity="0"/></linearGradient></defs>
        {/* X-axis */}
        {['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'].map((m, i) => (
          <text key={m} x={20 + i * 29} y="308" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.25)" textAnchor="middle">{m}</text>
        ))}
        {/* Data source breakdown */}
        <rect x="364" y="172" width="188" height="140" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="376" y="191" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">Connected Sources</text>
        {['ServiceDesk Plus', 'OpManager Plus', 'Endpoint Central', 'Log360', 'ADAudit Plus', 'PAM360'].map((src, i) => (
          <g key={i}>
            <circle cx="380" cy={207 + i * 18} r="4" fill={['#2563EB','#06B6D4','#22c55e','#7C3AED','#F5A623','#E8192C'][i]}/>
            <text x="390" y={211 + i * 18} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">{src}</text>
            <circle cx="544" cy={207 + i * 18} r="3" fill="#22c55e"/>
          </g>
        ))}
        {/* Pie chart mini */}
        <rect x="8" y="322" width="544" height="50" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="20" y="340" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">Incident Distribution by Category</text>
        {[['Network', 34, '#2563EB'], ['Endpoint', 28, '#06B6D4'], ['Access', 19, '#7C3AED'], ['App', 12, '#22c55e'], ['Other', 7, '#F5A623']].map(([cat, pct, color], i) => (
          <g key={i}>
            <rect x={20 + i * 106} y="350" width={pct as number * 0.8} height="12" rx="6" fill={color as string}/>
            <text x={20 + i * 106} y="347" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.4)">{cat}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}
