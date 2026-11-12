// ManagedFirst Technologies — Hero Dashboard Illustration
// Inline SVG representing a ManageEngine-style IT management dashboard
// Animated with CSS: float, drawPath on chart line, pulsing status dots

export function DashboardIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-float ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 620 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[560px] drop-shadow-2xl"
        role="img"
        aria-label="ManageEngine IT management dashboard illustration"
      >
        {/* ── Background shell ─────────────────────────────────────────── */}
        <rect x="0" y="0" width="620" height="420" rx="12" fill="#0F1E45" />
        
        {/* ── Top navigation bar ────────────────────────────────────────── */}
        <rect x="0" y="0" width="620" height="44" rx="12" fill="#0B2D78" />
        <rect x="0" y="32" width="620" height="12" fill="#0B2D78" />
        
        {/* Top nav — logo area */}
        <rect x="16" y="12" width="28" height="20" rx="4" fill="#0099A8" opacity="0.9" />
        <text x="50" y="27" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="white" opacity="0.9">ManagedFirst</text>
        
        {/* Top nav — links */}
        {['Dashboard', 'Devices', 'Patches', 'Reports', 'Settings'].map((label, i) => (
          <text key={label} x={160 + i * 72} y="27" fontFamily="Inter,sans-serif" fontSize="10"
            fill={i === 0 ? '#0099A8' : 'rgba(255,255,255,0.55)'} fontWeight={i === 0 ? '600' : '400'}>
            {label}
          </text>
        ))}

        {/* Top nav — right icons */}
        <circle cx="580" cy="22" r="10" fill="rgba(255,255,255,0.08)" />
        <circle cx="600" cy="22" r="10" fill="rgba(255,255,255,0.08)" />
        <circle cx="580" cy="22" r="3" fill="rgba(255,255,255,0.4)" />
        <circle cx="600" cy="22" r="3" fill="rgba(255,255,255,0.4)" />

        {/* ── Left sidebar ─────────────────────────────────────────────── */}
        <rect x="0" y="44" width="52" height="376" fill="#0a1e40" />
        
        {/* Sidebar icons */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="14" y={68 + i * 48} width="24" height="24" rx="6"
            fill={i === 0 ? 'rgba(0,153,168,0.25)' : 'rgba(255,255,255,0.04)'}
            stroke={i === 0 ? '#0099A8' : 'transparent'} strokeWidth="1" />
        ))}
        {/* Active sidebar icon indicator */}
        <rect x="0" y="68" width="3" height="24" rx="1.5" fill="#0099A8" />
        
        {/* Sidebar icon glyphs (simplified) */}
        <rect x="20" y="75" width="12" height="2" rx="1" fill={`rgba(0,153,168,0.8)`} />
        <rect x="20" y="79" width="8" height="2" rx="1" fill={`rgba(0,153,168,0.8)`} />
        <rect x="20" y="83" width="12" height="2" rx="1" fill={`rgba(0,153,168,0.8)`} />
        
        {[1,2,3,4,5].map((i) => (
          <g key={i}>
            <rect x="20" y={75 + i*48} width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x="20" y={79 + i*48} width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
          </g>
        ))}

        {/* ── Main content area ─────────────────────────────────────────── */}
        
        {/* Page header */}
        <text x="68" y="72" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="white" opacity="0.9">
          IT Operations Overview
        </text>
        <text x="68" y="88" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.45)">
          Last updated: 2 minutes ago
        </text>

        {/* ── Metric Cards Row ─────────────────────────────────────────── */}
        
        {/* Card 1 — Uptime */}
        <rect x="68" y="102" width="156" height="82" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="82" y="122" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">SYSTEM UPTIME</text>
        <text x="82" y="148" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="700" fill="white">99.8%</text>
        <rect x="82" y="158" width="60" height="3" rx="1.5" fill="#0099A8" opacity="0.3" />
        <rect x="82" y="158" width="55" height="3" rx="1.5" fill="#0099A8" />
        <text x="82" y="175" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(0,153,168,0.8)">↑ 0.2% from last week</text>

        {/* Card 2 — Tickets */}
        <rect x="236" y="102" width="156" height="82" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="250" y="122" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">OPEN TICKETS</text>
        <text x="250" y="148" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="700" fill="white">24</text>
        <text x="288" y="148" fontFamily="Inter,sans-serif" fontSize="11" fill="rgba(255,255,255,0.35)" alignmentBaseline="middle">/172</text>
        <text x="250" y="175" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(245,166,35,0.9)">● 3 critical · 8 high</text>

        {/* Card 3 — Endpoints */}
        <rect x="404" y="102" width="156" height="82" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="418" y="122" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">ENDPOINTS</text>
        <text x="418" y="148" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="700" fill="white">847</text>
        <text x="418" y="175" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(0,153,168,0.8)">
          <tspan fill="rgba(255,255,255,0.4)">Patched: </tspan>831 / 847
        </text>

        {/* ── Performance Chart ─────────────────────────────────────────── */}
        <rect x="68" y="196" width="324" height="148" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="82" y="216" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="white" opacity="0.8">Network Performance</text>
        <text x="82" y="230" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">Last 7 days — Avg response time (ms)</text>

        {/* Chart grid lines */}
        {[0,1,2,3].map((i) => (
          <line key={i} x1="82" y1={250 + i * 22} x2="378" y2={250 + i * 22}
            stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}

        {/* Y-axis labels */}
        {['120', '90', '60', '30'].map((v, i) => (
          <text key={v} x="78" y={253 + i * 22} fontFamily="Inter,sans-serif" fontSize="8"
            fill="rgba(255,255,255,0.3)" textAnchor="end">{v}</text>
        ))}

        {/* X-axis labels */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
          <text key={d} x={108 + i * 44} y="335" fontFamily="Inter,sans-serif" fontSize="8"
            fill="rgba(255,255,255,0.3)" textAnchor="middle">{d}</text>
        ))}

        {/* Chart area fill */}
        <path
          d="M108,289 L152,276 L196,268 L240,282 L284,261 L328,272 L372,258 L372,330 L108,330 Z"
          fill="url(#chartGrad)" opacity="0.2"
        />
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0099A8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0099A8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Chart line — animated drawPath */}
        <path
          d="M108,289 L152,276 L196,268 L240,282 L284,261 L328,272 L372,258"
          fill="none"
          stroke="#0099A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="400"
          style={{ animation: 'drawPath 1.5s ease 0.5s both' }}
        />

        {/* Data points */}
        {[[108,289],[152,276],[196,268],[240,282],[284,261],[328,272],[372,258]].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0d2550" stroke="#0099A8" strokeWidth="2" />
        ))}

        {/* ── Alerts / Recent Activity panel ───────────────────────────── */}
        <rect x="404" y="196" width="156" height="148" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="418" y="216" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="white" opacity="0.8">Recent Alerts</text>

        {[
          { label: 'CPU spike — SRV-04', time: '2m ago', color: '#E8192C', status: 'critical' },
          { label: 'Patch deployed — 47 devices', time: '14m ago', color: '#0099A8', status: 'info' },
          { label: 'Login anomaly detected', time: '31m ago', color: '#F5A623', status: 'warn' },
          { label: 'Backup completed', time: '1h ago', color: '#0099A8', status: 'info' },
        ].map((alert, i) => (
          <g key={i}>
            <rect x="418" y={228 + i * 28} width="128" height="22" rx="4" fill="rgba(255,255,255,0.03)" />
            {/* Status dot */}
            <circle cx="426" cy={239 + i * 28} r="3.5" fill={alert.color}
              style={alert.status === 'critical' ? { animation: 'pulseTeal 1.5s ease-in-out infinite' } : undefined} />
            <text x="434" y={237 + i * 28} fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.75)">
              {alert.label.slice(0, 22)}{alert.label.length > 22 ? '…' : ''}
            </text>
            <text x="434" y={247 + i * 28} fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.3)">
              {alert.time}
            </text>
          </g>
        ))}

        {/* ── Patch Compliance Bar ─────────────────────────────────────── */}
        <rect x="68" y="356" width="492" height="52" rx="8" fill="#0d2550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="82" y="375" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white" opacity="0.7">Patch Compliance</text>
        <text x="82" y="388" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">
          831 of 847 endpoints patched — 98.1% compliant
        </text>
        {/* Progress bar */}
        <rect x="82" y="395" width="462" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
        <rect x="82" y="395" width="453" height="5" rx="2.5" fill="#0099A8" opacity="0.85" />
        <circle cx="535" cy="397.5" r="5" fill="#0099A8" />

        {/* Status indicators — bottom right */}
        <circle cx="570" cy="397" r="4" fill="#22c55e" style={{ animation: 'pulseTeal 2s ease-in-out infinite' }} />
        <text x="578" y="400" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.4)">Live</text>
      </svg>
    </div>
  )
}
