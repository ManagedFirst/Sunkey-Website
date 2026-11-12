// IAM Hero Illustration — User provisioning / access governance UI mockup
export function IAMIllustration({ className = '' }: { className?: string }) {
  const users = [
    { name: 'Priya Sharma', role: 'Finance Manager', dept: 'Finance', status: 'active', since: '2d ago' },
    { name: 'Arjun Mehta', role: 'IT Admin', dept: 'IT', status: 'active', since: '5d ago' },
    { name: 'Kavitha Rajan', role: 'HR Executive', dept: 'HR', status: 'pending', since: '1d ago' },
    { name: 'Rohit Verma', role: 'Sales Lead', dept: 'Sales', status: 'active', since: '7d ago' },
    { name: 'Neha Patel', role: 'Developer', dept: 'Engineering', status: 'revoked', since: '3d ago' },
  ]
  const statusColor: Record<string, string> = {
    active: '#22c55e', pending: '#F5A623', revoked: '#E8192C',
  }
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Floating card — top right */}
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[160px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Access Reviews</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">3 pending</p>
        <p className="text-[10px] text-red font-medium mt-1">Due in 2 days</p>
      </div>
      {/* Floating card — bottom left */}
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Provisioned Today</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">14 users</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">↑ Automated</p>
      </div>
      {/* Browser frame */}
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        {/* Chrome bar */}
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">manageengine.com/ad360</text>
        {/* Sidebar */}
        <rect x="0" y="40" width="150" height="340" rx="0" fill="#1E293B"/>
        <rect x="0" y="40" width="150" height="340" fill="#1E293B"/>
        <text x="16" y="68" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.9)">AD360</text>
        {[
          ['Users & Groups', true], ['Access Reviews', false],
          ['Provisioning', false], ['MFA / SSO', false],
          ['Audit Logs', false], ['Compliance', false],
        ].map(([label, active], i) => (
          <g key={i}>
            <rect x="8" y={82 + i * 36} width="134" height="28" rx="6" fill={active ? 'rgba(37,99,235,0.2)' : 'transparent'}/>
            <rect x="8" y={82 + i * 36} width="3" height="28" rx="1.5" fill={active ? '#2563EB' : 'transparent'}/>
            <text x="20" y={101 + i * 36} fontFamily="Inter,sans-serif" fontSize="10" fill={active ? 'white' : 'rgba(255,255,255,0.45)'}>{label as string}</text>
          </g>
        ))}
        {/* Main content */}
        <rect x="150" y="40" width="410" height="340" fill="#0F172A"/>
        <text x="166" y="70" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="white">User Lifecycle Management</text>
        <text x="166" y="86" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.4)">847 total users · 12 provisioned this week</text>
        {/* Search + filter row */}
        <rect x="166" y="96" width="200" height="24" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <text x="180" y="112" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Search users...</text>
        <rect x="378" y="96" width="80" height="24" rx="6" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.4)" strokeWidth="1"/>
        <text x="418" y="112" fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" textAnchor="middle">+ Add User</text>
        {/* Table header */}
        <rect x="166" y="130" width="378" height="24" rx="4" fill="#1E293B"/>
        {['NAME & ROLE', 'DEPT', 'STATUS', 'ADDED'].map((h, i) => (
          <text key={h} x={[180, 316, 380, 462][i]} y="146" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" fontWeight="600">{h}</text>
        ))}
        {/* User rows */}
        {users.map((u, i) => (
          <g key={i}>
            <rect x="166" y={158 + i * 38} width="378" height="36" rx="4" fill={i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            {/* Avatar */}
            <circle cx="190" cy={176 + i * 38} r="11" fill={`rgba(37,99,235,${0.15 + i * 0.05})`}/>
            <text x="190" y={180 + i * 38} fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" textAnchor="middle" fontWeight="600">{u.name.split(' ').map(n => n[0]).join('')}</text>
            <text x="207" y={172 + i * 38} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.85)" fontWeight="500">{u.name}</text>
            <text x="207" y={183 + i * 38} fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">{u.role}</text>
            <text x="316" y={177 + i * 38} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">{u.dept}</text>
            {/* Status badge */}
            <rect x="372" y={168 + i * 38} width={u.status === 'pending' ? 48 : u.status === 'revoked' ? 44 : 40} height="16" rx="8" fill={`${statusColor[u.status]}22`}/>
            <circle cx="382" cy={176 + i * 38} r="3" fill={statusColor[u.status]}/>
            <text x="388" y={180 + i * 38} fontFamily="Inter,sans-serif" fontSize="8" fill={statusColor[u.status]}>{u.status}</text>
            <text x="462" y={177 + i * 38} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">{u.since}</text>
          </g>
        ))}
        {/* Bottom pagination */}
        <text x="180" y="368" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Showing 5 of 847 users</text>
        <rect x="454" y="354" width="40" height="20" rx="4" fill="rgba(37,99,235,0.2)"/>
        <text x="474" y="368" fontFamily="Inter,sans-serif" fontSize="9" fill="#2563EB" textAnchor="middle">Next →</text>
      </svg>
    </div>
  )
}
