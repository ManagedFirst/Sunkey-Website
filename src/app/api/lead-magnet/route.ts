import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, organisation, resourceName } = body

    if (!name || !email || !organisation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const pdfUrl = process.env.NEXT_PUBLIC_DPDPA_CHECKLIST_URL

    // Log the lead regardless of email status
    console.log('LEAD MAGNET DOWNLOAD:', { name, email, organisation, resourceName, timestamp: new Date().toISOString() })

    // Send delivery email if SMTP is configured
    const recipient = process.env.CONTACT_FORM_RECIPIENT
    if (pdfUrl && process.env.SMTP_HOST) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host:   process.env.SMTP_HOST,
          port:   Number(process.env.SMTP_PORT ?? 587),
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        })

        // Deliver to the person who requested
        await transporter.sendMail({
          from:    `"ManagedFirst Technologies" <${process.env.SMTP_USER}>`,
          to:      email,
          subject: `Your ${resourceName ?? 'guide'} from ManagedFirst`,
          text: `Hi ${name},\n\nThank you for your interest. Here is your download link:\n\n${pdfUrl}\n\nIf you have questions about implementing the recommendations in this guide, book a free consultation at https://managedfirst.in/free-consultation\n\nManagedFirst Technologies`,
        })

        // Notify the team
        if (recipient) {
          await transporter.sendMail({
            from:    `"ManagedFirst Website" <${process.env.SMTP_USER}>`,
            to:      recipient,
            subject: `New download: ${resourceName} — ${name} (${organisation})`,
            text:    `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\nResource: ${resourceName}`,
          })
        }
      } catch (emailErr) {
        console.error('Lead magnet email failed:', emailErr)
      }
    } else {
      console.log('SMTP not configured. Lead captured but PDF not delivered by email.')
      console.log('Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and NEXT_PUBLIC_DPDPA_CHECKLIST_URL to .env.local')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead magnet error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
