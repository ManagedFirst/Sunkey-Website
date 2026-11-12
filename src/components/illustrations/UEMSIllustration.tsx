export function UEMSIllustration({ className = '' }: { className?: string }) {
  const devices = [
    { name: 'DESK-CHN-001', os: 'Win 11', patch: 100, status: 'Compliant', type: 'Desktop' },
    { name: 'LAPTOP-MUM-047', os: 'Win 10', patch: 87, status: 'Warning', type: 'Laptop' },
    { name: 'DESK-BLR-023', os: 'Win 11', patch: 100, status: 'Compliant', type: 'Desktop' },
    { name: 'MOBILE-CHN-112', os: 'Android 14', patch: 100, status: 'Compliant', type: 'Mobile' },
    { name: 'LAPTOP-HYD-008', os: 'macOS 14', patch: 62, status: 'Critical', type: 'Laptop' },
  ]
  const statusColor: Record<string, string> = { Compliant: '#22c55e', Warning: '#F5A623', Critical: '#E8192C' }
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[156px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Patch Compliance</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">94.2%</p>
        <div className="mt-2 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-blue rounded-full" style={{width:'94%'}}/></div>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Critical Patches</p>
        <p className="font-display font-bold text-red text-[22px] leading-none">47 pending</p>
        <p className="text-[10px] text-muted mt-1">Deploying in 2h</p>
      </div>
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">endpointcentral.manageengine.com</text>
        {/* Stats row */}
        {[
          { label: 'Total Endpoints', val: '1,247', icon: '■' },
          { label: 'Compliant', val: '1,174', color: '#22c55e' },
          { label: 'Warning', val: '61', color: '#F5A623' },
          { label: 'Critical', val: '12', color: '#E8192C' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={8 + i * 137} y="50" width="130" height="52" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <text x={20 + i * 137} y="70" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">{s.label}</text>
            <text x={20 + i * 137} y="90" fontFamily="Inter,sans-serif" fontSize="20" fontWeight="700" fill={s.color ?? 'white'}>{s.val}</text>
          </g>
        ))}
        {/* Patch compliance bar */}
        <rect x="8" y="112" width="544" height="36" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="20" y="127" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">Overall Patch Compliance</text>
        <text x="20" y="140" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">1,174 of 1,247 devices · Last scan: 4 minutes ago</text>
        <rect x="220" y="118" width="320" height="12" rx="6" fill="rgba(255,255,255,0.06)"/>
        <rect x="220" y="118" width="302" height="12" rx="6" fill="rgba(37,99,235,0.7)"/>
        <text x="464" y="129" fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" fontWeight="600">94.2%</text>
        {/* Devices table */}
        <rect x="8" y="158" width="544" height="22" rx="4" fill="#1E293B"/>
        {['DEVICE NAME', 'OS', 'PATCH SCORE', 'STATUS', 'TYPE'].map((h, i) => (
          <text key={h} x={[20, 180, 270, 360, 466][i]} y="173" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" fontWeight="600">{h}</text>
        ))}
        {devices.map((d, i) => (
          <g key={i}>
            <rect x="8" y={184 + i * 34} width="544" height="30" rx="4" fill={i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent'} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <text x="20" y={203 + i * 34} fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.8)">{d.name}</text>
            <text x="180" y={203 + i * 34} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">{d.os}</text>
            {/* Patch bar */}
            <rect x="270" y={193 + i * 34} width="80" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
            <rect x="270" y={193 + i * 34} width={d.patch * 0.8} height="8" rx="4" fill={d.patch >= 90 ? '#22c55e' : d.patch >= 70 ? '#F5A623' : '#E8192C'}/>
            <text x="356" y={202 + i * 34} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.6)">{d.patch}%</text>
            {/* Status */}
            <rect x="360" y={192 + i * 34} width={d.status === 'Compliant' ? 58 : d.status === 'Warning' ? 48 : 44} height="14" rx="7" fill={`${statusColor[d.status]}22`}/>
            <text x="368" y={203 + i * 34} fontFamily="Inter,sans-serif" fontSize="8" fill={statusColor[d.status]}>{d.status}</text>
            <text x="466" y={203 + i * 34} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">{d.type}</text>
          </g>
        ))}
        {/* Bottom actions */}
        <rect x="8" y="358" width="160" height="18" rx="4" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
        <text x="88" y="371" fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" textAnchor="middle">Deploy Critical Patches →</text>
        <text x="200" y="371" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Auto-deploy scheduled: Tonight 11:00 PM IST</text>
      </svg>
    </div>
  )
}
