import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FUD FC',
  description: 'Site Oficial do FUD FC',
  generator: 'fudfc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
