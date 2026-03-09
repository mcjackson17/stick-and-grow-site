import './globals.css'

export const metadata = {
  title: 'Stick & Grow | Founder-Led Pipeline Systems',
  description: 'We extract your expertise into a repeatable system. You get the authority; your sales team gets the MQL list.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}