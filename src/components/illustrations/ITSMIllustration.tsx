export function ITSMIllustration({ className = '' }: { className?: string }) {
  const tickets = [
    { id: 'INC-2847', title: 'VPN connectivity issue — Chennai office', priority: 'high', sla: '1h 23m', status: 'In Progress', tech: 'AK' },
    { id: 'INC-2848', title: 'Email delivery failure — 12 users', priority: 'critical', sla: '0h 34m', status: 'Open', tech: '--' },
    { id: 'INC-2849', title: 'Printer offline — Floor 3', priority: 'low', sla: '6h 00m', status: 'Open', tech: '--' },
    { id: 'SVC-1204', title: 'New employee onboarding — Ravi K.', priority: 'medium', sla: '3h 15m', status: 'In Progress', tech: 'PV' },
    { id: 'CHG-0391', title: 'Firewall rule update — Production', priority: 'high', sla: '2h 00m', status: 'Pending Approval', tech: 'JD' },
  ]
  const pColors: Record<string, string> = { critical: '#E8192C', high: '#F5A623', medium: '#2563EB', low: '#22c55e' }
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[150px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">SLA Compliance</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">97.8%</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">↑ This month</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Avg. Resolution</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">2.3 hrs</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">↓ 18% vs last month</p>
      </div>
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">servicedesk.manageengine.com</text>
        {/* Top metrics */}
        {[
          { label: 'Open', val: '48', color: '#F5A623' },
          { label: 'In Progress', val: '31', color: '#2563EB' },
          { label: 'Resolved Today', val: '67', color: '#22c55e' },
          { label: 'Breached', val: '2', color: '#E8192C' },
        ].map((m, i) => (
          <g key={i}>
            <rect x={16 + i * 134} y="50" width="126" height="56" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x={16 + i * 134} y="50" width="4" height="56" rx="2" fill={m.color}/>
            <text x={28 + i * 134} y="70" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">{m.label}</text>
            <text x={28 + i * 134} y="92" fontFamily="Inter,sans-serif" fontSize="24" fontWeight="700" fill="white">{m.val}</text>
          </g>
        ))}
        {/* Ticket list header */}
        <rect x="8" y="116" width="544" height="22" rx="4" fill="#1E293B"/>
        {['ID', 'TITLE', 'PRIORITY', 'SLA REMAINING', 'STATUS', 'TECH'].map((h, i) => (
          <text key={h} x={[20, 80, 290, 355, 430, 520][i]} y="131" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" fontWeight="600">{h}</text>
        ))}
        {/* Tickets */}
        {tickets.map((t, i) => (
          <g key={i}>
            <rect x="8" y={142 + i * 42} width="544" height="38" rx="4" fill={i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent'} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <text x="20" y={158 + i * 42} fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.9)">{t.id}</text>
            <text x="80" y={158 + i * 42} fontFamily="Inter,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.85)" fontWeight="500">{t.title.slice(0, 30)}{t.title.length > 30 ? '…' : ''}</text>
            <text x="80" y="170" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.3)"/>
            {/* Priority badge */}
            <rect x="286" y={147 + i * 42} width={t.priority === 'critical' ? 42 : t.priority === 'medium' ? 40 : 28} height="14" rx="7" fill={`${pColors[t.priority]}22`}/>
            <text x="292" y={158 + i * 42} fontFamily="Inter,sans-serif" fontSize="8" fill={pColors[t.priority]}>{t.priority}</text>
            {/* SLA */}
            <text x="355" y={158 + i * 42} fontFamily="monospace" fontSize="9" fill={parseFloat(t.sla) < 1 ? '#E8192C' : 'rgba(255,255,255,0.6)'}>{t.sla}</text>
            {/* Status */}
            <text x="430" y={158 + i * 42} fontFamily="Inter,sans-serif" fontSize="9" fill={t.status === 'Pending Approval' ? '#F5A623' : t.status === 'In Progress' ? '#2563EB' : 'rgba(255,255,255,0.5)'}>{t.status}</text>
            {/* Tech */}
            {t.tech !== '--' ? (
              <g><circle cx="528" cy={157 + i * 42} r="10" fill="rgba(37,99,235,0.2)"/><text x="528" y={161 + i * 42} fontFamily="Inter,sans-serif" fontSize="8" fill="#2563EB" textAnchor="middle" fontWeight="600">{t.tech}</text></g>
            ) : <text x="528" y={161 + i * 42} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.2)" textAnchor="middle">--</text>}
          </g>
        ))}
        {/* Bottom SLA bar */}
        <rect x="8" y="356" width="544" height="18" rx="4" fill="#1E293B"/>
        <text x="16" y="369" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">SLA Health: 97.8% compliant this month · 2 breaches · Auto-escalation active</text>
        <circle cx="540" cy="365" r="4" fill="#22c55e"/>
      </svg>
    </div>
  )
}
