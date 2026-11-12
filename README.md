# ManagedFirst Technologies — Website

Authorized ManageEngine partner website. Built with Next.js 15 App Router, Tailwind CSS, and Payload CMS v3.

---

## Before You Start

You need four things set up before this project will run. Do these in order.

### 1. Neon PostgreSQL (database)
1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project — name it `managedfirst-website`
3. Select the **AWS Mumbai** region (or Singapore if Mumbai is unavailable)
4. On the project dashboard, click **Connection Details**
5. Copy the **Connection string** — it looks like: `postgresql://user:password@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`
6. Save this — you will use it as `DATABASE_URI` in step 4

### 2. Cloudinary (image storage — production only)
Not needed for local development. Payload uses local disk storage by default.

When ready to deploy to production:
1. Go to [cloudinary.com](https://cloudinary.com) and create a free account
2. Install the community adapter: `npm install payloadcms-storage-cloudinary`
3. Follow the setup comments in `src/payload.config.ts`
4. Add Cloudinary credentials to your Vercel environment variables

### 3. Google Analytics (tracking)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property for the website
3. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Save this — you will use it in step 4

### 4. Environment variables
```bash
cp .env.example .env.local
```
Open `.env.local` and fill every value. The file has instructions for each one.

**Required before the app will start:**
- `PAYLOAD_SECRET` — run `openssl rand -base64 32` to generate
- `DATABASE_URI` — from Neon (step 1)
- `NEXT_PUBLIC_SITE_URL` — `http://localhost:3000` for local development

**Optional for local development (fill before production):**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — from Google Analytics
- `CONTACT_FORM_RECIPIENT` — email that receives contact form submissions
- `NEXT_PUBLIC_BOOKING_URL` — Google Calendar appointment scheduling URL
- Cloudinary credentials — only needed when switching from local to cloud storage

---

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Payload CMS admin panel is at [http://localhost:3000/admin](http://localhost:3000/admin).
On first run, Payload will prompt you to create an admin user — enter an email and password.

---

## Project Structure

```
src/
├── app/                    ← Next.js App Router pages
│   ├── layout.tsx          ← Root layout (fonts, Analytics, metadata)
│   ├── globals.css         ← Global styles
│   ├── sitemap.ts          ← Auto-generated sitemap (all 150+ routes)
│   ├── robots.ts           ← robots.txt
│   ├── solutions/
│   │   └── [productSlug]/
│   │       └── [variantSlug]/   ← 108 programmatic SEO pages
│   │           └── page.tsx
│   └── [all other pages]   ← 48 static page stubs
│
├── collections/            ← Payload CMS content schemas
│   ├── BlogPosts.ts
│   ├── CaseStudies.ts      ← Has client approval gate
│   ├── TeamMembers.ts
│   └── Media.ts
│
├── data/                   ← Static data files
│   ├── navigation.ts       ← Complete site navigation data
│   ├── products.ts         ← ManageEngine product metadata
│   ├── pseo-locations.ts   ← 72 Product × Location records
│   └── pseo-industries.ts  ← 36 Product × Industry records
│
├── lib/                    ← Shared utilities
│   ├── schema.ts           ← JSON-LD structured data functions
│   └── metadata.ts         ← buildMetadata() helper
│
└── payload.config.ts       ← Payload CMS configuration
```

---

## Building Components

Every page file is a **stub** with the correct URL, metadata, breadcrumbs, and schema markup already wired up. Your job is to build the component that fills the page with content.

Each page stub has a comment like this:
```tsx
{/* TODO: Build the IAM Solutions component and import it here.
    All copy for this page is in the content PDF (Batch 2). */}
```

**Workflow for each page:**
1. Open the page stub at `src/app/[path]/page.tsx`
2. Read the corresponding batch PDF for the copy and section structure
3. Build the component in `src/components/`
4. Import and render it in the page stub
5. Remove the `🚧 Developer:` warning paragraph

---

## Content Management (Payload CMS)

The Payload CMS admin panel is at `/admin`. Log in with the credentials you created on first run.

**What lives in Payload CMS:**
| Content Type | Who manages it | Notes |
|---|---|---|
| Blog posts | Founders | Write and publish without code changes |
| Case studies | Founders | Must check "Client Approved" before publishing |
| Team member profiles | Founders | Requires photo upload |
| Media | Founders | Images stored in Cloudinary |

**What does NOT live in Payload CMS:**
| Content | Where it lives |
|---|---|
| Page copy (all 45 pages) | Hardcoded in components (from content PDFs) |
| Programmatic SEO records | `src/data/pseo-locations.ts` and `src/data/pseo-industries.ts` |
| Navigation structure | `src/data/navigation.ts` |
| Product metadata | `src/data/products.ts` |

---

## Brand Tokens

When brand guidelines are confirmed, update **two files only**:

### 1. `tailwind.config.ts`
Replace all values marked `[PLACEHOLDER]` in the `brand` object at the top of the file.

### 2. `src/app/globals.css`
Replace the CSS custom property values marked `[PLACEHOLDER]`.

These two updates will propagate brand colours and fonts across the entire site.

---

## Programmatic SEO Pages

The 108 programmatic SEO pages are generated from two data files:
- `src/data/pseo-locations.ts` — 72 Product × City pages
- `src/data/pseo-industries.ts` — 36 Product × Industry pages

Both files generate page records from template functions. To add a new city or product to the pSEO programme:
1. Add the new entry to the relevant data file
2. The sitemap and static generation update automatically on the next build

The page template is at `src/app/solutions/[productSlug]/[variantSlug]/page.tsx`.
Build the location and industry page components here.

---

## Deploying to Vercel

### First deployment
1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "Add New Project"
3. Import the GitHub repository
4. In **Environment Variables**, add every variable from your `.env.local`
5. Click **Deploy**

### Subsequent deployments
Push to the `main` branch. Vercel deploys automatically.

### Environment variables to add in Vercel
Copy all variables from your `.env.local` except `NEXT_PUBLIC_SITE_URL` — for production, set this to `https://[your-actual-domain]`.

---

## Go-Live Checklist

Before pointing the domain to Vercel, confirm:

- [ ] All `[PLACEHOLDER]` values in `tailwind.config.ts` replaced with brand colours
- [ ] All `[PLACEHOLDER]` values in `globals.css` replaced with brand colours
- [ ] Founder photos uploaded (About page)
- [ ] Founder bios written and entered (About page)
- [ ] `NEXT_PUBLIC_SITE_URL` set to actual domain in Vercel environment variables
- [ ] `NEXT_PUBLIC_BOOKING_URL` set to Google Calendar booking link
- [ ] `CONTACT_FORM_RECIPIENT` set to business email address
- [ ] CIN number filled in footer and About page (replace `[CIN]` placeholder)
- [ ] Email address filled everywhere (replace `[EMAIL ADDRESS]` placeholder)
- [ ] Phone number filled everywhere (replace `[PHONE NUMBER]` placeholder)
- [ ] ManageEngine logo permission confirmed before displaying logo in trust bar
- [ ] All `🚧 Developer:` warning paragraphs removed from page stubs
- [ ] Google Search Console property created and sitemap submitted
- [ ] No `console.error` or `console.warn` output in production build

---

## Key Notes

**Programmatic pages use a single route:** Both Product × Location and Product × Industry pages share the route `/solutions/[productSlug]/[variantSlug]/page.tsx`. The page component checks which data record matches the variant slug and renders the appropriate template. City slugs and industry slugs do not overlap.

**Case study client approval gate:** The Payload CMS `CaseStudies` collection has a `clientApproved` checkbox that must be checked before a case study can be published. This is enforced in the collection's `beforeChange` hook. Never uncheck this after publishing.

**ADAudit Plus appears in two navigation columns:** IAM and SIEM both link to `/solutions/iam/adaudit-plus`. This is correct — it is one page, linked from two places.

**Domain purchase:** The domain cannot be purchased until company incorporation is complete and the CIN is received. Purchase the domain the same day the CIN arrives.
