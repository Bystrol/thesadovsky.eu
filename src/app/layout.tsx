import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thesadovsky.eu/'),
  title: 'The Sadovsky - Promocje',
  description:
    'The Sadovsky Barbershop przygotował dla swoich klientów specjalne promocje od zaprzyjaźnionych firm, sprawdź co dla Ciebie mamy!',
  keywords: [
    'The Sadovsky',
    'barbershop',
    'promocje',
    'kosmetyki',
    'przeszczep włosów',
    'masaż',
    'cyberclub',
    'kawior',
    'przejazd motorem'
  ],
  openGraph: {
    images: '/opengraph-image.png'
  },
  creator: 'Michał Bystryk'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
