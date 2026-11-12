export function IndustryIllustration({ title = 'Enterprise IT', controls = [], className = '' }: {
  title?: string
  controls?: { label: string; status: 'pass' | 'warn' | 'fail' }[]
  className?: string
}) {
  const defaultControls = [
    { label: 'Access controls configured', status: 'pass' as const },
    { label: 'Privileged accounts vaulted', status: 'pass' as const },
    { label: 'Endpoint patch compliance', status: 'warn' as const },
    { label: 'SIEM monitoring active', status: 'pass' as const },
    { label: 'Audit logs retained (90d)', status: 'pass' as const },
    { label: 'Change management active', status: 'warn' as const },
    { label: 'Compliance reports scheduled', status: 'fail' as const },
  ]
  const items = controls.length > 0 ? controls : defaultControls
  const statusColor = { pass: '#22c55e', warn: '#F5A623', fail: '#E8192C' }
  const statusIcon = { pass: '✓', warn: '!', fail: '✗' }
  const passed = items.filter(i => i.status === 'pass').length
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[150px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Controls Met</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">{passed}/{items.length}</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">Sample data</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Compliance</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">{Math.round(passed / items.length * 100)}%</p>
        <p className="text-[10px] text-muted mt-1">Illustrative data</p>
      </div>
      <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="480" height="340" rx="14" fill="#0F172A"/>
        <rect width="480" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="480" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <text x="240" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">IT Compliance Assessment · {title}</text>
        <text x="20" y="65" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="white">IT Control Checklist</text>
        <text x="20" y="80" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">Illustrative sample · {passed} of {items.length} controls shown</text>
        {/* Progress bar */}
        <rect x="20" y="88" width="440" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
        <rect x="20" y="88" width={440 * passed / items.length} height="8" rx="4" fill="#22c55e"/>
        {/* Control items */}
        {items.map((item, i) => (
          <g key={i}>
            <rect x="20" y={106 + i * 30} width="440" height="26" rx="6" fill={i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent"} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <rect x="28" y={113 + i * 30} width="12" height="12" rx="3" fill={`${statusColor[item.status]}22`} stroke={statusColor[item.status]} strokeWidth="1"/>
            <text x="34" y={123 + i * 30} fontFamily="Inter,sans-serif" fontSize="8" fill={statusColor[item.status]} textAnchor="middle" fontWeight="700">{statusIcon[item.status]}</text>
            <text x="48" y={123 + i * 30} fontFamily="Inter,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.75)">{item.label}</text>
            <text x="420" y={123 + i * 30} fontFamily="Inter,sans-serif" fontSize="8" fill={statusColor[item.status]}>{item.status.toUpperCase()}</text>
          </g>
        ))}
        {/* Bottom CTA */}
        <rect x="20" y={118 + items.length * 30} width="440" height="24" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
        <text x="240" y={134 + items.length * 30} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(37,99,235,0.9)" textAnchor="middle">ManagedFirst configures ManageEngine to meet every control above</text>
      </svg>
    </div>
  )
}
