'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'mf_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY)
      if (!consent) {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — don't show banner
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // best-effort
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-lg"
    >
      <div className="container mx-auto flex flex-col items-start gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We use cookies to analyse how our website is used so we can improve it. By continuing,
          you agree to our use of cookies.{' '}
          <Link
            href="/cookie-policy"
            className="font-medium text-[#2563EB] underline hover:text-blue-800"
          >
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={accept}
            className="inline-flex items-center rounded-md bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
          >
            Accept
          </button>
          <button
            onClick={accept}
            className="inline-flex items-center rounded-md border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
