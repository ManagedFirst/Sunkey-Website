import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, organisation, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailBody = `
New enquiry from ManagedFirst website

Name:         ${name}
Organisation: ${organisation}
Email:        ${email}
Phone:        ${phone ?? 'Not provided'}
Subject:      ${subject}

Message:
${message}

---
Sent via managedfirst.in contact form
    `.trim()

    // Send email via SMTP if configured
    const recipient = process.env.CONTACT_FORM_RECIPIENT
    if (recipient && process.env.SMTP_HOST) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host:   process.env.SMTP_HOST,
          port:   Number(process.env.SMTP_PORT ?? 587),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })
        await transporter.sendMail({
          from:    `"ManagedFirst Website" <${process.env.SMTP_USER}>`,
          to:      recipient,
          replyTo: email,
          subject: `Website enquiry: ${subject} — ${name}`,
          text:    emailBody,
        })
      } catch (emailErr) {
        console.error('Email send failed:', emailErr)
        // Log the form data so it is not lost
        console.log('CONTACT FORM SUBMISSION (email failed):', { name, organisation, email, subject })
      }
    } else {
      // SMTP not configured — log submission
      console.log('CONTACT FORM SUBMISSION:', { name, organisation, email, subject, message })
      console.log('Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FORM_RECIPIENT in .env.local to enable email delivery.')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
