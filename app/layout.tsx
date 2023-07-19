import HeaderSection from '@/components/ui/headersection'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minimal Auth',
  description: 'Dont waste your time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderSection></HeaderSection>
      {children}
      </body>
    </html>
  )
}
