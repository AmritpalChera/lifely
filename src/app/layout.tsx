import { type Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Lifely',
    default: 'Lifely - Personal and Career Growth Hacks',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
