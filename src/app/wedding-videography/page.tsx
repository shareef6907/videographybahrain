import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Wedding Videography in Bahrain | Videography Bahrain',
  description:
    'Cinematic wedding videography in Bahrain for Manama, Riffa, Muharraq, Seef and Juffair. Multi-camera coverage, crane and gimbal work, live streaming.',
  alternates: {
    canonical: '/wedding-videography',
  },
  openGraph: {
    title: 'Wedding Videography in Bahrain | Videography Bahrain',
    description:
      'Cinematic wedding videography in Bahrain for Manama, Riffa, Muharraq, Seef and Juffair. Multi-camera coverage, crane and gimbal work, live streaming.',
    url: 'https://www.videographybahrain.com/wedding-videography',
    siteName: 'Videography Bahrain',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding videography in Bahrain by Videography Bahrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Videography in Bahrain | Videography Bahrain',
    description:
      'Cinematic wedding videography in Bahrain for Manama, Riffa, Muharraq, Seef and Juffair. Multi-camera coverage, crane and gimbal work, live streaming.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'Which parts of Bahrain do you cover for weddings?',
    a: 'We work across Bahrain. Our regular areas are Manama, Riffa, Muharraq, Seef District and Juffair, and we travel to any venue in the Kingdom for a full wedding shoot. Venues include beachfront locations, hotel ballrooms, event halls and private home weddings.',
  },
  {
    q: 'Can family abroad watch the wedding live?',
    a: 'Yes. Multi-cam live streaming is one of our services, so we can stream the ceremony and reception with multiple camera angles and clean audio for relatives and friends who cannot attend in person.',
  },
  {
    q: 'What equipment is used on a wedding shoot?',
    a: 'Our equipment list covers professional cinema cameras, premium lenses and lighting, stabilisation systems, crane, jib and gimbal rigs, and dedicated professional audio recording. That mix lets us shoot a quiet preparation sequence and a high-energy reception with the same crew.',
  },
  {
    q: 'Can we have both a full-length film and a shorter highlight?',
    a: 'Yes. Most couples want two cuts from the same day: a full-length record of the ceremony, speeches and reception, and a shorter highlight film that condenses the story. Both are cut from the same shoot, so nothing is filmed twice.',
  },
  {
    q: 'Do you handle lighting and sound for the venue as well?',
    a: 'Videography Bahrain is part of the Bahrain Nights family. Our sister company Events Bahrain handles event equipment rental, including LED screens, sound systems and lighting, so filming and venue production can be arranged through one team.',
  },
]

export default function WeddingVideographyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wedding Videography in Bahrain',
    serviceType: 'Wedding videography',
    description:
      'Cinematic wedding videography in Bahrain covering preparation, ceremony and reception with multi-camera coverage, crane and gimbal work, and live streaming options.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Videography Bahrain',
      url: 'https://www.videographybahrain.com',
      telephone: '+97339007750',
      email: 'shareef@eventsbahrain.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manama',
        addressRegion: 'Capital Governorate',
        addressCountry: 'Bahrain',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Manama' },
      { '@type': 'City', name: 'Riffa' },
      { '@type': 'City', name: 'Muharraq' },
      { '@type': 'City', name: 'Seef' },
      { '@type': 'City', name: 'Juffair' },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.videographybahrain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Wedding Videography',
        item: 'https://www.videographybahrain.com/wedding-videography',
      },
    ],
  }

  return (
    <>
      <Navbar />

      <Script id="wedding-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="wedding-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="wedding-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="relative bg-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-pink-900/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Wedding Videography</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Wedding Videography in <span className="gradient-text">Bahrain</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Cinematic wedding films made across Bahrain, from a quiet morning at the family home to
            the last song of the reception. We are videographers in Bahrain working with couples,
            families and wedding planners who want their day filmed properly rather than simply
            recorded.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">What we film on the wedding day</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A wedding day moves fast, so we plan the coverage before we arrive rather than
            reacting on the day. The day usually starts with the preparation scenes: the final
            details, the dressing, the quiet moments before the ceremony, and the first look. From
            there we follow the ceremony in full, then the formal photographs, the speeches, the
            first dance, the cutting of the cake and the reception as it opens up.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Every sequence is captured with more than one camera where it matters. A second angle
            gives you the reactions and the wide framing that a single camera cannot show at the
            same time, and it protects the film if one unit has to stop for any reason during the
            day. Close, quiet moments are shot on a stabilised rig; the reception is covered with
            a wider, more mobile setup that can move through the crowd.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Cinematic equipment for weddings</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We shoot with professional cinema cameras and a considered set of prime lenses, so the
            look stays consistent rather than changing lens by lens. Lighting is handled properly
            for the time of day, whether that is harsh midday sun on a beachfront ceremony or a
            dim reception hall that needs a soft, warm key.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Movement comes from stabilisation systems and from crane, jib and gimbal rigs. A slow
            crane move over the tables or a gliding gimbal pass through the reception gives the
            film a sense of occasion that static shots cannot. Sound is recorded separately and
            professionally, because a wedding film is only as good as the vows and speeches it can
            actually be heard in.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Where we film in Bahrain</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are based in Manama and cover the whole Kingdom. Our regular working areas are
            Manama, Riffa, Muharraq, Seef District and Juffair, and we travel to any venue in
            Bahrain for a full wedding shoot. That range matters because Bahrain weddings move
            between settings in a single day: a home in the morning, a hotel ballroom for the
            ceremony, and a beach or open-air terrace for the reception photos and the sunset
            session.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A beachside wedding has its own demands. There is no fixed light, the horizon blows
            out, and the wind decides where the audio can be placed. We plan around those
            conditions instead of fighting them, which is why beach weddings end up among the
            strongest films in our portfolio.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Live streaming for the family abroad</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Many Bahraini families are spread across the Gulf and further afield, and a wedding
            film alone is not the same as being there. We run multi-cam live streaming for the
            ceremony and the reception, with more than one camera angle and clean audio, so
            relatives can watch the day as it happens and send their messages in real time.
            Streaming and filming are shot together, so the live feed and the finished film come
            from the same crew and the same cameras.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">How we work with you</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Before the wedding we agree the timings, the venue layout, the parts of the day you
            want covered closely and the moments you would rather keep simple. If you already
            have a planner, we work with them so the filming schedule and the event schedule run
            together without anyone being pulled away from the guests.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            On the day, the crew arrives early, sets up in position and stays through the end of
            the reception. Afterwards the footage is cut into the films you asked for: a
            full-length record of the day, and a shorter highlight that carries the story of the
            wedding in a fraction of the running time. Our other services sit alongside this one
            when a project needs them, including{' '}
            <Link href="/#services" className="text-purple-400 hover:text-purple-300 underline">
              corporate video production
            </Link>
            ,{' '}
            <Link href="/#portfolio" className="text-purple-400 hover:text-purple-300 underline">
              event coverage
            </Link>{' '}
            and podcast filming.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Wedding videography questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white">{f.q}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass p-8 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white">Planning a wedding in Bahrain?</h2>
            <p className="mt-3 text-gray-300">
              Tell us the date, the venue and the timings, and we will come back with how we would
              cover the day.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+97339007750"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border border-white/15 hover:border-white/30 rounded-full transition-all duration-300"
              >
                +973 3900 7750
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Need lighting, sound or LED screens for the venue?{' '}
              <a
                href="https://www.eventsbahrain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Events Bahrain
              </a>{' '}
              handles event equipment rental as part of the Bahrain Nights family.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
