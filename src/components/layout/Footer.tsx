import Link from 'next/link'
import { footerColumns, footerBottomBar } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        aria-hidden="true" />

      {/* Main footer */}
      <div className="site-container relative" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>

        {/* Tagline block */}
        <div style={{ marginBottom: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-display font-bold text-white leading-snug"
            style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
            Your ManageEngine. Our Expertise.
          </p>
          <p className="font-display font-bold text-white/60"
            style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
            Zero Hassle.
          </p>
          <p className="text-white/40 mt-2" style={{ fontSize: '13px' }}>
            Authorized ManageEngine Partner · Chennai, India · Pan-India delivery
          </p>
        </div>

        {/* 5-column links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map(col => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold uppercase tracking-[0.1em]"
                style={{ fontSize: '11px', marginBottom: '1.25rem' }}>
                {col.heading}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-white/50 hover:text-white transition-colors duration-200"
                      style={{ fontSize: '13px', lineHeight: 1.5 }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white/30" style={{ fontSize: '12px', lineHeight: 1.6, maxWidth: '560px' }}>
            ManagedFirst Technologies is an authorized ManageEngine partner in India.
            ManageEngine is a trademark of Zoho Corporation Pvt. Ltd.
            All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="site-container" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-white/60" style={{ fontSize: '12px' }}>
              {footerBottomBar.copyright}
            </p>
            <p className="text-white/40 sm:text-right" style={{ fontSize: '12px' }}>
              {footerBottomBar.cin ? <>{footerBottomBar.cin} &nbsp;·&nbsp; </> : null}Reg. Office: {footerBottomBar.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
