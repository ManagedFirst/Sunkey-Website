import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'

// ── Site layout — public pages only ────────────────────────────────────────
// Wraps all public routes with the site chrome (Navbar + Footer).
// This layout is NOT applied to (payload)/ routes, so /admin never
// gets Navbar/Footer wrapped around it — fixing the hydration crash.
// globals.css is imported in the root layout.tsx one level up.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  )
}
