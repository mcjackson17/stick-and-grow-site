import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stick & Grow | Turn Your Weekly Show Into Pipeline',
  description: 'We turn your founder-led weekly live show into a qualified sales pipeline. The show is the engine; the in-market account list handed to your sales team is the product. Audience growth is the byproduct.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}