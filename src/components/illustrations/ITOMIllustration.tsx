export function ITOMIllustration({ className = '' }: { className?: string }) {
  const nodes = [
    { x: 90, y: 140, label: 'Core Switch', status: 'up', type: 'switch' },
    { x: 200, y: 100, label: 'Firewall', status: 'up', type: 'fw' },
    { x: 200, y: 200, label: 'SAN Storage', status: 'warn', type: 'storage' },
    { x: 310, y: 80, label: 'Web Servers', status: 'up', type: 'server' },
    { x: 310, y: 160, label: 'App Cluster', status: 'up', type: 'server' },
    { x: 310, y: 240, label: 'DB Primary', status: 'down', type: 'db' },
    { x: 420, y: 120, label: 'Load Balancer', status: 'up', type: 'lb' },
    { x: 420, y: 240, label: 'DB Replica', status: 'warn', type: 'db' },
  ]
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[3,6],[4,6],[5,7]]
  const sColor: Record<string, string> = { up: '#22c55e', warn: '#F5A623', down: '#E8192C' }
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default min-w-[150px]">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Availability</p>
        <p className="font-display font-bold text-navy text-[22px] leading-none">99.97%</p>
        <p className="text-[10px] text-[#22c55e] font-medium mt-1">↑ SLA met</p>
      </div>
      <div className="absolute -bottom-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border-default">
        <p className="text-[10px] text-muted font-medium uppercase tracking-wide mb-1">Active Alerts</p>
        <p className="font-display font-bold text-red text-[22px] leading-none">3 critical</p>
        <p className="text-[10px] text-muted mt-1">DB Primary — down</p>
      </div>
      <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl rounded-2xl">
        <rect width="560" height="380" rx="14" fill="#0F172A"/>
        <rect width="560" height="40" rx="14" fill="#1E293B"/>
        <rect y="26" width="560" height="14" fill="#1E293B"/>
        <circle cx="22" cy="20" r="5" fill="#FF5F57"/><circle cx="38" cy="20" r="5" fill="#FEBC2E"/><circle cx="54" cy="20" r="5" fill="#28C840"/>
        <rect x="70" y="12" width="280" height="16" rx="8" fill="#0F172A"/>
        <text x="210" y="24" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">opmanager.manageengine.com</text>
        <text x="16" y="66" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="white">Network Topology — Live</text>
        <text x="16" y="80" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">124 devices monitored · Last poll: 45s</text>
        {/* Status pills */}
        {[['▪ 119 Up', '#22c55e'], ['▪ 3 Warning', '#F5A623'], ['▪ 2 Down', '#E8192C']].map(([l, c], i) => (
          <g key={i}><rect x={310 + i * 80} y="58" width="72" height="16" rx="8" fill={`${c}22`}/><text x={346 + i * 80} y="70" fontFamily="Inter,sans-serif" fontSize="8" fill={c} textAnchor="middle">{l}</text></g>
        ))}
        {/* Topology edges */}
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x + 16} y1={nodes[a].y} x2={nodes[b].x + 16} y2={nodes[b].y}
            stroke={nodes[a].status === 'down' || nodes[b].status === 'down' ? 'rgba(232,25,44,0.3)' : nodes[a].status === 'warn' || nodes[b].status === 'warn' ? 'rgba(245,166,35,0.3)' : 'rgba(37,99,235,0.25)'}
            strokeWidth="1.5" strokeDasharray={nodes[a].status === 'down' || nodes[b].status === 'down' ? '4 3' : 'none'}/>
        ))}
        {/* Topology nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y - 14} width="80" height="28" rx="8"
              fill={n.status === 'down' ? 'rgba(232,25,44,0.12)' : n.status === 'warn' ? 'rgba(245,166,35,0.12)' : 'rgba(37,99,235,0.12)'}
              stroke={sColor[n.status]} strokeWidth="1.2"/>
            <circle cx={n.x + 8} cy={n.y} r="4" fill={sColor[n.status]}/>
            <text x={n.x + 18} y={n.y + 4} fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.8)">{n.label}</text>
          </g>
        ))}
        {/* Right panel — Alerts */}
        <rect x="508" y="50" width="1" height="320" fill="rgba(255,255,255,0.06)"/>
        <rect x="516" y="50" width="36" height="320" rx="8" fill="#1E293B"/>
        <text x="534" y="76" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle" transform="rotate(90, 534, 76)">ALERTS</text>
        {['E','W','W','I','I','I','I'].map((level, i) => {
          const c = level === 'E' ? '#E8192C' : level === 'W' ? '#F5A623' : '#2563EB'
          return <rect key={i} x="522" y={64 + i * 44} width="24" height="36" rx="6" fill={`${c}22`} stroke={c} strokeWidth="1"/>
        })}
        {/* Bottom bandwidth chart */}
        <rect x="8" y="305" width="496" height="68" rx="8" fill="#1E293B" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="20" y="322" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">Bandwidth Utilisation</text>
        <text x="20" y="334" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.3)">Avg: 1.2 Gbps · Peak: 3.8 Gbps · Uplink capacity: 10 Gbps</text>
        {/* Mini bar chart */}
        {[45, 62, 38, 71, 55, 88, 49, 63, 77, 54, 41, 68].map((h, i) => (
          <g key={i}>
            <rect x={20 + i * 38} y={370 - h * 0.28} width="30" height={h * 0.28} rx="3" fill={h > 80 ? 'rgba(245,166,35,0.6)' : 'rgba(37,99,235,0.5)'}/>
          </g>
        ))}
        <text x="480" y="345" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.3)">Live ●</text>
        <circle cx="498" cy="342" r="3" fill="#22c55e"/>
      </svg>
    </div>
  )
}
