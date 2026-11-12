import { UIPanel, MetricRow, StatusItem, MiniChart } from '@/components/illustrations/UIPanel'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { orgSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { DashboardIllustration } from '@/components/illustrations/DashboardIllustration'
import { Button } from '@/components/ui/Button'
import {
  IconAD360, IconServiceDesk, IconEndpointCentral, IconLog360,
  IconOpManager, IconAnalyticsPlus,
  IconBFSI, IconManufacturing, IconHealthcare,
  IconITITES, IconGovernment, IconEducation,
  IconCheck, IconArrowRight, IconZap, IconUsers, IconTrendingUp,
} from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Partner India | ManagedFirst Technologies',
  description: 'Most ManageEngine deployments configure the basics and stop. ManagedFirst implements the full platform — architecture, integration, governance, and automation — for enterprises across India. Authorized partner, Chennai.',
  canonicalPath: '/',
})

const solutions = [
  { title: 'Identity and Access Management', href: '/solutions/iam', icon: <IconAD360 size={24} />, desc: 'Provisioning, governance, privileged access, and audit trails.', count: 5 },
  { title: 'ITSM / ESM', href: '/solutions/itsm-esm', icon: <IconServiceDesk size={24} />, desc: 'Service desk, change control, asset management, ESM.', count: 2 },
  { title: 'Unified Endpoint Management', href: '/solutions/uems', icon: <IconEndpointCentral size={24} />, desc: 'Patch management, endpoint security, and MDM.', count: 2 },
  { title: 'IT Operations Management', href: '/solutions/itom', icon: <IconOpManager size={24} />, desc: 'Network monitoring, server monitoring, and APM.', count: 3 },
  { title: 'SIEM', href: '/solutions/siem', icon: <IconLog360 size={24} />, desc: 'Log management, threat detection, and compliance reporting.', count: 3 },
  { title: 'IT Analytics', href: '/solutions/it-analytics', icon: <IconAnalyticsPlus size={24} />, desc: 'Unified dashboards across your ManageEngine environment.', count: 1 },
]

const whyUs = [
  { n: '01', title: 'ManageEngine is the only thing we do.', body: 'Our practice covers ManageEngine exclusively — all 15 products, all six solution categories, every configuration scenario. When a complex question arises, it is not new to us.' },
  { n: '02', title: 'We implement to the full scope, not the minimum viable deployment.', body: 'Most deployments configure the basics. We implement the automation, integrations, governance workflows, and advanced configuration that make the platform an operational asset.' },
  { n: '03', title: 'Every engagement produces documentation your team keeps.', body: 'Implementation is complete when your team can operate independently. Every engagement delivers a configuration runbook covering every setting applied and every workflow built.' },
  { n: '04', title: 'Indian regulatory requirements are built into every engagement.', body: 'DPDPA, RBI IT framework, ISO 27001 — these are not add-ons. We configure ManageEngine for the regulatory environment Indian enterprises operate in.' },
]

const services = [
  { title: 'Consulting', href: '/services/consulting', desc: 'Written assessment, product recommendation, and implementation roadmap before any deployment begins.' },
  { title: 'Evaluation Assistance', href: '/services/evaluation-assistance', desc: 'ManageEngine configured in your environment for a structured trial against your actual use cases.' },
  { title: 'Implementation', href: '/services/implementation', desc: 'Architecture, configuration, integration, testing, and documented handover. Built around your processes.' },
  { title: 'Training and Enablement', href: '/services/training', desc: 'Role-specific training against your specific deployment — not a generic product walkthrough.' },
  { title: 'Managed Services', href: '/services/managed-services', desc: 'Ongoing configuration management, version upgrades, and operational reporting.' },
  { title: 'Support and AMC', href: '/services/support-amc', desc: 'Responsive technical support and licence renewals managed before they lapse.' },
]

const industries = [
  { title: 'Banking and Financial Services', href: '/industries/bfsi', icon: <IconBFSI size={24} /> },
  { title: 'Manufacturing', href: '/industries/manufacturing', icon: <IconManufacturing size={24} /> },
  { title: 'Healthcare', href: '/industries/healthcare', icon: <IconHealthcare size={24} /> },
  { title: 'IT and ITES', href: '/industries/it-ites', icon: <IconITITES size={24} /> },
  { title: 'Government and PSU', href: '/industries/government-psu', icon: <IconGovernment size={24} /> },
  { title: 'Education', href: '/industries/education', icon: <IconEducation size={24} /> },
]

