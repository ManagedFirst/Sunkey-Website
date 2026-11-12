import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, articleSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Badge, Breadcrumb } from '@/components/ui/Elements'
import { CTABand } from '@/components/sections/Sections'

// Static article content — in production these come from Payload CMS
const articles: Record<string, {
  title: string; excerpt: string; category: string; publishedAt: string;
  readTimeMinutes: number; body: string[];
}> = {
  'why-most-manageengine-deployments-underperform': {
    title: 'Why Most ManageEngine Deployments Underperform — And What Separates the Ones That Do Not',
    excerpt: 'Most ManageEngine deployments configure the basics and stop. Here is what the gap between installation and operation looks like — and what the deployments that actually work have in common.',
    category: 'ManageEngine Implementation',
    publishedAt: '2026-08-01',
    readTimeMinutes: 8,
    body: [
      'ManageEngine is a capable platform. When it is implemented correctly — to its full scope, with proper configuration, integration, and governance — it transforms how IT teams operate. When it is not, it becomes a tool the team uses around rather than a tool that works for them.',
      'This is not a product observation. It is an implementation observation. The platform is the same in both cases. What differs is how it was deployed.',
      'Most ManageEngine deployments share a common pattern: an IT team installs the product, completes the basic configuration, and moves on to the next priority. Ticketing works. Monitoring runs. The software is live. The project is considered complete.',
      'But most of what ManageEngine can do — the workflow automation, the cross-tool integrations, the access governance, the compliance reporting — remains at defaults or untouched. Not because the features do not exist. Because the deployment stopped at the point where the obvious value was visible.',
      'The gap between installation and operation is where most of the value lives. It is also where most deployments stop.',
      'What separates the deployments that actually work? Consistently, three things: the scope was documented before deployment began, configuration was built for the organisation\'s actual processes rather than applied from defaults, and the team was trained against their specific deployment rather than against a generic product walkthrough.',
      'The organisations with the best ManageEngine deployments did not have more technical capacity than the ones with underperforming deployments. They had more implementation structure. Scope documents agreed before configuration began. Architecture decisions made with intent. Integration work treated as part of the implementation, not as an optional follow-up.',
      'If your ManageEngine deployment is not delivering what it was purchased to deliver, the problem is almost certainly in the configuration — not in the product. The question is whether the gap is worth closing, and what closing it would require.',
    ],
  },
  'dpdpa-compliance-checklist-for-it-teams': {
    title: 'DPDPA Compliance Checklist for IT Teams — The Five Technical Obligations and the ManageEngine Controls That Address Them',
    excerpt: 'DPDPA creates specific technical obligations for IT teams. This checklist covers what each obligation requires technically and which ManageEngine tools address it when configured correctly.',
    category: 'Compliance',
    publishedAt: '2026-08-01',
    readTimeMinutes: 10,
    body: [
      'The Digital Personal Data Protection Act creates obligations that IT teams need to deliver — not at the policy level, but at the level of access controls, monitoring, audit trails, and breach detection. This checklist covers the five technical obligations and the ManageEngine tools that address each one.',
      'A note before the checklist: this document covers the technical IT implementation component of DPDPA compliance. Policy documentation, consent management, privacy notices, data fiduciary registration, and vendor agreements are handled by your legal and compliance team. If you are reading this checklist looking for policy guidance, you are looking in the wrong place.',
      '1. Reasonable Security Safeguards (Section 8(5)): The Act requires data fiduciaries to implement appropriate technical and organisational measures to prevent personal data breaches. The technical measures that constitute reasonable safeguards include: access controls limiting who reaches personal data, endpoint patch management and security policies on devices processing personal data, monitoring for unauthorised access attempts, and network security controls. ManageEngine tools: AD360 (access controls), Endpoint Central (endpoint security), Log360 (monitoring).',
      '2. Breach Detection and Notification Capability: In the event of a breach, you need to notify the Data Protection Board and affected data principals. Accurate breach notification requires knowing what happened, when it happened, and which data was affected. Without centralised log management, this reconstruction is guesswork. ManageEngine tools: Log360 (centralised logs, incident timeline), ADAudit Plus (file server access events).',
      '3. Access Controls and Accountability: Only personnel with legitimate purpose should access personal data. Access controls must be role-based, automated, and reviewed periodically. Every access event must be attributable to a named individual. ManageEngine tools: AD360 + ADManager Plus (provisioning and deprovisioning), ADAudit Plus (access audit trail), PAM360 (privileged access governance).',
      '4. Data Accuracy and Deletion: Personal data must be accurate and deleted when no longer needed. Purpose limitation means access should be removed when the purpose is fulfilled. ManageEngine tools: ADAudit Plus (modification tracking), ADManager Plus (automated deprovisioning workflows).',
      '5. Response to Data Principal Rights Requests: When a data principal requests access to, correction of, or erasure of their data, you need to respond accurately. Accurate response requires a searchable audit trail across all systems holding that individual\'s data. ManageEngine tools: ADAudit Plus + Log360 (cross-system log search by identity).',
      'The common thread across all five obligations: you need to be able to demonstrate controls, not just assert them. Auditors and the Data Protection Board will ask for evidence. ManageEngine tools — configured correctly — produce that evidence automatically.',
      'Download the full DPDPA Readiness Checklist for IT Teams from our Guides page for a self-assessment tool you can use before engaging for a formal assessment.',
    ],
  },
  'how-to-evaluate-manageengine-servicedesk-plus': {
    title: 'How to Evaluate ManageEngine ServiceDesk Plus — A Structured Approach for IT Teams',
    excerpt: 'A vendor demonstration of ServiceDesk Plus running on default configuration is not a useful evaluation. This guide covers how to structure a ServiceDesk Plus evaluation against your actual use cases.',
    category: 'IT Operations and ITSM',
    publishedAt: '2026-08-01',
    readTimeMinutes: 9,
    body: [
      'A vendor demonstration of ServiceDesk Plus shows what the product looks like with default configuration. It does not show what ServiceDesk Plus looks like in your environment, with your ticket categories, your SLA tiers, your approval workflows, and your user base.',
      'The gap between a demo and a working deployment is why many ITSM evaluations produce unreliable results. You evaluate a default configuration, decide it does or does not meet your requirements, and either proceed or reject the product based on that assessment. Neither outcome reflects what a properly configured deployment would actually look like.',
      'A structured evaluation runs ServiceDesk Plus in your environment with configuration specific to your use cases. Here is how to structure one.',
      'Before configuring the trial: document your current ticket categories, SLA tiers, escalation paths, and approval structures for change management. You need to know what you are configuring before you configure it. If you cannot document your current ITSM process clearly, that is itself an insight worth having before any tool evaluation.',
      'What to configure in the trial: your ticket categories and routing rules (the ones that eliminate manual triage), your SLA tiers with the escalation thresholds that matter to your operations, and your change management workflow with at least one approval stage. Do not evaluate ServiceDesk Plus against defaults — evaluate it against your process.',
      'What to test: run real incidents through the routing configuration. Confirm that tickets route without manual intervention. Simulate an SLA approaching breach — verify the escalation fires. Submit a change request — confirm it moves through your approval workflow.',
      'What not to test in a trial: deep integrations with your AD or HRMS. These take time to configure correctly and are not achievable in a standard trial timeline. Note that these integrations are possible and well-documented — just not a reasonable trial objective.',
      'The question to answer at the end: does ServiceDesk Plus, configured for your processes, reduce the manual work your IT team currently does? Not "does the product work" — that is a given. "Does it work for your operations?"',
      'If your trial is not producing useful results because default configuration is in the way, that is a structured evaluation problem, not a product problem. Evaluation Assistance from ManagedFirst sets up and configures a trial for your environment so you assess the product, not the defaults.',
    ],
  },
  'manageengine-implementation-maturity-model': {
    title: 'The ManageEngine Implementation Maturity Model — A Framework for Evaluating Deployment Completeness',
    excerpt: 'Most ManageEngine deployments sit at Level 2 of a five-level maturity model. This article introduces the MIMM framework — a structured way to assess where your deployment sits and what Level 3, 4, and 5 look like.',
    category: 'ManageEngine Implementation',
    publishedAt: '2026-08-01',
    readTimeMinutes: 12,
    body: [
      'The ManageEngine Implementation Maturity Model (MIMM) is a framework for evaluating how completely a ManageEngine deployment has been implemented — and for identifying the gap between current state and the full operational scope the platform can deliver.',
      'It is not a benchmarking tool or a marketing framework. It is a working assessment model that ManagedFirst uses to evaluate deployments before remediation engagements, and that IT teams can use to self-assess before engaging for any work.',
      'The MIMM has five levels. Most ManageEngine deployments sit at Level 2.',
      'Level 1 — Installed: The product is installed and the service is running. Basic connectivity is confirmed. Nothing is configured for the organisation\'s environment. This is where every deployment starts. Some never leave it.',
      'Level 2 — Basic Configuration: Core features are configured. For ITSM: incident management is working, basic ticket categories exist, technicians are assigned. For IAM: users can authenticate, basic group memberships are set. For endpoint management: agents are deployed, patching runs on a schedule. The platform is functional. Most deployments stop here.',
      'Level 3 — Process Integration: The platform is configured for the organisation\'s actual processes. For ITSM: routing rules eliminate manual triage, SLA tiers reflect the organisation\'s service commitments, change management workflow matches the IT governance structure. For IAM: provisioning templates are role-based, deprovisioning is automated, access reviews are scheduled. This is where the platform starts delivering the value it was purchased to deliver.',
      'Level 4 — Integration and Automation: ManageEngine is connected to the other systems in the IT environment. HRMS triggers provisioning. Monitoring tools create ITSM tickets. Asset management populates from network discovery. Compliance reports are generated automatically. The manual handoffs between systems are automated.',
      'Level 5 — Governance and Optimisation: The deployment has documented governance processes, regular operational reviews, and ongoing optimisation. Compliance reports are produced without manual intervention. Deployment drift is detected and corrected proactively. The IT team uses the platform to manage the IT environment rather than working around the platform.',
      'The value of the model is not in the levels themselves — it is in the specific capability criteria at each level for each ManageEngine solution category. ITSM Level 3 looks different from IAM Level 3, which looks different from SIEM Level 3. The MIMM Quick Assessment Guide provides level-by-level criteria for each solution category, with a self-assessment checklist your IT team can complete independently.',
      'For a new ManageEngine deployment, defining the target maturity level before scoping is more useful than scoping from a feature list. An organisation that needs Level 4 ITSM for compliance reasons has a different implementation scope than one that needs Level 2 ITSM to move off a shared email inbox.',
      'For an existing deployment, a maturity assessment identifies the gap between current state and where the organisation needs to be — and prices that gap in terms of configuration effort rather than in terms of product features.',
      'Download the MIMM Quick Assessment Guide from the Guides page for a self-assessment checklist for each solution category at each maturity level.',
    ],
  },
}

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return {}
  return buildMetadata({
    title: `${article.title} | ManagedFirst Blog`,
    description: article.excerpt,
    canonicalPath: `/blog/${slug}`,
  })
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()

  const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: article.title, href: `/blog/${slug}` }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <article>
        <header className="bg-white border-b border-border-default py-12">
          <div className="site-container max-w-3xl">
            <AnimateIn className="mb-4">
              <Breadcrumb items={breadcrumbs} />
            </AnimateIn>
            <AnimateIn delay={80}>
              <Badge variant="teal" className="mb-4">{article.category}</Badge>
            </AnimateIn>
            <AnimateIn delay={120}>
              <h1 className="font-display text-h1 font-extrabold text-navy leading-tight mb-4">{article.title}</h1>
            </AnimateIn>
            <AnimateIn delay={160}>
              <p className="text-body-lg text-charcoal/80 leading-relaxed mb-6">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-caption text-muted">
                <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <span>·</span>
                <span>{article.readTimeMinutes} min read</span>
                <span>·</span>
                <span>ManagedFirst Technologies</span>
              </div>
            </AnimateIn>
          </div>
        </header>

        <div className="bg-offwhite section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <div className="prose prose-lg max-w-none">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="text-body text-charcoal leading-relaxed mb-5">{paragraph}</p>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </article>

      <CTABand
        heading="Questions about ManageEngine implementation?"
        body="Book a free consultation. We will review your requirements and tell you honestly what a proper implementation would involve."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Read more articles', href: '/blog' }}
      />
    </>
  )
}
