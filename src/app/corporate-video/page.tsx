import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Corporate Video Production Bahrain | Videography Bahrain',
  description:
    'Corporate video production in Bahrain for companies in Manama, Riffa and Muharraq. Brand films, interviews, training videos and product work filmed by a local crew.',
  alternates: {
    canonical: '/corporate-video',
  },
  openGraph: {
    title: 'Corporate Video Production Bahrain | Videography Bahrain',
    description:
      'Corporate video production in Bahrain for companies in Manama, Riffa and Muharraq. Brand films, interviews, training videos and product work filmed by a local crew.',
    url: 'https://www.videographybahrain.com/corporate-video',
    siteName: 'Videography Bahrain',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate video production in Bahrain by Videography Bahrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Video Production Bahrain | Videography Bahrain',
    description:
      'Corporate video production in Bahrain for companies in Manama, Riffa and Muharraq. Brand films, interviews, training videos and product work filmed by a local crew.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What types of corporate videos do you produce in Bahrain?',
    a: 'The most common requests are brand and company films, executive interviews, explainer and training videos, product and service demonstrations, recruitment and onboarding films, conference and event coverage, and internal communications. If a film sits between two of those categories we still shoot it the same way: the brief comes first, and the format is chosen to suit where the video will actually be used.',
  },
  {
    q: 'Do you film inside our office or on our site in Bahrain?',
    a: 'Yes. A large part of corporate work is filmed where the business actually operates, which means offices in Manama, Riffa, Muharraq, Seef District and Juffair, warehouse and retail sites, and live event floors. We look at the space before we arrive so camera positions, lighting and sound are planned rather than improvised, and so a small room is not filmed in a way that hides what the room is actually like.',
  },
  {
    q: 'How long does a corporate video take to produce?',
    a: 'The filming is usually the shortest part of the process. A straightforward interview or a short brand film is shot in a single day, while a multi-location shoot with several teams, a product demonstration and interviews spread across a week of footage takes longer. The edit is where most of the time goes, because the material is cut down into the versions each audience needs.',
  },
  {
    q: 'Can you deliver different versions of the same shoot?',
    a: 'Yes, and this is the normal way corporate video works. One shoot is cut into a long version for the website or for internal use, a shorter version for social channels, and specific edits for individual teams or campaigns. Everything comes from the same footage and the same crew, so the message stays consistent across every version.',
  },
  {
    q: 'Do you handle equipment and production for corporate events as well?',
    a: 'We film corporate events as part of our event coverage, including conferences, launches and exhibitions, with multi-camera angles, clean audio and multi-cam live streaming when the audience is remote. Our sister company Events Bahrain handles the venue side of that work in Bahrain, including LED screens, sound systems and lighting, so the screens and the cameras can be planned together.',
  },
]

