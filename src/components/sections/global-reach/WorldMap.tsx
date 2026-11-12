'use client'

// src/components/sections/global-reach/WorldMap.tsx
// Real dot-grid equirectangular world map with great-circle arcs and Web Animations.

import { useRef, useEffect, useMemo } from 'react'
import mapGridData from '@/data/map-grid.json'
import { HQ, DESTINATIONS } from '@/data/global-reach'
import { FlagIcon } from './flags'

/* ── Projection constants (must match build-map-grid.mjs exactly) ── */
const STEP = 7, OFF = 3.5
const K = 254.634, X0 = 800, Y0 = 472.26, RAD = Math.PI / 180

const project = (lon: number, lat: number): [number, number] =>
  [X0 + K * lon * RAD, Y0 - K * lat * RAD]

/* Decode "j:i,i,...;j:i,..." to [x, y] screen coordinates */
const decodeGrid = (enc: string): [number, number][] =>
  enc.split(';').flatMap(row => {
    const idx = row.indexOf(':')
    const j = row.slice(0, idx)
    const list = row.slice(idx + 1)
    return list.split(',').map(i => [OFF + STEP * +i, OFF + STEP * +j] as [number, number])
  })

/* Build one <path> `d` with M x y h.01 per dot (round cap = round dot) */
const pathOf = (pts: [number, number][]) => pts.map(([x, y]) => `M${x} ${y}h.01`).join('')

/* ── Great-circle SLERP interpolation ───────────────────────────── */
function greatCircle(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number },
  n = 96
): [number, number][] {
  const p1 = [a.lat * RAD, a.lon * RAD]
  const p2 = [b.lat * RAD, b.lon * RAD]
  const sinHalfLat = Math.sin((p2[0] - p1[0]) / 2)
  const sinHalfLon = Math.sin((p2[1] - p1[1]) / 2)
  const d = 2 * Math.asin(
    Math.sqrt(sinHalfLat ** 2 + Math.cos(p1[0]) * Math.cos(p2[0]) * sinHalfLon ** 2)
  )
  const out: [number, number][] = []
  for (let i = 0; i <= n; i++) {
    const f = i / n
    const A = Math.sin((1 - f) * d) / Math.sin(d)
    const B = Math.sin(f * d) / Math.sin(d)
    const x = A * Math.cos(p1[0]) * Math.cos(p1[1]) + B * Math.cos(p2[0]) * Math.cos(p2[1])
    const y = A * Math.cos(p1[0]) * Math.sin(p1[1]) + B * Math.cos(p2[0]) * Math.sin(p2[1])
    const z = A * Math.sin(p1[0]) + B * Math.sin(p2[0])
    out.push(project(Math.atan2(y, x) / RAD, Math.atan2(z, Math.hypot(x, y)) / RAD))
  }
  return out
}

/* Convert point array to smooth quadratic-bezier SVG path */
const smoothPath = (pts: [number, number][]) => {
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2
    const my = (pts[i][1] + pts[i + 1][1]) / 2
    d += `Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`
  }
  const l = pts[pts.length - 1]
  return d + `L${l[0].toFixed(1)} ${l[1].toFixed(1)}`
}

/* Approximate character widths for label measurement without getComputedTextLength  */
const estimateWidth = (text: string, fontSize: number, bold: boolean) =>
  text.length * fontSize * (bold ? 0.60 : 0.52)

