export function SIEMIllustration({ className = '' }: { className?: string }) {
  const events = [
    { time: '14:32:18', type: 'ALERT', msg: 'Brute force attempt — 47 failed logins', src: '192.168.1.104', severity: 'critical' },
    { time: '14:31:55', type: 'WARN', msg: 'Privileged account login — off-hours', src: 'srv-dc-01', severity: 'high' },
    { time: '14:31:22', type: 'INFO', msg: 'AD group membership changed — Domain Admins', src: 'DESK-JD-001', severity: 'medium' },
    { time: '14:30:47', type: 'INFO', msg: 'File access: /finance/Q3_Report.xlsx × 847', src: '192.168.10.23', severity: 'medium' },
    { time: '14:29:11', type: 'INFO', msg: 'VPN connection established — remote user', src: '103.45.22.187', severity: 'low' },
    { time: '14:28:33', type: 'INFO', msg: 'Firewall rule matched — outbound block', src: '192.168.1.88', severity: 'low' },
  ]
  const sColor: Record<string, string> = { critical: '#E8192C', high: '#F5A623', medium: '#2563EB', low: '#22c55e' }
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[160px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Events / Hour</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">14,830</p>
        <p className="text-[10px] text-red font-medium mt-1">↑ 2 critical alerts</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Threats Blocked</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">247 today</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">UEBA active</p>
      </div>
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">log360.manageengine.com · Live</text>
        {/* Threat gauge */}
        {[
          { label: 'Critical', val: '2', color: '#E8192C' },
          { label: 'High', val: '7', color: '#F5A623' },
          { label: 'Medium', val: '34', color: '#2563EB' },
          { label: 'Low', val: '204', color: '#22c55e' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={8 + i * 137} y="50" width="130" height="48" rx="8" fill="#1E293B" stroke={`${s.color}33`} strokeWidth="1.5"/>
            <rect x={8 + i * 137} y="50" width="130" height="4" rx="2" fill={s.color}/>
            <text x={20 + i * 137} y="72" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">{s.label} Severity</text>
            <text x={20 + i * 137} y="88" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="700" fill={s.color}>{s.val}</text>
          </g>
        ))}
        {/* Log stream */}
        <text x="8" y="116" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.7)">Live Log Stream</text>
        <circle cx="120" cy="112" r="4" fill="#E8192C" style={{animation:'pulseTeal 1s ease-in-out infinite'}}/>
        <text x="128" y="116" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(232,25,44,0.8)">LIVE</text>
        {/* Log header */}
        <rect x="8" y="122" width="544" height="18" rx="4" fill="#1E293B"/>
        {['TIME', 'TYPE', 'EVENT', 'SOURCE'].map((h, i) => (
          <text key={h} x={[20, 80, 130, 440][i]} y="135" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.35)" fontWeight="600">{h}</text>
        ))}
        {/* Log rows */}
        {events.map((e, i) => (
          <g key={i}>
            <rect x="8" y={144 + i * 32} width="544" height="28" rx="3" fill={i === 0 ? 'rgba(232,25,44,0.06)' : i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'}
              stroke={i === 0 ? 'rgba(232,25,44,0.2)' : 'rgba(255,255,255,0.03)'} strokeWidth="1"/>
            <text x="20" y={162 + i * 32} fontFamily="monospace" fontSize="8.5" fill="rgba(255,255,255,0.4)">{e.time}</text>
            {/* Type badge */}
            <rect x="76" y={148 + i * 32} width={e.type === 'ALERT' ? 34 : e.type === 'WARN' ? 30 : 24} height="12" rx="6" fill={`${sColor[e.severity]}22`}/>
            <text x="80" y={158 + i * 32} fontFamily="monospace" fontSize="7.5" fill={sColor[e.severity]} fontWeight="700">{e.type}</text>
            <text x="130" y={162 + i * 32} fontFamily="monospace" fontSize="9" fill={i === 0 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.65)'}>{e.msg.slice(0, 45)}{e.msg.length > 45 ? '…' : ''}</text>
            <text x="440" y={162 + i * 32} fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.35)">{e.src}</text>
          </g>
        ))}
        {/* Bottom - UEBA bar */}
        <rect x="8" y="342" width="544" height="32" rx="8" fill="#1E293B" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/>
        <rect x="8" y="342" width="544" height="4" rx="2" fill="rgba(124,58,237,0.5)"/>
        <text x="20" y="360" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" fill="rgba(124,58,237,0.9)">UEBA Active</text>
        <text x="90" y="360" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">User behaviour baselines established · Anomaly detection: enabled · Watching 847 identities</text>
        <circle cx="540" cy="358" r="4" fill="#7C3AED"/>
      </svg>
    </div>
  )
}
