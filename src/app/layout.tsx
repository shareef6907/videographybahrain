import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Videography Bahrain | Professional Film Production Services',
  description: 'Premium videography and filming services in Bahrain for weddings, corporate events and commercial projects. Bahrain\'s leading film production company with cinematic storytelling.',
  keywords: 'filming in Bahrain, Bahrain videographer, wedding videography Bahrain, Bahrain film production, professional videographer Bahrain, corporate video production Bahrain, event videography Bahrain, cinematic wedding videography Bahrain, video production services Bahrain, drone videography Bahrain, luxury wedding videography Bahrain',
  openGraph: {
    title: 'Videography Bahrain | Professional Film Production Services',
    description: 'Premium videography and filming services in Bahrain for weddings, corporate events and commercial projects. Bahrain\'s leading film production company.',
    url: 'https://videographybahrain-avbasvrzj-shareef-alis-projects.vercel.app',
    siteName: 'Videography Bahrain',
    locale: 'en_US',
    type: 'website',
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
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preload" as="video" href="/videos/optimized.mp4" />
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
                  "name": "Drone Videography",
                  "description": "Stunning aerial videography in Bahrain"
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