export default function CorporateVideoPage() {
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
    name: 'Corporate Video Production in Bahrain',
    serviceType: 'Corporate video production',
    description:
      'Corporate video production in Bahrain for companies and organisations: brand films, executive interviews, explainer and training videos, product and service films, recruitment videos and event coverage.',
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
        name: 'Corporate Video',
        item: 'https://www.videographybahrain.com/corporate-video',
      },
    ],
  }

  return (
    <>
      <Navbar />

      <Script id="corporate-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="corporate-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="corporate-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="relative bg-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-pink-900/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Corporate Video</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Corporate Video Production in <span className="gradient-text">Bahrain</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Corporate films made by videographers who work in Bahrain every week, on site in Manama,
            Riffa, Muharraq, Seef District and Juffair. We shoot the work as it actually happens,
            then cut it into films your team and your customers will actually watch.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Corporate films that answer a business question</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Corporate video is not one thing. A company film for the website, an interview with a
            founder, a training module for new staff, a demonstration of a service, a film for
            recruitment, and a highlight reel from a conference all sit in the same category but
            need very different films. We start with what the video has to achieve, who is going to
            watch it and where it will be used, and only then decide the format, the shot list and
            the length.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            That approach keeps the budget in the right place. A short interview piece needs a
            careful setup, good sound and clean editing, not a large crew for a single day. A film
            shot across several locations needs planning across those locations. The full set of
            formats we shoot is listed in our{' '}
            <Link href="/#services" className="text-purple-400 hover:text-purple-300 underline">
              services section
            </Link>{' '}
            and you can see the kind of work in the{' '}
            <Link href="/#portfolio" className="text-purple-400 hover:text-purple-300 underline">
              portfolio
            </Link>
            .
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">On-site filming across Bahrain</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Most corporate video is shot where the business operates, so we work on location rather
            than bringing everything to a studio. That means offices and meeting rooms in Manama,
            retail and warehouse sites in Riffa and Muharraq, and production spaces in Seef District
            and Juffair. We visit the space before the shoot, look at the light and the room shape,
            and plan the camera positions and sound setup in advance. That is what makes the
            difference between a film that looks like the business and one that looks like a
            template with your logo on it.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            It also changes what is practical. A working office produces honest footage of people
            doing their jobs, which is often the most persuasive material a company has. A staged
            studio scene is useful when the message is about the product rather than the people.
            Sometimes the answer is both, filmed on the same day in the same building.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Interviews, explainers and training films</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Interviews are the format companies return to most, because they put a face and a voice
            behind a business. We set up interview lighting and audio so the result is consistent
            whether the speaker sits in an office, a boardroom or a workshop, and we direct the
            session so the answers are clear rather than rehearsed.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Explainers and training films follow the same discipline. A process that is obvious to
            the person doing it is often unclear to the person watching, so we film the steps in
            the order they happen and shoot the details that make the difference: the tool being
            used, the screen being demonstrated, the part of the process everyone skips. Podcast
            filming, listed with our other services, uses the same setup for teams that publish
            regular spoken content.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Product and commercial work</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            When a company needs to show a product rather than describe it, the camera work has to
            carry the shot. We use controlled lighting, stabilised and gimbal movement for the
            moments where the product is in motion, and macro-style detail work where the finish
            or the material is the point. Advertising and commercial production is part of what we
            shoot, and the same crew and the same equipment carry the look from a brand film into a
            campaign.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Equipment and crew for corporate shoots</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Corporate work is shot with professional cinema cameras and a considered set of prime
            lenses so that the footage holds up on a large screen and on a phone. Lighting is
            planned for the room rather than left to chance, stabilisation systems keep moving
            shots steady, and crane, jib and gimbal rigs are available for the establishing moments
            that show the scale of a workplace. Audio is recorded separately and professionally,
            because a corporate video is judged on how clearly it can be heard in a meeting room
            with hard surfaces, in an office with a background hum, or on a phone speaker.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            The crew scales to the job. A single interview and a full multi-camera production are
            different builds of the same day, and the plan for which one you need comes out of the
            brief rather than a fixed package.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">How a corporate project runs</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            The first conversation is about the objective and the audience: what should change for
            the person who watches it, and where it will be published. From that we agree the
            deliverables, which might be one long film, or a long film plus short versions for
            social and for internal channels. We then prepare the shoot plan and the shot list,
            film the material, and edit it into the formats agreed.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            If your company also runs events, the two pieces of work are usually planned together.
            Our{' '}
            <Link href="/event-videography" className="text-purple-400 hover:text-purple-300 underline">
              event videography
            </Link>{' '}
            page covers conference, launch and exhibition coverage in more detail, including
            multi-cam live streaming for audiences outside Bahrain. We shoot corporate work wherever
            the business is based, so the film is made on the ground in Bahrain rather than
            assembled from stock material.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Corporate video questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white">{f.q}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass p-8 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white">Planning a corporate film in Bahrain?</h2>
            <p className="mt-3 text-gray-300">
              Tell us what the video needs to achieve, where it will be used, and where it will be
              filmed. We will come back with a plan and an honest view of what is needed to shoot
              it.
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
              Filming an event or a launch instead?{' '}
              <Link href="/event-videography" className="text-purple-400 hover:text-purple-300 underline">
                Event videography in Bahrain
              </Link>{' '}
              covers multi-camera coverage and live streaming, and our sister company{' '}
              <a
                href="https://www.eventsbahrain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Events Bahrain
              </a>{' '}
              handles equipment rental for the venue.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
