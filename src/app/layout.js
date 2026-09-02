import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stick & Grow | Content Engines Built On Proof, Not How-To',
    template: '%s',
  },
  description:
    'Anyone with an AI subscription can write the how-to. Only you have the proof. Stick & Grow builds proof-led content engines for founder-led B2B SaaS: customer case studies and a weekly founder-visibility system that produces trackable pipeline.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
