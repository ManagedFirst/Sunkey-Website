// UIPanel — a reusable UI mockup panel for internal section visuals
// Used within page body sections (not hero) to add visual depth
// Renders a mini browser-frame with content specific to the context

import { ReactNode } from 'react'

interface UIPanelProps {
  url?: string
  children: ReactNode
  className?: string
  height?: number
}

export function UIPanel({ url = 'manageengine.com', children, className = '', height = 280 }: UIPanelProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-border-default shadow-card-hover bg-[#0F172A] ${className}`}
      style={{ height }} aria-hidden="true">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1E293B] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"/>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"/>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"/>
        </div>
        <div className="flex-1 bg-[#0F172A] rounded-full px-3 py-1">
          <span className="text-[9px] text-white/30 font-mono">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 h-full overflow-hidden">{children}</div>
    </div>
  )
}

// MetricRow — a single metric/KPI row inside a UIPanel
export function MetricRow({ label, value, sub, color = '#2563EB', trend }: {
  label: string; value: string; sub?: string; color?: string; trend?: 'up' | 'down' | 'flat'
}) {
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '--'
  const trendColor = trend === 'up' ? '#22c55e' : trend === 'down' ? '#E8192C' : '#94A3B8'
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-[11px] text-white/50">{label}</span>
      <div className="flex items-center gap-2">
        {sub && <span className="text-[10px] text-white/30">{sub}</span>}
        {trend && <span className="text-[10px] font-medium" style={{ color: trendColor }}>{trendIcon}</span>}
        <span className="text-[12px] font-bold font-display" style={{ color }}>{value}</span>
      </div>
    </div>
  )
}

// StatusItem — a status row with indicator dot
export function StatusItem({ label, status, value }: {
  label: string; status: 'ok' | 'warn' | 'error'; value?: string
}) {
  const c = { ok: '#22c55e', warn: '#F5A623', error: '#E8192C' }[status]
  return (
    <div className="flex items-center gap-2 py-1.5">
      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c }}/>
      <span className="text-[11px] text-white/65 flex-1">{label}</span>
      {value && <span className="text-[10px] font-medium" style={{ color: c }}>{value}</span>}
    </div>
  )
}

// MiniChart — a simple SVG bar chart for UIPanel
export function MiniChart({ data, height = 60, color = '#2563EB' }: {
  data: number[]; height?: number; color?: string
}) {
  const max = Math.max(...data)
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${data.length * 18} ${height}`} preserveAspectRatio="none">
      {data.map((v, i) => {
        const barH = (v / max) * (height - 8)
        return (
          <rect key={i} x={i * 18 + 2} y={height - barH} width="14" height={barH} rx="3"
            fill={color} opacity={0.5 + (v / max) * 0.5}/>
        )
      })}
    </svg>
  )
}
