'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { IconCheck, IconMail } from '@/components/icons'

// ── Shared Field wrapper ──────────────────────────────────────────────────────
function Field({ label, error, children, required }: {
  label: string; error?: string; children: React.ReactNode; required?: boolean
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '13px', fontWeight: 500, color: '#1E293B' }}>
        {label}{required && <span style={{ color: '#E8192C', marginLeft: '2px' }}>*</span>}
      </label>
      {children}
      {error && (
        <p className="animate-fade-in" style={{ fontSize: '12px', color: '#E8192C', marginTop: '2px' }}>
          {error}
        </p>
      )}
    </div>
  )
}

// ── ContactForm ───────────────────────────────────────────────────────────────
interface ContactInputs {
  name: string; organisation: string; email: string
  phone?: string; subject: string; message: string
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) { const j = await res.json(); throw new Error(j.error) }
      setStatus('success'); reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="animate-fade-in flex flex-col items-center text-center py-14 px-8
                      bg-teal-light rounded-card border border-teal/20">
        <div className="w-14 h-14 bg-blue rounded-full flex items-center justify-center mb-4 shadow-btn">
          <IconCheck size={26} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-display font-bold text-navy mb-2" style={{ fontSize: '1.25rem' }}>
          Message received.
        </h3>
        <p className="text-charcoal/70">We will respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
      {status === 'error' && (
        <div className="animate-fade-in rounded-card px-4 py-3"
          style={{ background: '#FFF5F5', border: '1px solid rgba(232,25,44,0.2)', fontSize: '14px', color: '#E8192C' }}>
          {errorMsg || 'Something went wrong. Please try again.'}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" error={errors.name?.message} required>
          <input {...register('name', { required: 'Name is required' })}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="Rajesh Kumar" />
        </Field>
        <Field label="Organisation" error={errors.organisation?.message} required>
          <input {...register('organisation', { required: 'Organisation is required' })}
            className={`input ${errors.organisation ? 'input-error' : ''}`}
            placeholder="Acme Technologies Pvt. Ltd." />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email address" error={errors.email?.message} required>
          <input type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Enter a valid email' }
            })}
            className={`input ${errors.email ? 'input-error' : ''}`}
            placeholder="rajesh@acme.in" />
        </Field>
        <Field label="Phone number">
          <input type="tel" {...register('phone')}
            className="input" placeholder="+91 98765 43210 (optional)" />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message} required>
        <select {...register('subject', { required: 'Please select a subject' })}
          className={`input ${errors.subject ? 'input-error' : ''}`}>
          <option value="">Select a subject</option>
          <option value="Consulting Enquiry">Consulting Enquiry</option>
          <option value="Implementation Enquiry">Implementation Enquiry</option>
          <option value="Evaluation Assistance">Evaluation Assistance</option>
          <option value="Support Enquiry">Support Enquiry</option>
          <option value="Licence Enquiry">Licence Enquiry</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message} required>
        <textarea {...register('message', {
            required: 'Please enter a message',
            minLength: { value: 20, message: 'Message must be at least 20 characters' }
          })}
          className={`input h-auto ${errors.message ? 'input-error' : ''}`}
          rows={5}
          placeholder="Describe your enquiry. The more specific, the more useful our response." />
      </Field>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button type="submit" variant="primary-light" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg className="animate-spin" style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </Button>
        <p style={{ fontSize: '13px', color: '#94A3B8' }}>Response within one business day.</p>
      </div>
    </form>
  )
}

// ── LeadMagnetForm ────────────────────────────────────────────────────────────
interface LeadInputs { name: string; email: string; organisation: string }

export function LeadMagnetForm({
  resourceName = 'DPDPA Readiness Checklist',
  resourceType = 'checklist',
  submitLabel,
}: { resourceName?: string; resourceType?: string; submitLabel?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<LeadInputs>()

  const onSubmit: SubmitHandler<LeadInputs> = async (data) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, resourceName }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="animate-fade-in flex items-start gap-4 p-5 bg-teal-light rounded-card border border-teal/20">
        <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center flex-shrink-0 shadow-btn">
          <IconMail size={18} className="text-white" />
        </div>
        <div>
          <p className="font-display font-semibold text-navy mb-0.5">{resourceName} on its way.</p>
          <p className="text-charcoal/70" style={{ fontSize: '14px' }}>Check your inbox.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} noValidate>
      {status === 'error' && (
        <p style={{ fontSize: '14px', color: '#E8192C' }}>Something went wrong. Please try again.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" error={errors.name ? 'Name is required' : undefined} required>
          <input {...register('name', { required: true })}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="Rajesh Kumar" />
        </Field>
        <Field label="Work email" error={errors.email ? 'Enter a valid work email' : undefined} required>
          <input type="email" {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
            className={`input ${errors.email ? 'input-error' : ''}`}
            placeholder="rajesh@acme.in" />
        </Field>
      </div>
      <Field label="Organisation" error={errors.organisation ? 'Organisation is required' : undefined} required>
        <input {...register('organisation', { required: true })}
          className={`input ${errors.organisation ? 'input-error' : ''}`}
          placeholder="Acme Technologies Pvt. Ltd." />
      </Field>

      <Button type="submit" variant="primary-light" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? 'Sending...' : (submitLabel ?? `Download ${resourceType === 'checklist' ? 'Free ' : ''}${resourceName} →`)}
      </Button>

      <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: '1.5' }}>
        By submitting, you agree to our{' '}
        <a href="/privacy-policy" style={{ color: '#2563EB', textDecoration: 'underline' }}>Privacy Policy</a>.
      </p>
    </form>
  )
}
