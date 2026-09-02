import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stick & Grow | Content Marketing Your Sales Team Can Actually Use',
    template: '%s',
  },
  description:
    'A content operation that reports to sales every week: what we published, who engaged, and which accounts to call. Founder POV, competitive intelligence, SEO and AEO, and customer proof, run with AI where it wins and humans where it counts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
