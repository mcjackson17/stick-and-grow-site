// Single source of truth for outbound links and shared site copy.
// Change a URL here and every CTA across the site follows.

export const CALENDLY_URL = 'https://calendly.com/dan-mcdermott/let-s-talk'
export const AUDIT_URL = 'https://audit.stickandgrow.co'

export const SITE_URL = 'https://stickandgrow.co'

// An entry with `children` renders as a dropdown in the nav.
export const NAV_LINKS = [
  {
    label: 'Services',
    children: [
      { href: '/case-study-creation', label: 'Case Studies' },
      { href: '/content-engine', label: 'Content Engine' },
    ],
  },
  { href: '/blog', label: 'Blog' },
]

// The footer lists every destination flat, with no grouping.
export const FLAT_NAV_LINKS = NAV_LINKS.flatMap(link => link.children ?? [link])
