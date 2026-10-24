import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://videographybahrain.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Videography Bahrain | Professional Film Production Services',
  description: 'Professional videography and filming services in Bahrain for weddings, corporate events and commercial projects. Cinematic storytelling, local crew.',
  keywords: 'filming in Bahrain, Bahrain videographer, wedding videography Bahrain, Bahrain film production, professional videographer Bahrain, corporate video production Bahrain, event videography Bahrain, cinematic wedding videography Bahrain, video production services Bahrain, crane and gimbal cinematography Bahrain, luxury wedding videography Bahrain',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Videography Bahrain | Professional Film Production Services',
    description: 'Professional videography and filming services in Bahrain for weddings, corporate events and commercial projects. Cinematic storytelling, local crew.',
    url: 'https://videographybahrain.com',
    siteName: 'Videography Bahrain',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Videography Bahrain | Professional Film Production Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videography Bahrain | Professional Film Production Services',
    description: 'Professional videography and filming services in Bahrain for weddings, corporate events and commercial projects. Cinematic storytelling, local crew.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: '1RhKzH3622b-WsojLWf4PSfP6mwv6ekjjNELWmL_aSU'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="1RhKzH3622b-WsojLWf4PSfP6mwv6ekjjNELWmL_aSU" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Videography Bahrain",
              "description": "Premium videography and filming services in Bahrain for weddings, corporate events and commercial projects. Bahrain's leading film production company with cinematic storytelling.",
              "url": "https://videographybahrain-avbasvrzj-shareef-alis-projects.vercel.app",
              "telephone": "+97339007750",
              "email": "shareef@eventsbahrain.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Manama",
                "addressRegion": "Capital Governorate",
                "addressCountry": "Bahrain"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.2235",
                "longitude": "50.5876"
              },
              "sameAs": [
                "https://www.instagram.com/bahrainnights",
                "https://www.facebook.com/bahrainnights"
              ],
              "priceRange": "$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Wedding Videography",
                  "description": "Cinematic wedding films capturing your special day in Bahrain"
                },
                {
                  "@type": "Service",
                  "name": "Corporate Video Production",
                  "description": "Professional corporate video production for Bahrain businesses"
                },
                {
                  "@type": "Service",
                  "name": "Event Videography",
                  "description": "Dynamic event coverage in Bahrain for conferences and special events"
                },
                {
                  "@type": "Service",
                  "name": "Crane & Gimbal Cinematography",
                  "description": "Sweeping crane, jib and stabilised gimbal camera work in Bahrain"
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 