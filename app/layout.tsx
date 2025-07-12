import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'GK.',
    template: '%s | GK.',
  },
  description: 'Ayesh Vininda | Web Developer | AI Enthusiast',
  keywords: ['Ayesh Vininda', 'Web Developer', 'AI', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Ayesh Vininda', url: 'https://ayeshgk.github.io' }],
  metadataBase: new URL('https://ayeshgk.github.io'),
  openGraph: {
    title: 'GK. — Ayesh Vininda',
    description: 'Explore the personal portfolio of Ayesh Vininda, a creative software engineer and AI enthusiast.',
    url: 'https://ayeshgk.github.io',
    siteName: 'GK.',
    images: [
      {
        url: '/og.png', // You can generate a nice social image here
        width: 1200,
        height: 630,
        alt: 'GK. by Ayesh Vininda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GK. — Ayesh Vininda',
    description: 'Web Developer & AI Enthusiast — Personal Portfolio',
    creator: '@ayeshgk', // your handle if any
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#ffffff',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
