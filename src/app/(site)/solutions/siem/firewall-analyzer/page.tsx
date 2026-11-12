import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { SIEMIllustration } from '@/components/illustrations/SIEMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Firewall Analyzer Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Firewall Analyzer. Firewall log management, policy analysis, bandwidth monitoring, VPN tracking, and compliance reporting. Authorized partner.',
  canonicalPath: '/solutions/siem/firewall-analyzer',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "SIEM", "href": "/solutions/siem"}, {"name": "Firewall Analyzer", "href": "/solutions/siem/firewall-analyzer"}]

const capabilities = [{"title": "Firewall Log Collection and Analysis", "description": "Logs collected from Cisco, Palo Alto, Fortinet, Checkpoint, Juniper, and other firewall platforms. Traffic analysis across allow and deny events."}, {"title": "Security Policy Analysis", "description": "Firewall rule set analysis identifying unused rules, overly permissive rules, and rule conflicts. Policy optimisation recommendations."}, {"title": "Bandwidth and Traffic Monitoring", "description": "Top bandwidth consumers, protocol analysis, and application traffic visibility from firewall log data."}, {"title": "VPN Usage Monitoring", "description": "VPN connection events, user activity, session duration, and bandwidth usage tracked from firewall logs."}, {"title": "Threat Detection", "description": "Anomalous traffic patterns, reconnaissance events, and policy violation spikes detected from log analysis."}, {"title": "Compliance Reporting", "description": "Firewall configuration and traffic compliance reports for PCI DSS, ISO 27001, and DPDPA network security obligations."}]
const steps = [{"title": "Firewall Inventory and Log Source Setup", "description": "We identify your firewall and network security devices and configure log forwarding to Firewall Analyzer."}, {"title": "Traffic Baseline Establishment", "description": "We establish normal traffic patterns across your network segments for anomaly detection calibration."}, {"title": "Policy Analysis Configuration", "description": "We configure policy analysis rules for your security standards and produce an initial firewall rule optimisation report."}, {"title": "Alert and Report Configuration", "description": "We configure anomaly alerts and compliance reports for your regulatory requirements."}, {"title": "Dashboard Setup and Handover", "description": "We build traffic dashboards for your network operations team and deliver the configuration documentation."}]
const useCases = [{"title": "Firewall rule optimisation", "description": "Unused and overly permissive rules identified. Rule set cleaned up based on actual traffic data."}, {"title": "Bandwidth consumption visibility", "description": "Top bandwidth consumers identified from firewall logs. Application usage patterns visible without dedicated DPI tools."}, {"title": "VPN access monitoring", "description": "Remote access VPN usage tracked. Unusual VPN access patterns alerted. Session data available for access review."}, {"title": "Network security compliance evidence", "description": "Firewall traffic and configuration compliance reports produced for PCI DSS, ISO 27001, and DPDPA network security controls."}]

export default function SolutionsSiemFirewallAnalyzerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='SIEM | Firewall Analyzer'
        heading='See what your firewall is actually doing. Not just what you configured it to do.'
        subheading='Firewall Analyzer collects and analyses logs from firewall and network security devices — giving your security team traffic visibility, policy analysis, bandwidth monitoring, and compliance reports from your network perimeter.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<SIEMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Firewall Analyzer." steps={steps} />
      <CTABand heading='Implement firewall log management that gives your security team network visibility and policy analysis capability.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}
