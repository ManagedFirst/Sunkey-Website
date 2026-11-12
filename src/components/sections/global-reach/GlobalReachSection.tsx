// src/components/sections/global-reach/GlobalReachSection.tsx
// Server component: section shell, heading, map, stat cards.
// Keep all client interactivity in WorldMap.tsx and CountUp.tsx.

import { Globe, Building2, Settings, Handshake, Award } from 'lucide-react'
import { WorldMap } from './WorldMap'
import { CountUp } from './CountUp'
import { STATS } from '@/data/global-reach'
import type { StatItem } from '@/data/global-reach'

const ICON_MAP = { Globe, Building2, Settings, Handshake, Award }

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const Icon = ICON_MAP[stat.icon]
  const delay = index * 80

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(13,15,20,.12)',
        borderRadius: '14px',
        padding: '20px 16px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: 10 }}>
        <Icon size={24} strokeWidth={1.6} style={{ color: '#FF5A1F' }} />
      </div>

      {/* Count-up number */}
      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.8rem,3.2vw,2.2rem)',
          color: '#0D0F14',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        <CountUp value={stat.value} suffix={stat.suffix} delay={delay} />
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.8rem',
          color: '#5A6072',
          marginTop: 6,
          lineHeight: 1.4,
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  )
}

export function GlobalReachSection() {
  return (
    <section
      id="global-reach"
      style={{ background: '#F7F8FB', padding: 'clamp(56px,8vw,90px) clamp(20px,4vw,40px)' }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        {/* ── Heading block ── */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#FF5A1F',
            }}
          >
            <span style={{ display: 'inline-block', width: 22, height: 2, background: '#FF5A1F', borderRadius: 1 }} />
            Countries We Serve
            <span style={{ display: 'inline-block', width: 22, height: 2, background: '#FF5A1F', borderRadius: 1 }} />
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem,3.5vw,2.4rem)',
              letterSpacing: '-0.3px',
              color: '#0D0F14',
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Global Reach.{' '}
            <span style={{ color: '#FF5A1F' }}>Connected from India.</span>
          </h2>

          {/* Sub-paragraph */}
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: '#5A6072',
              margin: 0,
            }}
          >
            Our Chennai-based manufacturing and engineering network supports customers
            worldwide with dependable PCB assembly, responsive engineering support and
            on-time export delivery.
          </p>
        </div>

        {/* ── World Map ── */}
        <WorldMap />

        {/* ── Stat cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 16,
            marginTop: 44,
          }}
          className="gr-stats-grid"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1100px) {
          .gr-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .gr-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
