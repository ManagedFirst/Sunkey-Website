export function ServicesIllustration({ className = '' }: { className?: string }) {
  const phases = [
    { label: 'Assess', weeks: '1--2', items: ['Environment review', 'Gap analysis', 'Compliance audit'], color: '#2563EB' },
    { label: 'Design', weeks: '2--3', items: ['Architecture plan', 'Process mapping', 'Config blueprint'], color: '#7C3AED' },
    { label: 'Deploy', weeks: '3--8', items: ['Installation', 'Configuration', 'Integration'], color: '#06B6D4' },
    { label: 'Handover', weeks: '8--9', items: ['Training', 'Runbook delivery', 'Go-live support'], color: '#22c55e' },
  ]
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[150px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Typical Duration</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">6--10 weeks</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">End-to-end</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Deliverable</p>
        <p className="font-display font-bold text-navy text-[18px] leading-tight">Config runbook</p>
        <p className="text-[10px] text-muted mt-1">Yours to keep</p>
      </div>
      <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="480" height="340" rx="14" fill="#0F172A"/>
        <rect width="480" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="480" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <text x="240" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">ManagedFirst Implementation Roadmap</text>
        <text x="20" y="65" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="white">Implementation Roadmap</text>
        <text x="20" y="80" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">Your ManageEngine deployment — end to end</text>
        {/* Timeline bar */}
        <rect x="20" y="95" width="440" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        {phases.map((p, i) => (
          <rect key={i} x={20 + i * 110} y="95" width="106" height="4" rx="2" fill={p.color}/>
        ))}
        {/* Phase cards */}
        {phases.map((p, i) => (
          <g key={i}>
            <circle cx={20 + i * 110} cy="97" r="7" fill={p.color}/>
            <rect x={8 + i * 110} y="112" width="112" height="148" rx="8" fill="#1E293B" stroke={`${p.color}44`} strokeWidth="1.5"/>
            <rect x={8 + i * 110} y="112" width="112" height="4" rx="2" fill={p.color}/>
            <text x={14 + i * 110} y="130" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white">{p.label}</text>
            <text x={14 + i * 110} y="144" fontFamily="Inter,sans-serif" fontSize="8" fill={p.color}>Week {p.weeks}</text>
            {p.items.map((item, j) => (
              <g key={j}>
                <circle cx={18 + i * 110} cy={160 + j * 26} r="3" fill={p.color}/>
                <text x={26 + i * 110} y={164 + j * 26} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">{item}</text>
              </g>
            ))}
            {/* Checkmark for completed */}
            {i < 2 && <text x={96 + i * 110} y="132" fontFamily="Inter,sans-serif" fontSize="14" fill={p.color}>✓</text>}
            {i === 2 && <text x={96 + i * 110} y="132" fontFamily="Inter,sans-serif" fontSize="10" fill={p.color}>→</text>}
          </g>
        ))}
        {/* Bottom runbook */}
        <rect x="8" y="270" width="464" height="60" rx="8" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
        <text x="20" y="289" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">Configuration Runbook</text>
        <text x="20" y="305" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.45)">Every setting applied · Every integration built · Every workflow documented</text>
        <text x="20" y="320" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(37,99,235,0.8)">→ Your team operates independently after handover</text>
        <rect x="380" y="278" width="80" height="22" rx="6" fill="rgba(37,99,235,0.2)"/>
        <text x="420" y="293" fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" textAnchor="middle">Download ↓</text>
      </svg>
    </div>
  )
}
