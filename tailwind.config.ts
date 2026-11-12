import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — Tailwind Design Tokens
// Visual Redesign v2.0 · August 2026
// Option B palette applied per UI/UX Visual Redesign Guidelines
// ─────────────────────────────────────────────────────────────────────────────

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      xs:  '480px',
      sm:  '480px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
    },

    extend: {
      // ── Colour system — Option B (UI/UX Redesign Guidelines) ───────────────
      colors: {
        // Core palette (new values)
        navy:     '#0F172A',   // Dark — hero, nav, headings, footer
        blue:     '#2563EB',   // Primary — links, CTAs, interactive UI
        teal:     '#06B6D4',   // Highlight/Cyan — icons, accents, highlights
        accent:   '#7C3AED',   // Purple — badges, eyebrows, gradients
        charcoal: '#1E293B',   // Dark body text
        offwhite: '#F8FAFC',   // Light section background
        red:      '#E8192C',   // CTA on light backgrounds ONLY (unchanged)
        amber:    '#F5A623',   // CTA on dark backgrounds ONLY (unchanged)

        // Tints
        'teal-light':   '#ECFEFF',   // Cyan light for callout backgrounds
        'navy-light':   '#F1F5F9',   // Light section tint
        'navy-dark':    '#020617',   // Deeper dark for hover states
        'accent-light': '#EDE9FE',   // Purple light for badges
        'blue-light':   '#EFF6FF',   // Blue light for callouts

        // Component
        'border-default': '#E2E8F0',  // Card and input borders
        'muted':          '#94A3B8',  // Placeholders, captions, meta
        'error-bg':       '#FFF5F5',
        'disabled-bg':    '#F1F5F9',

        // Semantic aliases
        'cta-light':     '#2563EB',
        'cta-dark':      '#F5A623',
        'text-body':     '#1E293B',
        'text-muted':    '#94A3B8',
        'text-on-dark':  '#FFFFFF',
        'text-heading':  '#0F172A',
        'text-link':     '#2563EB',
      },

      // ── Typography — Plus Jakarta Sans headings, Inter body ────────────────
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },

      // ── Type scale — increased per redesign guidelines ──────────────────────
      // H1: 64-72px · H2: 48-56px · H3: 32-40px · body: 18px
      fontSize: {
        'display': ['4.5rem',    { lineHeight: '1.08', letterSpacing: '-1px'  }],  // 72px
        'h1':      ['4rem',      { lineHeight: '1.10', letterSpacing: '-0.8px'}],  // 64px
        'h2':      ['3rem',      { lineHeight: '1.12', letterSpacing: '-0.5px'}],  // 48px
        'h3':      ['2.25rem',   { lineHeight: '1.18', letterSpacing: '-0.3px'}],  // 36px
        'h4':      ['1.5rem',    { lineHeight: '1.30', letterSpacing: '-0.1px'}],  // 24px
        'h5':      ['1.25rem',   { lineHeight: '1.35', letterSpacing: '0px'  }],  // 20px
        'h6':      ['1rem',      { lineHeight: '1.40', letterSpacing: '0.1px'}],  // 16px
        'body-lg': ['1.125rem',  { lineHeight: '1.70' }],  // 18px
        'body':    ['1.125rem',  { lineHeight: '1.70' }],  // 18px
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],  // 15px
        'caption': ['0.875rem',  { lineHeight: '1.60' }],  // 14px
        'label':   ['0.8125rem', { lineHeight: '1.50' }],  // 13px
        'overline':['0.75rem',   { lineHeight: '1.40' }],  // 12px
        'cta':     ['0.9375rem', { lineHeight: '1.0'  }],  // 15px
        'nav':     ['0.9375rem', { lineHeight: '1.0'  }],  // 15px
      },

      fontWeight: {
        'black':     '900',
        'extrabold': '800',
        'bold':      '700',
        'semibold':  '600',
        'medium':    '500',
        'regular':   '400',
      },

      // ── Spacing (8px system, sections 100-120px per guidelines) ────────────
      spacing: {
        'space-1':  '0.25rem',   // 4px
        'space-2':  '0.5rem',    // 8px
        'space-3':  '0.75rem',   // 12px
        'space-4':  '1rem',      // 16px
        'space-5':  '1.5rem',    // 24px
        'space-6':  '2rem',      // 32px
        'space-7':  '3rem',      // 48px
        'space-8':  '4rem',      // 64px
        'space-9':  '6rem',      // 96px
        'space-10': '8rem',      // 128px
        'nav-height':  '4.5rem', // 72px (increased from 64px)
        'page-margin': '5rem',
        'card-pad':    '2rem',   // 32px (increased per guidelines)
        'btn-x':       '1.75rem',
        'btn-y':       '0.875rem',
        'input-h':     '3.25rem', // 52px (taller inputs)
      },

      maxWidth: {
        site:  '1280px',
        prose: '720px',
      },

      // ── Border radius — buttons 14px, cards 20px ───────────────────────────
      borderRadius: {
        brand:    '8px',    // base elements
        'btn':    '14px',   // buttons (per guidelines 14-16px)
        'card':   '20px',   // cards (per guidelines 20-24px)
        'card-lg':'24px',   // larger cards
        'input':  '10px',   // form inputs
        'pill':   '9999px', // badges, pills
      },

      // ── Shadow system — consistent, not heavy ──────────────────────────────
      boxShadow: {
        'card':        '0 1px 4px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.06)',
        'card-hover':  '0 8px 40px rgba(15,23,42,0.14), 0 2px 8px rgba(15,23,42,0.06)',
        'btn':         '0 1px 4px rgba(37,99,235,0.15), 0 2px 8px rgba(37,99,235,0.08)',
        'btn-hover':   '0 4px 16px rgba(37,99,235,0.30), 0 2px 6px rgba(37,99,235,0.12)',
        'nav':         '0 1px 0 rgba(15,23,42,0.06)',
        'nav-scrolled':'0 4px 24px rgba(15,23,42,0.08)',
        'focus':       '0 0 0 3px rgba(37,99,235,0.20)',
        'input':       '0 1px 2px rgba(15,23,42,0.04)',
        'input-focus': '0 0 0 3px rgba(37,99,235,0.15)',
      },

      // ── Transition timing ──────────────────────────────────────────────────
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
