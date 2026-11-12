// src/components/sections/global-reach/flags.tsx
// Inline SVG flag renderers -- 20 × 13 viewBox units
// All flags have a thin border rectangle.

import React from 'react'

type FlagProps = { x?: number; y?: number }

const W = 20, H = 13
const Border = () => (
  <rect x={0} y={0} width={W} height={H} fill="none"
        stroke="#0D0F14" strokeOpacity={0.18} strokeWidth={0.8} />
)

/** India */
export function FlagIN({ x = 0, y = 0 }: FlagProps) {
  const h = H / 3
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0}       width={W} height={h}   fill="#ff9933" />
      <rect x={0} y={h}       width={W} height={h}   fill="#ffffff" />
      <rect x={0} y={h * 2}   width={W} height={h}   fill="#138808" />
      {/* Ashoka chakra -- simplified navy ring */}
      <circle cx={W / 2} cy={H / 2} r={1.9} fill="none" stroke="#000080" strokeWidth={0.8} />
      <Border />
    </g>
  )
}

/** USA */
export function FlagUS({ x = 0, y = 0 }: FlagProps) {
  const stripeH = H / 7
  const cantonW = W * 0.42, cantonH = H * 0.54
  return (
    <g transform={`translate(${x},${y})`}>
      {/* White base */}
      <rect width={W} height={H} fill="#ffffff" />
      {/* 4 red stripes at rows 0,2,4,6 */}
      {[0, 2, 4, 6].map(row => (
        <rect key={row} x={0} y={row * stripeH} width={W} height={stripeH} fill="#b22234" />
      ))}
      {/* Navy canton */}
      <rect x={0} y={0} width={cantonW} height={cantonH} fill="#3c3b6e" />
      <Border />
    </g>
  )
}

/** Germany */
export function FlagDE({ x = 0, y = 0 }: FlagProps) {
  const h = H / 3
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0}       width={W} height={h}   fill="#000000" />
      <rect x={0} y={h}       width={W} height={h}   fill="#dd0000" />
      <rect x={0} y={h * 2}   width={W} height={h}   fill="#ffce00" />
      <Border />
    </g>
  )
}

/** Spain */
export function FlagES({ x = 0, y = 0 }: FlagProps) {
  const redH = H * 0.25, yellowH = H * 0.5
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0}         width={W} height={redH}    fill="#c60b1e" />
      <rect x={0} y={redH}      width={W} height={yellowH} fill="#ffc400" />
      <rect x={0} y={redH + yellowH} width={W} height={redH} fill="#c60b1e" />
      <Border />
    </g>
  )
}

/** UAE */
export function FlagAE({ x = 0, y = 0 }: FlagProps) {
  const redW = W * 0.25
  const bandH = H / 3
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Three horizontal bands: green / white / black */}
      <rect x={redW} y={0}          width={W - redW} height={bandH}   fill="#009a44" />
      <rect x={redW} y={bandH}      width={W - redW} height={bandH}   fill="#ffffff" />
      <rect x={redW} y={bandH * 2}  width={W - redW} height={bandH}   fill="#000000" />
      {/* Red vertical band on the left */}
      <rect x={0} y={0} width={redW} height={H} fill="#ef3340" />
      <Border />
    </g>
  )
}

/** Singapore */
export function FlagSG({ x = 0, y = 0 }: FlagProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0}       width={W} height={H / 2} fill="#ef3340" />
      <rect x={0} y={H / 2}   width={W} height={H / 2} fill="#ffffff" />
      {/* Crescent moon */}
      <circle cx={5.5} cy={H / 4} r={2.4} fill="#ffffff" />
      <circle cx={6.8} cy={H / 4} r={1.9} fill="#ef3340" />
      {/* 5 stars (simplified dots) */}
      {[0,1,2,3,4].map(i => {
        const angle = (i * 72 - 90) * (Math.PI / 180)
        return (
          <circle key={i}
            cx={10.5 + Math.cos(angle) * 1.6}
            cy={H / 4 + Math.sin(angle) * 1.6}
            r={0.55} fill="#ffffff" />
        )
      })}
      <Border />
    </g>
  )
}

/** Australia */
export function FlagAU({ x = 0, y = 0 }: FlagProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={W} height={H} fill="#00008b" />
      {/* Union Jack top-left (simplified cross) */}
      <rect x={0} y={H/2 - 0.5} width={W * 0.42} height={1} fill="#ffffff" />
      <rect x={W * 0.21 - 0.5} y={0} width={1} height={H * 0.5} fill="#ffffff" />
      {/* Red cross overlay */}
      <rect x={0} y={H/2 - 0.3} width={W * 0.42} height={0.6} fill="#cc0000" />
      <rect x={W * 0.21 - 0.3} y={0} width={0.6} height={H * 0.5} fill="#cc0000" />
      {/* Commonwealth Star */}
      <circle cx={W * 0.21} cy={H * 0.72} r={1.2} fill="#ffffff" />
      {/* Southern Cross (4 stars) */}
      <circle cx={W * 0.72} cy={H * 0.3}  r={0.7} fill="#ffffff" />
      <circle cx={W * 0.85} cy={H * 0.5}  r={0.5} fill="#ffffff" />
      <circle cx={W * 0.72} cy={H * 0.7}  r={0.5} fill="#ffffff" />
      <circle cx={W * 0.6}  cy={H * 0.5}  r={0.5} fill="#ffffff" />
      <Border />
    </g>
  )
}

/** Render any flag by code */
export function FlagIcon({ code, x = 0, y = 0 }: { code: string; x?: number; y?: number }) {
  switch (code) {
    case 'in': return <FlagIN x={x} y={y} />
    case 'us': return <FlagUS x={x} y={y} />
    case 'de': return <FlagDE x={x} y={y} />
    case 'es': return <FlagES x={x} y={y} />
    case 'ae': return <FlagAE x={x} y={y} />
    case 'sg': return <FlagSG x={x} y={y} />
    case 'au': return <FlagAU x={x} y={y} />
    default:   return null
  }
}
