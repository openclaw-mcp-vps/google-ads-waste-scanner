import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google Ads Waste Scanner — Find Wasted Spend',
  description: 'Analyze your Google Ads account to identify low-performing keywords, audiences, and campaigns burning your budget. Built for local businesses.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3dd30fe-502b-4007-8dc9-c4a4ee1b3d0a"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
