export function ComplianceIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[156px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Sample Score</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">94.7%</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">Illustrative only</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Next Report</p>
        <p className="font-display font-bold text-navy text-[18px] leading-tight">Auto-scheduled</p>
        <p className="text-[10px] text-muted mt-1">Every Monday 8AM</p>
      </div>
      <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="480" height="340" rx="14" fill="#0F172A"/>
        <rect width="480" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="480" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <text x="240" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">DPDPA Compliance Report · Illustrative Example</text>
        <text x="20" y="65" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="white">DPDPA Compliance Report</text>
        <text x="20" y="80" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">Sample data · Illustrative only · Prepared by ManageEngine</text>
        {/* 5 obligations */}
        {[
          { title: 'Reasonable Security Safeguards', tool: 'Log360 + Endpoint Central', status: 'COMPLIANT', pct: 97 },
          { title: 'Breach Detection Capability', tool: 'Log360 (UEBA active)', status: 'COMPLIANT', pct: 100 },
          { title: 'Access Controls & Accountability', tool: 'AD360 + ADAudit Plus', status: 'COMPLIANT', pct: 95 },
          { title: 'Data Accuracy & Deletion', tool: 'ADAudit Plus + ADManager', status: 'REVIEW', pct: 82 },
          { title: 'Data Principal Rights Response', tool: 'Log360 (search indexed)', status: 'COMPLIANT', pct: 91 },
        ].map((ob, i) => (
          <g key={i}>
            <rect x="20" y={96 + i * 44} width="440" height="38" rx="8" fill="#1E293B" stroke={ob.status === 'REVIEW' ? 'rgba(245,166,35,0.3)' : 'rgba(34,197,94,0.15)'} strokeWidth="1"/>
            <rect x="20" y={96 + i * 44} width="4" height="38" rx="2" fill={ob.status === 'REVIEW' ? '#F5A623' : '#22c55e'}/>
            <text x="32" y={112 + i * 44} fontFamily="Inter,sans-serif" fontSize="9.5" fontWeight="600" fill="rgba(255,255,255,0.85)">{ob.title}</text>
            <text x="32" y={125 + i * 44} fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">{ob.tool}</text>
            {/* Progress */}
            <rect x="330" y={106 + i * 44} width="80" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
            <rect x="330" y={106 + i * 44} width={ob.pct * 0.8} height="6" rx="3" fill={ob.status === 'REVIEW' ? '#F5A623' : '#22c55e'}/>
            <text x="416" y={112 + i * 44} fontFamily="Inter,sans-serif" fontSize="9" fill={ob.status === 'REVIEW' ? '#F5A623' : '#22c55e'} fontWeight="600">{ob.pct}%</text>
            {/* Status badge */}
            <rect x="340" y={119 + i * 44} width={ob.status === 'REVIEW' ? 42 : 62} height="12" rx="6" fill={ob.status === 'REVIEW' ? 'rgba(245,166,35,0.15)' : 'rgba(34,197,94,0.15)'}/>
            <text x={361 + (ob.status === 'REVIEW' ? -10 : 0)} y={129 + i * 44} fontFamily="Inter,sans-serif" fontSize="7.5" fill={ob.status === 'REVIEW' ? '#F5A623' : '#22c55e'} textAnchor="middle">{ob.status}</text>
          </g>
        ))}
        {/* Footer */}
        <rect x="20" y="320" width="440" height="16" rx="4" fill="rgba(37,99,235,0.1)"/>
        <text x="240" y="332" fontFamily="Inter,sans-serif" fontSize="8.5" fill="rgba(37,99,235,0.8)" textAnchor="middle">Illustrative example — actual coverage depends on scope and environment</text>
      </svg>
    </div>
  )
}