/* ── Main component ─────────────────────────────────────────────── */
export function WorldMap() {
  const svgRef  = useRef<SVGSVGElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const haloRef = useRef<SVGCircleElement>(null)

  /* ── Precompute (once) ── */
  const hqPt = useMemo(() => project(HQ.lon, HQ.lat), [])

  const { landPath, indiaPath } = useMemo(() => {
    const india   = decodeGrid(mapGridData.INDIA as string)
    const land    = decodeGrid(mapGridData.LAND  as string)
    // Near-HQ India dots get brand-orange tint; rest are neutral
    const near    = india.filter(([x, y]) => Math.hypot(x - hqPt[0], y - hqPt[1]) < 62)
    const farIndia = india.filter(([x, y]) => Math.hypot(x - hqPt[0], y - hqPt[1]) >= 62)
    return {
      landPath:  pathOf([...land, ...farIndia]),
      indiaPath: pathOf(near),
    }
  }, [hqPt])

  const routes = useMemo(() => DESTINATIONS.map(dest => {
    const pts    = greatCircle(HQ, dest)
    const destPt = project(dest.lon, dest.lat)
    return { dest, pts, d: smoothPath(pts), destPt }
  }), [])

  /* ── Label position helper ── */
  const labelPos = (pt: [number, number], side: 1 | -1, dy: number, name: string, sub?: string) => {
    const nameW = estimateWidth(name, 18.5, true)
    const subW  = sub ? estimateWidth(sub, 14.5, false) : 0
    const w     = 28 + Math.max(nameW, subW)
    const tx    = side > 0 ? pt[0] + 16 : pt[0] - 16 - w
    const ty    = pt[1] + dy + (sub ? -2 : 4)
    return { tx, ty, w }
  }

  /* ── Animation loop ── */
  useEffect(() => {
    const svg  = svgRef.current
    const wrap = wrapRef.current
    if (!svg || !wrap) return

    /* Reduced-motion: show everything static */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      svg.querySelectorAll<SVGElement>('.gr-dest').forEach(el => { el.style.opacity = '1' })
      svg.querySelectorAll<SVGPathElement>('.gr-route').forEach(el => {
        el.style.strokeDasharray = 'none'
        el.style.strokeDashoffset = '0'
        el.style.opacity = '1'
      })
      return
    }

    /* Mobile: scroll to centre HQ */
    const isMobile = window.innerWidth <= 560
    if (isMobile) {
      const scaleFactor = wrap.clientWidth / 1600
      const hqScreenX   = hqPt[0] * scaleFactor
      wrap.scrollLeft    = hqScreenX - wrap.clientWidth / 2
    }

    const pathEls  = Array.from(svg.querySelectorAll<SVGPathElement>('.gr-route'))
    const destEls  = Array.from(svg.querySelectorAll<SVGGElement>('.gr-dest'))
    const travelEls = Array.from(svg.querySelectorAll<SVGCircleElement>('.gr-travel'))
    const haloEl   = haloRef.current

    /* Measure path lengths and set up dasharray */
    const items = pathEls.map((path, i) => {
      const len = path.getTotalLength()
      path.style.strokeDasharray  = String(len)
      path.style.strokeDashoffset = String(len)
      return { path, len, g: destEls[i], travel: travelEls[i] }
    })

    /* Start HQ halo pulse */
    if (haloEl) {
      haloEl.animate(
        [{ r: '6', opacity: 0.45 }, { r: '26', opacity: 0 }],
        { duration: 3400, iterations: Infinity, easing: 'ease-out' }
      )
    }

    const EASE = 'cubic-bezier(.65,0,.35,1)'
    let cancelled = false

    const wait = (ms: number) => new Promise<void>(resolve => {
      const id = setTimeout(() => { if (!cancelled) resolve() }, ms)
      if (cancelled) { clearTimeout(id); resolve() }
    })

    async function draw(it: typeof items[0], dur: number) {
      const frames: Keyframe[] = []
      for (let k = 0; k <= 48; k++) {
        const p = it.path.getPointAtLength(it.len * k / 48)
        frames.push({ cx: p.x + 'px', cy: p.y + 'px', offset: k / 48 })
      }
      it.travel.setAttribute('opacity', '1')
      it.travel.animate(frames, { duration: dur, easing: EASE, fill: 'forwards' })
      const lineAnim = it.path.animate(
        [{ strokeDashoffset: String(it.len) }, { strokeDashoffset: '0' }],
        { duration: dur, easing: EASE, fill: 'forwards' }
      )
      await lineAnim.finished
      if (cancelled) return
      it.travel.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, fill: 'forwards' })
    }

    async function cycle(): Promise<void> {
      if (cancelled) return

      /* Reset state */
      items.forEach(it => {
        it.path.getAnimations().forEach(a => a.cancel())
        it.g.getAnimations().forEach(a => a.cancel())
        it.travel.getAnimations().forEach(a => a.cancel())
        it.path.style.strokeDashoffset = String(it.len)
        it.path.style.opacity          = '1'
        it.g.style.opacity             = '0'
        it.travel.setAttribute('opacity', '0')
      })

      for (const it of items) {
        if (cancelled) return
        await draw(it, 700)
        if (cancelled) return
        it.g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, easing: 'ease-out', fill: 'forwards' })
        await wait(250)
      }

      await wait(6000)
      if (cancelled) return

      /* Fade out everything */
      items.forEach(it => {
        it.path.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: 'forwards' })
        it.g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: 'forwards' })
      })

      await wait(1400)
      if (cancelled) return
      await wait(600)

      return cycle()
    }

    /* Only start once map enters viewport */
    let started = false
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        started = true
        cycle()
      }
    }, { threshold: 0.3 })
    observer.observe(wrap)

    return () => {
      cancelled = true
      observer.disconnect()
      svg.querySelectorAll<Element>('*').forEach(el => el.getAnimations().forEach(a => a.cancel()))
    }
  }, [hqPt])

  /* ── Render ── */
  const hqPos = labelPos(hqPt, HQ.side, HQ.dy, HQ.name, HQ.sub)

  return (
    <div
      ref={wrapRef}
      className="world-map-wrap"
      style={{
        position: 'relative',
        maxWidth: '1300px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '24px',
        border: '1px solid rgba(13,15,20,.12)',
        overflow: 'hidden',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <style>{`
        .world-map-wrap::-webkit-scrollbar { display: none; }
        .gr-map text  { font-family: Poppins, "Helvetica Neue", Arial, sans-serif; }
        .gr-map .gr-name { font-size: 18.5px; font-weight: 700; letter-spacing: .1px; }
        .gr-map .gr-sub  { font-size: 14.5px; font-weight: 400; fill: #9299A6; }
        .gr-map .gr-route{ fill: none; stroke: #FF5A1F; stroke-width: 1.3; stroke-linecap: round; }
        .gr-map .gr-lead { fill: none; stroke: #0D0F14; stroke-opacity: .22; stroke-width: 1; }
        .gr-map .gr-dest { opacity: 0; }
        @media (max-width: 560px) {
          .gr-map .gr-name  { font-size: 34px; }
          .gr-map .gr-sub   { font-size: 26px; }
          .gr-map .gr-route { stroke-width: 2.6; }
          .gr-map .gr-lead  { stroke-width: 2.2; }
        }
      `}</style>

      {/* Reserve aspect ratio to prevent layout shift */}
      <div style={{ paddingBottom: `${(648 / 1600) * 100}%`, position: 'relative', minWidth: 900 }}>
        <svg
          ref={svgRef}
          viewBox="0 88 1600 648"
          className="gr-map"
          aria-label="World map showing Sunkey global reach"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        >
          {/* Layer 1: Land dots (all land except near-HQ India) */}
          <path
            fill="none"
            stroke="#d8d6d5"
            strokeWidth="3.2"
            strokeLinecap="round"
            d={landPath}
          />

          {/* Layer 2: India near-HQ dots in brand orange */}
          <path
            fill="none"
            stroke="#FF5A1F"
            strokeOpacity={0.45}
            strokeWidth="3.2"
            strokeLinecap="round"
            d={indiaPath}
          />

          {/* Layer 3: Routes */}
          <g id="gr-routes">
            {routes.map(r => (
              <g key={r.dest.key}>
                <path className="gr-route" d={r.d} />
                <circle className="gr-travel" r="2.4" fill="#FF5A1F" opacity="0" />
              </g>
            ))}
          </g>

          {/* Layer 4: Marks */}
          <g id="gr-marks">

            {/* HQ marker */}
            <circle
              cx={hqPt[0]} cy={hqPt[1]}
              r="12"
              fill="rgba(255,90,31,0.1)"
            />
            <circle
              ref={haloRef}
              cx={hqPt[0]} cy={hqPt[1]}
              r="6"
              fill="none"
              stroke="#FF5A1F"
              strokeWidth="1.1"
              opacity="0"
            />
            <circle cx={hqPt[0]} cy={hqPt[1]} r="6"  fill="#FF5A1F" />
            <circle cx={hqPt[0]} cy={hqPt[1]} r="2.5" fill="#fff" />

            {/* HQ label */}
            <g transform={`translate(${hqPos.tx},${hqPos.ty})`}>
              <FlagIcon code={HQ.flag} x={0} y={HQ.sub ? -12.5 : -10.5} />
              <text x={28} y={HQ.sub ? 0 : 2} className="gr-name" fill="#FF5A1F">{HQ.name}</text>
              {HQ.sub && <text x={28} y={19} className="gr-sub">{HQ.sub}</text>}
            </g>

            {/* Destination markers and labels */}
            {routes.map(r => {
              const { dest, destPt } = r
              const pos = labelPos(destPt, dest.side, dest.dy, dest.name, dest.sub)
              return (
                <g key={dest.key}>
                  {/* Leader line when dy != 0 */}
                  {dest.dy !== 0 && (
                    <path
                      className="gr-lead"
                      d={`M${destPt[0]} ${destPt[1]} L${destPt[0]} ${destPt[1] + dest.dy} L${
                        dest.side > 0 ? pos.tx - 7 : pos.tx + pos.w + 7
                      } ${destPt[1] + dest.dy}`}
                    />
                  )}
                  {/* Marker dot */}
                  <circle cx={destPt[0]} cy={destPt[1]} r="6.5" fill="rgba(255,90,31,0.12)" />
                  <circle cx={destPt[0]} cy={destPt[1]} r="4.2" fill="#FF5A1F" />
                  {/* Fading label group */}
                  <g className="gr-dest" transform={`translate(${pos.tx},${pos.ty})`}>
                    <FlagIcon code={dest.flag} x={0} y={dest.sub ? -12.5 : -10.5} />
                    <text x={28} y={dest.sub ? 0 : 2} className="gr-name" fill="#0D0F14">{dest.name}</text>
                    {dest.sub && <text x={28} y={19} className="gr-sub">{dest.sub}</text>}
                  </g>
                </g>
              )
            })}
          </g>
        </svg>
      </div>
    </div>
  )
}