const stats = [
  { icon: <IconZap size={20} />, number: '15', label: 'ManageEngine products' },
  { icon: <IconTrendingUp size={20} />, number: '6',  label: 'Solution categories' },
  { icon: <IconUsers size={20} />, number: '6',  label: 'Industry verticals' },
  { icon: <IconCheck size={20} />, number: '1',  label: 'Authorised partner' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(orgSchema()) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        {/* Blurred gradient shapes — redesign guideline 6 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 animate-blob"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, #2563EB 55%, transparent 80%)', filter: 'blur(90px)' }} />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #06B6D4 0%, #2563EB 55%, transparent 80%)', filter: 'blur(70px)', animation: 'blob 7s ease-in-out 3.5s infinite' }} />
          <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', filter: 'blur(70px)' }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="site-container relative z-10 w-full" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="grid lg:grid-cols-2 gap-14 items-center" style={{ minHeight: '80vh' }}>

            {/* Text — always visible, no animation opacity dependency */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-teal" style={{ animation: 'pulseTeal 2s ease-in-out infinite' }} />
                <span className="text-teal font-semibold tracking-widest"
                  style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Authorized ManageEngine Partner · Chennai, India
                </span>
              </span>

              <h1 className="font-display font-extrabold text-white leading-[1.07] tracking-tight mb-7"
                style={{ fontSize: 'clamp(32px, 4.5vw, 62px)' }}>
                ManageEngine installed is not ManageEngine working.
              </h1>

              <p className="text-white/65 leading-relaxed mb-10"
                style={{ fontSize: 'clamp(16px, 1.3vw, 19px)', maxWidth: '530px' }}>
                Enterprise organisations purchase ManageEngine and receive a deployment that covers the basics. The automation, governance, integrations, and compliance configuration remain untouched. ManagedFirst closes that gap — across all six solution categories, for enterprises across India.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Button variant="primary-dark" href="/free-consultation" icon={<IconArrowRight size={15} />}>
                  Book a Free Assessment
                </Button>
                <Button variant="ghost" href="#solutions">
                  See the Solutions
                </Button>
              </div>

              {/* Trust signals — inline, always visible */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-8 border-t border-white/10">
                {[
                  'Authorised ManageEngine Partner',
                  'Pan-India delivery from Chennai',
                  'All six solution categories',
                  'Documented handover on every engagement',
                ].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <IconCheck size={13} className="text-teal flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-white/55" style={{ fontSize: '13px' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard illustration — stacked on mobile/tablet, side-by-side on lg+ */}
            <div className="flex items-center justify-end mt-10 lg:mt-0">
              <div className="relative w-full max-w-[560px] px-8 pt-6 pb-6 lg:px-0 lg:pt-0 lg:pb-0">
                {/* Floating outcome cards — safe position on mobile, negative offset on lg+ */}
                <div className="absolute top-0 left-0 lg:-top-5 lg:-left-8 z-10 bg-white rounded-2xl shadow-card-hover px-4 py-3 border border-border-default animate-fade-in">
                  <p className="text-[9px] text-muted font-semibold uppercase tracking-widest mb-1">Deployment Status</p>
                  <p className="font-display font-bold text-navy text-[18px] leading-none">Fully operational</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block"/>
                    <p className="text-[9px] text-[#22c55e] font-medium">All 15 products active</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 lg:-bottom-5 lg:-right-4 z-10 bg-white rounded-2xl shadow-card-hover px-4 py-3 border border-border-default animate-fade-in delay-200">
                  <p className="text-[9px] text-muted font-semibold uppercase tracking-widest mb-1">SLA Compliance</p>
                  <p className="font-display font-bold text-navy text-[18px] leading-none">97.8%</p>
                  <p className="text-[9px] text-[#22c55e] font-medium mt-1">↑ this month</p>
                </div>
                <div className="animate-float" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.4))' }}>
                  <DashboardIllustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border-default">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border-default">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 80} className="py-12 px-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-blue-light rounded-card flex items-center justify-center text-blue">
                    {s.icon}
                  </div>
                </div>
                <p className="font-display font-extrabold text-navy leading-none mb-2"
                  style={{ fontSize: 'clamp(40px, 4vw, 58px)' }}>
                  {s.number}
                </p>
                <p className="text-muted font-medium" style={{ fontSize: '13px' }}>{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ─────────────────────────────────────────────── */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimateIn direction="left">
              <p className="font-semibold text-accent tracking-widest mb-5"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                The Implementation Gap
              </p>
              <blockquote className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}>
                &ldquo;Most ManageEngine deployments use less than half the platform.&rdquo;
              </blockquote>
              <div className="mt-8 w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }} />
            </AnimateIn>
            <AnimateIn direction="right" className="space-y-5">
              {[
                'IT teams install ManageEngine, configure incident management and basic monitoring, and move on. The software is live. The project is complete.',
                'But the workflow automation, cross-tool integrations, access governance, and compliance reporting remain untouched — the configuration that turns an installed tool into an operational asset.',
                'This is not a product problem. The platform is capable. The gap is in how implementations are scoped, architected, and configured for the organisation\'s actual environment.',
                'ManagedFirst implements ManageEngine to its full operational scope: architecture, configuration mapped to your processes, integration with your existing systems, and documentation your team uses independently.',
              ].map((p, i) => (
                <p key={i} className="text-charcoal/75 leading-relaxed" style={{ fontSize: '16px' }}>{p}</p>
              ))}
              <div className="pt-2">
                <Button variant="secondary" href="/services/implementation">
                  See our implementation approach
                </Button>
              </div>
            </AnimateIn>
          </div>
          {/* Visual panel — what managed vs unmanaged looks like */}
          <AnimateIn className="mt-14 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-border-default shadow-card bg-[#0F172A]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1E293B] border-b border-white/5">
                  <span className="text-[10px] font-semibold text-red uppercase tracking-wide">Before — Default deployment</span>
                </div>
                <div className="p-4 space-y-2">
                  {[
                    ['Tickets routed manually', 'error'],
                    ['Patch compliance unknown', 'error'],
                    ['AD deprovisioning: manual', 'error'],
                    ['No privileged access audit', 'error'],
                    ['Compliance reports: manual', 'warn'],
                  ].map(([label, status]) => (
                    <div key={label} className="flex items-center gap-2 py-1">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${status === 'error' ? 'bg-red' : 'bg-amber'}`}/>
                      <span className="text-[11px] text-white/55">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-teal/30 shadow-card bg-[#0F172A]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1E293B] border-b border-teal/10">
                  <span className="text-[10px] font-semibold text-teal uppercase tracking-wide">After — ManagedFirst implementation</span>
                </div>
                <div className="p-4 space-y-2">
                  {[
                    ['Auto-routing by category & priority', 'ok'],
                    ['94.2% patch compliance — tracked', 'ok'],
                    ['Deprovisioning within defined SLA', 'ok'],
                    ['Full session recording — PAM360', 'ok'],
                    ['Compliance reports — automated', 'ok'],
                  ].map(([label, status]) => (
                    <div key={label} className="flex items-center gap-2 py-1">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#22c55e]"/>
                      <span className="text-[11px] text-white/80">{label}</span>
                      <span className="ml-auto text-[9px] text-[#22c55e] font-medium">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── SOLUTIONS ─────────────────────────────────────────────────────── */}
      <section id="solutions" className="bg-white section-py">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <AnimateIn>
              <p className="font-semibold text-accent tracking-widest mb-4"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ManageEngine Solutions
              </p>
              <h2 className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Six solution categories.<br className="hidden lg:block" />One authorised partner.
              </h2>
            </AnimateIn>
            <AnimateIn delay={100} className="flex-shrink-0">
              <Button variant="secondary" href="/solutions/iam">Explore all solutions</Button>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 60}>
                <Link href={s.href}
                  className="group flex flex-col bg-white rounded-card border border-border-default shadow-card p-8
                             hover:-translate-y-[6px] hover:shadow-card-hover hover:border-blue/30
                             transition-all duration-250 ease-smooth h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-blue-light rounded-brand flex items-center justify-center text-blue
                                    group-hover:bg-blue group-hover:text-white transition-all duration-250">
                      {s.icon}
                    </div>
                    <span className="text-muted font-medium" style={{ fontSize: '12px' }}>
                      {s.count} {s.count === 1 ? 'product' : 'products'}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-navy mb-3 group-hover:text-blue transition-colors"
                    style={{ fontSize: '16px', lineHeight: 1.35 }}>
                    {s.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed flex-1" style={{ fontSize: '14px' }}>
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-blue font-semibold mt-5
                                   group-hover:gap-2.5 transition-all duration-200"
                    style={{ fontSize: '13px' }}>
                    Implementation detail <IconArrowRight size={13} />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MANAGEDFIRST ──────────────────────────────────────────────── */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-14">
            <p className="font-semibold text-accent tracking-widest mb-4"
              style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Why ManagedFirst
            </p>
            <h2 className="font-display font-bold text-navy leading-tight"
              style={{ fontSize: 'clamp(26px, 3vw, 44px)', maxWidth: '560px' }}>
              What separates an implementation from an installation.
            </h2>
          </AnimateIn>

          <div className="divide-y divide-border-default border-y border-border-default">
            {whyUs.map((item, i) => (
              <AnimateIn key={item.n} delay={i * 70}>
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-8 group hover:bg-white/60 transition-colors duration-200 px-4 -mx-4 rounded-brand">
                  <div className="lg:col-span-1">
                    <span className="font-display font-black text-blue/20 group-hover:text-blue/30 transition-colors"
                      style={{ fontSize: '28px' }}>
                      {item.n}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-semibold text-navy" style={{ fontSize: '16px', lineHeight: 1.4 }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-charcoal/65 leading-relaxed" style={{ fontSize: '15px' }}>{item.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-10">
            <Button variant="secondary" href="/about">About ManagedFirst</Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <AnimateIn>
              <p className="font-semibold text-accent tracking-widest mb-4"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Services
              </p>
              <h2 className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}>
                From first assessment to<br className="hidden lg:block" />long-term governance.
              </h2>
            </AnimateIn>
          </div>

          <div className="border-y border-border-default divide-y divide-border-default">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 50}>
                <Link href={s.href}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center py-6
                             hover:bg-offwhite transition-colors duration-200 px-5 -mx-5 rounded-brand">
                  <div className="lg:col-span-3">
                    <h3 className="font-display font-semibold text-navy group-hover:text-blue transition-colors"
                      style={{ fontSize: '16px' }}>
                      {s.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-charcoal/60 leading-relaxed" style={{ fontSize: '14px' }}>{s.desc}</p>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <IconArrowRight size={16} className="text-muted group-hover:text-blue group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-10">
            <Button variant="secondary" href="/services">All services</Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-14">
            <p className="font-semibold text-accent tracking-widest mb-4"
              style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Industries
            </p>
            <h2 className="font-display font-bold text-navy leading-tight"
              style={{ fontSize: 'clamp(26px, 3vw, 44px)', maxWidth: '560px' }}>
              Every sector has specific IT obligations. We configure ManageEngine for yours.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.title} delay={i * 45}>
                <Link href={ind.href}
                  className="group flex flex-col items-center justify-center text-center
                             bg-white rounded-card border border-border-default shadow-card
                             h-[148px] p-5
                             hover:-translate-y-[6px] hover:shadow-card-hover hover:border-blue/25
                             transition-all duration-250 ease-smooth">
                  <div className="w-10 h-10 bg-blue-light rounded-brand flex items-center justify-center text-blue mb-3
                                  group-hover:bg-blue group-hover:text-white transition-all duration-250">
                    {ind.icon}
                  </div>
                  <span className="font-semibold text-navy group-hover:text-blue transition-colors"
                    style={{ fontSize: '12px', lineHeight: 1.3 }}>
                    {ind.title}
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DPDPA BANNER ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden" style={{ padding: '6rem 0' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, #2563EB 60%, transparent 80%)', filter: 'blur(80px)' }} />
        </div>
        <div className="site-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <p className="font-semibold text-teal tracking-widest mb-5"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Compliance
              </p>
              <h2 className="font-display font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}>
                The DPDPA is in enforcement.<br />Is your IT environment ready?
              </h2>
              <p className="text-white/55 leading-relaxed" style={{ fontSize: '16px', maxWidth: '460px' }}>
                Five specific technical obligations. ManageEngine addresses each one — when configured correctly.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Button variant="primary-dark" href="/dpdpa-compliance">
                Get a Free DPDPA Assessment
              </Button>
              <Button variant="ghost" href="/resources/guides">
                Download the Checklist
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-white section-py" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="site-container text-center" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <AnimateIn>
            <h2 className="font-display font-bold text-navy leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              Your ManageEngine environment should be running its full capability.
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-charcoal/60 leading-relaxed mb-10" style={{ fontSize: '18px' }}>
              If it is not — book a free assessment. We will review your current deployment, identify the configuration gaps, and tell you specifically what a complete implementation would change.
            </p>
          </AnimateIn>
          <AnimateIn delay={200} className="flex flex-wrap justify-center gap-3">
            <Button variant="primary-light" href="/free-consultation" size="lg" icon={<IconArrowRight size={16} />}>
              Book a Free Assessment
            </Button>
            <Button variant="ghost-dark" href="/contact">
              Write to us
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
